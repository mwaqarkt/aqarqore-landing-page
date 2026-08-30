import Link from 'next/link';

/** Generic content page: heading, lede, optional body blocks. */
export default function SimplePage({ locale = 'en', title, lede, children, notice }) {
  const isRtl = locale === 'ar';
  return (
    <section className={`max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24 ${isRtl ? 'text-right' : 'text-left'}`}>
      <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight text-slate-900">{title}</h1>
      {lede && <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">{lede}</p>}
      {notice && (
        <p className="mt-6 rounded-xl border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {notice}
        </p>
      )}
      <div className="mt-8 space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed">{children}</div>
      <Link
        href={isRtl ? '/ar/' : '/'}
        className="mt-10 inline-block text-sm font-bold text-[#0858A8] hover:underline"
      >
        {isRtl ? '→ العودة للرئيسية' : '← Back to home'}
      </Link>
    </section>
  );
}
