import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Stainless Steel Grades | 304, 316L, 430, 201 & 2205 Duplex",
  description:
    "Compare stainless steel grades including 304, 316L, 430, 201, 2205 duplex, 200 series, 300 series, 400 series, and duplex stainless steel by corrosion resistance, fabrication, cleaning, surface finish, and application requirement.",
  alternates: {
    canonical: "/grades",
  },
};

const heroLinks = [
  { label: "304 Stainless Steel", href: "/grades/304-stainless-steel" },
  { label: "316L Stainless Steel", href: "/grades/316l-stainless-steel" },
  { label: "430 Stainless Steel", href: "/grades/430-stainless-steel" },
  { label: "2205 Duplex", href: "/grades/2205-duplex-stainless-steel" },
] as const;

const buyerNeeds = [
  {
    title: "General Fabrication",
    text: "Start with 304 stainless steel for general sheet, coil, equipment panels, frames, cabinets, kitchen equipment, and indoor fabrication.",
    href: "/grades/304-stainless-steel",
    link: "304 stainless steel",
    image: "/images/grades/index/need-general-fabrication.jpeg",
    alt: "304 stainless steel grade for general fabrication",
  },
  {
    title: "Wet & Corrosive Areas",
    text: "Move to 316L stainless steel when chloride cleaners, wet exposure, coastal air, acidic media, or stronger cleaning cycles increase corrosion risk.",
    href: "/grades/316l-stainless-steel",
    link: "316L stainless steel",
    image: "/images/grades/index/need-wet-corrosive-oil-gas.jpg",
    alt: "316L stainless steel grade for wet and corrosive environments",
  },
  {
    title: "Decorative Cost Control",
    text: "Review 430 or 201 stainless steel for dry decorative panels, appliance skins, indoor trims, and cost-sensitive visible sheet applications.",
    href: "/grades/430-stainless-steel",
    link: "430 stainless steel",
    image: "/images/grades/index/need-decorative-architecture.jpg",
    alt: "430 stainless steel grade for decorative panels",
  },
  {
    title: "Food & Hygienic Use",
    text: "Use 304 or 316L stainless steel for food-contact areas, washdown zones, sanitary tube routes, cleanable panels, and hygienic fabrication.",
    href: "/solutions/applications/food-beverage",
    link: "Food application route",
    image: "/images/applications/food-beverage/hero.jpg",
    alt: "Stainless steel grades for food and beverage processing",
  },
  {
    title: "Chemical & Marine Risk",
    text: "Compare 316L and 2205 duplex stainless steel for chloride exposure, brine, chemical process, offshore conditions, and higher corrosion demand.",
    href: "/grades/2205-duplex-stainless-steel",
    link: "2205 duplex",
    image: "/images/grades/index/need-chemical-marine-risk.jpg",
    alt: "2205 duplex stainless steel for chemical and marine corrosion risk",
  },
  {
    title: "Exhaust & Heat Routes",
    text: "Use 400 series stainless steel routes such as 409, 430, or 441 when automotive exhaust, heat shields, or heat-related fabricated parts define the choice.",
    href: "/solutions/applications/automotive-exhaust",
    link: "Automotive exhaust",
    image: "/images/applications/automotive-exhaust/hero.jpg",
    alt: "400 series stainless steel for automotive exhaust applications",
  },
] as const;

const gradeFamilies = [
  {
    family: "200 Series",
    grades: "201 / 202",
    route: "Cost-sensitive austenitic grades",
    text: "Used mainly for dry indoor decorative stainless steel sheet, budget panels, trims, and applications where corrosion exposure is limited.",
    links: [{ label: "201", href: "/grades/201-stainless-steel" }],
  },
  {
    family: "300 Series",
    grades: "304 / 304L / 316L",
    route: "Main corrosion-resistant route",
    text: "The most common stainless steel grade family for sheet, coil, tube, food equipment, architecture, kitchen equipment, medical use, and general fabrication.",
    links: [
      { label: "304", href: "/grades/304-stainless-steel" },
      { label: "316L", href: "/grades/316l-stainless-steel" },
    ],
  },
  {
    family: "400 Series",
    grades: "409 / 410 / 420 / 430 / 441",
    route: "Ferritic and martensitic options",
    text: "Used for magnetic decorative sheet, appliance panels, automotive exhaust parts, heat-related components, and cost-controlled stainless routes.",
    links: [{ label: "430", href: "/grades/430-stainless-steel" }],
  },
  {
    family: "Duplex Grades",
    grades: "2205",
    route: "Higher strength and chloride resistance",
    text: "Used when oil and gas, chemical process, water treatment, marine, or chloride-bearing environments require more corrosion margin than 316L.",
    links: [{ label: "2205", href: "/grades/2205-duplex-stainless-steel" }],
  },
] as const;

