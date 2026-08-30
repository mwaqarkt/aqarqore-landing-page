import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';

const PATH = routeFor('dld', 'en');
const TITLE = 'Dubai Land Department: Systems Every Broker Uses';
const DESCRIPTION =
  'A working map of the DLD: RERA, Trakheesi, Ejari, Oqood, Mollak, Dubai REST and title deeds — what each system does, and which records a brokerage needs to keep against them.';

export const metadata = {
  title: 'Dubai Land Department (DLD) Guide for Brokers',
  description: DESCRIPTION,
  alternates: alternatesFor('dld', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Guides', path: '/guides/' },
  { name: 'Dubai Land Department', path: PATH },
];

const FAQS = [
  [
    'What is the Dubai Land Department?',
    'The DLD is the government body responsible for real estate in Dubai. It handles property registration and title deeds, oversees transactions, and operates the systems brokers work inside daily — including RERA as its regulatory arm and platforms such as Trakheesi, Ejari and Oqood.',
  ],
  [
    'What is the difference between the DLD and RERA?',
    'The DLD is the government department; RERA is its regulatory agency. In practice you deal with the DLD for registration and transactions, and with RERA for licensing, advertising rules and professional conduct. DREI, the Dubai Real Estate Institute, is its educational arm.',
  ],
  [
    'What is Oqood?',
    'Oqood is the DLD system for registering off-plan property. Developers register off-plan projects and sales through it, and an Oqood certificate records the buyer’s ownership rights in a property that is not yet complete. A title deed replaces it once the property is handed over.',
  ],
  [
    'What is Dubai REST?',
    'Dubai REST is the DLD’s mobile and online services platform. It uses the DLD’s centralised login, shared with services including Ejari, Trakheesi, Oqood, Mollak, the Rental Disputes Centre and Registration Trustee services.',
  ],
  [
    'What is Mollak?',
    'Mollak is the DLD system covering service charges on jointly owned property. Owners can review and pay service charges through it, which gives the charge structure a documented, verifiable basis.',
  ],
  [
    'Which DLD systems does a brokerage actually touch?',
    'Most brokerages interact regularly with Trakheesi for advertising permits, RERA for agent licensing, Ejari for tenancy registration, and Oqood where they sell off-plan. Title deeds and Mollak come up transactionally rather than daily.',
  ],
];

export default function DldGuide() {
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
        title="Dubai Land Department: The Systems Every Broker Uses"
        lede="RERA, Trakheesi, Ejari, Oqood, Mollak, Dubai REST. They are all the DLD, they share one login, and most brokers learn what each does by needing it urgently. Here is the map, and the records each one expects you to keep."
        updated="30 August 2026"
        readTime="9 min read"
        toc={[
          { id: 'what', label: 'What the DLD is' },
          { id: 'map', label: 'The systems, mapped' },
          { id: 'rera', label: 'RERA and DREI' },
          { id: 'trakheesi', label: 'Trakheesi' },
          { id: 'ejari', label: 'Ejari' },
          { id: 'oqood', label: 'Oqood and off-plan' },
          { id: 'other', label: 'Mollak, title deeds and Dubai REST' },
          { id: 'records', label: 'What your systems need to hold' },
          { id: 'faq', label: 'Frequently asked questions' },
        ]}
      >
        <div className="rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900 leading-relaxed">
          <strong>General guidance, not legal advice.</strong> DLD processes, fees and requirements change.
          Confirm current details through official Dubai Land Department channels before acting.
        </div>

        <H2 id="what">What the DLD is</H2>
        <AnswerBlock>
          The Dubai Land Department is the government body responsible for real estate in Dubai. It registers
          property and issues title deeds, oversees transactions, and{' '}
          <strong>operates the systems brokers work inside every day</strong> — RERA for regulation,
          Trakheesi for advertising permits, Ejari for tenancies, Oqood for off-plan.
        </AnswerBlock>
        <P>
          The confusing part for anyone new to Dubai brokerage is that these are not separate organisations
          with separate relationships. They are all the DLD, and they largely share one centralised login
          through Dubai REST.
        </P>

        <H2 id="map">The systems, mapped</H2>
        <Table
          head={['System', 'What it is', 'When a broker touches it']}
          rows={[
            ['RERA', 'The regulatory agency', 'Agent licensing, conduct, advertising rules'],
            ['DREI', 'The educational arm', 'Broker training courses and exams'],
            ['Trakheesi', 'Advertising permit system', 'Before publishing any listing'],
            ['Ejari', 'Tenancy registration', 'Every lease and every renewal'],
            ['Oqood', 'Off-plan registration', 'Selling off-plan units'],
            ['Mollak', 'Service charges on jointly owned property', 'Owner queries, service charge disputes'],
            ['Title deed', 'Proof of ownership of a completed property', 'Verifying a seller actually owns the unit'],
            ['Dubai REST', 'The DLD services app and portal', 'Access point for most of the above'],
          ]}
        />

        <H2 id="rera">RERA and DREI</H2>
        <P>
          RERA is the DLD&apos;s regulatory arm, overseeing brokerages, agents and developments. DREI, the
          Dubai Real Estate Institute, is its educational arm and runs the mandatory training and examination
          behind every broker card.
        </P>
        <P>
          For a brokerage the recurring obligation is licence tracking: cards are individual, valid for a
          year, and require an annual test to renew. Full detail in the{' '}
          <Link href="/guides/rera-dubai/" className="font-semibold text-[#0858A8] hover:underline">
            RERA broker card guide
          </Link>
          .
        </P>

        <H2 id="trakheesi">Trakheesi</H2>
        <P>
          Trakheesi issues the advertising permits every Dubai property advertisement must carry. The permit
          ties an advert to a verified listing, a licensed brokerage and a documented owner authorisation —
          and the number is displayed publicly on portal listings.
        </P>
        <P>
          Permits are generally tied to the listing contract rather than a fixed period, which means they
          expire on scattered dates with nothing announcing it. See the{' '}
          <Link href="/guides/trakheesi/" className="font-semibold text-[#0858A8] hover:underline">
            Trakheesi guide
          </Link>
          .
        </P>

        <H2 id="ejari">Ejari</H2>
        <P>
          Ejari registers tenancy contracts, turning a private lease into an officially recognised record.
          That record is then relied on by other processes — utility connections, visa procedures, rental
          dispute filings — which is why an unregistered lease creates practical problems quickly.
        </P>
        <P>
          The operational pattern is the same as Trakheesi: registration is straightforward, renewal tracking
          is where portfolios lose control. See the{' '}
          <Link href="/guides/ejari/" className="font-semibold text-[#0858A8] hover:underline">
            Ejari guide
          </Link>
          .
        </P>

        <H2 id="oqood">Oqood and off-plan</H2>
        <P>
          Oqood registers off-plan property. Developers register projects and sales through it, and an Oqood
          certificate records a buyer&apos;s ownership rights in a unit that does not physically exist yet. On
          handover, a title deed replaces it.
        </P>
        <P>
          For brokerages selling off-plan, this changes what the sales system has to track. A resale pipeline
          tracks a buyer against a property. An off-plan pipeline tracks a buyer against a{' '}
          <em>specific unit</em> in a registered project, with a payment schedule tied to construction and an
          allocation that must not be sold twice.
        </P>

        <H2 id="other">Mollak, title deeds and Dubai REST</H2>
        <H3 id="mollak">Mollak</H3>
        <P>
          Mollak covers service charges on jointly owned property, letting owners review and pay through a
          documented structure. Brokers encounter it mostly through owner and buyer questions about ongoing
          costs — a question that comes up during due diligence on almost every apartment sale.
        </P>
        <H3 id="deeds">Title deeds</H3>
        <P>
          The title deed confirms ownership of a completed property. For a brokerage the practical use is
          verification: checking that the person instructing you to market a unit is actually its owner, and
          that the name matches the marketing agreement. Mismatches here are the most common cause of a
          rejected Trakheesi application.
        </P>
        <H3 id="rest">Dubai REST</H3>
        <P>
          Dubai REST is the DLD&apos;s app and online services platform, and it uses the DLD&apos;s
          centralised login — shared across Ejari, Trakheesi, Oqood, Mollak, the Rental Disputes Centre and
          Registration Trustee services. In practice it is the front door to most of the systems above.
        </P>

        <H2 id="records">What your systems need to hold</H2>
        <P>
          Across every DLD system, the same short list of records does most of the work. If these exist and
          are trustworthy, DLD interactions become routine rather than urgent.
        </P>
        <Table
          head={['Record', 'System it serves', 'Test: can you produce it in 60 seconds?']}
          rows={[
            ['Agent licence number and expiry', 'RERA', 'Which agents are licensed today?'],
            ['Trakheesi permit number and expiry', 'Trakheesi', 'Which listings have permits lapsing this month?'],
            ['Form A / owner authorisation', 'Trakheesi', 'Do we hold written authority to market this unit?'],
            ['Tenancy dates and documents', 'Ejari', 'Which leases expire in the next 60 days?'],
            ['Unit allocation and payment milestones', 'Oqood', 'Who holds unit 1204, and what is paid?'],
            ['Title deed reference', 'DLD', 'Does the seller name match the marketing agreement?'],
          ]}
          caption="If any row takes longer than a minute to answer, that is where the operational risk sits."
        />
        <P>
          None of this requires specialist government-integration software. It requires the property and agent
          records to live somewhere structured, with dates that can trigger a reminder. That is ordinary CRM
          work — it is simply rarely set up, because each document arrives by email and each deadline lives in
          somebody&apos;s memory.
        </P>

        <Cta
          heading="Turn DLD deadlines into reminders"
          body="AqarQore holds permit numbers, licence expiry, tenancy dates and owner authorisations against the right records, with reminders before anything lapses."
        />

        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />

        <P>
          <em>
            This guide is general information for real estate professionals and is not legal advice. Dubai Land
            Department processes, fees and requirements change periodically. Confirm current details through
            official DLD channels before acting.
          </em>
        </P>
      </Article>
    </PageShell>
  );
}
