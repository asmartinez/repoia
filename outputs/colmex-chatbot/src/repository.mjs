import {AppError} from './controls.mjs';
import {compileSpec} from './search-spec.mjs';
import {fieldDefinitions} from './knowledge.mjs';
const ROOT='https://repositorio.colmex.mx';
const routes={Book:'books',BookChapter:'book_chapters',Thesis:'theses',Article:'articles',ArchivalDocument:'archival_documents',Audio:'audios',Video:'videos',Map:'maps',Photography:'photographies',ResearchData:'research_data',GenericWork:'generic_works',Journal:'journals',PressRelease:'press_releases',Presentation:'presentations',Amparo:'amparos',Fact:'facts',Judgment:'judgments',JurisprudentialThesis:'jurisprudential_theses',LegalCase:'legal_cases',Legislation:'legislations',Recomendation:'recomendations',Request:'requests',Resolution:'resolutions'};
function recordLink(d){const model=list(d,'has_model_ssim')[0],id=encodeURIComponent(d.id);if(model==='Collection')return `${ROOT}/collections/${id}`;if(routes[model])return `${ROOT}/concern/${routes[model]}/${id}`;return `${ROOT}/catalog?${new URLSearchParams({q:list(d,'title_tesim')[0]||d.id,search_field:'title'})}`;}

