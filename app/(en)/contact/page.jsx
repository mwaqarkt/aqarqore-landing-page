import { alternatesFor, abs, routeFor } from '@/lib/site';
import { META } from '@/lib/copy';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import ContactContent from '@/components/ContactContent';

export const metadata = {
  title: META.en.contact.title,
  description: META.en.contact.description,
  alternates: alternatesFor('contact', 'en'),
  openGraph: {
    title: META.en.contact.title,
    description: META.en.contact.description,
    url: abs(routeFor('contact', 'en')),
  },
};

const TRAIL = [{ name: 'Home', path: '/' }, { name: 'Contact', path: routeFor('contact', 'en') }];

export default function ContactENPage() {
  return (
    <PageShell locale="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema('en', abs(routeFor('contact', 'en')), TRAIL)) }}
      />
      <ContactContent locale="en" />
    </PageShell>
  );
}
