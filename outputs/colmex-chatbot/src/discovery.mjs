import {catalog} from './repository.mjs';
import {validateSpec} from './search-spec.mjs';
const groupFields=['thematic_collection_sim','member_of_collections_ssim'];
const validItem=i=>i&&typeof i.value==='string'&&i.value.trim()&&i.value.length<=200&&Number.isSafeInteger(i.hits)&&i.hits>=0;
export function groupCandidates(results){
 const candidates=new Map();
 results.forEach((r,index)=>{if(r.total<16)return;for(const field of groupFields){if(r.spec.filters.some(f=>f.field===field)||r.spec.filters.length>=4)continue;
  for(const item of r.facets.find(f=>f.name===field)?.items||[]){if(!validItem(item)||item.hits>r.total||item.hits<10||item.hits/r.total<.1&&item.hits<50)continue;
   const key=field+'\0'+item.value,c=candidates.get(key)||{field,value:item.value,label:item.value,kind:field==='thematic_collection_sim'?'thematic':'collection',score:0};c.score=Math.max(c.score,item.hits/r.total);candidates.set(key,c);
  }
 }});
 return [...candidates.values()].sort((a,b)=>b.score-a.score||a.value.localeCompare(b.value)).slice(0,3);
}
export function scopedSpec(spec,field,value){if(spec.filters.some(f=>f.field===field)||spec.filters.length>=4)return null;return validateSpec({...spec,filters:[...spec.filters,{field,value}]});}
// Keep actual membership distinct from titles or subject similarity.
function affiliations(r){return [...(r.themes||r.metadata?.thematic_collection?.values||[]).map(v=>'thematic_collection_sim\0'+v),...(r.collections||[]).map(v=>'member_of_collections_ssim\0'+v)];}
export function diverseRecords(pool,limit=8){
 const remaining=[...new Map(pool.map(r=>[r.id,r])).values()].map((r,rank)=>({r,rank})),chosen=[],groups=new Map(),types=new Map();
 while(remaining.length&&chosen.length<limit){
  let best=0,bestScore=-Infinity;
  remaining.forEach(({r,rank},index)=>{const memberships=affiliations(r),groupLoad=memberships.length?Math.max(...memberships.map(g=>groups.get(g)||0)):0;
   const score=-(groupLoad*8+(types.get(r.type)||0)*3)-rank/10;
   if(score>bestScore){bestScore=score;best=index;}
  });
  const [{r}]=remaining.splice(best,1);chosen.push(r);types.set(r.type,(types.get(r.type)||0)+1);for(const g of affiliations(r))groups.set(g,(groups.get(g)||0)+1);
 }
 return chosen;
}
async function boundedMap(items,fn){const output=Array(items.length),deadline=Date.now()+12000;let next=0;await Promise.all(Array.from({length:Math.min(3,items.length)},async()=>{while(next<items.length){const index=next++;if(Date.now()>deadline){output[index]={failed:true};continue;}try{output[index]={value:await fn(items[index])};}catch{output[index]={failed:true};}}}));return output;}
export async function discoveryOverview(results){
 const candidates=groupCandidates(results),tasks=results.map((r,index)=>({kind:'pool',spec:r.spec,index}));
 for(const group of candidates)results.forEach((r,index)=>{const spec=scopedSpec(r.spec,group.field,group.value);if(spec)tasks.push({kind:'group',group,spec,index});});
 const seenTypes=new Set(results.flatMap(r=>r.records.map(b=>b.type)));
 for(const result of results){const missing=(result.facets.find(f=>f.name==='resource_type_sim')?.items||[]).filter(i=>validItem(i)&&i.hits>0&&!seenTypes.has(i.value)).slice(0,3);for(const item of missing){const spec=scopedSpec(result.spec,'resource_type_sim',item.value);if(spec)tasks.push({kind:'type',spec});}}
 const fetched=await boundedMap(tasks,t=>catalog('',{spec:t.spec,perPage:t.kind==='pool'?30:5}));
 let pool=results.flatMap(r=>r.records),partial=false;const grouped=new Map();
 fetched.forEach((entry,index)=>{const t=tasks[index];if(entry.failed){partial=true;return;}const d=entry.value;pool.push(...d.records);if(t.kind==='group'){
  const key=t.group.field+'\0'+t.group.value,g=grouped.get(key)||{label:t.group.label,kind:t.group.kind,field:t.group.field,value:t.group.value,counts:[],specs:[]};g.counts.push({searchIndex:t.index+1,total:d.total,source:d.source});g.specs.push(t.spec);grouped.set(key,g);
 }});
 const groups=[...grouped.values()].filter(g=>g.counts.some(c=>c.total>0)).map(g=>({...g,total:results.length===1?g.counts[0].total:null}));
 const types=new Map();for(const r of results)for(const item of r.facets.find(f=>f.name==='resource_type_sim')?.items||[]){if(validItem(item)&&item.hits>0&&item.hits<=r.total)types.set(item.value,{label:item.value,total:results.length===1?item.hits:null});}
 return {records:diverseRecords(pool),groups,types:[...types.values()].slice(0,8),sampled: new Set(pool.map(r=>r.id)).size,partial,scope:'Verified counts within the original queries; facets may be truncated and groups overlap. Representative records from bounded retrieval, not an exhaustive inventory.'};
}
