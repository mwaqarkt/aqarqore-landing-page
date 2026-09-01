import { alternatesFor, abs, routeFor } from '@/lib/site';
import { META } from '@/lib/copy';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import PricingContent from '@/components/PricingContent';

export const metadata = {
  title: META.en.pricing.title,
  description: META.en.pricing.description,
  alternates: alternatesFor('pricing', 'en'),
  openGraph: {
    title: META.en.pricing.title,
    description: META.en.pricing.description,
    url: abs(routeFor('pricing', 'en')),
  },
};

const TRAIL = [{ name: 'Home', path: '/' }, { name: 'Pricing', path: routeFor('pricing', 'en') }];

export default function PricingENPage() {
  return (
    <PageShell locale="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema('en', abs(routeFor('pricing', 'en')), TRAIL)) }}
      />
      <PricingContent locale="en" />
    </PageShell>
  );
}
