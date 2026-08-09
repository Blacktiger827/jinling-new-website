import Link from "next/link";

export type ProductRouteGroup = "coil" | "sheet" | "bar" | "tube";

interface ProductZone {
  title: string;
  description: string;
  recommendation: string;
}

interface ProductShelfItem {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

interface ProductTool {
  title: string;
  description: string;
  href: string;
  cta: string;
}

interface ProductDeskConfig {
  eyebrow: string;
  title: string;
  description: string;
  zoneLabel: string;
  shelfTitle: string;
  shelfDescription: string;
  zones: readonly ProductZone[];
  shelf: readonly ProductShelfItem[];
  tools: readonly ProductTool[];
}

export interface ProductSidebarConfig {
  relatedTitle: string;
  items: Array<{ name: string; href: string }>;
  ctaHeading: string;
  ctaText: string;
  ctaHref: string;
  ctaSecondaryText: string;
  ctaSecondaryHref: string;
}

const PRODUCT_ROUTE_GROUPS: Record<ProductRouteGroup, readonly string[]> = {
  coil: ["stainless-steel-coil"],
  sheet: ["stainless-steel-sheet"],
  bar: [
    "stainless-steel-bar",
    "stainless-steel-round-bar",
    "stainless-steel-flat-bar",
    "stainless-steel-angle-bar",
    "stainless-steel-square-hex-bar",
  ],
  tube: [
    "stainless-steel-tube-pipe",
    "stainless-steel-industrial-pipe",
    "stainless-steel-sanitary-tube",
    "stainless-steel-decorative-pipe",
  ],
};

const PRODUCT_DESK_CONFIG: Record<ProductRouteGroup, ProductDeskConfig> = {
  coil: {
    eyebrow: "Coil Decisions",
    title: "The coil line behaves more like feed stock than like sheet before cutting",
    description:
      "What matters here is slit width, edge condition, line feed, and which downstream process will punish variation first.",
    zoneLabel: "Coil Use Case",
    shelfTitle: "Six Pages That Make a Coil Quote Easier to Specify",
    shelfDescription:
      "These are the questions that usually come right after a coil inquiry: edge condition, line feed, finish handling, lead time, and what should still be specified before release.",
    zones: [
      {
        title: "Slit-Width Programs",
        description:
          "Width discipline, burr, and edge condition govern downstream yield more than finished-panel handling.",
        recommendation: "CR coil + slit edge",
      },
      {
        title: "Tube-Mill Feed",
        description:
          "The real product is welded tube or pipe, and the decision depends on continuous feed rather than cut-sheet economics.",
        recommendation: "Coil + tube feed",
      },
      {
        title: "Protected-Face Coil",
        description:
          "2B, BA, No.4, or hairline coil needs the finish side, film, rewinding, and downstream handling locked before release.",
        recommendation: "Finish side + film first",
      },
      {
        title: "Mixed-Container Restock",
        description:
          "This fits distributor or trial-order restocking problems spread across width, grade, and lead-time discipline.",
        recommendation: "Coil + release check",
      },
    ],
    shelf: [
      {
        eyebrow: "Edge check",
        title: "Mill Edge or Slit Edge?",
        description:
          "Open this when downstream burr risk or width discipline is the real reason the quote should change.",
        href: "/knowledge-base/mill-edge-vs-slit-edge-delivery-standards",
        cta: "Open article",
      },
      {
        eyebrow: "Lead time",
        title: "Lead Time by Product Form",
        description:
          "Built for orders where the coil spec, processing queue, and film choice matter more than a generic delivery promise.",
        href: "/knowledge-base/stainless-steel-lead-time-by-product-form",
        cta: "Open article",
      },
      {
        eyebrow: "Finish choice",
        title: "Surface Finish Options",
        description:
          "Useful when the order is really about 2B, BA, hairline, or No.4 over coil rather than bare mill stock.",
        href: "/surfaces",
        cta: "Browse finishes",
      },
      {
        eyebrow: "Tube feed",
        title: "Tube & Pipe Overview",
        description:
          "The right next stop when coil only makes sense because the strip is feeding industrial, sanitary, or decorative tube.",
        href: "/products/stainless-steel-tube-pipe",
        cta: "Open product page",
      },
      {
        eyebrow: "Processing step",
        title: "Slitting & Edging Capability",
        description:
          "Best for orders still waiting on slit tolerance, edge type, and line capability before the PO can be written cleanly.",
        href: "/solutions/capabilities/slitting-edging",
        cta: "Open capability",
      },
      {
        eyebrow: "Release check",
        title: "Order, Specs & Release",
        description:
          "A better next stop when MTC, tolerance, packaging, or receiving logic still needs tightening before shipment.",
        href: "/resources/stainless-steel-guides",
        cta: "Open resource center",
      },
    ],
    tools: [
      {
        title: "Open Grade Pages",
        description:
          "Move into 304, 316L, 430, or 2205 once the line feed is clear but the service chemistry still is not.",
        href: "/grades",
        cta: "Browse grades",
      },
      {
        title: "Compare Finishes",
        description:
          "More useful when the product is decorative or touch-critical coil rather than mill base stock.",
        href: "/surfaces",
        cta: "Browse finishes",
      },
      {
        title: "Ask for Coil Review",
        description:
          "A good handoff once width, edge, film, or lead-time logic still needs to be locked before the inquiry becomes a real order.",
        href: "/contact#technical-review",
        cta: "Ask for review",
      },
    ],
  },
  sheet: {
    eyebrow: "Sheet & Plate Decisions",
    title: "Sheet and plate are usually release-ready panels before they are flat stock",
    description:
      "Flatness, cut size, visible finish, film protection, and fabrication readiness usually decide the order.",
    zoneLabel: "Panel Use Case",
    shelfTitle: "Six Pages That Make Sheet and Plate Easier to Release",
    shelfDescription:
      "These are the questions that usually appear after the first sheet or plate inquiry: flatness, finish protection, cut plan, tolerance language, and how the panel will actually be used.",
    zones: [
      {
        title: "Laser Blanks & Flat Panels",
        description:
          "Flatness, cut size, and nesting stability matter here before any alloy nuance does.",
        recommendation: "Sheet + flatness control",
      },
      {
        title: "Finish-Critical Decorative Panels",
        description:
          "Mirror, AFP, or brushed sheet is being judged as a finished face, not as a generic blank.",
        recommendation: "Sheet + finish control",
      },
      {
        title: "Kitchen and Food Panels",
        description:
          "These panels still need the right combination of finish, hygiene logic, weld scope, and cleanability.",
        recommendation: "304 / 316L + zone split",
      },
      {
        title: "Heavy Plate & Structural Work",
        description:
          "Hot-rolled plate, heavy cutting, or pressure-vessel use changes both the tolerance logic and the processing plan.",
        recommendation: "Plate + standard check",
      },
    ],
    shelf: [
      {
        eyebrow: "Finish route",
        title: "Surface Finish Options",
        description:
          "Start here when the sheet will be judged as mirror, AFP, No.4, hairline, BA, or 2B rather than a plain panel.",
        href: "/surfaces",
        cta: "Browse finishes",
      },
      {
        eyebrow: "Mirror family",
        title: "8K Mirror Finish",
        description:
          "Use this when reflection, substrate, protective film, and acceptance light are what make the panel order risky.",
        href: "/surfaces/stainless-steel-8k-mirror-finish",
        cta: "Open mirror",
      },
      {
        eyebrow: "Flatness check",
        title: "Flatness Requirements",
        description:
          "Helpful when visual complaint, laser-fit problems, and true contractual non-conformance need to be separated cleanly.",
        href: "/knowledge-base/stainless-steel-flatness-requirements",
        cta: "Open article",
      },
      {
        eyebrow: "Processing step",
        title: "Cut-to-Length Capability",
        description:
          "A useful next stop when the order depends on custom size, panel release, and how the sheet is prepared before delivery.",
        href: "/solutions/capabilities/cut-to-length",
        cta: "Open capability",
      },
      {
        eyebrow: "Application fit",
        title: "Architecture Application",
        description:
          "Best when visible panels, cladding, or feature work are shaping the sheet spec more than fabrication alone.",
        href: "/solutions/applications/architecture",
        cta: "Open application",
      },
      {
        eyebrow: "Food zone",
        title: "Kitchen Equipment Application",
        description:
          "The right branch when the panel belongs in kitchen or food equipment and finish plus cleanability matter together.",
        href: "/solutions/applications/kitchen-equipment",
        cta: "Open application",
      },
    ],
    tools: [
      {
        title: "Open Stainless Steel Guides",
        description:
          "Move into grade, finish, inspection, and buying guidance when the panel needs a clearer proof route.",
        href: "/resources/stainless-steel-guides",
        cta: "Browse guides",
      },
      {
        title: "Compare Finishes",
        description:
          "More useful when the panel still depends on finish choice, visible face, and handling rather than thickness alone.",
        href: "/surfaces",
        cta: "Browse finishes",
      },
      {
        title: "Ask for Panel Review",
        description:
          "A good handoff when the drawing exists but grade, finish, flatness, or film choice still needs tightening before quote release.",
        href: "/contact#technical-review",
        cta: "Ask for review",
      },
    ],
  },
  bar: {
    eyebrow: "Bar Family Decisions",
    title: "The bar line is really about stock shape and machining fit",
    description:
      "Bar decisions usually go wrong when the alloy is named first and shape, tolerance, machining fit, and stock allowance stay vague too long.",
    zoneLabel: "Bar Use Case",
    shelfTitle: "Six Pages That Make Bar Orders Easier to Machine and Buy",
    shelfDescription:
      "These are the next questions that usually show up after a bar inquiry: stock shape, machining behavior, tolerances, grade choice, and where the bar really belongs in the wider product system.",
    zones: [
      {
        title: "Round-Bar Machining Stock",
        description:
          "The job is really turning stock, shaft material, or precision ground round bar with fit-driven tolerances.",
        recommendation: "Round bar + machining fit",
      },
      {
        title: "Flat and Angle Fabrication Stock",
        description:
          "Brackets, supports, and welded frames care more about stock shape and cut economy than about high-polish appearance.",
        recommendation: "Flat / angle stock",
      },
      {
        title: "Fastener and Hex Stock",
        description:
          "Square or hex stock is being bought for machining blanks rather than as a generic bar quote.",
        recommendation: "Square / hex stock",
      },
      {
        title: "Specialty Alloy or High-Strength Bar",
        description:
          "2205, 17-4PH, 904L, or another specialty alloy changes machining assumptions and receiving checks.",
        recommendation: "Specialty bar review",
      },
    ],
    shelf: [
      {
        eyebrow: "Machining fit",
        title: "Machining Parameters",
        description:
          "Open this when tool life, feed, and chip control matter more than a generic bar description.",
        href: "/knowledge-base/stainless-steel-machining-parameters",
        cta: "Open article",
      },
      {
        eyebrow: "Grade comparison",
        title: "304 vs 316 Machinability",
        description:
          "Open this when the quote still depends on whether chloride margin is worth the shop-floor machining penalty.",
        href: "/knowledge-base/304-vs-316-machinability",
        cta: "Open article",
      },
      {
        eyebrow: "Strength check",
        title: "Strength by Grade",
        description:
          "Useful when the project is balancing section size, yield strength, and available bar families before release.",
        href: "/knowledge-base/stainless-steel-strength",
        cta: "Open article",
      },
      {
        eyebrow: "Grade choice",
        title: "Grade Library",
        description:
          "Helpful when the choice still depends on 304, 316L, 430, 2205, or a specialty alloy rather than on geometry alone.",
        href: "/grades",
        cta: "Open grades",
      },
      {
        eyebrow: "Stock form",
        title: "Round, Flat, Angle, or Square/Hex?",
        description:
          "The faster reference when the stock family is still unresolved and the machining or fabrication process depends on it.",
        href: "/products/stainless-steel-bar",
        cta: "Open bar family",
      },
      {
        eyebrow: "Application fit",
        title: "Kitchen Equipment",
        description:
          "Useful where the bar order actually belongs in fabricated kitchen or food-equipment structure rather than in pure machining stock.",
        href: "/solutions/applications/kitchen-equipment",
        cta: "Open application",
      },
    ],
    tools: [
      {
        title: "Open Grade Pages",
        description:
          "Move into the grade line once chemistry, strength, and corrosion margin are still unresolved.",
        href: "/grades",
        cta: "Browse grades",
      },
      {
        title: "Open Product Family",
        description:
          "More useful when the main unresolved question is still which bar geometry should carry the job.",
        href: "/products/stainless-steel-bar",
        cta: "Browse bar family",
      },
      {
        title: "Ask for Bar Review",
        description:
          "A good handoff when stock shape, tolerance, or specialty-alloy choice still needs confirmation before the inquiry becomes a real order.",
        href: "/contact#technical-review",
        cta: "Ask for review",
      },
    ],
  },
  tube: {
    eyebrow: "Tube & Pipe Decisions",
    title: "Tube and pipe are standard-and-service decisions before they are hollow sections",
    description:
      "These decisions are usually won or lost on the standard, the internal surface, and the release evidence, not on OD and wall alone.",
    zoneLabel: "Service Case",
    shelfTitle: "Six Pages That Make Tube and Pipe Easier to Specify",
    shelfDescription:
      "These are the questions that usually come next: industrial versus sanitary versus decorative, wall tolerance, food-contact duty, incoming proof, and the exact standard that should govern the shipment.",
    zones: [
      {
        title: "Industrial Pressure Service",
        description:
          "A312, wall tolerance, NDT, and pressure-service logic matter more here than visual finish does.",
        recommendation: "Industrial pipe + specs",
      },
      {
        title: "Sanitary and Hygienic Service",
        description:
          "Bore finish, Ra, gas shielding, and documentation matter more here than commodity tube pricing.",
        recommendation: "Sanitary tube + hygiene fit",
      },
      {
        title: "Decorative Hollow Sections",
        description:
          "Visible finish, mirror, hairline, or A554 consistency matter more here than pressure code.",
        recommendation: "Decorative pipe + finishes",
      },
      {
        title: "Chemical or Coastal Service",
        description:
          "Chloride, chemical media, or service risk changes the alloy and release path immediately.",
        recommendation: "316L / 2205 review",
      },
    ],
    shelf: [
      {
        eyebrow: "Wall check",
        title: "Tube Wall Tolerance",
        description:
          "Open this when the receiving decision depends on minimum delivered wall rather than nominal tube dimensions alone.",
        href: "/knowledge-base/ss-tube-wall-thickness-tolerance",
        cta: "Open article",
      },
      {
        eyebrow: "Food-contact fit",
        title: "Food & Beverage Application",
        description:
          "The right next stop when the tube order is really about hygienic design, sanitary release, and the document stack.",
        href: "/solutions/applications/food-beverage",
        cta: "Open application",
      },
      {
        eyebrow: "Weld quality",
        title: "Food-Industrial Pipe Welding",
        description:
          "Useful when sanitary or process tube still depends on bore quality, weld discoloration, and post-weld release logic.",
        href: "/knowledge-base/stainless-pipe-welding-food-industrial",
        cta: "Open article",
      },
      {
        eyebrow: "Document check",
        title: "How to Read an MTC",
        description:
          "Best when the standard is named but the buyer still needs to know what proof to read at release.",
        href: "/knowledge-base/how-to-read-mill-test-certificate",
        cta: "Open article",
      },
      {
        eyebrow: "Service limit",
        title: "Chemical Environments",
        description:
          "A better fit when the pipe quote is really governed by acid, chloride, or service-boundary questions.",
        href: "/knowledge-base/stainless-steel-chemical-environments",
        cta: "Open article",
      },
      {
        eyebrow: "Finish choice",
        title: "Surface Finish Options",
        description:
          "Useful when decorative or high-touch hollow sections depend on mirror, hairline, AFP, or brushed finishes.",
        href: "/surfaces",
        cta: "Browse finishes",
      },
    ],
    tools: [
      {
        title: "Open Grade Pages",
        description:
          "Move into 304, 316L, or 2205 once the standard is clear but chemistry still is not.",
        href: "/grades",
        cta: "Browse grades",
      },
      {
        title: "Open Specs & Release",
        description:
          "The better next stop when the order still depends on MTC, PMI, inspection, or complaint-prevention language.",
        href: "/resources/stainless-steel-guides",
        cta: "Browse knowledge base",
      },
      {
        title: "Ask for Tube Review",
        description:
          "A good handoff when standard, wall, Ra, or release wording still needs tightening before the order can be trusted.",
        href: "/contact#technical-review",
        cta: "Ask for review",
      },
    ],
  },
};

export function getProductRouteGroup(slug: string): ProductRouteGroup | null {
  const entry = (Object.entries(PRODUCT_ROUTE_GROUPS) as Array<
    [ProductRouteGroup, readonly string[]]
  >).find(([, slugs]) => slugs.includes(slug));
  return entry?.[0] ?? null;
}

export function getProductSidebarConfig(slug: string): ProductSidebarConfig | null {
  const group = getProductRouteGroup(slug);
  if (!group) return null;

  if (group === "coil") {
    return {
      relatedTitle: "Coil Decision Links",
      items: [
        {
          name: "Mill Edge vs Slit Edge",
          href: "/knowledge-base/mill-edge-vs-slit-edge-delivery-standards",
        },
        { name: "Slitting & Edging Capability", href: "/solutions/capabilities/slitting-edging" },
        { name: "Stainless Steel Sheet & Plate", href: "/products/stainless-steel-sheet" },
        { name: "Stainless Steel Tube & Pipe", href: "/products/stainless-steel-tube-pipe" },
      ],
      ctaHeading: "Need slit width, edge, film, or lead-time guidance?",
      ctaText: "Request Coil Quote",
      ctaHref: "/contact#pricing-request",
      ctaSecondaryText: "Ask Coil Review",
      ctaSecondaryHref: "/contact#technical-review",
    };
  }

  if (group === "sheet") {
    return {
      relatedTitle: "Panel Release Links",
      items: [
        { name: "Surface Finish Options", href: "/surfaces" },
        { name: "8K Mirror Finish", href: "/surfaces/stainless-steel-8k-mirror-finish" },
        {
          name: "Flatness Requirements",
          href: "/knowledge-base/stainless-steel-flatness-requirements",
        },
        { name: "Cut-to-Length Capability", href: "/solutions/capabilities/cut-to-length" },
        { name: "Stainless Steel Coil", href: "/products/stainless-steel-coil" },
      ],
      ctaHeading: "Need panel, finish, flatness, or size guidance?",
      ctaText: "Request Sheet Quote",
      ctaHref: "/contact#pricing-request",
      ctaSecondaryText: "Ask Panel Review",
      ctaSecondaryHref: "/contact#technical-review",
    };
  }

  if (group === "bar") {
    const familyItems = [
      { name: "Bar overview", href: "/products/stainless-steel-bar" },
      { name: "Round Bar", href: "/products/stainless-steel-round-bar" },
      { name: "Flat Bar", href: "/products/stainless-steel-flat-bar" },
      { name: "Angle Bar", href: "/products/stainless-steel-angle-bar" },
      { name: "Square & Hex Bar", href: "/products/stainless-steel-square-hex-bar" },
    ].filter((item) => !item.href.endsWith(`/${slug}`));

    return {
      relatedTitle: "Bar Family Links",
      items: [
        {
          name: "Machining Parameters",
          href: "/knowledge-base/stainless-steel-machining-parameters",
        },
        { name: "Grade Library", href: "/grades" },
        ...familyItems.slice(0, 3),
      ],
      ctaHeading: "Need stock shape, tolerance, or machining guidance?",
      ctaText: "Request Bar Quote",
      ctaHref: "/contact#pricing-request",
      ctaSecondaryText: "Ask Bar Review",
      ctaSecondaryHref: "/contact#technical-review",
    };
  }

  const tubeItemsBySlug: Record<string, Array<{ name: string; href: string }>> = {
    "stainless-steel-tube-pipe": [
      { name: "Industrial Pipe", href: "/products/stainless-steel-industrial-pipe" },
      { name: "Sanitary Tube", href: "/products/stainless-steel-sanitary-tube" },
      { name: "Decorative Pipe", href: "/products/stainless-steel-decorative-pipe" },
      { name: "Tube Wall Tolerance", href: "/knowledge-base/ss-tube-wall-thickness-tolerance" },
    ],
    "stainless-steel-industrial-pipe": [
      { name: "Tube Wall Tolerance", href: "/knowledge-base/ss-tube-wall-thickness-tolerance" },
      { name: "How to Read an MTC", href: "/knowledge-base/how-to-read-mill-test-certificate" },
      { name: "Sanitary Tube", href: "/products/stainless-steel-sanitary-tube" },
      { name: "Tube & Pipe Overview", href: "/products/stainless-steel-tube-pipe" },
    ],
    "stainless-steel-sanitary-tube": [
      { name: "Food & Beverage Application", href: "/solutions/applications/food-beverage" },
      {
        name: "Food-Industrial Pipe Welding",
        href: "/knowledge-base/stainless-pipe-welding-food-industrial",
      },
      { name: "Industrial Pipe", href: "/products/stainless-steel-industrial-pipe" },
      { name: "Tube & Pipe Overview", href: "/products/stainless-steel-tube-pipe" },
    ],
    "stainless-steel-decorative-pipe": [
      { name: "8K Mirror Finish", href: "/surfaces/stainless-steel-8k-mirror-finish" },
      { name: "No.4 vs Hairline", href: "/knowledge-base/no4-vs-hairline-finish" },
      { name: "AFP Anti-Fingerprint Finish", href: "/surfaces/stainless-steel-afp-finish" },
      { name: "Tube & Pipe Overview", href: "/products/stainless-steel-tube-pipe" },
    ],
  };

  return {
    relatedTitle: "Tube & Pipe Links",
    items: [
      ...(tubeItemsBySlug[slug] ?? tubeItemsBySlug["stainless-steel-tube-pipe"]),
    ],
    ctaHeading: "Need standard, wall, Ra, or release guidance?",
    ctaText: "Request Tube Quote",
    ctaHref: "/contact#pricing-request",
    ctaSecondaryText: "Ask Tube Review",
    ctaSecondaryHref: "/contact#technical-review",
  };
}

export function ProductRouteDesk({ group }: { group: ProductRouteGroup }) {
  const config = PRODUCT_DESK_CONFIG[group];
  const readingHeading: Record<ProductRouteGroup, string> = {
    coil: "If the coil route is still open",
    sheet: "If the panel route is still open",
    bar: "If the bar route is still open",
    tube: "If the tube route is still open",
  };
  const primaryTool =
    config.tools.find((tool) => tool.href.includes("/contact")) ??
    config.tools[config.tools.length - 1];
  const supportTools = config.tools
    .filter((tool) => tool.href !== primaryTool.href)
    .slice(0, 2);

  return (
    <section className="overflow-hidden rounded-[1.45rem] border border-[#d8cbb8] bg-[#fffdf8] shadow-[0_18px_46px_rgba(13,20,27,0.055)]">
      <div className="grid gap-0 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="border-b border-[#e4dac9] p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent">
            {config.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.025em] text-brand-dark sm:text-3xl">
            {config.title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-text-secondary">
            {config.description}
          </p>

          <div className="mt-6 border-t border-[#e4dac9] pt-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
              Best next move
            </p>
            <h3 className="mt-2 text-base font-semibold leading-6 text-brand-dark">
              {primaryTool.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {primaryTool.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              <Link
                href={primaryTool.href}
                className="inline-flex min-h-11 items-center rounded-full bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#18222d]"
              >
                {primaryTool.cta}
              </Link>
              {supportTools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-[#6d6256] underline decoration-[#d8cbb8] underline-offset-4 transition-colors hover:text-brand-dark"
                >
                  {tool.cta}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="p-5 sm:p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
            {config.zoneLabel} map
          </p>
          <div className="mt-4 divide-y divide-[#e4dac9] border-y border-[#e4dac9]">
            {config.zones.map((zone, index) => (
              <article
                key={zone.title}
                className="grid gap-3 py-4 sm:grid-cols-[2.4rem_1fr] sm:gap-4"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d8cbb8] bg-[#fbf8f0] text-xs font-semibold text-brand-dark">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-base font-semibold text-brand-dark">
                      {zone.title}
                    </h3>
                    <span className="text-sm font-semibold text-[#8a6b32]">
                      {zone.recommendation}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-text-secondary">
                    {zone.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[#e4dac9] bg-[#fbf8f0]/58 px-5 py-5 sm:px-7">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
              Three useful reads
            </p>
            <h3 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-brand-dark">
              {readingHeading[group]}
            </h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              {config.shelfDescription}
            </p>
          </div>

          <div className="divide-y divide-[#e4dac9] border-y border-[#e4dac9] bg-white/45">
            {config.shelf.slice(0, 3).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group grid gap-2 px-3 py-3 transition-colors hover:bg-white/72 sm:grid-cols-[8.5rem_1fr_auto] sm:items-center"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-text-light">
                  {item.eyebrow}
                </span>
                <span className="text-sm font-semibold leading-6 text-brand-dark transition-colors group-hover:text-brand-accent">
                  {item.title}
                </span>
                <span className="text-sm font-semibold text-brand-accent">
                  {item.cta}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

