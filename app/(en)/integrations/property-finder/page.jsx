import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';
import { HowItWorks, OtherPortals } from '@/components/IntegrationPage';

const PATH = routeFor('intPropertyFinder', 'en');
const TITLE = 'Property Finder CRM Integration for GCC Brokerages';
const DESCRIPTION = 'Connect Property Finder UAE and Qatar leads to your CRM: automatic assignment in seconds, cross-portal duplicate detection, and Trakheesi permit tracking on every Dubai listing.';

export const metadata = {
  title: 'Property Finder CRM Integration | AqarQore',
  description: DESCRIPTION,
  alternates: alternatesFor('intPropertyFinder', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Integrations', path: '/integrations/' },
  { name: 'Property Finder', path: PATH },
];

const FAQS = [
  ["Does AqarQore integrate with Property Finder?",
   "Yes. Property Finder enquiries flow into AqarQore and are auto-assigned to an available agent within seconds, with the portal recorded as the lead source and duplicates matched against enquiries from other portals."],
  ["Is this a real API connection or email parsing?",
   "Ask this of every vendor, including us, and get a specific answer. Email parsing breaks when a portal changes its notification template, loses structured fields, and cannot reliably detect the same buyer enquiring twice."],
  ["What happens if the same buyer enquires on Property Finder and Bayut?",
   "The duplicate is detected by phone number and email, merged into the existing record, and the original agent is retained. Both sources are recorded, so lead attribution stays accurate and no second agent is assigned."],
  ["Does it handle Property Finder Qatar as well as UAE?",
   "Yes. Property Finder operates across both markets and is the dominant portal in Qatar, where enquiry volume is smaller and each lead is proportionally more valuable."],
  ["Can we still work leads inside the Property Finder agent portal?",
   "You can, but running two systems splits your history. The point of integrating is that the CRM becomes the single record of what happened with each buyer, including WhatsApp conversations the portal never sees."],
];

export default function PropertyFinderIntegration() {
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
        lede='Property Finder is the portal most GCC brokerages cannot afford to handle badly. It is the largest source of enquiries in the UAE and the dominant portal in Qatar — which makes the gap between an enquiry arriving and an agent responding the most expensive gap in the business.'
        updated="30 August 2026"
        readTime='7 min read'
        toc={[{ id: 'summary', label: 'What the integration does' }, { id: 'portal', label: 'About Property Finder' }, { id: 'how', label: 'How the connection works' }, { id: 'trakheesi', label: 'Trakheesi permits' }, { id: 'qatar', label: 'The Qatar difference' }, { id: 'evaluate', label: 'What to verify' }, { id: 'faq', label: 'Frequently asked questions' }]}
      >
        <H2 id="summary">What the integration does</H2>
        <AnswerBlock>
          Property Finder enquiries arrive in AqarQore with the source recorded, are{' '}
          <strong>auto-assigned to an available agent within seconds</strong>, and are matched against
          enquiries from other portals so the same buyer is never assigned twice. Every assignment decision
          is logged.
        </AnswerBlock>

        <H2 id="portal">About Property Finder</H2>
        <P>
          Founded in 2007 and headquartered in Dubai, Property Finder is generally regarded as the largest
          property portal in the UAE by listings, broker base and search traffic. Unlike Bayut and Dubizzle —
          which both sit under Dubizzle Group — it operates as an independent business.
        </P>
        <P>
          It is also the dominant portal in Qatar, which makes it the one connection almost every brokerage
          across the two markets needs working properly before anything else.
        </P>

        <H2 id="how">How the connection works</H2>
        <HowItWorks
          steps={[
            { t: 'Enquiry arrives', d: 'A buyer submits an enquiry or calls against one of your Property Finder listings.' },
            { t: 'Captured with source', d: 'The lead enters AqarQore with the portal, the listing reference and the enquiry time recorded.' },
            { t: 'Duplicate check', d: 'Phone and email are matched against existing records across every connected portal. A match merges rather than duplicates.' },
            { t: 'Rules evaluated', d: 'Availability, capacity, area and property type are checked in sequence. Agents who fail a check are skipped, with the reason logged.' },
            { t: 'Assigned and notified', d: 'The first eligible agent receives the lead and a notification — typically within seconds, including outside office hours.' },
          ]}
        />
        <P>
          The last step is the one that matters commercially. Enquiry volume peaks in the evening and across
          the weekend, which is exactly when a shared inbox goes unwatched. See{' '}
          <Link href="/features/lead-distribution/" className="font-semibold text-[#0858A8] hover:underline">
            automated lead distribution
          </Link>{' '}
          for how the rules are built.
        </P>

        <H2 id="trakheesi">Trakheesi permits</H2>
        <P>
          Every property advertisement in Dubai requires a valid Trakheesi permit. The RERA system, launched
          in 2017, ties each listing to a licensed broker, a verified seller authorisation and an active
          title deed, and the permit number is displayed in the listing footer on Property Finder.
        </P>
        <P>
          Operationally this means permit numbers and their expiry belong against the listing record rather
          than in a separate spreadsheet. A lapsed permit is not a paperwork problem — it is a listing that
          comes down, and enquiries that stop.
        </P>

        <H2 id="qatar">The Qatar difference</H2>
        <P>
          Property Finder Qatar behaves differently from the UAE market. Volume is lower, values are often
          higher, and relationship cycles are longer, with more repeat and referral business. The practical
          consequence is that a single lost enquiry costs proportionally more in Doha than in Dubai, and
          complete conversation history matters more than raw throughput.
        </P>
        <P>
          More on that market in the{' '}
          <Link href="/best-real-estate-crm-qatar/" className="font-semibold text-[#0858A8] hover:underline">
            Qatar CRM guide
          </Link>
          .
        </P>

        <H2 id="evaluate">What to verify</H2>
        <UL>
          <li>Is the connection an API or an email parser? Ask for specifics, not reassurance.</li>
          <li>How quickly is a lead assigned outside working hours?</li>
          <li>How is the same buyer enquiring across two portals detected?</li>
          <li>Are Trakheesi permit numbers and expiry dates tracked against listings?</li>
          <li>Is the assignment decision auditable when an agent asks why they did not receive a lead?</li>
        </UL>

        <Cta
          heading="See your own Property Finder feed"
          body="A 20-minute walkthrough using your live enquiries — capture, duplicate handling, assignment rules and the audit trail behind each decision."
        />

        <OtherPortals current='Property Finder' />
        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />
      </Article>
    </PageShell>
  );
}
