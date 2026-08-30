import { alternatesFor, abs, routeFor } from '@/lib/site';
import { META } from '@/lib/copy';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import SimplePage from '@/components/SimplePage';
import { UI } from '@/lib/copy';

export const metadata = {
  title: META.en.privacy.title,
  description: META.en.privacy.description,
  alternates: alternatesFor('privacy', 'en'),
  openGraph: {
    title: META.en.privacy.title,
    description: META.en.privacy.description,
    url: abs(routeFor('privacy', 'en')),
  },
};

const TRAIL = [{ name: 'Home', path: '/' }, { name: 'Privacy Policy', path: routeFor('privacy', 'en') }];

export default function PrivacyENPage() {
  return (
    <PageShell locale="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema('en', abs(routeFor('privacy', 'en')), TRAIL)) }}
      />
      <SimplePage
        locale="en"
        title={META.en.privacy.title.split(' — ')[0]}
        lede={META.en.privacy.description}
        notice={UI.en.draftNotice}
      />
    </PageShell>
  );
}
