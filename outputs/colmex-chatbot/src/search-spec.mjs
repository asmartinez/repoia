import {searchFields} from './knowledge.mjs';
import {AppError} from './controls.mjs';
export const facetFields=new Set(['resource_type_sim','thematic_collection_sim','human_readable_type_sim','creator_sim','subject_sim','language_sim','publisher_sim','member_of_collections_ssim','geographic_coverage_sim']);
const sorts={relevance:'score desc, system_create_dtsi desc',year_asc:'date_created_sim asc',year_desc:'date_created_sim desc',title_asc:'title_sim asc',title_desc:'title_sim desc',uploaded_asc:'system_create_dtsi asc',uploaded_desc:'system_create_dtsi desc'};
export function validateSpec(s){
 if(!s||!Array.isArray(s.clauses)||s.clauses.length>4||!['AND','OR'].includes(s.operator||'AND'))throw new AppError('invalid_plan');
 const clauses=s.clauses.map(c=>{if(!searchFields.has(c.field)||typeof c.value!=='string'||!c.value.trim()||c.value.length>300||/\{!|_query_|\*:\*/i.test(c.value)||typeof c.required!=='boolean')throw new AppError('invalid_plan');return {field:c.field,value:c.value.trim(),required:c.required};});
 const filters=s.filters||[];if(!Array.isArray(filters)||filters.length>4||filters.some(f=>!facetFields.has(f.field)||typeof f.value!=='string'||!f.value.trim()||f.value.length>200))throw new AppError('invalid_plan');
 for(const k of ['yearFrom','yearTo'])if(s[k]!==undefined&&(!Number.isInteger(s[k])||s[k]<0||s[k]>9999))throw new AppError('invalid_plan');
 if(s.yearFrom!==undefined&&s.yearTo!==undefined&&s.yearFrom>s.yearTo||s.sort!==undefined&&!sorts[s.sort])throw new AppError('invalid_plan');
 return {clauses,operator:s.operator||'AND',filters:filters.map(f=>({...f})),...(s.yearFrom!==undefined?{yearFrom:s.yearFrom}:{}),...(s.yearTo!==undefined?{yearTo:s.yearTo}:{}),sort:s.sort||'relevance'};
}
export function compileSpec(spec){
 const s=validateSpec(spec),p=new URLSearchParams({search_field:'advanced',op:s.operator,sort:sorts[s.sort]});
 const grouped=new Map();for(const c of s.clauses){const key=c.field==='all_fields'?'q':c.field;grouped.set(key,[...(grouped.get(key)||[]),c.value]);}
 for(const [key,values] of grouped)p.set(key,values.length===1?values[0]:values.map(v=>'('+v+')').join(' '+s.operator+' '));
 for(const f of s.filters)p.append(`f[${f.field}][]`,f.value);
 if(s.yearFrom!==undefined)p.set('range[date_created_sim][begin]',String(s.yearFrom));if(s.yearTo!==undefined)p.set('range[date_created_sim][end]',String(s.yearTo));
 return p;
}
export function relaxedSpec(spec){const s=validateSpec(spec);if(s.operator!=='AND'||!s.clauses.some(c=>!c.required)||!s.clauses.some(c=>c.required))return null;return {...s,clauses:s.clauses.filter(c=>c.required)};}
