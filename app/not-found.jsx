import Link from 'next/link';
import './globals.css';
import { jakarta, tajawal } from '@/lib/fonts';

// Global 404 for unmatched URLs. Next supplies the html/body shell for the
// root not-found, so this renders content only. Written to 404.html on export.
export const metadata = {
  title: 'Page not found — AqarQore',
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/features/', label: 'Features' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/guides/', label: 'Guides' },
  { href: '/book-a-demo/', label: 'Book a demo' },
];

export default function NotFound() {
  return (
    <div className={`${jakarta.variable} ${tajawal.variable} bg-[#F7F9FB] text-slate-900 antialiased`}>
        <main className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center">
          <Link href="/" className="flex items-center gap-3 mb-10">
            <img
              src="/aqarqore-emblem.png"
              alt="AqarQore home"
              width="156"
              height="149"
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-extrabold tracking-tight">AqarQore</span>
          </Link>

          <p className="font-mono text-sm font-bold text-[#0858A8]">404</p>
          <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight">Page not found</h1>
          <p className="mt-3 max-w-md text-slate-600">
            That page does not exist. It may have moved, or the link may be out of date. Try one of these
            instead.
          </p>

          <nav aria-label="Suggested pages" className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <p className="mt-8 text-sm text-slate-500">
            <Link href="/ar/" hrefLang="ar" lang="ar" className="font-semibold text-[#0858A8] hover:underline">
              العربية
            </Link>
          </p>
        </main>
    </div>
  );
}
