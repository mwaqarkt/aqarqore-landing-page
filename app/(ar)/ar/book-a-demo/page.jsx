import { alternatesFor, abs, routeFor } from '@/lib/site';
import { META } from '@/lib/copy';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import DemoForm from '@/components/DemoForm';
import { UI } from '@/lib/copy';

export const metadata = {
  title: META.ar.demo.title,
  description: META.ar.demo.description,
  alternates: alternatesFor('demo', 'ar'),
  openGraph: {
    title: META.ar.demo.title,
    description: META.ar.demo.description,
    url: abs(routeFor('demo', 'ar')),
  },
};

const TRAIL = [{ name: 'الرئيسية', path: '/ar/' }, { name: 'احجز عرضاً', path: routeFor('demo', 'ar') }];

export default function DemoARPage() {
  return (
    <PageShell locale="ar">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema('ar', abs(routeFor('demo', 'ar')), TRAIL)) }}
      />
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">{UI.ar.demoHeading}</h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">{UI.ar.demoSub}</p>
        <div className="mt-10">
          <DemoForm locale="ar" />
        </div>
      </section>
    </PageShell>
  );
}
