import { alternatesFor, abs, routeFor } from '@/lib/site';
import { META } from '@/lib/copy';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import PricingContent from '@/components/PricingContent';

export const metadata = {
  title: META.ar.pricing.title,
  description: META.ar.pricing.description,
  alternates: alternatesFor('pricing', 'ar'),
  openGraph: {
    title: META.ar.pricing.title,
    description: META.ar.pricing.description,
    url: abs(routeFor('pricing', 'ar')),
  },
};

const TRAIL = [{ name: 'الرئيسية', path: '/ar/' }, { name: 'الأسعار', path: routeFor('pricing', 'ar') }];

export default function PricingARPage() {
  return (
    <PageShell locale="ar">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema('ar', abs(routeFor('pricing', 'ar')), TRAIL)) }}
      />
      <PricingContent locale="ar" />
    </PageShell>
  );
}
