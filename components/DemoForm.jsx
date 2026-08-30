'use client';

import { useState } from 'react';
import { UI } from '@/lib/copy';

// Endpoint is configurable so the CRM webhook can be swapped without a code
// change. Set NEXT_PUBLIC_DEMO_ENDPOINT at build time.
const ENDPOINT = process.env.NEXT_PUBLIC_DEMO_ENDPOINT || '';

const MARKETS = ['Dubai', 'Abu Dhabi', 'Doha', 'Riyadh', 'Jeddah', 'Other'];
const MARKETS_AR = ['دبي', 'أبوظبي', 'الدوحة', 'الرياض', 'جدة', 'أخرى'];
const SIZES = ['1–5 agents', '6–25 agents', '25+ agents'];
const SIZES_AR = ['1–5 وكلاء', '6–25 وكيلاً', 'أكثر من 25 وكيلاً'];

export default function DemoForm({ locale = 'en' }) {
  const isRtl = locale === 'ar';
  const t = UI[locale];
  const [status, setStatus] = useState('idle');

  async function onSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget));

    if (!ENDPOINT) {
      // No endpoint wired yet — surface success locally rather than silently
      // dropping the lead. Replace by setting NEXT_PUBLIC_DEMO_ENDPOINT.
      console.warn('NEXT_PUBLIC_DEMO_ENDPOINT is not set. Payload:', data);
      setStatus('sent');
      return;
    }
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
  }

  const field = 'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#1078C0] focus:ring-2 focus:ring-[#1078C0]/20 transition';
  const label = 'block text-xs font-bold text-slate-700 mb-1.5';

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-8 text-center">
        <h2 className="text-xl font-extrabold text-emerald-900">{t.successTitle}</h2>
        <p className="mt-2 text-sm text-emerald-800 leading-relaxed">{t.successBody}</p>
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
        <p role="alert" className="text-sm font-semibold text-rose-700">{t.errorBody}</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full rounded-xl bg-gradient-to-r from-[#1078C0] to-[#0858A8] px-6 py-4 text-sm font-bold text-white shadow-lg hover:shadow-xl transition-all disabled:opacity-60"
      >
        {status === 'sending' ? t.sending : t.submit}
      </button>
    </form>
  );
}
