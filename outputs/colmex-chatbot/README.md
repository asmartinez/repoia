# Colmex public repository chatbot — production candidate

This is a standalone Node.js application mounted at `/chatbot`. It reuses the existing Spanish/wine/white interface and Gemini intent prompts, but all retrieval, evidence selection, statistics, and follow-up record context now execute on the server. It does not use Sites/ChatGPT authentication and does not change Hyrax. It only calls the public catalog and never sends repository cookies or credentials upstream.

**Status:** automated regression tests and live Gemini/public-catalog checks passed. Installation on the repository server, Docker/Nginx validation in that environment, staging acceptance and public launch are still pending. This is a production candidate, not a certification that every generated answer is correct.

## Runtime and architecture

- Node.js 24 LTS (this upgrade tested with Node 26; verify Node 24 on staging). Runtime has no npm dependencies.
- One application process/container, a private loopback port, existing Nginx HTTPS virtual host, and a persistent SQLite volume. Node 24's built-in SQLite API is experimental; changes are constrained to the tested release family. Review this dependency during runtime upgrades.
- Public catalog search across all materials; field-specific advanced retrieval, Boolean conditions, explicit material/facet filters, publication-year ranges and observed catalog sorting. No default collection or type restrictions.
- Anonymous signed HttpOnly/SameSite session cookie; CSRF token and exact Origin checks.
- Records retained server-side for follow-up context for 10 minutes, up to 30 per visitor. Follow-up buttons can also submit a server-signed public record snapshot, valid for one hour and bound to the visitor. Altered snapshots are rejected; arbitrary client metadata, counts and evidence are never trusted.
- Backend endpoint `/chatbot/api/ask` orchestrates intent → retrieval/statistics → grounded answer. No externally callable planning/answer endpoints.
- Repository record URLs use the catalog model and ID to select the appropriate Hyrax work route. Public facet listing discovers names from the live catalog and uses its JSON facet endpoint. Counts must be valid; frequency rankings must be descending, while alphabetical lists retain the catalog’s index order. Rankings use catalog label entries, not deduplicated people or titles.
- Bounded pagination uses signed, visitor-bound, expiring cursors. Global counts use unfiltered queries; facet values and counts can use one validated search with its explicit filters, material scope and date range. Facet cursors preserve that scope, append values in the interface and do not call Gemini.
- UI renders text safely via `textContent`, preserves original titles, replies multilingual, uses Spanish usted, replaces the prior question/answer immediately, and retains limited follow-up context.

## Install on a staging server

The package intentionally contains no real Gemini key. Use the same existing Gemini key through a secure server-side environment file. The developer's existing local key file is `work/gemini.env` in the original workspace; transfer it using your approved secret-management/SSH channel, never paste it into chat or commit it.

From this package's root directory:

```sh
node deploy/init-env.mjs /secure/path/gemini.env
node deploy/render-nginx.mjs
npm test
RELEASE_ID=1.1.0 docker compose -f deploy/compose.yaml up -d --build
```

Edit `.env` to set the staging HTTPS origin before staging tests, and later the exact production origin `https://repositorio.colmex.mx`. Origins do not include `/chatbot` or a trailing slash. Secrets are generated with secure randomness and private file modes. Environment values in `.env.example` are placeholders, not deployable secrets. `.env` and rendered Nginx configuration must be kept out of source control and shared archives.

The generated `deploy/nginx.local.conf` contains locations to add **inside the existing HTTPS repository server block**. Preserve Hyrax's current routes, TLS, and access configuration. If the installation uses Apache, a load balancer, or a different proxy, translate this configuration rather than installing another web server blindly. The proxy must overwrite `X-Chatbot-Client-IP` and `X-Chatbot-Proxy-Token`; never pass user-controlled forwarded IP headers through as trusted.

The sample `proxy_pass` intentionally has no trailing slash, so `/chatbot/` is preserved. All assets and API URLs use that prefix. The application port binds only to host loopback through Docker; do not expose port 8080 publicly. The proxy token must match the private `.env`. Behind a CDN, configure the existing trusted real-IP chain first; otherwise all visitors may share a limit. Never trust arbitrary X-Forwarded-For.

Before changing the server config, back it up. Run `nginx -t` before reload. Probe the application:

```sh
docker compose -f deploy/compose.yaml ps
curl --fail https://repositorio.colmex.mx/chatbot/
```