const selectionRows = [
  {
    need: "General sheet, coil, and equipment fabrication",
    link: "304",
    href: "/grades/304-stainless-steel",
    grade: "304 / 304L stainless steel",
    reason: "Balanced corrosion resistance, weldability, availability, and cost.",
    route: "Sheet, coil, tube, kitchen equipment, architecture, general fabrication",
  },
  {
    need: "Wet zones, cleaning chemicals, and chloride exposure",
    link: "316L",
    href: "/grades/316l-stainless-steel",
    grade: "316L stainless steel",
    reason: "Molybdenum-bearing grade for better chloride and chemical resistance.",
    route: "Food processing, medical, coastal architecture, chemical process, water treatment",
  },
  {
    need: "Dry decorative panels with cost control",
    link: "430",
    href: "/grades/430-stainless-steel",
    grade: "430 stainless steel",
    reason: "Nickel-free ferritic grade for magnetic decorative and appliance-facing use.",
    route: "Appliance panels, interiors, trims, dry decorative sheet",
  },
  {
    need: "Budget indoor decorative sheet",
    link: "201",
    href: "/grades/201-stainless-steel",
    grade: "201 stainless steel",
    reason: "Lower-cost austenitic route for limited-corrosion indoor applications.",
    route: "Dry interior panels, budget trim, low-risk decorative sheet",
  },
  {
    need: "Marine, brine, chemical, or heavy corrosion conditions",
    link: "2205",
    href: "/grades/2205-duplex-stainless-steel",
    grade: "2205 duplex stainless steel",
    reason: "Higher strength and stronger chloride resistance than common austenitic routes.",
    route: "Oil and gas, chemical process, water treatment, marine components",
  },
  {
    need: "Automotive exhaust and heat-related parts",
    link: "400 Series",
    href: "/solutions/applications/automotive-exhaust",
    grade: "409 / 430 / 441 stainless steel",
    reason: "Ferritic grades can support heat, cost control, and exhaust fabrication routes.",
    route: "Exhaust tubes, muffler shells, heat shields, formed exhaust parts",
  },
] as const;

const comparisonGrades = [
  {
    title: "304 Stainless Steel",
    href: "/grades/304-stainless-steel",
    image: "/images/grades/index/compare-304-cold-rolled-coil.jpg",
    alt: "304 stainless steel cold rolled coil processing route",
    summary:
      "The standard starting point for most stainless steel sheet, coil, tube, kitchen equipment, architecture, and general fabrication.",
    bestFor: "General fabrication, indoor equipment, food-service areas, cabinets, panels",
  },
  {
    title: "316L Stainless Steel",
    href: "/grades/316l-stainless-steel",
    image: "/images/grades/index/compare-316l-bright-processing.jpg",
    alt: "316L stainless steel bright processing surface for corrosion resistance",
    summary:
      "The stronger route when wet exposure, chloride, cleaning chemicals, medical use, food processing, or coastal environments increase risk.",
    bestFor: "Wet zones, food and pharma, chemical cleaning, coastal projects",
  },
  {
    title: "430 Stainless Steel",
    href: "/grades/430-stainless-steel",
    image: "/images/grades/index/compare-430-decorative-coil.jpg",
    alt: "430 stainless steel decorative coil route",
    summary:
      "A nickel-free ferritic stainless steel used where decorative appearance, magnetic behavior, and cost control matter more than high corrosion reserve.",
    bestFor: "Appliance panels, dry interiors, decorative sheet, trims",
  },
] as const;

