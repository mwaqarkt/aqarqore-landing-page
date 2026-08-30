import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import Article, { AnswerBlock, H2, H3, P, UL, Table, FaqList, Cta } from '@/components/Article';
import { HowItWorks, OtherPortals } from '@/components/IntegrationPage';

const PATH = routeFor('intBayut', 'en');
const TITLE = 'Bayut CRM Integration for UAE Brokerages';
const DESCRIPTION = 'Connect Bayut leads to your CRM with automatic assignment, cross-portal duplicate detection, and tracking for TruCheck and Trakheesi listing quality signals.';

export const metadata = {
  title: 'Bayut CRM Integration | AqarQore',
  description: DESCRIPTION,
  alternates: alternatesFor('intBayut', 'en'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH), type: 'article' },
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Integrations', path: '/integrations/' },
  { name: 'Bayut', path: PATH },
];

const FAQS = [
  ["Does AqarQore integrate with Bayut?",
   "Yes. Bayut enquiries flow into AqarQore with the source recorded, are auto-assigned to an available agent within seconds, and are matched against leads from Property Finder, Dubizzle and other connected portals to prevent duplicate assignment."],
  ["What is the TruCheck badge?",
   "TruCheck is Bayut\\u2019s listing verification. Authenticating a listing requires being physically at the property being checked. Higher TruCheck coverage contributes to the Quality Lister badge, which affects visibility and exposure on the portal."],
  ["Does the CRM handle Trakheesi permits?",
   "Permit numbers and expiry dates can be held against the listing record. Every Dubai advertisement requires a valid Trakheesi permit, and green permit status is one of the signals feeding Bayut listing quality."],
  ["If a buyer enquires on both Bayut and Dubizzle, do we get two leads?",
   "Both sit under Dubizzle Group but are separate lead sources. AqarQore matches on phone and email across all connected portals, merges the duplicate and keeps the original agent, recording both sources."],
  ["Does higher listing quality actually change lead volume?",
   "Bayut states that quality signals affect visibility and exposure. Treat the causal chain as the portal describes it, and measure your own lead volume against listing quality over time rather than assuming a fixed relationship."],
];

export default function BayutIntegration() {
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
        lede='Bayut rewards listing quality with visibility. That makes the integration question broader than lead capture — it is also about keeping permit status, verification and listing hygiene in one place instead of three spreadsheets.'
        updated="30 August 2026"
        readTime='7 min read'
        toc={[{ id: 'summary', label: 'What the integration does' }, { id: 'portal', label: 'About Bayut' }, { id: 'quality', label: 'TruCheck and listing quality' }, { id: 'how', label: 'How the connection works' }, { id: 'group', label: 'Bayut and Dubizzle together' }, { id: 'evaluate', label: 'What to verify' }, { id: 'faq', label: 'Frequently asked questions' }]}
      >
        <H2 id="summary">What the integration does</H2>
        <AnswerBlock>
          Bayut enquiries arrive in AqarQore with the source and listing reference recorded, are{' '}
          <strong>auto-assigned within seconds</strong>, and are deduplicated against every other connected
          portal. Listing-level data such as Trakheesi permit status can be held against the property record.
        </AnswerBlock>

        <H2 id="portal">About Bayut</H2>
        <P>
          Bayut is the second-largest property portal in the UAE and part of Dubizzle Group, which is listed
          on the Dubai Financial Market. In recent years the gap between Bayut and Property Finder has
          narrowed, which is why most UAE brokerages of any scale run both rather than choosing between them.
        </P>
        <P>
          Running both is precisely what creates the duplicate problem. Serious buyers enquire on more than
          one portal, frequently about the same unit.
        </P>

        <H2 id="quality">TruCheck and listing quality</H2>
        <P>
          Bayut ties visibility to listing quality, and two signals drive it. TruCheck verification requires
          being physically at the property to authenticate the listing. Trakheesi permit status — the RERA
          advertising permit every Dubai listing must carry — contributes as a second signal, with green
          status counting toward the Quality Lister badge.
        </P>
        <P>
          Both are operational tracking problems more than technical ones. TruCheck activations expire and
          permits lapse, and neither announces itself. Holding permit numbers, verification dates and expiry
          against the listing record is what stops a strong listing quietly losing its ranking.
        </P>

        <H2 id="how">How the connection works</H2>
        <HowItWorks
          steps={[
            { t: 'Enquiry arrives', d: 'A buyer enquires or calls against one of your Bayut listings.' },
            { t: 'Captured with source', d: 'The lead enters AqarQore tagged as Bayut, with the listing reference and timestamp.' },
            { t: 'Cross-portal dedupe', d: 'Matched by phone and email against Property Finder, Dubizzle and other sources. A match merges into the existing record.' },
            { t: 'Assignment rules', d: 'Availability, capacity, area and property-type checks run in sequence, each skip logged with its reason.' },
            { t: 'Agent notified', d: 'The assigned agent is notified immediately, including evenings and weekends when enquiry volume peaks.' },
          ]}
        />

        <H2 id="group">Bayut and Dubizzle together</H2>
        <P>
          Because Bayut and Dubizzle sit under the same group, brokerages often assume leads from the two are
          deduplicated for them. They are not — they arrive as separate enquiries and should be treated as
          separate sources for attribution while still being matched as the same buyer.
        </P>
        <P>
          Getting this wrong has a specific downstream cost: two agents each believing the lead is theirs,
          with no record of who was first. That is a commission dispute in waiting. See{' '}
          <Link href="/features/commission-approvals/" className="font-semibold text-[#0858A8] hover:underline">
            commission approvals
          </Link>{' '}
          for why assignment provenance matters at payout time.
        </P>

        <H2 id="evaluate">What to verify</H2>
        <UL>
          <li>API connection or email parsing?</li>
          <li>Are Bayut and Dubizzle deduplicated against each other, and is each source still recorded?</li>
          <li>Can Trakheesi permit numbers and expiry be tracked against listings?</li>
          <li>What is the assignment time for a lead arriving at 10pm?</li>
          <li>Can you evidence which agent received a lead first, months later?</li>
        </UL>

        <Cta
          heading="See your Bayut leads flowing live"
          body="A 20-minute walkthrough on your own listings — capture, cross-portal deduplication, assignment and the audit trail behind every decision."
        />

        <OtherPortals current='Bayut' />
        <H2 id="faq">Frequently asked questions</H2>
        <FaqList items={FAQS} />
      </Article>
    </PageShell>
  );
}