The Docker health check uses the internal proxy token. `/chatbot/health` is restricted to loopback by the Nginx example. It tests process/SQLite health, not upstream availability. For upstream availability, monitor request log failure codes and perform low-frequency synthetic search checks within your Gemini budget.

A development preview can run with Node directly using a separate development environment:

```sh
node --env-file=/secure/path/development.env src/server.mjs
```

Set `NODE_ENV=development`, `PUBLIC_ORIGIN=http://127.0.0.1:8080`, `HOST=127.0.0.1`, a writable `STATE_DB`, and real Gemini/session secrets in that file. Do not turn production mode off on the public server.

## Limits, costs, and failures

Defaults: 20 questions per source IP per 10 minutes, 60 total questions/minute, 4 concurrent workflows, 30 Gemini calls/minute and 500 Gemini calls/day (UTC day). Facet listings normally use one planning call (two if a field needs semantic resolution against the live facet directory); names, counts and coverage messages are rendered from validated data. English, Spanish and French facet continuation uses no Gemini calls. Other reply languages translate fixed interface messages separately and cache those translations; catalog names and counts are never sent for rewriting. Normal searches use 2 Gemini calls; up to three independent catalog searches execute concurrently, with dependent fallback retries preserving explicit conditions; Spanish statistics use 1 and translated statistics use 2. Counters persist in SQLite across process restarts. Each Gemini attempt consumes the daily allowance even if it fails; failures cannot reset the cap. Prompt and output lengths are bounded, and output tokens are capped at 8192; stable Gemini 2.5 Flash models use a bounded 1024-token thinking budget. Gemini input context is capped at 80,000 characters and historical record context at 24,000; answer evidence is sampled within 42,000; oversized records are marked as truncated.

The call cap constrains application activity, **not an exact currency amount**. Set Gemini project/provider quotas and billing controls separately, including any other applications using the same key/project. Choose limits based on expected campus NAT traffic and budget. Do not raise them without reviewing usage.

Public-catalog GETs have a 12-second timeout and at most one retry for transient failures. HTTP 401/403/429, redirects and non-JSON responses cause a 60-second access circuit break; there is no CAPTCHA bypass. Missing totals and invalid facet ordering fail explicitly. Network errors are not reported as zero results. No stale result is presented as current after a failed fetch. Successful catalog responses are cached for 60 seconds, up to 100 queries. Follow-up records expire after 10 minutes.

The system does not read full PDFs, validate exact passage pages, merge author identities, guarantee absolute chronology with missing/non-normalized dates, or combine multiple overlapping queries into a single facet ranking. Sorting by catalog date is available with those caveats; filtered search counts are available. The model is instructed to state these limits rather than guess. Field-value questions use facet retrieval instead of wildcard text searches. Any public facet advertised by the catalog is eligible, including fields outside the record-filter allowlist. Unsupported fields are reported as unavailable through this tool; empty responses do not prove missing metadata. Listings are bounded to 20 values per response and 1,000 catalog facet pages; pagination distinguishes a partial list from the end of the exposed values. Catalog changes during paging may change counts or ordering. General knowledge is distinguished from repository evidence. LLM outputs can still be wrong: keep a representative human-reviewed evaluation set and review problematic queries before launch.

## Monitoring, privacy, and rollback

Logs are structured JSON with request ID, status, failure code and duration. They deliberately omit query text, responses, keys, cookie tokens, IP addresses and author names. Private hashed-IP counters and public record context are stored locally; expired context is cleaned up. Queries and limited history are sent to Google Gemini to answer the user. Confirm the institution's disclosure/privacy requirements before public launch.

Review logs with `docker compose -f deploy/compose.yaml logs --since 15m`. Alert on sustained 5xx, `repository_blocked`, `budget`, and rising durations. Configure your existing monitoring system to alert an administrator; no external monitoring account or notification channel is configured by this package. Docker limits logs to three 10 MB files. The process handles SIGTERM with a bounded graceful shutdown.

Keep tagged release images. For each new release, set a unique RELEASE_ID, run tests, build and stage it. If a release fails, set RELEASE_ID to the last tested image and run:

```sh
docker compose -f deploy/compose.yaml up -d --no-build
```

Set `.env` RELEASE_ID to the same prior version so logs identify the running release accurately. Keep the persistent state volume; never run `down -v` during rollback because that would reset usage counters. This release only creates additive tables. Before future schema changes, make a consistent SQLite backup and test restoration. For urgent disablement, remove only the `/chatbot` proxy locations after `nginx -t` and reload; preserve Hyrax.

