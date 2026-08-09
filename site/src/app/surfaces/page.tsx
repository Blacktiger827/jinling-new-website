import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Stainless Steel Finish Options | 8K, AFP, Hairline, No.4, BA & Decorative Sheet",
  description:
    "Explore stainless steel finish options including 8K mirror, AFP anti-fingerprint, hairline, No.4, BA, 2B, embossed, colored, and decorative stainless steel sheet for appliances, elevators, interiors, architecture, and equipment panels.",
  alternates: {
    canonical: "/surfaces",
  },
};

const heroLinks = [
  {
    label: "8K Mirror Finish",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
  },
  {
    label: "AFP Finish",
    href: "/surfaces/stainless-steel-afp-finish",
  },
  {
    label: "Hairline Finish",
    href: "/surfaces/stainless-steel-hairline-finish",
  },
  {
    label: "No.4 Brushed",
    href: "/surfaces/stainless-steel-no4-brushed-finish",
  },
];

const finishNeeds = [
  {
    title: "Premium Reflection",
    text: "Choose 8K mirror stainless steel when the project needs high-reflective panels, visual depth, and a premium decorative effect.",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
    image: "/images/surfaces/no8-mirror/hero-ai-8k-mirror-logical-v2.png",
    alt: "8K mirror stainless steel finish for decorative panels",
  },
  {
    title: "Fingerprint Control",
    text: "Choose AFP anti-fingerprint stainless steel for high-touch appliance panels, cabinet doors, elevator interiors, and visible surfaces.",
    href: "/surfaces/stainless-steel-afp-finish",
    image: "/images/surfaces/afp/hero-diagonal-afp-preview-v1.jpg",
    alt: "AFP anti-fingerprint stainless steel surface sample",
  },
  {
    title: "Brushed Direction",
    text: "Choose hairline or No.4 stainless steel finish when the project needs a refined directional grain and practical scratch hiding.",
    href: "/surfaces/stainless-steel-hairline-finish",
    image: "/images/surfaces/hairline/hero-hairline-banner.jpg",
    alt: "Hairline brushed stainless steel finish with directional grain",
  },
  {
    title: "Clean Practical Surface",
    text: "Choose 2B, BA, or No.4 stainless steel sheet for equipment panels, fabrication, kitchen areas, and general clean surface requirements.",
    href: "/surfaces/stainless-steel-2b-finish",
    image: "/images/surfaces/2b/hero-2b-finish-banner-textless.jpeg",
    alt: "2B stainless steel sheet surface for clean fabrication",
  },
  {
    title: "Decorative Texture",
    text: "Choose embossed stainless steel when the surface needs texture, depth, anti-slip visual interest, or decorative metal design.",
    href: "/solutions/capabilities/surface-finish-capability",
    image: "/images/surfaces/embossed/hero.jpg",
    alt: "Embossed decorative stainless steel sheet finish",
  },
  {
    title: "Color & Design Effect",
    text: "Choose colored or PVD stainless steel sheet when the project needs stronger design identity for interiors, trims, and panels.",
    href: "/solutions/capabilities/surface-finish-capability",
    image: "/images/surfaces/coloring/hero.jpg",
    alt: "Colored decorative stainless steel surface finish",
  },
];

const selectionRows = [
  {
    goal: "High reflection",
    link: "8K Mirror",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
    finish: "8K mirror stainless steel",
    usedFor: "Elevator ceilings, decorative panels, signage",
    check: "Flatness, reflection clarity, scratch protection",
  },
  {
    goal: "Fingerprint resistance",
    link: "AFP",
    href: "/surfaces/stainless-steel-afp-finish",
    finish: "AFP anti-fingerprint stainless steel",
    usedFor: "Appliance panels, cabinet doors, elevator panels",
    check: "Coating stack, base finish, protective film",
  },
  {
    goal: "Brushed appearance",
    link: "Hairline",
    href: "/surfaces/stainless-steel-hairline-finish",
    finish: "Hairline or No.4 finish",
    usedFor: "Interiors, wall panels, doors, equipment skins",
    check: "Grain direction, batch consistency",
  },
  {
    goal: "Practical scratch hiding",
    link: "No.4",
    href: "/surfaces/stainless-steel-no4-brushed-finish",
    finish: "No.4 brushed stainless steel",
    usedFor: "Kitchen equipment, machinery panels, splashbacks",
    check: "Brush depth, cleaning route, film",
  },
  {
    goal: "General clean surface",
    link: "2B",
    href: "/surfaces/stainless-steel-2b-finish",
    finish: "2B stainless steel finish",
    usedFor: "Fabrication, food-service areas, equipment parts",
    check: "Grade, flatness, downstream process",
  },
  {
    goal: "Bright smooth surface",
    link: "BA",
    href: "/surfaces/stainless-steel-ba-finish",
    finish: "BA stainless steel finish",
    usedFor: "Appliances, bright panels, AFP base material",
    check: "Brightness, surface consistency, handling",
  },
];

