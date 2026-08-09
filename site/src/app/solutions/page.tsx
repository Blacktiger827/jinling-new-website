import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stainless Steel Solutions | Application, Surface & Processing Route",
  description:
    "Match stainless steel grade, product form, surface finish, processing route, protective film, packing, and export control to real project conditions with Jinling Metals.",
  alternates: {
    canonical: "/solutions",
  },
};

type LinkItem = {
  label: string;
  href: string;
};

type RouteCard = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  objectPosition: string;
  links: LinkItem[];
};

const heroLinks: Array<LinkItem & { tone: "primary" | "secondary" }> = [
  {
    label: "Explore Application Lines",
    href: "/solutions/applications",
    tone: "primary",
  },
  {
    label: "View Process Capabilities",
    href: "/solutions/capabilities",
    tone: "secondary",
  },
];

const startingPoints: RouteCard[] = [
  {
    eyebrow: "Industry conditions",
    title: "Application Environment",
    description:
      "Start here when your stainless steel selection depends on kitchen equipment, food and beverage processing, medical and pharma equipment, architecture, elevator interiors, oil and gas, chemical process, water treatment, or automotive exhaust service conditions.",
    image: "/images/products/core-forms/related-application-lines.jpg",
    alt: "Stainless steel applications for industrial and architectural buying routes",
    objectPosition: "center 52%",
    links: [{ label: "Application Lines", href: "/solutions/applications" }],
  },
  {
    eyebrow: "Fabrication support",
    title: "Processing Requirement",
    description:
      "Use this route when the order depends on surface finishing, slitting, cut-to-length, edge control, protective film, export packing, marking, or delivery support before shipment.",
    image: "/images/products/core-forms/related-process-capabilities.jpeg",
    alt: "Stainless steel processing and packing capability route",
    objectPosition: "center 50%",
    links: [{ label: "Process Capabilities", href: "/solutions/capabilities" }],
  },
  {
    eyebrow: "Material selection",
    title: "Material Route",
    description:
      "Choose this path when buyers need to compare stainless steel sheet, coil, tube, pipe, bar, 304, 316L, 2205 duplex, 8K mirror finish, AFP finish, or other grade and surface combinations.",
    image: "/images/products/core-forms/related-core-grades.jpg",
    alt: "Stainless steel material grades and product route selection",
    objectPosition: "center 50%",
    links: [
      { label: "Products", href: "/products" },
      { label: "Surfaces", href: "/surfaces" },
      { label: "Grades", href: "/grades" },
    ],
  },
];

const decisionRows = [
  {
    question: "Need stainless steel for a specific industry?",
    keyDecision: "Application environment, corrosion, hygiene, visibility",
    route: "Start from Application Lines",
    link: { label: "Application Lines", href: "/solutions/applications" },
  },
  {
    question: "Need a decorative or visible surface?",
    keyDecision: "Finish consistency, fingerprint control, scratch protection",
    route: "Surface Finish / 8K / AFP",
    link: { label: "Surface Finishes", href: "/surfaces" },
  },
  {
    question: "Need material for cutting, bending, or export packing?",
    keyDecision: "Flatness, film, size, edge quality, packing",
    route: "Process Capabilities",
    link: { label: "Capabilities", href: "/solutions/capabilities" },
  },
  {
    question: "Need food, pharma, or cleanable equipment material?",
    keyDecision: "Hygiene, cleaning chemicals, weld treatment",
    route: "316L / Tube & Pipe / Application Lines",
    link: { label: "316L Stainless Steel", href: "/grades/316l-stainless-steel" },
  },
  {
    question: "Need corrosion-resistant industrial material?",
    keyDecision: "Chloride, chemicals, water, offshore exposure",
    route: "316L / 2205 Duplex / Industrial Applications",
    link: { label: "2205 Duplex", href: "/grades/2205-duplex-stainless-steel" },
  },
];

const supportSteps = [
  {
    number: "01",
    title: "Understand the application environment",
    description:
      "Confirm food contact, visible surface needs, wet exposure, chloride, chemicals, heat, or industrial service conditions before choosing a stainless steel route.",
    links: [
      { label: "Application Lines", href: "/solutions/applications" },
      { label: "Grades", href: "/grades" },
    ],
  },
  {
    number: "02",
    title: "Confirm grade, product form, and surface finish",
    description:
      "Match 304, 316L, 2205, sheet, coil, tube, pipe, 8K, AFP, hairline, or No.4 finish with the buying purpose and fabrication plan.",
    links: [
      { label: "Core Forms", href: "/products" },
      { label: "Surface Finishes", href: "/surfaces" },
    ],
  },
  {
    number: "03",
    title: "Plan processing before production",
    description:
      "Review cut-to-length, slitting, edging, surface finishing, bending allowance, flatness, and tolerance before material release.",
    links: [
      { label: "Cut-to-Length", href: "/solutions/capabilities/cut-to-length" },
      { label: "Capabilities", href: "/solutions/capabilities" },
    ],
  },
  {
    number: "04",
    title: "Protect visible and functional surfaces",
    description:
      "Use protective film, interleaving, and controlled handling when sheets, panels, or parts must stay clean before assembly or installation.",
    links: [{ label: "Protective Film", href: "/solutions/capabilities/protective-film" }],
  },
  {
    number: "05",
    title: "Control packing, marking, and export delivery",
    description:
      "Confirm package type, marks, batch separation, documents, pallet method, and logistics requirements before shipment.",
    links: [{ label: "Packaging & Logistics", href: "/solutions/capabilities/packaging-logistics" }],
  },
];

