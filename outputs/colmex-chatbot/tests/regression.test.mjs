import test from 'node:test';
import assert from 'node:assert/strict';
process.env.STATE_DB=':memory:';process.env.SESSION_SECRET='test-session-secret-at-least-32-characters';process.env.GEMINI_API_KEY='fake-test-key';process.env.NO_LISTEN='1';process.env.PUBLIC_ORIGIN='http://127.0.0.1:8080';
const {reserve,db,known}=await import('../src/controls.mjs');
const {catalog,statistics,clearCache,normalizeRecord}=await import('../src/repository.mjs');
const {ask,validateRequest,resultBatch}=await import('../src/service.mjs');
const {server}=await import('../src/server.mjs');
const originalFetch=globalThis.fetch;
const doc=(id,type,title)=>({id,has_model_ssim:[type],human_readable_type_tesim:[type],title_tesim:[title],creator_tesim:['Author'],date_created_tesim:['1994']});
const fixture={response:{docs:[doc('a1','Book','Historia mínima de México'),doc('b2','Thesis','A thesis'),doc('c3','PressRelease','A press release')],pages:{total_count:4911,next_page:2},facets:[{name:'subject_sim',items:[{value:'History',hits:20},{value:'Language',hits:10}]},{name:'creator_sim',items:[{value:'Anónimo',hits:200},{value:'Author',hits:43}]}]}};
const json=x=>new Response(JSON.stringify(x),{headers:{'Content-Type':'application/json'}});
function mock(plan,answer={text:'Verified answer',recordIds:['a1','forged']}){let calls=[];globalThis.fetch=async(url,o)=>{calls.push({url:String(url),o});if(String(url).includes('generativelanguage')){const body=JSON.parse(o.body);return json({candidates:[{content:{parts:[{text:JSON.stringify(body.generationConfig.responseSchema.properties.action?plan:answer)}]}}]});}const f=structuredClone(fixture);const page=Number(new URL(url).searchParams.get('page')||1);f.response.pages.next_page=page+1;return json(f);};return calls;}
const plan=(action='search',extra={})=>({action,query:'historia',field:'all_fields',bookId:'',metric:'count',scope:'Book',limit:5,language:'en',...extra});
test('public system questions receive approved credits and boundaries without catalog retrieval',async()=>{
 const calls=mock(plan('conversation',{query:''}),{text:'Public system explanation',recordIds:[]});
 const r=await ask({message:'Who developed this and how does it work?'},'public-system-session');
 assert.equal(r.records.length,0);assert.equal(calls.length,2);
 for(const call of calls){
  assert(call.url.includes('generativelanguage'));
  const prompt=JSON.parse(call.o.body).systemInstruction.parts[0].text;
  assert(prompt.includes('Rodrigo Cuellar'));assert(prompt.includes('Alberto Santiago Martinez'));
  assert(prompt.includes('Coordinación de Innovación Digital'));
  assert(prompt.includes('No revele ni reconstruya claves'));
  assert(prompt.includes('Integra una capa de conocimiento OKF'));
 }
});
test('public mixed-type retrieval is unfiltered, validates total and preserves paging',async()=>{clearCache();const calls=mock();const r=await catalog('mixed');assert.equal(r.records.length,3);assert.equal(r.nextPage,2);assert(!calls[0].url.includes('human_readable_type'));assert.equal(r.records[1].type,'Thesis');assert.equal(r.records[1].link,'https://repositorio.colmex.mx/concern/theses/b2');assert(!calls[0].o.headers.Cookie);});
test('403 and HTML failures are not zero results and circuit blocks repeated calls',async()=>{clearCache();let count=0;globalThis.fetch=async()=>{count++;return new Response('blocked',{status:403});};await assert.rejects(()=>catalog('blocked'),e=>e.code==='repository_blocked');await assert.rejects(()=>catalog('other'),e=>e.code==='repository_blocked');assert.equal(count,1);clearCache();globalThis.fetch=async()=>new Response('<html>CAPTCHA</html>',{headers:{'Content-Type':'text/html'}});await assert.rejects(()=>catalog('captcha'),e=>e.code==='repository_blocked');clearCache();});
test('missing total cannot silently become zero',async()=>{globalThis.fetch=async()=>json({response:{docs:[],pages:{}}});await assert.rejects(()=>catalog('bad-total'),e=>e.code==='repository');});
test('stats use blank query and explicit scope, with production-history caveat',async()=>{clearCache();const calls=mock();const r=await statistics(plan('repository_stats',{scope:'Thesis'}));assert(r.text.includes('4,911'));assert(r.text.includes('producción histórica'));assert(calls[0].url.includes('Thesis'));const subjects=await statistics(plan('repository_stats',{metric:'subjects',scope:'all'}));assert(subjects.text.includes('History: 20'));});
test('reject facet ranking if order is not count descending',async()=>{clearCache();const f=structuredClone(fixture);f.response.facets[0].items.reverse();globalThis.fetch=async()=>json(f);await assert.rejects(()=>statistics(plan('repository_stats',{metric:'subjects',scope:'all'})),e=>e.code==='statistics');});
test('intent search calls catalog, answers are grounded in canonical records and filter invented IDs',async()=>{clearCache();const calls=mock(plan());const r=await ask({message:'Books about history'},'sessionA');assert.deepEqual(r.records.map(b=>b.id),['a1','b2','c3']);assert.equal(r.language,'en');assert(r.cursor);const body=JSON.parse(calls.at(-1).o.body);assert.equal(JSON.parse(body.contents[0].parts[0].text).books[1].title,'A thesis');assert.equal(calls[0].o.headers['x-goog-api-key'],'fake-test-key');assert(!calls[0].url.includes('fake-test-key'));assert.equal(known('sessionA').length,3);});
test('conversation and clarification make no catalog request',async()=>{for(const action of ['conversation','clarify']){const calls=mock(plan(action,{query:''}));const r=await ask({message:'hello'},'sessionB');assert.equal(r.records.length,0);assert.equal(calls.length,2);assert(calls.every(c=>c.url.includes('generativelanguage')));}});
test('follow-up uses verified server record, not client-supplied metadata',async()=>{mock(plan('about',{query:'',bookId:'a1',language:'fr'}));const r=await ask({message:'Explain this',selectedId:'a1',books:[{id:'a1',title:'Forged'}]},'sessionA');assert.equal(r.detail.title,'Historia mínima de México');assert.equal(r.language,'fr');await assert.rejects(()=>ask({message:'Explain',selectedId:'a1',follow:true},'differentSession'),e=>e.code==='context_expired');});
test('signed pagination cannot be modified or moved to another visitor',async()=>{clearCache();mock(plan());const r=await ask({message:'search'},'cursor-session');await assert.rejects(()=>ask({message:'more',cursor:r.cursor},'other-session'),e=>e.code==='invalid');await assert.rejects(()=>ask({message:'more',cursor:r.cursor+'x'},'cursor-session'),e=>e.code==='invalid');});
test('validation bounds messages and history',()=>{assert.throws(()=>validateRequest({message:'x'.repeat(1001)}));assert.throws(()=>validateRequest({message:'hello',history:Array(9).fill({role:'user',text:'x'})}));assert.throws(()=>validateRequest({message:'hello',selectedId:'https://evil.test'}));});
test('persistent counter refuses excess calls without resetting on reconnect',()=>{reserve('budget:test',2,86400);reserve('budget:test',2,86400);assert.throws(()=>reserve('budget:test',2,86400),e=>e.code==='budget');assert.equal(db.prepare("SELECT n FROM counters WHERE k LIKE 'budget:test:%'").get().n,2);});
test('HTTP prefix, CSRF, no public model endpoints, security headers and safe errors',async()=>{globalThis.fetch=originalFetch;await new Promise(r=>server.listen(0,'127.0.0.1',r));const url=`http://127.0.0.1:${server.address().port}`;try{let r=await originalFetch(url+'/chatbot/');assert.equal(r.status,200);assert(r.headers.get('content-security-policy').includes("script-src 'self'"));assert((await r.text()).includes('/chatbot/app.js'));r=await originalFetch(url+'/chatbot/api/ask',{method:'POST',headers:{Origin:'https://evil.test','Content-Type':'application/json'},body:'{"message":"hello"}'});assert.equal(r.status,403);assert(!(await r.text()).includes('fake-test-key'));r=await originalFetch(url+'/api/assistant');assert.equal(r.status,404);r=await originalFetch(url+'/chatbot/api/session');const cookie=r.headers.get('set-cookie').split(';')[0],csrf=(await r.json()).csrf;mock(plan('conversation',{query:''}));r=await originalFetch(url+'/chatbot/api/ask',{method:'POST',headers:{Origin:process.env.PUBLIC_ORIGIN,Cookie:cookie,'Content-Type':'application/json','X-CSRF-Token':csrf},body:'{"message":"hello"}'});assert.equal(r.status,200);assert.equal((await r.json()).text,'Verified answer');}finally{globalThis.fetch=originalFetch;await new Promise(r=>server.close(r));}});
test('Gemini daily cap stops before sending an upstream request',async()=>{const {geminiFetch}=await import('../src/controls.mjs');db.prepare("DELETE FROM counters WHERE k LIKE 'budget:day:%'").run();process.env.GEMINI_DAILY_CALL_LIMIT='1';let calls=0;globalThis.fetch=async()=>{calls++;return json({});};try{await geminiFetch('https://generativelanguage.googleapis.com/test',{});await assert.rejects(()=>geminiFetch('https://generativelanguage.googleapis.com/test',{}),e=>e.code==='budget');assert.equal(calls,1);}finally{process.env.GEMINI_DAILY_CALL_LIMIT='500';globalThis.fetch=originalFetch;}});
test('quota counters survive separate process restarts',async()=>{const {mkdtempSync,rmSync}=await import('node:fs');const {tmpdir}=await import('node:os');const {join}=await import('node:path');const {execFileSync}=await import('node:child_process');const path=mkdtempSync(join(tmpdir(),'colmex-budget-'));const moduleUrl=new URL('../src/controls.mjs',import.meta.url).href;const env={...process.env,STATE_DB:join(path,'state.sqlite')};const code=`const {reserve}=await import(${JSON.stringify(moduleUrl)});reserve('budget:persistence',1,86400);`;try{execFileSync(process.execPath,['--input-type=module','-e',code],{env,stdio:'pipe'});assert.throws(()=>execFileSync(process.execPath,['--input-type=module','-e',code],{env,stdio:'pipe'}));}finally{rmSync(path,{recursive:true,force:true});}});
test('production startup refuses missing trusted proxy configuration',async()=>{const {execFileSync}=await import('node:child_process');const moduleUrl=new URL('../src/server.mjs',import.meta.url).href;assert.throws(()=>execFileSync(process.execPath,['--input-type=module','-e',`await import(${JSON.stringify(moduleUrl)})`],{env:{...process.env,NODE_ENV:'production',PUBLIC_ORIGIN:'https://repositorio.colmex.mx',PROXY_TOKEN:''},stdio:'pipe'}),e=>e.stderr.toString().includes('Production requires a private reverse proxy'));});

