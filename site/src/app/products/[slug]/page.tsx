import { getContent, getContentSlugs, getContentList } from "@/lib/content";
import { ContentPage } from "@/components/content/ContentPage";
import { VideoEmbed } from "@/components/blocks/VideoEmbed";
import { CoilProductPage } from "@/components/content/CoilProductPage";
import { SHOW_COMMERCIAL_RELATED_ARTICLES } from "@/lib/commercial-related-articles";
import {
  getProductRouteGroup,
  getProductSidebarConfig,
  ProductRouteDesk,
} from "@/components/content/ProductRouteDesk";
import {
  getProductVisualGallery,
  VisualProofGallery,
} from "@/components/content/VisualProofGallery";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildProductSchema,
  extractFaqEntries,
} from "@/lib/structured-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Fragment } from "react";


function ProductBreadcrumbBar({ title }: { title: string }) {
  return (
    <div className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <nav className="flex min-w-0 items-center gap-2 overflow-hidden whitespace-nowrap text-[0.82rem] text-slate-500">
          <Link href="/" className="shrink-0 transition-colors hover:text-text-primary">
            Home
          </Link>
          <span className="flex shrink-0 items-center gap-2">
            <span className="shrink-0">/</span>
            <Link href="/products" className="shrink-0 transition-colors hover:text-text-primary">
              Products
            </Link>
          </span>
          <span className="flex min-w-0 flex-1 items-center gap-2">
            <span className="shrink-0">/</span>
            <span className="min-w-0 truncate text-text-primary">{title}</span>
          </span>
        </nav>
      </div>
    </div>
  );
}
function SheetProductHero({
  title,
  description,
  heroImage,
}: {
  title: string;
  description?: string;
  heroImage?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <Image
        src={heroImage ?? "/images/capabilities/cut-to-length/gallery-1.webp"}
        alt="Workers processing stainless steel sheets on a cut-to-length line"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-[0.68] brightness-[0.86] saturate-[1.04] contrast-[1.08]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.64)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
        <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
          Product release
          <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
        </p>
        <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[2.9rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            {description}
          </p>
        )}
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/contact#pricing-request"
            className="inline-flex min-h-11 items-center bg-[#f6d044] px-5 text-sm font-semibold text-[#111820] transition hover:bg-[#f2c820]"
          >
            Request sheet pricing
          </Link>
          <Link
            href="#sheet-options"
            className="inline-flex min-h-11 items-center border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#f6d044]/60 hover:text-[#f6d044]"
          >
            Check options
          </Link>
        </div>
      </div>
    </section>
  );
}

function BarProductHero({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <Image
        src="/images/products/bar/hero-premium-bar-forms.png"
        alt="Premium stainless steel bar forms arranged for machining and fabrication supply"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-[0.68] brightness-[0.86] saturate-[1.04] contrast-[1.08]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.64)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_34%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_32%)]" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
        <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
          Product release
          <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
        </p>
        <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[2.9rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-3xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            {description}
          </p>
        )}
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/contact#pricing-request"
            className="inline-flex min-h-11 items-center bg-[#f6d044] px-5 text-sm font-semibold text-[#111820] transition hover:bg-[#f2c820]"
          >
            Request bar pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
function TubePipeProductHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <Image
        src="/images/products/tube/tube-pipe-warehouse-hero.jpeg"
        alt="Stainless steel tube and pipe stock inside Jinling Metals processing workshop"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-[0.68] brightness-[0.86] saturate-[1.04] contrast-[1.08]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.64)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_34%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_32%)]" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
        <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
          Product release
          <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
        </p>
        <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[2.9rem]">
          Premium Quality Stainless Steel Pipes&amp;Tubes Supplier with Stable Supply &amp; Fast Delivery in China
        </h1>
        <p className="mt-4 max-w-3xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
          Jinling Steel provides high-performance stainless steel tubes tailored for diverse industrial needs. Our range includes ornamental tubes with flawless mirror or satin finishes for architecture, hygienic/sanitary tubes (ASTM A270) for food and pharma precision, and heavy-duty industrial pipes (ASTM A312) for corrosion resistance. Sourced from top-tier mills and 100% inspected, our tubing ensures stable mechanical properties and superior surface integrity for global fabrication projects.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/contact#pricing-request"
            className="inline-flex min-h-11 items-center bg-[#f6d044] px-5 text-sm font-semibold text-[#111820] transition hover:bg-[#f2c820]"
          >
            Request tube pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
const barFormPages = [
  { key: "round", title: "Round Bar", image: "/images/products/bar/selector-round-bar.png" },
  { key: "flat", title: "Flat Bar", image: "/images/products/bar/selector-flat-bar.png" },
  { key: "angle", title: "Angle Bar", image: "/images/products/bar/selector-angle-bar.png" },
  { key: "squareHex", title: "Square & Hexagon Bar", image: "/images/products/bar/selector-square-hex-bar.png" },
] as const;
const tubePipeOptions = [
  {
    key: "ornamental",
    title: "Ornamental Tube",
        standard: "A554",
    image: "/images/generated/products/stainless-steel-decorative-pipe/hero-ai-v1.webp",
  },
  {
    key: "sanitary",
    title: "Sanitary Tube",
        standard: "A270",
    image: "/images/generated/products/stainless-steel-sanitary-tube/hero-ai-v1.webp",
  },
  {
    key: "industrial",
    title: "Industrial Pipe",
        standard: "A312",
    image: "/images/generated/applications/chemical-petrochemical/hero-ai-v1.webp",
  },
] as const;
const roundBarProductRangeRows = [
  ["Min. diameter (mm)", "2"],
  ["Max. diameter (mm)", "500"],
] as const;

const roundBarStandardRows = [
  ["ASTM A276", "Standard Specification for Stainless Steel Bars and Shapes"],
  ["ASTM A479", "Standard Specification for Stainless Steel Bars and Shapes for Use in Boilers and Other Pressure Vessels"],
  ["ASTM A582", "Standard Specification for Free-Machining Stainless Steel Bars"],
  ["EN 10088-3", "Stainless steels for general purposes"],
] as const;

const roundBarDimensionalToleranceRows = [
  ["Drawn", "", "", "", "R", "R", "R", "R"],
  ["Turned", "", "", "", "R", "R", "R", "R"],
  ["Ground", "R", "R", "R", "R", "R", "R", "R"],
  ["Polished", "R", "R", "R", "R", "R", "R", "R"],
] as const;

const roundBarIsoToleranceRows = [
  [">1 to <=3 mm", "+0 / -0.006", "+0 / -0.010", "+0 / -0.014", "+0 / -0.025", "+0 / -0.040", "+0 / -0.060", "+0 / -0.100"],
  [">3 to <=6 mm", "+0 / -0.008", "+0 / -0.012", "+0 / -0.018", "+0 / -0.030", "+0 / -0.048", "+0 / -0.075", "+0 / -0.120"],
  [">6 to <=10 mm", "+0 / -0.009", "+0 / -0.015", "+0 / -0.022", "+0 / -0.036", "+0 / -0.058", "+0 / -0.090", "+0 / -0.150"],
  [">10 to <=18 mm", "+0 / -0.011", "+0 / -0.018", "+0 / -0.027", "+0 / -0.043", "+0 / -0.070", "+0 / -0.110", "+0 / -0.180"],
  [">18 to <=30 mm", "+0 / -0.013", "+0 / -0.021", "+0 / -0.033", "+0 / -0.052", "+0 / -0.084", "+0 / -0.130", "+0 / -0.210"],
  [">30 to <=50 mm", "+0 / -0.016", "+0 / -0.025", "+0 / -0.039", "+0 / -0.062", "+0 / -0.100", "+0 / -0.160", "+0 / -0.250"],
  [">50 to <=80 mm", "+0 / -0.019", "+0 / -0.030", "+0 / -0.046", "+0 / -0.074", "+0 / -0.120", "+0 / -0.190", "+0 / -0.300"],
  [">80 to <=120 mm", "+0 / -0.022", "+0 / -0.035", "+0 / -0.054", "+0 / -0.087", "+0 / -0.140", "+0 / -0.220", "+0 / -0.350"],
  [">120 to <=180 mm", "+0 / -0.025", "+0 / -0.040", "+0 / -0.063", "+0 / -0.100", "+0 / -0.160", "+0 / -0.250", "+0 / -0.400"],
  [">180 to <=200 mm", "+0 / -0.029", "+0 / -0.046", "+0 / -0.072", "+0 / -0.115", "+0 / -0.185", "+0 / -0.290", "+0 / -0.460"],
] as const;

const roundBarFinishedConditionRows = [
  "Drawn, Symbol +C (BLACK BAR)",
  "Turned, Symbol +SH (PEELED BAR)",
  "Groud, Symbol +SL (GRINDING BAR)",
  "Polished, Symbol +PL (POLISHED BAR)",
] as const;

const flatBarStandardRows = [
  ["EN 10088-2", "Stainless steel flat products for general purposes"],
  ["EN 10028-7", "Stainless steel flat products for pressure purposes"],
  ["ASTM A276", "Standard specification for stainless steel bars and shapes"],
  ["ASTM A479", "Standard specification for stainless steel bars and shapes for use in Boilers and Other Pressure Vessels"],
  ["ASTM A582", "Standard specification for free-machining stainless steel bars"],
] as const;

const flatBarGradeRows = [
  ["1.4301", "304"],
  ["1.4307", "304L"],
  ["1.4541", "321"],
  ["1.4401", "316"],
  ["1.4404", "316L"],
  ["1.4571", "316Ti"],
  ["1.4406", "316LN"],
  ["1.4438", "317L"],
] as const;

const flatBarColdToleranceRows = [
  ["1.50 to 9.50", "0.12", "0.12", "0.70 to 1.00", "0.04"],
  ["9.50 to 25.00", "0.10", "0.10", "1.00 to 25.00", "0.05"],
  ["25.00 to 50.00", "0.15", "0.10", "25.00 to 50.00", "0.08"],
  ["50.00 to 75.00", "0.20", "0.10", "50.00 to 75.00", "0.10"],
  ["75.00 to 115.00", "0.25", "0.15", "75.00 to 115.00", "0.13"],
] as const;

const flatBarHotToleranceRows = [
  ["0 to 25.00", "0.20", "0.20", "0.25", "0.25", "---", "---", "---", "---", "---", "---", "---", "---", "0.40", "0.40"],
  ["25.00 to 50.00", "0.30", "0.30", "0.40", "0.40", "0.80", "0.80", "---", "---", "---", "---", "---", "---", "0.80", "0.80"],
  ["50.00 to 100.00", "0.40", "0.40", "0.50", "0.50", "0.80", "0.80", "1.40", "0.80", "---", "---", "---", "---", "1.60", "0.80"],
  ["100.00 to 150.00", "0.40", "0.40", "0.50", "0.50", "0.80", "0.80", "1.40", "0.80", "2.40", "1.60", "---", "---", "2.40", "1.60"],
  ["150.00 to 200.00", "0.40", "0.40", "0.65", "0.65", "0.80", "0.80", "1.40", "0.80", "2.40", "1.60", "3.20", "4.00", "3.20", "4.00"],
  ["200.00 to 250.00", "0.50", "0.50", "0.80", "0.80", "0.80", "0.80", "1.40", "0.80", "2.40", "1.60", "3.20", "4.00", "4.80", "4.80"],
] as const;

const flatBarSupplyConditionRows = [
  "Dimensional tolerances according to EN 10051",
  "Special tolerances upon request",
  "Control documents 2.2, 3.1, 3.2 according to EN 10204",
  "On request: certification according to AD 2000 W2/W10",
] as const;
const angleBarThicknessHeads = ["3", "4", "5", "6", "7", "8", "9", "10"] as const;

