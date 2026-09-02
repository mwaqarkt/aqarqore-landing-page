import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';

const PATH = routeFor('crmSaudi', 'en');
const UPDATED = '30 August 2026';

const TITLE = 'Best Real Estate CRM in Saudi Arabia (2026 Guide)';
const DESCRIPTION =
  'Choosing brokerage software for the Kingdom: Aqar and Wasalt lead capture, Arabic-first workflows, commission control and in-Kingdom hosting.';

export const metadata = {
  title: 'Best Real Estate CRM in Saudi Arabia (2026)',
  description: DESCRIPTION,
  alternates: alternatesFor('crmSaudi', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Best Real Estate CRM in Saudi Arabia', path: PATH },
];

const FAQS = [
  [
    'What is the best real estate CRM in Saudi Arabia?',
    'There is no single best option — it depends on portfolio type and team size. A Saudi brokerage should shortlist on five things: Aqar and Wasalt lead capture, Arabic-first RTL interface, WhatsApp Business API qualification, commission approval controls, and in-Kingdom data hosting. Score every vendor against those before comparing price.',
  ],
  [
    'Does a Saudi brokerage need a CRM that connects to Aqar?',
    'For most residential and off-plan brokerages, yes. Aqar is a primary lead source in the Kingdom alongside Bayut.sa and Wasalt. If leads arrive by email alert or portal inbox and are re-keyed by hand, response time slips past the window where a buyer is still comparing agencies.',
  ],
  [
    'Should the CRM be in Arabic?',
    'If your agents work in Arabic, yes — and genuine RTL layout, not a translated menu bar over a left-to-right interface. Arabic-first matters more in Saudi Arabia than in the UAE, where brokerage teams are more mixed. Test it with a real agent before signing.',
  ],
  [
    'How does a CRM help with ZATCA e-invoicing?',
    'Most real estate CRMs do not issue tax invoices themselves. What a good one does is hold clean, approved commission data — amount, split, deal, approver, date — so your accounting or ERP system can raise a compliant invoice without manual reconciliation. Ask vendors how commission data reaches your invoicing system.',
  ],
  [
    'How long does implementation take?',
    'A boutique brokerage moving from spreadsheets should expect days, not months. Larger migrations with historical data, multi-branch structures and ERP connections take longer. Ask for a written onboarding plan with named milestones before signing.',
  ],
];

export default function BestCrmSaudiArabia() {
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
        title="Best Real Estate CRM in Saudi Arabia (2026)"
        lede="Most CRM comparisons are written for American brokerages. This one is written for the Kingdom — Aqar and Wasalt leads, REGA licensing, Wafi off-plan, ZATCA invoicing, and teams who work in Arabic."
        updated={UPDATED}
        readTime="9 min read"
        toc={[
          { id: 'short-answer', label: 'The short answer' },
          { id: 'different', label: 'Why Saudi Arabia is different' },
          { id: 'criteria', label: 'Eight criteria that actually matter' },
          { id: 'compare', label: 'Comparison framework' },
          { id: 'riyadh', label: 'Riyadh and Jeddah specifics' },
          { id: 'mistakes', label: 'Five expensive mistakes' },
          { id: 'faq', label: 'Frequently asked questions' },
        ]}
      >
        <H2 id="short-answer">The short answer</H2>
        <AnswerBlock>
          There is no single best real estate CRM in Saudi Arabia. The right choice depends on whether you
          sell resale, off-plan or commercial, and how many agents you run. Shortlist on five things:{' '}
          <strong>Aqar and Wasalt lead capture, Arabic-first RTL interface, WhatsApp Business API
          qualification, enforced commission approvals, and in-Kingdom data hosting.</strong> Score vendors
          against those before you look at price.
        </AnswerBlock>
        <P>
          That framing matters because the generic advice does not transfer. A CRM built for a Texas
          brokerage assumes MLS data, email-first buyers, and a licensing regime that does not exist here.
          In the Kingdom, leads arrive through Saudi portals, conversations happen on WhatsApp, and the
          regulatory surface — REGA, FAL, Wafi, Ejar, ZATCA — has no equivalent abroad.
        </P>

        <H2 id="different">Why Saudi Arabia is different</H2>
        <P>
          Four structural differences change what a CRM has to do. Get these wrong and you will buy a system
          your agents quietly stop using.
        </P>

        <H3 id="portals">Lead sources are local</H3>
        <P>
          Saudi brokerages generate demand through Aqar, Wasalt and Bayut.sa rather than the portal mix used
          in the UAE. A CRM whose integration list stops at Property Finder and Bayut covers part of the
          market. Ask specifically which Saudi portals connect, whether the connection is a real API or an
          email parser, and what happens when the same buyer enquires on two portals at once.
        </P>

        <H3 id="whatsapp">WhatsApp is the transaction channel</H3>
        <P>
          Buyer conversations in the Kingdom happen on WhatsApp — not email, not a web form. That has a
          direct consequence: if your CRM does not sit inside WhatsApp, your CRM does not contain your
          customer history. Agents message from personal handsets, and when an agent resigns the
          relationship leaves with them.
        </P>
        <P>
          The distinction to probe is <strong>official Meta WhatsApp Cloud API versus an unofficial
          bridge</strong>. Unofficial integrations risk account bans and break without warning. Official
          access also means each agency connects its own WhatsApp Business Account, which is the correct
          model — your number, your history, your data.
        </P>

        <H3 id="arabic">Arabic is not a translation layer</H3>
        <P>
          Arabic-first matters more in Saudi Arabia than anywhere else in the GCC. Brokerage teams in Riyadh
          and Jeddah work in Arabic day to day, and a right-to-left interface is not the same thing as a
          translated menu. Look at how tables, date pickers, currency fields and notification text behave in
          RTL. Have an actual agent — not a manager — run a full lead-to-deal cycle in Arabic during the trial.
        </P>

        <H3 id="regulatory">The regulatory surface is real</H3>
        <UL>
          <li><strong>REGA</strong> — the General Real Estate Authority sets brokerage conduct and licensing rules.</li>
          <li><strong>FAL</strong> — the broker licensing programme. Agent-level licence status is worth tracking inside the CRM.</li>
          <li><strong>Wafi</strong> — governs off-plan sales and escrow. Off-plan brokerages need milestone and unit-inventory tracking.</li>
          <li><strong>Ejar</strong> — the tenancy registration platform, relevant to leasing portfolios.</li>
          <li><strong>ZATCA</strong> — e-invoicing obligations that your commission data ultimately has to feed.</li>
          <li><strong>PDPL</strong> — Saudi data protection law, which is why hosting location belongs on the checklist.</li>
        </UL>
        <P>
          No CRM handles all of this natively, and any vendor claiming blanket compliance deserves a follow-up
          question. What a good system does is keep the underlying records clean enough that compliance work
          is a report rather than a reconstruction.
        </P>

        <H2 id="criteria">Eight criteria that actually matter</H2>
        <P>
          Score each vendor one to five. The weighting reflects how often each item is the thing that breaks
          six months in.
        </P>
        <Table
          head={['#', 'Criterion', 'What to ask the vendor', 'Weight']}
          rows={[
            ['1', 'Saudi portal capture', 'Which of Aqar, Wasalt and Bayut.sa connect, and by API or email parsing?', 'High'],
            ['2', 'Speed to first contact', 'How fast is a new lead assigned to an available agent, and is it automatic?', 'High'],
            ['3', 'WhatsApp qualification', 'Official Meta Cloud API? Who owns the WhatsApp Business Account?', 'High'],
            ['4', 'Arabic RTL depth', 'Full RTL across tables, forms and reports — or a translated menu bar?', 'High'],
            ['5', 'Commission control', 'Can approval steps be skipped by an admin? Is there an immutable audit trail?', 'High'],
            ['6', 'Data residency', 'Where is data physically hosted, and what is offered for PDPL alignment?', 'Medium'],
            ['7', 'Off-plan handling', 'Unit inventory, payment milestones, developer allocation — native or bolted on?', 'Medium'],
            ['8', 'Offline mobile', 'Do viewings in basements and unfinished towers sync when signal returns?', 'Medium'],
          ]}
          caption="Weighting reflects failure frequency in GCC brokerage deployments, not feature-list length."
        />

        <H2 id="compare">Comparison framework</H2>
        <P>
          Vendors fall into four groups. Identifying the group tells you most of what you need before a single
          demo, because the trade-offs are structural rather than per-product.
        </P>
        <Table
          head={['Category', 'Examples', 'Strength', 'Trade-off']}
          rows={[
            [
              'GCC-native real estate CRM',
              'AqarQore and regional specialists',
              'Portal, WhatsApp and commission workflows built for the region by default',
              'Smaller vendors; verify roadmap and support depth',
            ],
            [
              'Global horizontal CRM',
              'Salesforce, HubSpot, Zoho, Bitrix24',
              'Mature platforms, deep customisation, large partner networks',
              'Saudi portal and Arabic workflows usually need paid implementation work',
            ],
            [
              'Property management / ERP suites',
              'Regional property and ERP platforms',
              'Strong on leasing, accounting and asset management',
              'Sales-side speed-to-lead is often the weakest module',
            ],
            [
              'Custom build',
              'Local development agencies',
              'Exact fit to your process',
              'You own maintenance, security patching and portal API changes forever',
            ],
          ]}
          caption="Categories, not rankings. Verify current capabilities directly with each vendor before deciding."
        />
        <P>
          The honest summary: a global platform will not be wrong, it will be slow and expensive to make
          right. A regional specialist starts closer to your workflow but needs diligence on company
          stability. Weigh those against your timeline rather than against a feature grid.
        </P>

        <H2 id="riyadh">Riyadh and Jeddah specifics</H2>
        <H3 id="riyadh-market">Riyadh</H3>
        <P>
          Riyadh brokerages increasingly split between commercial mandates around the financial district and
          high-value residential in the northern districts. Those are different sales motions on different
          timelines. If one team handles both, the CRM needs distinct pipelines and assignment rules per
          portfolio — a single generic pipeline forces agents into workarounds within weeks.
        </P>
        <H3 id="jeddah-market">Jeddah</H3>
        <P>
          Jeddah skews residential and waterfront, with a heavier proportion of repeat family buyers. Retention
          matters more than raw lead volume, which raises the value of complete conversation history — and
          makes agent turnover more damaging when history lives on personal phones.
        </P>
        <H3 id="weekend">The weekend gap</H3>
        <P>
          Enquiries cluster around the Friday–Saturday weekend, when agents are least available. Any CRM
          evaluation should include one direct question: what happens to a lead that arrives at 9pm on
          Thursday? If the answer is that someone picks it up on Sunday, the system has not solved the problem
          that costs you the most deals.
        </P>

        <H2 id="mistakes">Five expensive mistakes</H2>
        <UL>
          <li><strong>Buying on feature count.</strong> Agents use perhaps six screens. A long feature list often signals a system built for a different market.</li>
          <li><strong>Skipping the Arabic test.</strong> RTL problems surface in tables and reports, never in the sales demo. Test with a real agent.</li>
          <li><strong>Accepting unofficial WhatsApp integrations.</strong> Cheaper up front, and a live risk to the number your entire pipeline runs through.</li>
          <li><strong>Letting admins bypass commission approvals.</strong> If an approval step can be skipped, it is documentation, not a control — and disputes are what erode trust with top agents.</li>
          <li><strong>Ignoring migration.</strong> Ask exactly how existing leads, deals and history move across, and who does the work.</li>
        </UL>

        <Cta
          heading="See it running on your own listings"
          body="A 20-minute walkthrough using your portfolio and your portals — Aqar and Wasalt capture, WhatsApp qualification, and two-step commission approvals. No slides."
        />

        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />
      </Article>
    </PageShell>
  );
}
