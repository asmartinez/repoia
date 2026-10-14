import {planSearch,answerFromRecords} from './gemini.mjs';
import {catalog,statistics} from './repository.mjs';
import {discoveryOverview} from './discovery.mjs';
import {validateSpec,relaxedSpec} from './search-spec.mjs';
import {AppError,known,remember,fingerprint} from './controls.mjs';
export function validateRequest(d){
 if(!d||typeof d.message!=='string'||!d.message.trim()||d.message.length>1000||d.selectedId!==undefined&&(typeof d.selectedId!=='string'||!/^[a-zA-Z0-9_-]{1,100}$/.test(d.selectedId)))throw new AppError('invalid',400);
 if(d.history!==undefined&&(!Array.isArray(d.history)||d.history.length>8||d.history.some(h=>!h||!['user','assistant'].includes(h.role)||typeof h.text!=='string'||h.text.length>2000)))throw new AppError('invalid',400);
 if(d.preferredLanguage!==undefined&&(typeof d.preferredLanguage!=='string'||!/^[a-z]{2,3}(-[A-Za-z0-9]{2,8})*$/.test(d.preferredLanguage)))throw new AppError('invalid',400);
 if(d.groupToken!==undefined&&(typeof d.groupToken!=='string'||d.groupToken.length>24000))throw new AppError('invalid',400);
 if(d.cursor!==undefined&&(typeof d.cursor!=='string'||d.cursor.length>24000))throw new AppError('invalid',400);
 return {message:d.message.trim(),history:d.history||[],preferredLanguage:d.preferredLanguage};
}
function sealRecord(r,session){const expires=Date.now()+3600000;return {...r,contextToken:expires+'.'+fingerprint('record:'+session+':'+expires+':'+JSON.stringify(r))};}
function verifiedSelection(d,session){if(!d.selectedRecord)return null;const {contextToken,...r}=d.selectedRecord;if(typeof contextToken!=='string'||JSON.stringify(r).length>16000)return null;const [expires,signature]=contextToken.split('.');if(Number(expires)<Date.now()||!Number.isFinite(Number(expires))||r.id!==d.selectedId||signature!==fingerprint('record:'+session+':'+expires+':'+JSON.stringify(r)))throw new AppError('invalid',400);return r;}
const unique=records=>[...new Map(records.map(r=>[r.id,r])).values()];
function sign(p,session,kind){const payload=Buffer.from(JSON.stringify(p)).toString('base64url');return payload+'.'+fingerprint(kind+':'+session+':'+payload);}
function unpack(token,session,kind){
 if(typeof token!=='string'||token.length>24000)throw new AppError('invalid',400);
 const [payload,sig,...extra]=token.split('.');if(extra.length||sig!==fingerprint(kind+':'+session+':'+payload))throw new AppError('invalid',400);
 let p;try{p=JSON.parse(Buffer.from(payload,'base64url').toString());}catch{throw new AppError('invalid',400);}
 if(!Number.isFinite(p.expires)||p.expires<Date.now())throw new AppError('context_expired',409);return p;
}
function tokenFor(queue,session,kind,extras={}){return queue.length?sign({...extras,queue,expires:Date.now()+(kind==='results'?3600000:600000)},session,kind):undefined;}
async function runPage(item,perPage=5){return catalog(item.query||'',{field:item.field||'all_fields',spec:item.spec,page:item.page,perPage});}
async function nextBatch(p,perPage){
 const queue=[...p.queue],item=queue.shift(),d=await runPage(item,perPage);if(d.nextPage&&d.nextPage<=1000)queue.unshift({...item,page:d.nextPage});
 return {records:d.records.filter(r=>r.id!==p.excludeId),queue,total:p.total,query:p.query,searchEvidence:p.searchEvidence,language:p.language};
}
function citations(answer,records){return (answer.citationIds||[]).map((id,i)=>{const r=records.find(r=>r.id===id);return r?{number:i+1,id,title:r.title,link:r.link}:null;}).filter(Boolean);}
export async function ask(d,session){
 const input=validateRequest(d),available=known(session),selected=verifiedSelection(d,session)||available.find(b=>b.id===d.selectedId)||null;
 const books=[];let contextSize=0;for(const b of available){const size=JSON.stringify(b).length;if(contextSize+size<=24000){books.push(b);contextSize+=size;}}
 if(d.follow===true&&d.selectedId&&!selected)throw new AppError('context_expired',409);
 const key=process.env.GEMINI_API_KEY,model=process.env.GEMINI_MODEL||'gemini-2.5-flash';
 if(d.cursor){
  const p=unpack(d.cursor,session,'cursor');
  // Accept cursors from the preceding version until they expire.
  if(!p.queue)p.queue=[{query:p.query,field:p.field,page:p.page}];
  const r=await nextBatch(p,5);remember(session,r.records);
  const a=await answerFromRecords(key,model,{...input,books:r.records,selected:null,total:r.total,action:'search',language:p.language,searchEvidence:r.searchEvidence});
  return {text:a.text,explanations:a.explanations,records:r.records.map(r=>sealRecord(r,session)),total:r.total,language:p.language,cursor:tokenFor(r.queue,session,'cursor',{...p,queue:undefined})};
 }
 if(selected&&!books.some(b=>b.id===selected.id))books.unshift(selected);
 let groupSelection;
 if(d.groupToken){groupSelection=unpack(d.groupToken,session,'group');input.message=groupSelection.question+'\nGrupo elegido: '+groupSelection.label;}
 const plan=groupSelection?{action:'search',searches:groupSelection.specs.map(validateSpec),query:'',field:'all_fields',bookId:'',language:groupSelection.language,explore:false}:await planSearch(key,model,{...input,selected,books});
 if(plan.action==='repository_stats'){
  const stat=await statistics(plan);let text=stat.text;
  if(!plan.language.startsWith('es'))text=(await answerFromRecords(key,model,{...input,action:plan.action,books:[],selected:null,language:plan.language,evidence:stat.text})).text;
  return {...stat,text,records:[],language:plan.language};
 }
 const target=plan.bookId?books.find(b=>b.id===plan.bookId):selected;
 if(['about','metadata','similar'].includes(plan.action)&&!target)throw new AppError('context_expired',409);
 let discovery;let records=[],searchEvidence=[],queue=[],exportQueue=[],total,query,searches=plan.searches||[];
 if(['search','similar','synthesis'].includes(plan.action)){
  if(!searches.length&&plan.query.trim())searches=[validateSpec({clauses:[{field:plan.field,value:plan.query,required:true}],operator:'AND'})];
  if(!searches.length&&plan.action!=='synthesis')throw new AppError('invalid_plan');
  const gathered=await Promise.all(searches.map(async initial=>{
   let spec=initial,result=await catalog('',{spec}),fallback=null;
   const relaxed=relaxedSpec(spec);
   if(result.total===0&&relaxed){spec=relaxed;fallback='Retirados términos inferidos, conservados requisitos explícitos, filtros y rango';result=await catalog('',{spec});}
   return {initial,spec,result,fallback};
  }));
  for(const {initial,spec,result,fallback} of gathered){
   const item={spec,page:1};exportQueue.push(item);if(result.nextPage)queue.push({...item,page:result.nextPage});
   records.push(...result.records);searchEvidence.push({spec,total:result.total,source:result.source,fallback,initialSpec:fallback?initial:undefined});
  }
  records=unique(records).filter(r=>r.id!== (plan.action==='similar'?target.id:undefined));
  if(!searches.length)records=books;
  total=plan.action==='similar'?null:searchEvidence.length===1?searchEvidence[0].total:searchEvidence.length?null:undefined;
  query=searchEvidence.map(e=>e.spec.clauses.map(c=>c.value).join(' '+e.spec.operator+' ')).join(' | ');
  if(plan.explore===true&&['search','synthesis'].includes(plan.action)&&searches.every(s=>!s.clauses.some(c=>['title','creator','identifier','handle','isbn','issn','doi'].includes(c.field))&&!s.filters.some(f=>['thematic_collection_sim','member_of_collections_ssim'].includes(f.field)))&&gathered.some(g=>g.result.total>15)){
   discovery=await discoveryOverview(gathered.map(g=>g.result));records=discovery.records;
  }
  remember(session,records);
 }
 const answer=await answerFromRecords(key,model,{...input,selected:target||null,books:records,total,searches:searchEvidence.map(e=>e.spec),searchEvidence,discovery:discovery?{groups:discovery.groups.map(({specs,...g})=>g),types:discovery.types,sampled:discovery.sampled,partial:discovery.partial,scope:discovery.scope}:undefined,action:plan.action,language:plan.language});
 if(plan.action==='synthesis'&&records.length){const sampleCount=answer.evidenceCount??records.length;const note=plan.language.startsWith('en')?`This interpretation uses a sample of ${sampleCount} retrieved public catalog records, not the full repository or document texts.`:plan.language.startsWith('fr')?`Cette interprétation repose sur un échantillon de ${sampleCount} notices publiques récupérées, et non sur tout le dépôt ou les textes intégraux.`:`Esta interpretación se basa en una muestra de ${sampleCount} registros públicos recuperados, no en todo el repositorio ni en los textos completos.`;answer.text+='\n\n'+note;}
 if(discovery)discovery={...discovery,records:undefined,groups:discovery.groups.map(({specs,...g})=>({...g,token:sign({specs,question:groupSelection?.question||input.message,label:g.label,language:plan.language,expires:Date.now()+3600000},session,'group')}))};
 const ordered=(discovery?records.map(r=>r.id):answer.recordIds).map(id=>records.find(b=>b.id===id)).filter(Boolean);
 const extras={total,query,excludeId:plan.action==='similar'?target.id:undefined,language:plan.language,searchEvidence:searchEvidence.map(e=>({total:e.total,source:e.source,fallback:e.fallback}))};
 return {text:answer.text,discovery,explanations:answer.explanations,citations:citations(answer,records),records:[...ordered,...records.filter(r=>!ordered.some(o=>o.id===r.id))].map(r=>sealRecord(r,session)),detail:['about','metadata'].includes(plan.action)?sealRecord(target,session):undefined,metadata:plan.action==='metadata',language:plan.language,selectedId:['search','synthesis'].includes(plan.action)?records[0]?.id:target?.id,total,query,searchEvidence,resultsToken:tokenFor(exportQueue,session,'results',extras),cursor:tokenFor(queue,session,'cursor',extras),retrievedAt:new Date().toISOString()};
}
export async function resultBatch(token,session){
 const p=unpack(token,session,'results');if(!p.queue)p.queue=[{query:p.query,field:p.field,page:p.page}];
 const r=await nextBatch(p,100);remember(session,r.records);
 return {records:r.records.map(r=>sealRecord(r,session)),total:r.total,query:r.query,retrievedAt:new Date().toISOString(),nextToken:tokenFor(r.queue,session,'results',{...p,queue:undefined})||null};
}
