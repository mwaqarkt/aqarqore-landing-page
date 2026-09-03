# Schema / Structured Data — 90/100

## What works

- 100% coverage: all 46 pages carry valid JSON-LD
- Organization and WebSite on every page; BreadcrumbList on 44
- Article on 30 pages, FAQPage on 30, CollectionPage on 6, SoftwareApplication with three Offer nodes on the homepages
- All blocks parse as valid JSON
- Organization carries alternateName in Arabic, addressing brand entity ambiguity
- Offer values match the visible pricing exactly

## Findings

### Medium: Organization has no postal address

address is deliberately omitted because no registered address exists. The graph stays valid, but without it there is no LocalBusiness eligibility, no Google Business Profile, and four local-pack keywords remain unreachable.

**Fix:** Add address once the entity is registered, then claim GBP for Dubai, Doha and Riyadh.