const angleBarToleranceRows = [
  ["20", "+/-1.0", "+/-0.4", "+/-0.4", "", "", "", "", "", ""],
  ["25", "+/-1.0", "+/-0.5", "+/-0.5", "", "", "", "", "", ""],
  ["30", "+/-1.0", "+/-0.5", "+/-0.5", "+/-0.5", "+/-0.5", "", "", "", ""],
  ["35", "+/-1.0", "+/-0.6", "+/-0.6", "+/-0.6", "+/-0.6", "", "", "", ""],
  ["40", "+/-1.0", "+/-0.6", "+/-0.6", "+/-0.6", "+/-0.6", "+/-0.6", "", "", ""],
  ["45", "+/-2.0", "+/-0.6", "+/-0.6", "+/-0.6", "+/-0.6", "+/-0.6", "", "", ""],
  ["50", "+/-2.0", "+/-0.6", "+/-0.6", "+/-0.6", "+/-0.6", "+/-0.6", "+/-0.6", "+/-0.6", ""],
  ["60", "+/-3.0", "", "", "+/-0.6", "+/-0.6", "+/-0.7", "+/-0.7", "+/-0.7", ""],
  ["65", "+/-3.0", "", "", "+/-0.6", "+/-0.6", "+/-0.7", "+/-0.7", "+/-0.7", ""],
  ["70", "+/-3.0", "", "", "", "+/-0.6", "+/-0.7", "+/-0.7", "", ""],
  ["75", "+/-3.0", "", "", "", "+/-0.6", "+/-0.7", "+/-0.7", "+/-0.7", ""],
  ["80", "+/-3.0", "", "", "", "+/-0.6", "+/-0.7", "+/-0.7", "+/-0.7", ""],
  ["90", "+/-3.0", "", "", "", "+/-0.6", "+/-0.7", "+/-0.7", "+/-0.7", "+/-0.7"],
  ["100", "+/-3.0", "", "", "", "+/-0.6", "+/-0.7", "+/-0.7", "+/-0.7", "+/-0.7"],
] as const;

const angleBarFinishConditionRows = [
  "Polished, HairLine",
  "Sandblast",
  "Mill, Pickled",
] as const;

const angleBarMainGradeRows = ["304", "304L", "316", "316L"] as const;

const angleBarDeliveryRows = [
  ["Hot Rolled (HR)", "20 x 20 x 3 - 100 x 100 x 12mm"],
  ["Hot Rolled & Pickled (HRP)", "Width: 20mm, 25mm, 30mm, 35mm, 40mm, 45mm, 50mm, 60mm, 65mm, 70mm, 75mm, 80mm, 90mm, 100mm. Thickness: 3mm, 4mm, 5mm, 6mm, 7mm, 8mm, 9mm, 10mm, 12mm"],
  ["Made by Bending Plates", "As your request"],
  ["Made by Welding Flat Bars", "As your request"],
] as const;

const squareHexDeliveryStateRows = [
  "Cold Rolled(Polished/HairLine): S3.0mm - S6.0mm",
  "Cold Drawn(Bright/HairLine): S6.0mm - S80m",
  "Hot Rolled(Sandblast/HairLine/Polished): S8.0mm - S180mm",
] as const;

const squareHexMainGradeRows = ["304", "304L", "316", "316L", "303"] as const;

const squareHexVariationRows = [
  ["1/8 to 5/16 [3.0 to 8.0], excl", "0", "0.002 [0.05]"],
  ["5/16 to 1/2 [8.0 to 13.0], excl", "0", "0.003 [0.08]"],
  ["1/2 to 1 [13.0 to 25.0], incl", "0", "0.004 [0.10]"],
  ["Over 1 to 2 [25.0 to 50.0], incl", "0", "0.006 [0.15]"],
  ["Over 2 to 3 [50.0 to 75.0], incl", "0", "0.008 [0.20]"],
  ["Over 3 [75.0]", "0", "0.010 [0.25]"],
] as const;
function SpecTableShell({
  title,
  children,
  noScroll = false,
}: {
  title: string;
  children: React.ReactNode;
  noScroll?: boolean;
}) {
  return (
    <section className="overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_14px_34px_rgba(13,20,27,0.045)]">
      <div className="border-b border-[#d8cbb8] bg-[#111820] px-4 py-3">
        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f6d044]">
          {title}
        </h3>
      </div>
      <div className={noScroll ? "" : "overflow-x-auto"}>{children}</div>
    </section>
  );
}

