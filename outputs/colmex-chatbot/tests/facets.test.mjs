import test from 'node:test';
import assert from 'node:assert/strict';
process.env.STATE_DB=':memory:';process.env.SESSION_SECRET='facet-test-secret-at-least-32-characters';process.env.GEMINI_API_KEY='fake-test-key';
const {facetValues,facetText,facetDirectory}=await import('../src/facets.mjs');
const {clearCache}=await import('../src/repository.mjs');
const {ask}=await import('../src/service.mjs');
const {db}=await import('../src/controls.mjs');
const originalFetch=globalThis.fetch;
test.afterEach(()=>{globalThis.fetch=originalFetch;clearCache();});
const json=x=>new Response(JSON.stringify(x),{headers:{'Content-Type':'application/json'}});
const defaultPlan={action:'facet_values',language:'en',query:'',field:'all_fields',bookId:'',metric:'count',scope:'all',limit:5,searches:[],explore:false,needsRepository:true,facetField:'publisher',facetLimit:20,facetOrder:'count'};
const names=['publisher_sim','language_sim','photographer_sim','thematic_collection_sim','new_public_field_sim'];
function setup({plan={},facets=names,items=[{value:'Publisher A',hits:40},{value:'Publisher B',hits:12}],pages,raw={},total=100}={}){
 clearCache();db.prepare("DELETE FROM counters WHERE k LIKE 'gemini:minute:%'").run();
 const calls=[];globalThis.fetch=async(url,options)=>{
  const u=new URL(url);calls.push({url:u,options});
  if(u.hostname==='generativelanguage.googleapis.com'){
   const b=JSON.parse(options.body);assert(b.generationConfig.responseSchema.properties.action,'Facet values must not be rewritten by an answer model');
   return json({candidates:[{content:{parts:[{text:JSON.stringify({...defaultPlan,...plan})}]}}]});
  }
  if(u.pathname.includes('/facet/')){
   const page=Number(u.searchParams.get('facet.page'));return json({response:{facets:{items:pages?.[page-1]??items,limit:20,offset:(page-1)*20,sort:u.searchParams.get('facet.sort'),...raw}}});
  }
  return json({response:{docs:[],pages:{total_count:total,next_page:null},facets:facets.map(name=>({name,label:name,items:[]}))}});
 };return calls;
}
test('every observed public facet can be listed, including fields outside the old filter allowlist',async()=>{
 for(const field of names){setup();const r=await facetValues({...defaultPlan,facetField:field});assert.equal(r.field,field);assert.equal(r.values[0].value,'Publisher A');assert.equal(r.complete,true);}
});
test('publisher intent uses verified facet values rather than a text query or model-generated counts',async()=>{
 const calls=setup({plan:{query:'any publisher'}});const r=await ask({message:'what publishers are in the editorial field?'},'publisher-facet');
 assert.equal(r.facetInfo.field,'publisher_sim');assert(r.text.includes('Publisher A: 40 records'));assert.equal(r.records.length,0);assert(!r.text.includes('no publishers'));assert.equal(calls.filter(c=>c.url.hostname==='generativelanguage.googleapis.com').length,1);
 for(const c of calls.filter(c=>c.url.hostname==='repositorio.colmex.mx'))assert.equal(c.url.searchParams.get('q'),'');
});
test('facet pagination preserves filters, dates, scope, ordering and visitor identity without more AI calls',async()=>{
 const pages=[Array.from({length:20},(_,i)=>({value:'P'+i,hits:100-i})),[{value:'P20',hits:20}]];
 const spec={clauses:[{field:'all_fields',value:'migración',required:true}],operator:'AND',filters:[{field:'language_sim',value:'Español'}],yearFrom:2000,yearTo:2020,sort:'relevance'};
 const calls=setup({pages,plan:{scope:'Book',searches:[spec]}});const first=await ask({message:'Publishers of books about migration in Spanish, 2000–2020'},'facet-pages');assert(first.cursor);assert.equal(first.facetInfo.complete,false);assert(first.text.includes('partial list'));
 await assert.rejects(()=>ask({message:'More',cursor:first.cursor},'other-visitor'),e=>e.code==='invalid');
 await assert.rejects(()=>ask({message:'More',cursor:first.cursor+'x'},'facet-pages'),e=>e.code==='invalid');
 const second=await ask({message:'More',cursor:first.cursor},'facet-pages');assert.equal(second.facetInfo.offset,20);assert.equal(second.facetInfo.values[0].value,'P20');assert.equal(second.facetInfo.complete,true);assert.equal(second.cursor,undefined);
 assert.equal(calls.filter(c=>c.url.hostname==='generativelanguage.googleapis.com').length,1);
 for(const {url} of calls.filter(c=>c.url.hostname==='repositorio.colmex.mx')){
  assert.equal(url.searchParams.get('q'),'migración');assert.equal(url.searchParams.get('f[language_sim][]'),'Español');assert.equal(url.searchParams.get('f[human_readable_type_sim][]'),'Book');assert.equal(url.searchParams.get('range[date_created_sim][end]'),'2020');
 }
});
test('short requested lists paginate within a catalog facet page without skipping remaining values',async()=>{
 const items=Array.from({length:8},(_,i)=>({value:'Name '+i,hits:20-i}));setup({items,plan:{facetLimit:3}});
 let r=await ask({message:'List three publisher labels'},'short-facets');const seen=[...r.facetInfo.values];assert.equal(r.facetInfo.complete,false);
 while(r.cursor){r=await ask({message:'More',cursor:r.cursor},'short-facets');seen.push(...r.facetInfo.values);}
 assert.deepEqual(seen.map(v=>v.value),items.map(v=>v.value));assert.equal(r.facetInfo.complete,true);
});
test('catalog variants and anonymous labels are preserved without identity merging',async()=>{
 const items=[{value:'Anónimo',hits:9},{value:'Instituto Lingüístico',hits:8},{value:'Instituto\u00a0Lingüístico',hits:7}];setup({items});const r=await facetValues(defaultPlan);assert.deepEqual(r.values,items);assert(facetText(r,'en').includes('without merging variants'));
});
test('empty facet pages and unavailable facets never prove absent metadata',async()=>{
 setup({items:[]});const empty=await facetValues(defaultPlan);assert.equal(empty.status,'no_values_returned');assert(facetText(empty,'en').includes('does not establish that record metadata is missing'));
 setup();const unavailable=await facetValues({...defaultPlan,facetField:'doi'});assert.equal(unavailable.status,'not_exposed');assert(facetText(unavailable,'en').includes('does not establish that the field is missing or empty'));
});
test('public facet discovery reports the live directory, not all searchable fields',async()=>{
 setup({facets:['publisher_sim','new_public_field_sim']});const r=await facetValues({...defaultPlan,facetField:''});assert.equal(r.status,'directory');assert.equal(r.directory.length,2);assert(!r.directory.some(f=>f.field==='doi'));
 assert.equal(facetDirectory([{name:'../../private'},{name:'Publisher SIM'},{name:'publisher_sim'},{name:'publisher_sim'}]).length,1);
});
test('invalid counts, ordering and page metadata fail explicitly',async()=>{
 for(const options of [{items:[{value:'P',hits:-1}]},{items:[{value:'P',hits:101}]},{items:[{value:'P',hits:1.5}]},{items:[{value:'P',hits:1},{value:'Q',hits:2}]},{items:[{value:'P',hits:1},{value:'P',hits:1}]},{raw:{offset:20}},{raw:{limit:0}},{raw:{sort:'unexpected'}}]){
  setup(options);await assert.rejects(()=>facetValues(defaultPlan),e=>e.code==='statistics');
 }
});
test('a fabricated endpoint name cannot cause a request to an unadvertised facet',async()=>{
 const calls=setup();const r=await facetValues({...defaultPlan,facetField:'../../private'});assert.equal(r.status,'not_exposed');assert(!calls.some(c=>c.url.pathname.includes('/facet/')));
});
test('facet failures retain public-catalog access protections and are not reported as empty data',async()=>{
 const calls=setup();const mocked=globalThis.fetch;globalThis.fetch=async(url,o)=>String(url).includes('/facet/')?new Response('Blocked',{status:403}):mocked(url,o);
 await assert.rejects(()=>facetValues(defaultPlan),e=>e.code==='repository_blocked');assert.equal(calls.length,1);
});
test('alphabetical requests use the catalog index order and support a non-publisher field',async()=>{
 setup({plan:{facetField:'language',facetOrder:'index'},items:[{value:'English',hits:2},{value:'Español',hits:90}]});const r=await ask({message:'List languages alphabetically'},'language-facet');assert.equal(r.facetInfo.field,'language_sim');assert.equal(r.facetInfo.sort,'index');assert.deepEqual(r.facetInfo.values.map(v=>v.hits),[2,90]);
});
test('facet output supports Spanish and French and retains catalog names and counts',async()=>{
 setup();const info=await facetValues(defaultPlan);assert(facetText(info,'es').includes('Publisher A: 40 registros'));assert(facetText(info,'fr').includes('Publisher A: 40 notices'));
});
test('multiple searches are rejected rather than silently dropping facet scope constraints',async()=>{
 setup();const spec={clauses:[],operator:'AND',filters:[]};await assert.rejects(()=>facetValues({...defaultPlan,searches:[spec,spec]}),e=>e.code==='invalid_plan');
});
test('semantic facet-name resolution cannot discard the original query constraints',async()=>{
 const spec={clauses:[{field:'all_fields',value:'remesas',required:true}],operator:'AND',filters:[],yearFrom:1990,sort:'relevance'};
 const calls=setup({plan:{facetField:'Editorial',scope:'Book',searches:[spec]}}),mocked=globalThis.fetch;let planning=0;
 globalThis.fetch=async(url,o)=>{
  if(String(url).includes('generativelanguage')&&++planning===2)return json({candidates:[{content:{parts:[{text:JSON.stringify({...defaultPlan,facetField:'publisher_sim'})}]}}]});
  return mocked(url,o);
 };
 const r=await ask({message:'Editoriales de libros sobre remesas desde 1990'},'facet-resolution');assert.equal(r.facetInfo.field,'publisher_sim');assert.equal(r.facetInfo.scope,'Book');
 const endpoint=calls.find(c=>c.url.pathname.includes('/facet/')).url;assert.equal(endpoint.searchParams.get('q'),'remesas');assert.equal(endpoint.searchParams.get('range[date_created_sim][begin]'),'1990');assert.equal(endpoint.searchParams.get('f[human_readable_type_sim][]'),'Book');
});
test('additional reply languages translate interface messages without sending values or counts for rewriting',async()=>{
 setup({plan:{language:'de'}});const mocked=globalThis.fetch;let translated=false;
 globalThis.fetch=async(url,o)=>{
  if(String(url).includes('generativelanguage')){
   const body=JSON.parse(o.body);
   if(!body.generationConfig.responseSchema.properties.action){
    const input=JSON.parse(body.contents[0].parts[0].text);assert.equal(input.language,'de');assert(!JSON.stringify(input).includes('Publisher A'));assert(!JSON.stringify(input).includes('40'));translated=true;
    return json({candidates:[{content:{parts:[{text:JSON.stringify({heading:'{label}: Werte',coverage:'Letzte Seite.',note:'Katalogisierte Werte.',record:'Datensatz',records:'Datensätze'})}]}}]});
   }
  }return mocked(url,o);
 };
 const r=await ask({message:'Welche Verlage sind erfasst?'},'german-facet');assert(translated);assert.equal(r.language,'de');assert(r.text.includes('Publisher A: 40 Datensätze'));assert(!r.text.includes('registros'));
});
test('conflicting material scopes are rejected instead of overwriting an explicit filter',async()=>{
 setup();await assert.rejects(()=>facetValues({...defaultPlan,scope:'Book',searches:[{clauses:[],operator:'AND',filters:[{field:'human_readable_type_sim',value:'Thesis'}]}]}),e=>e.code==='invalid_plan');
});
