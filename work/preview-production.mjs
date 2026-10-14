import {readFileSync} from 'node:fs';
import {randomBytes} from 'node:crypto';
process.env.GEMINI_API_KEY=readFileSync('work/gemini.env','utf8').match(/^GEMINI_API_KEY=(.+)$/m)[1].trim();
process.env.SESSION_SECRET=randomBytes(32).toString('hex');process.env.STATE_DB='work/production-preview.sqlite';process.env.GEMINI_DAILY_CALL_LIMIT='20';process.env.PUBLIC_ORIGIN='http://127.0.0.1:8080';
await import('../outputs/colmex-chatbot/src/server.mjs');
