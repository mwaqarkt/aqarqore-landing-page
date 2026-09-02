# AI Search Readiness — 85/100

## What works

- Full content served as static HTML: AI crawlers that do not execute JavaScript now receive the complete page, which was impossible before the migration
- robots.txt explicitly allows nine AI user agents
- FAQPage schema on 30 pages, feeding People Also Get answers and AI Overviews
- 28 pages open sections with short quotable answer blocks
- 44 tables and 74 lists give extractable, citable structure
- Every guide carries a dated last-updated line

## Findings

### High: No third-party citations or reviews

Approximately 25 of the 90 researched keywords show a Reviews SERP feature, including the bare brand term. The site has no presence on G2, Capterra or Software Advice, so that SERP block is unreachable regardless of on-page quality.

**Fix:** Claim G2 and Capterra profiles and seed 8-10 genuine customer reviews. No development work required.

### Medium: Brand entity is weakly defined

Both Moz and Semrush score the bare brand term at KD 33-35, unusually hard for a brand name. The cause is namespace collision: aqar is the ordinary Arabic word for real estate and also the name of a major Saudi portal. Organization schema with alternateName now helps, but there are no third-party citations yet.

**Fix:** Build entity signals off-site: G2 and Capterra profiles, a LinkedIn company page, and sameAs links in Organization schema pointing at all of them.
