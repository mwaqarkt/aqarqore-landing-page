import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';

const PATH = routeFor('altZoho', 'en');
const TITLE = 'Zoho CRM Alternatives for Real Estate Brokerages';
const DESCRIPTION = 'Where Zoho CRM fits a GCC brokerage and where it costs more than it saves: configuration burden, portal and WhatsApp work, Arabic RTL testing, and total cost including admin time.';

export const metadata = {
  title: 'Zoho CRM Alternatives for Real Estate | AqarQore',
  description: DESCRIPTION,
  alternates: alternatesFor('altZoho', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Alternatives', path: '/alternatives/' },
  { name: 'Zoho CRM', path: PATH },
];

const FAQS = [
  ["Is Zoho CRM good for real estate?",
   "Zoho is a capable, affordable general-purpose CRM with a real estate vertical, and plenty of brokerages run on it. It is horizontal software, so property-specific workflows — portal lead capture, WhatsApp qualification, commission approval chains — are configured or built rather than shipped ready."],
  ["Why do brokerages look for a Zoho alternative?",
   "Usually not price. The recurring reasons are the configuration effort needed before it fits a brokerage process, the absence of someone to own that configuration long-term, and the amount of custom work required for GCC portal and Arabic requirements."],
  ["Does Zoho connect to Property Finder and Bayut?",
   "Not as standard connectors. Integration is achievable through custom work, middleware or a partner build. Ask who builds it, who maintains it when a portal changes its API, and what that costs each year."],
  ["Does Zoho support Arabic?",
   "Zoho offers Arabic interfaces. Whether your specific configuration — custom modules, layouts and reports — behaves correctly right-to-left is a separate question, and one worth testing with an actual agent rather than assuming from a platform capability list."],
  ["When is Zoho the right choice?",
   "When you have someone who will own the configuration, when your requirements extend beyond real estate into wider business operations, or when budget is the binding constraint and you accept a longer path to a working system."],
];

export default function ZohoAlternative() {
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
        lede='Zoho is the cheapest serious CRM most brokerages will evaluate, and per-seat price is genuinely not the problem. The question is how many weeks of configuration sit between the subscription and a system your agents actually use.'
        updated="30 August 2026"
        readTime='7 min read'
        toc={[{ id: 'summary', label: 'The short answer' }, { id: 'fair', label: 'What Zoho does well' }, { id: 'gap', label: 'Where the work appears' }, { id: 'cost', label: 'The cost that is not on the invoice' }, { id: 'options', label: 'The alternatives' }, { id: 'decide', label: 'How to decide' }, { id: 'faq', label: 'Frequently asked questions' }]}
      >
        <H2 id="summary">The short answer</H2>
        <AnswerBlock>
          Zoho suits brokerages with someone to own the configuration and a tolerance for a longer setup.
          For a GCC brokerage that needs portal capture, WhatsApp qualification and commission control{' '}
          <strong>working this quarter</strong>, a purpose-built real estate CRM usually reaches value
          faster — even at a higher per-seat price.
        </AnswerBlock>
        <P>
          We build a competing product, so read this as informed but interested. The comparison is framed on
          structural trade-offs rather than feature claims, because that is the part that determines the
          outcome and the part you can verify yourself with any vendor, us included.
        </P>

        <H2 id="fair">What Zoho does well</H2>
        <UL>
          <li><strong>Price.</strong> Genuinely low per-seat cost relative to the enterprise platforms.</li>
          <li><strong>Breadth.</strong> A very large product suite — books, desk, campaigns, sign — that works together if you use more than one.</li>
          <li><strong>Flexibility.</strong> Custom modules and fields cover most requirements given time.</li>
          <li><strong>Arabic interfaces.</strong> Available, which is more than several competitors offer.</li>
        </UL>
        <P>
          If your brokerage sits inside a business already running Zoho for accounting or support, that
          continuity is a real argument. Integration and reporting across one vendor beats a better-fitting
          point solution more often than product comparisons admit.
        </P>

        <H2 id="gap">Where the work appears</H2>
        <P>
          Zoho ships an object model and tooling. The gap between that and a working brokerage is filled with
          configuration, and configuration is where the timeline goes.
        </P>
        <Table
          head={['Requirement', 'In a horizontal CRM', 'What to ask']}
          rows={[
            ['Portal lead capture', 'Custom integration, middleware or partner build', 'Who maintains it when a portal changes its API?'],
            ['WhatsApp qualification', 'An integration project on the official Cloud API', 'Whose WhatsApp Business Account is used?'],
            ['Commission approvals', 'Custom modules, flows and validation rules', 'Can an administrator bypass the approval step?'],
            ['Arabic RTL depth', 'Platform supports it; your config may not', 'Test tables and reports with a real agent'],
            ['Off-plan unit allocation', 'Custom modules', 'Can two agents reserve the same unit?'],
          ]}
        />
        <P>
          The commission row carries the subtlest risk. A rule implemented in configuration is frequently
          bypassable by an administrator, which turns a{' '}
          <Link href="/features/commission-approvals/" className="font-semibold text-[#0858A8] hover:underline">
            control into documentation
          </Link>
          . That distinction only surfaces during a dispute, which is the worst time to discover it.
        </P>

        <H2 id="cost">The cost that is not on the invoice</H2>
        <P>
          Comparing per-seat prices makes Zoho look unbeatable, and that comparison omits the two largest
          numbers.
        </P>
        <UL>
          <li>
            <strong>Someone has to own it.</strong> A configured horizontal CRM without an owner degrades.
            Fields multiply, nobody prunes them, and within a year half the team is back in spreadsheets.
          </li>
          <li>
            <strong>Time to first value.</strong> A system live in two weeks starts recovering leads in two
            weeks. One live in four months carries four months of leaked pipeline that never appears on any
            quote.
          </li>
        </UL>
        <P>
          Ask for a written three-year total including implementation and the internal time to maintain it.
          That is the number worth comparing.
        </P>

        <H2 id="options">The alternatives</H2>
        <Table
          head={['Option', 'Best for', 'Watch for']}
          rows={[
            ['GCC-native real estate CRM (including AqarQore)', 'Brokerages wanting regional workflows working immediately', 'Smaller vendors — check stability, support and roadmap'],
            ['Other horizontal CRMs (HubSpot, Bitrix24, Salesforce)', 'Teams wanting a different balance of price and depth', 'The same configuration burden, differently priced'],
            ['Regional CRMs with portal heritage', 'Brokerages prioritising deep portal integration', 'Check who owns the vendor and whether they also own a portal'],
            ['Staying on Zoho, better configured', 'Teams already invested with an admin in place', 'Often the right answer — audit the config before replacing it'],
          ]}
        />
        <P>
          The last row is not a courtesy. A meaningful share of &ldquo;our CRM is not working&rdquo; cases are
          configuration problems, not platform problems, and replacing the system does not fix a process
          nobody agreed on.
        </P>

        <H2 id="decide">How to decide</H2>
        <UL>
          <li><strong>When do we need this working?</strong> If the answer is this quarter, long configuration projects are out regardless of platform quality.</li>
          <li><strong>Who owns it after go-live?</strong> If the honest answer is nobody, choose software that needs no owner.</li>
          <li><strong>Is the requirement wider than real estate?</strong> If yes, Zoho&apos;s suite earns its place.</li>
          <li><strong>What works on day one?</strong> Ask every vendor to demonstrate your actual workflow with zero configuration. The gap between that and the polished demo is your project.</li>
        </UL>

        <Cta
          heading="Compare against your real workflow"
          body="A 20-minute walkthrough on your own portals and listings, so you can see exactly what works on day one — then weigh it against a configuration timeline."
        />

        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />
        <P>
          <em>Zoho and Zoho CRM are trademarks of Zoho Corporation. AqarQore is not affiliated with or endorsed by Zoho. Capabilities and pricing change; confirm current details directly with each vendor.</em>
        </P>
      </Article>
    </PageShell>
  );
}
