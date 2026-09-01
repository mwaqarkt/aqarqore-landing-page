import Link from 'next/link';
import { alternatesFor, abs, routeFor, SITE_URL } from '@/lib/site';
import { pageSchema } from '@/lib/schema';
import PageShell from '@/components/PageShell';
import { ArrowLeft, Zap, MessageSquare, DollarSign } from 'lucide-react';

const PATH = routeFor('features', 'ar');

const TITLE = 'مميزات عقار كور لوكالات العقار في الخليج';
const DESCRIPTION =
  'توزيع العملاء في أقل من 10 ثوانٍ، وتأهيل المشترين عبر واجهة واتساب السحابية الرسمية من ميتا، واعتماد العمولات على خطوتين.';

export const metadata = {
  title: 'المميزات — عقار كور لإدارة العقارات',
  description: DESCRIPTION,
  alternates: alternatesFor('features', 'ar'),
  openGraph: { title: TITLE, description: DESCRIPTION, url: abs(PATH) },
};

const TRAIL = [
  { name: 'الرئيسية', path: '/ar/' },
  { name: 'المميزات', path: PATH },
];

const FEATURES = [
  {
    href: '/ar/features/lead-distribution/',
    icon: Zap,
    eyebrow: 'سرعة الوصول للعميل',
    title: 'التوزيع التلقائي للعملاء',
    blurb:
      'كل استفسار من بروبرتي فايندر وبيوت ودوبيزل وعقار وواصل يُسنَد لوكيل متاح خلال ثوانٍ، مع كشف التكرار وسجل كامل لقرارات الإسناد.',
  },
  {
    href: '/ar/features/whatsapp-ai-qualification/',
    icon: MessageSquare,
    eyebrow: 'الذكاء الاصطناعي للمحادثات',
    title: 'ربط واتساب وتأهيل العملاء',
    blurb:
      'التقاط الميزانية والمنطقة ونوع العقار على رقم وكالتك عبر واجهة ميتا السحابية الرسمية، ثم التسليم لوكيل بشري مع السياق كاملاً.',
  },
  {
    href: '/ar/features/commission-approvals/',
    icon: DollarSign,
    eyebrow: 'الرقابة المالية',
    title: 'اعتماد العمولات على خطوتين',
    blurb:
      'توقيعا المدير والمالية لا يمكن تخطيهما أو تعديلهما، وحماية دفعات الصرف من التكرار، وسجل تدقيق ثابت خلف كل رقم.',
  },
];

export default function FeaturesIndexAr() {
  const schema = pageSchema('ar', abs(PATH), TRAIL, [
    {
      '@type': 'CollectionPage',
      '@id': `${abs(PATH)}#collection`,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: 'ar',
      url: abs(PATH),
      publisher: { '@id': `${SITE_URL}/#organization` },
      hasPart: FEATURES.map((f) => ({ '@type': 'WebPage', name: f.title, url: abs(f.href) })),
    },
  ]);

  return (
    <PageShell locale="ar">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-right">
        <header className="max-w-2xl space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0858A8] text-xs font-mono font-bold uppercase tracking-wider">
            المميزات
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.2] text-slate-900">
            مصمم لطريقة عمل وكالات العقار في الخليج
          </h1>
          <p className="text-lg leading-relaxed text-slate-600">
            ثلاث قدرات تعالج المواضع التي تخسر فيها الوكالات في دبي والدوحة والرياض أكبر قدر من المال: بطء
            الرد الأول، والمحادثات المحتجزة في هواتف شخصية، وأرقام عمولات لا يستطيع أحد إثباتها.
          </p>
        </header>

        <div className="mt-12 space-y-5">
          {FEATURES.map(({ href, icon: Icon, eyebrow, title, blurb }) => (
            <Link
              key={href}
              href={href}
              className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm hover:border-[#1078C0] hover:shadow-md transition-all"
            >
              <span className="w-11 h-11 shrink-0 rounded-xl bg-blue-50 text-[#0858A8] flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </span>
              <span className="flex-1">
                <span className="block text-[11px] font-mono font-bold uppercase tracking-widest text-[#0858A8]">
                  {eyebrow}
                </span>
                <h2 className="mt-1.5 text-xl font-extrabold text-slate-900 group-hover:text-[#0858A8] transition-colors">
                  {title}
                </h2>
                <span className="mt-2.5 block text-sm leading-relaxed text-slate-600">{blurb}</span>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0858A8]">
                  اقرأ المزيد
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
