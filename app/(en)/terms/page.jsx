import { alternatesFor, abs, routeFor } from '@/lib/site';
import { META } from '@/lib/copy';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import SimplePage from '@/components/SimplePage';
import { UI } from '@/lib/copy';

export const metadata = {
  title: META.en.terms.title,
  description: META.en.terms.description,
  alternates: alternatesFor('terms', 'en'),
  openGraph: {
    title: META.en.terms.title,
    description: META.en.terms.description,
    url: abs(routeFor('terms', 'en')),
  },
};

const TRAIL = [{ name: 'Home', path: '/' }, { name: 'Terms of Service', path: routeFor('terms', 'en') }];

export default function TermsENPage() {
  return (
    <PageShell locale="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema('en', abs(routeFor('terms', 'en')), TRAIL)) }}
      />
      <SimplePage
        locale="en"
        title={META.en.terms.title.split(' — ')[0]}
        lede={META.en.terms.description}
        notice={UI.en.draftNotice}
      />
    </PageShell>
  );
}
