import Link from "next/link";

const architectureZones = [
  {
    title: "Interior Landmark Zones",
    description:
      "Lobbies, atriums, and visible feature walls where reflectivity and lot-matching matter more than corrosion reserve.",
    recommendation: "304 / 430 + mirror / hairline",
  },
  {
    title: "Exterior Inland Envelope",
    description:
      "Urban cladding and trim work where 304 usually works if the finish and maintenance plan are specified honestly.",
    recommendation: "304 + No.4 / Hairline",
  },
  {
    title: "Coastal Facades",
    description:
      "Projects close enough to the sea that chloride exposure becomes the first material decision instead of a late maintenance surprise.",
    recommendation: "316L review",
  },
  {
    title: "Splash & Waterfront Features",
    description:
      "Handrails, sculpture, and details in direct salt splash where duplex logic often replaces routine 316L thinking.",
    recommendation: "duplex review",
  },
] as const;

const architectureReadingShelf = [
  {
    eyebrow: "Exposure map",
    title: "Stainless for Architecture",
    description:
      "Start here when the project needs the overall map: inland, coastal, splash-zone, finish, and maintenance logic together.",
    href: "/knowledge-base/stainless-steel-in-architecture",
    cta: "Open article",
  },
  {
    eyebrow: "Finish choice",
    title: "Architectural Surface Selection",
    description:
      "Use this when the real decision is scratch visibility, cleaning burden, and what the finish will look like after opening day.",
    href: "/knowledge-base/architectural-ss-surface-selection",
    cta: "Open article",
  },
  {
    eyebrow: "Coastal rule",
    title: "Is 304 Enough for Coastal Use?",
    description:
      "The quickest reference when a facade or railing team is still trying to save money by keeping 304 too close to the shoreline.",
    href: "/knowledge-base/is-304-enough-for-coastal-use",
    cta: "Open article",
  },
  {
    eyebrow: "Specifier check",
    title: "304 or 316 for Coastal Projects?",
    description:
      "Built for architects and buyers who need a cleaner 304-to-316 decision before the finish schedule is frozen.",
    href: "/knowledge-base/304-316-coastal-specifier-framework",
    cta: "Open article",
  },
  {
    eyebrow: "Brushed choice",
    title: "No.4 or Hairline?",
    description:
      "Use this when the project is really about how brushed grain reads under light, traffic, and ongoing cleaning.",
    href: "/knowledge-base/no4-vs-hairline-finish",
    cta: "Open article",
  },
  {
    eyebrow: "Landmark mirror",
    title: "8K Mirror Finish Guide",
    description:
      "The faster reference for landmark mirror work where substrate, gloss, protection film, and inspection all matter.",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
    cta: "Open finish page",
  },
] as const;

const architectureTools = [
  {
    title: "Open Grade Pages",
    description:
      "Jump into 304, 316L, 430, and 2205 when the project needs a clearer grade ladder by exposure zone.",
    href: "/grades",
    cta: "Browse grades",
  },
  {
    title: "Compare Finishes",
    description:
      "Move from facade or lobby use cases into mirror, hairline, No.4, AFP, and surface-selection guidance.",
    href: "/surfaces",
    cta: "Browse finishes",
  },
  {
    title: "Ask for Facade Review",
    description:
      "Use this when the exposure zone is known but the project still needs help locking the grade, finish, or maintenance plan.",
    href: "/contact#technical-review",
    cta: "Ask for review",
  },
] as const;

export function ArchitectureHub() {
  return (
    <section className="rounded-card-lg border border-border bg-gradient-to-br from-[#eef3f3] via-white to-[#f4f0eb] p-6 shadow-sm shadow-brand-dark/5 sm:p-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
          Envelope System
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-brand-dark sm:text-3xl">
          Exposure comes before finish.
        </h2>
        <p className="mt-3 text-base leading-7 text-text-secondary">
          Split the job by exposure zone, then move into the right finish or
          coastal article. From there, use grade pages and technical review when
          the specification has to survive procurement and maintenance.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {architectureZones.map((zone) => (
          <article
            key={zone.title}
            className="flex h-full flex-col rounded-card-md border border-border bg-white/85 p-5 backdrop-blur-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
              Exposure Zone
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
              Use these when exposure, finish, or maintenance is still unsettled.
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
          {architectureReadingShelf.slice(0, 3).map((item) => (
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
                {item.cta}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {architectureTools.map((tool) => (
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


