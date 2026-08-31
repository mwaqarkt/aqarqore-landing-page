import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';

const PATH = routeFor('altMasterkey', 'en');
const TITLE = 'Masterkey CRM Alternatives for GCC Brokerages';
const DESCRIPTION = 'Masterkey is a long-established, enterprise-oriented Middle East real estate platform owned by the dubizzle group. Where it fits, what to verify, and the alternatives.';

export const metadata = {
  title: 'Masterkey CRM Alternatives | AqarQore',
  description: DESCRIPTION,
  alternates: alternatesFor('altMasterkey', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Alternatives', path: '/alternatives/' },
  { name: 'Masterkey', path: PATH },
];

const FAQS = [
  ["What is Masterkey?",
   "Masterkey is a long-established Middle East real estate software provider, part of the dubizzle group. It offers enterprise products spanning real estate marketing, listing syndication, property management and CRM, covering sales, leasing and property management."],
  ["Is Masterkey owned by a property portal?",
   "Masterkey is a dubizzle group company. dubizzle also operates property portals in the UAE. That is worth knowing when you evaluate any CRM: your pipeline data sits with a vendor connected to a portal you also buy leads from."],
  ["Is Masterkey good for a small brokerage?",
   "It is built around enterprise real estate operations spanning sales, leasing and property management. A ten-agent sales-only brokerage may find that breadth is capability it pays for and does not use. Ask for a demonstration limited strictly to your own workflow."],
  ["Why do brokerages evaluate alternatives?",
   "Typically fit rather than quality: an enterprise property-management platform is heavier than a sales-focused brokerage needs, and speed-to-lead is often the weakest module in suites built around asset and leasing management."],
  ["Should we switch if Masterkey is working?",
   "No. If it covers your workflow, migration cost and disruption outweigh most theoretical gains. Evaluate alternatives when a specific requirement is unmet and there is no timeline to address it."],
];

export default function MasterkeyAlternative() {
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
        lede='Masterkey is one of the oldest real estate platforms in the region and covers ground most CRMs do not — property management and leasing alongside sales. Whether that breadth is an asset or overhead depends entirely on what you actually run.'
        updated="30 August 2026"
        readTime='7 min read'
        toc={[{ id: 'summary', label: 'The short answer' }, { id: 'fair', label: 'What Masterkey brings' }, { id: 'ownership', label: 'Portal ownership' }, { id: 'fit', label: 'Where the fit breaks down' }, { id: 'options', label: 'The alternatives' }, { id: 'decide', label: 'How to decide' }, { id: 'faq', label: 'Frequently asked questions' }]}
      >
        <H2 id="summary">The short answer</H2>
        <AnswerBlock>
          Masterkey suits organisations running <strong>sales, leasing and property management together</strong>,
          where enterprise breadth earns its cost. A sales-focused brokerage of five to fifty agents is often
          paying for capability it does not use, and speed-to-lead tends to be the weakest module in suites
          built around asset management.
        </AnswerBlock>
        <P>
          We build a competing product. This page compares on structure and verifiable positioning rather
          than feature claims we cannot audit.
        </P>

        <H2 id="fair">What Masterkey brings</H2>
        <UL>
          <li><strong>Longevity.</strong> More than a decade serving Middle East real estate, which is meaningful in a category with high vendor churn.</li>
          <li><strong>Breadth.</strong> Marketing, listing syndication, property management and CRM in one platform.</li>
          <li><strong>Multi-role coverage.</strong> Built for brokers, developers and property managers rather than one of the three.</li>
          <li><strong>Enterprise orientation.</strong> Suited to multi-entity operations with complex structures.</li>
        </UL>
        <P>
          If you manage buildings as well as sell units, a single platform across both is a genuine advantage
          and a specialist sales CRM will not replace it.
        </P>

        <H2 id="ownership">Portal ownership</H2>
        <P>
          Masterkey is part of the dubizzle group, which also operates property portals in the UAE. This is
          worth stating plainly and without insinuation.
        </P>
        <P>
          A portal-owned CRM can be very good, and the integration benefits are real. But the question applies
          to every vendor: <strong>your CRM holds your pipeline, your client history and your agent
          performance data, while a portal is a supplier you negotiate with.</strong> Whether those sit inside
          the same corporate group is a fact worth knowing before you sign, and one you should ask of any
          shortlisted vendor — including the independent ones, where the answer is simply no.
        </P>

        <H2 id="fit">Where the fit breaks down</H2>
        <P>
          The common mismatch is not quality but shape. Platforms built around asset and leasing management
          organise themselves around properties; a sales brokerage organises around leads and agents.
        </P>
        <Table
          head={['Requirement', 'Suite-shaped platforms', 'What to verify']}
          rows={[
            ['Speed to lead', 'Often the weakest module', 'What happens to a lead at 9pm on Thursday?'],
            ['WhatsApp qualification', 'Frequently added later', 'Official Meta Cloud API, and whose account?'],
            ['Cross-portal deduplication', 'Varies', 'Same buyer on two portals — one record or two?'],
            ['Saudi portal coverage', 'Often UAE-first', 'Do Aqar and Wasalt connect?'],
            ['Commission approvals', 'Usually present', 'Can an administrator bypass a step?'],
            ['Setup weight', 'Enterprise implementation', 'How long until agents are actually using it?'],
          ]}
        />
        <P>
          The first row is where money leaks. Enquiry volume peaks in the evening and across the weekend,
          which is exactly when a shared inbox goes unwatched — see{' '}
          <Link href="/features/lead-distribution/" className="font-semibold text-[#0858A8] hover:underline">
            automated lead distribution
          </Link>
          .
        </P>

        <H2 id="options">The alternatives</H2>
        <Table
          head={['Option', 'Best for', 'Watch for']}
          rows={[
            ['Sales-focused GCC CRM (including AqarQore)', 'Brokerages whose business is selling and letting, not managing assets', 'Will not replace a property-management suite'],
            ['Other property-management suites', 'Mixed operations spanning asset and sales', 'Same shape, same trade-off'],
            ['Horizontal CRMs (Zoho, Salesforce, HubSpot)', 'Requirements beyond real estate', 'Regional workflows need paid configuration'],
            ['Staying with Masterkey', 'Organisations genuinely using the breadth', 'If you use the property-management side, do not give it up for a sales CRM'],
          ]}
        />

        <H2 id="decide">How to decide</H2>
        <UL>
          <li><strong>Do you manage property, or only transact it?</strong> This single question resolves most of the decision.</li>
          <li><strong>How much of the platform do you actually use?</strong> If it is the CRM module and nothing else, you are paying for a suite to get a component.</li>
          <li><strong>Where does money leak today?</strong> If the answer is slow first response, that is a specific, measurable gap worth acting on.</li>
          <li><strong>Are you expanding into Saudi Arabia?</strong> UAE-first tooling frequently lacks Aqar and Wasalt coverage.</li>
        </UL>

        <Cta
          heading="Test it against the leak you can measure"
          body="A 20-minute walkthrough focused on speed to lead — capture, deduplication and assignment on your own portal feeds, including Saudi sources."
        />

        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />
        <P>
          <em>Masterkey and dubizzle are trademarks of their respective owners. AqarQore is not affiliated with or endorsed by either. Ownership, capabilities and pricing change; confirm current details directly with each vendor.</em>
        </P>
      </Article>
    </PageShell>
  );
}