function RoundBarPanel() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="max-w-4xl text-left">
        <h2 className="text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
          Round Bar
        </h2>
        <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b]">
          High-Precision Machining Stock: Engineered for superior diameter control and stable properties. These bars are optimized for high-speed CNC turning, machining, and heavy-duty structural components, ensuring smooth tool performance and minimal waste.
        </p>
      </div>

      <div className="mt-8 grid max-w-4xl gap-6">
        <section className="overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_14px_34px_rgba(13,20,27,0.045)]">
          <table className="w-full table-fixed border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#111820] text-xs font-semibold uppercase tracking-[0.12em] text-[#f6d044]">
                <th className="w-[14rem] border-r border-[#d8cbb8] px-4 py-3">Product range</th>
                <th className="px-5 py-3 text-center">Value</th>
              </tr>
            </thead>
            <tbody className="text-[#5f6872]">
              {roundBarProductRangeRows.map(([label, value]) => (
                <tr key={label} className="border-b border-[#ece3d5] last:border-b-0">
                  <td className="w-[14rem] border-r border-[#d8cbb8] px-4 py-3 font-semibold text-[#111820] whitespace-nowrap">{label}</td>
                  <td className="px-5 py-3 text-center text-[#111820] whitespace-nowrap">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <SpecTableShell title="Standard" noScroll>
          <table className="w-full table-fixed border-collapse text-left text-sm">
            <thead className="bg-[#e4e3e7] text-xs font-semibold uppercase tracking-[0.1em] text-[#111820]">
              <tr>
                <th className="w-[14rem] border-b border-r border-[#d8cbb8] px-4 py-3 whitespace-nowrap">Manufacturing Standard</th>
                <th className="border-b border-[#d8cbb8] px-5 py-3 whitespace-nowrap">Product Designation</th>
              </tr>
            </thead>
            <tbody className="text-[#5f6872]">
              {roundBarStandardRows.map(([standard, designation]) => (
                <tr key={standard} className="border-b border-[#d8cbb8] last:border-b-0">
                  <td className="border-r border-[#d8cbb8] px-4 py-3 font-semibold text-[#111820] whitespace-nowrap">{standard}</td>
                  <td className="px-5 py-3 leading-6 text-[#5f6872] whitespace-nowrap">{designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </SpecTableShell>

        <SpecTableShell title="Dimensional Tolerances EN 10278">
          <table className="w-full min-w-[48rem] table-fixed border-collapse text-center text-sm">
            <thead className="bg-[#e4e3e7] text-xs font-semibold uppercase tracking-[0.08em] text-[#111820]">
              <tr>
                <th className="w-[14rem] border border-[#d8cbb8] px-3 py-2" rowSpan={2}>Product Type</th>
                <th className="border border-[#d8cbb8] px-3 py-2" colSpan={7}>Tolerance class according to ISO 286-2</th>
              </tr>
              <tr>
                {['h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h12'].map((head) => (
                  <th key={head} className="border border-[#d8cbb8] px-3 py-2 whitespace-nowrap">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#111820]">
              {roundBarDimensionalToleranceRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`} className="border border-[#d8cbb8] px-3 py-2 whitespace-nowrap">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </SpecTableShell>

        <SpecTableShell title="Tolerance Class to ISO">
          <table className="w-full min-w-[50rem] table-fixed border-collapse text-center text-sm">
            <thead className="bg-[#e4e3e7] text-xs font-semibold uppercase tracking-[0.08em] text-[#111820]">
              <tr>
                <th className="w-[14rem] border border-[#d8cbb8] px-3 py-2" rowSpan={2}>Nominal Dimension mm</th>
                <th className="border border-[#d8cbb8] px-3 py-2" colSpan={7}>Tolerance Class to ISO</th>
              </tr>
              <tr>
                {['h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'h12'].map((head) => (
                  <th key={head} className="border border-[#d8cbb8] px-3 py-2 whitespace-nowrap">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#111820]">
              {roundBarIsoToleranceRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`} className="border border-[#d8cbb8] px-3 py-2 whitespace-nowrap">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </SpecTableShell>

        <SpecTableShell title="Finished Condition">
          <table className="w-full min-w-[42rem] border-collapse text-left text-sm">
            <tbody className="text-[#111820]">
              {roundBarFinishedConditionRows.map((row, index) => (
                <tr key={row} className="border-b border-[#d8cbb8] last:border-b-0">
                  <td className="px-4 py-3 whitespace-nowrap">{String.fromCharCode(97 + index)}) {row}</td>
                </tr>
              ))}
              <tr>
                <td className="px-4 py-3 text-xs leading-5 text-[#5f6872]">
                  The steel product shall be delivered in one or combination of the above finished conditions with or without heat treatment.
                </td>
              </tr>
            </tbody>
          </table>
        </SpecTableShell>
      </div>
    </div>
  );
}

function FlatBarPanel() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="max-w-4xl text-left">
        <h2 className="text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
          Flat Bar
        </h2>
        <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b]">
          Features uniform thickness and clean, sharp edges. Ideal for high-end fabrication, framework, and kitchen equipment manufacturing where precise alignment and a professional finish are critical.
        </p>
      </div>

      <div className="mt-8 grid max-w-4xl gap-6">
        <SpecTableShell title="Standard" noScroll>
          <table className="w-full table-fixed border-collapse text-left text-sm">
            <thead className="bg-[#e4e3e7] text-xs font-semibold uppercase tracking-[0.1em] text-[#111820]">
              <tr>
                <th className="w-[14rem] border-b border-r border-[#d8cbb8] px-4 py-3 whitespace-nowrap">Manufacturing Standard</th>
                <th className="border-b border-r border-[#d8cbb8] py-3 pl-6 pr-5 text-left">Product Designation</th>
                <th className="w-[12rem] border-b border-[#d8cbb8] px-5 py-3 whitespace-nowrap">Grade</th>
              </tr>
            </thead>
            <tbody className="text-[#5f6872]">
              {flatBarStandardRows.map(([standard, designation], index) => (
                <tr key={standard} className="border-b border-[#d8cbb8] last:border-b-0">
                  <td className="border-r border-[#d8cbb8] px-4 py-4 font-semibold text-[#111820] whitespace-nowrap">{standard}</td>
                  <td className="border-r border-[#d8cbb8] py-4 pl-6 pr-5 leading-6">{designation}</td>
                  {index === 0 ? (
                    <td className="px-5 py-4 align-top" rowSpan={flatBarStandardRows.length}>
                      <div className="mb-3 font-semibold text-[#111820]">Austenitic</div>
                      <div className="grid grid-cols-2 gap-x-6 text-xs font-semibold uppercase tracking-[0.08em] text-[#111820]">
                        <span>EN</span>
                        <span>AISI</span>
                      </div>
                      <div className="mt-1 grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-[#5f6872]">
                        {flatBarGradeRows.map(([en, aisi], gradeIndex) => (
                          <Fragment key={`${en}-${aisi}-${gradeIndex}`}>
                            <span>{en}</span>
                            <span>{aisi}</span>
                          </Fragment>
                        ))}
                      </div>
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </SpecTableShell>

        <SpecTableShell title="Tolerance in Width and Thickness of Cold Rolled Flat Bars">
          <table className="w-full min-w-[54rem] table-fixed border-collapse text-center text-sm">
            <thead className="bg-[#e4e3e7] text-xs font-semibold uppercase tracking-[0.08em] text-[#111820]">
              <tr>
                <th className="w-[14rem] border border-[#d8cbb8] px-3 py-2" rowSpan={2}>width mm</th>
                <th className="border border-[#d8cbb8] px-3 py-2" colSpan={2}>tolerance in width, +0, mm</th>
                <th className="w-[12rem] border border-[#d8cbb8] px-3 py-2">thickness mm</th>
                <th className="w-[12rem] border border-[#d8cbb8] px-3 py-2">tolerance in thickness, +0, mm</th>
              </tr>
              <tr>
                <th className="border border-[#d8cbb8] px-3 py-2">thickness &lt;= 6.5 mm</th>
                <th className="border border-[#d8cbb8] px-3 py-2">thickness &gt; 6.5 mm</th>
                <th className="border border-[#d8cbb8] px-3 py-2">0 to 0.70</th>
                <th className="border border-[#d8cbb8] px-3 py-2">0.04</th>
              </tr>
            </thead>
            <tbody className="text-[#111820]">
              {flatBarColdToleranceRows.map((row) => (
                <tr key={`${row[0]}-${row[3]}`}>
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`} className="border border-[#d8cbb8] px-3 py-2 whitespace-nowrap">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </SpecTableShell>

        <SpecTableShell title="Tolerance in Width and Thickness for Hot Rolled Flat Bars">
          <table className="w-full min-w-[78rem] table-fixed border-collapse text-center text-xs">
            <thead className="bg-[#e4e3e7] font-semibold uppercase tracking-[0.06em] text-[#111820]">
              <tr>
                <th className="w-[14rem] border border-[#d8cbb8] px-2 py-2" rowSpan={3}>specified width mm</th>
                <th className="border border-[#d8cbb8] px-2 py-2" colSpan={12}>tolerance in thickness for thickness (over), mm</th>
                <th className="border border-[#d8cbb8] px-2 py-2" colSpan={2} rowSpan={2}>tolerance in thickness, mm</th>
              </tr>
              <tr>
                {["3.2 to 13", "13 to 25", "25 to 50", "50 to 100", "100 to 150", "150 to 200"].map((head) => (
                  <th key={head} className="border border-[#d8cbb8] px-2 py-2" colSpan={2}>{head}</th>
                ))}
              </tr>
              <tr>
                {Array.from({ length: 7 }).flatMap((_, index) => [
                  <th key={`plus-${index}`} className="border border-[#d8cbb8] px-2 py-2">+</th>,
                  <th key={`minus-${index}`} className="border border-[#d8cbb8] px-2 py-2">-</th>,
                ])}
              </tr>
            </thead>
            <tbody className="text-[#111820]">
              {flatBarHotToleranceRows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, index) => (
                    <td key={`${row[0]}-${index}`} className="border border-[#d8cbb8] px-2 py-2 whitespace-nowrap">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </SpecTableShell>

        <section className="overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_14px_34px_rgba(13,20,27,0.045)]">
          <div className="border-b border-[#d8cbb8] bg-[#111820] px-4 py-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f6d044]">Supply conditions</h3>
          </div>
          <ul className="grid gap-0 text-sm text-[#111820]">
            {flatBarSupplyConditionRows.map((item) => (
              <li key={item} className="border-b border-[#d8cbb8] px-4 py-3 last:border-b-0">{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function AngleBarPanel() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="max-w-4xl text-left">
        <h2 className="text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
          Angle Bar
        </h2>
        <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b]">
          Supplied for high-load structural applications. Our angle bars provide exceptional dimensional stability and load-bearing strength, making them the reliable choice for industrial bracing and architectural supports.
        </p>
      </div>

      <div className="mt-8 grid max-w-4xl gap-6">
        <SpecTableShell title="Tolerance in Width and Thickness for Angle Bars" noScroll>
          <table className="w-full table-fixed border-collapse text-center text-[0.62rem] sm:text-[0.68rem]">
            <thead className="bg-[#e4e3e7] font-semibold tracking-[0.01em] text-[#111820]">
              <tr>
                <th className="w-[4.2rem] border border-[#d8cbb8] px-1 py-2 uppercase">width mm</th>
                <th className="w-[8.4rem] border border-[#d8cbb8] px-1 py-2 uppercase whitespace-nowrap">tolerance in width mm</th>
                {angleBarThicknessHeads.map((head) => (
                  <th key={head} className="w-[2.3rem] border border-[#d8cbb8] px-1 py-2">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-[#111820]">
              {angleBarToleranceRows.map((row) => (
                <tr key={row[0]}>
                  <td className="border border-[#d8cbb8] px-1 py-2 font-semibold">{row[0]}</td>
                  <td className="border border-[#d8cbb8] px-1 py-2">{row[1]}</td>
                  {row.slice(2).map((cell, index) => (
                    <td key={`${row[0]}-${angleBarThicknessHeads[index]}`} className="border border-[#d8cbb8] px-1 py-2 whitespace-nowrap">
                      {cell || "--"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          <p className="border-t border-[#d8cbb8] px-4 py-3 text-xs leading-5 text-[#5f6872]">
            *Available for both equal and unequal angle bar and inch-size.
          </p>
        </SpecTableShell>

        <SpecTableShell title="Finish Condition and Main Grade" noScroll>
          <table className="w-full table-fixed border-collapse text-left text-sm">
            <thead className="bg-[#e4e3e7] text-xs font-semibold uppercase tracking-[0.08em] text-[#111820]">
              <tr>
                <th className="w-[62%] border-b border-r border-[#d8cbb8] px-4 py-3">Finish Condition</th>
                <th className="border-b border-[#d8cbb8] px-4 py-3">Main Grade</th>
              </tr>
            </thead>
            <tbody className="text-[#111820]">
              {angleBarFinishConditionRows.map((item, index) => (
                <tr key={item} className="border-b border-[#d8cbb8] last:border-b-0">
                  <td className="border-r border-[#d8cbb8] px-4 py-4 align-middle">
                    {String.fromCharCode(97 + index)}) {item}
                  </td>
                  {index === 0 ? (
                    <td className="px-4 py-4 align-top" rowSpan={angleBarFinishConditionRows.length}>
                      <div className="grid gap-1 font-semibold text-[#111820]">
                        {angleBarMainGradeRows.map((grade) => (
                          <span key={grade}>{grade}</span>
                        ))}
                      </div>
                      <p className="mt-5 text-xs leading-5 text-[#5f6872]">
                        Other grades are available, such as 310S, 904L.
                      </p>
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </SpecTableShell>

        <SpecTableShell title="Delivery State and Size Range">
          <table className="w-full min-w-[46rem] table-fixed border-collapse text-left text-sm">
            <thead className="bg-[#e4e3e7] text-xs font-semibold uppercase tracking-[0.08em] text-[#111820]">
              <tr>
                <th className="w-[62%] border-b border-r border-[#d8cbb8] px-4 py-3">Delivery State</th>
                <th className="border-b border-[#d8cbb8] px-4 py-3">Size Range</th>
              </tr>
            </thead>
            <tbody className="text-[#111820]">
              {angleBarDeliveryRows.map(([state, size], index) => (
                <tr key={state} className="border-b border-[#d8cbb8] last:border-b-0">
                  <td className="border-r border-[#d8cbb8] px-4 py-3 align-middle">
                    {String.fromCharCode(97 + index)}) {state}
                  </td>
                  <td className="px-4 py-3 align-middle leading-6 text-[#5f6872]">
                    {index === 1 ? (
                      <>
                        <strong className="font-semibold text-[#111820]">Width:</strong> 20mm, 25mm, 30mm, 35mm, 40mm, 45mm, 50mm, 60mm, 65mm, 70mm, 75mm, 80mm, 90mm, 100mm.
                        <br />
                        <strong className="font-semibold text-[#111820]">Thickness:</strong> 3mm, 4mm, 5mm, 6mm, 7mm, 8mm, 9mm, 10mm, 12mm
                      </>
                    ) : (
                      size
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </SpecTableShell>
      </div>
    </div>
  );
}
function SquareHexBarPanel() {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="max-w-4xl text-left">
        <h2 className="text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
          Square & Hexagon Bar
        </h2>
        <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b]">
          Designed with uniform cross-sections and high torque resistance. These bars are essential for precision-engineered parts, fasteners, and structural assemblies requiring dependable strength and tight tolerances.
        </p>
      </div>

      <div className="mt-8 grid max-w-4xl gap-6">
        <SpecTableShell title="Delivery State & Size" noScroll>
          <table className="w-full table-fixed border-collapse text-left text-sm">
            <thead className="bg-[#e4e3e7] text-xs font-semibold uppercase tracking-[0.08em] text-[#111820]">
              <tr>
                <th className="w-[70%] border-b border-r border-[#d8cbb8] px-4 py-3">Delivery State & Size</th>
                <th className="border-b border-[#d8cbb8] px-4 py-3">Main Grade</th>
              </tr>
            </thead>
            <tbody className="text-[#111820]">
              {squareHexDeliveryStateRows.map((state, index) => (
                <tr key={state} className="border-b border-[#d8cbb8] last:border-b-0">
                  <td className="border-r border-[#d8cbb8] px-4 py-3 align-middle">
                    {String.fromCharCode(97 + index)}) {state}
                  </td>
                  {index === 0 ? (
                    <td className="px-4 py-3 align-top" rowSpan={squareHexDeliveryStateRows.length}>
                      <div className="grid gap-1 font-semibold text-[#111820]">
                        {squareHexMainGradeRows.map((grade) => (
                          <span key={grade}>{grade}</span>
                        ))}
                      </div>
                    </td>
                  ) : null}
                </tr>
              ))}
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-[#111820]" colSpan={2}>
                  Theoretical Weight(kg/m): S(mm) x S(mm) x 0.0068
                </td>
              </tr>
            </tbody>
          </table>
        </SpecTableShell>

        <SpecTableShell title="Permitted Variations in Size of Cold Finished Hexagonal and Square Bars" noScroll>
          <table className="w-full table-fixed border-collapse text-center text-xs sm:text-sm">
            <thead className="bg-[#e4e3e7] text-[#111820]">
              <tr>
                <th className="border-b border-[#d8cbb8] px-4 py-3 font-medium italic" colSpan={3}>
                  Permitted Variations in Size of Cold Finished Hexagonal, and Square Bars
                </th>
              </tr>
              <tr className="bg-white">
                <th className="w-[40%] border-b border-r border-[#d8cbb8] px-4 py-3 font-medium" rowSpan={2}>
                  Specified Size,<sup>A</sup> in.[mm]
                </th>
                <th className="border-b border-[#d8cbb8] px-4 py-2 font-medium" colSpan={2}>
                  Permitted Variations from Specified Size, in.[mm]<sup>B</sup>
                </th>
              </tr>
              <tr className="bg-white">
                <th className="border-b border-r border-[#d8cbb8] px-4 py-2 font-medium">Over</th>
                <th className="border-b border-[#d8cbb8] px-4 py-2 font-medium">Under</th>
              </tr>
            </thead>
            <tbody className="text-[#111820]">
              {squareHexVariationRows.map(([size, over, under]) => (
                <tr key={size} className="border-b border-[#d8cbb8] last:border-b-0">
                  <td className="border-r border-[#d8cbb8] px-4 py-2">{size}</td>
                  <td className="border-r border-[#d8cbb8] px-4 py-2">{over}</td>
                  <td className="px-4 py-2">{under}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="border-t border-[#d8cbb8] px-4 py-3 text-[0.68rem] leading-5 text-[#5f6872]">
            <p><sup>A</sup> Distance across flats.</p>
            <p><sup>B</sup> When it is necessary to heat treat or heat treat and pickle after cold finishing, size tolerances are double those shown in the table.</p>
          </div>
        </SpecTableShell>
      </div>
    </div>
  );
}

function BarFormsSection() {
  return (
    <section id="bar-forms" className="bar-forms-tabs bg-[#f7f2e8] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .bar-form-radio { position: absolute; opacity: 0; pointer-events: none; }
            .bar-form-panel { display: none; }
            #bar-form-round:checked ~ .bar-form-panels .bar-form-panel-round,
            #bar-form-flat:checked ~ .bar-form-panels .bar-form-panel-flat,
            #bar-form-angle:checked ~ .bar-form-panels .bar-form-panel-angle,
            #bar-form-squareHex:checked ~ .bar-form-panels .bar-form-panel-squareHex { display: block; }
            #bar-form-round:checked ~ .bar-form-selector label[for="bar-form-round"],
            #bar-form-flat:checked ~ .bar-form-selector label[for="bar-form-flat"],
            #bar-form-angle:checked ~ .bar-form-selector label[for="bar-form-angle"],
            #bar-form-squareHex:checked ~ .bar-form-selector label[for="bar-form-squareHex"] { background: #111820; color: #f6d044; }
            #bar-form-round:checked ~ .bar-form-selector label[for="bar-form-round"] .bar-form-option-image,
            #bar-form-flat:checked ~ .bar-form-selector label[for="bar-form-flat"] .bar-form-option-image,
            #bar-form-angle:checked ~ .bar-form-selector label[for="bar-form-angle"] .bar-form-option-image,
            #bar-form-squareHex:checked ~ .bar-form-selector label[for="bar-form-squareHex"] .bar-form-option-image { opacity: 0; transform: scale(1.1); }
            #bar-form-round:checked ~ .bar-form-selector label[for="bar-form-round"] .bar-form-option-overlay,
            #bar-form-flat:checked ~ .bar-form-selector label[for="bar-form-flat"] .bar-form-option-overlay,
            #bar-form-angle:checked ~ .bar-form-selector label[for="bar-form-angle"] .bar-form-option-overlay,
            #bar-form-squareHex:checked ~ .bar-form-selector label[for="bar-form-squareHex"] .bar-form-option-overlay { background: #111820; }
            #bar-form-round:checked ~ .bar-form-selector label[for="bar-form-round"] .bar-form-active-line,
            #bar-form-flat:checked ~ .bar-form-selector label[for="bar-form-flat"] .bar-form-active-line,
            #bar-form-angle:checked ~ .bar-form-selector label[for="bar-form-angle"] .bar-form-active-line,
            #bar-form-squareHex:checked ~ .bar-form-selector label[for="bar-form-squareHex"] .bar-form-active-line { transform: scaleX(1); }
          `,
        }}
      />
      <div className="mx-auto max-w-4xl">
        {barFormPages.map((item, index) => (
          <input
            key={item.key}
            id={`bar-form-${item.key}`}
            className="bar-form-radio"
            type="radio"
            name="bar-form-tabs"
            defaultChecked={index === 0}
          />
        ))}

        <div className="bar-form-selector grid overflow-hidden border border-[#d8cbb8] bg-[#fffdf8] shadow-[0_14px_34px_rgba(13,20,27,0.055)] sm:grid-cols-4">
          {barFormPages.map((item) => (
            <label
              key={item.key}
              htmlFor={`bar-form-${item.key}`}
              className="group relative flex min-h-[5.75rem] cursor-pointer items-center justify-center overflow-hidden border-b border-[#d8cbb8] px-3 text-center text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[#111820] transition hover:bg-[#111820] hover:text-[#f6d044] sm:border-b-0 sm:border-r sm:last:border-r-0 md:text-[0.76rem] lg:text-[0.82rem] xl:text-sm"
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="bar-form-option-image object-cover object-center opacity-70 saturate-[1.02] contrast-[1.04] transition duration-500 group-hover:scale-110 group-hover:opacity-0"
              />
              <span className="bar-form-option-overlay absolute inset-0 bg-[#fffdf8]/38 transition duration-300 group-hover:bg-[#111820]" aria-hidden="true" />
              <span className="bar-form-active-line absolute inset-x-6 bottom-4 h-[3px] origin-center scale-x-0 bg-[#f6d044] transition duration-300 group-hover:scale-x-100" aria-hidden="true" />
              <span className="relative z-10 whitespace-nowrap leading-5 transition">
                {item.title}
              </span>
            </label>
          ))}
        </div>

        <div className="bar-form-panels pt-10 lg:pt-12">
          <div className="bar-form-panel bar-form-panel-round">
            <RoundBarPanel />
          </div>
          <div className="bar-form-panel bar-form-panel-flat">
            <FlatBarPanel />
          </div>
          <div className="bar-form-panel bar-form-panel-angle">
            <AngleBarPanel />
          </div>
          <div className="bar-form-panel bar-form-panel-squareHex">
            <SquareHexBarPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
function TubePipeOptionsSection() {
  const ornamentalOptionGroups = [
    {
      title: "Grade selection",
      items: [
        { label: "304 / 304L stainless steel", href: "/grades/304-stainless-steel" },
        { label: "316 / 316L stainless steel", href: "/grades/316l-stainless-steel" },
        { label: "430 stainless steel", href: "/grades/430-stainless-steel" },
        { label: "201 stainless steel", href: "/grades/201-stainless-steel" },
      ],
    },
    {
      title: "Surface finish",
      items: [
        { label: "8K Mirror Finish", href: "/surfaces/stainless-steel-8k-mirror-finish" },
        { label: "No.4 Brushed Finish", href: "/surfaces/stainless-steel-no4-brushed-finish" },
        { label: "Hairline Finish", href: "/surfaces/stainless-steel-hairline-finish" },
        { label: "BA Finish", href: "/surfaces/stainless-steel-ba-finish" },
      ],
    },
  ];

  const sanitaryOptionGroups = [
    {
      title: "Grade selection",
      items: [
        { label: "304 / 304L sanitary tube", href: "/grades/304-stainless-steel" },
        { label: "316 / 316L sanitary tube", href: "/grades/316l-stainless-steel" },
      ],
    },
    {
      title: "Sanitary finish",
      items: [
        { label: "Polished ID & OD", href: "/solutions/applications/food-beverage" },
        { label: "BA Bright Annealed", href: "/surfaces/stainless-steel-ba-finish" },
        { label: "Pickled & Passivated", href: "/solutions/applications/medical-pharmaceutical" },
        { label: "Fine Satin Finish", href: "/surfaces/stainless-steel-no4-brushed-finish" },
      ],
    },
  ];


  const industrialOptionGroups = [
    {
      title: "Grade selection",
      items: [
        { label: "304 / 304L industrial pipe", href: "/grades/304-stainless-steel" },
        { label: "316 / 316L industrial pipe", href: "/grades/316l-stainless-steel" },

        { label: "2205 duplex stainless pipe", href: "/grades/2205-duplex-stainless-steel" },
      ],
    },
    {
      title: "Surface condition",
      items: [
        { label: "Annealed & Pickled", href: "/solutions/capabilities/surface-finishing" },
        { label: "Pickled & Passivated", href: "/solutions/capabilities/surface-finishing" },
        { label: "Mill Finish", href: "/products/stainless-steel-tube-pipe" },
        { label: "Weld Bead Treated", href: "/solutions/capabilities/surface-finishing" },
      ],
    },
  ];
  const ornamentalTechnicalRows = [
    {
      item: "Manufacturing Standard",
      details: "ASTM A554 / GB/T 12770 / JIS G3446 / JG/T 3030 / YB/T 5363 / EN 10219-2",
    },
    {
      item: "Dimension Range",
      details: "Round: 6~325 mm / Square: 10*10~200*200 mm / Rectangular: 20*10~200*100 mm / THK: 0.8~8.0 mm",
    },
    {
      item: "Available Grades",
      details: "304 / 304L / 316L / 200 series / 400 series",
    },
    {
      item: "Finished Condition",
      details: "#180 / #240 / #320 / #400 / #600# / HLMF / 8K / and more",
    },
  ];
  const sanitaryTechnicalRows = [
    {
      item: "Manufacturing Standard",
      details: "ASTM A270 / DIN 11850 / JIS G3447 / ISO 2037 / BS 4825 / QB/T 2467",
    },
    {
      item: "Dimension Range",
      details: "OD: 15.9~168.3 mm / THK: 0.9~3.0 mm",
    },
    {
      item: "Available Grades",
      details: "304 / 304L / 316L",
    },
    {
      item: "Outer and Inner Finished Condition",
      details: "#180 / #240 / #320 / #400",
    },
  ];

  const industrialTechnicalRows = [
    {
      item: "Specification",
      details: "ASTM A312 industrial stainless steel pipe",
    },
    {
      item: "Material",
      details: "ASTM A312 304 / 304L / 316 / 316L",
    },
    {
      item: "OD Range",
      details: "0.25 inch ~ 84 inch",
    },
    {
      item: "Thickness",
      details: "0.5 mm ~ 30.0 mm / SCH5S ~ SCH80S",
    },
    {
      item: "Capacity",
      details: "200,000 tons / year",
    },
    {
      item: "Standard",
      details: "CNS / JIS G3459 / ASTM A312 / GB/T 12771 / GB/T 28708 / EN 10217-7 / etc.",
    },
  ];

  const industrialProofPoints = [
    {
      icon: "finish",
      text: "25H deep pickling (8H industry norm) 鈫?+40% corrosion resistance",
    },
    {
      icon: "release",
      text: "In-house certified pickling process with full control",
    },
    {
      icon: "tolerance",
      text: "Tighter tolerance 鈮?0% (vs 12.5% industry standard)",
    },
    {
      icon: "standard",
      text: "30-year ASTM welding expertise 鈫?seamless-grade mechanical performance",
    },
    {
      icon: "size",
      text: "100% roundness verified 鈫?25% stronger pressure endurance",
    },
  ];  return (
    <section id="tube-pipe-options" className="tube-pipe-tabs bg-[#f7f2e8] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .tube-pipe-radio { position: absolute; opacity: 0; pointer-events: none; }
            .tube-pipe-panel { display: none; }
                        #tube-pipe-ornamental:checked ~ .tube-pipe-panels .tube-pipe-panel-ornamental,
            #tube-pipe-sanitary:checked ~ .tube-pipe-panels .tube-pipe-panel-sanitary,
            #tube-pipe-industrial:checked ~ .tube-pipe-panels .tube-pipe-panel-industrial { display: block; }
            #tube-pipe-ornamental:checked ~ .tube-pipe-selector label[for="tube-pipe-ornamental"],
            #tube-pipe-sanitary:checked ~ .tube-pipe-selector label[for="tube-pipe-sanitary"],
            #tube-pipe-industrial:checked ~ .tube-pipe-selector label[for="tube-pipe-industrial"] { background: #111820; color: #f6d044; }
            #tube-pipe-ornamental:checked ~ .tube-pipe-selector label[for="tube-pipe-ornamental"] .tube-pipe-option-image,
            #tube-pipe-sanitary:checked ~ .tube-pipe-selector label[for="tube-pipe-sanitary"] .tube-pipe-option-image,
            #tube-pipe-industrial:checked ~ .tube-pipe-selector label[for="tube-pipe-industrial"] .tube-pipe-option-image { opacity: 0.16; transform: scale(1.08); }
            #tube-pipe-ornamental:checked ~ .tube-pipe-selector label[for="tube-pipe-ornamental"] .tube-pipe-active-line,
            #tube-pipe-sanitary:checked ~ .tube-pipe-selector label[for="tube-pipe-sanitary"] .tube-pipe-active-line,
            #tube-pipe-industrial:checked ~ .tube-pipe-selector label[for="tube-pipe-industrial"] .tube-pipe-active-line { transform: scaleX(1); }
          `,
        }}
      />
      <div className="mx-auto max-w-5xl">
        {tubePipeOptions.map((item, index) => (
          <input
            key={item.key}
            id={`tube-pipe-${item.key}`}
            className="tube-pipe-radio"
            type="radio"
            name="tube-pipe-tabs"
            defaultChecked={index === 0}
          />
        ))}

        <div className="tube-pipe-selector grid overflow-hidden border border-[#d8cbb8] bg-[#fffdf8] shadow-[0_14px_34px_rgba(13,20,27,0.055)] md:grid-cols-3">
          {tubePipeOptions.map((item) => (
            <label
              key={item.key}
              htmlFor={`tube-pipe-${item.key}`}
              className="group relative flex min-h-[7.5rem] cursor-pointer items-center justify-center overflow-hidden border-b border-[#d8cbb8] px-5 text-center font-bold uppercase tracking-[0.06em] text-[#111820] transition hover:bg-[#111820] hover:text-[#f6d044] md:border-b-0 md:border-r md:last:border-r-0"
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="tube-pipe-option-image object-cover object-center opacity-55 saturate-[1.02] contrast-[1.05] transition duration-500 group-hover:scale-110 group-hover:opacity-20"
              />
              <span className="absolute inset-0 bg-[#fffdf8]/50 transition duration-300 group-hover:bg-[#111820]/88" aria-hidden="true" />
              <span className="tube-pipe-active-line absolute inset-x-8 bottom-5 h-[3px] origin-center scale-x-0 bg-[#f6d044] transition duration-300 group-hover:scale-x-100" aria-hidden="true" />
              <span className="relative z-10 flex flex-col items-center gap-2 leading-none">
                <span className="whitespace-nowrap text-[1.05rem] font-bold leading-none sm:text-[1.35rem] lg:text-[1.55rem]">{item.title}</span>
                <span className="text-[0.82rem] font-bold tracking-[0.18em] text-current/78 sm:text-[0.95rem]">{item.standard}</span>
              </span>
            </label>
          ))}
        </div>

        <div className="tube-pipe-panels pt-10 lg:pt-12">
          <div className="tube-pipe-panel tube-pipe-panel-ornamental">
            <div className="max-w-4xl text-left">
              <h2 className="text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
                Decorative Stainless Steel Pipes
              </h2>
              <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b]">
                Jinling Steel provides premium stainless steel decorative tubes engineered for high-end architectural and interior applications. By integrating automated loading and unloading systems, we ensure every tube remains scratch-free and pristine throughout the entire production flow. Our A554 tubes feature precise welding, consistent dimensional tolerance, and superior surface finishes-from 600-grit mirror to fine hairline-delivering the perfect visual alignment and structural reliability for modern design projects.
              </p>
            </div>

            <div className="mt-10 grid gap-7 border-t border-[#d8cbb8] pt-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.92fr)] lg:items-center">
              <div className="border border-[#d8cbb8] bg-[#fffdf8] p-3 shadow-[0_18px_42px_rgba(13,20,27,0.08)]">
                <div className="grid gap-3 sm:grid-cols-2">
                  {ornamentalOptionGroups.map((group) => (
                    <div key={group.title} className="border border-[#e4d8c7] bg-white/86 p-4 shadow-[0_10px_24px_rgba(13,20,27,0.045)]">
                      <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#8a6b32]">
                        {group.title}
                      </p>
                      <div className="mt-4 grid gap-2.5">
                        {group.items.map((item, index) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className={
                              index % 2 === 0
                                ? "inline-flex min-h-10 items-center bg-[#f6d044] px-4 text-xs font-semibold text-[#111820] transition hover:bg-[#f2c820]"
                                : "inline-flex min-h-10 items-center bg-[#111820] px-4 text-xs font-semibold text-white transition hover:bg-[#26313d] hover:text-[#f6d044]"
                            }
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:pl-3">
                <h3 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
                  Available ornamental tube options
                </h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.45rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820]">
                  Choose A554 stainless steel ornamental tube by grade and surface finish, including 201, 304, 304L, 316L, and 430 stainless steel, plus decorative mirror, brushed, hairline, BA, No.4, and 8K finishes for handrails, furniture, architecture, display frames, and fabrication projects.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-7 border-t border-[#d8cbb8] pt-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.92fr)] lg:items-center">
              <div className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.28)]">
                <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
                    <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                      Technical Specifications
                    </h3>
                    <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
                  </div>
                  <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
                    A554 decorative stainless steel tube for architectural and fabrication projects
                  </p>
                </div>
                <table className="w-full table-fixed border-collapse text-left text-[0.72rem] sm:text-[0.78rem]">
                  <thead>
                    <tr className="bg-[#f6d044] text-[#101820]">
                      <th className="w-[38%] border-r border-[#111820]/24 px-3 py-2 text-center text-[0.66rem] font-semibold uppercase tracking-[0.12em] sm:px-4">
                        Item
                      </th>
                      <th className="px-3 py-2 text-center text-[0.66rem] font-semibold uppercase tracking-[0.12em] sm:px-4">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {ornamentalTechnicalRows.map((row) => (
                      <tr key={row.item} className="bg-[#111111]">
                        <th className="border-r border-t border-white/14 px-3 py-2 text-left text-[0.72rem] font-semibold leading-5 text-white sm:px-4 sm:text-[0.78rem]">
                          {row.item}
                        </th>
                        <td className="border-t border-white/14 px-3 py-2 leading-5 text-white/78 sm:px-5">
                          {row.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="lg:pl-3">
                <h3 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
                  Technical specification
                </h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.45rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820]">
                  Review A554 ornamental stainless steel tube specifications, including manufacturing standards, round, square, and rectangular tube size ranges, wall thickness, available stainless steel grades, and decorative polished finishes for architectural tubing and fabrication projects.
                </p>
              </div>
            </div>
            <TubePipeWhyChooseUs />
            <TubePipeProcessingVideo />
          </div>          <div className="tube-pipe-panel tube-pipe-panel-sanitary">
            <div className="max-w-4xl text-left">
              <h2 className="text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
                Sanitary Stainless Steel Pipes
              </h2>
              <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b]">
                Sourced from top-tier mills, Jinling Steel&apos;s stainless steel pipes and tubes offer superior corrosion resistance and surface integrity. Our automated production lines minimize manual contact to ensure scratch-free quality, supported by rigorous chemical and mechanical testing. With wide tooling coverage for project-driven sizes, we deliver fabrication-ready tubing with protective packing for seamless global installation.
              </p>
            </div>

            <div className="mt-10 grid gap-7 border-t border-[#d8cbb8] pt-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.92fr)] lg:items-center">
              <div className="border border-[#d8cbb8] bg-[#fffdf8] p-3 shadow-[0_18px_42px_rgba(13,20,27,0.08)]">
                <div className="grid gap-3 sm:grid-cols-2">
                  {sanitaryOptionGroups.map((group) => (
                    <div key={group.title} className="border border-[#e4d8c7] bg-white/86 p-4 shadow-[0_10px_24px_rgba(13,20,27,0.045)]">
                      <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#8a6b32]">
                        {group.title}
                      </p>
                      <div className="mt-4 grid gap-2.5">
                        {group.items.map((item, index) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className={
                              index % 2 === 0
                                ? "inline-flex min-h-10 items-center bg-[#f6d044] px-4 text-xs font-semibold text-[#111820] transition hover:bg-[#f2c820]"
                                : "inline-flex min-h-10 items-center bg-[#111820] px-4 text-xs font-semibold text-white transition hover:bg-[#26313d] hover:text-[#f6d044]"
                            }
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:pl-3">
                <h3 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
                  Available sanitary tube options
                </h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.45rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820]">
                  Choose ASTM A270 sanitary stainless steel tube by grade and hygienic surface finish, including 304, 304L, 316, and 316L stainless steel tubing for food processing, dairy, beverage, pharmaceutical, cleanroom, and hygienic piping systems.
                </p>
              </div>
            </div>
            <div className="mt-10 grid gap-7 border-t border-[#d8cbb8] pt-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.92fr)] lg:items-center">
              <div className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.28)]">
                <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
                    <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                      Technical Specifications
                    </h3>
                    <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
                  </div>
                  <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
                    ASTM A270 sanitary stainless steel tube for hygienic piping systems
                  </p>
                </div>
                <table className="w-full table-fixed border-collapse text-left text-[0.72rem] sm:text-[0.78rem]">
                  <thead>
                    <tr className="bg-[#f6d044] text-[#101820]">
                      <th className="w-[38%] border-r border-[#111820]/24 px-3 py-2 text-center text-[0.66rem] font-semibold uppercase tracking-[0.12em] sm:px-4">
                        Item
                      </th>
                      <th className="px-3 py-2 text-center text-[0.66rem] font-semibold uppercase tracking-[0.12em] sm:px-4">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sanitaryTechnicalRows.map((row) => (
                      <tr key={row.item} className="bg-[#111111]">
                        <th className="border-r border-t border-white/14 px-3 py-2 text-left text-[0.72rem] font-semibold leading-5 text-white sm:px-4 sm:text-[0.78rem]">
                          {row.item}
                        </th>
                        <td className="border-t border-white/14 px-3 py-2 leading-5 text-white/78 sm:px-5">
                          {row.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="lg:pl-3">
                <h3 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
                  Technical specification
                </h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.45rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820]">
                  Review ASTM A270 sanitary stainless steel tube specifications, including DIN 11850, JIS G3447, ISO 2037, BS 4825, and QB/T 2467 standards, OD range, wall thickness, 304, 304L, and 316L grades, plus polished inner and outer finishes for hygienic tubing, food-grade piping, dairy, beverage, and pharmaceutical process lines.
                </p>
              </div>
            </div>
            <SanitaryTubeWhyChooseUs />
            <SanitaryTubeProcessingVideo />
          </div>
          <div className="tube-pipe-panel tube-pipe-panel-industrial">
            <div className="max-w-4xl text-left">
              <h2 className="text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
                Industrial Stainless Steel Pipes
              </h2>
              <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b]">
                Jinling Steel delivers high-performance industrial stainless steel pipes engineered for extreme corrosive and high-pressure environments. Leveraging our rare national pickling license, we utilize a 25-hour deep passivation process to ensure a robust protective layer that far exceeds industry standards. With a precision negative tolerance controlled within 10% and 30 years of expert weld craftsmanship, our pipes offer mechanical integrity equivalent to seamless options. From chemical processing to heavy engineering, our A312 pipes provide a &quot;zero-risk&quot; solution with 100% roundness accuracy and full MTC 3.1 traceability.
              </p>
            </div>
            <div className="mt-10 grid gap-7 border-t border-[#d8cbb8] pt-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.92fr)] lg:items-center">
              <div className="border border-[#d8cbb8] bg-[#fffdf8] p-3 shadow-[0_18px_42px_rgba(13,20,27,0.08)]">
                <div className="grid gap-3 sm:grid-cols-2">
                  {industrialOptionGroups.map((group) => (
                    <div key={group.title} className="border border-[#e4d8c7] bg-white/86 p-4 shadow-[0_10px_24px_rgba(13,20,27,0.045)]">
                      <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#8a6b32]">
                        {group.title}
                      </p>
                      <div className="mt-4 grid gap-2.5">
                        {group.items.map((item, index) => (
                          <Link
                            key={item.label}
                            href={item.href}
                            className={
                              index % 2 === 0
                                ? "inline-flex min-h-10 items-center bg-[#f6d044] px-4 text-xs font-semibold text-[#111820] transition hover:bg-[#f2c820]"
                                : "inline-flex min-h-10 items-center bg-[#111820] px-4 text-xs font-semibold text-white transition hover:bg-[#26313d] hover:text-[#f6d044]"
                            }
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:pl-3">
                <h3 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
                  Available Industrial Pipe options
                </h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.45rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820]">
                  Choose ASTM A312 industrial stainless steel pipe by grade, pipe route, and final condition, including 304, 304L, 316L, and 2205 duplex stainless steel pipes, annealed and pickled pipe, pickled and passivated stainless pipe, mill finish pipe, weld bead treated pipe, high-pressure piping, chemical processing pipe, and MTC 3.1 traceable supply for heavy engineering projects.
                </p>
              </div>
            </div>
            <div className="mt-10 grid gap-7 border-t border-[#d8cbb8] pt-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(19rem,0.92fr)] lg:items-center">
              <div className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.28)]">
                <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
                    <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                      Technical Specifications
                    </h3>
                    <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
                  </div>
                  <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
                    ASTM A312 industrial stainless steel pipe for pressure and corrosive service
                  </p>
                </div>
                <table className="w-full table-fixed border-collapse text-left text-[0.72rem] sm:text-[0.78rem]">
                  <thead>
                    <tr className="bg-[#f6d044] text-[#101820]">
                      <th className="w-[38%] border-r border-[#111820]/24 px-3 py-2 text-center text-[0.66rem] font-semibold uppercase tracking-[0.12em] sm:px-4">
                        Item
                      </th>
                      <th className="px-3 py-2 text-center text-[0.66rem] font-semibold uppercase tracking-[0.12em] sm:px-4">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {industrialTechnicalRows.map((row) => (
                      <tr key={row.item} className="bg-[#111111]">
                        <th className="border-r border-t border-white/14 px-3 py-2 text-left text-[0.72rem] font-semibold leading-5 text-white sm:px-4 sm:text-[0.78rem]">
                          {row.item}
                        </th>
                        <td className="border-t border-white/14 px-3 py-2 leading-5 text-white/78 sm:px-5">
                          {row.details}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="lg:pl-3">
                <h3 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
                  Technical specification
                </h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.45rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820]">
                  Review ASTM A312 industrial stainless steel pipe specifications, including CNS, JIS G3459, ASTM A312, GB/T 12771, GB/T 28708, and EN 10217-7 standards, 0.25~84 inch outside diameter range, 0.5~30.0 mm wall thickness, SCH5S to SCH80S schedules, 304, 304L, 316, and 316L stainless steel grades, and 200,000 tons annual capacity for chemical processing, high-pressure piping, corrosive service, and heavy engineering projects.
                </p>
              </div>
            </div>
            <div className="mt-10 grid gap-8 border-t border-[#d8cbb8] pt-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
              <div>
                <h3 className="text-[1.9rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.55rem]">
                  Why choose us
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.9rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase sm:text-base">
                  For ASTM A312 industrial stainless steel pipe buyers, corrosion resistance, pressure endurance, weld integrity, and dimensional tolerance decide long-term project risk. Jinling Steel supports chemical processing pipe, high-pressure stainless steel piping, corrosive service pipelines, and heavy engineering projects with controlled pickling, passivation, welding, roundness inspection, and export-ready quality traceability.
                </p>
              </div>
              <ol className="grid gap-2.5">
                {industrialProofPoints.map((point, index) => (
                  <li
                    key={point.text}
                    className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]"
                  >
                    <div
                      className={
                        index % 2 === 0
                          ? "flex items-center justify-center bg-[#f6d044] text-[#111820]"
                          : "flex items-center justify-center bg-[#111820] text-[#f6d044]"
                      }
                    >
                      <BarProofIcon type={point.icon} />
                    </div>
                    <p className="flex min-h-[3.8rem] items-center px-4 py-3 text-sm font-semibold leading-6 text-[#111820] sm:text-[0.96rem]">
                      {point.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-10 grid w-full gap-8 border-t border-[#d8cbb8] pt-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
              <div>
                <h3 className="text-[1.9rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.55rem]">
                  Pipe Production
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.9rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase sm:text-base">
                  Watch Jinling Steel&apos;s industrial stainless steel pipe production process, from coil feeding and tube forming to welding, sizing, pickling, inspection, and final packing. This video helps buyers understand how ASTM A312 stainless steel pipes are manufactured for chemical processing, high-pressure piping, corrosive service, industrial fluid transport, and heavy engineering projects.
                </p>
              </div>
              <div className="border border-[#d8cbb8] bg-white p-3 shadow-[0_18px_42px_rgba(13,20,27,0.08)]">
                <VideoEmbed
                  youtubeId="xAF-QN2s-8g"
                  title="Industrial stainless steel pipe production video"
                  caption="ASTM A312 stainless steel pipe forming, welding, sizing, pickling, inspection, and packing."
                  className="[&_div]:rounded-none"
                />
              </div>
            </div>          </div>
      </div>
      </div>
    </section>
  );
}
const tubePipeRelatedArticles = [
  {
    name: "Seamless or Welded Stainless Tube: Which Has Tighter Wall Tolerance?",
    href: "/knowledge-base/ss-tube-wall-thickness-tolerance",
    image: "/images/blog/tube-wall-tolerance-hero.webp",
    excerpt:
      "Compare seamless and welded stainless tube tolerance, wall thickness control, inspection points, and purchase wording before releasing a pipe order.",
  },
  {
    name: "How Does Food-Grade Pipe Welding Differ From Industrial?",
    href: "/knowledge-base/stainless-pipe-welding-food-industrial",
    image: "/images/blog/food-pipe-weld-release-hero.webp",
    excerpt:
      "Understand weld treatment, polishing, passivation, hygiene demands, and acceptance checks for sanitary tube and industrial stainless pipe projects.",
  },
  {
    name: "Which Stainless Steel Works Against H2SO4, HCl, and HNO3?",
    href: "/knowledge-base/stainless-steel-chemical-environments",
    image: "/images/applications/chemical-petrochemical/hero.webp",
    excerpt:
      "Choose stainless steel grades for chemical environments by acid type, chloride risk, temperature, corrosion allowance, and service conditions.",
  },
] as const;

function TubePipeRelatedArticles() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-6rem)] gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
          <div>
            <h2 className="max-w-[8.5em] text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
              Related articles
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {tubePipeRelatedArticles.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)]"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.18)_0%,rgba(13,20,27,0.76)_54%,rgba(13,20,27,0.96)_100%)]" aria-hidden="true" />
                <div className="relative z-10 grid h-full min-h-60 grid-rows-[auto_minmax(6rem,auto)_auto] content-end pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    {item.name}
                  </h3>
                  <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/76">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}const tubePipeProofPoints = [
  {
    icon: "release",
    text: "A554 ornamental tube standards are confirmed before order release, reducing specification mismatch risk.",
  },
  {
    icon: "finish",
    text: "Mirror, brushed, hairline, BA, No.4, and 8K finishes are matched for visible decorative use.",
  },
  {
    icon: "size",
    text: "Round, square, and rectangular tube sizes support handrails, furniture, frames, and interior fabrication.",
  },
  {
    icon: "tolerance",
    text: "Surface checks and material testing help reduce scratches, rust risk, and receiving claims.",
  },
  {
    icon: "docs",
    text: "Protective export packing and mixed-size loading help control damage risk and landed cost.",
  },
] as const;

const sanitaryTubeProofPoints = [
  {
    icon: "size",
    text: "Dedicated A270 sanitary tube lines help ensure cleaner inner walls and stable hygienic quality.",
  },
  {
    icon: "tolerance",
    text: "In-house annealing and nitrogen-protected welding improve weld strength and material stability.",
  },
  {
    icon: "release",
    text: "Leak testing up to 24 kg helps reduce welding defects before shipment.",
  },
  {
    icon: "finish",
    text: "Controlled inner and outer polishing meets sanitary tube brightness and cleanliness needs.",
  },
  {
    icon: "docs",
    text: "Complete inspection, cleaning, marking, and protection support export-ready sanitary tubes.",
  },
] as const;
function TubePipeWhyChooseUs() {
  return (
    <section className="bg-[#f7f2e8] px-4 pb-14 pt-0 sm:px-6 lg:px-8">
      <div className="mx-auto mt-10 grid w-full max-w-5xl gap-8 border-t border-[#d8cbb8] pt-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[1.9rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.55rem]">
            Why choose us
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.9rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase sm:text-base">
            For stainless steel ornamental tube buyers, consistent A554 dimensions, polished surface quality, and reliable grade selection matter as much as price. Jinling Steel supports decorative stainless steel tubing for handrails, furniture, architectural frames, retail fixtures, and fabrication projects with stable mill sourcing, surface inspection, protective packing, and export-ready delivery.
          </p>
        </div>
        <ol className="grid gap-2.5">
          {tubePipeProofPoints.map((point, index) => (
            <li
              key={point.text}
              className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]"
            >
              <div
                className={
                  index % 2 === 0
                    ? "flex items-center justify-center bg-[#f6d044] text-[#111820]"
                    : "flex items-center justify-center bg-[#111820] text-[#f6d044]"
                }
              >
                <BarProofIcon type={point.icon} />
              </div>
              <p className="flex min-h-[3.8rem] items-center px-4 py-3 text-sm font-semibold leading-6 text-[#111820] sm:text-[0.96rem]">
                {point.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
function SanitaryTubeWhyChooseUs() {
  return (
    <section className="bg-[#f7f2e8] px-4 pb-14 pt-0 sm:px-6 lg:px-8">
      <div className="mx-auto mt-10 grid w-full max-w-5xl gap-8 border-t border-[#d8cbb8] pt-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[1.9rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.55rem]">
            Why choose us
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.9rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase sm:text-base">
            For ASTM A270 sanitary stainless steel tube buyers, clean inner walls, stable weld quality, hygienic polishing, and reliable inspection are critical before installation. Jinling Steel supports food-grade stainless steel tubing, dairy piping, beverage lines, pharmaceutical process piping, and hygienic tube projects with controlled production, pressure testing, cleaning, marking, protective packing, and export-ready delivery.
          </p>
        </div>
        <ol className="grid gap-2.5">
          {sanitaryTubeProofPoints.map((point, index) => (
            <li
              key={point.text}
              className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]"
            >
              <div
                className={
                  index % 2 === 0
                    ? "flex items-center justify-center bg-[#f6d044] text-[#111820]"
                    : "flex items-center justify-center bg-[#111820] text-[#f6d044]"
                }
              >
                <BarProofIcon type={point.icon} />
              </div>
              <p className="flex min-h-[3.8rem] items-center px-4 py-3 text-sm font-semibold leading-6 text-[#111820] sm:text-[0.96rem]">
                {point.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
function SanitaryTubeProcessingVideo() {
  return (
    <section className="bg-[#f7f2e8] px-4 pb-16 pt-0 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-5xl gap-8 border-t border-[#d8cbb8] pt-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[1.9rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.55rem]">
            Sanitary Tube Processing
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.9rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase sm:text-base">
            Watch Jinling Steel&apos;s ASTM A270 sanitary stainless steel tube production process, covering welded tube forming, inner weld bead treatment, polishing, inspection, cleaning, and protective packing. This video helps buyers understand how food-grade stainless steel tubing is prepared for dairy piping, beverage lines, pharmaceutical process piping, and hygienic tube projects before export delivery.
          </p>
        </div>
        <div className="border border-[#d8cbb8] bg-white p-3 shadow-[0_18px_42px_rgba(13,20,27,0.08)]">
          <VideoEmbed
            youtubeId="MSyRDkQRBmo"
            title="Sanitary stainless steel tube processing video"
            caption="ASTM A270 sanitary tube forming, weld treatment, polishing, inspection, cleaning, and protective packing."
            className="[&_div]:rounded-none"
          />
        </div>
      </div>
    </section>
  );
}function TubePipeProcessingVideo() {
  return (
    <section className="bg-[#f7f2e8] px-4 pb-16 pt-0 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-5xl gap-8 border-t border-[#d8cbb8] pt-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[1.9rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.55rem]">
            Ornamental Tube Processing
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.9rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase sm:text-base">
            Watch how Jinling Steel prepares stainless steel ornamental tubes for visible decorative applications, from tube forming and surface finishing to inspection and protective packing. The video highlights A554 decorative stainless steel tubing for handrails, furniture, architectural frames, retail fixtures, and fabrication projects, with attention to polished surface consistency, clean appearance, and export-ready quality.
          </p>
        </div>
        <div className="border border-[#d8cbb8] bg-white p-3 shadow-[0_18px_42px_rgba(13,20,27,0.08)]">
          <VideoEmbed
            youtubeId="maVcWtgkFG8"
            title="Ornamental stainless steel tube processing video"
            caption="Stainless steel ornamental tube forming, surface finishing, inspection, and protective packing."
            className="[&_div]:rounded-none"
          />
        </div>
      </div>
    </section>
  );
}
const barProofPoints = [
  {
    icon: "forms",
    text: "One stainless steel bar order can cover round, flat, angle, square, and hex profiles, reducing supplier coordination work.",
  },
  {
    icon: "size",
    text: "Accurate size matching from 2-500 mm helps buyers quote machining, shaft, fixture, and fabrication jobs faster.",
  },
  {
    icon: "tolerance",
    text: "Tolerance routes from h6 to h12 reduce the risk of rework when stainless steel bars enter CNC or grinding processes.",
  },
  {
    icon: "release",
    text: "Grade, finish, straightness, and edge condition are confirmed before release, so the delivered bars match the actual application.",
  },
  {
    icon: "docs",
    text: "MTC documents, bundle labels, and export packing checks make stainless steel bar receiving and inspection easier.",
  },
] as const;

function BarProofIcon({ type }: { type: string }) {
  const common = "h-7 w-7";

  if (type === "forms") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="8" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
        <rect x="15" y="6" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M6 20h8M18 20h8M8 17v6M22 17v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "size") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 21h20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M8 16v10M24 16v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 10h12l4 4H14l-4-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 21v-4M16 21v-3M20 21v-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "tolerance") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M7 16h18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M11 11l-5 5 5 5M21 11l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 7v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      </svg>
    );
  }

  if (type === "release") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 6h12l4 4v16H8V6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M20 6v5h5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M11 16h7M11 20h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 11l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M7 10h18v14H7V10z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M11 10V7h10v3M10 16h12M10 20h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M22 20l2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BarWhyChooseUs() {
  return (
    <section className="bg-[#f7f2e8] px-4 pb-14 pt-0 sm:px-6 lg:px-8">
      <div className="mx-auto grid w-full max-w-5xl gap-8 border-t border-[#d8cbb8] pt-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[1.9rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.55rem]">
            Why choose us
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.9rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase sm:text-base">
            Built for buyers who need stainless steel round bar, flat bar, angle bar, square bar, and hex bar to arrive with the right size, tolerance, finish, documents, and packing.
          </p>
        </div>
        <ol className="grid gap-2.5">
          {barProofPoints.map((point, index) => (
            <li
              key={point.text}
              className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]"
            >
              <div
                className={
                  index % 2 === 0
                    ? "flex items-center justify-center bg-[#f6d044] text-[#111820]"
                    : "flex items-center justify-center bg-[#111820] text-[#f6d044]"
                }
              >
                <BarProofIcon type={point.icon} />
              </div>
              <p className="flex min-h-[3.8rem] items-center px-4 py-3 text-sm font-semibold leading-6 text-[#111820] sm:text-[0.96rem]">
                {point.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
const barRelatedArticles = [
  {
    name: "Is 304 or 316 Easier to Machine?",
    href: "/knowledge-base/304-vs-316-machinability",
    image: "/images/blog/machining-work-hardening-hero.webp",
    excerpt:
      "Cycle time, tool wear, work hardening, and service environment decide whether 304, 316L, or 303 is the better stainless steel bar route.",
  },
  {
    name: "304 Stainless Steel Mechanical Properties",
    href: "/knowledge-base/304-stainless-steel-mechanical-properties",
    image: "/images/blog/304-default-selection-route-hero.webp",
    excerpt:
      "Yield strength, tensile strength, hardness, temper, and product form should be checked before treating 304 bar as a single fixed number.",
  },
  {
    name: "Why Does an Export Order Need Its Own Line?",
    href: "/knowledge-base/why-we-run-a-separate-export-team-and-line",
    image: "/images/blog/export-packaging-hero.webp",
    excerpt:
      "Labels, MTC timing, packing photos, and export release habits decide whether stainless steel bars arrive ready for receiving inspection.",
  },
] as const;

function BarRelatedArticles() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-6rem)] gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
          <div>
            <h2 className="max-w-[8.5em] text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
              Related articles
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {barRelatedArticles.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)]"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.2)_0%,rgba(13,20,27,0.78)_54%,rgba(13,20,27,0.95)_100%)]" aria-hidden="true" />
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(6.75rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    {item.name}
                  </h3>
                  <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/76">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
const sheetOptionGroups = [
  {
    title: "Rolling route",
    items: [
      {
        label: "Cold-rolled stainless steel sheet",
      },
      {
        label: "Hot-rolled stainless steel sheet",
      },
    ],
  },
  {
    title: "Grade selection",
    items: [
      { label: "304 / 304L stainless steel", href: "/grades/304-stainless-steel" },
      { label: "316 / 316L stainless steel", href: "/grades/316l-stainless-steel" },
      { label: "430 stainless steel", href: "/grades/430-stainless-steel" },
      { label: "201 stainless steel", href: "/grades/201-stainless-steel" },
      { label: "2205 duplex stainless steel", href: "/grades/2205-duplex-stainless-steel" },
    ],
  },
  {
    title: "Surface finish",
    items: [
      { label: "8K Mirror Finish", href: "/surfaces/stainless-steel-8k-mirror-finish" },
      { label: "AFP Anti-Fingerprint Finish", href: "/surfaces/stainless-steel-afp-finish" },
      { label: "No.4 Brushed Finish", href: "/surfaces/stainless-steel-no4-brushed-finish" },
      { label: "Hairline Finish", href: "/surfaces/stainless-steel-hairline-finish" },
      { label: "2B Finish", href: "/surfaces/stainless-steel-2b-finish" },
      { label: "BA Finish", href: "/surfaces/stainless-steel-ba-finish" },
      { label: "PVD Color Finish", href: "/knowledge-base/pvd-colored-stainless-steel" },
    ],
  },
];
function SheetAvailableOptions() {
  return (
    <section id="sheet-options" className="bg-[#0d141b] px-4 py-8 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-8">
      <div className="mx-auto grid max-w-5xl gap-7 lg:grid-cols-[minmax(0,1.24fr)_minmax(19rem,0.76fr)] lg:items-center">
        <div className="border border-[#d8cbb8] bg-[#fffdf8] p-2.5 shadow-[0_18px_42px_rgba(13,20,27,0.08)] sm:p-3">
          <div className="grid gap-2.5 md:grid-cols-[1.12fr_1fr_1.18fr]">
            {sheetOptionGroups.map((group) => (
              <div
                key={group.title}
                className="border border-[#e4d8c7] bg-white/82 p-3 shadow-[0_10px_24px_rgba(13,20,27,0.045)]"
              >
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#8a6b32]">
                  {group.title}
                </p>
                <div className="mt-3 space-y-1.5">
                  {group.items.map((item, index) => {
                    const isDark = index % 2 === 0;
                    const className = isDark
                      ? "block whitespace-nowrap bg-[#101820] px-2.5 py-2 text-[0.66rem] font-semibold leading-4 text-white shadow-[0_10px_20px_rgba(13,20,27,0.16)]"
                      : "block whitespace-nowrap border border-[#d7b853] bg-[#f6d044] px-2.5 py-2 text-[0.66rem] font-semibold leading-4 text-[#111820] shadow-[0_10px_20px_rgba(138,107,50,0.13)]";
                    if (!("href" in item)) {
                      return (
                        <span
                          key={item.label}
                          aria-disabled="true"
                          className={`${className} cursor-default`}
                        >
                          {item.label}
                        </span>
                      );
                    }
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={
                          isDark
                            ? "block whitespace-nowrap bg-[#101820] px-2.5 py-2 text-[0.66rem] font-semibold leading-4 text-white shadow-[0_10px_20px_rgba(13,20,27,0.16)] transition hover:-translate-y-0.5 hover:bg-[#1a2632] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6d044]"
                            : "block whitespace-nowrap border border-[#d7b853] bg-[#f6d044] px-2.5 py-2 text-[0.66rem] font-semibold leading-4 text-[#111820] shadow-[0_10px_20px_rgba(138,107,50,0.13)] transition hover:-translate-y-0.5 hover:bg-[#f2c820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101820]"
                        }
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:pl-3">
          <h2 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.01em] text-white sm:text-[2.45rem]">
            Available sheet options
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-white/72 first-letter:float-left first-letter:mr-2 first-letter:text-[2.45rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#f6d044]">
            Choose stainless steel sheet by rolling route, grade, and surface finish, including cold-rolled stainless steel sheet, hot-rolled stainless steel sheet, 304, 316L, 430, 201, duplex stainless steel, and premium finishes such as 8K Mirror, AFP, No.4, Hairline, 2B, BA, and PVD Color for precise fabrication and fast delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
const sheetProofPoints = [
  {
    icon: "slit",
    text: "Precision slitting to +/-0.10 mm",
  },
  {
    icon: "mirror",
    text: "High-quality standard super mirror polishing",
  },
  {
    icon: "finish",
    text: "One-stop surface finishing options: 8K / AFP / 2B / BA / No.4 / HL",
  },
  {
    icon: "delivery",
    text: "Fast delivery from 10 days for standard sheet orders",
  },
  {
    icon: "origin",
    text: "Multi-origin sourcing with no additional anti-dumping duties",
  },
];

function SheetProofIcon({ type }: { type: string }) {
  const common = "h-7 w-7";

  if (type === "slit") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="20" height="8" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <path d="M9 8v4M13 8v3M17 8v4M21 8v3M25 8v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 22h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M11 19v6M21 19v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "mirror") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="8" y="6" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M12 21L21 12M12 15l4-4M18 23l3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M6 8h3M23 25h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "finish") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 22l9-9 3 3-9 9H8v-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M18 12l3-3 3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M7 8h4M9 6v4M23 22h3M24.5 20.5v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "delivery") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M5 11h18v10H5V11z" stroke="currentColor" strokeWidth="2" />
        <path d="M23 15h3l2 3v3h-5v-6z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 11v10M14 11v10M19 11v10" stroke="currentColor" strokeWidth="1.5" opacity="0.7" />
        <circle cx="10" cy="24" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="24" r="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
      <path d="M6 16h20M16 6c3 3 4.5 6.3 4.5 10S19 23 16 26M16 6c-3 3-4.5 6.3-4.5 10S13 23 16 26" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M21 9l4-2v8l-4 2V9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function SheetWhyChooseUs() {
  return (
    <section className="bg-[#f7f2e8] px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-5xl gap-8 border-t border-[#d8cbb8] pt-10 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.5rem]">
            Why choose us
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5f6872] first-letter:float-left first-letter:mr-2 first-letter:text-[2.9rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase sm:text-base">
            Jinling Steel is a reliable stainless steel sheet supplier offering precision slitting, 8K mirror polishing, custom surface finishing, fast delivery, and multi-origin sourcing for 304, 316L, 430, 201, and duplex stainless steel sheets used in fabrication, decoration, and export projects.
          </p>
        </div>
        <ol className="grid gap-2.5">
          {sheetProofPoints.map((point, index) => (
            <li
              key={point.text}
              className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]"
            >
              <div
                className={
                  index % 2 === 0
                    ? "flex items-center justify-center bg-[#101820] text-[#f6d044]"
                    : "flex items-center justify-center bg-[#f6d044] text-[#111820]"
                }
              >
                <SheetProofIcon type={point.icon} />
              </div>
              <p className="flex min-h-[3.65rem] items-center px-4 py-3 text-sm font-semibold leading-6 text-[#1d2b36] sm:text-[0.96rem]">
                {point.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
const sheetTechnicalRows = [
  {
    icon: "grade",
    item: "Stainless Steel Grade",
    details: "304 / 304L / 316 / 316L / 430 / 201 / 2205 duplex",
  },
  {
    icon: "standard",
    item: "Manufacturing Standard",
    details: "ASTM A240 / EN 10088-2 / EN 10029",
  },
  {
    icon: "thickness",
    item: "Thickness",
    details: "0.3-6.0 mm cold-rolled sheet / 3.0-80 mm hot-rolled sheet",
  },
  {
    icon: "width",
    item: "Width",
    details: "100-2,000 mm cold-rolled sheet / 600-3,000 mm hot-rolled sheet",
  },
  {
    icon: "length",
    item: "Length & Tolerance",
    details: "500-12,000 mm length, +/-0.5 to +/-2.0 mm tolerance",
  },
  {
    icon: "finish",
    item: "Surface Finish",
    details: "8K Mirror / AFP / 2B / BA / No.4 / HL / PVD Color",
  },
  {
    icon: "film",
    item: "Protective Film",
    details: "PE / Laser PVC / AFP-compatible film / Black & White film",
  },
  {
    icon: "service",
    item: "Processing Service",
    details: "Precision slitting / Cut-to-length / Surface polishing / Laser cutting",
  },
];

function SheetSpecIcon({ type }: { type: string }) {
  const common = "h-5 w-5";

  if (type === "grade") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4l10 5v9c0 5.7-4.2 9.2-10 10-5.8-.8-10-4.3-10-10V9l10-5z" stroke="currentColor" strokeWidth="2" />
        <text x="16" y="19" textAnchor="middle" className="fill-current text-[7px] font-bold">304</text>
      </svg>
    );
  }

  if (type === "standard") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="7" y="5" width="15" height="20" rx="1.6" stroke="currentColor" strokeWidth="2" />
        <path d="M11 10h7M11 15h7M11 20h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M23 18l4 4-6 6-4-4 6-6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "thickness") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 9h16M8 23h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M16 11v10M12 14l4-4 4 4M12 18l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "width") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="10" width="20" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" />
        <path d="M10 16h12M10 16l3-3M10 16l3 3M22 16l-3-3M22 16l-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "length") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M7 8v16M25 8v16M10 16h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 16l4-4M10 16l4 4M22 16l-4-4M22 16l-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "finish") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4l2.8 8.2L27 15l-8.2 2.8L16 26l-2.8-8.2L5 15l8.2-2.8L16 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "film") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="7" y="8" width="14" height="17" rx="1.6" stroke="currentColor" strokeWidth="2" />
        <path d="M21 12h4v13h-4M11 13h6M11 18h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M16 5v4M16 23v4M5 16h4M23 16h4M8.2 8.2l2.8 2.8M21 21l2.8 2.8M23.8 8.2L21 11M11 21l-2.8 2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function SheetTechnicalSpecification() {
  return (
    <section className="bg-white px-4 py-7 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-8">
      <div className="mx-auto grid min-h-[calc(50vh-4rem)] max-w-5xl gap-7 lg:grid-cols-[0.6fr_0.4fr] lg:items-center">
        <div className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.28)]">
          <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                Technical Specifications
              </h3>
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
              High quality stainless steel sheets for fabrication and decorative applications
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-[0.72rem] sm:text-[0.78rem]">
            <thead>
              <tr className="bg-[#f6d044] text-[#101820]">
                <th className="w-[36%] border-r border-[#111820]/24 px-3 py-2 text-center text-[0.66rem] font-semibold uppercase tracking-[0.12em] sm:px-4">
                  Item
                </th>
                <th className="px-3 py-2 text-center text-[0.66rem] font-semibold uppercase tracking-[0.12em] sm:px-4">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {sheetTechnicalRows.map((row) => (
                <tr key={row.item} className="bg-[#111111]">
                  <th className="border-r border-t border-white/14 px-3 py-1.5 sm:px-4">
                    <div className="flex items-center gap-2.5 text-left">
                      <span className="shrink-0 text-[#f6d044]">
                        <SheetSpecIcon type={row.icon} />
                      </span>
                      <span className="text-[0.72rem] font-semibold leading-5 text-white sm:text-[0.78rem]">{row.item}</span>
                    </div>
                  </th>
                  <td className="border-t border-white/14 px-3 py-1.5 leading-5 text-white/78 sm:px-5">
                    {row.details}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.45rem]">
            Technical specification
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] first-letter:uppercase sm:text-[0.96rem]">
            Review stainless steel sheet specifications, including grade, ASTM and EN standards, thickness, width, length tolerance, surface finish, protective film, and processing services for 304, 316L, 430, 201, and duplex stainless steel sheets used in fabrication, decoration, and export projects.
          </p>
        </div>
      </div>
    </section>
  );
}
const sheetProcessingCapabilities = [
  {
    title: "Surface Finishing",
    description:
      "Custom stainless steel finishes including 2B, BA, No.4, Hairline, Mirror, AFP, and PVD for decorative sheet applications.",
    href: "/solutions/capabilities/surface-finish-capability",
    image: "/images/products/sheet/processing-capabilities/surface-finishing.jpg",
  },
  {
    title: "Cut-to-Length",
    description:
      "Precision stainless steel cut-to-length service for flat sheet, plate, laser blanks, panels, and custom size orders.",
    href: "/solutions/capabilities/cut-to-length",
    image: "/images/products/sheet/processing-capabilities/cut-to-length.jpg",
  },
  {
    title: "Slitting & Edging",
    description:
      "Stainless steel coil slitting with accurate strip width, clean edges, and stable feed for downstream production.",
    href: "/solutions/capabilities/slitting-edging",
    image: "/images/products/sheet/processing-capabilities/slitting-edging.jpg",
  },
  {
    title: "Protective Coating",
    description:
      "Protective coating for stainless steel sheet improves fingerprint resistance, cleanability, and durability for visible panels.",
    href: "/solutions/capabilities/protective-coating",
    image: "/images/products/sheet/processing-capabilities/protective-coating.jpg",
  },
  {
    title: "Protective Film",
    description:
      "Protective film for stainless steel sheet protects mirror, brushed, coated, and laser-cut surfaces during processing and delivery.",
    href: "/solutions/capabilities/protective-film",
    image: "/images/products/sheet/processing-capabilities/protective-film.jpg",
  },
  {
    title: "Packaging & Logistics",
    description:
      "Export packaging for stainless steel coil, sheet, and plate with waterproof wrapping, edge protection, and container loading.",
    href: "/solutions/capabilities/packaging-logistics",
    image: "/images/products/sheet/processing-capabilities/packaging-logistics.jpg",
  },
] as const;

function SheetProcessingCapabilities() {
  return (
    <section className="bg-[#f7f2e8] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-5xl gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,18rem)] lg:items-center">
        <div className="order-2 grid grid-cols-2 justify-center gap-2.5 sm:grid-cols-3 lg:order-1 lg:gap-2">
          {sheetProcessingCapabilities.map((capability) => (
            <Link
              key={capability.title}
              href={capability.href}
              className="group relative isolate mx-auto block overflow-hidden border border-[#d8b94a] bg-[#101820] shadow-[0_16px_34px_rgba(13,20,27,0.12)] outline-none transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(13,20,27,0.18)] focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              style={{ width: "min(60mm, calc((100vw - 3rem) / 2))", aspectRatio: "6 / 7" }}
            >
              <Image
                src={capability.image}
                alt={`${capability.title} stainless steel processing capability`}
                fill
                sizes="(min-width: 1024px) 227px, 45vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.2] group-focus-visible:scale-[1.2]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.74)_0%,rgba(13,20,27,0.12)_34%,rgba(13,20,27,0.72)_100%)]" aria-hidden="true" />
              <div className="absolute inset-x-0 top-0 z-10 p-3 text-center sm:p-3.5">
                <h3 className="text-[0.9rem] font-semibold leading-5 tracking-[0.01em] text-white sm:text-[1rem]">
                  {capability.title}
                </h3>
              </div>
              <div className="absolute inset-0 z-20 flex translate-y-3 items-center justify-center bg-[#101820]/88 px-5 text-left opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                <div className="w-full max-w-[11rem]">
                  <h3 className="text-[1rem] font-semibold leading-5 text-white sm:text-[1.08rem]">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-[0.72rem] font-medium leading-5 text-white/78 sm:text-[0.78rem]">
                    {capability.description}
                  </p>
                  <span className="mt-4 inline-flex min-h-9 items-center bg-[#f6d044] px-4 text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[#101820] transition group-hover:bg-[#f2c820]">
                    Read more
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="order-1 lg:order-2 lg:pl-3">
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
            Processing capabilities
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] sm:text-[0.96rem]">
            Choose stainless steel sheet processing services from surface finishing, cut-to-length, slitting, protective coating, protective film, and export packaging, with each route linked to the capability details buyers need before release.
          </p>
        </div>
      </div>
    </section>
  );
}
function SheetProcessingVideo() {
  return (
    <section className="bg-[#0d141b] px-4 py-12 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-14">
      <div className="mx-auto grid min-h-[calc(50vh-7rem)] w-full max-w-5xl gap-8 lg:grid-cols-[minmax(18rem,0.36fr)_minmax(0,0.64fr)] lg:items-center">
        <div>
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] tracking-[-0.01em] text-white sm:text-[2.45rem]">
            Processing&amp;Packing
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/76 first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#f6d044] sm:text-[0.96rem]">
            Watch stainless steel sheet processing and packing from cut-to-length handling, protective film, inspection, export packaging, and container-ready delivery before shipment.
          </p>
        </div>
        <div className="border border-white/14 bg-[#111111] p-2 shadow-[0_18px_48px_rgba(0,0,0,0.28)]">
          <VideoEmbed
            youtubeId="AlxfE_jMUdU"
            startSeconds={3}
            title="Stainless steel sheet processing and packing video"
            caption="Stainless steel sheet processing, protective film, export packing, and shipment preparation."
            className="[&_div]:rounded-none [&_figcaption]:text-white/58"
          />
        </div>
      </div>
    </section>
  );
}
const sheetRelatedArticles = [
  {
    name: "What Stainless Steel Sheet Sizes and Thicknesses Are Actually Stocked?",
    href: "/knowledge-base/stainless-steel-sheet-sizes",
    image: "/images/blog/sheet-sizes-hero.webp",
    excerpt:
      "Common stainless sheet and plate stock sizes, custom cut-to-size choices, yield, freight, and thickness planning before quote release.",
  },
  {
    name: "When Is a Stainless Sheet Too Wavy to Accept?",
    href: "/knowledge-base/stainless-steel-flatness-requirements",
    image: "/images/blog/flatness-requirements-hero.webp",
    excerpt:
      "Flatness tolerance, measurement method, ASTM A480, EN flatness class, and PO wording for stainless steel sheet and plate orders.",
  },
  {
    name: "Which Five-Second Packing Step Saves Stainless Sheet Claims?",
    href: "/knowledge-base/the-one-step-most-export-sheet-packaging-skips",
    image: "/images/blog/export-packaging-hero.webp",
    excerpt:
      "A practical export packing detail for visible stainless sheet: face-in protection, edge guards, strapping pressure, and loading photos.",
  },
] as const;

function SheetRelatedArticles() {
  return (
    <section className="bg-[#f7f2e8] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-6rem)] gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
          <div>
            <h2 className="max-w-[8.5em] text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
              Related articles
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {sheetRelatedArticles.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)]"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.2)_0%,rgba(13,20,27,0.78)_54%,rgba(13,20,27,0.95)_100%)]" aria-hidden="true" />
                <div className={`relative z-10 grid h-full min-h-60 content-end pb-4 ${index === 1 ? "grid-rows-[auto_minmax(6.75rem,auto)_auto]" : "grid-rows-[auto_minmax(5.75rem,auto)_auto]"}`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    {item.name}
                  </h3>
                  <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/76">
                    {item.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getContentSlugs("products").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContent("products", slug);
  if (!content) return {};
  return {
    title: content.seoTitle || content.title,
    description: content.description,
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const content = await getContent("products", slug);
  if (!content) notFound();
  const isCoilPage = slug === "stainless-steel-coil";
  const isSheetPage = slug === "stainless-steel-sheet";
  const isBarPage = slug === "stainless-steel-bar";
  const isTubePipePage = slug === "stainless-steel-tube-pipe";
  if (isTubePipePage) {
    return (
      <>
        <ProductBreadcrumbBar title="Premium Quality Stainless Steel Pipes&Tubes Supplier with Stable Supply & Fast Delivery in China" />
        <TubePipeProductHero />
        <TubePipeOptionsSection />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <TubePipeRelatedArticles /> : null}
      </>
    );
  }

  const faqSchema = buildFaqSchema(extractFaqEntries(content.content));
  const productGroup = getProductRouteGroup(slug);
  const productVisualGallery = getProductVisualGallery(slug);
  const sidebarConfig = getProductSidebarConfig(slug);

  const allProducts = getContentList("products")
    .filter((p) => p.slug !== slug)
    .map((p) => ({ name: p.title, href: `/products/${p.slug}` }));

  const relatedItems = sidebarConfig?.items ?? allProducts;
  const relatedTitle = sidebarConfig?.relatedTitle ?? "Other Product Forms";
  const ctaHeading =
    sidebarConfig?.ctaHeading ?? "Need stock form, finish, or lead-time guidance?";
  const ctaText = sidebarConfig?.ctaText ?? "Request Pricing";
  const ctaHref = sidebarConfig?.ctaHref ?? "/contact#pricing-request";
  const ctaSecondaryText =
    sidebarConfig?.ctaSecondaryText ?? "Ask Technical Review";
  const ctaSecondaryHref =
    sidebarConfig?.ctaSecondaryHref ?? "/contact#technical-review";

  const productSchema = buildProductSchema({
    title: content.title,
    description: content.description,
    pageUrl: `/products/${slug}`,
    imageUrl: content.heroImage,
    category: "Stainless Steel Product",
  });

  const schemaNodes = [
    buildBreadcrumbSchema({
      breadcrumbs: [
        { label: "Products", href: "/products" },
        { label: content.title },
      ],
      pageUrl: `/products/${slug}`,
      pageTitle: content.title,
    }),
    productSchema,
    ...(faqSchema ? [faqSchema] : []),
  ];

  if (isCoilPage) {
    return (
      <CoilProductPage
        title={content.title}
        description={content.description}
        heroImage={content.heroImage}
        structuredData={schemaNodes}
      />
    );
  }

  if (isBarPage) {
    return (
      <>
        {schemaNodes.map((node, index) => (
          <script
            key={`${content.title}-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
          />
        ))}
        <ProductBreadcrumbBar title={content.title} />
        <BarProductHero
          title="Premium Quality Stainless Steel Bar Supplier with Stable Supply & Fast Delivery in China"
          description="Stainless steel bars are supplied with controlled dimensional accuracy, stable mechanical performance, and consistent material quality for machining and fabrication. The range includes round bars, flat bars, square bars, hexagon bars, and angle bars, available in common grades and customized specifications. Supported by stable sourcing channels, processing capabilities, and sufficient inventory, fast delivery and flexible mixed-container loading are available. With proven export experience, bar products are packed and prepared to support smooth downstream processing."
        />
        <BarFormsSection />
        <BarWhyChooseUs />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <BarRelatedArticles /> : null}
      </>
    );
  }
  if (isSheetPage) {
    return (
      <>
        {schemaNodes.map((node, index) => (
          <script
            key={`${content.title}-schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
          />
        ))}
        <ProductBreadcrumbBar title={content.title} />
        <SheetProductHero
          title={content.seoTitle ?? content.title}
          description={content.description}
          heroImage={content.heroImage}
        />
        <SheetAvailableOptions />
        <SheetWhyChooseUs />
        <SheetTechnicalSpecification />
        <SheetProcessingCapabilities />
        <SheetProcessingVideo />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <SheetRelatedArticles /> : null}
      </>
    );
  }

  return (
    <ContentPage
      title={content.title}
      description={content.description}
      htmlContent={content.htmlContent}
      variant="product"
      pageUrl={`/products/${slug}`}
      structuredData={[
        buildProductSchema({
          title: content.title,
          description: content.description,
          pageUrl: `/products/${slug}`,
          imageUrl: content.heroImage,
          category: "Stainless Steel Product",
        }),
        ...(faqSchema ? [faqSchema] : []),
      ]}
      breadcrumbs={[
        { label: "Products", href: "/products" },
        { label: content.title },
      ]}
      relatedItems={relatedItems}
      relatedTitle={relatedTitle}
      ctaHeading={ctaHeading}
      ctaText={ctaText}
      ctaHref={ctaHref}
      ctaSecondaryText={ctaSecondaryText}
      ctaSecondaryHref={ctaSecondaryHref}
      heroImage={content.heroImage}
      heroImageMode={isCoilPage ? "background" : "narrow"}
      customHero={
        isBarPage ? (
          <BarProductHero
            title="Premium Quality Stainless Steel Bar Supplier with Stable Supply & Fast Delivery in China"
            description="Stainless steel bars are supplied with controlled dimensional accuracy, stable mechanical performance, and consistent material quality for machining and fabrication. The range includes round bars, flat bars, square bars, hexagon bars, and angle bars, available in common grades and customized specifications. Supported by stable sourcing channels, processing capabilities, and sufficient inventory, fast delivery and flexible mixed-container loading are available. With proven export experience, bar products are packed and prepared to support smooth downstream processing."
          />
        ) : isSheetPage ? (
          <>
            <SheetProductHero
              title={content.seoTitle ?? content.title}
              description={content.description}
              heroImage={content.heroImage}
            />
            <SheetAvailableOptions />
            <SheetWhyChooseUs />
            <SheetTechnicalSpecification />
          </>
        ) : undefined
      }
      heroStats={content.heroStats}
      author={content.author}
      reviewedBy={content.reviewedBy}
      publishedAt={content.publishedAt}
      hideSidebar={isCoilPage}
      hideDirectInquiry={isCoilPage}
      beforeArticleContent={
        productVisualGallery && !isCoilPage ? (
          <VisualProofGallery config={productVisualGallery} variant="product" />
        ) : undefined
      }
      afterContent={
        productGroup && !isCoilPage ? <ProductRouteDesk group={productGroup} /> : undefined
      }
    />
  );
}

























































