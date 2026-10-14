import assert from 'node:assert/strict';
import {planSearch,answerFromRecords,GeminiError} from './gemini-test-module.mjs';
const record={id:'a1',title:'Historia mínima de México',subject:['Historia'],geography:['México'],contents:['La era virreinal'],description:[]};
let seen;
function mock(output,status=200){globalThis.fetch=async(url,options)=>{seen={url,options,body:JSON.parse(options.body)};return new Response(JSON.stringify({candidates:[{content:{parts:[{text:JSON.stringify(output)}]}}]}),{status});};}
mock({action:'similar',query:'historia general de México',field:'title',bookId:'a1'});
const plan=await planSearch('test-secret','gemini-3.8-flash',{message:'¿Hay otros parecidos?',history:[],selected:record,books:[record]});
assert.equal(plan.query,'historia general de México');assert.equal(seen.options.headers['x-goog-api-key'],'test-secret');assert(!seen.url.includes('test-secret'));assert.equal(seen.body.generationConfig.responseMimeType,'application/json');
mock({text:'Una introducción a la historia de México.',recordIds:['a1','invented','a1']});
const answer=await answerFromRecords('test-secret','gemini-3.8-flash',{message:'¿De qué trata?',history:[],action:'about',selected:record,books:[record]});
assert.deepEqual(answer.recordIds,['a1']);assert(seen.body.systemInstruction.parts[0].text.includes('No inventes'));
mock({action:'destroy',query:'',field:'title',bookId:''});await assert.rejects(()=>planSearch('test','gemini-3.8-flash',{message:'test',history:[],selected:null,books:[]}),GeminiError);
mock({},429);await assert.rejects(()=>planSearch('test','gemini-3.8-flash',{message:'test',history:[],selected:null,books:[]}),e=>e.status===429&&!e.message.includes('test-secret'));
console.log('Passed: search planning, structured answers, source ID validation, secret header handling, invalid plans, and quota errors.');
