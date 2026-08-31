import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';

const PATH = routeFor('security', 'en');
const TITLE = 'Security and Data Residency for GCC Brokerages';
const DESCRIPTION =
  'Access control, multi-factor authentication, session revocation and regional data hosting — and the questions worth asking any CRM vendor about where your client data lives.';

export const metadata = {
  title: 'Security & Data Residency | AqarQore',
  description: DESCRIPTION,
  alternates: alternatesFor('security', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Security', path: PATH },
];

const FAQS = [
  [
    'Where is our data hosted?',
    'AqarQore offers regional data hosting options for the UAE, Qatar and Saudi Arabia. Ask any vendor for a physical location rather than a cloud-provider brand name — "AWS" is not an answer to "which country".',
  ],
  [
    'Is AqarQore certified compliant with GCC data protection law?',
    'No, and we will not claim otherwise. Compliance is a property of how an organisation operates, not a badge software carries on your behalf. What we provide is server-enforced access control, mandatory multi-factor authentication, rapid session revocation and regional hosting options — the controls that make your own compliance position defensible.',
  ],
  [
    'What happens when an agent leaves?',
    'Access should be revocable in under a minute, and that must include active sessions, not just the login. An agent who is logged in on a phone at the moment you disable their account should lose access immediately, not at the next token refresh.',
  ],
  [
    'Can an administrator see everything?',
    'Role-based access boundaries are enforced server-side, so what a user cannot see is not merely hidden in the interface — it is not returned to their client at all. That distinction matters: interface-level restrictions are bypassable by anyone who opens developer tools.',
  ],
  [
    'Is activity logged?',
    'Yes. If you cannot see who accessed a client record and when, you cannot investigate anything — which means you cannot answer a client asking who saw their file, or establish what an ex-employee accessed before leaving.',
  ],
  [
    'What happens to our data if we leave?',
    'You should have a documented export format and deletion process agreed before you sign, not discovered afterwards. Ask every vendor this question, us included, and get the answer in writing.',
  ],
];

export default function SecurityPage() {
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
        title="Security and Data Residency"
        lede="A brokerage CRM holds identity documents, financial capacity and years of private conversation. The questions worth asking about it are specific and answerable — and most vendor security pages avoid them."
        updated="30 August 2026"
        readTime="7 min read"
        toc={[
          { id: 'summary', label: 'The short answer' },
          { id: 'access', label: 'Access control' },
          { id: 'offboarding', label: 'Offboarding and session revocation' },
          { id: 'residency', label: 'Data residency' },
          { id: 'logging', label: 'Logging and accountability' },
          { id: 'honest', label: 'What we do not claim' },
          { id: 'checklist', label: 'Vendor checklist' },
          { id: 'faq', label: 'Frequently asked questions' },
        ]}
      >
        <H2 id="summary">The short answer</H2>
        <AnswerBlock>
          AqarQore enforces <strong>role-based access server-side, mandatory TOTP multi-factor
          authentication, sub-60-second session revocation and regional data hosting options</strong> across
          the UAE, Qatar and Saudi Arabia. We hold no regulatory certification and do not claim one — the
          controls are real, the badge is not.
        </AnswerBlock>

        <H2 id="access">Access control</H2>
        <P>
          The meaningful question is not whether a product has permissions — everything does — but{' '}
          <strong>where the permission is enforced.</strong>
        </P>
        <Table
          head={['', 'Interface-level restriction', 'Server-enforced boundary']}
          rows={[
            ['What happens', 'Data is sent, then hidden in the UI', 'Data is never returned to that user'],
            ['Bypassable?', 'Yes — developer tools, or the API directly', 'No'],
            ['Typical symptom', 'A hidden field visible in a network response', 'Nothing to find'],
          ]}
        />
        <P>
          This matters in a brokerage more than in most businesses, because agents compete with each other.
          A permission model that merely hides a colleague&apos;s pipeline from the interface is not a
          control — it is a convention.
        </P>
        <P>
          Multi-factor authentication is mandatory rather than optional, using TOTP. Optional MFA in a
          business where staff turn over frequently is MFA that a meaningful share of accounts will not have.
        </P>

        <H2 id="offboarding">Offboarding and session revocation</H2>
        <P>
          Agent turnover is high in this industry, and offboarding is where most CRM security actually fails
          — not through attack, but through an account nobody remembered to close.
        </P>
        <P>
          The specific gap to ask about is <strong>active sessions</strong>. Disabling a login does not always
          end a session already running on someone&apos;s phone. If revocation only takes effect at the next
          token refresh, an ex-employee may retain access for hours after you believed you had removed it.
        </P>
        <UL>
          <li>Revocation should propagate in under a minute, sessions included.</li>
          <li>It should be one action, not a checklist across several screens.</li>
          <li>The event should be logged, so you can evidence when access ended.</li>
        </UL>
        <P>
          This is also why WhatsApp conversations belong on an agency-owned number rather than a personal
          handset — revoking system access does nothing about a client relationship living on a phone that
          walks out with its owner. See{' '}
          <Link href="/features/whatsapp-ai-qualification/" className="font-semibold text-[#0858A8] hover:underline">
            WhatsApp lead qualification
          </Link>
          .
        </P>

        <H2 id="residency">Data residency</H2>
        <P>
          Saudi Arabia&apos;s Personal Data Protection Law and the UAE&apos;s data protection framework both
          make the physical location of data a live question rather than a technicality. AqarQore offers
          regional hosting options for the UAE, Qatar and Saudi Arabia.
        </P>
        <P>
          When evaluating any vendor on this, insist on a specific answer:
        </P>
        <Table
          head={['Question', 'Unacceptable answer', 'Acceptable answer']}
          rows={[
            ['Which country holds our data?', '"The cloud" or a provider brand name', 'A named country and region'],
            ['Does it leave that region?', 'Silence, or "for processing"', 'A clear statement, including backups'],
            ['Where are backups held?', 'Unaddressed', 'Named, with the same residency guarantee'],
            ['Who can access it internally?', '"Only authorised staff"', 'A described process with logging'],
          ]}
        />
        <P>
          Backups are the row most often skipped. Data resident in-region with backups replicated elsewhere is
          not resident in-region.
        </P>

        <H2 id="logging">Logging and accountability</H2>
        <P>
          Logging is what converts a security claim into something you can evidence. Without it you cannot
          answer a client asking who saw their file, establish what a departing employee accessed, or
          determine whether an incident happened at all.
        </P>
        <P>
          The same principle runs through commission approvals, where an immutable record of who approved
          what and when is the difference between a control and a status field — see{' '}
          <Link href="/features/commission-approvals/" className="font-semibold text-[#0858A8] hover:underline">
            commission approvals
          </Link>
          .
        </P>

        <H2 id="honest">What we do not claim</H2>
        <P>
          Security pages tend to imply more than they state. Ours should be readable in the opposite
          direction, so here is the boundary in plain terms.
        </P>
        <Table
          head={['We provide', 'We do not claim']}
          rows={[
            ['Server-enforced role-based access', 'A regulatory certification'],
            ['Mandatory TOTP multi-factor authentication', 'That we make your organisation compliant'],
            ['Sub-60-second session revocation', 'Immunity from every attack class'],
            ['Regional hosting options (UAE, Qatar, KSA)', 'Sovereign hosting in a formal legal sense'],
            ['Access and activity logging', 'That logging substitutes for your own policies'],
          ]}
        />
        <P>
          If a vendor tells you their product makes you compliant with the PDPL or any other framework, ask
          which authority issued that certification and for what scope. The regulatory picture for Saudi
          brokerages is covered in the{' '}
          <Link href="/gcc/ksa-compliance/" className="font-semibold text-[#0858A8] hover:underline">
            compliance guide
          </Link>
          .
        </P>

        <H2 id="checklist">Vendor checklist</H2>
        <P>Ask all of these of every vendor on your shortlist, including us.</P>
        <UL>
          <li>Where is our data physically hosted, and where are the backups?</li>
          <li>Is access enforced server-side or in the interface?</li>
          <li>Is multi-factor authentication mandatory or optional?</li>
          <li>How fast is access revoked, and does that include active sessions?</li>
          <li>What is logged, and how long is it retained?</li>
          <li>What is the export format and deletion process if we leave?</li>
          <li>Do you hold any certification — and if so, from whom, for what scope?</li>
        </UL>

        <Cta
          heading="Ask us the checklist directly"
          body="A 20-minute walkthrough covering access boundaries, offboarding, hosting options and logging — with straight answers on what we do and do not provide."
        />

        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />
      </Article>
    </PageShell>
  );
}
