import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';
import { HowItWorks, OtherPortals } from '@/components/IntegrationPage';

const PATH = routeFor('intWasalt', 'en');
const TITLE = 'Wasalt CRM Integration for Saudi Brokerages';
const DESCRIPTION = 'Connect Wasalt leads to your CRM with automatic assignment, deduplication against Aqar and Bayut.sa, and handling for auction and off-plan enquiries.';

export const metadata = {
  title: 'Wasalt CRM Integration for Saudi Brokerages | AqarQore',
  description: DESCRIPTION,
  alternates: alternatesFor('intWasalt', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Integrations', path: '/integrations/' },
  { name: 'Wasalt', path: PATH },
];

const FAQS = [
  ["Does AqarQore integrate with Wasalt?",
   "Yes. Wasalt enquiries flow into AqarQore with the source recorded, are auto-assigned to an available agent within seconds, and are deduplicated against Aqar, Bayut.sa and other connected sources."],
  ["What is Wasalt?",
   "Wasalt (wasalt.sa) is a Saudi real estate platform founded in 2020 and licensed by REGA. It covers verified listings, projects, masterplans and online auctions, and the operator reports over 750,000 registered users and around 100,000 monthly leads."],
  ["Should Wasalt leads be routed differently from Aqar leads?",
   "Often, yes. Wasalt carries more auction and project-level inventory, which suits agents who work off-plan and developer allocations rather than resale. Assignment rules can route by property type accordingly."],
  ["Does the CRM handle auction timelines?",
   "Auction enquiries are time-boxed in a way ordinary listings are not, so they should carry a deadline that is visible on the record. Confirm with any vendor how time-limited enquiries are surfaced rather than sitting in a general pipeline."],
  ["Is Wasalt worth integrating if Aqar is our main source?",
   "If Wasalt produces any meaningful volume, an unintegrated source is the one most likely to be handled slowly, because nobody is watching it in the same way. The cost of connecting it is usually far lower than the cost of the leads it leaks."],
];

export default function WasaltIntegration() {
  const schema = pageSchema('en', abs(PATH), TRAIL, [
    {
      '@type': 'Article',
      '@id': `${abs(PATH)}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      inLanguage: 'en',
      datePublished: '2026-08-30',
      dateModified: '2026-08-30',
      author: { '@type': 'Organization', name: 'AqarQore', url: `${SITE_URL}/` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      mainEntityOfPage: abs(PATH),
    },
    {
      '@type': 'FAQPage',
      '@id': `${abs(PATH)}#faq`,
      inLanguage: 'en',
      mainEntity: FAQS.map(([name, text]) => ({
        '@type': 'Question',
        name,
        acceptedAnswer: { '@type': 'Answer', text },
      })),
    },
  ]);

  return (
    <PageShell locale="en" hasTranslation={false}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Article
        title={TITLE}
        lede='Wasalt is the newer entrant in Saudi property, REGA-licensed and built around verified listings, auctions and AI valuation. Its lead profile is different enough from Aqar that routing them identically wastes the difference.'
        updated="30 August 2026"
        readTime='6 min read'
        toc={[{ id: 'summary', label: 'What the integration does' }, { id: 'portal', label: 'About Wasalt' }, { id: 'profile', label: 'A different lead profile' }, { id: 'how', label: 'How the connection works' }, { id: 'auctions', label: 'Auction and off-plan enquiries' }, { id: 'evaluate', label: 'What to verify' }, { id: 'faq', label: 'Frequently asked questions' }]}
      >
        <H2 id="summary">What the integration does</H2>
        <AnswerBlock>
          Wasalt enquiries arrive in AqarQore with the source recorded, are{' '}
          <strong>auto-assigned within seconds</strong>, and are deduplicated against Aqar and other
          connected Saudi sources — with routing that can separate auction and project enquiries from
          ordinary resale.
        </AnswerBlock>

        <H2 id="portal">About Wasalt</H2>
        <P>
          Wasalt (wasalt.sa) launched in 2020 and is licensed by REGA, the General Real Estate Authority. It
          positions around verified listings, developer projects and masterplans, and online auctions, with
          AI-assisted valuation and content tooling layered on top.
        </P>
        <P>
          The operator reports more than 750,000 registered users and roughly 100,000 leads a month, with
          coverage concentrated in Riyadh, Jeddah, Dammam and Al-Khobar.
        </P>

        <H2 id="profile">A different lead profile</H2>
        <P>
          Wasalt&apos;s weighting toward projects, masterplans and auctions means its enquiries skew away
          from straightforward resale. That has two practical consequences for how they should be handled.
        </P>
        <UL>
          <li>
            <strong>Different agents.</strong> Off-plan and project enquiries need agents who understand
            developer allocations and payment milestones, which is a different skill from resale.
          </li>
          <li>
            <strong>Different urgency.</strong> Auction enquiries carry a deadline. An enquiry that sits for
            two days in an ordinary pipeline may already be worthless.
          </li>
        </UL>

        <H2 id="how">How the connection works</H2>
        <HowItWorks
          steps={[
            { t: 'Enquiry arrives', d: 'A buyer enquires against a Wasalt listing, project or auction lot.' },
            { t: 'Captured with source', d: 'The lead enters AqarQore tagged as Wasalt, distinct from Aqar for attribution purposes.' },
            { t: 'Deduplication', d: 'Matched on phone and email against Aqar, Bayut.sa and other sources, retaining both origins on merge.' },
            { t: 'Type-aware routing', d: 'Project, auction and resale enquiries can follow separate rules and reach different agents.' },
            { t: 'Assigned and notified', d: 'The eligible agent is notified immediately, with the decision logged.' },
          ]}
        />

        <H2 id="auctions">Auction and off-plan enquiries</H2>
        <P>
          Off-plan inventory does not fit a standard lead pipeline. A resale pipeline tracks a buyer against a
          property; an off-plan pipeline tracks a buyer against a specific unit in a registered project, with
          a payment schedule and an allocation that must not be sold twice.
        </P>
        <P>
          In Saudi Arabia that also intersects with Wafi, which governs off-plan sales and escrow. The{' '}
          <Link href="/gcc/ksa-compliance/" className="font-semibold text-[#0858A8] hover:underline">
            compliance guide
          </Link>{' '}
          covers what needs to be recorded; the integration&apos;s job is simply to get the enquiry to the
          right agent before the window closes.
        </P>

        <H2 id="evaluate">What to verify</H2>
        <UL>
          <li>Are Wasalt and Aqar recorded as distinct sources?</li>
          <li>Can assignment rules separate auction, project and resale enquiries?</li>
          <li>Are time-limited enquiries surfaced with their deadline visible?</li>
          <li>Does unit-level allocation exist for off-plan, or only property-level listings?</li>
        </UL>

        <Cta
          heading="See Wasalt and Aqar in one pipeline"
          body="A 20-minute walkthrough of both Saudi sources feeding one deduplicated pipeline, with routing that separates auction and off-plan from resale."
        />

        <OtherPortals current='Wasalt' />
        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />
      </Article>
    </PageShell>
  );
}
