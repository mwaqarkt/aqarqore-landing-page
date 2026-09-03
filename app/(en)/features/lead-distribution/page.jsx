import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';

const PATH = routeFor('featLeads', 'en');

const TITLE = 'Automated Lead Distribution for Real Estate Brokerages';
const DESCRIPTION =
  'Route Property Finder, Bayut, Dubizzle and Aqar enquiries to an available agent in seconds, with duplicate detection and a full assignment trail.';

export const metadata = {
  title: 'Automated Lead Distribution Software for Brokerages',
  description: DESCRIPTION,
  alternates: alternatesFor('featLeads', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features/' },
  { name: 'Lead Distribution', path: PATH },
];

const FAQS = [
  [
    'What is automated lead distribution?',
    'Rules that assign every incoming enquiry to a specific agent automatically, in seconds, without a manager triaging an inbox. The rules account for who is available, who has capacity, and who covers the relevant area or property type.',
  ],
  [
    'How does it handle leads from multiple property portals?',
    'Enquiries from Property Finder, Bayut, Dubizzle, Aqar and Wasalt arrive into one pipeline with the source recorded. The important part is what happens when the same buyer enquires on two portals: good systems detect the duplicate and keep the original agent rather than creating a second record and a second agent.',
  ],
  [
    'What happens to leads that arrive at night or on the weekend?',
    'This is the case that matters most, because it is when enquiry volume peaks and staffing is lowest. Assignment should still run — routing to whoever is on duty or flagged available — rather than queueing until the next working morning.',
  ],
  [
    'What assignment rules are typical?',
    'Round-robin for fairness, capacity limits so nobody is handed more than they can work, availability and working-hours checks, and area or property-type matching so enquiries reach an agent who knows the district.',
  ],
  [
    'Why does an assignment audit trail matter?',
    'Because agents will ask why a lead went elsewhere, and "the system decided" is not an answer that holds. A trail showing which agents were considered, why each was skipped, and who received it turns a source of resentment into a transparent, reviewable rule.',
  ],
  [
    'Does this replace a sales manager?',
    'No. It removes the triage work — reading an inbox and forwarding enquiries — so the manager spends their time on coaching and deals rather than acting as a routing layer at nine in the evening.',
  ],
];

export default function LeadDistributionFeature() {
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
        title="Automated Lead Distribution"
        lede="A property enquiry arriving at 9pm on Thursday is worth a fraction of the same enquiry answered at 9:01pm. Manual triage cannot operate at that speed, and it is not supposed to."
        updated="30 August 2026"
        readTime="8 min read"
        toc={[
          { id: 'short-answer', label: 'What it does' },
          { id: 'problem', label: 'The unassigned lead problem' },
          { id: 'rules', label: 'How assignment rules work' },
          { id: 'duplicates', label: 'Duplicate detection across portals' },
          { id: 'trail', label: 'The assignment audit trail' },
          { id: 'evaluate', label: 'What to ask a vendor' },
          { id: 'faq', label: 'Frequently asked questions' },
        ]}
      >
        <H2 id="short-answer">What it does</H2>
        <AnswerBlock>
          Every enquiry from Property Finder, Bayut, Dubizzle, Aqar, Wasalt or WhatsApp is assigned to a
          named agent <strong>automatically, in seconds</strong>. Rules skip agents who are off-duty or at
          capacity, duplicates across portals are merged rather than double-assigned, and every assignment
          decision is logged.
        </AnswerBlock>

        <H2 id="problem">The unassigned lead problem</H2>
        <P>
          Most brokerages do not lose leads dramatically. They lose them to a gap — the hours between an
          enquiry arriving and somebody noticing it.
        </P>
        <H3 id="timing">Enquiries arrive when staff do not</H3>
        <P>
          Property browsing is an evening and weekend activity. In the GCC that means enquiries cluster
          exactly across the Friday–Saturday weekend and after 8pm, which is precisely when the fewest
          people are watching an inbox. A lead arriving Thursday evening and triaged Sunday morning has had
          two full days to book a viewing with someone else.
        </P>
        <H3 id="triage">Manual triage does not scale</H3>
        <P>
          The common arrangement is that portal notifications land in a shared inbox and a manager forwards
          them. It works at low volume with an attentive manager. It fails on holidays, during busy periods,
          when the manager is in a viewing, and whenever volume rises — which is to say, it fails exactly
          when the leads are most valuable.
        </P>
        <H3 id="fairness">Whoever is fastest is not necessarily right</H3>
        <P>
          The informal fix — first agent to claim it wins — rewards whoever watches their phone most
          obsessively, concentrates leads on a few agents until they are over capacity, and quietly starves
          newer agents of the pipeline they need to develop.
        </P>

        <H2 id="rules">How assignment rules work</H2>
        <P>
          A rule pipeline evaluates each enquiry against agents in sequence, skipping anyone who fails a
          check, and assigns to the first who passes.
        </P>
        <Table
          head={['Rule', 'What it checks', 'Why it matters']}
          rows={[
            ['Availability', 'Working hours, leave, on-duty status', 'Never assign to someone who cannot respond'],
            ['Capacity', 'Active lead count against a limit', 'Prevents a strong agent silently drowning'],
            ['Area match', 'Districts the agent covers', 'A West Bay enquiry should reach a West Bay agent'],
            ['Property type', 'Residential, commercial, off-plan', 'Off-plan needs different expertise from resale'],
            ['Round-robin', 'Rotation across eligible agents', 'Distributes fairly rather than by reflex speed'],
            ['Language', 'Arabic or English preference', 'Matches the buyer to an agent who can serve them'],
          ]}
          caption="Rules run in sequence. Each skipped agent is recorded with the reason."
        />
        <P>
          The practical result: an enquiry for a Lusail two-bedroom at 9pm on Thursday skips the agent on
          leave, skips the agent already holding 25 active leads, and reaches the third — who receives a
          WhatsApp notification while the buyer is still browsing.
        </P>

        <H2 id="duplicates">Duplicate detection across portals</H2>
        <P>
          Serious buyers enquire on more than one portal, often about the same unit. Without duplicate
          detection this produces two records and two agents, and the buyer receives two calls from the same
          agency within an hour — which reads as disorganised rather than responsive.
        </P>
        <P>
          Worse, it seeds a commission dispute. Two agents can each reasonably believe the lead was theirs,
          and there is no record establishing which arrived first.
        </P>
        <UL>
          <li>Match on phone number and email across all portal sources.</li>
          <li>Keep the original agent — first contact owns the relationship.</li>
          <li>Attach the second enquiry to the existing record with its source noted.</li>
          <li>Log the merge, so the ownership question has a documented answer.</li>
        </UL>
        <P>
          The same principle applies to duplicate listings, where multiple agents post one unit at different
          prices — visible to buyers, and penalised by portals.
        </P>

        <H2 id="trail">The assignment audit trail</H2>
        <P>
          Automatic assignment creates a question that manual forwarding never did: why did that lead go to
          them and not me?
        </P>
        <P>
          Without an answer, automation feels arbitrary and agents lose trust in it. With one, the rule
          becomes reviewable — and occasionally the trail shows the rule is wrong, which is useful
          information rather than an argument.
        </P>
        <P>Every assignment should record which agents were evaluated, why each was skipped, who received it, and when. That is also what settles ownership disputes later, and it connects directly to{' '}
          <Link href="/features/commission-approvals/" className="font-semibold text-[#0858A8] hover:underline">
            commission approvals
          </Link>{' '}
          — the agent attached to a deal should be traceable back to a logged assignment decision.
        </P>

        <H2 id="evaluate">What to ask a vendor</H2>
        <UL>
          <li>Which portals connect by real API rather than email parsing?</li>
          <li>What happens to an enquiry at 9pm on Thursday?</li>
          <li>How is the same buyer enquiring on two portals detected and handled?</li>
          <li>Can we see why a specific lead went to a specific agent?</li>
          <li>Can rules differ by property type or district?</li>
          <li>What happens when every eligible agent is at capacity?</li>
        </UL>
        <P>
          That last question is the revealing one. The honest answer is escalation to a manager with an
          alert. A vendor who has not considered it has not run this at volume.
        </P>

        <Cta
          heading="See assignment running on your portals"
          body="A 20-minute walkthrough with your own portal feeds — rule evaluation, duplicate merging, and the audit trail behind every assignment decision."
        />

        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />
      </Article>
    </PageShell>
  );
}
