import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';

const PATH = routeFor('featWhatsapp', 'en');

const TITLE = 'WhatsApp Lead Qualification for Real Estate Agencies';
const DESCRIPTION =
  'How a WhatsApp bot on the official Meta Cloud API captures budget, area and property type before an agent picks up the conversation.';

export const metadata = {
  title: 'WhatsApp Lead Qualification Bot for Real Estate',
  description: DESCRIPTION,
  alternates: alternatesFor('featWhatsapp', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features/' },
  { name: 'WhatsApp Qualification', path: PATH },
];

const FAQS = [
  [
    'What is a WhatsApp lead qualification bot?',
    'An automated first responder on your agency WhatsApp number. It greets an enquiry, asks the qualifying questions an agent would ask — budget, area, property type, timeline — presents matching listings, then hands the conversation to a human agent with all that context already captured.',
  ],
  [
    'Does it replace the agent?',
    'No, and a bot that tries to will cost you deals. It handles the first two minutes: acknowledging the enquiry instantly and collecting the facts. The agent still runs the relationship, the viewing and the negotiation — they simply start the conversation already knowing what the buyer wants.',
  ],
  [
    'What is the difference between the official Meta Cloud API and an unofficial integration?',
    'The official WhatsApp Cloud API is Meta\'s supported business platform, with verified business identity and defined messaging rules. Unofficial integrations drive WhatsApp Web or a modified client and are against Meta\'s terms — they risk the number being banned and break without warning when WhatsApp changes. For a number your whole pipeline runs through, that is not a risk worth taking to save a subscription fee.',
  ],
  [
    'Whose WhatsApp number is used?',
    'Your agency\'s. With AqarQore each agency connects its own WhatsApp Business Account and its own number, so the number, the conversation history and the customer relationship stay yours. Be cautious of any vendor that puts your leads through a number they own.',
  ],
  [
    'What is the 24-hour messaging window?',
    'Meta allows free-form replies within 24 hours of a customer\'s last message. Outside that window you can only send pre-approved template messages. This shapes follow-up design: qualification and handoff should happen inside the window, and anything later needs an approved template.',
  ],
  [
    'Can it work in Arabic?',
    'It needs to. In Saudi Arabia and much of the GCC, buyer conversations happen in Arabic. Check that qualification flows, listing cards and template messages all work in Arabic, and test with a native speaker rather than accepting a demo in English.',
  ],
];

export default function WhatsappFeature() {
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
        title="WhatsApp Lead Qualification for Real Estate Agencies"
        lede="In the GCC, property buyers message on WhatsApp. If your CRM does not sit inside that conversation, your CRM does not hold your customer history — an agent's phone does."
        updated="30 August 2026"
        readTime="8 min read"
        toc={[
          { id: 'short-answer', label: 'What it does' },
          { id: 'why', label: 'Why WhatsApp decides GCC deals' },
          { id: 'official', label: 'Official Cloud API vs unofficial' },
          { id: 'flow', label: 'What a qualification flow captures' },
          { id: 'window', label: 'The 24-hour window' },
          { id: 'handoff', label: 'Handoff to a human agent' },
          { id: 'evaluate', label: 'What to ask a vendor' },
          { id: 'faq', label: 'Frequently asked questions' },
        ]}
      >
        <H2 id="short-answer">What it does</H2>
        <AnswerBlock>
          A WhatsApp qualification bot answers every enquiry instantly on your agency number, captures{' '}
          <strong>budget, area, property type and timeline</strong> conversationally, shows matching
          listings, then hands the conversation to a human agent with that context attached. The agent opens
          a chat already knowing what the buyer wants.
        </AnswerBlock>

        <H2 id="why">Why WhatsApp decides GCC deals</H2>
        <P>
          Property enquiries in Dubai, Doha and Riyadh do not arrive as neatly formatted web-form
          submissions. They arrive as a WhatsApp message, often outside working hours, frequently at the
          same moment the buyer is messaging three other agencies.
        </P>
        <P>Two things follow from that, and both are expensive.</P>
        <H3 id="speed">First response decides the shortlist</H3>
        <P>
          A buyer messaging several agencies is running an informal comparison. The agency that replies while
          they are still holding the phone gets the viewing. The one that replies on Sunday morning is
          responding to somebody who has already booked with a competitor.
        </P>
        <H3 id="ownership">History on a personal phone is not your history</H3>
        <P>
          When agents message buyers from personal handsets, the record of every negotiation, preference and
          objection lives on a device you do not control. When that agent resigns — and in this industry they
          do — the relationship leaves with them. This is the quiet, structural version of the problem, and
          it is worse than a slow reply because you never see it happen.
        </P>

        <H2 id="official">Official Cloud API vs unofficial integration</H2>
        <P>
          This is the most important technical distinction in the category, and the one most likely to be
          glossed over in a sales demo.
        </P>
        <Table
          head={['', 'Official Meta WhatsApp Cloud API', 'Unofficial integration']}
          rows={[
            ['How it works', "Meta's supported business platform", 'Drives WhatsApp Web or a modified client'],
            ['Business identity', 'Verified business account', 'Appears as an ordinary personal number'],
            ['Terms of service', 'Compliant', "Against Meta's terms"],
            ['Risk to your number', 'Standard policy enforcement only', 'Number can be banned without warning'],
            ['Stability', 'Versioned, documented API', 'Breaks when WhatsApp changes anything'],
            ['Cost', 'Meta conversation pricing applies', 'Cheaper up front'],
          ]}
          caption="The saving on an unofficial integration is real. So is the risk to the number your entire pipeline depends on."
        />
        <H3 id="byo">Whose account is it?</H3>
        <P>
          A second question matters just as much: who owns the WhatsApp Business Account? With AqarQore,{' '}
          <strong>each agency connects its own Meta WhatsApp Business Account and its own number.</strong> The
          number is yours, the conversation history is yours, and if you ever leave, both stay with you.
        </P>
        <P>
          Be careful with any vendor routing your leads through a number they control. That arrangement is
          convenient at setup and painful at renewal.
        </P>

        <H2 id="flow">What a qualification flow captures</H2>
        <P>
          Good qualification asks what an experienced agent asks, in the order they would ask it — and stops
          before it becomes an interrogation.
        </P>
        <UL>
          <li><strong>Intent</strong> — buying or renting, and for occupation or investment.</li>
          <li><strong>Budget</strong> — a range, not a demand for an exact figure.</li>
          <li><strong>Area</strong> — matched against the districts you actually hold inventory in.</li>
          <li><strong>Property type and size</strong> — enough to filter the shortlist meaningfully.</li>
          <li><strong>Timeline</strong> — viewing this week versus researching for next year is the single most useful sorting signal.</li>
        </UL>
        <P>
          The output is not a completed form. It is a conversation the buyer experienced as helpful, which
          happens to have produced structured data on the deal record.
        </P>

        <H2 id="window">The 24-hour window</H2>
        <P>
          Meta allows free-form replies within 24 hours of the customer&apos;s most recent message. Outside
          that window, only pre-approved template messages may be sent. This is a platform rule, not a
          product limitation, and it shapes how follow-up has to be designed.
        </P>
        <UL>
          <li>Qualification and human handoff should complete <strong>inside</strong> the window — this is exactly what instant response buys you.</li>
          <li>Later follow-up needs approved templates. Get them approved before you need them, not during a live deal.</li>
          <li>Opt-in matters. Ask any vendor how consent is captured and recorded.</li>
        </UL>

        <H2 id="handoff">Handoff to a human agent</H2>
        <P>
          The handoff is where most implementations succeed or fail. Done well, the agent receives the
          conversation with a summary attached — verified budget, preferred area, requested viewing window —
          and continues the same WhatsApp thread the buyer is already in.
        </P>
        <P>
          Done badly, the bot hands over a transcript and the agent opens with &ldquo;hello, how can I
          help?&rdquo; — asking a buyer to repeat everything they just typed. That single moment undoes the
          benefit of instant response, because it signals nobody was listening.
        </P>
        <P>
          Handoff should also respect assignment rules, so the conversation reaches an agent who is actually
          available and has capacity. That is the same engine described in{' '}
          <Link href="/features/lead-distribution/" className="font-semibold text-[#0858A8] hover:underline">
            automated lead distribution
          </Link>
          .
        </P>

        <H2 id="evaluate">What to ask a vendor</H2>
        <Table
          head={['Question', 'What a good answer sounds like']}
          rows={[
            ['Official Cloud API or unofficial?', 'Official Meta WhatsApp Cloud API, no exceptions'],
            ['Who owns the WhatsApp Business Account?', 'The agency connects its own account and number'],
            ['What happens outside the 24-hour window?', 'Pre-approved templates, with consent recorded'],
            ['Does qualification work in Arabic?', 'Yes — demonstrated live, not described'],
            ['How does handoff reach the right agent?', 'Through assignment rules, respecting availability and capacity'],
            ['If we leave, what happens to the number?', 'It stays with you; it was always yours'],
          ]}
        />

        <Cta
          heading="See a live qualification flow"
          body="A 20-minute walkthrough on your own number: enquiry in, qualification, listing cards, and handoff to an available agent with full context attached."
        />

        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />
      </Article>
    </PageShell>
  );
}
