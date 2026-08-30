import { alternatesFor, abs, routeFor } from '@/lib/site';
import { META } from '@/lib/copy';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import SimplePage from '@/components/SimplePage';
import { UI } from '@/lib/copy';

export const metadata = {
  title: META.ar.terms.title,
  description: META.ar.terms.description,
  alternates: alternatesFor('terms', 'ar'),
  openGraph: {
    title: META.ar.terms.title,
    description: META.ar.terms.description,
    url: abs(routeFor('terms', 'ar')),
  },
};

const TRAIL = [{ name: 'الرئيسية', path: '/ar/' }, { name: 'شروط الخدمة', path: routeFor('terms', 'ar') }];

export default function TermsARPage() {
  return (
    <PageShell locale="ar">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema('ar', abs(routeFor('terms', 'ar')), TRAIL)) }}
      />
      <SimplePage
        locale="ar"
        title={META.ar.terms.title.split(' — ')[0]}
        lede={META.ar.terms.description}
        notice={UI.ar.draftNotice}
      />
    </PageShell>
  );
}
