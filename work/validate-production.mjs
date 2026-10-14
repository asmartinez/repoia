import {readFileSync,writeFileSync,mkdirSync} from 'node:fs';
import {randomBytes} from 'node:crypto';
process.env.GEMINI_API_KEY=readFileSync('work/gemini.env','utf8').match(/^GEMINI_API_KEY=(.+)$/m)[1].trim();
process.env.SESSION_SECRET=randomBytes(32).toString('hex');process.env.STATE_DB='work/production-validation.sqlite';process.env.GEMINI_DAILY_CALL_LIMIT='20';
const {ask}=await import('../outputs/colmex-chatbot/src/service.mjs');
const questions=['How many public book records are in the repository?','Bonjour, que pouvez-vous faire ?','Busque materiales sobre fosas clandestinas'];
const results=[];
for(const message of questions){try{const r=await ask({message},'live-validation');results.push({message,language:r.language,text:r.text,total:r.total,source:r.source,records:r.records.map(b=>({id:b.id,type:b.type,title:b.title,link:b.link})),pass:!!r.text});}catch(e){results.push({message,error:e.code||e.message,pass:false});}}
writeFileSync('outputs/colmex-chatbot/LIVE-VALIDATION.json',JSON.stringify({timestamp:new Date().toISOString(),results},null,2));console.log(JSON.stringify(results));
