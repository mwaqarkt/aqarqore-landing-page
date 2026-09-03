# Action Plan — https://aqarqore.com

Health Score **84/100** · 2026-09-01

Ordered by severity, then effort. Each item names the file or system to change.

---

## Critical

### Mobile navigation menu is unreachable
*Technical SEO*

At a 375px viewport the hamburger button occupies x=408 to x=446, entirely outside the viewport. Because body has overflow-x-hidden, no scrollbar appears and the button simply cannot be reached. Root cause: the Book Live Demo CTA in the header carries no responsive hiding class, so it renders at every breakpoint alongside the logo lockup and language toggle, and the action group is flex-shrink-0. Mobile users cannot open site navigation at all. GCC traffic is mobile-heavy, and mobile usability is a ranking signal.

**Action:** Add 'hidden sm:flex' to the header CTA anchor in components/LandingPage.jsx so it is suppressed on phones, leaving the hamburger visible. Retest at 320px, 375px and 414px.

---

## High

### Regulatory document tables not verified against source
*Content Quality*

The Ejari and Trakheesi guides publish document checklists that brokers may act on. These were compiled from secondary sources and have not been verified against current Dubai Land Department guidance. Published sources disagreed on Trakheesi fees, so no fee figure was stated, but the document lists remain unverified.

**Action:** Have someone with DLD familiarity verify both tables before promoting these pages.

### 20 of 46 meta descriptions exceed 160 characters
*On-Page SEO*

Affected pages include all four alternatives pages (167-182 chars), both country CRM guides (167-183), the feature pages (173-183) and several guides. Google truncates around 155-160 characters, so the closing clause of each is lost in the SERP.

**Action:** Rewrite the 20 descriptions to 150-155 characters, front-loading the differentiating claim.

### No third-party citations or reviews
*AI Search Readiness*

Approximately 25 of the 90 researched keywords show a Reviews SERP feature, including the bare brand term. The site has no presence on G2, Capterra or Software Advice, so that SERP block is unreachable regardless of on-page quality.

**Action:** Claim G2 and Capterra profiles and seed 8-10 genuine customer reviews. No development work required.

---

## Medium

### 11 pages under 300 words
*Content Quality*

Thin pages: /alternatives (270w), /ar/book-a-demo (108w), /ar/contact (109w), /ar/features (165w), /ar/guides (180w), /ar/pricing (235w), /book-a-demo (105w), /contact (115w) and others. Form and contact pages are legitimately short and this is expected. The hub pages are the genuine concern: /alternatives, /ar/features and /ar/guides are navigational shells with little unique substance.

**Action:** Add 200-300 words of orienting content to the hub pages explaining how to choose between the items listed. Leave the form pages as they are.

### Article author is an Organization, not a named person
*Content Quality*

All 30 Article schema blocks use author as Organization AqarQore. Google's guidance on helpful content leans toward identifiable expertise, particularly for the regulatory guides where authority matters most.

**Action:** Add a named author with a Person schema and a short bio to the Ejari, Trakheesi, RERA, DLD and Saudi compliance guides.

### Published statistics lack sample size and period
*Content Quality*

The 74%, 99.8%, 4.2x and 100% figures are now attributed to AqarQore platform telemetry but carry no sample size or date range, so they cannot be independently assessed.

**Action:** Add 'N agencies, [period]' beside each figure, or reframe them qualitatively.

### Organization has no postal address
*Schema / Structured Data*

address is deliberately omitted because no registered address exists. The graph stays valid, but without it there is no LocalBusiness eligibility, no Google Business Profile, and four local-pack keywords remain unreachable.

**Action:** Add address once the entity is registered, then claim GBP for Dubai, Doha and Riyadh.

### TTFB 519ms and full load 2917ms
*Performance (CWV)*

Server response is moderate rather than fast on shared hosting. Largest resources are real-estate-blueprint-sketch.avif at 67KB and security-blueprint-skyline.avif at 52KB.

