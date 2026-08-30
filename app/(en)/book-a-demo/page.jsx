import { alternatesFor, abs, routeFor } from '@/lib/site';
import { META } from '@/lib/copy';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import DemoForm from '@/components/DemoForm';
import { UI } from '@/lib/copy';

export const metadata = {
  title: META.en.demo.title,
  description: META.en.demo.description,
  alternates: alternatesFor('demo', 'en'),
  openGraph: {
    title: META.en.demo.title,
    description: META.en.demo.description,
    url: abs(routeFor('demo', 'en')),
  },
};

const TRAIL = [{ name: 'Home', path: '/' }, { name: 'Book a Demo', path: routeFor('demo', 'en') }];

export default function DemoENPage() {
  return (
    <PageShell locale="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema('en', abs(routeFor('demo', 'en')), TRAIL)) }}
      />
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">{UI.en.demoHeading}</h1>
        <p className="mt-3 text-base text-slate-600 leading-relaxed">{UI.en.demoSub}</p>
        <div className="mt-10">
          <DemoForm locale="en" />
        </div>
      </section>
    </PageShell>
  );
}