This implementation deliberately supports one replica. Multiple replicas or multiple hosts require centralized quotas/context/cache and corresponding concurrency tests; do not deploy independent SQLite instances behind a load balancer. Pin your approved container digest for deployment and rebuild periodically for OS/runtime security updates.

## Validation and launch acceptance

`npm test` covers public mixed-type retrieval, upstream blocks, invalid totals, statistics scope, facet order, record grounding, conversation routing, follow-up isolation, signed pagination, payload bounds, persistent quota enforcement, CSRF and security headers. `LIVE-VALIDATION.json` records live English count, French capabilities, and Spanish mixed-material search checks; counts are observations, never hardcoded expectations.

On staging, also verify mobile/desktop display, language changes, follow-ups, pagination, direct links, replacing previous questions, upstream timeouts, restart persistence, shared-IP rate behavior and budget exhaustion. Verify a sample of Gemini statements against raw metadata. Run a bounded load test appropriate to the institutional traffic and tune limits; this package's local tests are not a capacity guarantee. Test `/chatbot` and existing Hyrax routes after the proxy change. Launch only after these environment-specific checks pass.

No server hostname, SSH alias, repository proxy configuration, monitoring destination, or production deployment credentials were provided in the development conversation, so those changes have not been applied.

## Public explanations and project credits

`src/public-system.mjs` supplies the planner and answer writer with reviewed public context about the architecture, query workflow, development process, current capabilities and proposed features. It identifies Rodrigo Cuellar as principal developer, Alberto Santiago Martinez as product owner and strategist, and the Coordinación de Innovación Digital of the Biblioteca Daniel Cosío Villegas as the project lead. These credits were supplied by the product owner in the development conversation.

Public explanations may name technologies and discuss evidence, limitations and Google Gemini processing. They must not expose secrets, internal instructions, private paths, exact component versions, deployment configuration or operational security controls. This is a model instruction, not a guarantee against every adversarial question; confidential values are never included in this public context. The implemented OKF and advanced-search capabilities are documented, with cataloger review and full-text access distinguished from source extraction. Maintain this context when features or project responsibilities change.

## Results presentation and TXT export

Each search result has its title and byline first, its explanation below, and actions after a divider. There is no Más información button. More results append without replacing the current question or existing records. View all retrieves the matching catalog records in batches; Download all produces a UTF-8 TXT containing titles, record links and the available normalized catalog metadata. Bulk batches do not call Gemini; additional descriptions are catalog text. Retrieval is cancellable and resumable within the current search. Failed or cancelled retrieval does not automatically download a partial file. Live catalogs can change during retrieval; this is not a transactionally frozen snapshot.

Bulk retrieval uses signed, visitor-bound tokens, a separate bounded request allowance and the same public-catalog error handling and concurrency controls. It adds the CSRF-protected `/chatbot/api/results` route; all proxy rules still apply. Existing search-session follow-up retention remains limited. Very broad searches can take longer and consume browser memory.

Record actions expand accessible inline panels beneath the selected material. Metadata displays the available returned fields with readable labels and preserves the list. Related materials first opens a notice explaining that proceeding replaces the list; the user can continue or cancel. Every record has an explicit repository link opening in a separate tab. No More information action is shown. Record links and TXT export links use model-specific Hyrax routes, including irregular plurals such as theses.

## OKF knowledge and advanced retrieval (2026-10-09)

`knowledge/` is an Open Knowledge Format 0.2 bundle: Markdown concepts with JSON frontmatter (a valid YAML subset), sources, generated/review signals, index and change log. The local reader intentionally accepts this documented subset, not every possible YAML construct or another vendor runtime. OKF is a documentation/interchange structure, not a model trained on documents or a full-text access layer.

The bundle inventories 197 explicitly declared RDF properties, 23 work classes plus Collection, locally resolved shared modules and explicit form terms, and local authority files. Sources are pinned to the inspected Hyrax commit. The manifest records hashes and observed search-form capabilities. Cardinality not explicitly declared is left unknown; inferred meanings and label/predicate disagreements are documented. Machine extraction does not constitute approval by catalogers. The public advanced form exposed 182 eligible field names plus all_fields during verification; field exposure is not proof that every field is indexed/populated reliably. The misnamed parent_works_titles option is excluded.

