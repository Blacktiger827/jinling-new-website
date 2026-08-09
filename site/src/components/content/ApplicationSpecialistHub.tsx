import Link from "next/link";

const specialistHubs = {
  "medical-pharmaceutical": {
    eyebrow: "Clean-Service Route",
    title: "Keep validation, cleanability, and instrument stock in separate lanes.",
    description:
      "Medical and pharmaceutical stainless gets clearer when the route is separated early: what touches product, what only sits in a cleanroom, and what belongs to instrument material logic.",
    checks: [
      {
        title: "Validated contact lines",
        description:
          "316L sanitary tube, interior finish, weld condition, and traceability need to travel as one package.",
        recommendation: "316L + sanitary route",
      },
      {
        title: "Cleanroom sheet work",
        description:
          "Panels, housings, and benches need cleanable finishes, but not every non-wetted part needs pharma tube language.",
        recommendation: "304 / 316L by room",
      },
      {
        title: "Instrument stock",
        description:
          "17-4 PH, 440C, and precision bar decisions should stay outside WFI or bioprocess piping assumptions.",
        recommendation: "Separate bar route",
      },
    ],
    reads: [
      {
        eyebrow: "Audit route",
        title: "Pharmaceutical Equipment Stainless",
        description:
          "Use this when the open issue is Ra, traceability, sanitary tube, and what the audit will ask for later.",
        href: "/knowledge-base/pharmaceutical-equipment-stainless-steel",
      },
      {
        eyebrow: "Device stock",
        title: "Medical Device Stainless",
        description:
          "A better path when the product is a device, frame, or instrument instead of a clean-process pipe.",
        href: "/knowledge-base/stainless-steel-medical-devices",
      },
      {
        eyebrow: "Surface proof",
        title: "Surface Roughness and Corrosion",
        description:
          "Helpful when the project is using finish numbers as proof and needs the limits stated clearly.",
        href: "/knowledge-base/surface-roughness-ra-corrosion-resistance",
      },
    ],
  },
  "chemical-petrochemical": {
    eyebrow: "Chemical-Service Route",
    title: "Read the stream before you settle the alloy.",
    description:
      "Chemical service should not end with a generic grade recommendation. Pin down the stream, the crevice risk, and whether duplex or a higher alloy is truly justified.",
    checks: [
      {
        title: "Mild stable media",
        description:
          "304L or 316L can be a reasonable screen only after contaminants, temperature, and cleaning chemistry are known.",
        recommendation: "304L / 316L screen",
      },
      {
        title: "Chloride plus pressure",
        description:
          "When chloride, strength, wall, and proof language move together, 2205 often becomes the cleaner conversation.",
        recommendation: "2205 review",
      },
      {
        title: "Mixed acid boundary",
        description:
          "Hydrochloric, hydrofluoric, or tougher sulfuric bands may need higher alloy or lined-system logic.",
        recommendation: "Do not force 316L",
      },
    ],
    reads: [
      {
        eyebrow: "Media match",
        title: "Chemical Environments",
        description:
          "Use this when the stream chemistry is still too broad to release as one stainless line item.",
        href: "/knowledge-base/stainless-steel-chemical-environments",
      },
      {
        eyebrow: "Failure point",
        title: "Crevice Corrosion",
        description:
          "A practical read for flange faces, gasketed joints, dead legs, and the places open-surface data misses.",
        href: "/knowledge-base/crevice-corrosion-stainless-steel",
      },
      {
        eyebrow: "Step-up grade",
        title: "2205 Duplex Stainless Steel",
        description:
          "Use this when the decision is no longer 316L price, but chloride margin, strength, and proof language.",
        href: "/grades/2205-duplex-stainless-steel",
      },
    ],
  },
  "oil-gas": {
    eyebrow: "Qualification Route",
    title: "Let the service gate decide what the material can promise.",
    description:
      "Oil and gas decisions need more than a grade list. These checkpoints keep the route tied to sweet or sour service, document proof, and the limits of material supply.",
    checks: [
      {
        title: "Sweet topside work",
        description:
          "316L may stay in view, but only after H2S, chloride, pressure, temperature, and proof requirements are confirmed.",
        recommendation: "316L screen",
      },
      {
        title: "Sour-service review",
        description:
          "NACE / ISO 15156, hardness, heat treatment, PMI, and PREN language should be settled before release.",
        recommendation: "2205 by route",
      },
      {
        title: "Severe or subsea service",
        description:
          "Specialist CRA and OEM qualification paths need to lead; stock supply supports them, not replaces them.",
        recommendation: "Qualification first",
      },
    ],
    reads: [
      {
        eyebrow: "Duplex step",
        title: "2205 Duplex Stainless Steel",
        description:
          "The natural next page when strength, chloride margin, and qualification language start to matter together.",
        href: "/grades/2205-duplex-stainless-steel",
      },
      {
        eyebrow: "Inspection route",
        title: "NDT Method Selection",
        description:
          "Use this when the order needs UT, ET, PT, or radiography language without turning it into a slogan.",
        href: "/knowledge-base/ndt-method-selection-stainless-steel",
      },
      {
        eyebrow: "Document proof",
        title: "How to Read an MTC",
        description:
          "A useful check before accepting chemistry, heat number, standard, and release documents at face value.",
        href: "/knowledge-base/how-to-read-mill-test-certificate",
      },
    ],
  },
  "water-treatment-desalination": {
    eyebrow: "Chloride Route",
    title: "Follow the water until the chloride becomes local.",
    description:
      "Water treatment decisions become clearer when the route shows where the water sits in the train, where crevices form, and when brine stops being a 316L conversation.",
    checks: [
      {
        title: "Low-chloride duty",
        description:
          "316L can be a clean starting point when disinfectant, temperature, and cleaning exposure stay controlled.",
        recommendation: "316L baseline",
      },
      {
        title: "Seawater-side service",
        description:
          "Intake, pretreatment, and warm chloride exposure often move the job into duplex review sooner than buyers expect.",
        recommendation: "2205 review",
      },
      {
        title: "Brine and hot crevices",
        description:
          "The gasket face or crevice may see a harsher chloride condition than the bulk stream name suggests.",
        recommendation: "2507 / higher review",
      },
    ],
    reads: [
      {
        eyebrow: "System map",
        title: "Water Treatment & Desalination",
        description:
          "Use this when the job needs the whole ladder from potable water to seawater to concentrate.",
        href: "/knowledge-base/stainless-steel-water-treatment-desalination",
      },
      {
        eyebrow: "Corrosion signal",
        title: "Pitting Corrosion",
        description:
          "A short read for the moment chloride, temperature, and passive-film breakdown become the real concern.",
        href: "/knowledge-base/what-is-pitting-corrosion",
      },
      {
        eyebrow: "Salt exposure",
        title: "Saltwater Stainless Steel",
        description:
          "Useful when the question is coastal, seawater, or marine-adjacent rather than ordinary plant water.",
        href: "/knowledge-base/saltwater-stainless-steel",
      },
    ],
  },
  "automotive-exhaust": {
    eyebrow: "Heat-Fatigue Route",
    title: "Map the exhaust before choosing the ferritic grade.",
    description:
      "Automotive exhaust decisions should not end as a list of 409, 439, 441, and 444. Locate heat, fatigue, condensate, and weld risk by component before the grade is frozen.",
    checks: [
      {
        title: "Cooler rear sections",
        description:
          "409 or 439 can make sense where launch cost, condensate, and basic oxidation margin are the main pressures.",
        recommendation: "409 / 439",
      },
      {
        title: "Hot front sections",
        description:
          "Converter-adjacent parts need stronger heat-cycling and weld-fatigue logic before thickness is frozen.",
        recommendation: "441 review",
      },
      {
        title: "Longer-life duty",
        description:
          "Condensate chemistry, road salt, and durability targets can move the route toward 444 or stronger review.",
        recommendation: "444 / higher review",
      },
    ],
    reads: [
      {
        eyebrow: "System view",
        title: "Automotive Applications",
        description:
          "Use this when the exhaust choice needs to sit inside the wider automotive stainless family.",
        href: "/knowledge-base/stainless-steel-automotive-applications",
      },
      {
        eyebrow: "Heat limit",
        title: "High-Temperature Stainless",
        description:
          "A cleaner reference for oxidation, creep, and where temperature starts governing the grade choice.",
        href: "/knowledge-base/high-temperature-stainless-steel",
      },
      {
        eyebrow: "Weld risk",
        title: "How to Weld Stainless Steel",
        description:
          "Helpful when early failure is likely to start at the HAZ rather than the base metal coupon.",
        href: "/knowledge-base/how-to-weld-stainless-steel",
      },
    ],
  },
} as const;

