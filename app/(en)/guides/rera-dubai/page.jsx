import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';

const PATH = routeFor('reraDubai', 'en');
const TITLE = 'RERA Dubai: Broker Registration, Cards and Renewal';
const DESCRIPTION =
  'What RERA is, how to get a Dubai broker card, the DREI training and exam, annual renewal requirements, and how brokerages track agent licence status across a team.';

export const metadata = {
  title: 'RERA Dubai: Broker Card, Exam & Renewal Guide',
  description: DESCRIPTION,
  alternates: alternatesFor('reraDubai', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Guides', path: '/guides/' },
  { name: 'RERA Dubai', path: PATH },
];

const FAQS = [
  [
    'What is RERA?',
    'RERA is the Real Estate Regulatory Agency, the regulatory arm of the Dubai Land Department. It oversees real estate professionals, brokerages and developments in Dubai — including broker licensing, advertising permits and the rules governing how property is marketed and transacted.',
  ],
  [
    'What is a RERA card?',
    'A RERA card, or broker card, is the individual certification required to sell, lease or manage property in Dubai. It is separate from the company trade licence: the brokerage holds one, and each agent working under it holds their own card.',
  ],
  [
    'Do I need to pass an exam to get a RERA card?',
    'Yes. Candidates complete the certified training course at the Dubai Real Estate Institute, the educational arm of the DLD, and pass its examination. The course covers UAE real estate law, ethics, contract practice, valuation basics and processes such as Ejari and Oqood.',
  ],
  [
    'How long is a RERA card valid?',
    'Broker cards are valid for one year and must be renewed annually. The DLD requires brokers to pass an annual test as part of renewal, so renewal is not purely administrative.',
  ],
  [
    'What documents are needed for registration?',
    'Typically passport, visa, Emirates ID, the DREI course certificate and a police clearance certificate. Confirm the current list through official DLD channels, as requirements are updated periodically.',
  ],
  [
    'What happens if an agent’s card expires?',
    'An agent without a valid card should not be carrying out brokerage activity, and permits and listings tied to that agent can be affected. The practical risk is mundane rather than dramatic: the card lapses, nobody notices because nothing prompts anyone, and the agent keeps working deals in the meantime.',
  ],
];

export default function ReraGuide() {
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
        title="RERA Dubai: Broker Registration, Cards and Renewal"
        lede="Every agent selling property in Dubai needs their own card, and every card expires after a year. For a brokerage, that turns licensing from a one-off onboarding task into a recurring operational one."
        updated="30 August 2026"
        readTime="8 min read"
        toc={[
          { id: 'what', label: 'What RERA is' },
          { id: 'card', label: 'The broker card' },
          { id: 'drei', label: 'DREI training and the exam' },
          { id: 'process', label: 'The registration process' },
          { id: 'renewal', label: 'Annual renewal' },
          { id: 'brokerage', label: 'Tracking licences across a team' },
          { id: 'faq', label: 'Frequently asked questions' },
        ]}
      >
        <div className="rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900 leading-relaxed">
          <strong>General guidance, not legal advice.</strong> Requirements, fees and processes are set by the
          Dubai Land Department and change. Fee figures quoted below are as publicly reported and should be
          confirmed through official DLD and DREI channels before you rely on them.
        </div>

        <H2 id="what">What RERA is</H2>
        <AnswerBlock>
          RERA is the Real Estate Regulatory Agency, the regulatory arm of the{' '}
          <Link href="/guides/dld/" className="font-semibold text-[#0858A8] hover:underline">
            Dubai Land Department
          </Link>
          . It oversees brokerages, agents and developments in Dubai — broker licensing, advertising permits
          and the conduct rules governing how property is marketed and sold.
        </AnswerBlock>
        <P>
          The distinction between the three names brokers hear constantly is worth fixing early, because they
          are often used interchangeably and are not the same thing.
        </P>
        <Table
          head={['Name', 'What it is', 'What you deal with it for']}
          rows={[
            ['DLD', 'The government body', 'Title deeds, transactions, registration'],
            ['RERA', 'Its regulatory arm', 'Broker licensing, conduct rules, advertising'],
            ['DREI', 'Its educational arm', 'Training courses and the broker exam'],
            ['Trakheesi', 'A DLD permit system', 'Advertising permits for each listing'],
          ]}
        />

        <H2 id="card">The broker card</H2>
        <P>
          The RERA card is an individual certification. Anyone selling, leasing or managing property in Dubai
          needs one, and it is <strong>separate from the company trade licence</strong>. The brokerage holds
          its licence; each agent working under it holds their own card.
        </P>
        <P>
          This is the point that surprises new brokerage owners. Hiring an experienced agent does not mean
          inheriting a valid card — it belongs to the individual, has its own expiry, and needs to be
          verified at onboarding rather than assumed.
        </P>

        <H2 id="drei">DREI training and the exam</H2>
        <P>
          The Dubai Real Estate Institute is the DLD&apos;s educational arm. Completing its certified training
          course is mandatory before registration, and courses are available face to face or online.
        </P>
        <P>The syllabus covers the ground an agent is expected to work within:</P>
        <UL>
          <li>UAE real estate law and the regulatory framework</li>
          <li>Professional ethics and conduct</li>
          <li>Contract practice, including the standard forms</li>
          <li>Valuation fundamentals</li>
          <li>Operational processes including Ejari and Oqood</li>
          <li>Compliance obligations</li>
        </UL>
        <P>
          Registration for the course and examination is handled through DREI. Publicly reported figures put
          the exam registration at around AED 700 and the training course at around AED 2,500, with total cost
          for an individual agent — training, exam and card registration — commonly reported in the AED
          6,000–12,000 range. <strong>Treat these as indicative and confirm current fees directly.</strong>
        </P>

        <H2 id="process">The registration process</H2>
        <Table
          head={['Step', 'What happens', 'Common delay']}
          rows={[
            ['1. Employment', 'Join a licensed brokerage; you register under its licence', 'Applying before the brokerage relationship is formalised'],
            ['2. DREI course', 'Complete the certified training, in person or online', 'Leaving it until the agent has already started selling'],
            ['3. Examination', 'Pass the DREI exam', 'Underestimating the legal and contract content'],
            ['4. Documents', 'Passport, visa, Emirates ID, course certificate, police clearance', 'An expired document, or a name spelled differently across papers'],
            ['5. Card issued', 'Broker card issued, valid for one year', 'Nobody records the expiry date anywhere durable'],
          ]}
          caption="Timelines are commonly reported at two to four weeks. Confirm the current process with the DLD."
        />
        <P>
          Step five is where the operational problem starts, and it is the least discussed. The card arrives,
          the agent starts working, and the expiry date exists only on the card itself.
        </P>

        <H2 id="renewal">Annual renewal</H2>
        <P>
          Broker cards are valid for one year. The DLD requires brokers to pass an annual test as part of
          renewal, so this is a genuine requalification rather than a fee payment.
        </P>
        <P>
          For a brokerage of any size this creates a rolling obligation. Agents joined at different times, so
          cards expire at different times, and each expiry needs a training and testing window scheduled
          before it arrives — not after.
        </P>

        <H2 id="brokerage">Tracking licences across a team</H2>
        <P>
          With five agents, licence expiry lives in a manager&apos;s memory and mostly works. With
          twenty-five, it does not — and the failure mode is specific: a card lapses, nothing prompts anyone,
          and the agent continues working deals in the meantime.
        </P>
        <P>
          The fix is unglamorous. Licence number and expiry belong as a field on the agent record, not in a
          folder of scanned PDFs, and they need to be able to trigger a reminder.
        </P>
        <UL>
          <li><strong>Licence number and expiry on the agent record</strong>, visible to whoever opens it.</li>
          <li><strong>Reminders well ahead of expiry</strong> — enough lead time to book DREI testing.</li>
          <li><strong>One answerable question:</strong> which agents are licensed today? If that takes longer than a minute, that is where the exposure sits.</li>
        </UL>
        <P>
          The same principle runs through the equivalent Saudi framework, where FAL registration creates an
          identical tracking obligation — covered in the{' '}
          <Link href="/gcc/ksa-compliance/" className="font-semibold text-[#0858A8] hover:underline">
            Saudi compliance guide
          </Link>
          .
        </P>

        <Cta
          heading="Know which agents are licensed, today"
          body="AqarQore holds licence numbers and expiry against the agent record with reminders before they lapse — so licensing is a report rather than a scramble."
        />

        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />

        <P>
          <em>
            This guide is general information for real estate professionals and is not legal advice. RERA and
            DREI requirements, fees and processes are set by the Dubai Land Department and change
            periodically. Confirm current details through official channels before acting.
          </em>
        </P>
      </Article>
    </PageShell>
  );
}
