import Link from 'next/link';
import { MessageSquare, Clock, MapPin } from 'lucide-react';

export default function ContactContent({ locale = 'en' }) {
  const isRtl = locale === 'ar';
  const items = isRtl
    ? [
        { icon: MessageSquare, t: 'احجز عرضاً توضيحياً', d: 'أسرع طريقة للبدء — جولة عملية خلال 20 دقيقة.', href: '/ar/book-a-demo/', cta: 'احجز الآن' },
        { icon: Clock, t: 'الإعداد والتشغيل', d: 'تشغيل كامل خلال 24 إلى 48 ساعة مع فريق إعداد مخصص.' },
        { icon: MapPin, t: 'المراكز الإقليمية', d: 'دبي • الدوحة • الرياض' },
      ]
    : [
        { icon: MessageSquare, t: 'Book a live demo', d: 'The fastest way to start — a 20-minute walkthrough on your own listings.', href: '/book-a-demo/', cta: 'Book now' },
        { icon: Clock, t: 'Onboarding', d: 'Fully live in 24–48 hours with a dedicated onboarding team.' },
        { icon: MapPin, t: 'Regional hubs', d: 'Dubai • Doha • Riyadh' },
      ];

  return (
    <section className={`max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 ${isRtl ? 'text-right' : 'text-left'}`}>
      <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
        {isRtl ? 'تواصل مع عقار كور' : 'Contact AqarQore'}
      </h1>
      <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
        {isRtl
          ? 'تحدث مع فريقنا حول تشغيل وكالتك العقارية في دبي أو الدوحة أو الرياض.'
          : 'Talk to our team about running your brokerage in Dubai, Doha or Riyadh.'}
      </p>

      <div className="mt-10 grid gap-5">
        {items.map(({ icon: Icon, t, d, href, cta }) => (
          <div key={t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#0858A8] flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <h2 className="font-bold text-slate-900">{t}</h2>
                <p className="mt-1 text-sm text-slate-600 leading-relaxed">{d}</p>
                {href && (
                  <Link href={href} className="mt-3 inline-block rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors">
                    {cta}
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
