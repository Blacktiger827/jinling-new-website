import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Stainless Steel Processing Capabilities | Surface Finish, Cutting, Film & Packing",
  description:
    "Explore Jinling stainless steel processing capabilities, including surface finishing, cut-to-length, slitting, edging, protective film, export packing, and stainless steel delivery support.",
  alternates: {
    canonical: "/solutions/capabilities",
  },
};

const heroLinks = [
  { label: "Stainless Steel Sheet", href: "/products/stainless-steel-sheet" },
  { label: "Stainless Steel Coil", href: "/products/stainless-steel-coil" },
  { label: "Tube & Pipe", href: "/products/stainless-steel-tube-pipe" },
  {
    label: "Surface Finishing",
    href: "/solutions/capabilities/surface-finish-capability",
  },
];

const buyerNeedRoutes = [
  {
    title: "Decorative Surface",
    text: "Choose this route when buyers need mirror, hairline, No.4, AFP, embossed, or decorative stainless steel surface finishing for visible parts.",
    image: "/images/capabilities/surface-finishing/afp-brushed-panels.jpeg",
    alt: "Decorative stainless steel surface finishing capability",
    href: "/solutions/capabilities/surface-finish-capability",
    cta: "Explore Surface Finishing",
  },
  {
    title: "Accurate Sheet Size",
    text: "Choose this route when stainless steel sheet or coil needs controlled length, flatness, handling protection, and stable size before fabrication.",
    image: "/images/capabilities/cut-to-length/cut-to-length-cover.jpeg",
    alt: "Stainless steel cut-to-length processing route",
    href: "/solutions/capabilities/cut-to-length",
    cta: "Explore Cut-to-Length",
  },
  {
    title: "Narrow Width & Edge",
    text: "Choose this route for stainless steel strip, narrow-width coil, edge quality, tube making, profiles, trims, and repeated production sizes.",
    image: "/images/capabilities/slitting-edging/slitting-line-cover.jpeg",
    alt: "Stainless steel slitting and edging capability",
    href: "/solutions/capabilities/slitting-edging",
    cta: "Explore Slitting",
  },
  {
    title: "Surface Protection",
    text: "Choose this route when visible stainless steel panels must be protected before cutting, bending, welding, assembly, transport, or installation.",
    image: "/images/capabilities/protective-film/hero.webp",
    alt: "Protective film for stainless steel sheet and panel",
    href: "/solutions/capabilities/protective-film",
    cta: "Explore Protective Film",
  },
  {
    title: "Export Packing",
    text: "Choose this route when stainless steel coils, sheets, tubes, or decorative panels need packing control for long-distance export delivery.",
    image: "/images/capabilities/packaging-logistics/packing-factory-cover.jpeg",
    alt: "Export packing and logistics for stainless steel orders",
    href: "/solutions/capabilities/packaging-logistics",
    cta: "Explore Packing",
  },
];

const selectionRows = [
  {
    requirement: "Visible decorative panel",
    concern: "Surface consistency, grain direction, fingerprints, scratches",
    route: "Surface finishing, AFP option, protective film",
    link: {
      label: "Surface Finishing",
      href: "/solutions/capabilities/surface-finish-capability",
    },
  },
  {
    requirement: "Fabricated sheet part",
    concern: "Flatness, size accuracy, bending route, surface protection",
    route: "Cut-to-length sheet with film before fabrication",
    link: {
      label: "Cut-to-Length",
      href: "/solutions/capabilities/cut-to-length",
    },
  },
  {
    requirement: "Narrow strip or tube input",
    concern: "Width tolerance, edge quality, repeat order stability",
    route: "Slitting and edging route for stainless steel coil",
    link: {
      label: "Slitting & Edging",
      href: "/solutions/capabilities/slitting-edging",
    },
  },
  {
    requirement: "High-touch surface",
    concern: "Fingerprints, cleaning frequency, visible finish quality",
    route: "AFP stainless steel or protected decorative sheet",
    link: {
      label: "AFP Finish",
      href: "/surfaces/stainless-steel-afp-finish",
    },
  },
  {
    requirement: "Export project order",
    concern: "Transport damage, marking, pallet control, documentation",
    route: "Film, paper interleaving, pallet packing, export release control",
    link: {
      label: "Packaging",
      href: "/solutions/capabilities/packaging-logistics",
    },
  },
  {
    requirement: "Application material review",
    concern: "Grade, surface, form, processing, and final use environment",
    route: "Connect product form with application-specific requirements",
    link: {
      label: "Applications",
      href: "/solutions/applications",
    },
  },
];

