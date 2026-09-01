import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import { ArrowRight } from 'lucide-react';

const PATH = routeFor('alternatives', 'en');
const TITLE = 'Real Estate CRM Alternatives Compared';
const DESCRIPTION =
  'Honest comparisons for GCC brokerages evaluating Salesforce, Zoho, PropSpace and Masterkey — argued on structure, cost and fit rather than feature grids.';

export const metadata = {
  title: 'Real Estate CRM Alternatives | AqarQore',
  description: DESCRIPTION,
  alternates: alternatesFor('alternatives', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH) },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Alternatives', path: PATH },
];

const ITEMS = [
  {
    href: '/alternatives/salesforce/',
    kind: 'Horizontal platform',
    name: 'Salesforce',
    blurb:
      'Capable and deep, but a platform you configure into a real estate system. The decision usually turns on implementation budget and whether you have an administrator.',
  },
  {
    href: '/alternatives/zoho-crm/',
    kind: 'Horizontal platform',
    name: 'Zoho CRM',
    blurb:
      'The cheapest serious option, and price is not the problem. The question is how many weeks of configuration sit between the subscription and a system agents use.',
  },
  {
    href: '/alternatives/propspace/',
    kind: 'Regional specialist',
    name: 'PropSpace',
    blurb:
      'The longest-running UAE real estate CRM, founded 2012 and spun out of Property Finder as an independent company in 2024. Real regional depth.',
  },
  {
    href: '/alternatives/masterkey/',
    kind: 'Enterprise suite',
    name: 'Masterkey',
    blurb:
      'A long-established dubizzle group platform spanning sales, leasing and property management. Breadth is an asset if you manage buildings, overhead if you only sell.',
  },
];

export default function AlternativesIndex() {
  const schema = pageSchema('en', abs(PATH), TRAIL, [
    {
      '@type': 'CollectionPage',
      '@id': `${abs(PATH)}#collection`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en',
      url: abs(PATH),
      publisher: { '@id': `${SITE_URL}/#organization` },
      hasPart: ITEMS.map((i) => ({ '@type': 'WebPage', name: `${i.name} alternatives`, url: abs(i.href) })),
    },
  ]);

  return (
    <PageShell locale="en" hasTranslation={false}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <header className="max-w-2xl space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0858A8] text-xs font-mono font-bold uppercase tracking-wider">
            Alternatives
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12] text-slate-900">
            CRM alternatives, compared honestly
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            We build a competing product, so these pages argue on structure, total cost and fit rather than
            feature grids we would obviously win. Each one includes the case for staying where you are,
            because a meaningful share of &ldquo;our CRM is not working&rdquo; is a configuration problem
            rather than a platform problem.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {ITEMS.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#1078C0] hover:shadow-md transition-all"
            >
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0858A8]">
                {i.kind}
              </span>
              <h2 className="mt-2 text-xl font-extrabold text-slate-900 group-hover:text-[#0858A8] transition-colors">
                {i.name}
              </h2>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">{i.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#0858A8]">
                Read the comparison
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm leading-relaxed text-slate-600">
          One question worth asking every vendor on your shortlist, us included:{' '}
          <strong>who owns the company holding your pipeline data, and do they also operate a portal you buy
          leads from?</strong> It is not disqualifying either way — it is simply a fact you should have before
          you sign.
        </p>
      </section>
    </PageShell>
  );
}
