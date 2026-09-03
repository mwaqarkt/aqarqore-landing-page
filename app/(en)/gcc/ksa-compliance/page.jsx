import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';

const PATH = routeFor('ksaCompliance', 'en');

const TITLE = 'REGA, Wafi, Ejar and ZATCA: A Saudi Brokerage Compliance Guide';
const DESCRIPTION =
  'What REGA, FAL, Wafi, Ejar, ZATCA e-invoicing and the PDPL mean for a Saudi brokerage day to day, and the records your systems need to keep.';

export const metadata = {
  title: 'Saudi Brokerage Compliance: REGA, Wafi, Ejar & ZATCA',
  description: DESCRIPTION,
  alternates: alternatesFor('ksaCompliance', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Saudi Brokerage Compliance', path: PATH },
];

const FAQS = [
  [
    'What is REGA?',
    'REGA is the General Real Estate Authority, the body overseeing the real estate sector in Saudi Arabia. It sets the framework for brokerage conduct, licensing and the platforms brokerages are expected to operate through.',
  ],
  [
    'What is FAL in Saudi real estate?',
    'FAL is the brokerage and agent licensing programme. Individuals and firms carrying out brokerage activity are expected to hold valid FAL registration. Practically, a brokerage should track licence status per agent, because an expired licence sitting unnoticed is an operational risk as much as a regulatory one.',
  ],
  [
    'What is Wafi?',
    'Wafi governs off-plan sales, including project registration and escrow arrangements designed to protect buyer funds. For a brokerage selling off-plan, it makes unit-level inventory, allocation and payment-milestone tracking a compliance-adjacent requirement rather than a convenience.',
  ],
  [
    'Does a CRM make my brokerage ZATCA compliant?',
    'No, and any vendor claiming otherwise deserves scrutiny. E-invoicing compliance sits with your invoicing or ERP system. What a CRM contributes is clean, approved commission data — amount, split, deal reference, approver, date — so the invoice can be raised from a reliable source instead of a reconstructed spreadsheet.',
  ],
  [
    'What does the PDPL mean for real estate software?',
    "Saudi Arabia's Personal Data Protection Law governs how personal data is collected, processed and stored. For a brokerage this raises practical questions about where client data is hosted, who internally can access it, how access is revoked when staff leave, and whether those events are logged. Ask vendors about hosting location and access controls specifically.",
  ],
  [
    'Is any CRM certified compliant with Saudi regulations?',
    'Treat blanket compliance claims carefully. Compliance is a property of how an organisation operates, not a badge a software product carries on your behalf. Software can make compliance easier to evidence; it cannot make your brokerage compliant by itself. Ask any vendor claiming certification which body issued it and for what scope.',
  ],
];

export default function KsaCompliance() {
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
        title="REGA, Wafi, Ejar and ZATCA: A Saudi Brokerage Compliance Guide"
        lede="Six acronyms shape how a Saudi brokerage operates. This guide explains what each one is, what it means day to day, and what your systems need to record so compliance work becomes a report rather than a reconstruction."
        updated="30 August 2026"
        readTime="10 min read"
        toc={[
          { id: 'short-answer', label: 'The short answer' },
          { id: 'rega', label: 'REGA and FAL licensing' },
          { id: 'wafi', label: 'Wafi and off-plan sales' },
          { id: 'ejar', label: 'Ejar and tenancy registration' },
          { id: 'zatca', label: 'ZATCA e-invoicing and commissions' },
          { id: 'pdpl', label: 'PDPL and client data' },
          { id: 'systems', label: 'What your systems need to record' },
          { id: 'honest', label: 'What software can and cannot do' },
          { id: 'faq', label: 'Frequently asked questions' },
        ]}
      >
        <div className="rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900 leading-relaxed">
          <strong>This is general guidance, not legal advice.</strong> Saudi regulatory requirements are set
          by the relevant authorities and change over time. Confirm current obligations with a qualified
          adviser and through official channels before acting on anything here.
        </div>

        <H2 id="short-answer">The short answer</H2>
        <AnswerBlock>
          Six frameworks touch a Saudi brokerage: <strong>REGA</strong> (sector regulator),{' '}
          <strong>FAL</strong> (brokerage and agent licensing), <strong>Wafi</strong> (off-plan sales and
          escrow), <strong>Ejar</strong> (tenancy registration), <strong>ZATCA</strong> (e-invoicing), and
          the <strong>PDPL</strong> (personal data protection). No software makes you compliant with any of
          them. What good systems do is keep records clean enough that demonstrating compliance is
          straightforward.
        </AnswerBlock>
        <P>
          That distinction is the single most useful thing to hold on to while evaluating vendors. A CRM
          cannot hold a licence, cannot issue a tax invoice and cannot register a lease. It can make sure
          that when someone asks who approved a commission, on what deal, on what date, the answer takes
          thirty seconds instead of a week of spreadsheet archaeology.
        </P>

        <H2 id="rega">REGA and FAL licensing</H2>
        <P>
          The General Real Estate Authority (REGA) oversees the Saudi real estate sector and sets the
          framework brokerages operate within. FAL is the associated licensing programme covering brokerage
          firms and the individuals carrying out brokerage activity.
        </P>
        <H3 id="rega-ops">What this means operationally</H3>
        <P>
          Licence status is not a filing-cabinet fact — it is a live attribute of every agent on your team,
          and it expires. The failure mode is mundane: an agent&apos;s registration lapses, nobody notices
          because nothing prompts anyone, and they continue working deals in the meantime.
        </P>
        <UL>
          <li>Hold licence number and expiry against the agent record, not in a separate document folder.</li>
          <li>Set reminders far enough ahead that renewal is a task rather than an emergency.</li>
          <li>Be able to answer &ldquo;which agents are licensed today?&rdquo; without asking anyone.</li>
        </UL>

        <H2 id="wafi">Wafi and off-plan sales</H2>
        <P>
          Wafi governs off-plan sales, covering project registration and the escrow arrangements that protect
          buyer funds until construction milestones are met. For brokerages selling off-plan, this changes
          what the sales system has to track.
        </P>
        <P>
          A resale pipeline tracks a buyer against a property. An off-plan pipeline tracks a buyer against a{' '}
          <em>specific unit</em> in a registered project, with a payment schedule tied to construction
          progress and an allocation that must not be double-sold. Those are different data models, and
          generic CRMs frequently force the second into the first.
        </P>
        <Table
          head={['Requirement', 'Why it matters', 'Common failure']}
          rows={[
            ['Unit-level inventory', 'A unit is allocated to one buyer, not a general listing', 'Two agents reserve the same unit'],
            ['Payment milestone tracking', 'Instalments align to construction stages', 'Schedule lives in a developer PDF nobody reads'],
            ['Developer allocation records', 'Clarity over which units your agency may sell', 'Verbal allocations with no audit trail'],
            ['Commission on staged payments', 'Commission may not vest on signature alone', 'Commission paid before it is earned'],
          ]}
        />

        <H2 id="ejar">Ejar and tenancy registration</H2>
        <P>
          Ejar is the Saudi platform for registering tenancy contracts, bringing leases into a documented,
          standardised framework. For brokerages with a leasing arm, the operational reality mirrors what
          Dubai brokerages face with its counterpart system: registration itself is straightforward, and{' '}
          <strong>renewal tracking is where portfolios lose control</strong>, because expiry dates announce
          themselves to nobody.
        </P>
        <P>
          The same principle applies as elsewhere — tenancy dates belong against the property record where
          they can trigger a reminder, not in a tracker only one person maintains. We cover the equivalent
          workflow in detail in the{' '}
          <Link href="/guides/ejari/" className="font-semibold text-[#0858A8] hover:underline">
            Dubai Ejari guide
          </Link>
          ; the mechanics differ, the operational lesson does not.
        </P>

        <H2 id="zatca">ZATCA e-invoicing and commissions</H2>
        <P>
          ZATCA administers Saudi e-invoicing requirements. This is where vendor claims most often overreach,
          so it is worth being precise about the boundary.
        </P>
        <AnswerBlock>
          A real estate CRM does not issue tax invoices and does not make a brokerage ZATCA compliant. Its
          contribution is upstream: holding commission data that is <strong>already approved, already
          reconciled and already attributable</strong>, so the invoicing system has a reliable source.
        </AnswerBlock>
        <P>
          The practical problem this solves is familiar to any finance lead. Commission figures live in a
          spreadsheet, approvals happened over WhatsApp, and the person who knows why a particular split was
          agreed has left. Invoicing from that is slow and error-prone regardless of how compliant the
          invoicing software is.
        </P>
        <H3 id="zatca-ask">What to ask a vendor</H3>
        <UL>
          <li>How does approved commission data reach our invoicing or ERP system — API, export, or manual?</li>
          <li>Is the approval trail immutable, or can an administrator edit a signed-off figure?</li>
          <li>Does each commission record carry deal reference, split, approver identity and timestamp?</li>
        </UL>

        <H2 id="pdpl">PDPL and client data</H2>
        <P>
          The Personal Data Protection Law governs the handling of personal data in Saudi Arabia. Brokerages
          hold a great deal of it — identity documents, financial capacity, family circumstances, contact
          history.
        </P>
        <P>
          The questions worth putting to any vendor are concrete rather than philosophical:
        </P>
        <UL>
          <li><strong>Where is the data physically hosted?</strong> Ask for a location, not a cloud-provider name.</li>
          <li><strong>Who internally can see a given client record?</strong> Role-based access should be enforced server-side, not hidden in the interface.</li>
          <li><strong>How fast can access be revoked?</strong> When an agent resigns, active sessions matter as much as the login.</li>
          <li><strong>What is logged?</strong> If you cannot see who accessed a record, you cannot investigate anything.</li>
          <li><strong>What happens on exit?</strong> Export format and deletion process should be documented before you sign, not after.</li>
        </UL>

        <H2 id="systems">What your systems need to record</H2>
        <P>
          Across all six frameworks, the same short list of records does most of the work. If these exist and
          are trustworthy, compliance questions become reporting questions.
        </P>
        <Table
          head={['Record', 'Feeds', 'Test: can you produce it in 60 seconds?']}
          rows={[
            ['Agent licence number and expiry', 'REGA / FAL', 'Which agents are licensed today?'],
            ['Lead source and assignment trail', 'Conduct and dispute handling', 'Who received this enquiry, and when?'],
            ['Unit allocation and payment milestones', 'Wafi', 'Who holds unit 1204, and what is paid?'],
            ['Tenancy dates and documents', 'Ejar', 'Which leases expire in the next 60 days?'],
            ['Approved commission with approver and timestamp', 'ZATCA / audit', 'Who signed off this payout?'],
            ['Access and revocation log', 'PDPL', 'Who opened this client record last month?'],
          ]}
          caption="If any row takes longer than a minute to answer, that is where your exposure sits."
        />

        <H2 id="honest">What software can and cannot do</H2>
        <P>
          We build real estate software, so it is worth being direct about the limits rather than leaving
          them implied.
        </P>
        <Table
          head={['Software can', 'Software cannot']}
          rows={[
            ['Hold licence data and prompt before expiry', 'Obtain or renew a licence for you'],
            ['Track unit allocation and payment milestones', 'Register a project or operate an escrow account'],
            ['Keep tenancy dates and documents together', 'Register a tenancy on your behalf'],
            ['Produce clean, approved commission records', 'Issue a compliant tax invoice'],
            ['Enforce access control and log activity', 'Make your organisation PDPL compliant'],
          ]}
        />
        <P>
          <strong>Where AqarQore currently stands:</strong> we provide role-based access enforced server-side,
          mandatory multi-factor authentication, rapid session revocation, immutable two-step commission
          approvals, and regional data hosting options. We do <em>not</em> currently hold a Saudi regulatory
          certification, and we will not claim one. If a vendor tells you their product makes you compliant,
          ask which authority certified that and for what scope.
        </P>

        <Cta
          heading="See what a clean audit trail looks like"
          body="A 20-minute walkthrough of assignment trails, immutable commission approvals and access logging — the records that turn a compliance question into a report."
        />

        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />

        <P>
          <em>
            This guide is general information for real estate professionals and is not legal, tax or
            regulatory advice. Requirements set by REGA, ZATCA, SDAIA and other Saudi authorities change
            periodically. Confirm your obligations with a qualified adviser and through official channels.
          </em>
        </P>
      </Article>
    </PageShell>
  );
}
