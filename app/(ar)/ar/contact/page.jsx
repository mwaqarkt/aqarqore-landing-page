import { alternatesFor, abs, routeFor } from '@/lib/site';
import { META } from '@/lib/copy';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import ContactContent from '@/components/ContactContent';

export const metadata = {
  title: META.ar.contact.title,
  description: META.ar.contact.description,
  alternates: alternatesFor('contact', 'ar'),
  openGraph: {
    title: META.ar.contact.title,
    description: META.ar.contact.description,
    url: abs(routeFor('contact', 'ar')),
  },
};

const TRAIL = [{ name: 'الرئيسية', path: '/ar/' }, { name: 'تواصل معنا', path: routeFor('contact', 'ar') }];

export default function ContactARPage() {
  return (
    <PageShell locale="ar">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema('ar', abs(routeFor('contact', 'ar')), TRAIL)) }}
      />
      <ContactContent locale="ar" />
    </PageShell>
  );
}
