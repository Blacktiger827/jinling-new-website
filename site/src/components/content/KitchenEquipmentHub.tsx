import Link from "next/link";

const kitchenZones = [
  {
    title: "Food-Contact & Prep",
    description:
      "Counters, prep decks, and product-side surfaces where cleanability comes before appearance.",
    recommendation: "304 + 2B/No.4",
  },
  {
    title: "Sinks & Wash Areas",
    description:
      "Bowls, drainboards, wash stations, and chloride-heavy corners where the 304-to-316L decision matters most.",
    recommendation: "304 or 316L",
  },
  {
    title: "Appliance Fronts",
    description:
      "Visible, touched, and cleaned every day. This is where No.4 and AFP usually outperform a one-finish-for-all approach.",
    recommendation: "No.4 + AFP",
  },
  {
    title: "Dry Backing Panels",
    description:
      "Hidden backs, side skins, and lower-risk dry panels where 430 or 201 can work if the environment is honestly mapped.",
    recommendation: "430 / 201 by zone",
  },
] as const;

const kitchenReadingShelf = [
  {
    eyebrow: "Alloy split",
    title: "304 or 430?",
    description:
      "Use this when the debate is really about dry appliance skins versus true wet-equipment zones.",
    href: "/knowledge-base/304-vs-430-kitchen-equipment",
  },
  {
    eyebrow: "Sink upgrade",
    title: "304 or 316L Sinks?",
    description:
      "Built for wash areas, brine prep, seafood work, and chloride-heavy cleaning regimes.",
    href: "/knowledge-base/304-vs-316l-commercial-kitchen-sinks",
  },
  {
    eyebrow: "Standard check",
    title: "NSF 51 or 3-A?",
    description:
      "The quickest way to separate restaurant equipment language from sanitary-process language.",
    href: "/knowledge-base/nsf-51-vs-3a-kitchen-equipment",
  },
  {
    eyebrow: "Finish choice",
    title: "2B, No.4, or AFP?",
    description:
      "Use this when the wrong finish is about to be copied across worktops, fronts, and hidden food-contact zones.",
    href: "/knowledge-base/2b-vs-no4-vs-afp-kitchen-equipment",
  },
  {
    eyebrow: "Hygiene fit",
    title: "Food Equipment Guidance",
    description:
      "Step into the broader hygiene, weld, Ra, and audit logic behind food-processing equipment.",
    href: "/knowledge-base/stainless-steel-food-equipment",
  },
  {
    eyebrow: "Measured surface",
    title: "Ra Requirements",
    description:
      "Use this when finish names stop being enough and the project starts asking for actual roughness values.",
    href: "/knowledge-base/surface-roughness-ra-food-equipment",
  },
] as const;

const kitchenTools = [
  {
    title: "Open Grade Pages",
    description:
      "Jump into 201, 304, 316L, and 430 when the kitchen project needs a cleaner alloy decision.",
    href: "/grades",
    cta: "Browse grades",
  },
  {
    title: "Compare Finishes",
    description:
      "Move from kitchen use cases into 2B, No.4, AFP, mirror, and other finish reference pages.",
    href: "/surfaces",
    cta: "Browse finishes",
  },
  {
    title: "Get Spec Review",
    description:
      "Use this when you already know the kitchen zone but need help locking the alloy, finish, thickness, or document basis.",
    href: "/contact#technical-review",
    cta: "Ask for review",
  },
] as const;

export function KitchenEquipmentHub() {
  return (
    <section className="rounded-card-lg border border-border bg-gradient-to-br from-[#f7f4ee] via-white to-[#f2eee6] p-6 shadow-sm shadow-brand-dark/5 sm:p-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
          Kitchen System
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-brand-dark sm:text-3xl">
          Split the kitchen by zone before choosing the metal.
        </h2>
        <p className="mt-3 text-base leading-7 text-text-secondary">
          Map the service zone first, then choose the right comparison or
          standards page. From there, move into grade, finish, and spec-review
          tools without turning the whole kitchen into one material answer.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kitchenZones.map((zone) => (
          <article
            key={zone.title}
            className="flex h-full flex-col rounded-card-md border border-border bg-white/85 p-5 backdrop-blur-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
              Service Zone
            </p>
            <h3 className="mt-3 text-lg font-semibold text-brand-dark">
              {zone.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">
              {zone.description}
            </p>
            <div className="mt-4 inline-flex w-fit rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-dark">
              {zone.recommendation}
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
              Use these when the zone decision still needs proof.
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
          {kitchenReadingShelf.slice(0, 3).map((item) => (
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
        {kitchenTools.map((tool) => (
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


