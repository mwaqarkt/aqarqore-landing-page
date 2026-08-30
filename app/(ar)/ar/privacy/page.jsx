import { alternatesFor, abs, routeFor } from '@/lib/site';
import { META } from '@/lib/copy';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import SimplePage from '@/components/SimplePage';
import { UI } from '@/lib/copy';

export const metadata = {
  title: META.ar.privacy.title,
  description: META.ar.privacy.description,
  alternates: alternatesFor('privacy', 'ar'),
  openGraph: {
    title: META.ar.privacy.title,
    description: META.ar.privacy.description,
    url: abs(routeFor('privacy', 'ar')),
  },
};

const TRAIL = [{ name: 'الرئيسية', path: '/ar/' }, { name: 'سياسة الخصوصية', path: routeFor('privacy', 'ar') }];

export default function PrivacyARPage() {
  return (
    <PageShell locale="ar">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema('ar', abs(routeFor('privacy', 'ar')), TRAIL)) }}
      />
      <SimplePage
        locale="ar"
        title={META.ar.privacy.title.split(' — ')[0]}
        lede={META.ar.privacy.description}
        notice={UI.ar.draftNotice}
      />
    </PageShell>
  );
}
