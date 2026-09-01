import Link from 'next/link';
import { CONTACT, mailto, waLink } from '@/lib/site';

export function LegalShell({ locale = 'en', title, updated, intro, children }) {
  const isRtl = locale === 'ar';
  return (
    <article className={`max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20 ${isRtl ? 'text-right' : 'text-left'}`}>
      <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">{title}</h1>
      <p className="mt-3 text-xs font-mono text-slate-500">
        {isRtl ? 'آخر تحديث' : 'Last updated'} {updated}
      </p>
      {intro && <p className="mt-5 text-base leading-relaxed text-slate-600">{intro}</p>}
      <div className="mt-10 space-y-8">{children}</div>

      <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-sm font-extrabold text-slate-900">
          {isRtl ? 'كيف تتواصل معنا' : 'How to contact us'}
        </h2>
        <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
          <li>
            {isRtl ? 'البريد الإلكتروني: ' : 'Email: '}
            <a href={mailto()} className="font-semibold text-[#0858A8] hover:underline">{CONTACT.email}</a>
          </li>
          <li>
            {isRtl ? 'واتساب: ' : 'WhatsApp: '}
            <a href={waLink()} target="_blank" rel="noopener noreferrer" dir="ltr"
               className="font-semibold text-[#0858A8] hover:underline">{CONTACT.whatsappDisplay}</a>
          </li>
        </ul>
      </div>

      <Link href={isRtl ? '/ar/' : '/'} className="mt-10 inline-block text-sm font-bold text-[#0858A8] hover:underline">
        {isRtl ? '→ العودة للرئيسية' : '← Back to home'}
      </Link>
    </article>
  );
}

export function Sec({ id, heading, children }) {
  return (
    <section id={id} className="space-y-3">
      <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">{heading}</h2>
      <div className="space-y-3 text-[15px] leading-[1.75] text-slate-700">{children}</div>
    </section>
  );
}

export function List({ items }) {
  return (
    <ul className="space-y-2 list-disc ps-5 marker:text-[#1078C0]">
      {items.map((i, n) => <li key={n}>{i}</li>)}
    </ul>
  );
}