const processSteps = [
  {
    step: "01",
    title: "Confirm Product Form",
    text: "Start from stainless steel coil, sheet, plate, tube, pipe, or bar based on the buyer's production route.",
  },
  {
    step: "02",
    title: "Match Grade & Finish",
    text: "Review 304, 316L, 430, duplex, 2B, No.4, hairline, mirror, AFP, or other surface requirements.",
  },
  {
    step: "03",
    title: "Plan Processing",
    text: "Set cut-to-length, slitting, edging, surface finishing, forming, or pre-fabrication requirements before release.",
  },
  {
    step: "04",
    title: "Protect the Surface",
    text: "Apply protective film, paper interleaving, or handling control for visible, hygienic, or project panels.",
  },
  {
    step: "05",
    title: "Prepare Delivery",
    text: "Confirm packing, marking, batch separation, export documents, and loading support before shipment.",
  },
];

const applicationCards = [
  {
    title: "Kitchen Equipment",
    text: "Cut-to-size sheet, brushed finish, AFP panels, and protective film for worktops, cabinets, sinks, and appliance panels.",
    href: "/solutions/applications/kitchen-equipment",
    image: "/images/applications/kitchen-equipment/hero.webp",
  },
  {
    title: "Elevator & Interiors",
    text: "Decorative stainless steel surfaces, grain direction, film protection, and packing control for elevator cabin panels and interior metalwork.",
    href: "/solutions/applications/elevator-decoration",
    image: "/images/applications/elevator-decoration/hero.webp",
  },
  {
    title: "Food & Beverage",
    text: "Sheet, tube, sanitary routes, cleanable finishes, weld planning, and material protection for food processing equipment.",
    href: "/solutions/applications/food-beverage",
    image: "/images/applications/food-beverage/hero.webp",
  },
  {
    title: "Oil & Gas",
    text: "Pipe, plate, fabrication support, export packing, and corrosion-resistant grade review for industrial oil and gas projects.",
    href: "/solutions/applications/oil-gas",
    image: "/images/capabilities/applications-industrial-tanks.jpg",
  },
  {
    title: "Chemical Process",
    text: "316L, duplex, pipe, plate, and project delivery support for chemical processing and corrosion-risk environments.",
    href: "/solutions/applications/chemical-petrochemical",
    image: "/images/applications/chemical-petrochemical/hero.webp",
  },
  {
    title: "Water Treatment",
    text: "Tube, pipe, plate, protective packing, and corrosion review for water treatment and desalination equipment.",
    href: "/solutions/applications/water-treatment-desalination",
    image: "/images/capabilities/applications-process-piping.jpg",
  },
];

const relatedCapabilities = [
  {
    title: "Surface Finishing",
    text: "Mirror, hairline, No.4, AFP, BA, embossed, and decorative stainless steel finish options.",
    href: "/solutions/capabilities/surface-finish-capability",
    image: "/images/capabilities/surface-finishing/surface-finish-related.jpeg",
  },
  {
    title: "Protective Film",
    text: "Film selection and surface protection before cutting, bending, welding, assembly, and export delivery.",
    href: "/solutions/capabilities/protective-film",
    image: "/images/capabilities/protective-film/hero.webp",
  },
  {
    title: "Packaging & Logistics",
    text: "Export packing support for stainless steel coil, sheet, tube, pipe, and decorative project panels.",
    href: "/solutions/capabilities/packaging-logistics",
    image: "/images/capabilities/packaging-logistics/mirror-surface-related.jpeg",
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
      <p
        className={`mt-5 text-sm leading-7 sm:text-[0.98rem] ${
          tone === "dark" ? "text-white/72" : "text-[#53606b]"
        }`}
      >
        {description}
      </p>
    </header>
  );
}

