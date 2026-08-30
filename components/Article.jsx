import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/** Short, quotable answer directly under a heading. Feeds PAA and AI Overviews. */
export function AnswerBlock({ children }) {
  return (
    <p className="rounded-2xl border-s-4 border-[#1078C0] bg-blue-50/70 px-5 py-4 text-[15px] leading-relaxed text-slate-800">
      {children}
    </p>
  );
}

export function H2({ id, children }) {
  return (
    <h2 id={id} className="scroll-mt-24 pt-4 text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
      {children}
    </h2>
  );
}

export function H3({ id, children }) {
  return (
    <h3 id={id} className="scroll-mt-24 pt-2 text-lg sm:text-xl font-bold text-slate-900">
      {children}
    </h3>
  );
}

export function P({ children }) {
  return <p className="text-[15px] sm:text-base leading-[1.75] text-slate-700">{children}</p>;
}

export function UL({ children }) {
  return <ul className="space-y-2.5 text-[15px] leading-[1.7] text-slate-700 list-disc ps-5 marker:text-[#1078C0]">{children}</ul>;
}

export function Table({ head, rows, caption }) {
  return (
    <figure className="not-prose">
      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
        <table className="w-full text-start text-sm border-collapse min-w-[640px]">
          <thead className="bg-slate-50">
            <tr>
              {head.map((h) => (
                <th key={h} scope="col" className="px-4 py-3 font-bold text-slate-900 border-b border-slate-200 whitespace-nowrap text-start">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={i % 2 ? 'bg-slate-50/50' : 'bg-white'}>
                {r.map((c, j) => (
                  <td key={j} className="px-4 py-3 align-top text-slate-700 border-b border-slate-100 last:border-0">
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && <figcaption className="mt-2 text-xs text-slate-500">{caption}</figcaption>}
    </figure>
  );
}

export function FaqList({ items }) {
  return (
    <div className="space-y-3">
      {items.map(([q, a]) => (
        <details key={q} className="group rounded-2xl border border-slate-200 bg-white p-5 open:border-sky-300 open:shadow-sm">
          <summary className="cursor-pointer list-none font-bold text-slate-900 flex items-start justify-between gap-4">
            <span>{q}</span>
            <span className="shrink-0 text-[#0858A8] transition-transform group-open:rotate-45 text-xl leading-none">+</span>
          </summary>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-700">{a}</p>
        </details>
      ))}
    </div>
  );
}

export function Cta({ heading, body, href = '/book-a-demo/', label = 'Book a 20-minute demo' }) {
  return (
    <aside className="not-prose rounded-3xl bg-[#001D42] p-7 sm:p-9 text-white">
      <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">{heading}</h2>
      <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-blue-100/85">{body}</p>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-extrabold text-[#002859] hover:bg-sky-50 transition-colors"
      >
        {label}
        <ArrowRight className="w-4 h-4" />
      </Link>
    </aside>
  );
}

/** Article shell: title, lede, meta line, on-page table of contents. */
export default function Article({ title, lede, updated, readTime, toc = [], tocLabel = 'On this page', byline = 'AqarQore · Updated', children }) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
      <header className="space-y-5">
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.12] text-slate-900">
          {title}
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed text-slate-600">{lede}</p>
        <p className="text-xs font-mono text-slate-500">
          {byline} {updated}
          {readTime ? ` · ${readTime}` : ''}
        </p>
      </header>

      {toc.length > 0 && (
        <nav aria-label={tocLabel} className="mt-9 rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
          <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500">{tocLabel}</p>
          <ol className="mt-3 space-y-2 text-sm">
            {toc.map(({ id, label }, i) => (
              <li key={id} className="flex gap-3">
                <span className="font-mono text-xs text-[#0858A8] pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <a href={`#${id}`} className="text-slate-700 hover:text-[#0858A8] hover:underline">{label}</a>
              </li>
            ))}
          </ol>
        </nav>
      )}

      <div className="mt-10 space-y-6">{children}</div>
    </article>
  );
}
