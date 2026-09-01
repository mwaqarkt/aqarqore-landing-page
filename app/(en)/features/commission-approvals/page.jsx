import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';

const PATH = routeFor('featCommission', 'en');

const TITLE = 'Two-Step Commission Approvals for Real Estate Brokerages';
const DESCRIPTION =
  'How enforced two-step commission signoffs prevent disputes and double payouts: server-side approval chains, immutable audit trails and clean data for invoicing.';

export const metadata = {
  title: 'Two-Step Commission Approval Software for Brokerages',
  description: DESCRIPTION,
  alternates: alternatesFor('featCommission', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features/' },
  { name: 'Commission Approvals', path: PATH },
];

const FAQS = [
  [
    'What is a two-step commission approval?',
    'A closed deal moves through two independent signoffs before any payout: the sales director confirms the deal terms and split, then accounting confirms the payment. Neither can complete the other\'s step, and neither can skip it. Separating who agrees the number from who pays it is the control.',
  ],
  [
    'Why do commission disputes happen?',
    'Almost always because the agreed split was recorded informally — a WhatsApp message, a verbal agreement, a spreadsheet cell someone later edited. When the payout differs from what the agent remembers, there is no authoritative record to settle it, so it becomes an argument about memory.',
  ],
  [
    'What does "enforced" mean in this context?',
    'That the rule is applied server-side and cannot be bypassed, including by an administrator. If someone with the right permissions can mark a deal approved without the approval actually happening, the workflow is documentation rather than a control. Ask vendors this specific question.',
  ],
  [
    'How are double payouts prevented?',
    'Through idempotency protection on payout batches: submitting the same batch twice produces one payment, not two. This matters most under exactly the conditions that cause it — month-end, someone unsure whether the first submission went through, clicking again.',
  ],
  [
    'Does this handle ZATCA e-invoicing?',
    'Not directly — a CRM does not issue tax invoices. What it provides is approved commission data with amount, split, deal reference, approver identity and timestamp, so your invoicing or ERP system can raise a compliant invoice from a reliable source instead of a reconstructed spreadsheet.',
  ],
  [
    'Can commission splits vary per deal?',
    'They should. Real brokerages run tiered rates, co-broke splits, referral fees and team overrides. The requirement is that whatever structure applies is recorded on the deal at approval time, not recalculated later from memory.',
  ],
];

export default function CommissionFeature() {
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
        title="Two-Step Commission Approvals"
        lede="Commission disputes rarely start with dishonesty. They start with a split agreed in a WhatsApp message, recorded in a spreadsheet, and remembered differently by two people three months later."
        updated="30 August 2026"
        readTime="8 min read"
        toc={[
          { id: 'short-answer', label: 'What it does' },
          { id: 'why', label: 'Why disputes happen' },
          { id: 'enforced', label: 'What "enforced" actually means' },
          { id: 'chain', label: 'The two-step chain' },
          { id: 'double', label: 'Preventing double payouts' },
          { id: 'audit', label: 'The audit trail' },
          { id: 'evaluate', label: 'What to ask a vendor' },
          { id: 'faq', label: 'Frequently asked questions' },
        ]}
      >
        <H2 id="short-answer">What it does</H2>
        <AnswerBlock>
          Every closed deal passes through two independent signoffs before money moves:{' '}
          <strong>sales director confirms the deal and split, then accounting confirms the payment.</strong>{' '}
          Neither step can be skipped or performed by the other party, commissions are calculated on
          approval, and payout batches are protected against duplicate submission.
        </AnswerBlock>

        <H2 id="why">Why disputes happen</H2>
        <P>
          Ask any brokerage owner about commission disputes and you will hear the same story shape. A deal
          closed months ago. A split that was agreed informally. An agent who remembers 60/40 and an
          accounts team working from 50/50. Nobody is lying — the record simply never existed in a form that
          could settle it.
        </P>
        <P>Three failure modes account for most of it:</P>
        <UL>
          <li>
            <strong>The split lives in a message.</strong> Agreed over WhatsApp, never written to the deal
            record. Perfectly clear at the time, unrecoverable later.
          </li>
          <li>
            <strong>The spreadsheet is editable.</strong> Someone corrects a figure in good faith. There is
            no history, so the original number is simply gone.
          </li>
          <li>
            <strong>Approval was informal.</strong> A manager said yes in a corridor. When it is questioned,
            there is nothing to point at.
          </li>
        </UL>
        <P>
          The commercial cost is not the disputed amount. It is that your best agents — the ones producing
          the largest commissions — start checking every payout, and eventually start taking calls from
          competitors. Payout trust is a retention issue disguised as an accounting issue.
        </P>

        <H2 id="enforced">What &ldquo;enforced&rdquo; actually means</H2>
        <P>
          Most CRMs offer an approval workflow. The question that separates a control from a formality is
          whether the rule can be bypassed.
        </P>
        <Table
          head={['', 'A workflow', 'An enforced control']}
          rows={[
            ['Where the rule lives', 'The user interface', 'The server'],
            ['Can an admin skip a step?', 'Usually yes', 'No'],
            ['Can an approved figure be edited?', 'Often silently', 'No — a correction is a new, logged event'],
            ['Evidence it happened', 'A status field', 'Immutable record: who, what, when'],
            ['Under pressure at month-end', 'Someone finds a way around it', 'The rule holds'],
          ]}
        />
        <P>
          This is a specific question worth putting to every vendor:{' '}
          <strong>can a user with full administrative rights mark a deal approved without the approval
          occurring?</strong> If the honest answer is yes, the workflow documents intentions rather than
          enforcing them.
        </P>

        <H2 id="chain">The two-step chain</H2>
        <H3 id="step1">Step one — sales director</H3>
        <P>
          Confirms the deal is genuinely closed and that the commercial terms are right: sale price,
          commission rate, split between agents, any co-broke or referral arrangement. This is a commercial
          judgement, and it belongs with the person accountable for the sales floor.
        </P>
        <H3 id="step2">Step two — accounting</H3>
        <P>
          Confirms the financial execution: that the figure reconciles, that funds have been received where
          that is a precondition, and that the payout enters the correct batch. This is a financial control,
          and it belongs with finance.
        </P>
        <H3 id="separation">Why separation matters</H3>
        <P>
          Splitting these is the entire point. One person agreeing a number and releasing the payment is a
          single point of failure — for error as much as for anything worse. Two independent confirmations
          means a mistake has to survive two different people looking at it from two different angles.
        </P>

        <H2 id="double">Preventing double payouts</H2>
        <P>
          Duplicate payments happen under a predictable set of conditions: month-end, a slow connection,
          someone unsure whether the first submission registered, and a second click.
        </P>
        <P>
          The protection is <strong>idempotency</strong> — submitting the same payout batch twice results in
          one payment, not two. The second submission is recognised as a repeat of the first rather than a
          new instruction. It is unglamorous engineering that quietly prevents an expensive and embarrassing
          class of error.
        </P>

        <H2 id="audit">The audit trail</H2>
        <P>
          Every approval should record four things, and they should not be editable afterwards.
        </P>
        <Table
          head={['Recorded', 'Answers']}
          rows={[
            ['Who approved', 'Which named user, at which step'],
            ['What was approved', 'Amount, split, deal reference'],
            ['When', 'Timestamp, not just a date'],
            ['What changed', 'Prior values, if a correction was issued'],
          ]}
        />
        <P>
          This is also what makes downstream finance work tractable. Clean, approved, attributable commission
          data is what an invoicing or ERP system needs to raise an invoice without reconstruction — a point
          covered in more depth in the{' '}
          <Link href="/gcc/ksa-compliance/" className="font-semibold text-[#0858A8] hover:underline">
            Saudi compliance guide
          </Link>
          .
        </P>

        <H2 id="evaluate">What to ask a vendor</H2>
        <UL>
          <li>Can an administrator bypass an approval step? Ask for a demonstration, not an assurance.</li>
          <li>Can an approved commission figure be edited without a visible trace?</li>
          <li>What happens if a payout batch is submitted twice?</li>
          <li>Are tiered rates, co-broke splits and referral fees supported natively?</li>
          <li>How does approved commission data reach our accounting system?</li>
          <li>Can an agent see their own approved commissions without asking finance?</li>
        </UL>
        <P>
          That last one matters more than it looks. Most disputes begin as uncertainty. Agents who can see
          their own approved numbers stop needing to ask.
        </P>

        <Cta
          heading="See the approval chain in action"
          body="A 20-minute walkthrough of a deal moving from close to payout — director signoff, accounting confirmation, and an audit trail nobody can quietly edit."
        />

        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />
      </Article>
    </PageShell>
  );
}
