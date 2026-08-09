import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stainless Steel Products | Coil, Sheet, Plate, Tube, Pipe & Bar",
  description:
    "Explore Jinling stainless steel products by form, finish, and grade, including stainless steel coil, sheet, plate, tube, pipe, bar, decorative surface finishes, 304, 316L, 430, 2205, processing, packing, and export support.",
  alternates: {
    canonical: "/products",
  },
};

const heroLinks = [
  { label: "Stainless Steel Coil", href: "/products/stainless-steel-coil" },
  { label: "Sheet & Plate", href: "/products/stainless-steel-sheet" },
  { label: "Tube & Pipe", href: "/products/stainless-steel-tube-pipe" },
  { label: "Stainless Steel Bar", href: "/products/stainless-steel-bar" },
] as const;

const productRouteCards = [
  {
    eyebrow: "Core Forms",
    title: "Choose by Product Form",
    description:
      "Start with stainless steel coil, sheet, plate, tube, pipe, or bar when size, tolerance, product form, and downstream fabrication route define the order.",
    href: "/products",
    image: "/images/products/core-forms/coil-cold-rolled-lifting.jpg",
    alt: "Stainless steel coil sheet tube pipe and bar product route",
  },
  {
    eyebrow: "Finish Options",
    title: "Choose by Surface Finish",
    description:
      "Compare 8K mirror, hairline, No.4, AFP, BA, embossed, and decorative stainless steel surfaces for visible panels and design-led applications.",
    href: "/surfaces",
    image: "/images/products/core-forms/related-finish-options.jpeg",
    alt: "Decorative stainless steel surface finish options",
  },
  {
    eyebrow: "Core Grades",
    title: "Choose by Stainless Steel Grade",
    description:
      "Review 304, 316L, 430, 201, 2205 duplex, and other stainless steel grades when corrosion resistance, cost, welding, or application environment drives selection.",
    href: "/grades",
    image: "/images/products/core-forms/related-core-grades.jpg",
    alt: "Stainless steel grade selection for corrosion and fabrication",
  },
] as const;

const productForms = [
  {
    title: "Stainless Steel Coil",
    href: "/products/stainless-steel-coil",
    image: "/images/products/core-forms/coil-cold-rolled-lifting.jpg",
    alt: "Stainless steel coil products for distribution and processing",
    imagePosition: "object-[center_48%]",
    intro:
      "Cold rolled and hot rolled stainless steel coil for distributors, processors, tube mills, roll forming, and manufacturing supply chains.",
    bestFor: "Restock, slitting, cut-to-length programs, and line-feed production",
    decision:
      "Confirm width, thickness tolerance, coil weight, edge condition, surface finish, and packing route before release.",
  },
  {
    title: "Stainless Steel Sheet & Plate",
    href: "/products/stainless-steel-sheet",
    image: "/images/products/core-forms/sheet-processing-line.jpeg",
    alt: "Stainless steel sheet and plate for panels and fabrication",
    imagePosition: "object-[center_56%]",
    intro:
      "Stainless steel sheet and plate for decorative panels, equipment skins, fabrication, kitchen equipment, architecture, and elevator interiors.",
    bestFor: "Visible panels, flat blanks, formed parts, architectural cladding, and equipment faces",
    decision:
      "Confirm flatness, surface direction, protective film, cutting size, grade, and visible surface standard.",
  },
  {
    title: "Stainless Steel Tube & Pipe",
    href: "/products/stainless-steel-tube-pipe",
    image: "/images/products/core-forms/tube-factory-work.jpg",
    alt: "Stainless steel tube and pipe for industrial and sanitary applications",
    imagePosition: "object-[center_45%]",
    intro:
      "Stainless steel tube and pipe for industrial lines, sanitary systems, structural use, decorative tube, and process equipment.",
    bestFor: "Process transfer, sanitary routes, structures, frames, railings, and welded assemblies",
    decision:
      "Confirm OD, wall thickness, weld route, internal surface quality, end condition, tolerance, and application environment.",
  },
  {
    title: "Stainless Steel Bar",
    href: "/products/stainless-steel-bar",
    image: "/images/products/bar/hero.webp",
    alt: "Stainless steel bar products for machining and industrial supply",
    imagePosition: "object-[center_50%]",
    intro:
      "Stainless steel bar products for machining, shafts, fasteners, supports, components, structural parts, and industrial supply.",
    bestFor: "Machining stock, load-bearing parts, turned components, and fabrication inputs",
    decision:
      "Confirm shape, diameter or width, straightness, tolerance, surface condition, grade, and machining allowance.",
  },
] as const;

