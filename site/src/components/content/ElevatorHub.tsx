import Link from "next/link";

const elevatorZones = [
  {
    title: "Feature Ceilings & Accents",
    description:
      "High-visibility zones where mirror or colored finishes carry the design intent, but only if the touch map stays under control.",
    recommendation: "304 + No.8 / PVD",
  },
  {
    title: "High-Touch Wall Panels",
    description:
      "The passenger-contact field where hairline, No.4, and AFP usually outperform decorative finishes that age badly in service.",
    recommendation: "304 + Hairline / AFP",
  },
  {
    title: "Door Skins & Magnetic Choices",
    description:
      "Where the mechanism, traffic, and finish durability matter together instead of treating the door skin like a generic wall panel.",
    recommendation: "430 or 304 by system",
  },
  {
    title: "Coastal & Pool-Adjacent Cabs",
    description:
      "Lift interiors in humid, chloride-laden buildings where the grade and finish need a stricter exposure review.",
    recommendation: "316L review",
  },
] as const;

const elevatorReadingShelf = [
  {
    eyebrow: "System view",
    title: "Elevator Finish & Grade Selection",
    description:
      "Start here when the cab needs one joined view across touch zones, mirror, hairline, AFP, PVD, and grade choice.",
    href: "/knowledge-base/stainless-steel-elevator-decoration",
    cta: "Open article",
  },
  {
    eyebrow: "Mirror proof",
    title: "How 8K Mirror Is Really Made",
    description:
      "Useful when the project wants landmark reflectivity but still needs a realistic view of substrate, protection, and inspection.",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
    cta: "Open article",
  },
  {
    eyebrow: "Texture choice",
    title: "No.4 or Hairline?",
    description:
      "Use this when the real question is how a brushed cab will look after daily touch, wiping, and panel replacement.",
    href: "/knowledge-base/no4-vs-hairline-finish",
    cta: "Open article",
  },
  {
    eyebrow: "Mirror proof",
    title: "8K Mirror Finish Guide",
    description:
      "Use this when the elevator brief already wants mirror and the real question is gloss, substrate, film, and release logic.",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
    cta: "Open finish page",
  },
  {
    eyebrow: "Damage limit",
    title: "Scratch Repair",
    description:
      "The fastest reference when a cab design looks good on day one but the real question is how finish damage will be handled later.",
    href: "/knowledge-base/stainless-steel-scratch-repair",
    cta: "Open article",
  },
  {
    eyebrow: "Protection check",
    title: "AFP Finish Guide",
    description:
      "Go here when the finish decision is really about fingerprint control, coating stack, and lot consistency on touch zones.",
    href: "/surfaces/stainless-steel-afp-finish",
    cta: "Open finish page",
  },
] as const;

const elevatorTools = [
  {
    title: "Compare Finishes",
    description:
      "Move into mirror, hairline, No.4, AFP, and PVD resources when the elevator project still needs a better finish split.",
    href: "/surfaces",
    cta: "Browse finishes",
  },
  {
    title: "Open Finish Guides",
    description:
      "Use finish guides when the project needs faster access to mirror and AFP selection details during review.",
    href: "/resources/stainless-steel-guides#processing",
    cta: "Browse guides",
  },
  {
    title: "Ask for Cab Review",
    description:
      "Use this when the touch zones are clear but the cab still needs help on grade, finish, coating, or lot-control wording.",
    href: "/contact#technical-review",
    cta: "Ask for review",
  },
] as const;

export function ElevatorHub() {
  return (
    <section className="rounded-card-lg border border-border bg-gradient-to-br from-[#f7f1e8] via-white to-[#f1ece4] p-6 shadow-sm shadow-brand-dark/5 sm:p-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
          Cab System
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-brand-dark sm:text-3xl">
          Split the cab by touch, reflection, and environment.
        </h2>
        <p className="mt-3 text-base leading-7 text-text-secondary">
          Separate high-touch panels, mirror features, door skins, and humid or
          coastal exposure. Then use the right finish page, datasheet, or
          technical review to lock the final specification.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {elevatorZones.map((zone) => (
          <article
            key={zone.title}
            className="flex h-full flex-col rounded-card-md border border-border bg-white/85 p-5 backdrop-blur-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
              Touch Zone
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
              Use these when mirror, touch, or replacement risk needs proof.
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
          {elevatorReadingShelf.slice(0, 3).map((item) => (
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
        {elevatorTools.map((tool) => (
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


