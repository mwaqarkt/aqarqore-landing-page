import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import { ArrowRight } from 'lucide-react';

const PATH = routeFor('integrations', 'en');
const TITLE = 'Property Portal Integrations for GCC Brokerages';
const DESCRIPTION =
  'Connect Property Finder, Bayut, Dubizzle, Aqar and Wasalt to one deduplicated pipeline, with automatic assignment in seconds and a full audit trail on every lead.';

export const metadata = {
  title: 'Property Portal Integrations | AqarQore',
  description: DESCRIPTION,
  alternates: alternatesFor('integrations', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH) },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Integrations', path: PATH },
];

const PORTALS = [
  {
    href: '/integrations/property-finder/',
    market: 'UAE · Qatar',
    name: 'Property Finder',
    blurb:
      'The largest UAE portal by listings and traffic, and the dominant portal in Qatar. Founded 2007, independent of Dubizzle Group.',
  },
  {
    href: '/integrations/bayut/',
    market: 'UAE',
    name: 'Bayut',
    blurb:
      'Second-largest UAE portal, part of Dubizzle Group. Ties visibility to listing quality through TruCheck verification and Trakheesi permit status.',
  },
  {
    href: '/integrations/dubizzle/',
    market: 'UAE',
    name: 'Dubizzle',
    blurb:
      'Broader classifieds heritage and a more rental-weighted, price-sensitive audience than the dedicated property portals.',
  },
  {
    href: '/integrations/aqar/',
    market: 'Saudi Arabia',
    name: 'Aqar',
    blurb:
      'The largest real estate platform in Saudi Arabia. Established 2014, with over 1.5 million listings and roughly two million monthly active users.',
  },
  {
    href: '/integrations/wasalt/',
    market: 'Saudi Arabia',
    name: 'Wasalt',
    blurb:
      'REGA-licensed platform founded in 2020, weighted toward verified listings, developer projects and online auctions.',
  },
];

export default function IntegrationsIndex() {
  const schema = pageSchema('en', abs(PATH), TRAIL, [
    {
      '@type': 'CollectionPage',
      '@id': `${abs(PATH)}#collection`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en',
      url: abs(PATH),
      publisher: { '@id': `${SITE_URL}/#organization` },
      hasPart: PORTALS.map((p) => ({ '@type': 'WebPage', name: `${p.name} integration`, url: abs(p.href) })),
    },
  ]);

  return (
    <PageShell locale="en" hasTranslation={false}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <header className="max-w-2xl space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0858A8] text-xs font-mono font-bold uppercase tracking-wider">
            Integrations
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12] text-slate-900">
            Every portal, one deduplicated pipeline
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Serious buyers enquire on more than one portal. Without deduplication that means two records, two
            agents, two calls to the same person — and a commission dispute waiting to happen. AqarQore
            matches across every connected source and keeps the original agent.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {PORTALS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#1078C0] hover:shadow-md transition-all"
            >
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0858A8]">
                {p.market}
              </span>
              <h2 className="mt-2 text-xl font-extrabold text-slate-900 group-hover:text-[#0858A8] transition-colors">
                {p.name}
              </h2>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">{p.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#0858A8]">
                Integration details
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-slate-600">
          Each connection feeds the same{' '}
          <Link href="/features/lead-distribution/" className="font-semibold text-[#0858A8] hover:underline">
            assignment engine
          </Link>
          , so a lead arriving at 9pm on Thursday reaches an available agent in seconds regardless of which
          portal it came from.
        </p>
      </section>
    </PageShell>
  );
}