const selectionRows = [
  {
    need: "Coil stock for distribution or downstream line feed",
    form: "Stainless Steel Coil",
    grades: "304 / 316L / 430",
    route: [
      { label: "Slitting", href: "/solutions/capabilities/slitting-edging" },
      { label: "Cut-to-Length", href: "/solutions/capabilities/cut-to-length" },
    ],
    decision: { label: "Coil", href: "/products/stainless-steel-coil" },
  },
  {
    need: "Visible panel material for equipment, decoration, or cladding",
    form: "Sheet & Plate",
    grades: "304 / 316L / 430",
    route: [
      { label: "Surface Finishing", href: "/solutions/capabilities/surface-finish-capability" },
      { label: "Protective Film", href: "/solutions/capabilities/protective-film" },
    ],
    decision: { label: "Sheet", href: "/products/stainless-steel-sheet" },
  },
  {
    need: "Tube, pipe, or transfer route for process and structure",
    form: "Tube & Pipe",
    grades: "304 / 316L / 2205",
    route: [
      { label: "Tube & Pipe", href: "/products/stainless-steel-tube-pipe" },
      { label: "Packing", href: "/solutions/capabilities/packaging-logistics" },
    ],
    decision: { label: "Pipe", href: "/products/stainless-steel-tube-pipe" },
  },
  {
    need: "Machining material for shafts, supports, and components",
    form: "Stainless Steel Bar",
    grades: "304 / 316L / 430",
    route: [
      { label: "Grade Review", href: "/grades" },
      { label: "Export Packing", href: "/solutions/capabilities/packaging-logistics" },
    ],
    decision: { label: "Bar", href: "/products/stainless-steel-bar" },
  },
] as const;

const logicRoutes = [
  {
    title: "Grade Selection",
    image: "/images/products/core-forms/logic-grade-selection.jpg",
    imagePosition: "object-[center_58%]",
    alt: "Stainless steel coil warehouse for multi-grade material selection",
    description:
      "Match stainless steel grade to corrosion risk, forming route, weld exposure, and cost target before confirming the product form.",
    links: [
      { label: "304", href: "/grades/304-stainless-steel" },
      { label: "316L", href: "/grades/316l-stainless-steel" },
      { label: "430", href: "/grades/430-stainless-steel" },
      { label: "2205", href: "/grades/2205-duplex-stainless-steel" },
    ],
  },
  {
    title: "Surface Finish",
    image: "/images/products/core-forms/logic-surface-finish.jpeg",
    imagePosition: "object-[center_50%]",
    alt: "Brushed stainless steel surface finish sample",
    description:
      "For visible stainless steel products, surface finish affects appearance, cleaning, fingerprint control, and downstream fabrication risk.",
    links: [
      { label: "8K Mirror", href: "/surfaces/stainless-steel-8k-mirror-finish" },
      { label: "AFP", href: "/surfaces/stainless-steel-afp-finish" },
      { label: "Hairline", href: "/surfaces/stainless-steel-hairline-finish" },
      { label: "All Surfaces", href: "/surfaces" },
    ],
  },
  {
    title: "Processing Route",
    image: "/images/products/core-forms/logic-processing-route.jpeg",
    imagePosition: "object-[center_52%]",
    alt: "Stainless steel coil processing route in factory",
    description:
      "Cut-to-length, slitting, edging, and surface finishing should be planned before final size, tolerance, film, and packing are locked.",
    links: [
      { label: "Cut-to-Length", href: "/solutions/capabilities/cut-to-length" },
      { label: "Slitting & Edging", href: "/solutions/capabilities/slitting-edging" },
      { label: "Capabilities", href: "/solutions/capabilities" },
    ],
  },
  {
    title: "Protection & Export",
    image: "/images/products/core-forms/logic-protection-export.jpeg",
    imagePosition: "object-[center_48%]",
    alt: "Stainless steel coil export packing composition",
    description:
      "Protective film, interleaving, pallet design, pipe bundling, shipping marks, and loading control help reduce damage during export delivery.",
    links: [
      { label: "Protective Film", href: "/solutions/capabilities/protective-film" },
      { label: "Packaging", href: "/solutions/capabilities/packaging-logistics" },
    ],
  },
] as const;