const productRoutes = [
  {
    title: "Stainless Steel Coil by Grade",
    text: "Confirm grade, thickness, width, coil weight, surface finish, slitting route, and packing before coil release.",
    href: "/products/stainless-steel-coil",
    image: "/images/products/core-forms/coil-cold-rolled-lifting.jpg",
    alt: "Stainless steel coil by grade",
  },
  {
    title: "Stainless Steel Sheet & Plate by Grade",
    text: "Match grade with flatness, surface direction, protective film, cutting size, and visible panel requirement.",
    href: "/products/stainless-steel-sheet",
    image: "/images/products/core-forms/sheet-processing-line.jpeg",
    alt: "Stainless steel sheet and plate by grade",
  },
  {
    title: "Stainless Steel Tube & Pipe by Grade",
    text: "Review grade together with OD, wall thickness, weld route, internal cleanliness, end condition, and application environment.",
    href: "/products/stainless-steel-tube-pipe",
    image: "/images/products/core-forms/tube-factory-work.jpg",
    alt: "Stainless steel tube and pipe by grade",
  },
  {
    title: "Surface Finish by Grade",
    text: "Connect 304, 316L, 430, or 201 with 8K mirror, AFP, hairline, No.4, BA, 2B, protective film, and final application.",
    href: "/surfaces",
    image: "/images/products/core-forms/related-finish-options.jpeg",
    alt: "Stainless steel finish by grade",
  },
] as const;

