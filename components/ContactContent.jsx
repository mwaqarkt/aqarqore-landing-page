import Link from 'next/link';
import { MessageSquare, Mail, Clock, Globe } from 'lucide-react';
import { CONTACT, waLink, mailto } from '@/lib/site';

export default function ContactContent({ locale = 'en' }) {
  const isRtl = locale === 'ar';

  const channels = isRtl
    ? [
        { icon: MessageSquare, t: 'واتساب', v: CONTACT.whatsappDisplay, href: waLink('مرحباً، أود معرفة المزيد عن عقار كور.'),
          d: 'أسرع طريقة للوصول إلينا. هذه قناة المراسلة الوحيدة لدينا.', cta: 'افتح واتساب', ltr: true },
        { icon: Mail, t: 'البريد الإلكتروني', v: CONTACT.email, href: mailto('استفسار عن عقار كور'),
          d: 'للاستفسارات التفصيلية وطلبات الشركات.', cta: 'راسلنا', ltr: true },
      ]
    : [
        { icon: MessageSquare, t: 'WhatsApp', v: CONTACT.whatsappDisplay, href: waLink('Hello, I would like to know more about AqarQore.'),
          d: 'The fastest way to reach us, and our only messaging channel.', cta: 'Open WhatsApp', ltr: true },
        { icon: Mail, t: 'Email', v: CONTACT.email, href: mailto('AqarQore enquiry'),
          d: 'For detailed questions and enterprise requests.', cta: 'Send an email', ltr: true },
      ];

  const facts = isRtl
    ? [{ icon: Clock, t: 'الرد', d: 'نهدف للرد خلال يوم عمل واحد.' },
       { icon: Globe, t: 'اللغات', d: 'نخدمك بالعربية والإنجليزية.' }]
    : [{ icon: Clock, t: 'Response time', d: 'We aim to reply within one business day.' },
       { icon: Globe, t: 'Languages', d: 'We work in both Arabic and English.' }];

  return (
    <section className={`max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 ${isRtl ? 'text-right' : 'text-left'}`}>
      <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
        {isRtl ? 'تواصل مع عقار كور' : 'Contact AqarQore'}
      </h1>
      <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
        {isRtl
          ? 'تحدث مع فريقنا حول تشغيل وكالتك العقارية في دبي أو الدوحة أو الرياض.'
          : 'Talk to our team about running your brokerage in Dubai, Doha or Riyadh.'}
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {channels.map(({ icon: Icon, t, v, d, href, cta, ltr }) => (
          <div key={t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
            <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#0858A8] flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </span>
            <h2 className="mt-4 font-bold text-slate-900">{t}</h2>
            <p className="mt-1 font-mono text-sm text-slate-900" dir={ltr ? 'ltr' : undefined}>{v}</p>
            <p className="mt-2 flex-1 text-sm text-slate-600 leading-relaxed">{d}</p>
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="mt-4 inline-block rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors text-center"
            >
              {cta}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 grid gap-4 sm:grid-cols-2">
        {facts.map(({ icon: Icon, t, d }) => (
          <div key={t} className="flex items-start gap-3">
            <Icon className="w-4 h-4 text-[#0858A8] shrink-0 mt-0.5" />
            <span>
              <span className="block text-sm font-bold text-slate-900">{t}</span>
              <span className="block text-sm text-slate-600">{d}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-[#001D42] p-7 text-white">
        <h2 className="text-xl font-extrabold">
          {isRtl ? 'تفضّل عرضاً توضيحياً؟' : 'Prefer a walkthrough?'}
        </h2>
        <p className="mt-2 text-sm text-blue-100/85 leading-relaxed">
          {isRtl
            ? 'جولة عملية خلال 20 دقيقة على عقاراتك ومنصاتك، بدون عروض تقديمية.'
            : 'A 20-minute walkthrough on your own listings and portals. No slides.'}
        </p>
        <Link
          href={isRtl ? '/ar/book-a-demo/' : '/book-a-demo/'}
          className="mt-5 inline-block rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-[#002859] hover:bg-sky-50 transition-colors"
        >
          {isRtl ? 'احجز عرضاً توضيحياً' : 'Book a demo'}
        </Link>
      </div>
    </section>
  );
}
