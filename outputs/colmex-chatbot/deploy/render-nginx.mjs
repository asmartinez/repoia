import {readFileSync,writeFileSync} from 'node:fs';
const key=readFileSync('.env','utf8').match(/^PROXY_TOKEN=([a-f0-9]{64})$/m)?.[1];if(!key)throw new Error('Generate .env with init-env.mjs first');
writeFileSync('deploy/nginx.local.conf',readFileSync('deploy/nginx.conf','utf8').replaceAll('REPLACE_PROXY_TOKEN',key),{mode:0o600});console.log('Created private deploy/nginx.local.conf; do not commit or publish this file.');
