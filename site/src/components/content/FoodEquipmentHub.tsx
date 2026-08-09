import Link from "next/link";

const foodRoutes = [
  {
    title: "Product-Contact Lines",
    description:
      "The core hygienic decision where alloy, measured finish, tube standard, and weld quality need to be set together.",
    recommendation: "304L / 316L + A270",
  },
  {
    title: "Utility & CIP Lines",
    description:
      "Steam, glycol, and CIP supply lines where pressure duty and sanitation duty can diverge if the spec is written badly.",
    recommendation: "A312 or A270 by function",
  },
  {
    title: "Dairy & Chloride Decisions",
    description:
      "Milk, brine, and harsher cleaning chemistry where grade, measured finish, and documents need to be agreed together.",
    recommendation: "316L + measured Ra route",
  },
  {
    title: "Pharma & High-Purity",
    description:
      "Where the question quickly becomes electropolish, documentation chain, and fabrication control rather than base alloy alone.",
    recommendation: "A270 S2 / BPE basis",
  },
] as const;

const foodReadingShelf = [
  {
    eyebrow: "Material choice",
    title: "Food-Grade Stainless",
    description:
      "Start here when the real question is whether 304 is enough, when 316L is safer, and what Ra the job actually needs.",
    href: "/knowledge-base/food-grade-stainless-steel",
  },
  {
    eyebrow: "Equipment fit",
    title: "Food Equipment Selection",
    description:
      "Use this when the issue is the broader hygiene picture: alloy, weld logic, documentation, and audit consequences together.",
    href: "/knowledge-base/stainless-steel-food-equipment",
  },
  {
    eyebrow: "Measured surface",
    title: "Ra Requirements",
    description:
      "Built for dairy, food, and hygienic-process questions where finish names are no longer enough and measured roughness matters.",
    href: "/knowledge-base/surface-roughness-ra-food-equipment",
  },
  {
    eyebrow: "Weld quality",
    title: "Food-Grade Pipe Welding",
    description:
      "The shortest path when the real risk sits in purge discipline, heat tint, and hygienic weld release rather than alloy name.",
    href: "/knowledge-base/stainless-pipe-welding-food-industrial",
  },
  {
    eyebrow: "Document proof",
    title: "How to Read the MTC",
    description:
      "Useful when a sanitary order depends on proving heat chemistry, weld traceability, and the real inspection chain.",
    href: "/knowledge-base/how-to-read-mill-test-certificate",
  },
  {
    eyebrow: "After fabrication",
    title: "Passivation Guidance",
    description:
      "Go here when the base alloy is right but fabrication may still fail if the passive surface is not properly restored.",
    href: "/knowledge-base/stainless-steel-passivation-guide",
  },
] as const;

const foodTools = [
  {
    title: "Open Grade Pages",
    description:
      "Jump into 304, 316L, and related grade pages when the hygienic job still needs a cleaner alloy comparison.",
    href: "/grades",
    cta: "Browse grades",
  },
  {
    title: "Open Food-Grade Guides",
    description:
      "Use stainless steel guides when you need grade, finish, cleanability, and supply notes during sanitary review.",
    href: "/resources/stainless-steel-guides#material-guide",
    cta: "Browse guides",
  },
  {
    title: "Get Technical Review",
    description:
      "Use this when the job is already sanitary and the real question is whether the spec, finish, or document chain is release-ready.",
    href: "/contact#technical-review",
    cta: "Ask for review",
  },
] as const;

export function FoodEquipmentHub() {
  return (
    <section className="rounded-card-lg border border-border bg-gradient-to-br from-[#f5f7f0] via-white to-[#eef3e7] p-6 shadow-sm shadow-brand-dark/5 sm:p-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
          Hygienic System
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-brand-dark sm:text-3xl">
          Separate hygienic duty before writing the spec.
        </h2>
        <p className="mt-3 text-base leading-7 text-text-secondary">
          Split the system by sanitary function, then move into the right
          knowledge page. Bring in grade, datasheet, and technical review when
          the spec has to hold up in audit and fabrication.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {foodRoutes.map((route) => (
          <article
            key={route.title}
            className="flex h-full flex-col rounded-card-md border border-border bg-white/85 p-5 backdrop-blur-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
              Hygiene Check
            </p>
            <h3 className="mt-3 text-lg font-semibold text-brand-dark">
              {route.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">
              {route.description}
            </p>
            <div className="mt-4 inline-flex w-fit rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-dark">
              {route.recommendation}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-card-md border border-cream-border bg-white/80 p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-light">
              Related reads
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-dark">
              Use these when hygiene wording needs evidence.
            </h3>
          </div>
          <Link
            href="/resources/stainless-steel-guides"
            className="text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent-hover"
          >
            More Stainless Steel Guides
          </Link>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          {foodReadingShelf.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex h-full flex-col rounded-card-sm border border-cream-border-soft bg-cream-50 px-4 py-4 transition hover:border-brand-accent/50 hover:bg-white"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-light">
                {item.eyebrow}
              </p>
              <h4 className="mt-2 text-sm font-semibold leading-6 text-brand-dark">
                {item.title}
              </h4>
              <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">
                {item.description}
              </p>
              <span className="mt-4 text-sm font-semibold text-brand-accent">
                Open article
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {foodTools.map((tool) => (
          <article
            key={tool.href}
            className="flex h-full flex-col rounded-card-md border border-border bg-white p-5"
          >
            <h3 className="text-lg font-semibold text-brand-dark">{tool.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">
              {tool.description}
            </p>
            <Link
              href={tool.href}
              className="mt-5 inline-flex items-center text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent-hover"
            >
              {tool.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}


