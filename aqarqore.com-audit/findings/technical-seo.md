# Technical SEO — 92/100

## What works

- All 46 sitemap URLs return 200 with no redirect chains
- Static HTML: is_spa false, full content served without JavaScript
- robots.txt explicitly allows GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-Web, Google-Extended, Applebot-Extended and CCBot
- Canonical on every page, zero duplicates, zero missing
- hreflang validated across 26 bilingual pages with zero errors: self-referencing, reciprocal, x-default present
- www to apex 301 and http to https 301 both confirmed in production
- Security headers present: X-Content-Type-Options, Referrer-Policy, X-Frame-Options
- Brotli compression active; AVIF served with correct image/avif MIME type
- noindex correctly present only on 404

## Findings

### Critical: Mobile navigation menu is unreachable

At a 375px viewport the hamburger button occupies x=408 to x=446, entirely outside the viewport. Because body has overflow-x-hidden, no scrollbar appears and the button simply cannot be reached. Root cause: the Book Live Demo CTA in the header carries no responsive hiding class, so it renders at every breakpoint alongside the logo lockup and language toggle, and the action group is flex-shrink-0. Mobile users cannot open site navigation at all. GCC traffic is mobile-heavy, and mobile usability is a ranking signal.

**Fix:** Add 'hidden sm:flex' to the header CTA anchor in components/LandingPage.jsx so it is suppressed on phones, leaving the hamburger visible. Retest at 320px, 375px and 414px.

### Low: No llms.txt

/llms.txt returns 404. This is an emerging, optional convention and is ignored by Google. Some AI crawlers reference it.

**Fix:** Optional. If added, list the guides and feature pages you most want cited.
