// ---------------------------------------------------------------------------
// Single source of truth for site-wide SEO constants.
// ---------------------------------------------------------------------------

export const SITE_URL = 'https://aqarqore.com';

export const LOCALES = ['en', 'ar'];
export const DEFAULT_LOCALE = 'en';

/** Every indexable route, with its per-locale path and metadata. */
export const ROUTES = [
  { key: 'home',     en: '/',              ar: '/ar/',              priority: 1.0,  changefreq: 'weekly'  },
  { key: 'pricing',  en: '/pricing/',      ar: '/ar/pricing/',      priority: 0.9,  changefreq: 'monthly' },
  { key: 'demo',     en: '/book-a-demo/',  ar: '/ar/book-a-demo/',  priority: 0.9,  changefreq: 'monthly' },
  { key: 'contact',  en: '/contact/',      ar: '/ar/contact/',      priority: 0.6,  changefreq: 'yearly'  },
  { key: 'privacy',  en: '/privacy/',      ar: '/ar/privacy/',      priority: 0.3,  changefreq: 'yearly'  },
  { key: 'terms',    en: '/terms/',        ar: '/ar/terms/',        priority: 0.3,  changefreq: 'yearly'  },
];

export const routeFor = (key, locale) => ROUTES.find((r) => r.key === key)?.[locale] ?? '/';

/** Absolute URL for a path. */
export const abs = (path) => `${SITE_URL}${path === '/' ? '/' : path}`;

/**
 * Builds canonical + reciprocal hreflang for one route in one locale.
 * Every page self-references and points at its sibling, plus x-default → English.
 */
export function alternatesFor(key, locale) {
  const route = ROUTES.find((r) => r.key === key);
  if (!route) return {};
  return {
    canonical: abs(route[locale]),
    languages: {
      en: abs(route.en),
      ar: abs(route.ar),
      'x-default': abs(route.en),
    },
  };
}

/** Open Graph / Twitter image, shared across all routes. */
export const OG_IMAGE = {
  url: abs('/og-image.jpg'),
  width: 1200,
  height: 630,
  alt: 'AqarQore real estate CRM command centre for GCC brokerages',
};