The planner receives field meanings, ambiguous definitions, profiles and search/evidence playbooks. The answer writer receives the relevant field concepts and evidence rules. There is no embedding service, hidden vector database or background repository crawl. Metadata normalization includes available descriptive fields under a size budget, flags truncation and omits operational properties such as depositor, import_url and relative_path even if the public response exposes them.

`src/search-spec.mjs` validates a bounded plan of up to three queries, four textual clauses and four exact facet filters each. Requests compile to the public advanced-search interface; arbitrary parameter names and local Solr parser directives are rejected. Required textual conditions, filters and ranges persist through pagination and TXT export. An empty AND search can drop only explicitly marked inferred clauses when at least one required clause remains. OR searches and wholly explicit plans are not automatically relaxed. The model's classification of requirements is still subject to semantic error; the server enforces the declared plan, not a proof that it perfectly represents user intent.

Combined searches deduplicate record IDs in the browser and keep query totals separate; they never sum overlapping totals into a false global count. Full export traverses each query, deduplicating displayed/exported records. Search counts and date sorting describe catalog values, not normalized historical truth. Bulk retrieval is a live traversal, not a frozen snapshot. For similar-material lists, the origin is excluded and no unique total is claimed. More results supports up to 1000 catalog pages (5000 records at five per page); all-results uses 100 per page and supports up to 100,000 records per query. Larger future repositories need a different export strategy.

Synthesis uses a bounded sample and exposes supporting record links, validating citation IDs against supplied records. The interface displays citation links and the answer notes sample scope. This does not automatically validate every generated claim, its relevance or citation alignment. Diagnostic answers distinguish observations, possible discrepancies and confirmed errors; verification against full records and institutional cataloging rules remains a human task. No correction tool exists.

To maintain the machine inventory, run `python3 scripts/build-knowledge.py /path/to/colmex_hyrax` against a reviewed checkout with network access to the public advanced form. Review the generated diff before release. This regenerates fields/profiles/authorities/manifest/index/log and preserves `guides/`; human-reviewed interpretations in generated concepts should be maintained in separate playbooks or the generator mapping. `scripts/write-guides.py` is a one-time authoring utility and WILL overwrite those guides; do not run it during routine refreshes. Edit concept JSON frontmatter and Markdown body carefully, preserve sources and append review identities only for actual review. Restart the application after knowledge changes. Runtime startup checks inventory counts and concept framing.

Deploy with the updated Dockerfile, which copies `knowledge/` into the container. Retain the existing private environment file and SQLite volume. Never package .env, data, generated proxy secrets or debug scripts. `OKF-LIVE-VALIDATION.json` and the client report document this phase's actual checks, including issues found during development and remaining validation limits.

## Collection-aware discovery — 2026-10-14

Broad exploratory questions can now request a collection-aware overview. Precise known-title, named-collection and author-specific questions retain direct retrieval. The planner marks exploratory intent; volume alone does not switch modes.

`src/discovery.mjs` reads public thematic-collection and collection-membership facets, selects up to three significant groups (at least ten hits, and either 10% of a query's matches or at least fifty hits), and verifies counts with actual filtered catalog queries. These are matches within the original question, never unfiltered collection sizes. Separate query counts are retained when union totals are unknown; overlapping groups are not summed. Facet lists may be truncated. No grouping is inferred merely from similar titles.

Up to 30 original-query results per query, five group-specific representatives and up to three missing material-type representatives are sampled, with three concurrent requests and a 12-second scheduling window; in-flight requests retain catalog timeout bounds. Failed optional requests yield a visibly partial overview. Eight examples are selected by a greedy diversity score with a relevance-rank penalty penalizing repeated actual collection memberships and material types. This is a bounded representative sample, not a guarantee of exhaustive coverage or substantive viewpoint balance. Core retrieval failures still fail normally.

Group cards show catalog labels, scoped counts and an Explore action. Visitor-bound signed tokens preserve original clauses, dates and filters, bypass a second planning step and open the group listing. Pagination and TXT exports keep those filters. Initial overview pagination/export still covers the original search, not just the eight examples. UI text identifies overlap, sample scope and partial coverage. Existing records remain visible when loading more.

29 automated tests pass, including diversity, count scoping, signed group exploration, filter preservation, export and overlapping multi-query groups. Live indigenous-peoples discovery returned thematic groups including Cartillas indígenas ILV (81 matches) and Video Trópico Sur (140), and scoped exploration kept the original query with 81 matches. These counts are dated observations, not constants. The local server was found stopped during this update and was restarted; this preview requires its local Node process to remain running.