const featuredPaths: RouteCard[] = [
  {
    eyebrow: "Surface-led projects",
    title: "Decorative & Visible Surfaces",
    description:
      "For 8K mirror, AFP, hairline, No.4, elevator panels, architectural stainless steel, appliance panels, and other visible decorative applications.",
    image: "/images/products/core-forms/related-finish-options.jpeg",
    alt: "Decorative stainless steel surface finish project route",
    objectPosition: "center 50%",
    links: [{ label: "Explore Surfaces", href: "/surfaces" }],
  },
  {
    eyebrow: "Cleanable environments",
    title: "Hygienic & Cleanable Equipment",
    description:
      "For food and beverage processing, medical and pharma equipment, 316L stainless steel, sanitary tube, cleanability, and weld treatment decisions.",
    image: "/images/applications/food-beverage/hero.jpg",
    alt: "Food and beverage stainless steel cleanable equipment route",
    objectPosition: "center 50%",
    links: [{ label: "Food & Beverage", href: "/solutions/applications/food-beverage" }],
  },
  {
    eyebrow: "Corrosion review",
    title: "Industrial Corrosion Environments",
    description:
      "For oil and gas, chemical process, water treatment, 316L stainless steel, 2205 duplex stainless steel, offshore exposure, and wet service conditions.",
    image: "/images/products/core-forms/application-oil-gas-tanks.jpg",
    alt: "Oil gas chemical and water treatment stainless steel corrosion route",
    objectPosition: "center 48%",
    links: [{ label: "Oil & Gas", href: "/solutions/applications/oil-gas" }],
  },
  {
    eyebrow: "Production release",
    title: "Processing & Export Support",
    description:
      "For cut-to-length, slitting, edge quality, protective film, packing method, export marking, batch control, and shipment preparation.",
    image: "/images/products/core-forms/related-process-capabilities.jpeg",
    alt: "Stainless steel processing and export packing support route",
    objectPosition: "center 48%",
    links: [{ label: "Process Capabilities", href: "/solutions/capabilities" }],
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
        className={`mt-5 text-[1.9rem] font-semibold leading-[1.08] sm:text-[2.35rem] lg:text-[2.85rem] ${
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

function ActionLink({
  href,
  label,
  tone = "primary",
}: LinkItem & { tone?: "primary" | "secondary" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center border px-5 py-3 text-[0.76rem] font-semibold uppercase tracking-[0.18em] transition ${
        tone === "primary"
          ? "border-[#f6d044] bg-[#f6d044] text-[#121820] hover:bg-white"
          : "border-white/45 bg-white/10 text-white hover:border-[#f6d044] hover:text-[#f6d044]"
      }`}
    >
      {label}
    </Link>
  );
}

function SmallLink({ href, label }: LinkItem) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center border border-[#f6d044]/70 bg-[#f6d044] px-3 py-2 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#111820] transition hover:border-white hover:bg-white"
    >
      {label}
    </Link>
  );
}

