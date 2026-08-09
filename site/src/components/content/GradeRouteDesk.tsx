import Image from "next/image";
import Link from "next/link";

interface GradeSidebarConfig {
  relatedTitle: string;
  items: Array<{ name: string; href: string }>;
  ctaHeading: string;
  ctaText: string;
  ctaHref: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
}

const gradeRouteConfigs = {
  "201-stainless-steel": {
    eyebrow: "201 Decision Desk",
    title: "Keep 201 where the cost saving is real and the service stays kind.",
    description:
      "201 is useful, but only inside a narrow lane. This page should help the buyer keep it in dry decorative work and move up before wet cleaning or chloride exposure turns the saving into a complaint.",
    cards: [
      {
        title: "Where it fits",
        description:
          "Dry indoor panels, budget trim, PVD base work, and decorative tube where the surface is seen but not abused.",
        signal: "Controlled indoor cost choice",
      },
      {
        title: "Where it stops",
        description:
          "Food contact, outdoor work, coastal air, bleach, salt, and repeated wet cleaning push 201 outside its honest window.",
        signal: "Keep it out of 304 claims",
      },
      {
        title: "Next upgrade",
        description:
          "Move to 304 for everyday stainless, 316L for chloride exposure, or 430 when the brief wants magnetic indoor sheet.",
        signal: "304 / 316L / 430",
      },
    ],
    read: {
      eyebrow: "Cost boundary",
      title: "201 vs 304 Stainless Steel",
      description:
        "Use this when the buyer is trying to decide whether the saving is real or just risk moved downstream.",
      href: "/knowledge-base/201-vs-304-stainless-steel",
      cta: "Open comparison",
    },
    route: {
      title: "Open Grade Guides",
      href: "/resources/stainless-steel-guides#material-guide",
      description: "Grade selection, substitution risk, and buying notes in the stainless steel guide track.",
    },
    sidebar: {
      relatedTitle: "201 Decision Links",
      items: [
        { name: "201 vs 304 Stainless Steel", href: "/knowledge-base/201-vs-304-stainless-steel" },
        { name: "How to Identify Real 304", href: "/knowledge-base/how-to-identify-real-304-stainless-steel" },
        { name: "430 Stainless Steel", href: "/grades/430-stainless-steel" },
      ],
      ctaHeading: "Need to confirm whether 201 is safe for this job?",
      ctaText: "Ask for Grade Review",
      ctaHref: "/contact#technical-review",
      ctaSecondaryText: "Open Grade Guides",
      ctaSecondaryHref: "/resources/stainless-steel-guides#material-guide",
    },
  },
  "304-stainless-steel": {
    eyebrow: "304 Decision Desk",
    title: "Use 304 as the baseline, but do not let it hide the service condition.",
    description:
      "304 / 304L is the normal starting point. The decision becomes stronger when the page quickly shows when to stay, when to write 304L, and when chloride makes the next grade necessary.",
    cards: [
      {
        title: "Where it fits",
        description:
          "General fabrication, mild food work, inland interiors, appliance parts, and broad supply programs.",
        signal: "Everyday baseline",
      },
      {
        title: "Where it stops",
        description:
          "Coastal exterior, hot chloride cleaning, brine, and seawater service are not places to force 304 by habit.",
        signal: "Chloride is the warning",
      },
      {
        title: "Next upgrade",
        description:
          "Use 304L for welded mild service. Move to 316L when chloride margin becomes part of the brief.",
        signal: "304L or 316L",
      },
    ],
    read: {
      eyebrow: "Upgrade line",
      title: "304 vs 316 Stainless Steel",
      description:
        "The best next read when chloride, coastal exposure, cleaning chemistry, or food service is driving doubt.",
      href: "/knowledge-base/304-vs-316-stainless-steel",
      cta: "Open comparison",
    },
    route: {
      title: "Open Grade Guides",
      href: "/resources/stainless-steel-guides#material-guide",
      description: "Use the guide track when grade choice, equivalents, and certificate wording need to line up.",
    },
    sidebar: {
      relatedTitle: "304 Decision Links",
      items: [
        { name: "304 vs 316 Stainless Steel", href: "/knowledge-base/304-vs-316-stainless-steel" },
        { name: "304 vs 304L vs 304H", href: "/knowledge-base/304-vs-304l-vs-304h" },
        { name: "316 / 316L Stainless Steel", href: "/grades/316l-stainless-steel" },
      ],
      ctaHeading: "Need to decide whether 304 is still enough?",
      ctaText: "Ask for Grade Review",
      ctaHref: "/contact#technical-review",
      ctaSecondaryText: "Open Grade Guides",
      ctaSecondaryHref: "/resources/stainless-steel-guides#material-guide",
    },
  },
  "316l-stainless-steel": {
    eyebrow: "316L Decision Desk",
    title: "Use 316L when chloride margin is real, not as a decorative upgrade.",
    description:
      "316L earns its place when 304 is too light for chloride, coastal air, stronger cleaning, or welded process service. The page should also make clear when 316L itself stops being enough.",
    cards: [
      {
        title: "Where it fits",
        description:
          "Coastal interiors and exteriors, welded hygienic equipment, mild chemical service, and chloride-bearing cleaning routes.",
        signal: "Mo-bearing upgrade",
      },
      {
        title: "Where it stops",
        description:
          "Warm seawater, severe crevices, high chloride plus stress, or sour-service language may outrun 316L.",
        signal: "Not seawater cover",
      },
      {
        title: "Next upgrade",
        description:
          "Move to 2205 when chloride, stress, pressure, or strength all become part of the same decision.",
        signal: "2205 duplex review",
      },
    ],
    read: {
      eyebrow: "Baseline split",
      title: "304 vs 316 Stainless Steel",
      description:
        "Use this when the buyer is still weighing 304 savings against chloride margin.",
      href: "/knowledge-base/304-vs-316-stainless-steel",
      cta: "Open comparison",
    },
    route: {
      title: "Open Grade Guides",
      href: "/resources/stainless-steel-guides#material-guide",
      description: "Keep Mo, L-grade, equivalents, and MTC wording close to the buying decision.",
    },
    sidebar: {
      relatedTitle: "316L Decision Links",
      items: [
        { name: "304 vs 316 Stainless Steel", href: "/knowledge-base/304-vs-316-stainless-steel" },
        { name: "Duplex vs Austenitic Stainless", href: "/knowledge-base/duplex-vs-austenitic-stainless-steel" },
        { name: "2205 Duplex Stainless Steel", href: "/grades/2205-duplex-stainless-steel" },
      ],
      ctaHeading: "Need to confirm whether 316L has enough margin?",
      ctaText: "Ask for Grade Review",
      ctaHref: "/contact#technical-review",
      ctaSecondaryText: "Open Grade Guides",
      ctaSecondaryHref: "/resources/stainless-steel-guides#material-guide",
    },
  },
  "430-stainless-steel": {
    eyebrow: "430 Decision Desk",
    title: "Use 430 for dry indoor value, not as a corrosion shortcut.",
    description:
      "430 is clear and useful when the project wants a ferritic indoor grade. The page should keep that value visible without letting it drift into wet, coastal, or food-service claims.",
    cards: [
      {
        title: "Where it fits",
        description:
          "Appliance skins, dry indoor trim, selected elevator panels, and mirror work where magnetism or nickel-free cost control helps.",
        signal: "Dry ferritic route",
      },
      {
        title: "Where it stops",
        description:
          "Wet cleaning, outdoor air, coastal humidity, food contact, and chloride service are not good places to stretch 430.",
        signal: "Moisture is the warning",
      },
      {
        title: "Next upgrade",
        description:
          "Move to 304 for broader indoor corrosion margin, or 316L when chloride exposure is truly part of the brief.",
        signal: "304 / 316L",
      },
    ],
    read: {
      eyebrow: "Mirror split",
      title: "304 or 430 for Mirror Panels?",
      description:
        "Use this when the debate is indoor decorative value versus a safer installed-surface choice.",
      href: "/knowledge-base/304-vs-430-mirror-panels",
      cta: "Open comparison",
    },
    route: {
      title: "Open Grade Guides",
      href: "/resources/stainless-steel-guides#material-guide",
      description: "Keep magnetic behavior, equivalents, and indoor-use notes close to the quote.",
    },
    sidebar: {
      relatedTitle: "430 Decision Links",
      items: [
        { name: "304 or 430 for Mirror Panels?", href: "/knowledge-base/304-vs-430-mirror-panels" },
        { name: "304 vs 430 Kitchen Equipment", href: "/knowledge-base/304-vs-430-kitchen-equipment" },
        { name: "304 / 304L Stainless Steel", href: "/grades/304-stainless-steel" },
      ],
      ctaHeading: "Need to confirm whether 430 stays inside its dry-use boundary?",
      ctaText: "Ask for Grade Review",
      ctaHref: "/contact#technical-review",
      ctaSecondaryText: "Open Grade Guides",
      ctaSecondaryHref: "/resources/stainless-steel-guides#material-guide",
    },
  },
  "2205-duplex-stainless-steel": {
    eyebrow: "2205 Decision Desk",
    title: "Use 2205 when the problem is chloride plus stress, strength, or pressure.",
    description:
      "2205 should feel like a controlled escalation from 316L, not a generic expensive grade. The page should help buyers see when duplex earns the extra control and when an even higher route may be needed.",
    cards: [
      {
        title: "Where it fits",
        description:
          "Brine, desalination, chemical process lines, pressure weight reduction, coastal splash zones, and chloride plus stress cases.",
        signal: "Duplex step-up",
      },
      {
        title: "Where it stops",
        description:
          "Severe brine, warm seawater immersion, high-temperature service, or specialist sour routes may need a higher alloy or qualification path.",
        signal: "Not universal seawater cover",
      },
      {
        title: "Next upgrade",
        description:
          "Move beyond 2205 only when service data, OEM qualification, or the design code clearly pushes the boundary.",
        signal: "2507 / higher alloy review",
      },
    ],
    read: {
      eyebrow: "Family split",
      title: "Duplex vs Austenitic Stainless Steel",
      description:
        "Use this when the choice is no longer 316L price, but strength, SCC risk, and chloride margin together.",
      href: "/knowledge-base/duplex-vs-austenitic-stainless-steel",
      cta: "Open guide",
    },
    route: {
      title: "Open Grade Guides",
      href: "/resources/stainless-steel-guides#material-guide",
      description: "Keep S32205, strength, chemistry, and certificate wording close to the release decision.",
    },
    sidebar: {
      relatedTitle: "2205 Decision Links",
      items: [
        { name: "Duplex vs Austenitic Stainless", href: "/knowledge-base/duplex-vs-austenitic-stainless-steel" },
        { name: "2205 Duplex Chemical Composition", href: "/knowledge-base/2205-duplex-chemical-composition" },
        { name: "316 / 316L Stainless Steel", href: "/grades/316l-stainless-steel" },
      ],
      ctaHeading: "Need to confirm whether 2205 is justified or enough?",
      ctaText: "Ask for Duplex Review",
      ctaHref: "/contact#technical-review",
      ctaSecondaryText: "Open Grade Guides",
      ctaSecondaryHref: "/resources/stainless-steel-guides#material-guide",
    },
  },
} as const;

