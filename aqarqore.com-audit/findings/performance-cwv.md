# Performance (CWV) — 82/100

## What works

- CLS measured at 0
- 26 requests, 552KB total transfer
- Zero third-party requests on initial load
- AVIF served with WebP and PNG fallbacks; Brotli enabled
- Immutable caching on content-hashed assets, 30 days on images, must-revalidate on HTML
- Fonts self-hosted via next/font with preload; no render-blocking Google Fonts request

## Findings

### Medium: TTFB 519ms and full load 2917ms

Server response is moderate rather than fast on shared hosting. Largest resources are real-estate-blueprint-sketch.avif at 67KB and security-blueprint-skyline.avif at 52KB.

**Fix:** Acceptable for shared hosting. If TTFB matters more later, consider a CDN tier with edge caching for HTML.

### Medium: luxury-villa-showcase served as 151KB JPEG despite an AVIF existing

The file is referenced as a direct src in the property showcase data rather than through a picture element, so the 53KB AVIF that was generated is never used. A 98KB saving is available.

**Fix:** Wrap the property card image in a picture element with AVIF and WebP sources, as the hero and FAQ images already are.

### Info: No CrUX field data available

The origin has insufficient Chrome traffic for CrUX eligibility, which is expected for a site launched today. All performance figures here are lab measurements.

**Fix:** Re-measure once real traffic accrues. Field data should replace these numbers in the next audit.
