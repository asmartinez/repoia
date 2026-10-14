import {DatabaseSync} from 'node:sqlite';
import {mkdirSync} from 'node:fs';
import {dirname} from 'node:path';
import {createHmac,randomBytes,timingSafeEqual} from 'node:crypto';
export class AppError extends Error {constructor(code,status=503){super(code);this.code=code;this.status=status;}}
export const number=(key,fallback)=>{const v=Number(process.env[key]??fallback);if(!Number.isInteger(v)||v<1)throw new Error(`Invalid configuration: ${key}`);return v;};
const path=process.env.STATE_DB||'data/state.sqlite';mkdirSync(dirname(path),{recursive:true,mode:0o700});
export const db=new DatabaseSync(path,{timeout:5000});
db.exec(`PRAGMA journal_mode=WAL; CREATE TABLE IF NOT EXISTS counters(k TEXT PRIMARY KEY,n INTEGER NOT NULL,expires INTEGER NOT NULL); CREATE TABLE IF NOT EXISTS records(session TEXT,id TEXT,data TEXT,expires INTEGER,PRIMARY KEY(session,id));`);
export function reserve(key,max,seconds,now=Date.now()){
 const bucket=Math.floor(now/(seconds*1000)),k=`${key}:${bucket}`;
 const r=db.prepare('INSERT INTO counters VALUES (?,1,?) ON CONFLICT(k) DO UPDATE SET n=n+1 WHERE n<? RETURNING n').get(k,(bucket+1)*seconds*1000,max);
 if(!r)throw new AppError(key.startsWith('budget')?'budget':'rate',429);
}
export const fingerprint=value=>createHmac('sha256',process.env.SESSION_SECRET).update(value).digest('hex');
export function getSession(cookie){
 const token=(cookie||'').match(/(?:^|; )colmex_chat=([a-f0-9]+\.[a-f0-9]+)/)?.[1];
 if(token){const [id,signature]=token.split('.');const expected=fingerprint(id);if(signature.length===expected.length&&timingSafeEqual(Buffer.from(signature),Buffer.from(expected)))return {id,new:false};}
 const id=randomBytes(24).toString('hex');return {id,new:true,token:`${id}.${fingerprint(id)}`};
}
export function remember(session,records){
 const statement=db.prepare('INSERT OR REPLACE INTO records VALUES (?,?,?,?)');
 for(const record of records)statement.run(session,record.id,JSON.stringify(record),Date.now()+600000);
 db.prepare('DELETE FROM records WHERE expires<?').run(Date.now());
 db.prepare('DELETE FROM records WHERE session=? AND id NOT IN (SELECT id FROM records WHERE session=? ORDER BY expires DESC LIMIT 30)').run(session,session);
}
export function known(session){return db.prepare('SELECT data FROM records WHERE session=? AND expires>? ORDER BY expires DESC LIMIT 30').all(session,Date.now()).map(r=>JSON.parse(r.data));}
let active=0;export function acquire(){if(active>=number('MAX_CONCURRENT_REQUESTS',4))throw new AppError('busy',503);active++;return ()=>{active--;};}
export async function geminiFetch(url,options){
 reserve('budget:day',number('GEMINI_DAILY_CALL_LIMIT',500),86400);
 reserve('gemini:minute',number('GEMINI_CALLS_PER_MINUTE',30),60);
 return fetch(url,{...options,redirect:'error'});
}
export function housekeeping(){db.prepare('DELETE FROM counters WHERE expires<?').run(Date.now()-86400000);db.prepare('DELETE FROM records WHERE expires<?').run(Date.now());}
