# Images — 84/100

## What works

- Zero missing alt attributes across 60 images
- AVIF with WebP fallback throughout; verified image/avif served correctly in production
- Lazy loading below the fold, eager plus fetchpriority high on the LCP hero
- Background images use image-set() so the format cascade works from CSS
- Image payload reduced 94% during the migration

## Findings

### Medium: Two Unsplash images still hotlinked

Two property showcase images load directly from images.unsplash.com. Visitor IP addresses are exposed to a third party, the files sit outside your cache policy and CDN, and you do not control their availability. This is also disclosed in the privacy policy, which is correct but avoidable.

**Fix:** Download, convert to AVIF and self-host, as was done for the other assets. Then remove the Unsplash disclosure from the privacy policy.

### Low: Two images missing width and height

Two of 60 images lack intrinsic dimensions, a small CLS risk. Measured CLS is currently 0.

**Fix:** Add width and height attributes.