type GradeRouteSlug = keyof typeof gradeRouteConfigs;

const gradeVisualProof: Record<
  GradeRouteSlug,
  {
    src: string;
    alt: string;
    label: string;
    caption: string;
    cues: readonly string[];
  }
> = {
  "201-stainless-steel": {
    src: "/images/surfaces/ba/hero.webp",
    alt: "Bright decorative stainless steel surface used as an indoor grade selection cue",
    label: "Indoor decorative cue",
    caption:
      "201 should stay close to controlled interior finishes, not wet service or chloride-bearing work.",
    cues: ["Dry service named", "Finish disclosed", "No quiet 304 substitute"],
  },
  "304-stainless-steel": {
    src: "/images/products/sheet/hero.webp",
    alt: "Stainless steel sheet and plate stock used for 304 grade selection",
    label: "Baseline stock cue",
    caption:
      "304 works best when form, finish, film, and mild service are kept in the same order conversation.",
    cues: ["Mild service", "304L when welded", "Upgrade when chloride appears"],
  },
  "316l-stainless-steel": {
    src: "/images/products/tube/hero.webp",
    alt: "Stainless steel tube and pipe stock used for 316L welded-service selection",
    label: "Welded service cue",
    caption:
      "316L earns its place when chloride margin and welded release have to travel together.",
    cues: ["Chloride margin", "Welded service", "Duplex review when stressed"],
  },
  "430-stainless-steel": {
    src: "/images/surfaces/no8-mirror/hero.webp",
    alt: "Mirror stainless steel surface used for 430 indoor decorative grade selection",
    label: "Dry indoor cue",
    caption:
      "430 can be a useful finish-led indoor route when the project does not need 304-level reserve.",
    cues: ["Magnetic value", "Indoor finish route", "Step up when wet"],
  },
  "2205-duplex-stainless-steel": {
    src: "/images/applications/chemical-petrochemical/hero.webp",
    alt: "Chemical service stainless steel route used for 2205 duplex selection",
    label: "Chloride plus strength cue",
    caption:
      "2205 belongs where chloride, stress, pressure, or wall-thickness logic all push beyond 316L.",
    cues: ["Heat chemistry", "Weld controls", "Service data before upgrade"],
  },
};

