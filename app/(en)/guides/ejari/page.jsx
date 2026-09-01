import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';

const PATH = routeFor('ejari', 'en');
const UPDATED = '30 August 2026';

const TITLE = 'Ejari Explained: Registration, Renewal and Broker Workflow';
const DESCRIPTION =
  'What Ejari is, who needs it, the documents required, how registration and renewal work, why applications get rejected, and how brokerages manage it at scale.';

export const metadata = {
  title: 'Ejari: Registration & Renewal Guide for Dubai Brokers',
  description: DESCRIPTION,
  alternates: alternatesFor('ejari', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Guides', path: '/guides/' },
  { name: 'Ejari', path: PATH },
];

const FAQS = [
  [
    'What is Ejari?',
    'Ejari is the Dubai Land Department system that registers residential and commercial tenancy contracts. Registration turns a private lease into a recognised record, which is what makes the contract usable for utility connections, visa processes and dispute resolution.',
  ],
  [
    'Is Ejari mandatory in Dubai?',
    'Yes. Tenancy contracts in Dubai are required to be registered. An unregistered lease creates practical problems well before it creates legal ones — DEWA connection, visa sponsorship and rental dispute filings all expect a registration certificate.',
  ],
  [
    'Who registers the Ejari, landlord or tenant?',
    'Responsibility is commonly assigned to the landlord or the managing agent, though in practice either party or the brokerage may complete it. What matters commercially is that someone owns the task explicitly — most delays come from each side assuming the other handled it.',
  ],
  [
    'How long does Ejari registration take?',
    'A complete, correct application is typically processed quickly. The variable is document quality, not processing speed: mismatched names, an expired trade licence or an unclear title deed copy send an application back and add days.',
  ],
  [
    'What happens when a tenancy renews?',
    'Renewal requires the registration to be updated, not left to lapse. For brokerages managing a portfolio, renewals are the highest-volume recurring administrative task and the one most often missed, because nothing prompts you on the day it expires.',
  ],
  [
    'How is Ejari different from RERA and the DLD?',
    'The Dubai Land Department is the government body; RERA is its regulatory arm overseeing the real estate sector; Ejari is the specific system for registering tenancy contracts. Brokers interact with all three, but only Ejari concerns lease registration.',
  ],
];

export default function EjariGuide() {
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
        title="Ejari: Registration, Renewal and the Broker Workflow"
        lede="Ejari is the Dubai Land Department's tenancy registration system. This guide covers what it is, who is responsible, what documents are needed, why applications get rejected — and how brokerages stop renewals slipping through the cracks."
        updated={UPDATED}
        readTime="8 min read"
        toc={[
          { id: 'what', label: 'What Ejari is' },
          { id: 'who', label: 'Who needs it, and who files it' },
          { id: 'documents', label: 'Documents required' },
          { id: 'how', label: 'How to register' },
          { id: 'renewal', label: 'Renewal' },
          { id: 'rejections', label: 'Why applications get rejected' },
          { id: 'brokerage', label: 'Managing Ejari across a portfolio' },
          { id: 'faq', label: 'Frequently asked questions' },
        ]}
      >
        <H2 id="what">What Ejari is</H2>
        <AnswerBlock>
          Ejari is the Dubai Land Department system that registers tenancy contracts. Registering a lease
          converts a private agreement into an officially recognised record — which is what makes it usable
          for DEWA connections, visa sponsorship, trade licence applications and rental dispute filings.
        </AnswerBlock>
        <P>
          The word <em>ejari</em> means &ldquo;my rent&rdquo; in Arabic. The system exists to create a single
          verifiable record of who is renting what, on what terms, for how long. That record is then relied on
          by other government processes, which is the practical reason registration is not optional in any
          meaningful sense: an unregistered lease blocks things the tenant needs.
        </P>

        <H2 id="who">Who needs it, and who files it</H2>
        <P>
          Ejari applies to residential and commercial tenancy contracts in Dubai. Responsibility for filing is
          commonly the landlord&apos;s or the managing agent&apos;s, but in practice it is completed by
          whoever takes ownership of it — landlord, tenant, property manager or brokerage.
        </P>
        <P>
          That ambiguity is the operational problem. Most delays are not caused by the system; they are caused
          by both sides assuming the other party filed. For a brokerage, the fix is to assign it explicitly on
          every deal and record who owns it, rather than leaving it to convention.
        </P>

        <H2 id="documents">Documents required</H2>
        <P>
          Requirements vary by property type and by whether the tenant is an individual or a company. The
          consistent core is below. Confirm the current list against the official DLD channels before
          submitting, as requirements are updated periodically.
        </P>
        <Table
          head={['Document', 'Applies to', 'Common problem']}
          rows={[
            ['Signed tenancy contract', 'All', 'Unsigned pages, or terms differing from what is entered in the form'],
            ['Title deed copy', 'All', 'Illegible scan, or owner name not matching the contract'],
            ['Landlord Emirates ID or passport', 'All', 'Expired document'],
            ['Tenant Emirates ID or passport', 'Individual tenants', 'Name spelled differently across documents'],
            ['Trade licence', 'Company tenants', 'Expired licence, or a different legal entity than the one on the contract'],
            ['DEWA premises number', 'Most', 'Missing entirely, which stalls the application'],
            ['Recent utility bill or connection detail', 'Varies', 'Belongs to a previous tenancy'],
          ]}
          caption="Verify the current requirement list with the Dubai Land Department before filing — this table is a working checklist, not a legal source."
        />

        <H2 id="how">How to register</H2>
        <P>There are three routes, and they differ mainly in convenience rather than outcome.</P>
        <H3 id="route-online">Online</H3>
        <P>
          Registration through the Dubai REST app or the DLD&apos;s online services is the fastest route for a
          straightforward residential lease with clean documents. Best suited to individuals and small
          portfolios.
        </P>
        <H3 id="route-centre">Typing centre</H3>
        <P>
          Approved typing centres handle submission on your behalf. Useful for complex or commercial contracts
          and for anyone who would rather have a rejection caught at the counter than after submission.
        </P>
        <H3 id="route-agent">Through a managing agent or brokerage</H3>
        <P>
          Managing agents typically handle registration as part of the service. This is the norm for portfolio
          landlords, and it is where volume creates the tracking problem described below.
        </P>

        <H2 id="renewal">Renewal</H2>
        <P>
          A renewed tenancy needs its registration updated. This is where most portfolios lose control,
          because renewal has a specific characteristic: <strong>nothing prompts you.</strong> A new lease
          announces itself with a signature and a commission. A renewal simply arrives, and if nobody is
          tracking expiry dates it is noticed when a tenant cannot complete something that depends on it.
        </P>
        <P>
          For a brokerage managing dozens or hundreds of tenancies, renewal tracking is not a compliance task
          so much as a retention one. The agency that contacts a landlord six weeks before expiry keeps the
          mandate. The one that finds out afterwards is having a different conversation.
        </P>

        <H2 id="rejections">Why applications get rejected</H2>
        <UL>
          <li><strong>Name mismatches.</strong> A name spelled differently on the contract, the Emirates ID and the title deed is the single most common cause.</li>
          <li><strong>Expired documents.</strong> Trade licences and IDs that lapsed between signing and filing.</li>
          <li><strong>Missing DEWA premises number.</strong> Easy to omit, and it stops the application.</li>
          <li><strong>Contract inconsistencies.</strong> Dates, rent figures or payment terms in the form that do not match the signed contract.</li>
          <li><strong>Poor scan quality.</strong> An unreadable title deed is treated as a missing one.</li>
          <li><strong>Overlapping registration.</strong> A prior tenancy on the same unit not properly closed out.</li>
        </UL>
        <P>
          Every one of these is a document-hygiene failure rather than a system problem, which is why they are
          largely preventable with a checklist applied before submission rather than after rejection.
        </P>

        <H2 id="brokerage">Managing Ejari across a portfolio</H2>
        <P>
          One registration is administration. Two hundred registrations with staggered expiry dates is an
          operations problem, and it is usually solved with a spreadsheet that only one person fully
          understands.
        </P>
        <P>Three things make the difference at volume:</P>
        <UL>
          <li>
            <strong>Expiry dates held against the property record</strong>, not in a separate tracker — so the
            renewal window is visible to whoever opens the file, not only to the person who built the sheet.
          </li>
          <li>
            <strong>Automated reminders ahead of expiry</strong>, early enough to have a renewal conversation
            rather than a lapse conversation.
          </li>
          <li>
            <strong>Documents attached to the tenancy</strong>, so the next renewal does not begin by asking
            the landlord for a title deed you already received.
          </li>
        </UL>
        <P>
          None of this requires specialist Ejari software. It requires the tenancy record to be somewhere
          structured, with dates that can trigger something. That is ordinary CRM work — it is simply rarely
          set up, because the tenancy lives in a folder and the reminder lives in someone&apos;s memory.
        </P>

        <Cta
          heading="Stop tracking renewals in a spreadsheet"
          body="AqarQore keeps tenancy dates, documents and owner contacts against the property record, with automatic reminders before expiry. See it running on your portfolio in 20 minutes."
        />

        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />

        <P>
          <em>
            This guide is general information for real estate professionals, not legal advice. Ejari
            requirements, fees and procedures are set by the Dubai Land Department and change periodically —
            confirm current details through official DLD channels before filing.
          </em>
        </P>
      </Article>
    </PageShell>
  );
}