test('all-results batches are session-bound, preserve query, and do not call Gemini',async()=>{
 clearCache();mock(plan());const r=await ask({message:'history'},'all-session');assert(r.resultsToken);
 await assert.rejects(()=>resultBatch(r.resultsToken,'different-session'),e=>e.code==='invalid');
 await assert.rejects(()=>resultBatch(r.resultsToken+'x','all-session'),e=>e.code==='invalid');
 clearCache();const calls=mock();const batch=await resultBatch(r.resultsToken,'all-session');
 assert.equal(batch.records.length,3);assert(batch.nextToken);assert.equal(calls.length,1);
 const url=new URL(calls[0].url);assert.equal(url.searchParams.get('q'),'historia');assert.equal(url.searchParams.get('per_page'),'100');
 globalThis.fetch=async(url)=>{calls.push({url:String(url)});const f=structuredClone(fixture);f.response.pages.next_page=null;return json(f);};const next=await resultBatch(batch.nextToken,'all-session');assert.equal(new URL(calls.at(-1).url).searchParams.get('page'),'2');assert.equal(next.nextToken,null);
});
test('record explanations reject fabricated IDs',async()=>{
 clearCache();mock(plan(),{text:'Brief introduction',recordIds:['a1'],explanations:[{id:'a1',text:'Evidence-based description'},{id:'forged',text:'Invented description'}]});
 const r=await ask({message:'history'},'explanations-session');assert.deepEqual(r.explanations,[{id:'a1',text:'Evidence-based description'}]);
});