export function isGradeRouteSlug(slug: string): slug is GradeRouteSlug {
  return slug in gradeRouteConfigs;
}

export function getGradeSidebarConfig(
  slug: string
): GradeSidebarConfig | undefined {
  if (!isGradeRouteSlug(slug)) return undefined;

  const sidebar = gradeRouteConfigs[slug].sidebar;
  return {
    ...sidebar,
    items: [...sidebar.items],
  };
}

export function GradeRouteDesk({ slug }: { slug: GradeRouteSlug }) {
  const config = gradeRouteConfigs[slug];
  const primaryRead = config.read;
  const primaryRoute = config.route;
  const visualProof = gradeVisualProof[slug];

  return (
    <section className="rounded-card-lg border border-border bg-gradient-to-br from-[#f4f0e7] via-white to-[#edf2ef] p-6 shadow-sm shadow-brand-dark/5 sm:p-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
          {config.eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-brand-dark sm:text-3xl">
          {config.title}
        </h2>
        <p className="mt-3 text-base leading-7 text-text-secondary">
          {config.description}
        </p>
      </div>

      <div className="mt-7 grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(280px,0.95fr)] lg:items-stretch">
        <figure className="relative min-h-[16rem] overflow-hidden rounded-card-md border border-cream-border bg-[#d8d0c2] shadow-[0_18px_54px_rgba(13,20,27,0.08)]">
          <Image
            src={visualProof.src}
            alt={visualProof.alt}
            fill
            className="object-cover saturate-[0.9] contrast-[1.03]"
            sizes="(min-width: 1024px) 34rem, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.02)_0%,rgba(13,20,27,0.58)_100%)]" />
          <figcaption className="absolute bottom-0 left-0 max-w-xl p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              {visualProof.label}
            </p>
            <p className="mt-2 text-sm leading-6 text-white/82">
              {visualProof.caption}
            </p>
          </figcaption>
        </figure>

        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {visualProof.cues.map((cue) => (
            <div
              key={cue}
              className="rounded-card-md border border-cream-border bg-white/82 p-4 shadow-[0_12px_34px_rgba(13,20,27,0.045)]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-light">
                Confirm
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-brand-dark">
                {cue}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(280px,0.75fr)]">
        <article className="rounded-card-md border border-border bg-white/88 p-5 backdrop-blur-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-text-light">
            Decision notes
          </p>
          <div className="mt-4 divide-y divide-cream-border/80">
            {config.cards.map((card) => (
              <div key={card.title} className="py-4 first:pt-0 last:pb-0">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="text-base font-semibold text-brand-dark">
                    {card.title}
                  </h3>
                  <span className="w-fit rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-dark">
                    {card.signal}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-card-md border border-brand-dark/10 bg-brand-dark p-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
            Next step
          </p>
          <div className="mt-4 space-y-3">
            <Link
              href={primaryRead.href}
              className="block rounded-card-sm border border-white/10 bg-white/[0.06] p-4 transition hover:border-brand-accent/45 hover:bg-white/[0.1]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/48">
                {primaryRead.eyebrow}
              </p>
              <h3 className="mt-2 text-base font-semibold leading-6 text-white">
                {primaryRead.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/68">
                {primaryRead.description}
              </p>
              <span className="mt-3 inline-flex text-sm font-semibold text-brand-accent">
                {primaryRead.cta}
              </span>
            </Link>

            <Link
              href={primaryRoute.href}
              className="block rounded-card-sm border border-white/10 bg-white/[0.06] p-4 transition hover:border-brand-accent/45 hover:bg-white/[0.1]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/48">
                Release note
              </p>
              <h3 className="mt-2 text-base font-semibold leading-6 text-white">
                {primaryRoute.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/68">
                {primaryRoute.description}
              </p>
              <span className="mt-3 inline-flex text-sm font-semibold text-brand-accent">
                Open compact reference
              </span>
            </Link>
          </div>
          <Link
            href="/contact#technical-review"
            className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-brand-accent/50 px-4 py-3 text-sm font-semibold text-brand-accent transition hover:bg-brand-accent hover:text-brand-dark"
          >
            Ask for grade review
          </Link>
          <p className="mt-3 text-sm leading-6 text-white/62">
            Send the service condition before the grade is locked. A short review usually catches the risky words before the PO hardens.
          </p>
        </article>
      </div>
    </section>
  );
}
