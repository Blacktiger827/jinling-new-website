import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Stainless Steel Applications | Kitchen, Architecture, Food, Medical & Industrial Use",
  description:
    "Explore stainless steel application lines for kitchen equipment, food and beverage, architecture, medical and pharma, oil and gas, elevator interiors, chemical process, automotive exhaust, and water treatment.",
  alternates: {
    canonical: "/solutions/applications",
  },
};

const heroLinks = [
  { label: "Decorative Surfaces", href: "#buyer-need-navigation" },
  { label: "Hygienic Equipment", href: "#buyer-need-navigation" },
  { label: "Corrosion Environments", href: "#selection-matrix" },
  { label: "All Application Lines", href: "#all-application-lines" },
];

const buyerNeeds = [
  {
    title: "Decorative & Visible Surfaces",
    text: "For facade panels, elevator cabins, interior metalwork, kitchen fronts, appliance skins, and high-touch stainless steel surfaces where finish direction, scratch control, AFP, 8K mirror, hairline, No.4, and packing quality shape the final result.",
    image: "/images/applications/elevator-decoration/hero.webp",
    alt: "Decorative stainless steel elevator and interior panels",
    links: [
      { label: "Architecture", href: "/solutions/applications/architecture" },
      { label: "Elevator", href: "/solutions/applications/elevator-decoration" },
      { label: "Kitchen", href: "/solutions/applications/kitchen-equipment" },
    ],
  },
  {
    title: "Hygienic & Cleanable Equipment",
    text: "For food processing, beverage equipment, medical worktables, cleanroom panels, sanitary piping, process frames, and washdown areas where cleanability, 304 vs 316L, tube quality, weld treatment, and residue control matter.",
    image: "/images/applications/food-beverage/hero.webp",
    alt: "Food and beverage stainless steel processing equipment",
    links: [
      { label: "Food & Beverage", href: "/solutions/applications/food-beverage" },
      { label: "Medical & Pharma", href: "/solutions/applications/medical-pharmaceutical" },
      { label: "Tube & Pipe", href: "/products/stainless-steel-tube-pipe" },
    ],
  },
  {
    title: "Corrosion & Process Environments",
    text: "For oil and gas, chemical process, water treatment, tanks, pipe systems, wet zones, chloride exposure, industrial equipment, and export projects where corrosion review, 316L, duplex stainless steel, pipe, plate, and packing control are decisive.",
    image: "/images/applications/overview/industrial-tanks.jpg",
    alt: "Industrial stainless steel tanks for corrosion and process environments",
    links: [
      { label: "Oil & Gas", href: "/solutions/applications/oil-gas" },
      { label: "Chemical", href: "/solutions/applications/chemical-petrochemical" },
      { label: "Water Treatment", href: "/solutions/applications/water-treatment-desalination" },
    ],
  },
  {
    title: "Heat, Exhaust & Fabrication",
    text: "For automotive exhaust systems, formed parts, industrial covers, fabricated assemblies, heat exposure, condensation zones, welding, bending, and cost-sensitive stainless steel routes that must still perform in use.",
    image: "/images/applications/automotive-exhaust/hero.webp",
    alt: "Automotive exhaust stainless steel application",
    links: [
      { label: "Automotive Exhaust", href: "/solutions/applications/automotive-exhaust" },
      { label: "Core Grades", href: "/grades" },
      { label: "Processing", href: "/solutions/capabilities" },
    ],
  },
];

