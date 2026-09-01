import Link from 'next/link';
import { Table, H2, H3, P, UL, AnswerBlock, FaqList, Cta } from '@/components/Article';

/**
 * Shared scaffolding for portal integration pages. Each page supplies its own
 * market context and prose — only the repeated structural furniture lives here,
 * so the pages stay genuinely distinct rather than templated.
 */
export function PortalFacts({ rows }) {
  return (
    <Table head={['', '']} rows={rows} caption="Portal facts as published by the operator. Confirm current figures directly." />
  );
}

export function HowItWorks({ steps }) {
  return (
    <ol className="space-y-4">
      {steps.map((s, i) => (
        <li key={s.t} className="flex gap-4">
          <span className="shrink-0 w-7 h-7 rounded-full bg-[#0858A8] text-white text-xs font-bold font-mono flex items-center justify-center">
            {i + 1}
          </span>
          <span>
            <strong className="block text-slate-900">{s.t}</strong>
            <span className="mt-1 block text-[15px] leading-relaxed text-slate-700">{s.d}</span>
          </span>
        </li>
      ))}
    </ol>
  );
}

export function OtherPortals({ current }) {
  const all = [
    ['Property Finder', '/integrations/property-finder/'],
    ['Bayut', '/integrations/bayut/'],
    ['Dubizzle', '/integrations/dubizzle/'],
    ['Aqar', '/integrations/aqar/'],
    ['Wasalt', '/integrations/wasalt/'],
  ].filter(([n]) => n !== current);

  return (
    <aside className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
      <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-500">
        Other portal integrations
      </p>
      <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        {all.map(([n, h]) => (
          <li key={h}>
            <Link href={h} className="font-semibold text-[#0858A8] hover:underline">
              {n}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export { H2, H3, P, UL, AnswerBlock, FaqList, Cta, Table };
