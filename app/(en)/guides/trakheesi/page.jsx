import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';

const PATH = routeFor('trakheesi', 'en');
const TITLE = 'Trakheesi Permits: The Dubai Property Advertising Rule';
const DESCRIPTION =
  'Every Dubai property advert needs a valid Trakheesi permit. What it covers, the documents required, and how to track expiry across a portfolio.';

export const metadata = {
  title: 'Trakheesi Permit Guide for Dubai Brokers',
  description: DESCRIPTION,
  alternates: alternatesFor('trakheesi', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Guides', path: '/guides/' },
  { name: 'Trakheesi', path: PATH },
];

const FAQS = [
  [
    'What is a Trakheesi permit?',
    'Trakheesi is the Dubai Land Department system that issues advertising permits for property listings. Every property advertisement in Dubai must carry a valid permit number before it goes live. The permit ties a specific advert to a verified listing, a licensed brokerage and a documented owner authorisation.',
  ],
  [
    'Do social media posts need a Trakheesi permit?',
    'Yes. The requirement covers property advertising in Dubai generally, and there is no exemption for social media or informal formats. An Instagram post or WhatsApp status advertising a specific property is an advertisement.',
  ],
  [
    'Who applies for the permit?',
    'The licensed brokerage applies through the Trakheesi system on the Dubai Land Department website. Individual agents normally obtain permits through the brokerage they are registered with rather than applying personally.',
  ],
  [
    'What documents are needed?',
    'For a resale listing the brokerage normally needs Form A, the marketing agreement between the seller and the brokerage. For leasing, owner authorisation is required. Requirements vary by listing type, so confirm the current list with the DLD before applying.',
  ],
  [
    'How long is a Trakheesi permit valid?',
    'A permit is generally tied to the duration of the listing contract rather than a fixed calendar period. In practice this means permits expire alongside your mandate, which is why expiry belongs on the listing record rather than in someone’s memory.',
  ],
  [
    'What happens if you advertise without a valid permit?',
    'Advertising without a permit, or with incorrect permit details, is treated as a RERA violation. Industry sources report fines starting around AED 50,000 and rising for repeat offences, though you should confirm current penalties with the DLD rather than rely on secondary reporting. Portals also display the permit number publicly, so an invalid or missing permit is visible to anyone looking.',
  ],
];

export default function TrakheesiGuide() {
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
        title="Trakheesi Permits: The Dubai Property Advertising Rule"
        lede="Every property advertisement in Dubai needs a permit number before it goes live — portal listings, social posts, print, all of it. The rule is simple. Tracking it across a live portfolio is where brokerages come unstuck."
        updated="30 August 2026"
        readTime="8 min read"
        toc={[
          { id: 'what', label: 'What Trakheesi is' },
          { id: 'who', label: 'Who needs a permit' },
          { id: 'documents', label: 'What you need to apply' },
          { id: 'apply', label: 'How to apply' },
          { id: 'validity', label: 'Validity and expiry' },
          { id: 'display', label: 'Where the number must appear' },
          { id: 'abudhabi', label: 'Abu Dhabi uses a different system' },
          { id: 'scale', label: 'Managing permits at portfolio scale' },
          { id: 'faq', label: 'Frequently asked questions' },
        ]}
      >
        <div className="rounded-2xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900 leading-relaxed">
          <strong>General guidance, not legal advice.</strong> Permit requirements, fees and penalties are set
          by the Dubai Land Department and change. Published fee figures currently disagree across sources, so
          none are quoted here — confirm current fees and rules through official DLD channels.
        </div>

        <H2 id="what">What Trakheesi is</H2>
        <AnswerBlock>
          Trakheesi is the Dubai Land Department&apos;s advertising permit system, regulated by RERA. Every
          property advertisement in Dubai must carry a{' '}
          <strong>valid Trakheesi permit number before it is published</strong>. The permit ties that advert
          to a verified listing, a licensed brokerage and a documented owner authorisation.
        </AnswerBlock>
        <P>
          The purpose is straightforward: it makes it hard to advertise a property you have no mandate to
          sell. Before Trakheesi, duplicate and speculative listings were a persistent problem — several
          agencies marketing the same unit, sometimes at different prices, occasionally without the
          owner&apos;s knowledge. Tying every advert to a permit closes that off.
        </P>

        <H2 id="who">Who needs a permit</H2>
        <P>
          Any licensed real estate company, developer or broker publishing a property advertisement in Dubai
          needs a valid permit before it goes live. The scope is broader than most agents assume.
        </P>
        <UL>
          <li><strong>Portal listings</strong> — Property Finder, Bayut, Dubizzle and any other platform.</li>
          <li><strong>Your own website.</strong> Publishing on your own domain is still advertising.</li>
          <li><strong>Social media.</strong> There is no exemption. An Instagram post or WhatsApp status advertising a specific unit is an advertisement.</li>
          <li><strong>Print and outdoor.</strong> Brochures, boards and press advertising fall in scope.</li>
        </UL>
        <P>
          The social media point catches the most people out, because a post feels informal in a way a portal
          listing does not. The regulation does not make that distinction.
        </P>

        <H2 id="documents">What you need to apply</H2>
        <P>
          Requirements vary by listing type. The consistent core is a documented right to market the property.
        </P>
        <Table
          head={['Listing type', 'Typically required', 'Where it goes wrong']}
          rows={[
            ['Resale', 'Form A — the marketing agreement between seller and brokerage', 'Expired Form A, or a name that does not match the title deed'],
            ['Leasing', 'Owner authorisation to market the unit', 'Verbal authorisation with nothing in writing'],
            ['Off-plan', 'Developer authorisation and project documentation', 'Allocation agreed informally, never documented'],
            ['All types', 'Valid brokerage licence and registered agent', 'A broker card that lapsed without anyone noticing'],
          ]}
          caption="Confirm the current requirement list with the Dubai Land Department before applying — this is a working checklist, not a legal source."
        />

        <H2 id="apply">How to apply</H2>
        <P>
          Applications go through the Trakheesi e-services system on the Dubai Land Department website. The
          brokerage applies; individual agents normally obtain permits through the brokerage they are
          registered with rather than applying personally.
        </P>
        <P>
          Processing on a complete, correct application is fast. The variable is document quality rather than
          processing speed — the same pattern seen with{' '}
          <Link href="/guides/ejari/" className="font-semibold text-[#0858A8] hover:underline">
            Ejari registration
          </Link>
          , where mismatched names and expired documents cause almost all delays.
        </P>

        <H2 id="validity">Validity and expiry</H2>
        <P>
          The Dubai Land Department does not publish a single headline validity period, and secondary sources
          disagree, so treat any specific figure you read elsewhere with caution and confirm yours on the
          permit itself. What is not in dispute is the operational consequence:{' '}
          <strong>permits expire on different dates, and nothing tells you when.</strong>
        </P>
        <P>
          A listing whose permit has lapsed does not fail loudly. It comes down, or it sits with an invalid
          number attached, and the first sign is usually that enquiries stopped. By then you have lost days of
          exposure on a live mandate.
        </P>

        <H2 id="display">Where the number must appear</H2>
        <P>
          The permit number has to be visible on the advertisement, and each portal places it differently.
        </P>
        <Table
          head={['Platform', 'Where the number appears']}
          rows={[
            ['Property Finder', 'Listing footer'],
            ['Bayut', 'Listing footer'],
            ['Dubizzle', 'In the description and at the bottom of the photo block'],
            ['Agency website', 'Commonly near the price or in a footer'],
            ['Social media', 'Within the post itself — the requirement does not change by format'],
          ]}
        />
        <P>
          Because the number is public, permit status is not an internal matter. Anyone — a competitor, a
          client, a regulator — can check whether the advert in front of them is properly permitted.
        </P>
        <P>
          On Bayut this also feeds listing quality: green Trakheesi permit status is one of the signals
          contributing to the Quality Lister badge, alongside TruCheck verification. Permit hygiene is
          therefore a visibility issue as well as a compliance one. More on that in the{' '}
          <Link href="/integrations/bayut/" className="font-semibold text-[#0858A8] hover:underline">
            Bayut integration notes
          </Link>
          .
        </P>

        <H2 id="abudhabi">Abu Dhabi uses a different system</H2>
        <P>
          Trakheesi is <strong>Dubai only</strong>. Abu Dhabi runs its own permit regime through{' '}
          <strong>Madhmoun</strong>, operated by ADREC on the DARI platform, which functions as a
          government-regulated multiple listing service. Brokerages must be registered and licensed with
          ADREC before applying, and property owners approve which brokers may advertise their unit — with up
          to three approved brokers per listing.
        </P>
        <P>
          If you operate across both emirates, these are separate registrations, separate permits and
          separate compliance obligations. A valid Trakheesi permit does nothing for an Abu Dhabi listing.
        </P>

        <H2 id="scale">Managing permits at portfolio scale</H2>
        <P>
          One permit is administration. Two hundred live listings with staggered expiry dates, tied to
          mandates that themselves expire, is an operations problem — and it is almost always solved with a
          spreadsheet that one person maintains and nobody else fully understands.
        </P>
        <P>Three things make the difference:</P>
        <UL>
          <li>
            <strong>Permit number and expiry on the listing record.</strong> Not in a separate tracker.
            Whoever opens the property should see permit status without asking anyone.
          </li>
          <li>
            <strong>Reminders before expiry, not after.</strong> Early enough to renew the mandate and the
            permit together rather than scrambling once the listing has gone dark.
          </li>
          <li>
            <strong>Form A and authorisations attached to the property.</strong> So the next renewal does not
            start by asking the owner for a document you already hold.
          </li>
        </UL>
        <P>
          None of this needs specialist permit software. It needs the listing record to live somewhere
          structured, with dates that can trigger something. That is ordinary CRM work — it is simply rarely
          set up, because the permit lives in an email and the reminder lives in someone&apos;s head.
        </P>

        <Cta
          heading="Keep permits on the listing, not in a spreadsheet"
          body="AqarQore holds Trakheesi numbers, expiry dates and owner authorisations against the property record, with reminders before they lapse. See it on your portfolio in 20 minutes."
        />

        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />

        <P>
          <em>
            This guide is general information for real estate professionals and is not legal advice. Trakheesi
            requirements, fees and penalties are set by the Dubai Land Department and change periodically.
            Confirm current details through official DLD channels before acting.
          </em>
        </P>
      </Article>
    </PageShell>
  );
}
