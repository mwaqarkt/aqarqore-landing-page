# Full SEO Audit — https://aqarqore.com

**Health Score: 84/100**  ·  46 pages crawled  ·  2026-09-01

> Domain requested was aqarqoreee.com which is NXDOMAIN. Audited aqarqore.com.

**Business type:** B2B SaaS — real estate CRM for GCC brokerages (Qatar, UAE, Saudi Arabia)

---

## Executive Summary

### Score by category

| Category | Weight | Score |
|---|---|---|
| Technical SEO | 22% | **92** |
| Content Quality | 23% | **78** |
| On-Page SEO | 20% | **80** |
| Schema / Structured Data | 10% | **90** |
| Performance (CWV) | 10% | **82** |
| AI Search Readiness | 10% | **85** |
| Images | 5% | **84** |
| **Weighted total** | 100% | **84** |

### Top findings

1. Mobile navigation is unreachable: the hamburger button renders at x=408 on a 375px viewport, entirely off-screen, because the header CTA has no responsive hiding class
2. 20 of 46 meta descriptions exceed 160 characters and will truncate in SERPs
3. 11 pages fall under 300 words; most are utility pages but several hubs are genuinely thin
4. Article schema uses an Organization author rather than a named person, which weakens E-E-A-T
5. Two Unsplash images are still hotlinked, exposing visitor IPs to a third party and sitting outside your CDN and cache policy

### Quick wins

1. Add hidden sm:flex to the header CTA so the hamburger fits on mobile (one class, fixes a critical UX blocker)
2. Trim 20 meta descriptions to under 160 characters
3. Serve luxury-villa-showcase via <picture> with the AVIF that already exists: 151KB to 53KB
4. Add width and height to the two images missing them
5. Self-host the two remaining Unsplash images

---

## Technical SEO — 92/100

**What works**

- All 46 sitemap URLs return 200 with no redirect chains
- Static HTML: is_spa false, full content served without JavaScript
- robots.txt explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-Web, Google-Extended, Applebot-Extended and CCBot
- Canonical on every page, zero duplicates, zero missing
- hreflang validated across 26 bilingual pages with zero errors: self-referencing, reciprocal, x-default present
- www to apex 301 and http to https 301 both confirmed in production
- Security headers present: X-Content-Type-Options, Referrer-Policy, X-Frame-Options
- Brotli compression active; AVIF served with correct image/avif MIME type
- noindex correctly present only on 404

**Findings**

#### Critical — Mobile navigation menu is unreachable

At a 375px viewport the hamburger button occupies x=408 to x=446, entirely outside the viewport. Because body has overflow-x-hidden, no scrollbar appears and the button simply cannot be reached. Root cause: the Book Live Demo CTA in the header carries no responsive hiding class, so it renders at every breakpoint alongside the logo lockup and language toggle, and the action group is flex-shrink-0. Mobile users cannot open site navigation at all. GCC traffic is mobile-heavy, and mobile usability is a ranking signal.

**Fix:** Add 'hidden sm:flex' to the header CTA anchor in components/LandingPage.jsx so it is suppressed on phones, leaving the hamburger visible. Retest at 320px, 375px and 414px.

#### Low — No llms.txt

/llms.txt returns 404. This is an emerging, optional convention and is ignored by Google. Some AI crawlers reference it.

**Fix:** Optional. If added, list the guides and feature pages you most want cited.

---

## Content Quality — 78/100

**What works**

- Average 876 words per page across 46 pages
- Regulatory guides carry explicit legal-advice disclaimers at top and foot
- Competitor comparison pages state commercial interest openly and include the case for staying with the incumbent
- Content is genuinely differentiated: measured 8-word shingle overlap between sibling pages peaks at 11.2%, well below any doorway-page threshold
- Bilingual content is natively written rather than machine-translated

**Findings**

#### High — Regulatory document tables not verified against source

The Ejari and Trakheesi guides publish document checklists that brokers may act on. These were compiled from secondary sources and have not been verified against current Dubai Land Department guidance. Published sources disagreed on Trakheesi fees, so no fee figure was stated, but the document lists remain unverified.

**Fix:** Have someone with DLD familiarity verify both tables before promoting these pages.

#### Medium — 11 pages under 300 words

Thin pages: /alternatives (270w), /ar/book-a-demo (108w), /ar/contact (109w), /ar/features (165w), /ar/guides (180w), /ar/pricing (235w), /book-a-demo (105w), /contact (115w) and others. Form and contact pages are legitimately short and this is expected. The hub pages are the genuine concern: /alternatives, /ar/features and /ar/guides are navigational shells with little unique substance.

**Fix:** Add 200-300 words of orienting content to the hub pages explaining how to choose between the items listed. Leave the form pages as they are.

#### Medium — Article author is an Organization, not a named person

All 30 Article schema blocks use author as Organization AqarQore. Google's guidance on helpful content leans toward identifiable expertise, particularly for the regulatory guides where authority matters most.

**Fix:** Add a named author with a Person schema and a short bio to the Ejari, Trakheesi, RERA, DLD and Saudi compliance guides.

#### Medium — Published statistics lack sample size and period

The 74%, 99.8%, 4.2x and 100% figures are now attributed to AqarQore platform telemetry but carry no sample size or date range, so they cannot be independently assessed.

**Fix:** Add 'N agencies, [period]' beside each figure, or reframe them qualitatively.

---

## On-Page SEO — 80/100

**What works**

- Zero title tags outside the 15-60 character range
- Zero duplicate titles across 46 pages
- Exactly one H1 on every page
- Strong H2 structure supporting the on-page table of contents
- Internal linking verified at 691 links with zero broken

