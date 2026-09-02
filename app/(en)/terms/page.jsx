import { alternatesFor, abs, routeFor, CONTACT } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import { LegalShell, Sec, List } from '@/components/LegalPage';

const PATH = routeFor('terms', 'en');

export const metadata = {
  title: 'Terms of Service — AqarQore',
  description:
    'The terms governing use of the aqarqore.com website: acceptable use, intellectual property, the status of published guidance, and liability.',
  alternates: alternatesFor('terms', 'en'),
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Terms of Service', path: PATH },
];

export default function TermsEN() {
  return (
    <PageShell locale="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema('en', abs(PATH), TRAIL)) }}
      />
      <LegalShell
        locale="en"
        title="Terms of Service"
        updated="31 August 2026"
        intro="These terms govern your use of the aqarqore.com website. They do not govern use of the AqarQore platform itself — that is covered by the separate service agreement signed by each customer. If you do not accept these terms, please do not use this website."
      >
        <Sec id="use" heading="Using this website">
          <p>
            You may read, share and reference this website for lawful business purposes. You may not attempt
            to gain unauthorised access to it, interfere with its operation, scrape it at a volume that
            degrades service for others, or use it to distribute unlawful or harmful material.
          </p>
        </Sec>

        <Sec id="information" heading="The information published here">
          <p>
            The guides on this site — covering Ejari, Trakheesi, RERA, the Dubai Land Department, Saudi
            regulatory frameworks and related topics — are{' '}
            <strong>general information for real estate professionals. They are not legal, tax, regulatory
            or financial advice.</strong>
          </p>
          <p>
            Requirements, fees and procedures are set by the relevant authorities and change. Confirm current
            obligations through official channels and with a qualified adviser before acting. We take care to
            be accurate but do not warrant that everything here is current or complete.
          </p>
        </Sec>

        <Sec id="comparisons" heading="Comparisons and third-party names">
          <p>
            Some pages compare AqarQore with other products. Those comparisons reflect our understanding at
            the time of writing and are inevitably made from an interested position, which we state on each
            page. Third-party product and company names are the trademarks of their respective owners, used
            for identification only. Reference to another product does not imply affiliation or endorsement
            in either direction.
          </p>
          <p>
            Capabilities and pricing change. Confirm details directly with each vendor before making a
            decision.
          </p>
        </Sec>

        <Sec id="claims" heading="Product claims and figures">
          <p>
            Performance figures shown on this site are drawn from AqarQore platform telemetry and are
            indicative rather than guaranteed. The revenue calculator is an estimate based on stated
            assumptions, disclosed alongside it, and is not a forecast of results your brokerage will
            achieve.
          </p>
        </Sec>

        <Sec id="ip" heading="Intellectual property">
          <p>
            The content, design and code of this website belong to AqarQore or its licensors. You may quote
            and link to it with attribution. You may not republish substantial portions as your own.
          </p>
          <p>
            Some photography is licensed from third parties and is not ours to sublicense.
          </p>
        </Sec>

        <Sec id="enquiries" heading="Demo requests">
          <p>
            Submitting a demo request is an enquiry, not a contract. It creates no obligation on either side.
            We aim to respond within one business day but do not guarantee a response time. What we do with
            the details you provide is set out in our privacy policy.
          </p>
        </Sec>

        <Sec id="availability" heading="Availability">
          <p>
            We aim to keep this website available but do not guarantee uninterrupted access. We may change,
            suspend or withdraw any part of it, including pages and published guidance, without notice.
          </p>
        </Sec>

        <Sec id="liability" heading="Limitation of liability">
          <p>
            To the fullest extent permitted by law, AqarQore is not liable for indirect or consequential loss
            arising from use of this website, or from reliance on information published here. Nothing in
            these terms excludes liability that cannot lawfully be excluded.
          </p>
        </Sec>

        <Sec id="links" heading="External links">
          <p>
            This site links to third-party websites, including regulators and property portals, for
            convenience. We do not control them and are not responsible for their content or availability.
          </p>
        </Sec>

        <Sec id="changes" heading="Changes to these terms">
          <p>
            We may update these terms. The date at the top of the page shows when they last changed.
            Continuing to use the website after a change means you accept the revised terms.
          </p>
          <p>
            Questions about these terms: <strong>{CONTACT.email}</strong>.
          </p>
        </Sec>
      </LegalShell>
    </PageShell>
  );
}
