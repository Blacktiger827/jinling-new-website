import Link from "next/link";

export function LatestInsight() {
  return (
    <section className="py-20 sm:py-24 bg-bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-brand-dark text-white p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="flex-1">
            <p className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-3">
              China buying notes
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              Use market notes after the spec is clean.
            </h2>
            <p className="mt-4 text-gray-300 leading-relaxed max-w-xl">
              Price movement, policy pressure, and origin risk are useful only
              after the grade, finish, and release route are clear. The notes
              help buyers ask better questions before the next quote.
            </p>
          </div>
          <Link
            href="/resources/market-insights"
            className="shrink-0 inline-flex items-center rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-accent-hover transition-colors"
          >
            Open market notes
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