**Findings**

#### High — 20 of 46 meta descriptions exceed 160 characters

Affected pages include all four alternatives pages (167-182 chars), both country CRM guides (167-183), the feature pages (173-183) and several guides. Google truncates around 155-160 characters, so the closing clause of each is lost in the SERP.

**Fix:** Rewrite the 20 descriptions to 150-155 characters, front-loading the differentiating claim.

---

## Schema / Structured Data — 90/100

**What works**

- 100% coverage: all 46 pages carry valid JSON-LD
- Organization and WebSite on every page; BreadcrumbList on 44
- Article on 30 pages, FAQPage on 30, CollectionPage on 6, SoftwareApplication with three Offer nodes on the homepages
- All blocks parse as valid JSON
- Organization carries alternateName in Arabic, addressing brand entity ambiguity
- Offer values match the visible pricing exactly

**Findings**

#### Medium — Organization has no postal address

address is deliberately omitted because no registered address exists. The graph stays valid, but without it there is no LocalBusiness eligibility, no Google Business Profile, and four local-pack keywords remain unreachable.

**Fix:** Add address once the entity is registered, then claim GBP for Dubai, Doha and Riyadh.

---

## Performance (CWV) — 82/100

**What works**

- CLS measured at 0
- 26 requests, 552KB total transfer
- Zero third-party requests on initial load
- AVIF served with WebP and PNG fallbacks; Brotli enabled
- Immutable caching on content-hashed assets, 30 days on images, must-revalidate on HTML
- Fonts self-hosted via next/font with preload; no render-blocking Google Fonts request

**Findings**

#### Medium — TTFB 519ms and full load 2917ms

Server response is moderate rather than fast on shared hosting. Largest resources are real-estate-blueprint-sketch.avif at 67KB and security-blueprint-skyline.avif at 52KB.

**Fix:** Acceptable for shared hosting. If TTFB matters more later, consider a CDN tier with edge caching for HTML.

#### Medium — luxury-villa-showcase served as 151KB JPEG despite an AVIF existing

The file is referenced as a direct src in the property showcase data rather than through a picture element, so the 53KB AVIF that was generated is never used. A 98KB saving is available.

**Fix:** Wrap the property card image in a picture element with AVIF and WebP sources, as the hero and FAQ images already are.

#### Info — No CrUX field data available

The origin has insufficient Chrome traffic for CrUX eligibility, which is expected for a site launched today. All performance figures here are lab measurements.

**Fix:** Re-measure once real traffic accrues. Field data should replace these numbers in the next audit.

---

## AI Search Readiness — 85/100

**What works**

- Full content served as static HTML: AI crawlers that do not execute JavaScript now receive the complete page, which was impossible before the migration
- robots.txt explicitly allows nine AI user agents
- FAQPage schema on 30 pages, feeding People Also Get answers and AI Overviews
- 28 pages open sections with short quotable answer blocks
- 44 tables and 74 lists give extractable, citable structure
- Every guide carries a dated last-updated line

**Findings**

#### High — No third-party citations or reviews

Approximately 25 of the 90 researched keywords show a Reviews SERP feature, including the bare brand term. The site has no presence on G2, Capterra or Software Advice, so that SERP block is unreachable regardless of on-page quality.

**Fix:** Claim G2 and Capterra profiles and seed 8-10 genuine customer reviews. No development work required.

#### Medium — Brand entity is weakly defined

Both Moz and Semrush score the bare brand term at KD 33-35, unusually hard for a brand name. The cause is namespace collision: aqar is the ordinary Arabic word for real estate and also the name of a major Saudi portal. Organization schema with alternateName now helps, but there are no third-party citations yet.

**Fix:** Build entity signals off-site: G2 and Capterra profiles, a LinkedIn company page, and sameAs links in Organization schema pointing at all of them.

---

## Images — 84/100

**What works**

- Zero missing alt attributes across 60 images
- AVIF with WebP fallback throughout; verified image/avif served correctly in production
- Lazy loading below the fold, eager plus fetchpriority high on the LCP hero
- Background images use image-set() so the format cascade works from CSS
- Image payload reduced 94% during the migration

**Findings**

#### Medium — Two Unsplash images still hotlinked

Two property showcase images load directly from images.unsplash.com. Visitor IP addresses are exposed to a third party, the files sit outside your cache policy and CDN, and you do not control their availability. This is also disclosed in the privacy policy, which is correct but avoidable.

**Fix:** Download, convert to AVIF and self-host, as was done for the other assets. Then remove the Unsplash disclosure from the privacy policy.

#### Low — Two images missing width and height

Two of 60 images lack intrinsic dimensions, a small CLS risk. Measured CLS is currently 0.

**Fix:** Add width and height attributes.

---

## Method

- All 46 sitemap URLs fetched and parsed (8 concurrent, 25s timeout)
- Production checks run against the live origin, not a local build
- hreflang validated for self-reference, reciprocity and x-default across all pairs
- Performance and mobile measured in-browser at 375x812 and desktop
- Content uniqueness measured by 8-word shingle overlap between sibling pages
- CrUX queried and unavailable: origin has insufficient traffic history

### One finding was investigated and dismissed

An initial mobile check showed the hero H1 at `opacity: 0`. On inspection `document.hidden` was `true` — the automation pane was backgrounded, which pauses `requestAnimationFrame` and freezes framer-motion mid-animation. Desktop screenshots confirm the H1 renders correctly. Recorded here rather than reported as a defect.