const matrixRows = [
  {
    need: "Visible panels",
    risk: "Finish direction, fingerprints, scratches, flatness",
    route: "304 sheet, 8K mirror, hairline, No.4, AFP, PVD, protective film",
    links: [
      { label: "Architecture", href: "/solutions/applications/architecture" },
      { label: "Elevator", href: "/solutions/applications/elevator-decoration" },
    ],
  },
  {
    need: "Food-contact zones",
    risk: "Cleanability, residue, wet cleaning, hygiene expectations",
    route: "304 / 316L sheet, 2B, No.4, polished finish, sanitary tube",
    links: [
      { label: "Food & Beverage", href: "/solutions/applications/food-beverage" },
      { label: "316L", href: "/grades/316l-stainless-steel" },
    ],
  },
  {
    need: "Cleanroom equipment",
    risk: "Contamination control, surface damage, cleaning chemicals",
    route: "304 / 316L sheet or tube, controlled finish, protective film",
    links: [
      { label: "Medical & Pharma", href: "/solutions/applications/medical-pharmaceutical" },
      { label: "Protective Film", href: "/solutions/capabilities/protective-film" },
    ],
  },
  {
    need: "Wet process systems",
    risk: "Chloride, chemicals, standing water, welded zones",
    route: "316L / 2205 duplex review, pipe, plate, sheet, export packing",
    links: [
      { label: "Chemical", href: "/solutions/applications/chemical-petrochemical" },
      { label: "Tube & Pipe", href: "/products/stainless-steel-tube-pipe" },
    ],
  },
  {
    need: "Water treatment",
    risk: "Potable water, wastewater, seawater, chloride corrosion",
    route: "304 / 316L / duplex route by exposure, pipe, sheet, fabricated parts",
    links: [
      { label: "Water Treatment", href: "/solutions/applications/water-treatment-desalination" },
      { label: "2205 Duplex", href: "/grades/2205-duplex-stainless-steel" },
    ],
  },
  {
    need: "Exhaust fabrication",
    risk: "Heat, condensate, forming, welding, cost control",
    route: "409L, 439, 441, 304 routes for exhaust tubes, tips, shells, and parts",
    links: [
      { label: "Automotive Exhaust", href: "/solutions/applications/automotive-exhaust" },
      { label: "Core Grades", href: "/grades" },
    ],
  },
];

const applicationLines = [
  {
    title: "Kitchen Equipment",
    href: "/solutions/applications/kitchen-equipment",
    image: "/images/applications/kitchen-equipment/scene-1.webp",
    alt: "Stainless steel for commercial kitchen equipment",
    text: "Worktops, sinks, cabinets, splashbacks, appliance panels, food-service counters, and fabricated kitchen parts.",
  },
  {
    title: "Food & Beverage",
    href: "/solutions/applications/food-beverage",
    image: "/images/applications/food-beverage/hero.webp",
    alt: "Stainless steel for food and beverage processing",
    text: "Food-contact tables, tanks, conveyors, washdown areas, sanitary piping, filling equipment, and cleanable processing lines.",
  },
  {
    title: "Architecture",
    href: "/solutions/applications/architecture",
    image: "/images/applications/architecture/hero.webp",
    alt: "Architectural stainless steel panels and facade cladding",
    text: "Facade cladding, wall panels, ceilings, column covers, trims, coastal projects, and public-space metalwork.",
  },
  {
    title: "Medical & Pharma",
    href: "/solutions/applications/medical-pharmaceutical",
    image: "/images/applications/medical-pharmaceutical/hero.webp",
    alt: "Stainless steel for medical and pharmaceutical equipment",
    text: "Cleanroom panels, sterile worktables, process piping, equipment frames, cabinets, and wash or sterilization zones.",
  },
  {
    title: "Oil & Gas",
    href: "/solutions/applications/oil-gas",
    image: "/images/applications/overview/industrial-tanks.jpg",
    alt: "Stainless steel tanks and process equipment for oil and gas applications",
    text: "Process piping, tanks, skids, support structures, offshore exposure, pressure-related fabrication, and export project control.",
  },
  {
    title: "Elevator & Interiors",
    href: "/solutions/applications/elevator-decoration",
    image: "/images/applications/elevator-decoration/hero.webp",
    alt: "Stainless steel elevator panels and interior decoration",
    text: "Cabin panels, elevator doors, ceilings, handrails, trims, lobby wall panels, and decorative interior metalwork.",
  },
  {
    title: "Chemical Process",
    href: "/solutions/applications/chemical-petrochemical",
    image: "/images/applications/chemical-petrochemical/hero.webp",
    alt: "Stainless steel for chemical process equipment",
    text: "Chemical tanks, process pipework, mixers, wet areas, structural parts, and corrosion-sensitive industrial equipment.",
  },
  {
    title: "Automotive Exhaust",
    href: "/solutions/applications/automotive-exhaust",
    image: "/images/applications/automotive-exhaust/hero.webp",
    alt: "Stainless steel automotive exhaust applications",
    text: "Exhaust tubes, muffler shells, catalytic converter parts, tailpipe trims, heat shields, and welded exhaust assemblies.",
  },
  {
    title: "Water Treatment",
    href: "/solutions/applications/water-treatment-desalination",
    image: "/images/applications/overview/industrial-pipes.jpg",
    alt: "Stainless steel pipe systems for water treatment and desalination",
    text: "Water treatment tanks, pipe systems, desalination support, filtration equipment, pump areas, and chloride-exposed components.",
  },
];

