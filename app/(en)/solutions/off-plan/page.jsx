import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';

const PATH = routeFor('offPlan', 'en');
const TITLE = 'Off-Plan Sales CRM for Dubai and GCC Brokerages';
const DESCRIPTION =
  'Why off-plan breaks a normal sales pipeline: unit-level allocation, escrow-linked payment milestones, Oqood registration and commission that vests in stages rather than on signature.';

export const metadata = {
  title: 'Off-Plan Sales CRM for Dubai Brokerages',
  description: DESCRIPTION,
  alternates: alternatesFor('offPlan', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Off-Plan Sales', path: PATH },
];

const FAQS = [
  [
    'Why does off-plan need different CRM handling from resale?',
    'A resale pipeline tracks a buyer against a property. An off-plan pipeline tracks a buyer against a specific unit in a registered project, with an allocation that must not be sold twice and a payment schedule tied to construction progress. Those are different data models, and forcing the second into the first is how double-reservations happen.',
  ],
  [
    'What is Oqood?',
    'Oqood is the Dubai Land Department system for registering off-plan property. It creates the buyer’s formal legal record during construction and connects to the escrow account and the eventual title deed. The Oqood certificate is replaced by a title deed at handover.',
  ],
  [
    'How do escrow accounts affect the sales process?',
    'Every off-plan project in Dubai must maintain an independent escrow account under Law No. 8 of 2007, and developers can only draw funds after reaching RERA-approved construction milestones. Payment schedules must align with that framework, so a buyer cannot be asked to pay ahead of the stage their money funds.',
  ],
  [
    'When does commission on an off-plan deal actually vest?',
    'Often not on signature. Depending on the developer agreement, commission may be released against booking, against a payment stage, or on handover. The risk is paying an agent commission that has not been earned, which is why approval should be tied to the milestone rather than the contract date.',
  ],
  [
    'Can two agents reserve the same unit?',
    'Not if allocation is tracked at unit level with a single source of truth. It happens routinely when inventory lives in a developer spreadsheet circulated by email, because two agents can each hold a version that looks current.',
  ],
  [
    'Does a CRM handle Oqood or escrow registration?',
    'No. Those are DLD and developer processes. What a CRM contributes is the underlying record — which buyer holds which unit, what has been paid, which milestone is next — so registration and reconciliation start from accurate data rather than a reconstruction.',
  ],
];

export default function OffPlanSolution() {
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
        title="Off-Plan Sales: Why It Breaks a Normal CRM"
        lede="Off-plan is not resale with a longer timeline. It is a different transaction — a specific unit, an allocation that must not be double-sold, and money that moves against construction milestones rather than a completion date."
        updated="30 August 2026"
        readTime="9 min read"
        toc={[
          { id: 'summary', label: 'The short answer' },
          { id: 'different', label: 'Four ways off-plan differs' },
          { id: 'inventory', label: 'Unit-level inventory' },
          { id: 'escrow', label: 'Escrow and payment milestones' },
          { id: 'oqood', label: 'Oqood and the paper trail' },
          { id: 'commission', label: 'Commission that vests in stages' },
          { id: 'ksa', label: 'Saudi Arabia: Wafi' },
          { id: 'evaluate', label: 'What to ask a vendor' },
          { id: 'faq', label: 'Frequently asked questions' },
        ]}
      >
        <div className="rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900 leading-relaxed">
          <strong>General guidance, not legal advice.</strong> Off-plan regulation in Dubai and Saudi Arabia
          is set by the DLD, RERA and REGA and changes. Confirm current obligations through official channels.
        </div>

        <H2 id="summary">The short answer</H2>
        <AnswerBlock>
          Off-plan needs <strong>unit-level allocation, milestone-linked payment tracking, and commission
          that vests in stages</strong> — three things a standard sales pipeline does not have. Run off-plan
          through a resale pipeline and the failure modes are predictable: double-reserved units, payment
          schedules living in a developer PDF, and commission paid before it was earned.
        </AnswerBlock>

        <H2 id="different">Four ways off-plan differs</H2>
        <Table
          head={['', 'Resale', 'Off-plan']}
          rows={[
            ['What is sold', 'A property that exists', 'A specific unit in a registered project'],
            ['Inventory', 'One listing, one owner', 'An allocation from a developer that must not be double-sold'],
            ['Money', 'Paid around transfer', 'Instalments released against construction milestones via escrow'],
            ['Commission', 'Typically on completion', 'May vest at booking, at a payment stage, or on handover'],
          ]}
        />
        <P>
          Each row is a place where a generic CRM quietly forces a workaround, and workarounds in off-plan are
          expensive because they involve other people&apos;s money held in escrow.
        </P>

        <H2 id="inventory">Unit-level inventory</H2>
        <P>
          The single most common off-plan failure is two agents reserving the same unit. It does not happen
          because anyone is careless. It happens because developer inventory arrives as a spreadsheet
          circulated by email, and two agents can each be holding a version that looked current when they
          opened it.
        </P>
        <P>What unit-level tracking actually requires:</P>
        <UL>
          <li><strong>One authoritative record per unit</strong> — not a listing that represents a building.</li>
          <li><strong>Status that reflects reality</strong> — available, held, reserved, sold — with the hold visible to everyone immediately.</li>
          <li><strong>Time-boxed holds.</strong> A reservation that never expires is inventory removed from the market by accident.</li>
          <li><strong>Allocation provenance.</strong> Which units the developer actually gave you, in writing, with dates.</li>
        </UL>
        <P>
          That last point is the one brokerages skip. Allocations agreed verbally with a developer sales
          manager are common and unrecorded, and they become disputes the moment a project sells well.
        </P>

        <H2 id="escrow">Escrow and payment milestones</H2>
        <P>
          Every off-plan project in Dubai must maintain an independent escrow account, regulated under Law
          No. 8 of 2007. The developer cannot simply draw the money: funds are released only after
          RERA-approved construction milestones are reached.
        </P>
        <P>
          This is a genuine buyer protection, and it has a direct consequence for how a brokerage tracks a
          deal. Payment plans typically open with a deposit — commonly reported in the 5–20% range — followed
          by milestone-linked instalments during construction and a balance at handover. The schedule has to
          align with the escrow framework, meaning{' '}
          <strong>a buyer cannot be asked to pay ahead of the construction stage their money funds.</strong>
        </P>
        <P>
          So the record that matters is not &ldquo;deal value&rdquo;. It is: which instalments are due, which
          have been paid, which milestone is next, and what happens to the buyer relationship in the eighteen
          quiet months in between. A deal marked simply as &ldquo;closed&rdquo; loses all of that.
        </P>

        <H2 id="oqood">Oqood and the paper trail</H2>
        <P>
          Oqood is the DLD system that registers off-plan purchases. It creates the buyer&apos;s formal legal
          record during construction, connects to the escrow account and the milestone process, and is
          eventually replaced by a title deed at handover.
        </P>
        <P>
          A CRM does not perform Oqood registration — that is a DLD and developer process. What it does is
          hold the records registration depends on, so the process starts from something accurate. The wider
          system map is in the{' '}
          <Link href="/guides/dld/" className="font-semibold text-[#0858A8] hover:underline">
            Dubai Land Department guide
          </Link>
          .
        </P>
        <P>
          Advertising an off-plan unit also requires a valid Trakheesi permit with developer authorisation
          behind it, the same as any other Dubai listing — see the{' '}
          <Link href="/guides/trakheesi/" className="font-semibold text-[#0858A8] hover:underline">
            Trakheesi guide
          </Link>
          .
        </P>

        <H2 id="commission">Commission that vests in stages</H2>
        <P>
          On a resale, commission is broadly earned at completion. Off-plan is less tidy: depending on the
          developer agreement, commission may be released against the booking, against a payment stage, or
          only at handover — sometimes split across several of these.
        </P>
        <P>
          The exposure is specific and it runs one direction. Pay an agent on signature for a unit whose buyer
          later defaults at milestone three, and you are recovering money from someone who has already spent
          it. That is a conversation which damages the relationship regardless of who was right.
        </P>
        <P>
          The control is to tie approval to the milestone rather than the contract date, and to record what
          was approved, by whom and when. That is the same enforced two-step chain described in{' '}
          <Link href="/features/commission-approvals/" className="font-semibold text-[#0858A8] hover:underline">
            commission approvals
          </Link>
          , applied to a schedule instead of a single event.
        </P>

        <H2 id="ksa">Saudi Arabia: Wafi</H2>
        <P>
          The Saudi equivalent is Wafi, which governs off-plan sales including project registration and
          escrow arrangements protecting buyer funds. The mechanics differ from Dubai; the operational
          requirement does not. Unit-level allocation, milestone tracking and staged commission are the same
          three problems.
        </P>
        <P>
          Wasalt carries a meaningful share of Saudi project and masterplan inventory, which is why off-plan
          enquiries from it often warrant different routing from resale — see the{' '}
          <Link href="/integrations/wasalt/" className="font-semibold text-[#0858A8] hover:underline">
            Wasalt integration
          </Link>{' '}
          and the{' '}
          <Link href="/gcc/ksa-compliance/" className="font-semibold text-[#0858A8] hover:underline">
            Saudi compliance guide
          </Link>
          .
        </P>

        <H2 id="evaluate">What to ask a vendor</H2>
        <Table
          head={['Question', 'What a good answer sounds like']}
          rows={[
            ['Is inventory tracked per unit or per listing?', 'Per unit, with status and allocation provenance'],
            ['Can two agents reserve the same unit?', 'No — holds are visible immediately and time-boxed'],
            ['How are payment milestones recorded?', 'On the deal, with due dates that can trigger reminders'],
            ['Can commission vest in stages?', 'Yes, tied to milestones rather than the contract date'],
            ['What happens during the quiet 18 months?', 'Scheduled touchpoints against milestones, not silence'],
            ['Does off-plan share a pipeline with resale?', 'Separate pipelines and separate assignment rules'],
          ]}
        />
        <P>
          The fifth question is the one that separates systems built for off-plan from systems adapted to it.
          Most of an off-plan relationship happens after the sale, and a buyer who hears nothing for a year is
          a buyer who does not refer anyone.
        </P>

        <Cta
          heading="See off-plan handled properly"
          body="A 20-minute walkthrough of unit-level allocation, milestone-linked payments and staged commission approval — on your own project inventory."
        />

        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />

        <P>
          <em>
            This page is general information for real estate professionals and is not legal, tax or financial
            advice. Off-plan requirements set by the DLD, RERA and REGA change periodically. Confirm current
            obligations through official channels.
          </em>
        </P>
      </Article>
    </PageShell>
  );
}
