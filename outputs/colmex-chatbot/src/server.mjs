import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {randomUUID,timingSafeEqual} from 'node:crypto';
import {ask,validateRequest,resultBatch} from './service.mjs';
import {AppError,db,reserve,fingerprint,getSession,acquire,housekeeping,number} from './controls.mjs';
const production=process.env.NODE_ENV==='production';
const origin=process.env.PUBLIC_ORIGIN||'http://127.0.0.1:8080';
if(new URL(origin).origin!==origin||production&&!origin.startsWith('https://'))throw new Error('PUBLIC_ORIGIN must be an exact origin; HTTPS is required in production');
if(!process.env.SESSION_SECRET||process.env.SESSION_SECRET.length<32||!process.env.GEMINI_API_KEY)throw new Error('Configure GEMINI_API_KEY and SESSION_SECRET (at least 32 characters)');
if(production&&(!process.env.PROXY_TOKEN||process.env.PROXY_TOKEN.length<32))throw new Error('Production requires a private reverse proxy and PROXY_TOKEN');
const base='/chatbot',assets=new Map([['/','index.html'],['/app.js','app.js'],['/styles.css','styles.css'],['/biblioteca-colmex.png','biblioteca-colmex.png']]);
const content={html:'text/html; charset=utf-8',js:'text/javascript; charset=utf-8',css:'text/css; charset=utf-8',png:'image/png'};
const publicDir=fileURLToPath(new URL('../public/',import.meta.url));
const equal=(a,b)=>typeof a==='string'&&a.length===b.length&&timingSafeEqual(Buffer.from(a),Buffer.from(b));
const errors={en:{invalid:'Please enter a valid question.',rate:'Too many requests. Please wait before trying again.',budget:'The daily AI usage limit has been reached. Please try again tomorrow.',busy:'The service is busy. Please try again shortly.',repository:'The repository did not respond. This is not a zero-result search.',repository_blocked:'The repository is limiting access. Please try again later.',context_expired:'This record context has expired. Please search for it again.',statistics:'The catalog did not provide a reliable ranking.',upstream:'The AI service is unavailable. Please try again later.'},es:{invalid:'Escriba una pregunta válida.',rate:'Se han recibido demasiadas consultas. Espere antes de volver a intentarlo.',budget:'Se alcanzó el límite diario de uso de IA. Inténtelo mañana.',busy:'El servicio está ocupado. Inténtelo en unos momentos.',repository:'El repositorio no respondió. Esto no significa que no haya resultados.',repository_blocked:'El repositorio está limitando el acceso. Inténtelo más tarde.',context_expired:'El contexto de este registro caducó. Vuelva a buscarlo.',statistics:'El catálogo no proporcionó un ranking verificable.',upstream:'El servicio de IA no está disponible. Inténtelo más tarde.'}};
export const server=createServer(async(req,res)=>{
 const id=randomUUID(),started=Date.now();let release;
 for(const [k,v] of Object.entries({'X-Content-Type-Options':'nosniff','Referrer-Policy':'same-origin','X-Frame-Options':'SAMEORIGIN','Content-Security-Policy':"default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'self'; form-action 'self'",'Permissions-Policy':'camera=(), microphone=(), geolocation=()','Cache-Control':'no-store','X-Request-ID':id}))res.setHeader(k,v);
 const json=(status,data)=>{res.writeHead(status,{'Content-Type':'application/json; charset=utf-8'});res.end(JSON.stringify(data));};
 let code='ok';
 try{
  if(production&&!equal(req.headers['x-chatbot-proxy-token'],process.env.PROXY_TOKEN))throw new AppError('forbidden',403);
  const url=new URL(req.url,origin);
  if(url.pathname===base){res.writeHead(308,{Location:base+'/'});res.end();return;}
  if(!url.pathname.startsWith(base+'/'))throw new AppError('not_found',404);
  const path=url.pathname.slice(base.length);
  if(path==='/health'&&req.method==='GET'){db.prepare('SELECT 1').get();json(200,{status:'ok',version:process.env.RELEASE_ID||'1.0.0'});return;}
  const session=getSession(req.headers.cookie);
  if(session.new)res.setHeader('Set-Cookie',`colmex_chat=${session.token}; HttpOnly; SameSite=Strict; Path=${base}; Max-Age=86400${production?'; Secure':''}`);
  if(path==='/api/session'&&req.method==='GET'){json(200,{csrf:fingerprint('csrf:'+session.id)});return;}
  if(['/api/ask','/api/results'].includes(path)&&req.method==='POST'){
   if(req.headers.origin!==origin||!equal(req.headers['x-csrf-token'],fingerprint('csrf:'+session.id)))throw new AppError('forbidden',403);
   if(!req.headers['content-type']?.startsWith('application/json'))throw new AppError('invalid',415);
   if(Number(req.headers['content-length'])>64000)throw new AppError('invalid',413);
   let body='';for await(const chunk of req){body+=chunk.toString();if(Buffer.byteLength(body)>64000)throw new AppError('invalid',413);}
   let input;try{input=JSON.parse(body);}catch{throw new AppError('invalid',400);}if(path==='/api/ask')validateRequest(input);
   const ip=production?String(req.headers['x-chatbot-client-ip']||'unknown'):req.socket.remoteAddress;
   reserve((path==='/api/results'?'results:':'ip:')+fingerprint(ip),path==='/api/results'?600:number('REQUESTS_PER_IP_10_MIN',20),600);
   reserve(path==='/api/results'?'results:minute':'global:minute',path==='/api/results'?120:number('REQUESTS_PER_MINUTE',60),60);
   release=acquire();json(200,path==='/api/results'?await resultBatch(input?.token,session.id):await ask(input,session.id));return;
  }
  if(req.method==='GET'&&assets.has(path)){
   const file=assets.get(path),data=await readFile(publicDir+file);res.writeHead(200,{'Content-Type':content[file.split('.').at(-1)]});res.end(data);return;
  }
  throw new AppError('not_found',404);
 }catch(e){
  code=e instanceof AppError?e.code:'upstream';const status=e instanceof AppError?e.status:503;
  if(status===429)res.setHeader('Retry-After',code==='budget'?'3600':'60');
  const language=String(req.headers['accept-language']||'').startsWith('es')?'es':'en';
  json(status,{error:errors[language][code]||errors[language].upstream,code,requestId:id});
 }finally{release?.();console.log(JSON.stringify({event:'request',id,status:res.statusCode,code,durationMs:Date.now()-started}));}
});
server.requestTimeout=15000;server.headersTimeout=10000;
const timer=setInterval(housekeeping,600000);timer.unref();
export function start(){server.listen(number('PORT',8080),process.env.HOST||'127.0.0.1',()=>console.log(JSON.stringify({event:'startup',version:process.env.RELEASE_ID||'1.0.0',path:base})));}
if(process.env.NO_LISTEN!=='1')start();
for(const signal of ['SIGTERM','SIGINT'])process.on(signal,()=>{server.close(()=>{db.close();process.exit(0);});setTimeout(()=>process.exit(1),10000).unref();});
