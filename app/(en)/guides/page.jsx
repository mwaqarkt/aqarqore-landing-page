import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import { ArrowRight } from 'lucide-react';

const PATH = routeFor('guides', 'en');

const TITLE = 'Guides for GCC Real Estate Brokerages';
const DESCRIPTION =
  'Practical guides on the systems, portals and regulations GCC brokerages work inside every day — Ejari, REGA, Wafi, ZATCA and choosing real estate software.';

export const metadata = {
  title: 'Guides for GCC Real Estate Brokerages',
  description: DESCRIPTION,
  alternates: alternatesFor('guides', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH) },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Guides', path: PATH },
];

const GUIDES = [
  {
    href: '/guides/ejari/',
    market: 'UAE · Dubai',
    title: 'Ejari: Registration, Renewal and the Broker Workflow',
    blurb:
      'What Ejari is, who files it, the documents required, why applications get rejected, and how brokerages stop renewals slipping through the cracks.',
    read: '8 min',
  },
  {
    href: '/gcc/ksa-compliance/',
    market: 'Saudi Arabia',
    title: 'REGA, Wafi, Ejar and ZATCA: A Saudi Compliance Guide',
    blurb:
      'The six frameworks that shape a Saudi brokerage, what each means day to day, and the records your systems need so compliance is a report rather than a reconstruction.',
    read: '10 min',
  },
  {
    href: '/best-real-estate-crm-saudi-arabia/',
    market: 'Saudi Arabia',
    title: 'Best Real Estate CRM in Saudi Arabia (2026)',
    blurb:
      'Choosing brokerage software for the Kingdom: Aqar and Wasalt lead capture, Arabic-first workflows, commission control and in-Kingdom hosting.',
    read: '9 min',
  },
  {
    href: '/best-real-estate-crm-qatar/',
    market: 'Qatar · Doha',
    title: 'Best Real Estate CRM in Qatar (2026)',
    blurb:
      'Why Qatar is not a smaller Dubai — portal mix, relationship cycles, team structure and what that changes about software selection.',
    read: '8 min',
  },
];

export default function GuidesIndex() {
  const schema = pageSchema('en', abs(PATH), TRAIL, [
    {
      '@type': 'CollectionPage',
      '@id': `${abs(PATH)}#collection`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en',
      url: abs(PATH),
      publisher: { '@id': `${SITE_URL}/#organization` },
      hasPart: GUIDES.map((g) => ({
        '@type': 'Article',
        headline: g.title,
        url: abs(g.href),
        author: { '@type': 'Organization', name: 'AqarQore' },
      })),
    },
  ]);

  return (
    <PageShell locale="en" hasTranslation={false}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <header className="max-w-2xl space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0858A8] text-xs font-mono font-bold uppercase tracking-wider">
            Guides
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12] text-slate-900">
            Guides for GCC real estate brokerages
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Practical writing about the portals, platforms and regulations brokerages in Dubai, Doha and
            Riyadh work inside every day — and how to keep the admin from eating the sales week.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {GUIDES.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#1078C0] hover:shadow-md transition-all"
            >
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0858A8]">
                {g.market}
              </span>
              <h2 className="mt-2.5 text-lg font-extrabold leading-snug text-slate-900 group-hover:text-[#0858A8] transition-colors">
                {g.title}
              </h2>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">{g.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#0858A8]">
                Read guide · {g.read}
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
