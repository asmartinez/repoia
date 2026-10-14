import {readFileSync,readdirSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../knowledge/',import.meta.url));
export function parseConcept(text){
 const m=text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);if(!m)throw Error('Invalid OKF document framing');
 let meta;try{meta=JSON.parse(m[1]);}catch{throw Error('OKF frontmatter must use the documented JSON subset of YAML');}
 if(!meta||typeof meta.type!=='string'||!meta.type.trim())throw Error('OKF concept needs a type');
 if(meta.sources?.some(s=>typeof s.resource!=='string'||!s.resource))throw Error('OKF source needs a resource');
 return {meta,body:m[2]};
}
export const manifest=JSON.parse(readFileSync(root+'manifest.json','utf8'));
export const fieldDefinitions=new Map();
for(const file of readdirSync(root+'fields').filter(f=>f.endsWith('.md')&&f!=='index.md')){
 const doc=parseConcept(readFileSync(root+'fields/'+file,'utf8')),f=doc.meta.field;
 if(!f||!/^\w+$/.test(f.name)||file!==f.name+'.md')throw Error('Invalid field concept');
 fieldDefinitions.set(f.name,{...f,resource:doc.meta.resource,status:doc.meta.status||'stable',body:doc.body});
}
if(fieldDefinitions.size!==manifest.fieldCount)throw Error('Knowledge manifest/field inventory mismatch');
export const searchFields=new Set(manifest.searchFields);
for(const name of searchFields)if(name!=='all_fields'&&!fieldDefinitions.has(name))throw Error('Unknown search field');
const materials=[];for(const file of readdirSync(root+'materials').filter(f=>f.endsWith('.md')&&f!=='index.md')){const d=parseConcept(readFileSync(root+'materials/'+file,'utf8'));materials.push({model:d.meta.model,fieldCount:d.meta.fields?.length,explicitFormTerms:d.meta.explicitFormTerms,source:d.meta.resource});}
if(materials.length!==manifest.modelCount)throw Error('Knowledge material inventory mismatch');
const guides=new Map();for(const file of readdirSync(root+'guides').filter(f=>f.endsWith('.md'))){const doc=parseConcept(readFileSync(root+'guides/'+file,'utf8'));guides.set(file.replace('.md',''),doc);}
export const materialScopes=['all',...materials.filter(m=>m.model!=='Collection').map(m=>m.model.replace(/([a-z])([A-Z])/g,'$1 $2'))];
const vocabularies=[];for(const file of readdirSync(root+'vocabularies').filter(f=>f.endsWith('.md'))){const d=parseConcept(readFileSync(root+'vocabularies/'+file,'utf8'));vocabularies.push({name:d.meta.title,values:d.meta.values.slice(0,10),source:d.meta.resource,limit:'Declared authority entries; confirm actual facet values before filtering.'});}
const fold=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
export function knowledgeContext(question='',specs=[]){
 const terms=fold(question).split(/[^a-z0-9_]+/).filter(s=>s.length>3);const specified=new Set(specs.flatMap(s=>s.clauses?.map(c=>c.field)||[]));
 const ranked=[...fieldDefinitions.values()].map(f=>({f,score:(specified.has(f.name)?100:0)+terms.reduce((sum,t)=>sum+(fold(f.name+' '+f.label+' '+f.meaning).includes(t)?1:0),0)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).slice(0,12);
 const names=['search','evidence','relationships'];if(/metadat|calidad|quality|qualit|schema|campo|field|datos/i.test(question))names.push('quality');
 const references=names.map(name=>{const d=guides.get(name);if(!d)throw Error('Required OKF guide missing');return {concept:'guides/'+name,title:d.meta.title,body:d.body,sources:d.meta.sources,status:d.meta.status};});
 return {version:manifest.okfVersion,sourceCommit:manifest.sourceCommit,review:'Machine-extracted definitions; no cataloger approval claimed.',references,fields:ranked.map(({f})=>({name:f.name,label:f.label,meaning:f.meaning,ambiguity:f.ambiguity,source:f.resource,status:f.status})),materialProfiles:materials,vocabularies,searchFieldDirectory:[...searchFields].map(name=>({name,label:fieldDefinitions.get(name)?.label||'Todos los campos',meaning:fieldDefinitions.get(name)?.meaning?.startsWith('Campo descrito')?undefined:fieldDefinitions.get(name)?.meaning,ambiguity:fieldDefinitions.get(name)?.ambiguity||undefined}))};
}