test('repository links use model routes, not resource labels or catalog show URLs',()=>{
 for(const [model,route] of [['Book','books'],['Thesis','theses'],['BookChapter','book_chapters'],['ArchivalDocument','archival_documents'],['Legislation','legislations'],['PressRelease','press_releases'],['ResearchData','research_data'],['Photography','photographies'],['JurisprudentialThesis','jurisprudential_theses']]){
  const r=normalizeRecord({...doc('abc123',model,'Title'),resource_type_tesim:['Custom label']});assert.equal(r.link,`https://repositorio.colmex.mx/concern/${route}/abc123`);
 }
 assert.equal(normalizeRecord(doc('abc123','Collection','Title')).link,'https://repositorio.colmex.mx/collections/abc123');
});

test('OKF inventory has 197 fields, valid source-backed concepts and documented role ambiguities',async()=>{
 const {manifest,fieldDefinitions,parseConcept,knowledgeContext}=await import('../src/knowledge.mjs');
 assert.equal(manifest.okfVersion,'0.2');assert.equal(fieldDefinitions.size,197);
 assert(fieldDefinitions.get('interviewer').ambiguity);assert(fieldDefinitions.get('interviewee').ambiguity);
 assert(fieldDefinitions.get('title').resource.includes('/blob/'));
 assert(knowledgeContext('quality of metadata').references.some(r=>r.concept==='guides/quality'));
 assert.throws(()=>parseConcept('plain text'));assert.throws(()=>parseConcept('---\n{}\n---\nbody'));
});
test('advanced compiler preserves AND fields, exact facets, year ranges and observed sorting',async()=>{
 const {compileSpec,validateSpec}=await import('../src/search-spec.mjs');
 const p=compileSpec({clauses:[{field:'creator',value:'Paz, Octavio',required:true},{field:'title',value:'historia',required:true}],operator:'AND',filters:[{field:'human_readable_type_sim',value:'Book'}],yearFrom:1950,yearTo:2000,sort:'year_asc'});
 assert.equal(p.get('creator'),'Paz, Octavio');assert.equal(p.get('title'),'historia');assert.equal(p.get('op'),'AND');assert.equal(p.get('f[human_readable_type_sim][]'),'Book');assert.equal(p.get('range[date_created_sim][begin]'),'1950');assert.equal(p.get('sort'),'date_created_sim asc');
 for(const s of [{clauses:[{field:'secret',value:'x',required:true}]},{clauses:[{field:'title',value:'{!lucene}x',required:true}]},{clauses:[],yearFrom:2020,yearTo:1900},{clauses:[],filters:[{field:'arbitrary',value:'x'}]}])assert.throws(()=>validateSpec(s));
});
test('relaxation removes inferred clauses only and preserves explicit constraints and ranges',async()=>{
 const {relaxedSpec}=await import('../src/search-spec.mjs');
 const s={clauses:[{field:'subject',value:'migración',required:true},{field:'all_fields',value:'remesas',required:false}],operator:'AND',filters:[{field:'human_readable_type_sim',value:'Thesis'}],yearFrom:2000,yearTo:2020};
 const r=relaxedSpec(s);assert.equal(r.clauses.length,1);assert.equal(r.clauses[0].value,'migración');assert.deepEqual(r.filters,s.filters);assert.equal(r.yearFrom,2000);
 assert.equal(relaxedSpec({...s,clauses:s.clauses.map(c=>({...c,required:true}))}),null);
 assert.equal(relaxedSpec({...s,operator:'OR'}),null);
});
test('advanced constraints survive more-results and every export batch without replanning',async()=>{
 clearCache();const spec={clauses:[{field:'creator',value:'Paz, Octavio',required:true}],operator:'AND',filters:[{field:'human_readable_type_sim',value:'Book'}],yearFrom:1950,yearTo:2000,sort:'year_asc'};
 const calls=mock(plan('search',{searches:[spec]}));const r=await ask({message:'Obras de Octavio Paz, libros de 1950 a 2000'},'advanced-session');
 await ask({message:'more',cursor:r.cursor},'advanced-session');clearCache();await resultBatch(r.resultsToken,'advanced-session');
 const queries=calls.filter(c=>!c.url.includes('generativelanguage')).map(c=>new URL(c.url).searchParams);
 assert(queries.length>=3);for(const p of queries){assert.equal(p.get('creator'),'Paz, Octavio');assert.equal(p.get('range[date_created_sim][end]'),'2000');assert.equal(p.get('f[human_readable_type_sim][]'),'Book');assert.equal(p.get('sort'),'date_created_sim asc');}
});
test('combined synthesis deduplicates records, never sums totals and rejects forged citations',async()=>{
 clearCache();const specs=['historia','lengua'].map(value=>({clauses:[{field:'all_fields',value,required:true}],operator:'AND',filters:[],sort:'relevance'}));
 mock(plan('synthesis',{searches:specs}),{text:'Supported comparison [1]',recordIds:['a1'],explanations:[],citationIds:['a1','forged']});
 const r=await ask({message:'Compare these areas'},'union-session');assert.equal(r.total,null);assert.equal(r.records.length,3);assert.equal(r.searchEvidence.length,2);assert.deepEqual(r.citations.map(c=>c.id),['a1']);
 clearCache();globalThis.fetch=async()=>{const f=structuredClone(fixture);f.response.pages.next_page=null;return json(f);};const first=await resultBatch(r.resultsToken,'union-session');assert(first.nextToken);const second=await resultBatch(first.nextToken,'union-session');assert.equal(second.nextToken,null);assert.equal(second.total,null);
});
test('signed record context remains usable after recent-record eviction and rejects tampering',async()=>{
 clearCache();mock(plan());const r=await ask({message:'history'},'proof-session');const record=r.records[0];db.prepare('DELETE FROM records WHERE session=?').run('proof-session');
 mock(plan('similar',{bookId:record.id}));const follow=await ask({message:'Find related materials',follow:true,selectedId:record.id,selectedRecord:record},'proof-session');assert(!follow.records.some(r=>r.id===record.id));
 await assert.rejects(()=>ask({message:'Find related',follow:true,selectedId:record.id,selectedRecord:{...record,title:'Forged'}},'proof-session'),e=>e.code==='invalid');
 await assert.rejects(()=>ask({message:'Find related',follow:true,selectedId:record.id,selectedRecord:record},'other-proof-session'),e=>e.code==='invalid');
});

