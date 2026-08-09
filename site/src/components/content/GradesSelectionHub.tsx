import Link from "next/link";

const gradeRoutes = [
  {
    title: "Baseline Grade Choice",
    description:
      "Separate 201, 430, and 304 by service window, magnetism, finish intent, and real-use savings.",
    recommendation: "Service window before savings",
  },
  {
    title: "Chloride & Upgrade Decisions",
    description:
      "Move from 304 to 316L or duplex when exposure, cleaners, or hidden chloride risk changes the job.",
    recommendation: "Upgrade by exposure",
  },
  {
    title: "Family & Property Filters",
    description:
      "Check magnetism, formability, strength, and temperature before treating grade numbers as equivalent.",
    recommendation: "Behavior before habit",
  },
  {
    title: "Export Naming & Equivalence",
    description:
      "Align ASTM, EN, JIS, GB, and dual-cert language before the PO and certificate diverge.",
    recommendation: "Write the ordered grade cleanly",
  },
] as const;

const gradeReadingShelf = [
  {
    eyebrow: "Baseline choice",
    title: "What Is 304 Stainless Steel?",
    description:
      "Start here when the job probably belongs to 304, but the real question is where that baseline stops being safe enough.",
    href: "/knowledge-base/what-is-304-stainless-steel",
  },
  {
    eyebrow: "Upgrade check",
    title: "What Is 316 Stainless Steel?",
    description:
      "Use this when the upgrade feels likely and the question is what 316L really buys in chloride-bearing or cleaner-heavy duty.",
    href: "/knowledge-base/what-is-316-stainless-steel",
  },
  {
    eyebrow: "Budget tradeoff",
    title: "201 vs 304 Stainless Steel",
    description:
      "Built for indoor decorative, kitchen-adjacent, or appliance-facing work where the cost saving is being weighed against a narrower service window.",
    href: "/knowledge-base/201-vs-304-stainless-steel",
  },
  {
    eyebrow: "Chloride margin",
    title: "304 vs 316 Stainless Steel",
    description:
      "Go here when the decision is really about chloride margin, wash-down chemistry, coastal use, or pharma-style cleaning.",
    href: "/knowledge-base/304-vs-316-stainless-steel",
  },
  {
    eyebrow: "Family behavior",
    title: "Stainless Steel Grade Comparison",
    description:
      "Useful when the buyer or engineer still needs a cleaner family-level map before narrowing into a specific alloy.",
    href: "/knowledge-base/stainless-steel-grade-comparison",
  },
  {
    eyebrow: "Export naming",
    title: "Grade Equivalence for Export",
    description:
      "Use this when the drawing, PO, or MTC keeps switching between ASTM, EN, JIS, and GB naming systems.",
    href: "/knowledge-base/stainless-steel-grade-equivalence-export",
  },
] as const;

const gradeTools = [
  {
    title: "Open Grade Library",
    description:
      "Use the grade library when the next step is moving from a comparison question into full grade pages and selection guidance.",
    href: "/grades",
    cta: "Browse grades",
  },
  {
    title: "Open Grade Guides",
    description:
      "Jump into stainless steel guides when the grade question is already narrow and the next need is selection context or ordering notes.",
    href: "/resources/stainless-steel-guides#material-guide",
    cta: "Browse guides",
  },
  {
    title: "Match Grade to Application",
    description:
      "Use applications when the alloy choice still depends on food-contact duty, architecture, kitchen zones, or elevator finish requirements.",
    href: "/solutions/applications",
    cta: "Browse applications",
  },
] as const;

export function GradesSelectionHub() {
  return (
    <section className="flex h-full flex-col rounded-card-lg border border-cream-border bg-white/86 p-5 shadow-[0_14px_42px_rgba(13,20,27,0.045)] sm:p-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
          Grades &amp; Selection
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-brand-dark">
          Turn grade names into a material decision.
        </h2>
        <p className="mt-3 text-sm leading-6 text-text-secondary">
          Name the uncertainty first: baseline grade, chloride upgrade, family
          behavior, or export naming. Then open the page that clears that
          specific decision.
        </p>
      </div>

      <div className="mt-5 grid auto-rows-fr gap-2.5 sm:grid-cols-2">
        {gradeRoutes.map((route) => (
          <article
            key={route.title}
            className="flex h-full min-h-[10.5rem] flex-col rounded-card-sm border border-cream-border-soft bg-cream-50 px-4 py-3 transition hover:border-brand-accent/35 hover:bg-white"
          >
            <div className="min-h-[2.2rem] text-xs font-semibold uppercase leading-4 tracking-[0.16em] text-brand-accent">
              {route.recommendation}
            </div>
            <h3 className="mt-2 text-sm font-semibold leading-6 text-brand-dark">
              {route.title}
            </h3>
            <p className="mt-auto line-clamp-2 pt-2 text-sm leading-6 text-text-secondary">
              {route.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-5 rounded-card-md border border-cream-border bg-cream-100/76 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-light">
            Key reads
          </p>
          <Link
            href="/grades"
            className="text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent-hover"
          >
            Open grade library
          </Link>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {gradeReadingShelf.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-cream-border bg-white px-3 py-2 text-sm font-semibold text-brand-dark transition hover:border-brand-accent/50 hover:text-brand-accent"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-cream-border pt-5 text-sm font-semibold">
        {gradeTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="text-brand-dark transition-colors hover:text-brand-accent"
          >
            {tool.cta}
          </Link>
        ))}
      </div>
    </section>
  );
}