function ImageRouteCard({ item }: { item: RouteCard }) {
  return (
    <article className="group relative grid min-h-[24rem] overflow-hidden border border-white/12 bg-[#101820] text-white shadow-[0_18px_50px_rgba(17,24,32,0.2)]">
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(min-width: 1024px) 33vw, 100vw"
        className="object-cover opacity-[0.68] transition duration-500 group-hover:scale-[1.04] group-hover:opacity-[0.78]"
        style={{ objectPosition: item.objectPosition }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,13,18,0.72),rgba(9,13,18,0.44)_42%,rgba(9,13,18,0.86))]" />
      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#f6d044]">
            {item.eyebrow}
          </p>
          <h3 className="mt-4 text-2xl font-semibold leading-tight text-[#f6d044]">
            {item.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-white/82">{item.description}</p>
        </div>
        <div className="mt-7 flex flex-wrap gap-2">
          {item.links.map((link) => (
            <SmallLink key={link.href} {...link} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function SolutionsPage() {
  return (
    <main className="bg-[#f7f3ea] text-[#111820]">
      <section className="relative overflow-hidden bg-[#0d141b] text-white">
        <Image
          src="/images/capabilities/surface-finishing/hero.webp"
          alt="Decorative stainless steel surface finishing route for global buyers"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.72]"
          style={{ objectPosition: "center 48%" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,10,14,0.84)_0%,rgba(6,10,14,0.62)_45%,rgba(6,10,14,0.3)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(13,20,27,0)_0%,rgba(247,243,234,0.98)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <div className="mx-auto max-w-4xl text-left">
            <SectionLabel tone="dark">Stainless Steel Solutions</SectionLabel>
            <h1 className="mt-6 max-w-[66rem] text-[2.4rem] font-semibold leading-[1.04] text-white sm:text-[3.3rem] lg:text-[4.26rem]">
              Stainless Steel Solutions by Application & Process
            </h1>
            <p className="mt-6 max-w-[54rem] text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem]">
              Match stainless steel grade, product form, surface finish, processing, protection, packing, and export support to real project conditions. Start from application environment, visible surface, fabrication route, or corrosion risk before production and shipment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroLinks.map((link) => (
                <ActionLink key={link.href} {...link} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3ea] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Choose Your Starting Point"
            title="Choose Your Solution Path"
            description="A good stainless steel solution starts from the buying question, not from a product name alone. Choose the path that matches your project environment, processing need, or material route."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {startingPoints.map((item) => (
              <ImageRouteCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Buyer Decision Matrix"
            title="Stainless Steel Route Guide"
            description="Use this matrix to move from a sourcing question to the most useful Jinling route, whether the buyer needs application guidance, surface selection, processing support, or corrosion-resistant stainless steel."
          />
          <div className="mt-10 overflow-hidden border border-[#d7d0c2] bg-[#111820] shadow-[0_22px_60px_rgba(17,24,32,0.12)]">
            <table className="w-full table-fixed border-collapse text-left text-[0.66rem] sm:text-[0.8rem] lg:text-[0.9rem]">
              <thead>
                <tr className="bg-[#f6d044] text-[#111820]">
                  <th className="w-[27%] px-3 py-4 font-semibold sm:px-5">Buyer Question</th>
                  <th className="w-[27%] px-3 py-4 font-semibold sm:px-5">Key Decision</th>
                  <th className="w-[27%] px-3 py-4 font-semibold sm:px-5">Recommended Route</th>
                  <th className="w-[19%] px-3 py-4 font-semibold sm:px-5">Decision Link</th>
                </tr>
              </thead>
              <tbody>
                {decisionRows.map((row, index) => (
                  <tr
                    key={row.question}
                    className={`border-t border-white/10 ${
                      index % 2 === 0 ? "bg-[#141c24]" : "bg-[#1d2730]"
                    }`}
                  >
                    <td className="px-3 py-5 font-semibold leading-6 text-white sm:px-5">
                      {row.question}
                    </td>
                    <td className="px-3 py-5 leading-6 text-white/72 sm:px-5">
                      {row.keyDecision}
                    </td>
                    <td className="px-3 py-5 leading-6 text-white/82 sm:px-5">{row.route}</td>
                    <td className="px-3 py-5 sm:px-5">
                      <Link
                        href={row.link.href}
                        className="inline-flex origin-left border-b border-[#f6d044]/70 pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#f6d044] transition hover:scale-110 hover:text-white sm:text-[0.74rem]"
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

      <section className="bg-[#101820] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="From Requirement to Shipment"
            title="How Jinling Supports a Stainless Steel Solution"
            description="The buying route should stay connected from early material review to final shipment. Jinling helps buyers check each step before stainless steel enters production, processing, packing, and export delivery."
            tone="dark"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {supportSteps.map((step) => (
              <article
                key={step.number}
                className="flex min-h-[16rem] flex-col justify-between border border-white/12 bg-white/[0.055] p-5 transition hover:-translate-y-1 hover:border-[#f6d044]/60 hover:bg-white/[0.08]"
              >
                <div>
                  <p className="text-[0.72rem] font-semibold text-[#f6d044]">{step.number}</p>
                  <h3 className="mt-4 text-[1.1rem] font-semibold leading-tight text-white">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/68">{step.description}</p>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {step.links.map((link) => (
                    <SmallLink key={link.href} {...link} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f3ea] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Featured Solution Paths"
            title="Explore Stainless Steel by Project Need"
            description="These routes help buyers move quickly from project conditions to the most relevant pages for decorative surfaces, hygienic equipment, industrial corrosion, processing, and export support."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featuredPaths.map((item) => (
              <ImageRouteCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