type SpecialistApplicationSlug = keyof typeof specialistHubs;

function isSpecialistApplication(slug: string): slug is SpecialistApplicationSlug {
  return slug in specialistHubs;
}

export function ApplicationSpecialistHub({ slug }: { slug: string }) {
  if (!isSpecialistApplication(slug)) return null;

  const config = specialistHubs[slug];

  return (
    <section className="rounded-card-lg border border-border bg-gradient-to-br from-[#eef2ef] via-white to-[#f6f1e8] p-6 shadow-sm shadow-brand-dark/5 sm:p-8">
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

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {config.checks.map((check) => (
          <article
            key={check.title}
            className="flex h-full flex-col rounded-card-md border border-border bg-white/85 p-5 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold text-brand-dark">
              {check.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">
              {check.description}
            </p>
            <div className="mt-5 inline-flex w-fit rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-dark">
              {check.recommendation}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-card-md border border-cream-border bg-white/80 p-5">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-light">
              Next reads
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-dark">
              Use the reference that matches the remaining doubt.
            </h3>
          </div>
          <Link
            href="/contact#technical-review"
            className="text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent-hover"
          >
            Ask for technical review
          </Link>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          {config.reads.map((read) => (
            <Link
              key={read.href}
              href={read.href}
              className="flex h-full flex-col rounded-card-sm border border-cream-border-soft bg-cream-50 px-4 py-4 transition hover:border-brand-accent/50 hover:bg-white"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-light">
                {read.eyebrow}
              </p>
              <h4 className="mt-2 text-sm font-semibold leading-6 text-brand-dark">
                {read.title}
              </h4>
              <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">
                {read.description}
              </p>
              <span className="mt-4 text-sm font-semibold text-brand-accent">
                Read next
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