test('expanded public metadata exposes descriptive roles but excludes operational properties',()=>{
 const r=normalizeRecord({...doc('safe','Thesis','A thesis'),director_tesim:['Supervisor'],depositor_tesim:['operator@example.test'],relative_path_tesim:['private/path'],import_url_tesim:['https://private.example.test'],interviewer_tesim:['Agent']});
 assert.deepEqual(r.metadata.director.values,['Supervisor']);assert(r.metadata.interviewer.ambiguity);
 for(const key of ['depositor','relative_path','import_url'])assert(!r.metadata[key]);
});

test('discovery uses verified groups, diversified examples and scoped visitor-bound exploration',async()=>{
 db.prepare("DELETE FROM counters WHERE k LIKE 'gemini:minute:%'").run();clearCache();const spec={clauses:[{field:'all_fields',value:'indígenas',required:true}],operator:'AND',filters:[{field:'language_sim',value:'Español'}],yearFrom:1900,yearTo:2025,sort:'relevance'};
 const broadFixture=structuredClone(fixture);broadFixture.response.pages.total_count=100;
 broadFixture.response.docs=Array.from({length:8},(_,i)=>({...doc('group'+i,'Book','Cartilla '+i),resource_type_tesim:['Libro'],thematic_collection_tesim:['Cartillas']}));
 broadFixture.response.docs.push({...doc('thesisA','Thesis','Study'),resource_type_tesim:['Tesis de Doctorado'],thematic_collection_tesim:['Investigación']});
 broadFixture.response.facets.push({name:'thematic_collection_sim',items:[{value:'Cartillas',label:'Cartillas',hits:80},{value:'Investigación',label:'Investigación',hits:20}]},{name:'resource_type_sim',items:[{value:'Libro',hits:80},{value:'Tesis de Doctorado',hits:20}]});
 const calls=[];globalThis.fetch=async(url,o)=>{calls.push(String(url));if(String(url).includes('generativelanguage')){const b=JSON.parse(o.body),p=b.generationConfig.responseSchema.properties.action?plan('search',{explore:true,searches:[spec]}):{text:'Overview',recordIds:['group0'],explanations:[],citationIds:[]};return json({candidates:[{content:{parts:[{text:JSON.stringify(p)}]}}]});}
 const p=new URL(url).searchParams,group=p.get('f[thematic_collection_sim][]');const f=structuredClone(broadFixture);if(group){f.response.pages.total_count=group==='Cartillas'?80:20;f.response.docs=f.response.docs.filter(r=>r.thematic_collection_tesim[0]===group);}return json(f);};
 const result=await ask({message:'What is available about indigenous peoples?'},'discovery-session');
 assert.equal(result.discovery.groups.length,2);assert.equal(result.discovery.groups[0].total,80);assert(result.records.slice(0,2).some(r=>r.id==='thesisA'));assert.equal(result.records[0].id,'group0');assert(result.resultsToken);
 const group=result.discovery.groups[0];const before=calls.length;
 await assert.rejects(()=>ask({message:'Explore',groupToken:group.token},'other-discovery-session'),e=>e.code==='invalid');assert.equal(calls.length,before);
 await assert.rejects(()=>ask({message:'Explore',groupToken:group.token+'x'},'discovery-session'),e=>e.code==='invalid');
 const scoped=await ask({message:'Explore',groupToken:group.token},'discovery-session');assert.equal(scoped.total,80);assert.equal(scoped.discovery,undefined);
 const requests=calls.slice(before).filter(url=>!url.includes('generativelanguage'));for(const url of requests){const p=new URL(url).searchParams;assert.equal(p.get('q'),'indígenas');assert.equal(p.get('f[thematic_collection_sim][]'),'Cartillas');assert.equal(p.get('f[language_sim][]'),'Español');assert.equal(p.get('range[date_created_sim][end]'),'2025');}
 clearCache();await resultBatch(scoped.resultsToken,'discovery-session');const exported=new URL(calls.at(-1)).searchParams;assert.equal(exported.get('f[thematic_collection_sim][]'),'Cartillas');assert.equal(exported.get('q'),'indígenas');
});
test('diversification respects real membership, overlap and deduplicates IDs',async()=>{
 const {diverseRecords,groupCandidates,scopedSpec}=await import('../src/discovery.mjs');
 const pool=[...Array.from({length:10},(_,i)=>({id:'a'+i,type:'Libro',themes:['Corridos','Zapata']})),{id:'b',type:'Tesis',themes:['Estudios']},{id:'c',type:'Artículo',themes:[]},{id:'b',type:'Tesis',themes:['Estudios']}];
 const selected=diverseRecords(pool,5);assert.equal(selected[0].id,'a0');assert(selected.slice(0,3).some(r=>r.id==='b'));assert(selected.slice(0,3).some(r=>r.id==='c'));assert.equal(new Set(selected.map(r=>r.id)).size,selected.length);
 assert.equal(scopedSpec({clauses:[],filters:[{field:'thematic_collection_sim',value:'Already selected'}]},'thematic_collection_sim','Other'),null);
 assert.deepEqual(groupCandidates([{spec:{filters:[]},total:100,facets:[{name:'thematic_collection_sim',items:[{value:'Bad',hits:101},{value:'Small',hits:2},{value:'Negative',hits:-1}]}]}]),[]);
});
test('multi-query discovery never adds overlapping group totals',async()=>{
 clearCache();const {discoveryOverview}=await import('../src/discovery.mjs');
 const specs=['history','revolution'].map(value=>({clauses:[{field:'all_fields',value,required:true}],operator:'AND',filters:[],sort:'relevance'}));
 globalThis.fetch=async()=>json(fixture);
 const results=specs.map(spec=>({spec,total:100,records:[],facets:[{name:'thematic_collection_sim',items:[{value:'Corridos',hits:80}]}]}));
 const overview=await discoveryOverview(results);assert.equal(overview.groups[0].total,null);assert.equal(overview.groups[0].counts.length,2);
});
