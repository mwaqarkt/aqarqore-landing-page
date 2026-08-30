import Link from 'next/link';
import { UI } from '@/lib/copy';

/**
 * Minimal header/footer chrome for the routed sub-pages.
 * The landing page carries its own full header and footer.
 */
/**
 * @param hasTranslation - true when this route genuinely exists in both
 *   locales. Only then does the switcher claim to be a translation link.
 *   English-only content pages pass false so we never advertise an Arabic
 *   equivalent that does not exist.
 */
export default function PageShell({ locale = 'en', hasTranslation = true, children }) {
  const isRtl = locale === 'ar';
  const t = UI[locale];
  const home = isRtl ? '/ar/' : '/';
  const other = isRtl ? '/' : '/ar/';

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FB] text-slate-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-white focus:font-bold focus:shadow-lg"
      >
        {isRtl ? 'تخطي إلى المحتوى' : 'Skip to main content'}
      </a>

      <header className="w-full bg-white border-b border-slate-200">
        <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-4">
          <Link href={home} className="flex items-center gap-3 group">
            <span className="w-10 h-10 flex items-center justify-center">
              <img
                src="/aqarqore-emblem.png"
                alt="AqarQore home"
                width="156"
                height="149"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </span>
            <span className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight leading-none">
                {isRtl ? 'عقار كور' : 'AqarQore'}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-[#0858A8] font-bold font-mono mt-1">
                {isRtl ? 'نظام تشغيل وكالات العقار بالخليج' : 'GCC Agency OS'}
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href={isRtl ? '/ar/pricing/' : '/pricing/'}
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#0858A8] transition-colors"
            >
              {t.pricingLink}
            </Link>
            <Link
              href={other}
              {...(hasTranslation ? { hrefLang: isRtl ? 'en' : 'ar' } : {})}
              lang={isRtl ? 'en' : 'ar'}
              aria-label={isRtl ? 'Switch to English' : 'التبديل إلى العربية'}
              className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-bold transition-colors"
            >
              {isRtl ? 'English' : 'العربية'}
            </Link>
            <Link
              href={isRtl ? '/ar/book-a-demo/' : '/book-a-demo/'}
              className="rounded-xl bg-gradient-to-r from-[#1078C0] to-[#0858A8] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md hover:shadow-lg transition-all"
            >
              {t.demoLink}
            </Link>
          </div>
        </nav>
      </header>

      <main id="main" className="flex-1 w-full">
        {children}
      </main>

      <footer className="bg-[#001128] text-blue-200/80 text-xs py-10 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>
            © {new Date().getFullYear()}{' '}
            {isRtl ? 'شركة AqarQore للتقنية. جميع الحقوق محفوظة.' : 'AqarQore Technologies Inc. All rights reserved.'}
          </span>
          <span className="flex items-center gap-5">
            <Link href={home} className="hover:text-white transition-colors">{t.homeLink}</Link>
            <Link href={isRtl ? '/ar/privacy/' : '/privacy/'} className="hover:text-white transition-colors">
              {isRtl ? 'سياسة الخصوصية' : 'Privacy'}
            </Link>
            <Link href={isRtl ? '/ar/terms/' : '/terms/'} className="hover:text-white transition-colors">
              {isRtl ? 'شروط الخدمة' : 'Terms'}
            </Link>
            <Link href={isRtl ? '/ar/contact/' : '/contact/'} className="hover:text-white transition-colors">
              {isRtl ? 'تواصل معنا' : 'Contact'}
            </Link>
            {!isRtl && (
              <>
                <Link href="/features/" className="hover:text-white transition-colors">Features</Link>
                <Link href="/guides/" className="hover:text-white transition-colors">Guides</Link>
              </>
            )}
          </span>
        </div>
      </footer>
    </div>
  );
}
