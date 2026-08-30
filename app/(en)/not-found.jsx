import Link from 'next/link';
import PageShell from '@/components/PageShell';
import { UI } from '@/lib/copy';

export const metadata = {
  title: 'Page not found — AqarQore',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const t = UI.en;
  const links = [
    { href: '/', label: t.homeLink },
    { href: '/pricing/', label: t.pricingLink },
    { href: '/book-a-demo/', label: t.demoLink },
  ];

  return (
    <PageShell locale="en">
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center">
        <p className="font-mono text-sm font-bold text-[#0858A8]">404</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">{t.notFoundTitle}</h1>
        <p className="mt-3 text-slate-600">{t.notFoundBody}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