const applicationRoutes = [
  {
    title: "Kitchen Equipment",
    href: "/solutions/applications/kitchen-equipment",
    image: "/images/applications/kitchen-equipment/hero.jpg",
    forms: "Sheet / Tube",
    description:
      "Worktops, sinks, cabinets, splashbacks, appliance panels, and fabricated kitchen equipment parts.",
  },
  {
    title: "Architecture",
    href: "/solutions/applications/architecture",
    image: "/images/applications/architecture/hero.jpg",
    forms: "Sheet / Plate",
    description:
      "Facade panels, wall cladding, ceilings, column covers, decorative trims, and public-space metalwork.",
  },
  {
    title: "Elevator & Interiors",
    href: "/solutions/applications/elevator-decoration",
    image: "/images/applications/elevator-decoration/hero.jpg",
    forms: "Decorative Sheet",
    description:
      "Elevator cabin panels, doors, ceilings, trims, handrails, lobby wall panels, and interior fit-out details.",
  },
  {
    title: "Food & Beverage",
    href: "/solutions/applications/food-beverage",
    image: "/images/applications/food-beverage/hero.jpg",
    forms: "Sheet / Sanitary Tube",
    description:
      "Food-contact surfaces, processing tanks, conveyors, washdown areas, sanitary piping, and filling equipment.",
  },
  {
    title: "Oil & Gas",
    href: "/solutions/applications/oil-gas",
    image: "/images/products/core-forms/application-oil-gas-tanks.jpg",
    imagePosition: "object-[center_45%]",
    forms: "Pipe / Plate",
    description:
      "Process piping, tanks, offshore components, skids, structural supports, covers, and project fabrication.",
  },
  {
    title: "Automotive Exhaust",
    href: "/solutions/applications/automotive-exhaust",
    image: "/images/applications/automotive-exhaust/hero.jpg",
    forms: "Coil / Tube / Sheet",
    description:
      "Exhaust tubes, muffler shells, heat shields, formed parts, corrosion-resistant strip, and welded assemblies.",
  },
] as const;

const relatedRoutes = [
  {
    title: "Finish Options",
    href: "/surfaces",
    image: "/images/products/core-forms/related-finish-options.jpeg",
    imagePosition: "object-[center_52%]",
    alt: "Decorative stainless steel finish options with brushed and colored surfaces",
    description:
      "Compare 8K mirror, AFP, No.4, hairline, BA, 2B, embossed, and decorative stainless steel surfaces.",
  },
  {
    title: "Core Grades",
    href: "/grades",
    image: "/images/products/core-forms/related-core-grades.jpg",
    imagePosition: "object-[center_54%]",
    alt: "Stainless steel coil stock for grade selection",
    description:
      "Review 304, 316L, 430, 201, and 2205 stainless steel grades by corrosion risk and application condition.",
  },
  {
    title: "Process Capabilities",
    href: "/solutions/capabilities",
    image: "/images/products/core-forms/related-process-capabilities.jpeg",
    imagePosition: "object-[center_52%]",
    alt: "Stainless steel coil processing equipment for cut-to-length and slitting",
    description:
      "Plan surface finishing, cut-to-length, slitting, protective film, coating, packing, and logistics support.",
  },
  {
    title: "Application Lines",
    href: "/solutions/applications",
    image: "/images/products/core-forms/related-application-lines.jpg",
    imagePosition: "object-[center_50%]",
    alt: "Stainless steel application in kitchen and interior surfaces",
    description:
      "Choose stainless steel routes by kitchen, architecture, food processing, medical, oil and gas, water treatment, and more.",
  },
] as const;

