import {readFileSync,writeFileSync} from 'node:fs';
import {randomBytes} from 'node:crypto';
const keyFile=process.argv[2];if(!keyFile)throw new Error('Usage: node deploy/init-env.mjs /secure/path/gemini.env');
const key=readFileSync(keyFile,'utf8').match(/^GEMINI_API_KEY=(.+)$/m)?.[1].trim();if(!key||/[\r\n]/.test(key))throw new Error('Key file must contain GEMINI_API_KEY');
const template=readFileSync('.env.example','utf8').replace('replace-with-existing-key',key).replace('replace-with-at-least-32-random-characters',randomBytes(32).toString('hex')).replace('replace-with-another-32-random-character-secret',randomBytes(32).toString('hex'));
writeFileSync('.env',template,{mode:0o600,flag:'wx'});console.log('Created private .env; existing files are never overwritten.');