const routeSteps = [
  {
    number: "01",
    title: "Start With the Service Environment",
    text: "Define whether the stainless steel will face food contact, visible decoration, wet process media, chloride exposure, heat, cleanroom use, or export fabrication.",
  },
  {
    number: "02",
    title: "Select Grade and Product Form",
    text: "Connect the application to 304, 316L, duplex, 400 series, sheet, coil, tube, pipe, plate, bar, or fabricated part routes before price comparison.",
  },
  {
    number: "03",
    title: "Match Finish, Film and Processing",
    text: "Confirm surface finish, protective film, cut-to-length, slitting, bending, welding, packing, and delivery controls before production starts.",
  },
];

const supportLinks = [
  {
    title: "Surface Finishing",
    href: "/solutions/capabilities/surface-finish-capability",
    text: "Mirror, hairline, No.4, AFP, BA, embossed, and decorative stainless steel finish support.",
  },
  {
    title: "Cut-to-Length",
    href: "/solutions/capabilities/cut-to-length",
    text: "Sheet sizing support before bending, fabrication, packing, and installation.",
  },
  {
    title: "Protective Film",
    href: "/solutions/capabilities/protective-film",
    text: "Scratch protection for visible, hygienic, export, and high-touch stainless steel surfaces.",
  },
  {
    title: "Tube & Pipe",
    href: "/products/stainless-steel-tube-pipe",
    text: "Industrial, decorative, structural, and hygienic stainless steel tube and pipe routes.",
  },
  {
    title: "Packing & Logistics",
    href: "/solutions/capabilities/packaging-logistics",
    text: "Export packing, pallet protection, marking, documentation, and delivery control.",
  },
];

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

