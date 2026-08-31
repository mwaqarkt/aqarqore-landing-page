import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import { ArrowLeft } from 'lucide-react';

const PATH = routeFor('guides', 'ar');
const TITLE = 'أدلة عملية لوكالات العقار في الخليج';
const DESCRIPTION =
  'أدلة عن مهنة الوساطة العقارية والتسويق العقاري والأنظمة التي تعمل داخلها المكاتب في الرياض والدوحة ودبي.';

export const metadata = {
  title: 'أدلة لوكالات العقار في الخليج | عقار كور',
  description: DESCRIPTION,
  alternates: alternatesFor('guides', 'ar'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH) },
};

const TRAIL = [
  { name: 'الرئيسية', path: '/ar/' },
  { name: 'الأدلة', path: PATH },
];

const GUIDES = [
  {
    href: '/ar/guides/real-estate-broker/',
    market: 'الخليج',
    title: 'دليل الوسيط العقاري: الترخيص والعمولة',
    blurb: 'ما هو الوسيط العقاري، وكيف تحصل على الترخيص في السعودية والإمارات وقطر، وكيف تُحتسب العمولة وتُوثَّق.',
    read: '9 دقائق',
  },
  {
    href: '/ar/guides/real-estate-marketing/',
    market: 'الخليج',
    title: 'التسويق العقاري: القنوات وقياس النتائج',
    blurb: 'المنصات العقارية، وجودة الإعلان، واشتراطات الإعلان النظامية، وكيف تعرف أي قناة تنتج صفقات فعلاً.',
    read: '8 دقائق',
  },
  {
    href: '/ar/best-real-estate-crm-saudi-arabia/',
    market: 'السعودية',
    title: 'نظام إدارة المبيعات العقارية في السعودية',
    blurb: 'اختيار برنامج إدارة مكاتب عقارية للمملكة: ربط عقار وواصل، وواجهة عربية كاملة، وضبط العمولات.',
    read: '8 دقائق',
  },
  {
    href: '/ar/best-real-estate-crm-qatar/',
    market: 'قطر',
    title: 'نظام إدارة المبيعات العقارية في قطر',
    blurb: 'لماذا قطر ليست نسخة مصغّرة من دبي، وما الذي يغيّره ذلك في اختيار النظام العقاري.',
    read: '7 دقائق',
  },
];

export default function GuidesIndexAr() {
  const schema = pageSchema('ar', abs(PATH), TRAIL, [
    {
      '@type': 'CollectionPage',
      '@id': `${abs(PATH)}#collection`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'ar',
      url: abs(PATH),
      publisher: { '@id': `${SITE_URL}/#organization` },
      hasPart: GUIDES.map((g) => ({
        '@type': 'Article',
        headline: g.title,
        url: abs(g.href),
        author: { '@type': 'Organization', name: 'AqarQore' },
      })),
    },
  ]);

  return (
    <PageShell locale="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-right">
        <header className="max-w-2xl space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0858A8] text-xs font-mono font-bold uppercase tracking-wider">
            الأدلة
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.2] text-slate-900">
            أدلة عملية لوكالات العقار في الخليج
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            كتابة عملية عن المهنة والمنصات والأنظمة التي تعمل داخلها المكاتب العقارية في الرياض والدوحة
            ودبي — وكيف تبقى الأعمال الإدارية بعيدة عن وقت البيع.
          </p>
        </header>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {GUIDES.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#1078C0] hover:shadow-md transition-all"
            >
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0858A8]">
                {g.market}
              </span>
              <h2 className="mt-2.5 text-lg font-extrabold leading-snug text-slate-900 group-hover:text-[#0858A8] transition-colors">
                {g.title}
              </h2>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">{g.blurb}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-[#0858A8]">
                اقرأ الدليل · {g.read}
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
