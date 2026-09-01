'use client';

import { useState } from 'react';
import { UI } from '@/lib/copy';
import { CONTACT, waLink, mailto } from '@/lib/site';

// Optional CRM webhook. When set, the form POSTs there. When not set the form
// hands the enquiry to WhatsApp — which is the channel this business actually
// runs on — rather than reporting success and discarding the lead.
const ENDPOINT = process.env.NEXT_PUBLIC_DEMO_ENDPOINT || '';

const MARKETS = ['Dubai', 'Abu Dhabi', 'Doha', 'Riyadh', 'Jeddah', 'Other'];
const MARKETS_AR = ['دبي', 'أبوظبي', 'الدوحة', 'الرياض', 'جدة', 'أخرى'];
const SIZES = ['1–5 agents', '6–25 agents', '25+ agents'];
const SIZES_AR = ['1–5 وكلاء', '6–25 وكيلاً', 'أكثر من 25 وكيلاً'];

function buildMessage(d, isRtl) {
  const L = isRtl
    ? { h: 'طلب عرض توضيحي — عقار كور', n: 'الاسم', c: 'الوكالة', e: 'البريد', p: 'الهاتف', m: 'السوق', a: 'عدد الوكلاء', r: 'النظام الحالي' }
    : { h: 'Demo request — AqarQore', n: 'Name', c: 'Brokerage', e: 'Email', p: 'Phone', m: 'Market', a: 'Agents', r: 'Current CRM' };
  return [
    L.h,
    `${L.n}: ${d.name || '-'}`,
    `${L.c}: ${d.company || '-'}`,
    `${L.e}: ${d.email || '-'}`,
    `${L.p}: ${d.phone || '-'}`,
    `${L.m}: ${d.market || '-'}`,
    `${L.a}: ${d.agents || '-'}`,
    d.currentCrm ? `${L.r}: ${d.currentCrm}` : null,
  ].filter(Boolean).join('\n');
}

export default function DemoForm({ locale = 'en' }) {
  const isRtl = locale === 'ar';
  const t = UI[locale];
  const [status, setStatus] = useState('idle');
  const [handoff, setHandoff] = useState(null);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const message = buildMessage(data, isRtl);

    if (ENDPOINT) {
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, locale }),
        });
        setStatus(res.ok ? 'sent' : 'error');
      } catch {
        setStatus('error');
      }
      return;
    }

    // No webhook configured: hand the enquiry to WhatsApp so it actually
    // reaches someone, and keep an email fallback visible on screen.
    const wa = waLink(message);
    const em = mailto(isRtl ? 'طلب عرض توضيحي' : 'Demo request', message);
    setHandoff({ wa, em });
    setStatus('handoff');
    if (typeof window !== 'undefined') window.open(wa, '_blank', 'noopener,noreferrer');
  }

  const field =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#1078C0] focus:ring-2 focus:ring-[#1078C0]/20 transition';
  const label = 'block text-xs font-bold text-slate-700 mb-1.5';

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-8 text-center">
        <h2 className="text-xl font-extrabold text-emerald-900">{t.successTitle}</h2>
        <p className="mt-2 text-sm text-emerald-800 leading-relaxed">{t.successBody}</p>
      </div>
    );
  }

  if (status === 'handoff' && handoff) {
    return (
      <div className={`rounded-2xl border border-emerald-300 bg-emerald-50 p-7 ${isRtl ? 'text-right' : 'text-left'}`}>
        <h2 className="text-xl font-extrabold text-emerald-900">
          {isRtl ? 'أكمل الإرسال عبر واتساب' : 'Finish sending on WhatsApp'}
        </h2>
        <p className="mt-2 text-sm text-emerald-800 leading-relaxed">
          {isRtl
            ? 'فتحنا واتساب برسالة جاهزة تتضمن تفاصيلك. إن لم تفتح النافذة، استخدم أحد الخيارين أدناه.'
            : 'We opened WhatsApp with your details pre-filled. If the window did not open, use one of the options below.'}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={handoff.wa}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white hover:brightness-95 transition"
          >
            {isRtl ? `واتساب ${CONTACT.whatsappDisplay}` : `WhatsApp ${CONTACT.whatsappDisplay}`}
          </a>
          <a
            href={handoff.em}
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800 transition"
          >
            {isRtl ? `راسلنا ${CONTACT.email}` : `Email ${CONTACT.email}`}
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`space-y-5 ${isRtl ? 'text-right' : 'text-left'}`}>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className={label} htmlFor="name">{t.fullName}</label>
          <input className={field} id="name" name="name" required autoComplete="name" />
        </div>
        <div>
          <label className={label} htmlFor="company">{t.company}</label>
          <input className={field} id="company" name="company" required autoComplete="organization" />
        </div>
        <div>
          <label className={label} htmlFor="email">{t.email}</label>
          <input className={field} id="email" name="email" type="email" required autoComplete="email" />
        </div>
        <div>
          <label className={label} htmlFor="phone">{t.phone}</label>
          <input className={field} id="phone" name="phone" type="tel" required autoComplete="tel" dir="ltr" />
        </div>
        <div>
          <label className={label} htmlFor="market">{t.market}</label>
          <select className={field} id="market" name="market" required defaultValue="">
            <option value="" disabled>—</option>
            {(isRtl ? MARKETS_AR : MARKETS).map((m, i) => (
              <option key={MARKETS[i]} value={MARKETS[i]}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="agents">{t.agents}</label>
          <select className={field} id="agents" name="agents" required defaultValue="">
            <option value="" disabled>—</option>
            {(isRtl ? SIZES_AR : SIZES).map((sz, i) => (
              <option key={SIZES[i]} value={SIZES[i]}>{sz}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={label} htmlFor="currentCrm">{t.currentCrm}</label>
        <input className={field} id="currentCrm" name="currentCrm" />
      </div>

      {status === 'error' && (
        <p role="alert" className="text-sm font-semibold text-rose-700">
          {t.errorBody}{' '}
          <a href={mailto()} className="underline">{CONTACT.email}</a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-xl bg-gradient-to-r from-[#1078C0] to-[#0858A8] px-6 py-4 text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-60"
      >
        {status === 'sending' ? t.sending : t.submit}
      </button>

      <p className="text-[11px] leading-relaxed text-slate-500">
        {isRtl
          ? 'بالإرسال، تفتح محادثة واتساب تتضمن التفاصيل التي أدخلتها. راجع '
          : 'Submitting opens a WhatsApp conversation containing the details you entered. See our '}
        <a href={isRtl ? '/ar/privacy/' : '/privacy/'} className="underline hover:text-slate-700">
          {isRtl ? 'سياسة الخصوصية' : 'privacy policy'}
        </a>
        {isRtl ? '.' : '.'}
      </p>
    </form>
  );
}
