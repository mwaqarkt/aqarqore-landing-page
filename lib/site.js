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

  // --- Content pages. English-only for now; `locales` gates hreflang and
  // the sitemap so we never advertise an Arabic URL that does not exist. ---
  {
    key: 'crmSaudi',
    en: '/best-real-estate-crm-saudi-arabia/',
    locales: ['en'],
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    key: 'crmQatar',
    en: '/best-real-estate-crm-qatar/',
    locales: ['en'],
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    key: 'ksaCompliance',
    en: '/gcc/ksa-compliance/',
    locales: ['en'],
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    key: 'features',
    en: '/features/',
    ar: '/ar/features/',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    key: 'featWhatsapp',
    en: '/features/whatsapp-ai-qualification/',
    ar: '/ar/features/whatsapp-ai-qualification/',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    key: 'featCommission',
    en: '/features/commission-approvals/',
    ar: '/ar/features/commission-approvals/',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    key: 'featLeads',
    en: '/features/lead-distribution/',
    ar: '/ar/features/lead-distribution/',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    key: 'altSalesforce',
    en: '/alternatives/salesforce/',
    locales: ['en'],
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    key: 'intBayut',
    en: '/integrations/bayut/',
    locales: ['en'],
    priority: 0.85,
    changefreq: 'monthly',
  },
  {
    key: 'intPropertyFinder',
    en: '/integrations/property-finder/',
    locales: ['en'],
    priority: 0.85,
    changefreq: 'monthly',
  },
  {
    key: 'intDubizzle',
    en: '/integrations/dubizzle/',
    locales: ['en'],
    priority: 0.85,
    changefreq: 'monthly',
  },
  {
    key: 'intAqar',
    en: '/integrations/aqar/',
    locales: ['en'],
    priority: 0.85,
    changefreq: 'monthly',
  },
  {
    key: 'intWasalt',
    en: '/integrations/wasalt/',
    locales: ['en'],
    priority: 0.85,
    changefreq: 'monthly',
  },
  {
    key: 'integrations',
    en: '/integrations/',
    locales: ['en'],
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    key: 'guides',
    en: '/guides/',
    locales: ['en'],
    priority: 0.6,
    changefreq: 'monthly',
  },
  {
    key: 'trakheesi',
    en: '/guides/trakheesi/',
    locales: ['en'],
    priority: 0.85,
    changefreq: 'monthly',
  },
  {
    key: 'reraDubai',
    en: '/guides/rera-dubai/',
    locales: ['en'],
    priority: 0.85,
    changefreq: 'monthly',
  },
  {
    key: 'dld',
    en: '/guides/dld/',
    locales: ['en'],
    priority: 0.85,
    changefreq: 'monthly',
  },
  {
    key: 'ejari',
    en: '/guides/ejari/',
    locales: ['en'],
    priority: 0.8,
    changefreq: 'monthly',
  },
];

/** Locales a given route actually ships in. Defaults to all locales. */
export const localesFor = (route) => route.locales ?? LOCALES;

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

  const available = localesFor(route);

  // A single-locale page self-references only. Emitting hreflang for a URL
  // that 404s is worse than emitting none at all.
  if (available.length < 2) {
    return { canonical: abs(route[available[0]]) };
  }

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
