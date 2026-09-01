import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';

const PATH = routeFor('altSalesforce', 'en');

const TITLE = 'Salesforce Alternatives for Real Estate Brokerages';
const DESCRIPTION =
  'When Salesforce is right for a brokerage and when it is overbuilt: total cost, implementation reality, and what a GCC real estate team needs that a horizontal CRM does not ship with.';

export const metadata = {
  title: 'Salesforce Alternatives for Real Estate Brokerages',
  description: DESCRIPTION,
  alternates: alternatesFor('altSalesforce', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Alternatives', path: '/alternatives/' },
  { name: 'Salesforce', path: PATH },
];

const FAQS = [
  [
    'Is Salesforce good for real estate brokerages?',
    'Salesforce is a capable platform and large brokerage groups run on it successfully. It is a general-purpose CRM, so real estate workflows — portal lead capture, WhatsApp qualification, commission approvals — are configured or built rather than shipped. That is fine with implementation budget and an admin; it is a poor fit for a 10-agent brokerage that needs to be live next month.',
  ],
  [
    'Why do brokerages look for a Salesforce alternative?',
    'Three reasons recur: total cost once licences, implementation and an administrator are counted; time to value, when the team needed something working this quarter; and the amount of custom work required before regional essentials like Property Finder capture or Arabic RTL behave properly.',
  ],
  [
    'What does Salesforce actually cost a brokerage?',
    'Per-user licensing is only part of it. Budget realistically for implementation, ongoing administration, and any AppExchange or middleware needed for portal and WhatsApp connectivity. Get a written total-cost figure across three years rather than comparing headline per-seat prices.',
  ],
  [
    'Can Salesforce connect to Property Finder and Bayut?',
    'Not out of the box. Connectivity is achievable through custom integration work, middleware or a partner-built package. The question to put to any implementation partner is who builds it, who maintains it when the portal changes its API, and what that costs annually.',
  ],
  [
    'When is Salesforce the right choice?',
    'When the brokerage is part of a larger group already standardised on Salesforce, when requirements extend well beyond real estate into complex multi-entity operations, or when there is a dedicated admin and a real implementation budget. In those cases the platform depth is an asset rather than overhead.',
  ],
  [
    'What should we compare instead of feature lists?',
    'Time to first value, total three-year cost including people, and how much of your actual daily workflow works on day one without configuration. Feature grids favour large platforms because they list capabilities; they do not show what it costs to make those capabilities fit your process.',
  ],
];

export default function SalesforceAlternative() {
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
        title="Salesforce Alternatives for Real Estate Brokerages"
        lede="Salesforce is not a bad product. For most GCC brokerages it is simply the wrong shape — a platform you configure into a real estate system, when what you needed was a real estate system."
        updated="30 August 2026"
        readTime="8 min read"
        toc={[
          { id: 'short-answer', label: 'The short answer' },
          { id: 'fair', label: 'What Salesforce is genuinely good at' },
          { id: 'mismatch', label: 'Where the mismatch shows up' },
          { id: 'cost', label: 'The cost question, honestly' },
          { id: 'options', label: 'The alternatives' },
          { id: 'decide', label: 'How to decide' },
          { id: 'faq', label: 'Frequently asked questions' },
        ]}
      >
        <H2 id="short-answer">The short answer</H2>
        <AnswerBlock>
          Salesforce suits brokerages with an implementation budget, a dedicated administrator and
          requirements beyond real estate. For a 5–50 agent GCC brokerage that needs portal lead capture,
          WhatsApp qualification and commission control working <strong>this quarter</strong>, a
          purpose-built real estate CRM will usually reach value faster and cost less over three years.
        </AnswerBlock>
        <P>
          We build a competing product, so treat this page as informed but interested. The comparison below
          is framed around structural trade-offs rather than feature claims, which is the part that actually
          determines the outcome — and it is the part you can verify yourself with any vendor, including us.
        </P>

        <H2 id="fair">What Salesforce is genuinely good at</H2>
        <P>Worth stating plainly, because a comparison that pretends otherwise is not useful.</P>
        <UL>
          <li><strong>Depth.</strong> Very few requirements cannot be met, given time and budget.</li>
          <li><strong>Ecosystem.</strong> A large partner and app marketplace, and no shortage of people who know the platform.</li>
          <li><strong>Enterprise governance.</strong> Mature permissions, audit and multi-entity structures.</li>
          <li><strong>Longevity.</strong> Nobody is worried about the vendor existing in five years.</li>
          <li><strong>Beyond real estate.</strong> If the group also runs facilities management, construction or fund administration, one platform across all of it has real value.</li>
        </UL>
        <P>
          If your brokerage sits inside a group already standardised on Salesforce, that alone is often the
          right answer. Integration and reporting continuity beat a better-fitting point solution.
        </P>

        <H2 id="mismatch">Where the mismatch shows up</H2>
        <P>
          Salesforce is a horizontal platform. It ships an object model and tooling, not a brokerage. The gap
          between those two is filled with configuration, and that is where projects run long.
        </P>
        <H3 id="portals">Portal lead capture</H3>
        <P>
          Property Finder, Bayut, Dubizzle, Aqar and Wasalt are not standard connectors. Getting structured
          leads flowing in reliably means custom integration, middleware or a partner package — plus somebody
          who maintains it when a portal changes its API. Ask who owns that maintenance and what it costs
          each year.
        </P>
        <H3 id="whatsapp">WhatsApp</H3>
        <P>
          In the GCC, WhatsApp is where the deal happens. Getting official Meta Cloud API qualification
          working inside a horizontal CRM is an integration project. It is very achievable; it is not a
          checkbox. See{' '}
          <Link href="/features/whatsapp-ai-qualification/" className="font-semibold text-[#0858A8] hover:underline">
            WhatsApp lead qualification
          </Link>{' '}
          for what that layer needs to do.
        </P>
        <H3 id="commission">Commission approvals</H3>
        <P>
          Two-step signoffs, tiered splits, co-broke arrangements and idempotent payout batches are buildable
          — as custom objects, flows and validation rules. The risk is subtler than cost: a rule implemented
          in configuration is often bypassable by an administrator, which turns a{' '}
          <Link href="/features/commission-approvals/" className="font-semibold text-[#0858A8] hover:underline">
            control into documentation
          </Link>
          .
        </P>
        <H3 id="arabic">Arabic and RTL</H3>
        <P>
          Salesforce supports Arabic. Whether your specific configuration — custom objects, page layouts,
          reports — behaves correctly in RTL is a question to test during evaluation, with a real agent, not
          to assume from a platform capability list.
        </P>

        <H2 id="cost">The cost question, honestly</H2>
        <P>
          Comparing per-seat prices is the wrong comparison. The real figure includes everything needed to
          reach a working system, and then to keep it working.
        </P>
        <Table
          head={['Cost line', 'Horizontal platform', 'Purpose-built real estate CRM']}
          rows={[
            ['Licences', 'Per user, tiered by edition', 'Per seat'],
            ['Implementation', 'Usually a partner engagement', 'Onboarding, typically included'],
            ['Portal integrations', 'Custom build or middleware', 'Expected to be included — verify'],
            ['WhatsApp', 'Integration project', 'Expected to be included — verify'],
            ['Ongoing admin', 'Often a dedicated person or retainer', 'Usually none'],
            ['Time to first value', 'Months', 'Days to weeks'],
          ]}
          caption="Get a written three-year total for both, including people. Headline per-seat pricing hides most of the difference in either direction."
        />
        <P>
          The line that matters most is the last one. A system live in two weeks starts recovering leads in
          two weeks. One live in five months has five months of leaked pipeline behind it before it does
          anything — a cost that never appears on a quote.
        </P>

        <H2 id="options">The alternatives</H2>
        <Table
          head={['Option', 'Best for', 'Watch for']}
          rows={[
            [
              'GCC-native real estate CRM (including AqarQore)',
              'Brokerages wanting regional workflows working immediately',
              'Smaller vendors — check stability, support and roadmap',
            ],
            [
              'Other horizontal CRMs (HubSpot, Zoho, Bitrix24)',
              'Teams wanting lower cost than Salesforce with similar flexibility',
              'Same configuration burden, smaller partner ecosystem',
            ],
            [
              'Property management / ERP suites',
              'Portfolios where leasing and accounting dominate',
              'Sales-side speed-to-lead is usually the weak module',
            ],
            [
              'Staying on Salesforce, better configured',
              'Groups already invested with an admin in place',
              'Often the right answer — audit the config before replacing it',
            ],
          ]}
        />
        <P>
          That last row is deliberate. A meaningful share of &ldquo;Salesforce is not working&rdquo; cases are
          configuration problems, not platform problems. Replacing the system does not fix a process nobody
          agreed on. Audit before you migrate.
        </P>

        <H2 id="decide">How to decide</H2>
        <P>Four questions settle most evaluations faster than any feature comparison.</P>
        <UL>
          <li><strong>When do we need this working?</strong> If the answer is this quarter, that rules out long implementations regardless of platform quality.</li>
          <li><strong>Do we have an administrator?</strong> A horizontal platform without an owner degrades. Nobody maintains it, and within a year people are back in spreadsheets.</li>
          <li><strong>Is our requirement wider than real estate?</strong> If yes, platform depth earns its cost.</li>
          <li><strong>What does day one look like?</strong> Ask every vendor to demonstrate your actual workflow with no configuration. The gap between that and the sales demo is your implementation project.</li>
        </UL>

        <Cta
          heading="Compare against your actual workflow"
          body="A 20-minute walkthrough on your own portals and listings, so you can see exactly what works on day one — then weigh that against an implementation timeline."
        />

        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />

        <P>
          <em>
            Salesforce is a trademark of Salesforce, Inc. AqarQore is not affiliated with or endorsed by
            Salesforce. Product capabilities and pricing change; confirm current details directly with each
            vendor before making a decision.
          </em>
        </P>
      </Article>
    </PageShell>
  );
}
