import Link from "next/link";
import type { KBIntentAction } from "@/lib/knowledge-base";

interface KnowledgeBaseNextStepsProps {
  title: string;
  description: string;
  actions: KBIntentAction[];
}

export function KnowledgeBaseNextSteps({
  title,
  description,
  actions,
}: KnowledgeBaseNextStepsProps) {
  return (
    <section className="relative overflow-hidden rounded-[1.6rem] border border-slate-200 bg-[linear-gradient(135deg,#ffffff_0%,#f7f3eb_54%,#eef3f5_100%)] p-5 shadow-[0_18px_46px_rgba(13,20,27,0.055)] sm:p-6 lg:grid lg:grid-cols-[minmax(0,18rem)_1fr] lg:gap-8 lg:p-7">
      <div className="pointer-events-none absolute -right-20 -top-24 h-48 w-48 rounded-full bg-brand-accent/16 blur-3xl" />
      <div className="relative max-w-md">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6b32]">
          Next Useful Move
        </p>
        <h2 className="mt-3 text-[1.55rem] font-semibold leading-tight tracking-[-0.025em] text-brand-dark sm:text-[1.85rem]">
          {title}
        </h2>
        <p className="mt-4 text-[0.96rem] leading-7 text-slate-600">
          {description}
        </p>
        <p className="mt-5 hidden max-w-xs border-t border-slate-200 pt-4 text-sm leading-6 text-slate-500 lg:block">
          Pick the one path that changes the order. The archive can wait.
        </p>
      </div>

      <div className="relative mt-7 grid gap-3 md:grid-cols-3 lg:mt-0">
        {actions.map((action, index) => (
          <Link
            key={`${action.title}-${action.href}`}
            href={action.href}
            className="group flex h-full flex-col rounded-[1.05rem] border border-slate-200 bg-white/74 p-4 shadow-[0_10px_28px_rgba(13,20,27,0.035)] transition hover:-translate-y-0.5 hover:border-[#c7ad72] hover:bg-white"
          >
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6b32]">
                {action.eyebrow}
              </p>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-semibold text-slate-400">
                0{index + 1}
              </span>
            </div>
            <h3 className="mt-4 text-base font-semibold leading-6 text-brand-dark sm:text-[1.05rem]">
              {action.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
              {action.description}
            </p>
            <span className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 text-sm font-semibold text-[#36526B] transition group-hover:border-brand-accent group-hover:bg-brand-accent group-hover:text-brand-dark">
              {action.cta}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
