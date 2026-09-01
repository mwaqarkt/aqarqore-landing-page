import Link from 'next/link';
import { Check, ShieldCheck } from 'lucide-react';

const TIERS = {
  en: [
    { tier: 'TIER 01 • STARTER', name: 'Starter Brokerage', sub: 'For growing teams up to 5 agents', price: '$149', unit: '/ seat / month', cta: 'Book Starter Demo', featured: false,
      features: ['Auto Lead Distribution (< 10s routing)', 'Property Finder & Bayut Real-Time Sync', 'Mobile App with Offline Queue & 5G Sync', 'Lead Tracking & Activity History'] },
    { tier: 'TIER 02 • RECOMMENDED', name: 'Growth Agency', sub: 'For established teams 6–25 agents', price: '$199', unit: '/ seat / month', cta: 'Schedule Growth Demo', featured: true,
      features: ['All Starter Features Included', 'Meta WhatsApp AI Qualification Bot', '2-Step Deal Commission Approvals', 'Live Agent Telemetry & Response Speed Score', 'Multi-Factor Authentication (TOTP) & RBAC'] },
    { tier: 'TIER 03 • ENTERPRISE', name: 'Enterprise Group', sub: 'For large brokerages (25+ agents)', price: 'Custom Quote', unit: '', cta: 'Request Enterprise Quote', featured: false,
      features: ['All Growth Features Included', 'Dedicated Account Manager in Dubai / Doha', 'Custom ERP, Accounting & Zoho Integrations', 'Regional Data Hosting Options (KSA / UAE)', 'Custom Enterprise SLA & VIP Onboarding'] },
  ],
  ar: [
    { tier: 'المستوى 01 • البداية', name: 'وكالة ناشئة', sub: 'للفرق النامية حتى 5 وكلاء', price: '149$', unit: '/ مقعد / شهرياً', cta: 'احجز عرض الخطة الناشئة', featured: false,
      features: ['توزيع تلقائي للعملاء (توجيه < 10 ث)', 'مزامنة فورية مع Property Finder و Bayut', 'تطبيق جوال مع قائمة دون إنترنت وتزامن 5G', 'تتبع العملاء وسجل النشاطات الكامل'] },
    { tier: 'المستوى 02 • الموصى بها', name: 'وكالة متنامية', sub: 'للفرق القائمة من 6 إلى 25 وكيلاً', price: '199$', unit: '/ مقعد / شهرياً', cta: 'احجز عرض خطة النمو', featured: true,
      features: ['تشمل جميع ميزات الخطة الناشئة', 'روبوت تأهيل العملاء الذكي عبر واتساب ميتا', 'اعتمادات العمولات والصفقات على خطوتين', 'مؤشرات الأداء اللحظية وسرعة استجابة الوكلاء', 'مصادقة متعددة العوامل (TOTP) وصلاحيات RBAC'] },
    { tier: 'المستوى 03 • الشركات الكبرى', name: 'مجموعة كبرى', sub: 'للوكالات العقارية الكبرى (+25 وكيلاً)', price: 'عرض سعر مخصص', unit: '', cta: 'طلب عرض سعر للشركات', featured: false,
      features: ['تشمل جميع ميزات خطة النمو', 'مدير حسابات إقليمي مخصص في دبي والدوحة', 'تكامل مخصص مع أنظمة ERP والمحاسبة و Zoho', 'خيارات استضافة إقليمية (السعودية / الإمارات)', 'اتفاقية مستوى خدمة SLA مخصصة وتدريب VIP'] },
  ],
};

export default function PricingContent({ locale = 'en' }) {
  const isRtl = locale === 'ar';
  const tiers = TIERS[locale];
  const demoHref = isRtl ? '/ar/book-a-demo/' : '/book-a-demo/';

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0858A8] text-xs font-mono font-bold uppercase tracking-wider">
          {isRtl ? 'أسعار شفافة وبسيطة' : 'TRANSPARENT PRICING'}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15]">
          {isRtl ? 'خطط واضحة ومدروسة. صُممت لتواكب نموك.' : 'Simple, Predictable Plans. Built to Scale.'}
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          {isRtl
            ? 'لا توجد رسوم مزامنة بوابات مخفية أو عقود معقدة. اختر الخطة المناسبة لوكالتك اليوم وقم بالترقية مع نمو فريقك.'
            : 'No hidden portal sync fees or setup traps. Choose the plan that fits your brokerage today and upgrade as you grow.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {tiers.map((p) => (
          <div
            key={p.name}
            className={`p-8 rounded-3xl flex flex-col justify-between transition-all ${isRtl ? 'text-right' : 'text-left'} ${
              p.featured
                ? 'bg-[#001D42] border-2 border-sky-400/80 text-white shadow-xl lg:-translate-y-2'
                : 'bg-white border border-slate-200 shadow-sm hover:shadow-lg'
            }`}
          >
            <div className="space-y-6">
              <div>
                <span className={`text-[11px] font-mono font-bold uppercase tracking-widest ${p.featured ? 'text-sky-300' : 'text-slate-500'}`}>
                  {p.tier}
                </span>
                <h2 className={`text-2xl font-extrabold mt-1 ${p.featured ? 'text-white' : 'text-slate-900'}`}>{p.name}</h2>
                <p className={`text-xs mt-1 font-medium ${p.featured ? 'text-blue-200/80' : 'text-slate-500'}`}>{p.sub}</p>
              </div>

              <div className={`pt-2 pb-5 border-b ${p.featured ? 'border-blue-800/70' : 'border-slate-100'}`}>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className={`text-4xl font-black font-mono tracking-tight ${p.featured ? 'text-white' : 'text-slate-900'}`}>{p.price}</span>
                  {p.unit && <span className={`text-xs font-medium ${p.featured ? 'text-blue-200/80' : 'text-slate-500'}`}>{p.unit}</span>}
                </div>
              </div>

              <ul className={`space-y-3.5 text-xs sm:text-sm ${p.featured ? 'text-blue-100' : 'text-slate-700'}`}>
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.featured ? 'text-[#00D6A3]' : 'text-emerald-600'}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href={demoHref}
                className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm text-center block transition-all ${
                  p.featured
                    ? 'bg-gradient-to-r from-[#1078C0] to-[#0858A8] text-white shadow-lg'
                    : 'bg-slate-900 hover:bg-slate-800 text-white'
                }`}
              >
                {p.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-xs text-slate-500 font-medium flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>
          {isRtl
            ? 'جميع الخطط تشمل ربط واتساب السحابي الرسمي من ميتا، وتشفير قوي، وخيارات استضافة إقليمية.'
            : 'All plans include official Meta WhatsApp Cloud API access, strong encryption, and regional data hosting options.'}
        </span>
      </p>
    </section>
  );
}
