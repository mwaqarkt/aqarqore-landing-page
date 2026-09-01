import { ROUTES, abs, localesFor } from '@/lib/site';

// Required by output: 'export' — emitted as a static file at build time.
export const dynamic = 'force-static';

// Generated from the single ROUTES manifest, so the sitemap can never drift
// out of sync with what actually ships. Includes reciprocal hreflang.
export default function sitemap() {
  const now = new Date();
  return ROUTES.flatMap((route) => {
    const available = localesFor(route);
    return available.map((locale) => ({
      url: abs(route[locale]),
      lastModified: now,
      changeFrequency: route.changefreq,
      priority: locale === 'en' ? route.priority : route.priority * 0.9,
      ...(available.length > 1
        ? { alternates: { languages: { en: abs(route.en), ar: abs(route.ar) } } }
        : {}),
    }));
  });
}