export default function CapabilitiesPage() {
  return (
    <main className="bg-[#f6f0e5] text-[#111820]">
      <section className="relative overflow-hidden bg-[#0d141b] text-white">
        <div className="absolute inset-0 opacity-[0.74]">
          <Image
            src="/images/capabilities/surface-finishing/hero.webp"
            alt="Stainless steel surface finishing and processing capability"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_48%] blur-[1px]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.88)_0%,rgba(13,20,27,0.62)_48%,rgba(13,20,27,0.26)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(13,20,27,0)_0%,rgba(246,240,229,0.98)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <div className="mx-auto max-w-4xl text-left">
            <div className="inline-flex items-center gap-4">
              <SectionLabel tone="dark">Stainless steel processing</SectionLabel>
              <span className="h-px w-12 bg-[#f6d044]/70" />
            </div>
            <h1 className="mt-6 max-w-[66rem] text-[2.4rem] font-semibold leading-[1.04] text-white sm:text-[3.3rem] lg:text-[4.26rem]">
              Stainless Steel Processing Capabilities
            </h1>
            <p className="mt-6 max-w-[54rem] text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem]">
              Jinling Metals supports global stainless steel buyers with
              surface finishing, cut-to-length, slitting, edging, protective
              film, export packing, and delivery control. We help buyers connect
              stainless steel sheet, coil, tube, pipe, and decorative surfaces
              with the processing route required before production.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {heroLinks.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border px-5 py-3 text-[0.78rem] font-bold uppercase tracking-[0.12em] transition ${
                    index % 2 === 0
                      ? "border-[#f6d044] bg-[#f6d044] text-[#111827] hover:bg-white"
                      : "border-white/34 bg-white/10 text-white hover:border-[#f6d044] hover:text-[#f6d044]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <SectionHeader
          label="Buyer Needs"
          title="Choose Processing by Requirement"
          description="Stainless steel processing should be selected by how the material will be used, fabricated, protected, and shipped. These routes help buyers move from a material request to a production-ready order."
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-5">
          {buyerNeedRoutes.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative min-h-[300px] overflow-hidden bg-black"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 20vw, 100vw"
                className="object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-86"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/38 to-black/84" />
              <div className="relative z-10 flex h-full min-h-[300px] flex-col justify-between p-5">
                <div>
                  <h3 className="text-[1.05rem] font-semibold leading-tight text-[#f6d044]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[0.82rem] leading-6 text-white/82">
                    {item.text}
                  </p>
                </div>
                <span className="mt-6 inline-flex w-fit bg-[#f6d044] px-4 py-2 text-xs font-bold text-[#111827]">
                  {item.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <SectionHeader
          label="Selection Guide"
          title="Stainless Steel Processing Guide"
          description="Before placing a stainless steel order, buyers should confirm surface appearance, size accuracy, edge quality, fabrication sequence, packing method, and final application environment."
        />
        <div className="mx-auto mt-10 max-w-7xl overflow-hidden border border-[#d9c889]/70 bg-[#111820]">
          <div className="border-b border-[#f6d044]/30 bg-[#0b0f14] px-4 py-2.5 text-center">
            <p className="text-[0.74rem] font-semibold uppercase leading-4 tracking-[0.08em] text-[#f6d044]">
              Processing route by buyer requirement and release control
            </p>
          </div>
          <div className="overflow-hidden">
            <table className="w-full table-fixed border-collapse text-left text-[0.62rem] sm:text-[0.74rem]">
              <thead>
                <tr className="bg-[#f6d044] text-[#101820]">
                  <th className="w-[23%] border-r border-[#111820]/24 px-3 py-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em]">
                    Buyer Requirement
                  </th>
                  <th className="w-[27%] border-r border-[#111820]/24 px-3 py-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em]">
                    Processing Concern
                  </th>
                  <th className="w-[31%] border-r border-[#111820]/24 px-3 py-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em]">
                    Recommended Route
                  </th>
                  <th className="px-3 py-3 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em]">
                    Recommended Page
                  </th>
                </tr>
              </thead>
              <tbody>
                {selectionRows.map((row) => (
                  <tr
                    key={row.requirement}
                    className="bg-[#111820] align-middle text-white"
                  >
                    <td className="border-r border-t border-white/14 px-3 py-3 font-semibold leading-[1.35]">
                      {row.requirement}
                    </td>
                    <td className="border-r border-t border-white/14 px-3 py-3 leading-[1.45] text-white/78">
                      {row.concern}
                    </td>
                    <td className="border-r border-t border-white/14 px-3 py-3 leading-[1.45] text-white/78">
                      {row.route}
                    </td>
                    <td className="border-t border-white/14 px-3 py-3 text-center">
                      <Link
                        href={row.link.href}
                        className="inline-block origin-center whitespace-nowrap font-semibold text-[#f6d044] transition duration-200 hover:scale-125 hover:text-white focus-visible:scale-125 focus-visible:text-white"
                      >
                        {row.link.label}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#f6d044] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <header className="mx-auto max-w-4xl text-left">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#111820]/72">
              Process Route
            </p>
            <h2 className="mt-5 text-[1.9rem] font-semibold leading-[1.08] text-[#111820] sm:text-[2.35rem] lg:whitespace-nowrap lg:text-[2.85rem]">
              From Material to Export Delivery
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#2f3137] sm:text-[0.98rem]">
              A good stainless steel processing plan reduces wrong grade
              selection, surface damage, size mismatch, packing risk, and
              delivery delay before the material reaches the buyer&apos;s production
              line.
            </p>
          </header>
          <div className="mt-10 grid gap-4 lg:grid-cols-5">
            {processSteps.map((item, index) => (
              <div
                key={item.step}
                className={`min-h-[210px] p-5 ${
                  index % 2 === 0
                    ? "bg-[#111820] text-white"
                    : "bg-white text-[#111820]"
                }`}
              >
                <span
                  className={`text-sm font-black ${
                    index % 2 === 0 ? "text-[#f6d044]" : "text-[#a57913]"
                  }`}
                >
                  {item.step}
                </span>
                <h3 className="mt-5 text-[1.05rem] font-semibold leading-tight">
                  {item.title}
                </h3>
                <p
                  className={`mt-4 text-[0.82rem] leading-6 ${
                    index % 2 === 0 ? "text-white/76" : "text-[#4b5563]"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111820] px-4 py-14 text-white sm:px-6 sm:py-18 lg:px-8">
        <SectionHeader
          label="Application Support"
          title="Processing Support by Application"
          description="Different industries require different decisions before production. Jinling connects grade, form, finish, protection, and packing with the practical application environment."
          tone="dark"
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {applicationCards.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative min-h-[270px] overflow-hidden bg-black"
            >
              <Image
                src={item.image}
                alt={`${item.title} stainless steel application processing support`}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover opacity-68 transition duration-500 group-hover:scale-105 group-hover:opacity-84"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/72 via-black/36 to-black/82" />
              <div className="relative z-10 flex min-h-[270px] flex-col justify-between p-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#f6d044]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-white/80">
                    {item.text}
                  </p>
                </div>
                <span className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-white/70 group-hover:text-[#f6d044]">
                  View Application
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
        <SectionHeader
          label="Next Routes"
          title="Related Capabilities"
          description="Explore the processing routes most often connected with visible stainless steel sheet, fabricated panels, export orders, and application-specific purchasing decisions."
        />
        <div className="mx-auto mt-10 grid max-w-7xl gap-5 md:grid-cols-3">
          {relatedCapabilities.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group overflow-hidden border border-[#e5e1d5] bg-[#111827] text-white"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={`${item.title} stainless steel capability`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover opacity-76 transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/74 to-transparent" />
              </div>
              <div className="min-h-[190px] p-6">
                <h3 className="text-xl font-semibold text-[#f6d044]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/76">
                  {item.text}
                </p>
                <span className="mt-6 inline-flex bg-[#f6d044] px-4 py-2 text-xs font-bold text-[#111827] transition group-hover:bg-white">
                  Explore Capability
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
