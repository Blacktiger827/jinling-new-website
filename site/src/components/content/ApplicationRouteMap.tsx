import Image from "next/image";
import Link from "next/link";

interface RoutePoint {
  title: string;
  description: string;
  cue: string;
}

interface RouteLink {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
}

interface ApplicationRouteConfig {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  proofLabel: string;
  proofCaption: string;
  nextTitle: string;
  points: readonly RoutePoint[];
  links: readonly RouteLink[];
}

const applicationRoutes = {
  "kitchen-equipment": {
    eyebrow: "Kitchen zone map",
    title: "Do not let one grade spill across the whole kitchen.",
    description:
      "A good kitchen schedule separates wet work, visible touch, and dry sheltered panels before price or finish names take over.",
    image: "/images/applications/kitchen-equipment/scene-1.webp",
    imageAlt: "Commercial kitchen stainless steel worktops and equipment",
    proofLabel: "Wet, visible, dry",
    proofCaption: "The same room can carry three different stainless decisions.",
    nextTitle: "Keep the next read tied to the kitchen zone in question.",
    points: [
      {
        title: "Wet core",
        description: "Prep counters, splash areas, sinks, and wash stations begin with 304 logic.",
        cue: "304 first",
      },
      {
        title: "Chloride corner",
        description: "Brine, seafood, harsh cleaners, and coastal humidity deserve a 316L review.",
        cue: "Target the upgrade",
      },
      {
        title: "Dry or touched skin",
        description: "430, 201, No.4, BA, or AFP only make sense after the use zone is named.",
        cue: "Finish follows duty",
      },
    ],
    links: [
      {
        eyebrow: "Alloy split",
        title: "304 vs 430 for Kitchen Equipment",
        description: "Use this when dry appliance skins are being mixed with true wet-zone parts.",
        href: "/knowledge-base/304-vs-430-kitchen-equipment",
      },
      {
        eyebrow: "Sink upgrade",
        title: "304 vs 316L Commercial Sinks",
        description: "The cleaner path for wash, brine, seafood, and chloride-heavy cleaning areas.",
        href: "/knowledge-base/304-vs-316l-commercial-kitchen-sinks",
      },
      {
        eyebrow: "Finish fit",
        title: "2B, No.4, or AFP for Kitchens",
        description: "Use this when a finish is about to be copied across unlike kitchen zones.",
        href: "/knowledge-base/2b-vs-no4-vs-afp-kitchen-equipment",
      },
    ],
  },
  "food-beverage": {
    eyebrow: "Hygiene split",
    title: "Separate product contact from utility service before the spec gets noisy.",
    description:
      "Food and beverage projects become easier when sanitary contact, utility piping, and audit paperwork stop sharing one vague material note.",
    image: "/images/applications/food-beverage/scene-1.webp",
    imageAlt: "Food and beverage stainless steel tube and line stock",
    proofLabel: "Contact first",
    proofCaption: "Product-contact surfaces and utility lines should not share one loose note.",
    nextTitle: "Choose the read by contact surface, tube route, or weld risk.",
    points: [
      {
        title: "Product-contact route",
        description: "Grade, A270 tube, interior finish, weld quality, and documents should travel together.",
        cue: "304L / 316L + A270",
      },
      {
        title: "Utility route",
        description: "Steam, glycol, CIP supply, and support lines may need pressure logic more than sanitary language.",
        cue: "Do not over-spec",
      },
      {
        title: "Audit route",
        description: "Ra, heat traceability, hydro result, and cleaning proof need to be named before release.",
        cue: "Proof survives audit",
      },
    ],
    links: [
      {
        eyebrow: "Material choice",
        title: "Food-Grade Stainless Steel",
        description: "A practical route for 304, 316L, finish, and food-contact expectations.",
        href: "/knowledge-base/food-grade-stainless-steel",
      },
      {
        eyebrow: "Tube route",
        title: "Sanitary Tube",
        description: "Use this when A270, wall, finish, and end protection become the real decision.",
        href: "/products/stainless-steel-sanitary-tube",
      },
      {
        eyebrow: "Weld risk",
        title: "Food-Grade Pipe Welding",
        description: "The short path when heat tint, purge, and hygienic weld release matter most.",
        href: "/knowledge-base/stainless-pipe-welding-food-industrial",
      },
    ],
  },
  architecture: {
    eyebrow: "Exposure map",
    title: "The finish schedule should not lead the exposure decision.",
    description:
      "Architecture pages work better when inland, coastal, splash, and feature-panel conditions are visible before the finish list appears.",
    image: "/images/applications/architecture/scene-1.webp",
    imageAlt: "Architectural stainless steel curved surface panel",
    proofLabel: "Weather then finish",
    proofCaption: "The panel face only makes sense after the exposure zone is known.",
    nextTitle: "Open the reference that fits the exposure doubt.",
    points: [
      {
        title: "Interior feature",
        description: "Mirror, hairline, and AFP can carry a design brief where weather is controlled.",
        cue: "Appearance route",
      },
      {
        title: "Exterior inland",
        description: "304 can work when maintenance, finish, and exposure are honestly mapped.",
        cue: "Do not guess coastal",
      },
      {
        title: "Coastal or splash",
        description: "316L or duplex review belongs before the panel finish is frozen.",
        cue: "Grade first",
      },
    ],
    links: [
      {
        eyebrow: "Specifier route",
        title: "Architectural Surface Selection",
        description: "A cleaner finish decision after exposure, cleaning, and visible wear are known.",
        href: "/knowledge-base/architectural-ss-surface-selection",
      },
      {
        eyebrow: "Coastal rule",
        title: "304 vs 316 for Coastal Projects",
        description: "Use this before saving cost by keeping 304 too close to chloride exposure.",
        href: "/knowledge-base/304-316-coastal-specifier-framework",
      },
      {
        eyebrow: "Mirror route",
        title: "8K Mirror Finish",
        description: "Open this when the project needs landmark reflection with real release controls.",
        href: "/surfaces/stainless-steel-8k-mirror-finish",
      },
    ],
  },
  "elevator-decoration": {
    eyebrow: "Cab touch map",
    title: "An elevator finish ages by where people touch it.",
    description:
      "Cab panels, door skins, kick zones, and feature ceilings do not need one decorative answer. They need a touch map.",
    image: "/images/applications/elevator-decoration/scene-1.webp",
    imageAlt: "Stainless steel elevator interior with dark wall panels",
    proofLabel: "Touch, mirror, replace",
    proofCaption: "Cab stainless is judged every day by hands, light, and replacement panels.",
    nextTitle: "Keep the next read close to the touch zone.",
    points: [
      {
        title: "High-touch panels",
        description: "Hairline, No.4, and AFP usually age better than a decorative finish copied everywhere.",
        cue: "Cleanability route",
      },
      {
        title: "Feature accents",
        description: "Mirror and PVD work best away from constant hand contact and repair risk.",
        cue: "Protect the highlight",
      },
      {
        title: "Building environment",
        description: "Coastal, humid, or pool-adjacent buildings should move grade before finish approval.",
        cue: "304 / 316L review",
      },
    ],
    links: [
      {
        eyebrow: "System view",
        title: "Elevator Finish & Grade Selection",
        description: "Use this when touch, mirror, AFP, PVD, and grade choice need one joined view.",
        href: "/knowledge-base/stainless-steel-elevator-decoration",
      },
      {
        eyebrow: "Mirror proof",
        title: "8K Mirror Finish",
        description: "A better route when the cab wants reflection and the release risk is real.",
        href: "/surfaces/stainless-steel-8k-mirror-finish",
      },
      {
        eyebrow: "Texture choice",
        title: "No.4 vs Hairline",
        description: "Open this when daily touch and wiping matter more than the sample board.",
        href: "/knowledge-base/no4-vs-hairline-finish",
      },
    ],
  },
  "chemical-petrochemical": {
    eyebrow: "Stream route",
    title: "Read the actual stream before settling the alloy.",
    description:
      "Chemical service rarely fails because someone forgot the acid name. It fails when contaminants, temperature, and crevice risk were treated as side notes.",
    image: "/images/applications/chemical-petrochemical/scene-1.webp",
    imageAlt: "Chemical plant stainless steel exterior process vessels and ducts",
    proofLabel: "Medium, contaminant, heat",
    proofCaption: "The stream details matter more than the equipment name.",
    nextTitle: "Use one reference to narrow the service risk.",
    points: [
      {
        title: "Mild stable service",
        description: "304L or 316L can stay in view only after contaminants and cleaning chemistry are known.",
        cue: "Screen first",
      },
      {
        title: "Chloride plus pressure",
        description: "2205 often enters when chloride, strength, wall, and proof language move together.",
        cue: "Duplex review",
      },
      {
        title: "Mixed-acid boundary",
        description: "Some hydrochloric, hydrofluoric, or sulfuric bands are no longer an ordinary stainless answer.",
        cue: "Do not force 316L",
      },
    ],
    links: [
      {
        eyebrow: "Media match",
        title: "Chemical Environments",
        description: "Use this when the stream is still too broad for one stainless line item.",
        href: "/knowledge-base/stainless-steel-chemical-environments",
      },
      {
        eyebrow: "Failure point",
        title: "Crevice Corrosion",
        description: "A practical read for flange faces, dead legs, gasketed joints, and stagnant zones.",
        href: "/knowledge-base/crevice-corrosion-stainless-steel",
      },
      {
        eyebrow: "Step-up grade",
        title: "2205 Duplex Stainless Steel",
        description: "The next page when chloride margin and strength start to govern the order.",
        href: "/grades/2205-duplex-stainless-steel",
      },
    ],
  },
  "oil-gas": {
    eyebrow: "Qualification gate",
    title: "The service gate decides what the material can promise.",
    description:
      "Oil and gas pages need a serious first read: sweet, sour, splash, or specialist service before any grade list looks credible.",
    image: "/images/applications/oil-gas/scene-1.webp",
    imageAlt: "Large stainless steel pipes staged for oil and gas service",
    proofLabel: "Sweet to sour",
    proofCaption: "Pipe supply has to stay inside the qualification window.",
    nextTitle: "Stay inside the qualification path before quoting.",
    points: [
      {
        title: "Sweet topside",
        description: "316L may remain a screen after H2S, chloride, temperature, pressure, and proof are checked.",
        cue: "Limited window",
      },
      {
        title: "Sour-service review",
        description: "NACE / ISO 15156, hardness, heat treatment, PMI, and PREN should be named early.",
        cue: "Qualification first",
      },
      {
        title: "Severe or subsea",
        description: "Specialist CRA and OEM qualification paths lead; supply supports the route, not replaces it.",
        cue: "Do not overpromise",
      },
    ],
    links: [
      {
        eyebrow: "Duplex step",
        title: "2205 Duplex Stainless Steel",
        description: "Open this when strength, chloride margin, and qualification language meet.",
        href: "/grades/2205-duplex-stainless-steel",
      },
      {
        eyebrow: "Inspection route",
        title: "NDT Method Selection",
        description: "Use this before UT, ET, PT, or radiography becomes vague sales language.",
        href: "/knowledge-base/ndt-method-selection-stainless-steel",
      },
      {
        eyebrow: "Document proof",
        title: "How to Read an MTC",
        description: "A useful check before accepting chemistry, heat number, and release documents.",
        href: "/knowledge-base/how-to-read-mill-test-certificate",
      },
    ],
  },
  "water-treatment-desalination": {
    eyebrow: "Chloride ladder",
    title: "Follow the water until the chloride becomes local.",
    description:
      "Water treatment decisions sharpen when the page shows feed, seawater, concentrate, and gasket crevices as a route, not a grade list.",
    image: "/images/applications/water-treatment-desalination/scene-1.webp",
    imageAlt: "Water treatment stainless steel tanks inside a process room",
    proofLabel: "Feed to brine",
    proofCaption: "The same plant can move from easy water to local chloride trouble.",
    nextTitle: "Read the water path before fixing the grade.",
    points: [
      {
        title: "Potable or low chloride",
        description: "316L can work where disinfectant, temperature, and cleaning exposure stay controlled.",
        cue: "Baseline only",
      },
      {
        title: "Seawater side",
        description: "Intake, pretreatment, and warm chloride exposure often move the route into 2205 review.",
        cue: "Duplex appears",
      },
      {
        title: "Brine and crevice",
        description: "RO concentrate and gasket faces can become harsher than the bulk water name suggests.",
        cue: "2507 / higher review",
      },
    ],
    links: [
      {
        eyebrow: "System map",
        title: "Water Treatment & Desalination",
        description: "Use this for the ladder from potable water to seawater and concentrate.",
        href: "/knowledge-base/stainless-steel-water-treatment-desalination",
      },
      {
        eyebrow: "Corrosion signal",
        title: "Pitting Corrosion",
        description: "The short read for chloride, temperature, and passive-film breakdown.",
        href: "/knowledge-base/what-is-pitting-corrosion",
      },
      {
        eyebrow: "Salt exposure",
        title: "Saltwater Stainless Steel",
        description: "Helpful when the service is marine-adjacent rather than ordinary plant water.",
        href: "/knowledge-base/saltwater-stainless-steel",
      },
    ],
  },
  "medical-pharmaceutical": {
    eyebrow: "Validation route",
    title: "Do not mix pharma piping, cleanroom sheet, and instrument stock.",
    description:
      "Clean-service material pages feel credible when audit proof, non-wetted sheet work, and instrument alloys stay in separate lanes.",
    image: "/images/applications/medical-pharmaceutical/scene-1.webp",
    imageAlt: "Polished stainless steel tube stock for clean-service equipment",
    proofLabel: "Audit trail",
    proofCaption: "The material route has to be readable when validation asks for proof.",
    nextTitle: "Keep validation, device stock, and finish proof separate.",
    points: [
      {
        title: "Product-contact lines",
        description: "316L tube, interior finish, weld condition, and traceability move as one package.",
        cue: "Sanitary route",
      },
      {
        title: "Cleanroom sheet",
        description: "Panels and housings need cleanability without pretending every part is pharma tube.",
        cue: "Sheet logic",
      },
      {
        title: "Instrument stock",
        description: "17-4 PH, 440C, and precision bar belong outside WFI or bioprocess assumptions.",
        cue: "Separate route",
      },
    ],
    links: [
      {
        eyebrow: "Audit route",
        title: "Pharmaceutical Equipment Stainless",
        description: "Use this when Ra, traceability, and sanitary tube proof are still open.",
        href: "/knowledge-base/pharmaceutical-equipment-stainless-steel",
      },
      {
        eyebrow: "Device stock",
        title: "Medical Device Stainless",
        description: "A better route for device, frame, or instrument material decisions.",
        href: "/knowledge-base/stainless-steel-medical-devices",
      },
      {
        eyebrow: "Surface proof",
        title: "Surface Roughness and Corrosion",
        description: "Open this when finish numbers are being used as proof without context.",
        href: "/knowledge-base/surface-roughness-ra-corrosion-resistance",
      },
    ],
  },
  "automotive-exhaust": {
    eyebrow: "Heat-zone ladder",
    title: "Map heat and fatigue before choosing the ferritic grade.",
    description:
      "Exhaust pages should not read like a list of 409, 439, 441, and 444. The component zone needs to lead.",
    image: "/images/applications/automotive-exhaust/scene-1.webp",
    imageAlt: "Curved stainless steel exhaust pipe section",
    proofLabel: "Heat, weld, condensate",
    proofCaption: "Exhaust decisions start with the component's temperature and fatigue life.",
    nextTitle: "Choose the reference by the failure mode, not the grade name.",
    points: [
      {
        title: "Cool rear sections",
        description: "409 or 439 can fit where cost, condensate, and basic oxidation margin are the pressure.",
        cue: "Value route",
      },
      {
        title: "Hot front sections",
        description: "Converter-adjacent parts need heat-cycling and weld-fatigue logic before thickness is frozen.",
        cue: "441 review",
      },
      {
        title: "Longer-life duty",
        description: "Road salt, condensate chemistry, and durability targets can move the route toward 444.",
        cue: "Higher margin",
      },
    ],
    links: [
      {
        eyebrow: "System view",
        title: "Automotive Applications",
        description: "Use this when the exhaust decision sits inside a wider automotive stainless program.",
        href: "/knowledge-base/stainless-steel-automotive-applications",
      },
      {
        eyebrow: "Heat limit",
        title: "High-Temperature Stainless",
        description: "A better reference for oxidation, creep, and temperature-led grade choices.",
        href: "/knowledge-base/high-temperature-stainless-steel",
      },
      {
        eyebrow: "Weld risk",
        title: "How to Weld Stainless Steel",
        description: "Helpful when the likely failure starts at the HAZ, not the base metal coupon.",
        href: "/knowledge-base/how-to-weld-stainless-steel",
      },
    ],
  },
} as const satisfies Record<string, ApplicationRouteConfig>;

