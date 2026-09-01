import { alternatesFor, abs, routeFor, CONTACT } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import { LegalShell, Sec, List } from '@/components/LegalPage';

const PATH = routeFor('privacy', 'en');

export const metadata = {
  title: 'Privacy Policy — AqarQore',
  description:
    'What personal data AqarQore collects through this website, why, who it is shared with, how long it is kept, and the rights you have over it.',
  alternates: alternatesFor('privacy', 'en'),
};

const TRAIL = [
  { name: 'Home', path: '/' },
  { name: 'Privacy Policy', path: PATH },
];

export default function PrivacyEN() {
  return (
    <PageShell locale="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema('en', abs(PATH), TRAIL)) }}
      />
      <LegalShell
        locale="en"
        title="Privacy Policy"
        updated="31 August 2026"
        intro="This policy explains what personal data this website collects, why we collect it, who it reaches, and what you can ask us to do with it. It covers the aqarqore.com website only — if you are a customer using the AqarQore platform, the data processing terms in your service agreement apply to your brokerage and client data."
      >
        <Sec id="who" heading="Who we are">
          <p>
            AqarQore provides real estate CRM software for brokerages in the GCC. For questions about this
            policy or any personal data we hold, contact us at{' '}
            <strong>{CONTACT.email}</strong> or on WhatsApp at <strong dir="ltr">{CONTACT.whatsappDisplay}</strong>.
          </p>
        </Sec>

        <Sec id="collect" heading="What we collect">
          <p>We collect personal data in one situation only: when you submit the demo request form.</p>
          <List items={[
            'Your name',
            'Your brokerage or company name',
            'Your work email address',
            'Your phone number',
            'Your primary market (for example Dubai, Doha or Riyadh)',
            'The size of your agent team, as a range',
            'The CRM you currently use, if you choose to tell us',
          ]} />
          <p>
            We do not run analytics on this website. There are no advertising or tracking cookies, no pixels,
            and no session recording. The site does not write to cookies, localStorage or sessionStorage.
          </p>
        </Sec>

        <Sec id="why" heading="Why we collect it">
          <p>
            Solely to respond to your demo request and to have a commercial conversation about whether
            AqarQore suits your brokerage. We do not use it for automated decision-making or profiling, and
            we do not sell it.
          </p>
          <p>
            The lawful basis is your consent, given by submitting the form, together with our legitimate
            interest in responding to a business enquiry you initiated.
          </p>
        </Sec>

        <Sec id="how" heading="How your submission reaches us">
          <p>
            When you submit the form, your browser opens a WhatsApp conversation with a message containing
            the details you entered. <strong>You send that message yourself</strong> — nothing is transmitted
            until you do. If you prefer, the same page offers an email option instead.
          </p>
          <p>
            This means the content of your enquiry passes through WhatsApp, operated by Meta, and is subject
            to Meta&apos;s own privacy terms. If you would rather not use WhatsApp, email us directly at{' '}
            <strong>{CONTACT.email}</strong>.
          </p>
        </Sec>

        <Sec id="sharing" heading="Who else sees it">
          <p>
            We do not sell, rent or trade personal data. It is seen by AqarQore staff handling your enquiry,
            and by the messaging or email provider carrying it — WhatsApp, or our email provider.
          </p>
          <p>
            One third party is involved in serving this website: some property photographs on the homepage
            are hosted by Unsplash, so your browser requests those images directly from Unsplash servers and
            your IP address is visible to them, as it would be for any externally hosted image.
          </p>
        </Sec>

        <Sec id="retention" heading="How long we keep it">
          <p>
            Enquiries are kept while the conversation is active and for up to 24 months afterwards, so we can
            pick up where we left off if you return. After that they are deleted. You can ask us to delete
            yours sooner at any time.
          </p>
        </Sec>

        <Sec id="rights" heading="Your rights">
          <p>
            Depending on where you are — including under the Saudi Personal Data Protection Law and the UAE
            personal data protection framework — you may have the right to:
          </p>
          <List items={[
            'Ask what personal data we hold about you',
            'Ask us to correct anything inaccurate',
            'Ask us to delete it',
            'Withdraw consent, which stops us contacting you further',
            'Object to how we are using it',
          ]} />
          <p>
            To exercise any of these, email <strong>{CONTACT.email}</strong>. We will respond within 30 days.
            There is no charge.
          </p>
        </Sec>

        <Sec id="security" heading="Security">
          <p>
            This website is served over HTTPS. Enquiry data is held in our business systems with access
            limited to staff who need it. No transmission over the internet is completely secure, and we
            cannot guarantee absolute security.
          </p>
        </Sec>

        <Sec id="children" heading="Children">
          <p>
            This is a business-to-business website and is not directed at children. We do not knowingly
            collect personal data from anyone under 18.
          </p>
        </Sec>

        <Sec id="changes" heading="Changes to this policy">
          <p>
            If this policy changes we will update the date at the top of the page. Material changes to how we
            handle personal data will be described here rather than made silently.
          </p>
        </Sec>
      </LegalShell>
    </PageShell>
  );
}
