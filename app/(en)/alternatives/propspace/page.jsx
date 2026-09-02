import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';

const PATH = routeFor('altPropspace', 'en');
const TITLE = 'PropSpace Alternatives for UAE Brokerages';
const DESCRIPTION = 'PropSpace is the longest-running UAE real estate CRM, spun out of Property Finder in 2024. Where it fits, what to check, and the alternatives.';

export const metadata = {
  title: 'PropSpace Alternatives for UAE Brokerages | AqarQore',
  description: DESCRIPTION,
  alternates: alternatesFor('altPropspace', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Alternatives', path: '/alternatives/' },
  { name: 'PropSpace', path: PATH },
];

const FAQS = [
  ["Is PropSpace owned by Property Finder?",
   "Not any more. PropSpace was founded in 2012, acquired by Property Finder, and divested in 2024 as Property Finder refocused on its core marketplace. It now operates as an independent company under its own leadership."],
  ["Why does CRM ownership matter to a brokerage?",
   "Because your CRM holds your client relationships and your pipeline data. If the vendor is owned by a portal you also buy leads from, that is a commercial relationship worth understanding — not necessarily a problem, but a question you should ask and have answered."],
  ["What is PropSpace strong at?",
   "It is the longest-running dedicated real estate CRM in the UAE, with direct Property Finder integration and native handling of UAE compliance paperwork including the standard forms and Ejari contract management. That regional depth is real."],
  ["Why do brokerages evaluate alternatives?",
   "Usual reasons across any incumbent: coverage of newer requirements such as WhatsApp qualification on the official Cloud API, Saudi portal coverage if expanding beyond the UAE, commission approval controls, and Arabic depth for teams working in Arabic."],
  ["Should we switch if PropSpace is working?",
   "Probably not. Migration has real cost and disruption, and an incumbent that covers your workflow is worth keeping. Evaluate alternatives when a specific requirement is unmet and the vendor has no timeline for it — not on general dissatisfaction."],
];

export default function PropSpaceAlternative() {
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
        lede='PropSpace has been in this market longer than anyone — founded 2012, acquired by Property Finder, spun back out as an independent company in 2024. That history is the most useful thing to understand before you evaluate it.'
        updated="30 August 2026"
        readTime='7 min read'
        toc={[{ id: 'summary', label: 'The short answer' }, { id: 'history', label: 'The ownership history matters' }, { id: 'fair', label: 'What PropSpace brings' }, { id: 'questions', label: 'Questions worth asking' }, { id: 'options', label: 'The alternatives' }, { id: 'decide', label: 'How to decide' }, { id: 'faq', label: 'Frequently asked questions' }]}
      >
        <H2 id="summary">The short answer</H2>
        <AnswerBlock>
          PropSpace is a credible, established UAE choice with genuine regional depth. Evaluate alternatives
          when a <strong>specific requirement is unmet</strong> — Saudi portal coverage, WhatsApp
          qualification on the official Cloud API, enforced commission approvals, or Arabic depth — not
          because of general dissatisfaction.
        </AnswerBlock>
        <P>
          We build a competing product. This page argues on structure and verifiable history rather than
          claims about features we cannot audit, which is also the only kind of comparison worth reading.
        </P>

        <H2 id="history">The ownership history matters</H2>
        <P>
          PropSpace was founded in 2012 as the first dedicated real estate CRM in the UAE and MENA region, and
          launched commercially in 2013. Property Finder acquired it, and then{' '}
          <strong>divested it in 2024</strong> to refocus on its core marketplace. It now runs as an
          independent company under its own leadership.
        </P>
        <P>
          That arc is worth understanding because it raises a question every brokerage should ask of any CRM
          vendor, not just this one: <strong>who owns the company that holds your client data?</strong>
        </P>
        <P>
          It is not an accusation. A portal-owned CRM can be excellent, and deep integration is a genuine
          benefit. But your CRM holds your pipeline, your client history and your agent performance data,
          while a portal is a supplier you negotiate with. Knowing whether those are the same corporate entity
          is basic diligence. In PropSpace&apos;s case the answer today is no — and that itself is useful
          information, because plenty of buyers still assume otherwise.
        </P>

        <H2 id="fair">What PropSpace brings</H2>
        <UL>
          <li><strong>Longevity.</strong> Operating in this specific market since 2012, which is longer than most of the category.</li>
          <li><strong>Property Finder integration.</strong> Direct API integration for listing syndication and lead capture, built over years of proximity.</li>
          <li><strong>UAE compliance paperwork.</strong> Native handling of the standard UAE forms and Ejari contract management — unglamorous, and exactly the work brokerages otherwise do manually.</li>
          <li><strong>Market familiarity.</strong> Built for Dubai brokerage process rather than adapted to it.</li>
        </UL>
        <P>
          That last point is the meaningful one. Regional depth is hard to replicate and it is the reason a
          horizontal platform usually loses to a specialist here.
        </P>

        <H2 id="questions">Questions worth asking</H2>
        <P>
          These apply to PropSpace, to us, and to anyone else you shortlist. Ask all of them of all vendors.
        </P>
        <Table
          head={['Question', 'Why it matters']}
          rows={[
            ['Which Saudi portals connect — Aqar, Wasalt, Bayut.sa?', 'Decisive if you are expanding beyond the UAE'],
            ['Is WhatsApp on the official Meta Cloud API, and whose account?', 'It should be your number and your history'],
            ['Can an administrator bypass a commission approval?', 'Separates a control from documentation'],
            ['Does Arabic RTL hold across tables and reports?', 'Test with an agent, not in a demo'],
            ['Is off-plan tracked per unit or per listing?', 'Determines whether two agents can double-reserve'],
            ['What is the export format if we leave?', 'Ask before signing, not after'],
          ]}
        />
        <P>
          On WhatsApp specifically, the distinction between the official Cloud API and an unofficial bridge is
          the one most often glossed over — see{' '}
          <Link href="/features/whatsapp-ai-qualification/" className="font-semibold text-[#0858A8] hover:underline">
            WhatsApp lead qualification
          </Link>
          .
        </P>

        <H2 id="options">The alternatives</H2>
        <Table
          head={['Option', 'Best for', 'Watch for']}
          rows={[
            ['GCC-wide specialists (including AqarQore)', 'Brokerages operating across UAE and Saudi Arabia', 'Newer vendors — check stability and roadmap'],
            ['Other UAE-focused CRMs', 'Dubai-only brokerages wanting local depth', 'Saudi coverage is often thin or absent'],
            ['Horizontal CRMs (Zoho, HubSpot, Salesforce)', 'Requirements extending beyond real estate', 'Regional workflows need paid configuration'],
            ['Staying with PropSpace', 'Teams whose workflow it already covers', 'Migration cost is real — do not move without a specific reason'],
          ]}
        />

        <H2 id="decide">How to decide</H2>
        <P>
          Migration is disruptive and expensive, and switching CRM is not a decision to make on mood. Three
          questions settle it:
        </P>
        <UL>
          <li><strong>What specifically is not working?</strong> If you cannot name it precisely, the problem may be process rather than software.</li>
          <li><strong>Has the vendor given a timeline?</strong> An incumbent with a credible roadmap for your gap usually beats a migration.</li>
          <li><strong>Are you expanding into Saudi Arabia?</strong> This is the requirement that most often genuinely forces a change, because UAE-first tooling rarely covers Aqar and Wasalt.</li>
        </UL>

        <Cta
          heading="See the gap you are actually trying to close"
          body="A 20-minute walkthrough on your own portals and listings — including Saudi sources, WhatsApp qualification and commission approvals — so you can compare against what you have today."
        />

        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />
        <P>
          <em>PropSpace is a trademark of its respective owner. AqarQore is not affiliated with or endorsed by PropSpace or Property Finder. Ownership, capabilities and pricing change; confirm current details directly with each vendor.</em>
        </P>
      </Article>
    </PageShell>
  );
}