function getRoute(slug: string) {
  return applicationRoutes[slug as keyof typeof applicationRoutes];
}

export function ApplicationRouteMap({ slug }: { slug: string }) {
  const config = getRoute(slug);
  if (!config) return null;

  return (
    <section className="overflow-hidden rounded-[1.45rem] border border-[#d8cbb8] bg-[linear-gradient(145deg,#fbfaf6_0%,#f0e5d6_100%)] shadow-[0_18px_54px_rgba(13,20,27,0.075)]">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[17rem] bg-[#d8d0c2]">
          <Image
            src={config.image}
            alt={config.imageAlt}
            fill
            className="object-cover saturate-[0.9] contrast-[1.03]"
            sizes="(min-width: 1024px) 34rem, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.04)_0%,rgba(13,20,27,0.46)_100%)]" />
          <div className="absolute left-0 top-0 h-full w-1 bg-brand-accent" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              {config.proofLabel}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-white/84">
              {config.proofCaption}
            </p>
          </div>
        </div>

        <div className="p-5 sm:p-6 lg:p-7">
          <div className="flex items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
              {config.eyebrow}
            </p>
            <span className="h-px flex-1 bg-[#d8cbb8]" aria-hidden="true" />
          </div>
          <h2 className="mt-3 max-w-2xl text-2xl font-semibold leading-tight tracking-[-0.02em] text-brand-dark sm:text-3xl">
            {config.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-text-secondary">
            {config.description}
          </p>

          <div className="mt-6 grid gap-3">
            {config.points.map((point, index) => (
              <article
                key={point.title}
                className="grid gap-3 rounded-card-md border border-[#d8cbb8] bg-white/78 p-4 sm:grid-cols-[3rem_1fr_auto] sm:items-start"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-dark text-xs font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-brand-dark">
                    {point.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-text-secondary">
                    {point.description}
                  </p>
                </div>
                <span className="w-fit rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-dark sm:mt-1">
                  {point.cue}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ApplicationNextStepDeck({
  slug,
  ctaText = "Ask for application review",
}: {
  slug: string;
  ctaText?: string;
}) {
  const config = getRoute(slug);
  if (!config) return null;

  return (
    <section className="rounded-[1.25rem] border border-[#d8cbb8] bg-[#fffdf8] p-5 shadow-[0_14px_40px_rgba(13,20,27,0.055)] sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-light">
            Next step
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-brand-dark">
            {config.nextTitle}
          </h2>
        </div>
        <Link
          href="/contact#technical-review"
          className="inline-flex w-fit items-center rounded-full bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#18222d]"
        >
          {ctaText}
        </Link>
      </div>

      <div className="mt-5 grid gap-3 lg:grid-cols-3">
        {config.links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group flex h-full flex-col rounded-card-md border border-cream-border-soft bg-white px-4 py-4 transition hover:border-brand-accent/50 hover:bg-[#fbf8f0]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
              {link.eyebrow}
            </p>
            <h3 className="mt-2 text-sm font-semibold leading-6 text-brand-dark">
              {link.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">
              {link.description}
            </p>
            <span className="mt-4 text-sm font-semibold text-brand-accent transition group-hover:text-brand-accent-hover">
              Read this
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