**Action:** Acceptable for shared hosting. If TTFB matters more later, consider a CDN tier with edge caching for HTML.

### luxury-villa-showcase served as 151KB JPEG despite an AVIF existing
*Performance (CWV)*

The file is referenced as a direct src in the property showcase data rather than through a picture element, so the 53KB AVIF that was generated is never used. A 98KB saving is available.

**Action:** Wrap the property card image in a picture element with AVIF and WebP sources, as the hero and FAQ images already are.

### Brand entity is weakly defined
*AI Search Readiness*

Both Moz and Semrush score the bare brand term at KD 33-35, unusually hard for a brand name. The cause is namespace collision: aqar is the ordinary Arabic word for real estate and also the name of a major Saudi portal. Organization schema with alternateName now helps, but there are no third-party citations yet.

**Action:** Build entity signals off-site: G2 and Capterra profiles, a LinkedIn company page, and sameAs links in Organization schema pointing at all of them.

### Two Unsplash images still hotlinked
*Images*

Two property showcase images load directly from images.unsplash.com. Visitor IP addresses are exposed to a third party, the files sit outside your cache policy and CDN, and you do not control their availability. This is also disclosed in the privacy policy, which is correct but avoidable.

**Action:** Download, convert to AVIF and self-host, as was done for the other assets. Then remove the Unsplash disclosure from the privacy policy.

---

## Low

### No llms.txt
*Technical SEO*

/llms.txt returns 404. This is an emerging, optional convention and is ignored by Google. Some AI crawlers reference it.

**Action:** Optional. If added, list the guides and feature pages you most want cited.

### Two images missing width and height
*Images*

Two of 60 images lack intrinsic dimensions, a small CLS risk. Measured CLS is currently 0.

**Action:** Add width and height attributes.

---

## Info

### No CrUX field data available
*Performance (CWV)*

The origin has insufficient Chrome traffic for CrUX eligibility, which is expected for a site launched today. All performance figures here are lab measurements.

**Action:** Re-measure once real traffic accrues. Field data should replace these numbers in the next audit.

---

## Phased rollout

### Phase 1: Critical Fixes — Week 1

- [ ] Fix the mobile header so the hamburger is reachable: add 'hidden sm:flex' to the header CTA. Retest at 320, 375 and 414px.
- [ ] Submit the sitemap to Google Search Console and Bing Webmaster Tools. Nothing is indexed until this happens.
- [ ] Test the demo form end to end and confirm WhatsApp opens on +966 57 588 4274 with details pre-filled.

### Phase 2: High-Impact Improvements — Weeks 2-3

- [ ] Rewrite the 20 over-length meta descriptions to 150-155 characters.
- [ ] Claim G2 and Capterra profiles and seed genuine reviews; add sameAs links to Organization schema.
- [ ] Verify the Ejari and Trakheesi document tables against current DLD guidance.
- [ ] Self-host the two remaining Unsplash images as AVIF.
- [ ] Serve luxury-villa-showcase through a picture element to save 98KB.

### Phase 3: Content & Authority — Month 2

- [ ] Add a named author with Person schema to the regulatory guides.
- [ ] Add sample size and period to the published telemetry figures.
- [ ] Expand the thin hub pages with 200-300 words of orienting content.
- [ ] Obtain a registered address, add it to Organization schema and claim Google Business Profile, unlocking four local-pack keywords.
- [ ] Legal review of the privacy policy and terms.

### Phase 4: Monitoring & Iteration — Ongoing

- [ ] Re-measure Core Web Vitals against CrUX field data once traffic accrues.
- [ ] Track indexation coverage in Search Console weekly for the first month.
- [ ] Capture an SEO drift baseline so future deploys can be diffed.
- [ ] Monitor whether the Tier B guides (Ejari, DLD, RERA, Trakheesi) attract the traffic the volume data predicted.