const logicRoutes = [
  {
    title: "Start with Product Form",
    text: "Confirm whether the project needs stainless steel sheet, coil, plate, tube, or fabricated parts before selecting a finish.",
    image: "/images/products/core-forms/related-core-grades.jpg",
    links: [
      { label: "Products", href: "/products" },
      { label: "Sheet", href: "/products/stainless-steel-sheet" },
    ],
  },
  {
    title: "Match Grade and Environment",
    text: "Surface finish should be reviewed together with grade, corrosion exposure, cleaning method, and final installation environment.",
    image: "/images/products/core-forms/related-application-lines.jpg",
    links: [
      { label: "Grades", href: "/grades" },
      { label: "316L", href: "/grades/316l-stainless-steel" },
    ],
  },
  {
    title: "Confirm Finish Direction and Protection",
    text: "Decorative stainless steel needs controlled grain direction, protective film, and handling plans before cutting or bending.",
    image: "/images/surfaces/afp/slideshow/afp-brushed-color-sample-02.jpeg",
    links: [
      {
        label: "Protective Film",
        href: "/solutions/capabilities/protective-film",
      },
      {
        label: "Surface Finishing",
        href: "/solutions/capabilities/surface-finish-capability",
      },
    ],
  },
  {
    title: "Plan Processing Before Shipment",
    text: "Cutting, slitting, packing, and export delivery should be confirmed before finished surfaces enter long-distance transport.",
    image: "/images/products/core-forms/related-process-capabilities.jpeg",
    links: [
      {
        label: "Cut-to-Length",
        href: "/solutions/capabilities/cut-to-length",
      },
      {
        label: "Packaging",
        href: "/solutions/capabilities/packaging-logistics",
      },
    ],
  },
];

const applicationRoutes = [
  {
    title: "Kitchen Equipment",
    text: "No.4, 2B, hairline, AFP, and protective film for worktops, cabinets, appliance panels, and wet zones.",
    href: "/solutions/applications/kitchen-equipment",
    image: "/images/surfaces/no8-mirror/applications/kitchen-equipment.jpg",
    alt: "Stainless steel surface finish for kitchen equipment",
  },
  {
    title: "Elevator & Interiors",
    text: "8K mirror, hairline, No.4, AFP, and PVD-style decorative sheet for elevator cabins, doors, ceilings, and trims.",
    href: "/solutions/applications/elevator-decoration",
    image: "/images/surfaces/no8-mirror/applications/elevator-decoration.jpg",
    alt: "Decorative stainless steel surface finish for elevator interiors",
  },
  {
    title: "Architecture",
    text: "Decorative stainless steel finishes for facade panels, wall cladding, ceilings, column covers, and public interiors.",
    href: "/solutions/applications/architecture",
    image: "/images/surfaces/no8-mirror/applications/architecture.jpg",
    imagePosition: "object-[center_72%]",
    alt: "Architectural stainless steel surface finish for panels",
  },
  {
    title: "Food & Beverage",
    text: "2B, No.4, polished, and protective routes for food-contact surfaces, washdown areas, tanks, and equipment panels.",
    href: "/solutions/applications/food-beverage",
    image: "/images/surfaces/finish-options/application-food-beverage-cookware.jpg",
    imagePosition: "object-[center_52%]",
    alt: "Clean stainless steel finish for food and beverage equipment",
  },
  {
    title: "Medical & Pharma",
    text: "Cleanable 2B, No.4, polished, AFP, and film-protected surfaces for cleanroom panels, worktables, and cabinets.",
    href: "/solutions/applications/medical-pharmaceutical",
    image: "/images/surfaces/finish-options/application-medical-pharma-trays.jpg",
    imagePosition: "object-[center_42%]",
    alt: "Clean stainless steel finish for medical and pharmaceutical equipment",
  },
  {
    title: "Application Lines",
    text: "Match stainless steel surface finish with buyer requirements across visible, hygienic, industrial, and project applications.",
    href: "/solutions/applications",
    image: "/images/surfaces/finish-options/application-lines-interior-kitchen.jpg",
    imagePosition: "object-[center_52%]",
    alt: "Stainless steel surface finish application routes",
  },
];