function SectionLabel({
  children,
  tone = "light",
}: {
  children: string;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={`text-[0.78rem] font-semibold uppercase tracking-[0.24em] ${
        tone === "dark" ? "text-[#f6d044]" : "text-[#b99418]"
      }`}
    >
      {children}
    </p>
  );
}

function SectionHeader({
  label,
  title,
  description,
  tone = "light",
}: {
  label: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
}) {
  return (
    <header className="mx-auto max-w-4xl text-left">
      <SectionLabel tone={tone}>{label}</SectionLabel>
      <h2
        className={`mt-5 text-[1.9rem] font-semibold leading-[1.08] sm:text-[2.35rem] lg:whitespace-nowrap lg:text-[2.85rem] ${
          tone === "dark" ? "text-white" : "text-[#111820]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-sm leading-7 sm:text-[0.98rem] ${
            tone === "dark" ? "text-white/72" : "text-[#53606b]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}

export default function ProductsPage() {
  return (
    <div className="bg-[#f6f0e5] text-[#111820]">
      <section className="relative overflow-hidden bg-[#0d141b] text-white">
        <div className="absolute inset-0 opacity-[0.72]">
          <Image
            src="/images/hero/products-core-forms-cold-rolled.jpg"
            alt="Stainless steel products including coil, sheet, tube, pipe, and bar"
            fill
            className="object-cover object-[center_48%]"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.84)_0%,rgba(13,20,27,0.62)_48%,rgba(13,20,27,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(13,20,27,0)_0%,rgba(246,240,229,0.98)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <div className="mx-auto max-w-4xl text-left">
            <div className="inline-flex items-center gap-4">
              <SectionLabel tone="dark">Products Hub</SectionLabel>
              <span
                className="h-px w-12 bg-[#f6d044]/70"
                aria-hidden="true"
              />
            </div>
            <h1
              className="mt-6 max-w-[66rem] text-[2.4rem] font-semibold leading-[1.04] text-white sm:text-[3.3rem] lg:text-[4.26rem]"
            >
              Stainless Steel Products by Form, Finish & Grade
            </h1>
            <p className="mt-6 max-w-[54rem] text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem]">
              Jinling Metals supplies stainless steel coil, sheet, plate, tube,
              pipe, bar, stainless steel grades, and decorative stainless steel
              surface finishes for manufacturers, distributors, project buyers,
              and processing customers. Use this products hub to choose the right
              stainless steel route by product form, surface finish, grade,
              processing requirement, packing method, and export delivery plan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroLinks.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`inline-flex border px-4 py-2.5 text-sm font-semibold transition ${
                    index % 2 === 0
                      ? "border-[#f6d044] bg-[#f6d044] text-[#111820] hover:bg-[#e0b928]"
                      : "border-white/28 bg-white/8 text-white hover:border-[#f6d044] hover:text-[#f6d044]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#111820] px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Product Routes"
            title="Choose by Form, Finish, or Grade"
            description="If you are not sure which stainless steel product page to open first, start with the route that matches your buying decision: product form, surface appearance, or grade performance."
            tone="dark"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {productRouteCards.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative isolate min-h-[16rem] overflow-hidden border border-white/12 bg-black shadow-2xl shadow-black/20"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover opacity-65 transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/46 to-black/14" />
                <div className="relative z-10 flex min-h-[16rem] flex-col justify-between p-5 sm:p-6">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#f6d044]">
                      {item.eyebrow}
                    </p>
                    <h2 className="mt-3 text-[1.35rem] font-semibold leading-tight text-white md:text-[1.45rem]">
                      {item.title}
                    </h2>
                    <p className="mt-3 text-[0.82rem] leading-6 text-white/78">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-5 inline-flex w-fit bg-[#f6d044] px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#111820] transition group-hover:bg-white">
                    Explore Route
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Core Forms"
            title="Stainless Steel Core Product Forms"
            description="After choosing the product route, compare the main stainless steel forms used for purchasing and production. Coil, sheet, plate, tube, pipe, and bar each carry different decisions for tolerance, finish, fabrication, protection, and export packing."
          />

          <div className="mt-9 grid gap-5 lg:grid-cols-4">
            {productForms.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative min-h-[22rem] overflow-hidden rounded-lg bg-[#111820] text-white shadow-[0_18px_42px_rgba(17,24,32,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(17,24,32,0.22)]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className={`object-cover opacity-70 transition duration-500 group-hover:scale-[1.04] group-hover:opacity-80 ${item.imagePosition}`}
                  sizes="(max-width: 1024px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.78)_0%,rgba(13,20,27,0.52)_45%,rgba(13,20,27,0.72)_100%)]" />
                <div className="relative z-10 grid min-h-[22rem] grid-rows-[3.8rem_6.4rem_auto] content-start p-5">
                  <h3
                    className="flex items-start text-[1.35rem] font-semibold leading-tight text-[#f6d044]"
                  >
                    {item.title}
                  </h3>
                  <p className="text-[0.82rem] leading-5 text-white/82">
                    {item.intro}
                  </p>
                  <div className="border-t border-white/18 pt-3">
                    <p className="text-xs font-semibold text-[#f6d044]">
                      Best for
                    </p>
                    <p className="mt-1 text-[0.8rem] leading-5 text-white/76">
                      {item.bestFor}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto max-w-4xl text-left">
            <SectionLabel>Buyer Selection Matrix</SectionLabel>
            <h2 className="mt-5 text-[1.9rem] font-semibold leading-[1.08] text-[#111820] sm:text-[2.35rem] lg:whitespace-nowrap lg:text-[2.85rem]">
              Choose the Right Stainless Steel Form
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#53606b] sm:text-[0.98rem]">
              Stainless steel product selection should start with the buyer
              need, then move into grade, finish, processing route, and release
              control. This matrix connects common purchasing intentions with
              the most relevant stainless steel product page and support route.
            </p>
          </header>

          <div className="mt-8 overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.22)]">
            <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2.5 text-center">
              <p className="text-[0.74rem] font-semibold uppercase leading-4 tracking-[0.08em] text-[#f6d044]">
                Product route by buyer need and release requirement
              </p>
            </div>
            <table className="w-full table-fixed border-collapse text-left text-[0.62rem] sm:text-[0.74rem]">
              <thead>
                <tr className="bg-[#f6d044] text-[#101820]">
                  <th className="w-[36%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                    Buyer Need
                  </th>
                  <th className="w-[15%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                    Decision Link
                  </th>
                  <th className="w-[18%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                    Product Form
                  </th>
                  <th className="w-[13%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                    Grades
                  </th>
                  <th className="px-2.5 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                    Route
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectionRows.map((row) => (
                  <tr key={row.need} className="bg-[#111111] align-middle">
                    <th className="whitespace-nowrap border-r border-t border-white/14 px-2.5 py-3 text-left align-middle text-[0.58rem] font-semibold leading-[1.35] text-white sm:px-3 sm:text-[0.72rem] lg:text-[0.78rem]">
                      {row.need}
                    </th>
                    <td className="border-r border-t border-white/14 px-2.5 py-3 text-center leading-[1.35] sm:px-3">
                      <Link
                        href={row.decision.href}
                        className="inline-block origin-center whitespace-nowrap font-semibold text-[#f6d044] transition duration-200 hover:scale-150 hover:text-white focus-visible:scale-150 focus-visible:text-white"
                      >
                        {row.decision.label}
                      </Link>
                    </td>
                    <td className="border-r border-t border-white/14 px-2.5 py-3 leading-[1.35] text-white/78 sm:px-3">
                      {row.form}
                    </td>
                    <td className="border-r border-t border-white/14 px-2.5 py-3 text-center leading-[1.35] text-white/78 sm:px-3">
                      {row.grades}
                    </td>
                    <td className="border-t border-white/14 px-2.5 py-3 leading-[1.35] text-white/78 sm:px-3">
                      <div className="flex flex-wrap gap-1.5">
                        {row.route.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="font-semibold text-[#f6d044] transition hover:text-white"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Form + Grade + Surface Logic"
            title="Form, Grade, Finish, and Protection"
            description="A stainless steel coil, sheet, plate, tube, pipe, or bar order is not complete until grade, surface finish, processing route, and protection are confirmed together. This is where Jinling helps buyers reduce wrong-grade selection, surface claims, fabrication delays, and export packing risk."
          />

          <div className="mx-auto mt-9 grid max-w-5xl gap-4 sm:grid-cols-2">
            {logicRoutes.map((item) => (
              <article
                key={item.title}
                className="group relative min-h-[11rem] overflow-hidden rounded-lg border border-white/16 bg-[#111820] text-white shadow-[0_14px_32px_rgba(17,24,32,0.16)]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className={`object-cover opacity-[0.72] transition duration-500 group-hover:scale-[1.04] group-hover:opacity-[0.8] ${item.imagePosition}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.76)_0%,rgba(13,20,27,0.52)_45%,rgba(13,20,27,0.82)_100%)]" />
                <div className="relative z-10 flex min-h-[11rem] flex-col justify-between p-4">
                  <div>
                    <h3 className="text-[1.05rem] font-semibold leading-tight text-[#f6d044]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-[34rem] text-[0.76rem] leading-5 text-white/84">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="bg-[#f6d044] px-2.5 py-1.5 text-[0.68rem] font-semibold text-[#111820] transition hover:bg-white"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111820] px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Product Form by Application"
            title="Common Uses by Stainless Steel Form"
            description="Application pages help buyers move from product form to real working conditions, such as food contact, decorative visibility, corrosion exposure, welding, cleaning, heat, and export handling."
            tone="dark"
          />

          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {applicationRoutes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative min-h-[18.5rem] overflow-hidden rounded-lg border border-white/12 bg-white/8"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} stainless steel application`}
                  fill
                  className={`object-cover opacity-[0.66] transition duration-500 group-hover:scale-[1.04] group-hover:opacity-[0.78] ${
                    "imagePosition" in item ? item.imagePosition : "object-center"
                  }`}
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.18)_0%,rgba(13,20,27,0.8)_100%)]" />
                <div className="relative z-10 flex min-h-[18.5rem] flex-col justify-end p-5">
                  <p className="text-xs font-semibold text-[#f6d044]">
                    {item.forms}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/76">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Related Routes"
            title="Continue Your Stainless Steel Selection"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {relatedRoutes.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative min-h-[17rem] overflow-hidden rounded-lg border border-white/14 bg-[#111820] text-white shadow-[0_18px_42px_rgba(17,24,32,0.16)] transition hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(17,24,32,0.22)]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className={`object-cover opacity-[0.68] transition duration-500 group-hover:scale-[1.04] group-hover:opacity-[0.78] ${item.imagePosition}`}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.52)_0%,rgba(13,20,27,0.42)_36%,rgba(13,20,27,0.84)_100%)]" />
                <div className="relative z-10 flex min-h-[17rem] flex-col justify-end p-5">
                  <h3 className="text-[1.18rem] font-semibold leading-tight text-[#f6d044]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.82rem] leading-6 text-white/82">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
