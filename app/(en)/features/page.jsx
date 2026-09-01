import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import { ArrowRight, Zap, MessageSquare, DollarSign } from 'lucide-react';

const PATH = routeFor('features', 'en');

const TITLE = 'AqarQore Features for GCC Brokerages';
const DESCRIPTION =
  'Lead distribution in under 10 seconds, WhatsApp buyer qualification on the official Meta Cloud API, and enforced two-step commission approvals.';

export const metadata = {
  title: 'Features — AqarQore Real Estate CRM',
  description: DESCRIPTION,
  alternates: alternatesFor('features', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH) },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: PATH },
];

const FEATURES = [
  {
    href: '/features/lead-distribution/',
    icon: Zap,
    eyebrow: 'Speed to lead',
    title: 'Automated Lead Distribution',
    blurb:
      'Every enquiry from Property Finder, Bayut, Dubizzle, Aqar and Wasalt assigned to an available agent in seconds — with duplicate detection and a full assignment trail.',
  },
  {
    href: '/features/whatsapp-ai-qualification/',
    icon: MessageSquare,
    eyebrow: 'Conversational AI',
    title: 'WhatsApp Lead Qualification',
    blurb:
      'Budget, area and property type captured on your own agency number via the official Meta WhatsApp Cloud API, then handed to a human agent with full context.',
  },
  {
    href: '/features/commission-approvals/',
    icon: DollarSign,
    eyebrow: 'Financial control',
    title: 'Two-Step Commission Approvals',
    blurb:
      'Director and accounting signoffs that cannot be skipped or edited, idempotent payout batches, and an immutable audit trail behind every figure.',
  },
];

export default function FeaturesIndex() {
  const schema = pageSchema('en', abs(PATH), TRAIL, [
    {
      '@type': 'CollectionPage',
      '@id': `${abs(PATH)}#collection`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en',
      url: abs(PATH),
      publisher: { '@id': `${SITE_URL}/#organization` },
      hasPart: FEATURES.map((f) => ({
        '@type': 'WebPage',
        name: f.title,
        url: abs(f.href),
      })),
    },
  ]);

  return (
    <PageShell locale="en" hasTranslation={false}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <header className="max-w-2xl space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0858A8] text-xs font-mono font-bold uppercase tracking-wider">
            Features
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12] text-slate-900">
            Built for how GCC brokerages actually work
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            Three capabilities that address where brokerages in Dubai, Doha and Riyadh lose the most money:
            slow first response, conversations trapped on personal phones, and commission figures nobody can
            evidence.
          </p>
        </header>

        <div className="mt-12 space-y-5">
          {FEATURES.map(({ href, icon: Icon, eyebrow, title, blurb }) => (
            <Link
              key={href}
              href={href}
              className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:border-[#1078C0] hover:shadow-md transition-all"
            >
              <span className="w-11 h-11 shrink-0 rounded-xl bg-blue-50 text-[#0858A8] flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </span>
              <span className="flex-1">
                <span className="block text-[11px] font-mono font-bold uppercase tracking-widest text-[#0858A8]">
                  {eyebrow}
                </span>
                <h2 className="mt-1.5 text-xl font-extrabold text-slate-900 group-hover:text-[#0858A8] transition-colors">
                  {title}
                </h2>
                <span className="mt-2.5 block text-sm leading-relaxed text-slate-600">{blurb}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0858A8]">
                  Read more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