const relatedRoutes = [
  {
    title: "8K Mirror Stainless Steel Finish",
    text: "Explore high-reflective stainless steel sheet for premium panels, interiors, elevators, and decorative design.",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
    image: "/images/surfaces/no8-mirror/hero.jpg",
    alt: "8K mirror stainless steel finish related route",
  },
  {
    title: "AFP Anti-Fingerprint Stainless Steel Finish",
    text: "Review anti-fingerprint stainless steel for high-touch appliance panels, interiors, cabinets, and elevator surfaces.",
    href: "/surfaces/stainless-steel-afp-finish",
    image: "/images/surfaces/afp/hero.jpg",
    alt: "AFP anti-fingerprint stainless steel finish related route",
  },
  {
    title: "Hairline Stainless Steel Finish",
    text: "Compare hairline brushed stainless steel for directional decorative surfaces and visible metal panels.",
    href: "/surfaces/stainless-steel-hairline-finish",
    image: "/images/surfaces/hairline/hero-hairline-banner.jpg",
    alt: "Hairline stainless steel finish related route",
  },
  {
    title: "Protective Film for Stainless Steel Sheet",
    text: "Protect decorative stainless steel surfaces before cutting, bending, packing, and export delivery.",
    href: "/solutions/capabilities/protective-film",
    image: "/images/surfaces/finish-options/related-protective-film-sheets.jpg",
    imagePosition: "object-[center_52%]",
    alt: "Protective film for stainless steel sheet related route",
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

export default function SurfacesPage() {
  return (
    <main className="bg-[#f6f0e5] text-[#111820]">
      <section className="relative overflow-hidden bg-[#0d141b] text-white">
        <div className="absolute inset-0 opacity-[0.76]">
          <Image
            src="/images/products/core-forms/related-finish-options.jpeg"
            alt="Decorative stainless steel surface finish options"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_52%]"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,8,12,0.84)_0%,rgba(4,8,12,0.58)_42%,rgba(4,8,12,0.25)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(13,20,27,0)_0%,rgba(246,240,229,0.98)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <div className="mx-auto max-w-4xl text-left">
            <div className="inline-flex items-center gap-4">
              <SectionLabel tone="dark">
                Stainless steel finish supplier
              </SectionLabel>
              <span
                className="h-px w-12 bg-[#f6d044]/70"
                aria-hidden="true"
              />
            </div>
            <h1 className="mt-6 max-w-[66rem] text-[2.4rem] font-semibold leading-[1.04] text-white sm:text-[3.3rem] lg:text-[4.26rem]">
              Stainless Steel Surface Finish Options
            </h1>
            <p className="mt-6 max-w-[54rem] text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem]">
              Jinling Metals supplies stainless steel surface finishes for
              decorative panels, appliance skins, elevator interiors, kitchen
              equipment, architectural cladding, furniture, signage, and
              industrial visible parts. From 8K mirror stainless steel and AFP
              anti-fingerprint coating to hairline, No.4, BA, 2B, embossed, and
              colored stainless steel sheet, we help buyers choose the right
              finish based on appearance, cleaning, fingerprint control,
              fabrication route, protective film, and final application.
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
          label="Finish Need Navigation"
          title="Choose Finish by Surface Requirement"
          description="Buyers usually search for stainless steel finishes by the final surface requirement, not only by finish name. Start from reflection, fingerprint resistance, brushed direction, cleanability, texture, or color effect to find the most suitable route."
        />

        <div className="mx-auto mt-9 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {finishNeeds.map((item) => (
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
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,14,0.2)_0%,rgba(7,10,14,0.78)_100%)]" />
              <div className="relative flex h-full min-h-[18rem] flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-[#f6d044]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/84">
                  {item.text}
                </p>
                <span className="mt-5 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-white/78 transition group-hover:text-[#f6d044]">
                  Explore route
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          label="Finish Selection Matrix"
          title="Stainless Steel Finish Selection Guide"
          description="The right stainless steel surface finish depends on appearance target, touch frequency, cleaning method, fabrication process, and final application environment. Use this matrix to connect buyer goals with the most relevant finish route before confirming grade, sheet size, film, and packing."
        />

        <div className="mx-auto mt-8 max-w-7xl overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.22)]">
          <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2.5 text-center">
            <p className="text-[0.74rem] font-semibold uppercase leading-4 tracking-[0.08em] text-[#f6d044]">
              Finish route by buyer need and surface requirement
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-[0.62rem] sm:text-[0.74rem]">
            <thead>
              <tr className="bg-[#f6d044] text-[#111820]">
                <th className="w-[18%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Buyer Goal
                </th>
                <th className="w-[15%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Decision Link
                </th>
                <th className="w-[22%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Recommended Finish
                </th>
                <th className="w-[22%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Best Used For
                </th>
                <th className="px-2.5 py-2.5 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Key Check
                </th>
              </tr>
            </thead>
            <tbody>
              {selectionRows.map((row) => (
                <tr key={row.goal} className="bg-[#111111] align-middle">
                  <th className="whitespace-nowrap border-r border-t border-white/14 px-2.5 py-3 text-left align-middle text-[0.58rem] font-semibold leading-[1.35] text-white sm:px-3 sm:text-[0.72rem] lg:text-[0.78rem]">
                    {row.goal}
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
                    {row.finish}
                  </td>
                  <td className="border-r border-t border-white/14 px-2.5 py-3 leading-[1.35] text-white/78 sm:px-3">
                    {row.usedFor}
                  </td>
                  <td className="border-t border-white/14 px-2.5 py-3 leading-[1.35] text-white/78 sm:px-3">
                    {row.check}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-[#f6f0e5] px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          label="Finish + Product Form Logic"
          title="Surface Finish Is Not Separate from Product Form"
          description="For stainless steel buyers, finish selection works best when it is connected with product form, grade, processing, protection, and packing. This route helps reduce surface mismatch, fabrication scratches, and delivery risk before the order moves into production."
        />

        <div className="mx-auto mt-9 grid max-w-7xl gap-5 md:grid-cols-2">
          {logicRoutes.map((item) => (
            <div
              key={item.title}
              className="group relative min-h-[11rem] overflow-hidden bg-[#111820] text-white shadow-[0_16px_42px_rgba(17,24,32,0.16)]"
            >
              <Image
                src={item.image}
                alt={`${item.title} stainless steel finish route`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover opacity-55 transition duration-500 group-hover:scale-105"
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
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="bg-[#f6d044] px-3 py-2 text-xs font-bold uppercase tracking-[0.1em] text-[#111820] transition hover:bg-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#101820] px-4 py-16 text-white sm:px-6 lg:px-8">
        <SectionHeader
          label="Application Routes"
          title="Where Stainless Steel Finishes Are Commonly Used"
          description="Surface finish decisions are closely connected with the final application. Decorative, hygienic, high-touch, outdoor, and industrial visible surfaces all require different stainless steel finish routes."
          tone="dark"
        />

        <div className="mx-auto mt-9 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {applicationRoutes.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative min-h-[17rem] overflow-hidden bg-black shadow-[0_18px_48px_rgba(0,0,0,0.28)]"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className={`object-cover opacity-64 transition duration-500 group-hover:scale-105 ${
                  item.imagePosition ?? "object-center"
                }`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.82)_100%)]" />
              <div className="relative flex min-h-[17rem] flex-col justify-end p-5">
                <h3 className="text-xl font-bold text-[#f6d044]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/82">
                  {item.text}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeader
          label="Related Routes"
          title="Explore Related Surface Routes"
          description="Move from the finish hub into detailed surface pages, protective film planning, and buyer decision routes for decorative stainless steel sheet."
        />

        <div className="mx-auto mt-9 grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4">
          {relatedRoutes.map((item) => (
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
                className={`object-cover opacity-62 transition duration-500 group-hover:scale-105 ${
                  item.imagePosition ?? "object-center"
                }`}
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