export default function ApplicationsPage() {
  return (
    <main className="bg-[#f6f0e5] text-[#111820]">
      <section className="relative overflow-hidden bg-[#0d141b] text-white">
        <div className="absolute inset-0 opacity-[0.74]">
          <Image
            src="/images/applications/architecture/hero.webp"
            alt="Architectural stainless steel application background"
            fill
            className="object-cover object-[center_48%]"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.86)_0%,rgba(13,20,27,0.63)_48%,rgba(13,20,27,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(13,20,27,0)_0%,rgba(246,240,229,0.98)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <div className="mx-auto max-w-4xl text-left">
            <div className="inline-flex items-center gap-4">
              <SectionLabel tone="dark">Stainless steel applications</SectionLabel>
              <span className="h-px w-12 bg-[#f6d044]/70" />
            </div>
            <h1 className="mt-6 max-w-[66rem] text-[2.4rem] font-semibold leading-[1.04] text-white sm:text-[3.3rem] lg:text-[4.26rem]">
              Stainless Steel Application Lines
            </h1>
            <p className="mt-6 max-w-[54rem] text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem]">
              Jinling Metals helps buyers choose stainless steel by application
              environment, not only by product name. Use these application lines
              to connect kitchen equipment, food and beverage processing,
              architecture, medical and pharma, oil and gas, elevator interiors,
              chemical process, automotive exhaust, and water treatment projects
              to the right grade, finish, product form, processing route, and
              export packing method.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroLinks.map((item, index) => (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  className={`border px-5 py-3 text-sm font-semibold transition ${
                    index % 2 === 0
                      ? "border-[#f6d044] bg-[#f6d044] text-[#111820] hover:bg-white"
                      : "border-white/70 bg-white/10 text-white hover:border-[#f6d044] hover:text-[#f6d044]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="buyer-need-navigation" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Buyer needs"
            title="Find Application Routes by Buying Concern"
            description="Most stainless steel application decisions start with service conditions: will the material be visible, cleaned often, exposed to corrosion, fabricated after delivery, or used in a regulated environment? This section groups the nine application lines by the way buyers evaluate material risk and project requirements."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {buyerNeeds.map((item) => (
              <article
                key={item.title}
                className="group relative min-h-[25rem] overflow-hidden bg-[#111820] text-white shadow-[0_18px_46px_rgba(0,0,0,0.18)]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-85"
                  sizes="(min-width: 1024px) 25vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,13,17,0.46)_0%,rgba(10,13,17,0.88)_100%)]" />
                <div className="relative flex h-full flex-col justify-between p-6">
                  <div>
                    <h3 className="text-[1.42rem] font-semibold leading-tight text-[#f6d044]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-white/82">{item.text}</p>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="bg-[#f6d044] px-3 py-2 text-[0.72rem] font-semibold text-[#111820] transition hover:bg-white"
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

      <section id="selection-matrix" className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Selection guide"
            title="Match Application Risk to Material Route"
            description="Use this application guide as an early purchasing reference. It helps buyers connect service environment, corrosion risk, hygiene, visible surface quality, fabrication, and export protection to the right stainless steel route before ordering."
          />
          <div className="mt-8 overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.22)]">
            <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2.5 text-center">
              <p className="text-[0.74rem] font-semibold uppercase leading-4 tracking-[0.08em] text-[#f6d044]">
                Application Line Decision Matrix
              </p>
            </div>
            <table className="w-full table-fixed border-collapse text-left text-[0.62rem] sm:text-[0.74rem]">
              <thead>
                <tr className="bg-[#f6d044] text-[#101820]">
                  <th className="w-[16%] px-2.5 py-3 font-semibold sm:px-4">Buyer Need</th>
                  <th className="w-[25%] px-2.5 py-3 font-semibold sm:px-4">Main Risk</th>
                  <th className="w-[35%] px-2.5 py-3 font-semibold sm:px-4">Recommended Route</th>
                  <th className="w-[24%] px-2.5 py-3 font-semibold sm:px-4">Recommended Page</th>
                </tr>
              </thead>
              <tbody>
                {matrixRows.map((row) => (
                  <tr
                    key={row.need}
                    className="border-b border-white/10 bg-[#111111] align-middle last:border-b-0"
                  >
                    <td className="px-2.5 py-4 font-semibold text-white sm:px-4">
                      {row.need}
                    </td>
                    <td className="px-2.5 py-4 leading-5 text-white/72 sm:px-4">
                      {row.risk}
                    </td>
                    <td className="px-2.5 py-4 leading-5 text-white/78 sm:px-4">
                      {row.route}
                    </td>
                    <td className="px-2.5 py-4 sm:px-4">
                      <div className="flex flex-wrap gap-2">
                        {row.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="inline-block origin-center whitespace-nowrap font-semibold text-[#f6d044] transition duration-200 hover:scale-150 hover:text-white focus-visible:scale-150 focus-visible:text-white"
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

      <section
        id="all-application-lines"
        className="bg-[#0d141b] px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-18"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="All application lines"
            title="Stainless Steel Applications"
            description="Each application page helps buyers move from project environment to stainless steel grade, surface finish, product form, processing route, and packing requirements."
            tone="dark"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {applicationLines.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative min-h-[13rem] overflow-hidden bg-[#111820] shadow-[0_14px_34px_rgba(0,0,0,0.24)]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover opacity-68 transition duration-500 group-hover:scale-105 group-hover:opacity-84"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,13,17,0.36)_0%,rgba(10,13,17,0.9)_100%)]" />
                <div className="relative flex min-h-[13rem] flex-col justify-start p-5">
                  <h3 className="text-[1.18rem] font-semibold leading-tight text-[#f6d044]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.78rem] leading-5 text-white/78">{item.text}</p>
                  <span className="mt-auto inline-flex w-fit bg-[#f6d044] px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-[#111820]">
                    Open application
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Material route"
            title="From Application to Stainless Steel Decision"
            description="Start by defining the operating condition, then choose the right stainless steel grade, product form, surface finish, protection method, processing route, and export packing plan."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {routeSteps.map((step, index) => (
              <article
                key={step.number}
                className={`min-h-[16rem] p-7 shadow-[0_18px_40px_rgba(0,0,0,0.12)] ${
                  index === 1
                    ? "bg-[#f6d044] text-[#111820]"
                    : "bg-[#111820] text-white"
                }`}
              >
                <p
                  className={`text-[0.82rem] font-semibold uppercase tracking-[0.18em] ${
                    index === 1 ? "text-[#111820]/70" : "text-[#f6d044]"
                  }`}
                >
                  {step.number}
                </p>
                <h3 className="mt-5 text-[1.52rem] font-semibold leading-tight">
                  {step.title}
                </h3>
                <p
                  className={`mt-4 text-sm leading-6 ${
                    index === 1 ? "text-[#111820]/78" : "text-white/72"
                  }`}
                >
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-18">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Processing support"
            title="Connect Application Pages to Capabilities"
            description="These routes connect application requirements with the processing capabilities that support real production, surface protection, hygienic use, corrosion control, export packing, and delivery needs."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {supportLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex min-h-[14rem] flex-col justify-between bg-[#111820] p-5 text-white transition hover:-translate-y-1 hover:bg-[#0b0b0b]"
              >
                <div>
                  <h3 className="text-[1.15rem] font-semibold leading-tight text-[#f6d044]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[0.82rem] leading-5 text-white/72">{item.text}</p>
                </div>
                <span className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-white/62 group-hover:text-[#f6d044]">
                  View route
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
