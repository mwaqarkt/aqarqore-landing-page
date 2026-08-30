import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';
import { HowItWorks, OtherPortals } from '@/components/IntegrationPage';

const PATH = routeFor('intAqar', 'en');
const TITLE = 'Aqar (aqar.fm) CRM Integration for Saudi Brokerages';
const DESCRIPTION = 'Connect Aqar (aqar.fm) leads to your CRM: automatic assignment in seconds, Arabic-first agent workflows, deduplication against Wasalt and Bayut.sa, and a full assignment trail.';

export const metadata = {
  title: 'Aqar CRM Integration for Saudi Brokerages | AqarQore',
  description: DESCRIPTION,
  alternates: alternatesFor('intAqar', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Integrations', path: '/integrations/' },
  { name: 'Aqar', path: PATH },
];

const FAQS = [
  ["Does AqarQore integrate with Aqar?",
   "Yes. Aqar (aqar.fm) enquiries flow into AqarQore with the source recorded, are auto-assigned to an available agent within seconds, and are matched against leads from Wasalt, Bayut.sa and other connected sources."],
  ["What is Aqar?",
   "Aqar (aqar.fm) is the largest online real estate listing platform in Saudi Arabia, established in 2014. The operator reports more than 1.5 million listings across 21 property categories and around two million active users per month."],
  ["Does the CRM work in Arabic for Saudi agents?",
   "It needs to, and this matters more in Saudi Arabia than elsewhere in the GCC because agents work in Arabic day to day. That means genuine right-to-left layout across tables, forms and reports, not a translated menu over a left-to-right interface."],
  ["Can Aqar leads be qualified over WhatsApp in Arabic?",
   "Yes. Enquiries can be routed into a WhatsApp qualification flow on your own agency number via the official Meta Cloud API, with Arabic conversation and Arabic listing cards, before handing to a human agent."],
  ["Does integrating with Aqar help with REGA or FAL compliance?",
   "Not directly. What it does is keep lead source, assignment and agent attribution recorded cleanly, which is the underlying data most compliance and dispute questions depend on. Licensing itself remains your obligation."],
];

export default function AqarIntegration() {
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
        lede='Aqar is the largest real estate platform in Saudi Arabia by some distance. For a Riyadh or Jeddah brokerage it is usually the primary source of demand — which makes how quickly an Aqar enquiry reaches an agent the number that moves revenue.'
        updated="30 August 2026"
        readTime='7 min read'
        toc={[{ id: 'summary', label: 'What the integration does' }, { id: 'portal', label: 'About Aqar' }, { id: 'arabic', label: 'Arabic-first handling' }, { id: 'how', label: 'How the connection works' }, { id: 'regulatory', label: 'Where this touches REGA and FAL' }, { id: 'evaluate', label: 'What to verify' }, { id: 'faq', label: 'Frequently asked questions' }]}
      >
        <H2 id="summary">What the integration does</H2>
        <AnswerBlock>
          Aqar enquiries arrive in AqarQore with the source recorded, are{' '}
          <strong>auto-assigned to an available agent within seconds</strong>, and can flow straight into an
          Arabic WhatsApp qualification conversation before an agent picks them up.
        </AnswerBlock>

        <H2 id="portal">About Aqar</H2>
        <P>
          Aqar, at aqar.fm, was established in 2014 and is the largest online real estate listing platform in
          Saudi Arabia. The operator reports more than 1.5 million listings across 21 property categories,
          alongside roughly two million monthly active users and substantial app distribution on iOS and
          Android.
        </P>
        <P>
          For most Saudi brokerages this makes Aqar the primary demand channel rather than one of several.
          The practical implication is uncomfortable but simple: however well the rest of your process works,
          it is gated on how fast an Aqar enquiry reaches somebody who can answer it.
        </P>

        <H2 id="arabic">Arabic-first handling</H2>
        <P>
          Saudi Arabia is where Arabic-first genuinely matters. Agents work in Arabic, buyers message in
          Arabic, and a system that only supports Arabic as a translated menu layer will be quietly abandoned
          for WhatsApp and a spreadsheet within a quarter.
        </P>
        <UL>
          <li>Full right-to-left layout across tables, forms, reports and notifications — not just navigation.</li>
          <li>Arabic WhatsApp qualification flows and listing cards, tested with a native speaker.</li>
          <li>Arabic property descriptions that survive the round trip to the portal without mangling.</li>
        </UL>
        <P>
          More on this in the{' '}
          <Link href="/best-real-estate-crm-saudi-arabia/" className="font-semibold text-[#0858A8] hover:underline">
            Saudi CRM guide
          </Link>
          .
        </P>

        <H2 id="how">How the connection works</H2>
        <HowItWorks
          steps={[
            { t: 'Enquiry arrives', d: 'A buyer enquires against one of your Aqar listings.' },
            { t: 'Captured with source', d: 'The lead enters AqarQore tagged as Aqar, with listing reference and timestamp.' },
            { t: 'Deduplication', d: 'Matched on phone and email against Wasalt, Bayut.sa and other connected sources, merging rather than duplicating.' },
            { t: 'Optional WhatsApp qualification', d: 'The enquiry can be met immediately with an Arabic qualification conversation capturing budget, district and property type.' },
            { t: 'Assigned to an agent', d: 'Rules check availability, capacity, district and language before assigning, with each skip logged.' },
          ]}
        />

        <H2 id="regulatory">Where this touches REGA and FAL</H2>
        <P>
          A portal integration does not make a brokerage compliant with anything, and no vendor should
          suggest otherwise. What it does produce is clean underlying data — which lead came from where, who
          received it, when, and which licensed agent handled the deal.
        </P>
        <P>
          That record is what most compliance and dispute questions actually depend on. The wider picture is
          covered in the{' '}
          <Link href="/gcc/ksa-compliance/" className="font-semibold text-[#0858A8] hover:underline">
            Saudi brokerage compliance guide
          </Link>
          .
        </P>

        <H2 id="evaluate">What to verify</H2>
        <UL>
          <li>API connection or email parsing?</li>
          <li>Does full RTL hold across tables and reports, not only navigation? Test with an agent.</li>
          <li>Is WhatsApp qualification available in Arabic on your own number?</li>
          <li>Are Aqar, Wasalt and Bayut.sa deduplicated against each other?</li>
          <li>Can agent licence status be tracked against the agent record?</li>
        </UL>

        <Cta
          heading="See Aqar leads in Arabic, end to end"
          body="A 20-minute walkthrough on your own listings — capture, Arabic WhatsApp qualification, assignment rules and the audit trail behind each decision."
        />

        <OtherPortals current='Aqar' />
        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />
      </Article>
    </PageShell>
  );
}
