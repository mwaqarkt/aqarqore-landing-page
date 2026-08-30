import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';
import { HowItWorks, OtherPortals } from '@/components/IntegrationPage';

const PATH = routeFor('intDubizzle', 'en');
const TITLE = 'Dubizzle CRM Integration for UAE Brokerages';
const DESCRIPTION = 'Connect Dubizzle property leads to your CRM: automatic assignment, deduplication against Bayut and Property Finder, and accurate source attribution for a distinct buyer profile.';

export const metadata = {
  title: 'Dubizzle CRM Integration | AqarQore',
  description: DESCRIPTION,
  alternates: alternatesFor('intDubizzle', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Integrations', path: '/integrations/' },
  { name: 'Dubizzle', path: PATH },
];

const FAQS = [
  ["Does AqarQore integrate with Dubizzle?",
   "Yes. Dubizzle property enquiries flow into AqarQore with the source recorded, are auto-assigned to an available agent within seconds, and are matched against leads from Bayut, Property Finder and other connected portals."],
  ["Dubizzle and Bayut are the same group. Are the leads the same?",
   "No. They are separate lead sources with different audiences, and they arrive as separate enquiries. AqarQore records each source distinctly for attribution while still matching the same buyer across both to avoid double assignment."],
  ["Where does the Trakheesi permit number appear on Dubizzle?",
   "Dubizzle displays the permit number in the listing description and at the bottom of the photo block, rather than in a footer as Property Finder and Bayut do. The requirement is identical: every Dubai advertisement needs a valid permit."],
  ["Should rental leads be routed differently from sales leads?",
   "Usually yes. Rental enquiries convert faster, at lower value, and often suit different agents. Assignment rules can route by property type so rentals do not consume the capacity of agents working high-value sales."],
  ["Can we measure which portal actually produces closed deals?",
   "That is the main reason to record source accurately at capture. Without it, portal spend is allocated on lead volume rather than closed revenue, which usually flatters the cheapest portal."],
];

export default function DubizzleIntegration() {
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
        title={TITLE}
        lede='Dubizzle brings a different buyer to the table than Bayut or Property Finder — broader, more price-sensitive, and weighted toward rentals. Treating those leads identically to your portal leads is a quiet way to lose them.'
        updated="30 August 2026"
        readTime='6 min read'
        toc={[{ id: 'summary', label: 'What the integration does' }, { id: 'portal', label: 'About Dubizzle' }, { id: 'buyer', label: 'A different buyer profile' }, { id: 'how', label: 'How the connection works' }, { id: 'attribution', label: 'Why source attribution matters' }, { id: 'evaluate', label: 'What to verify' }, { id: 'faq', label: 'Frequently asked questions' }]}
      >
        <H2 id="summary">What the integration does</H2>
        <AnswerBlock>
          Dubizzle property enquiries arrive in AqarQore tagged with their source, are{' '}
          <strong>auto-assigned within seconds</strong>, and are matched against Bayut and Property Finder
          leads so the same buyer is never handed to two agents.
        </AnswerBlock>

        <H2 id="portal">About Dubizzle</H2>
        <P>
          Dubizzle sits under Dubizzle Group alongside Bayut. It carries a broader classifieds heritage than
          the dedicated property portals, and its property section reaches an audience that overlaps with,
          but is not identical to, Bayut&apos;s.
        </P>

        <H2 id="buyer">A different buyer profile</H2>
        <P>
          Brokerages that track source properly tend to find Dubizzle enquiries skew more price-sensitive and
          more rental-weighted than Property Finder or Bayut. That is not a lower-quality lead — it is a
          different one, and it responds to different handling.
        </P>
        <UL>
          <li><strong>Route by property type.</strong> Rental enquiries should not consume the capacity of agents working high-value sales mandates.</li>
          <li><strong>Expect faster cycles.</strong> Rental decisions move in days. A lead that waits until Sunday is usually gone.</li>
          <li><strong>Measure separately.</strong> Judging Dubizzle by the conversion rate of your sales pipeline will understate what it actually delivers.</li>
        </UL>

        <H2 id="how">How the connection works</H2>
        <HowItWorks
          steps={[
            { t: 'Enquiry arrives', d: 'A buyer or tenant enquires against one of your Dubizzle listings.' },
            { t: 'Captured with source', d: 'The lead enters AqarQore tagged as Dubizzle, distinct from Bayut even though both sit under the same group.' },
            { t: 'Cross-portal dedupe', d: 'Matched on phone and email against every connected portal, merging rather than duplicating.' },
            { t: 'Type-aware routing', d: 'Rules can send rentals and sales down separate paths with different agents and capacity limits.' },
            { t: 'Agent notified', d: 'Assignment and notification happen immediately, including outside office hours.' },
          ]}
        />

        <H2 id="attribution">Why source attribution matters</H2>
        <P>
          Portal subscriptions are a significant recurring cost, and the decision to renew or drop one is
          usually made on lead volume because that is the number that is easy to get. Lead volume flatters
          whichever portal produces the most enquiries, regardless of what those enquiries become.
        </P>
        <P>
          Recording the source at capture, and carrying it through to the closed deal, is what lets you
          allocate portal spend against revenue instead. It is the single most useful reporting output of a
          portal integration, and it only works if the source survives deduplication — which is why merged
          duplicates should retain both sources rather than discarding one.
        </P>
        <P>
          Trakheesi permits apply to Dubizzle listings exactly as they do elsewhere in Dubai, though the
          permit number is displayed in the description and photo block rather than a footer.
        </P>

        <H2 id="evaluate">What to verify</H2>
        <UL>
          <li>Are Dubizzle and Bayut recorded as distinct sources, or collapsed into one?</li>
          <li>Does deduplication retain both sources when merging?</li>
          <li>Can assignment rules differ for rentals and sales?</li>
          <li>Can you report closed revenue by portal, not just lead count?</li>
        </UL>

        <Cta
          heading="See portal attribution end to end"
          body="A 20-minute walkthrough showing capture, deduplication and source attribution carried through to closed deals — so portal spend can be judged on revenue."
        />

        <OtherPortals current='Dubizzle' />
        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />
      </Article>
    </PageShell>
  );
}