const cache=new Map();let blockedUntil=0;
const list=(d,k)=>Array.isArray(d[k])?d[k].filter(x=>typeof x==='string').slice(0,12).map(x=>x.slice(0,2000)):[];
export function normalizeRecord(d){
 if(typeof d.id!=='string'||!d.id||d.id.length>100)throw new AppError('repository');
 const a=k=>list(d,k);
 const record={id:d.id,type:a('resource_type_tesim')[0]||a('human_readable_type_tesim')[0]||'Material',title:a('title_tesim')[0]||'Sin título',creators:a('creator_tesim').length?a('creator_tesim'):a('has_creator_tesim'),year:a('date_created_tesim')[0]||a('date_of_manifestation_tesim')[0]||'',publisher:a('publisher_tesim'),language:a('language_tesim'),extent:a('extension_tesim')[0]||'',edition:a('edition_tesim'),subject:a('subject_tesim'),geography:a('geographic_coverage_tesim'),description:a('description_tesim'),contents:a('table_of_contents_tesim'),isbn:a('isbn_tesim'),collections:a('member_of_collections_ssim'),themes:a('thematic_collection_sim').length?a('thematic_collection_sim'):a('thematic_collection_tesim'),access:a('item_access_restrictions_tesim'),link:recordLink(d)};
 record.metadata={};let budget=3500;for(const [name,f] of fieldDefinitions){if(['label','relative_path','import_url','depositor','date_uploaded','date_modified'].includes(name))continue;const values=a(name+'_tesim');if(!values.length)continue;const value=values.slice(0,4).map(v=>v.slice(0,400));const size=JSON.stringify(value).length;if(size>budget){record.metadataTruncated=true;continue;}budget-=size;record.metadata[name]={label:f.label||name,values:value,ambiguity:f.ambiguity||null};}
 if(JSON.stringify(record).length>12000){
  for(const [k,v] of Object.entries(record))if(Array.isArray(v))record[k]=v.slice(0,4).map(x=>x.slice(0,['description','contents'].includes(k)?1000:250));
  record.metadataTruncated=true;
 }return record;
}
export async function catalog(query='',{page=1,field='all_fields',scope='all',perPage=5,spec}={}){
 if(typeof query!=='string'||query.length>300||!Number.isInteger(page)||page<1||page>1000||![5,30,100].includes(perPage)||(!spec&&!['title','all_fields'].includes(field)))throw new AppError('invalid',400);
 const params=spec?compileSpec(spec):new URLSearchParams({q:query,search_field:field});params.set('page',String(page));params.set('per_page',String(perPage));if(scope!=='all')params.set('f[human_readable_type_sim][]',scope);
 const url=`${ROOT}/catalog.json?${params}`,cached=cache.get(url);if(cached&&cached.expires>Date.now())return cached.data;
 if(Date.now()<blockedUntil)throw new AppError('repository_blocked');
 let response;
 for(let attempt=0;attempt<2;attempt++){
  try{response=await fetch(url,{headers:{Accept:'application/json','User-Agent':'ColmexRepositoryChatbot/1.0 (public-catalog)'},redirect:'error',signal:AbortSignal.timeout(12000)});}catch{if(attempt===0)continue;throw new AppError('repository');}
  if([401,403,429].includes(response.status)){blockedUntil=Date.now()+60000;throw new AppError('repository_blocked');}
  if(response.ok)break;if(response.status>=500&&attempt===0)continue;throw new AppError('repository');
 }
 if(!response.headers.get('content-type')?.includes('application/json')){blockedUntil=Date.now()+60000;throw new AppError('repository_blocked');}
 const raw=await response.text();if(raw.length>(perPage===100?12000000:2000000))throw new AppError('repository');
 let d;try{d=JSON.parse(raw).response;}catch{throw new AppError('repository');}
 if(!Array.isArray(d?.docs)||!Number.isSafeInteger(d?.pages?.total_count)||d.pages.total_count<0)throw new AppError('repository');
 const next=d.pages.next_page;if(next!==null&&next!==undefined&&(!Number.isInteger(next)||next<=page))throw new AppError('repository');
 const data={records:d.docs.map(normalizeRecord),total:d.pages.total_count,nextPage:next||null,query,field,scope,page,spec,source:`${ROOT}/catalog?${params}`,facets:Array.isArray(d.facets)?d.facets:[]};
 if(cache.size>=100)cache.delete(cache.keys().next().value);cache.set(url,{expires:Date.now()+60000,data});return data;
}
export async function statistics(plan){
 const d=await catalog('',{scope:plan.scope}),label={all:'documentos',Book:'libros',Thesis:'tesis',Article:'artículos','Archival Document':'documentos archivísticos','Press Release':'notas de prensa',Video:'videos'}[plan.scope]||plan.scope;
 const p=new URLSearchParams();if(plan.scope!=='all')p.set('f[human_readable_type_sim][]',plan.scope);
 let text;
 if(plan.metric==='count')text=`El repositorio contiene ${d.total.toLocaleString('es-MX')} registros públicos de ${label}. Este conteo describe registros depositados y visibles, no toda la producción histórica de El Colegio de México ni títulos únicos.`;
 else{
  const items=d.facets.find(f=>f.name===(plan.metric==='authors'?'creator_sim':'subject_sim'))?.items;
  if(!Array.isArray(items)||!items.length||items.some(i=>typeof i.value!=='string'||!Number.isSafeInteger(i.hits)||i.hits<0)||items.some((i,n)=>n&&i.hits>items[n-1].hits))throw new AppError('statistics');
  const anonymous=items.find(i=>i.value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()==='anonimo');
  const ranked=plan.metric==='authors'?items.filter(i=>!['anónimo','sin autor','autor desconocido'].includes(i.value.toLowerCase())):items;
  text=`Entradas de ${plan.metric==='authors'?'autoría con nombre':'tema'} con más registros públicos ${plan.scope==='all'?'en todo el repositorio':`de ${label}`} según las facetas del catálogo:\n\n${ranked.slice(0,plan.limit).map((i,n)=>`${n+1}. ${i.value}: ${i.hits.toLocaleString('es-MX')} registros`).join('\n')}\n\nSe cuentan etiquetas tal como están catalogadas, sin reunir variantes ni sinónimos. Un registro puede tener varias etiquetas. La frecuencia no indica importancia ni cuenta títulos únicos.${plan.metric==='authors'&&anonymous?` “Anónimo” agrupa ${anonymous.hits} registros, no una persona.`:''}`;
 }
 return {text,total:d.total,source:`${ROOT}/catalog${p.size?'?'+p:''}`,scope:plan.scope,metric:plan.metric,retrievedAt:new Date().toISOString()};
}
export function clearCache(){cache.clear();blockedUntil=0;}