const applicationRoutes = [
  {
    title: "Kitchen Equipment",
    text: "304 and 316L stainless steel for worktops, sinks, cabinets, splashbacks, wet zones, and fabricated kitchen parts.",
    href: "/solutions/applications/kitchen-equipment",
    image: "/images/applications/kitchen-equipment/hero.jpg",
    alt: "Stainless steel grades for kitchen equipment",
  },
  {
    title: "Food & Beverage",
    text: "304, 316L, sheet, and hygienic tube routes for food-contact surfaces, tanks, washdown areas, and process piping.",
    href: "/solutions/applications/food-beverage",
    image: "/images/applications/food-beverage/hero.jpg",
    alt: "Stainless steel grades for food and beverage processing",
  },
  {
    title: "Architecture",
    text: "304 and 316L stainless steel for cladding, wall panels, ceilings, coastal projects, decorative trims, and public interiors.",
    href: "/solutions/applications/architecture",
    image: "/images/applications/architecture/hero.jpg",
    alt: "Stainless steel grades for architecture",
  },
  {
    title: "Oil & Gas",
    text: "316L and 2205 duplex stainless steel for process piping, tanks, offshore exposure, skids, and corrosion-resistant fabrication.",
    href: "/solutions/applications/oil-gas",
    image: "/images/products/core-forms/application-oil-gas-tanks.jpg",
    alt: "Stainless steel grades for oil and gas",
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
  description: string;
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

export default function GradesPage() {
  return (
    <main className="bg-[#f6f0e5] text-[#111820]">
      <section className="relative overflow-hidden bg-[#0d141b] text-white">
        <div className="absolute inset-0 opacity-[0.56]">
          <Image
            src="/images/products/core-forms/related-core-grades.jpg"
            alt="Stainless steel grades and material selection"
            fill
            priority
            sizes="100vw"
            className="scale-[1.02] object-cover object-[center_50%] blur-[1.5px]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,8,12,0.94)_0%,rgba(4,8,12,0.78)_45%,rgba(4,8,12,0.48)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(13,20,27,0)_0%,rgba(246,240,229,0.98)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <div className="mx-auto max-w-4xl text-left">
            <div className="inline-flex items-center gap-4">
              <SectionLabel tone="dark">
                Stainless steel grade supplier
              </SectionLabel>
              <span
                className="h-px w-12 bg-[#f6d044]/70"
                aria-hidden="true"
              />
            </div>
            <h1 className="mt-6 max-w-[66rem] text-[2.4rem] font-semibold leading-[1.04] text-white sm:text-[3.3rem] lg:text-[4.26rem]">
              Stainless Steel Grades for the Right Material Route
            </h1>
            <p className="mt-6 max-w-[54rem] text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem]">
              Jinling Metals helps buyers compare stainless steel grades by
              corrosion resistance, fabrication method, surface finish,
              cleaning environment, food-contact requirement, decorative use,
              and export documentation. From 304 stainless steel and 316L
              stainless steel to 430, 201, 200 series, 300 series, 400 series,
              and 2205 duplex stainless steel, the grade decision should match
              the real application before production starts.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex border px-4 py-2.5 text-sm font-semibold transition ${
                    index % 2 === 0
                      ? "border-[#f6d044] bg-[#f6d044] text-[#111820] hover:bg-[#e0b928]"
                      : "border-white/28 bg-white/8 text-white hover:border-[#f6d044] hover:text-[#f6d044]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0e5] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          label="Grade Need Navigation"
          title="Choose Grade by Buyer Requirement"
          description="Buyers usually search for stainless steel grades through working conditions: wet exposure, food contact, decorative panels, cost control, marine corrosion, or exhaust heat. Start from the requirement first, then confirm the grade, product form, surface finish, and protection route."
        />

        <div className="mx-auto mt-9 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {buyerNeeds.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative min-h-[18rem] overflow-hidden bg-[#101820] text-white shadow-[0_18px_48px_rgba(17,24,32,0.18)]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-70 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,14,0.2)_0%,rgba(7,10,14,0.8)_100%)]" />
              <div className="relative flex h-full min-h-[18rem] flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-[#f6d044]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/84">
                  {item.text}
                </p>
                <span className="mt-5 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-white/78 transition group-hover:text-[#f6d044]">
                  {item.link}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          label="Grade Family Map"
          title="Stainless Steel Grade Families"
          description="A grade page should help buyers understand the family route before choosing a specific material. 200 series, 300 series, 400 series, and duplex stainless steel each solve different cost, corrosion, fabrication, and application problems."
        />

        <div className="mx-auto mt-9 grid max-w-7xl gap-4">
          {gradeFamilies.map((family, index) => (
            <article
              key={family.family}
              className={`grid gap-5 border border-[#111820]/10 px-5 py-5 shadow-[0_14px_34px_rgba(17,24,32,0.08)] md:grid-cols-[0.9fr_1fr_2.3fr_0.8fr] md:items-center ${
                index % 2 === 0
                  ? "bg-[#111820] text-white"
                  : "bg-[#f6d044] text-[#111820]"
              }`}
            >
              <div>
                <p
                  className={`text-xs font-bold uppercase tracking-[0.18em] ${
                    index % 2 === 0 ? "text-[#f6d044]" : "text-[#111820]/70"
                  }`}
                >
                  {family.route}
                </p>
                <h3 className="mt-2 text-2xl font-bold">{family.family}</h3>
              </div>
              <p className="text-lg font-semibold">{family.grades}</p>
              <p
                className={`text-sm leading-6 ${
                  index % 2 === 0 ? "text-white/78" : "text-[#111820]/78"
                }`}
              >
                {family.text}
              </p>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {family.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] transition ${
                      index % 2 === 0
                        ? "bg-[#f6d044] text-[#111820] hover:bg-white"
                        : "bg-[#111820] text-white hover:bg-white hover:text-[#111820]"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f0e5] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          label="Grade Selection Matrix"
          title="Stainless Steel Grade Selection Guide"
          description="The right stainless steel grade depends on corrosion risk, cleaning method, cost target, product form, welding, surface appearance, and final application. This matrix connects common buyer requirements with practical grade routes and internal decision links."
        />

        <div className="mx-auto mt-8 max-w-7xl overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.22)]">
          <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2.5 text-center">
            <p className="text-[0.74rem] font-semibold uppercase leading-4 tracking-[0.08em] text-[#f6d044]">
              Grade route by buyer requirement and application environment
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-[0.62rem] sm:text-[0.74rem]">
            <thead>
              <tr className="bg-[#f6d044] text-[#111820]">
                <th className="w-[28%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Buyer Requirement
                </th>
                <th className="w-[13%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Decision Link
                </th>
                <th className="w-[20%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Grade Route
                </th>
                <th className="w-[21%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Why It Fits
                </th>
                <th className="px-2.5 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Related Use
                </th>
              </tr>
            </thead>
            <tbody>
              {selectionRows.map((row) => (
                <tr key={row.need} className="bg-[#111111] align-middle">
                  <th className="border-r border-t border-white/14 px-2.5 py-3 text-left align-middle text-[0.58rem] font-semibold leading-[1.35] text-white sm:px-3 sm:text-[0.72rem] lg:text-[0.78rem]">
                    {row.need}
                  </th>
                  <td className="border-r border-t border-white/14 px-2.5 py-3 text-center leading-[1.35] sm:px-3">
                    <Link
                      href={row.href}
                      className="inline-block origin-center whitespace-nowrap font-semibold text-[#f6d044] transition duration-200 hover:scale-150 hover:text-white focus-visible:scale-150 focus-visible:text-white"
                    >
                      {row.link}
                    </Link>
                  </td>
                  <td className="border-r border-t border-white/14 px-2.5 py-3 leading-[1.35] text-white/78 sm:px-3">
                    {row.grade}
                  </td>
                  <td className="border-r border-t border-white/14 px-2.5 py-3 leading-[1.35] text-white/78 sm:px-3">
                    {row.reason}
                  </td>
                  <td className="border-t border-white/14 px-2.5 py-3 leading-[1.35] text-white/78 sm:px-3">
                    {row.route}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-[#101820] px-4 py-16 text-white sm:px-6 lg:px-8">
        <SectionHeader
          label="304 vs 316L vs 430"
          title="Compare the Most Common Grade Choices"
          description="Many stainless steel buyers narrow their decision to 304, 316L, or 430. These three grades cover most everyday trade-offs between corrosion resistance, price, surface appearance, fabrication, and application environment."
          tone="dark"
        />

        <div className="mx-auto mt-9 grid max-w-7xl gap-5 lg:grid-cols-3">
          {comparisonGrades.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative min-h-[21rem] overflow-hidden bg-black shadow-[0_18px_48px_rgba(0,0,0,0.28)]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover opacity-64 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.38)_46%,rgba(0,0,0,0.78)_100%)]" />
              <div className="relative grid min-h-[21rem] content-start p-6 pt-7">
                <h3 className="min-h-[2rem] text-2xl font-bold leading-tight text-[#f6d044]">
                  {item.title}
                </h3>
                <p className="mt-3 min-h-[6rem] text-sm leading-6 text-white/82">
                  {item.summary}
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/62">
                  Best for
                </p>
                <p className="mt-1 min-h-[3rem] text-sm leading-6 text-white/78">
                  {item.bestFor}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#f6f0e5] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          label="Grade + Product Form"
          title="Match Grades with Product Forms"
          description="A stainless steel grade decision is not complete until product form, surface finish, processing route, protective film, and export packing are confirmed together."
        />

        <div className="mx-auto mt-9 grid max-w-7xl gap-5 md:grid-cols-2">
          {productRoutes.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative min-h-[11rem] overflow-hidden bg-[#111820] text-white shadow-[0_16px_42px_rgba(17,24,32,0.16)]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-56 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,12,17,0.9)_0%,rgba(8,12,17,0.58)_100%)]" />
              <div className="relative flex min-h-[11rem] flex-col justify-between p-5">
                <div>
                  <h3 className="text-xl font-bold text-[#f6d044]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/82">
                    {item.text}
                  </p>
                </div>
                <span className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-white/70 transition group-hover:text-[#f6d044]">
                  Explore route
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          label="Application Routes"
          title="Explore Grades by Application"
          description="Application pages help buyers move from grade name to real use conditions, including cleaning, welding, corrosion exposure, visible surface quality, project packing, and final installation environment."
        />

        <div className="mx-auto mt-9 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {applicationRoutes.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative min-h-[16rem] overflow-hidden bg-[#101820] text-white shadow-[0_16px_42px_rgba(17,24,32,0.16)]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-62 transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,14,0.78)_0%,rgba(7,10,14,0.42)_48%,rgba(7,10,14,0.78)_100%)]" />
              <div className="relative grid min-h-[16rem] content-start p-5 pt-6">
                <h3 className="flex min-h-[3.4rem] items-start text-lg font-bold leading-tight text-[#f6d044]">
                  {item.title}
                </h3>
                <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-white/80">
                  {item.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
