import Image from "next/image";
import Link from "next/link";
import { VideoEmbed } from "@/components/blocks/VideoEmbed";
import { SHOW_COMMERCIAL_RELATED_ARTICLES } from "@/lib/commercial-related-articles";
import type { StructuredDataNode } from "@/lib/structured-data";

interface CoilProductPageProps {
  title: string;
  description?: string;
  heroImage?: string;
  structuredData?: StructuredDataNode[];
}

const routes = [
  {
    name: "Cold-rolled stainless steel coil",
  },
  {
    name: "Hot-rolled stainless steel coil",
  },
];

const grades = [
  { name: "304 / 304L stainless steel", href: "/grades/304-stainless-steel" },
  { name: "316 / 316L stainless steel", href: "/grades/316l-stainless-steel" },
  { name: "430 stainless steel", href: "/grades/430-stainless-steel" },
  { name: "201 stainless steel", href: "/grades/201-stainless-steel" },
  { name: "2205 duplex stainless steel", href: "/grades/2205-duplex-stainless-steel" },
];

const finishes = [
  { name: "8K Mirror Finish", href: "/surfaces/stainless-steel-8k-mirror-finish" },
  { name: "AFP Anti-Fingerprint Finish", href: "/surfaces/stainless-steel-afp-finish" },
  { name: "No.4 Brushed Finish", href: "/surfaces/stainless-steel-no4-brushed-finish" },
  { name: "Hairline Finish", href: "/surfaces/stainless-steel-hairline-finish" },
  { name: "2B Finish", href: "/surfaces/stainless-steel-2b-finish" },
  { name: "BA Finish", href: "/surfaces/stainless-steel-ba-finish" },
];

const proofPoints = [
  {
    icon: "slit",
    text: "Precision slitting to +/-0.10 mm on cold-rolled coil",
  },
  {
    icon: "finish",
    text: "In-house surface finishing: 2B / BA / No.4 / HL / 8K / AFP",
  },
  {
    icon: "forms",
    text: "5 grade families and 4 product forms from one supplier",
  },
  {
    icon: "container",
    text: "Mixed-container loading, with trial SKUs from 500 kg",
  },
  {
    icon: "origin",
    text: "Sourced from multiple origins; no additional anti-dumping duties",
  },
];

const relatedArticles = [
  {
    name: "What is stainless steel?",
    href: "/knowledge-base/what-is-stainless-steel",
    image: "/images/blog/stainless-family-selection-hero.webp",
    excerpt: "Stainless steel is iron with enough chromium to form a passive film. Learn why that film matters, why stainless can still rust, and how the main families differ.",
  },
  {
    name: "What is cold rolling stainless steel?",
    href: "/knowledge-base/what-is-cold-rolling-stainless-steel",
    image: "/images/blog/precision-strip-tolerance-hero.webp",
    excerpt: "Cold rolling creates tighter gauge, cleaner surface, and work-hardened strength. What it changes in 2B, BA, temper, and downstream fabrication.",
  },
  {
    name: "Hot rolled vs cold rolled stainless steel",
    href: "/knowledge-base/hot-rolled-vs-cold-rolled-stainless-steel",
    image: "/images/blog/hot-cold-rolled-process-route-hero.webp",
    excerpt: "Hot-rolled and cold-rolled stainless are different production routes. Thickness, surface, tolerance, flatness, and downstream fabrication decide which route fits the order.",
  },
];

const sectionDescriptions = {
  options: "Choose stainless steel coil by rolling route, grade, and surface finish, including cold-rolled coil, hot-rolled coil, 304, 316L, 430, 201, duplex stainless steel, and common finishes such as 2B, BA, No.4, Hairline, 8K, and AFP.",
  why: "Jinling Steel supplies stainless steel coils with precision slitting, in-house surface finishing, flexible mixed-container loading, multiple grade options, and export-ready sourcing support for reliable stainless steel coil purchasing.",
  technical: "Review key stainless steel coil specifications, including thickness range, width, tolerance, surface finish, edge condition, coil weight, and processing options to match downstream fabrication and export requirements.",
};


const coilTechnicalRows = [
  {
    icon: "grade",
    item: "Stainless Steel Grade",
    details: "304 / 304L / 316 / 316L / 430",
  },
  {
    icon: "standard",
    item: "Manufacturing Standard",
    details: "ASTM A240 / EN 10088",
  },
  {
    icon: "thickness",
    item: "Thickness",
    details: "0.3-6.0 mm",
  },
  {
    icon: "width",
    item: "Width",
    details: "20-1500 mm",
  },
  {
    icon: "finish",
    item: "Surface Finish",
    details: "8K Mirror / 2B / BA / No.4 / HL",
  },
  {
    icon: "edge",
    item: "Edge Type",
    details: "Mill Edge / Slit Edge",
  },
  {
    icon: "film",
    item: "Protective Film",
    details: "PE / Laser PVC / Black & White Film / Novacel",
  },
  {
    icon: "service",
    item: "Processing Service",
    details: "Precision Slitting / Cut-to-Length / Surface Polishing / Laser Cutting",
  },
];

function CoilSpecIcon({ type }: { type: string }) {
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

  if (type === "finish") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4l2.8 8.2L27 15l-8.2 2.8L16 26l-2.8-8.2L5 15l8.2-2.8L16 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "edge") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 7h16v18H8V7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M21 7v18M23.5 10h-5M23.5 14h-5M23.5 18h-5M23.5 22h-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
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
const packagingOptions = [
  {
    number: "1",
    title: "Eye to Sky",
    subtitle: "Coil Eye Vertical",
    image: "/images/products/coil/packaging-eye-to-sky.png",
    imageClassName: "max-h-[86%] max-w-[82%]",
  },
  {
    number: "2",
    title: "Eye to Wall",
    subtitle: "Coil Eye Horizontal",
    image: "/images/products/coil/packaging-eye-to-wall.png",
    imageClassName: "max-h-[82%] max-w-[92%]",
  },
  {
    number: "3",
    title: "Slit Coil Packing",
    subtitle: "Slit Coil Packing (Single Coil)",
    image: "/images/products/coil/packaging-slit-coil.png",
    imageClassName: "max-h-[76%] max-w-[90%]",
  },
];

function CoilPackagingSolutionsGraphic() {
  return (
    <div className="overflow-hidden border border-[#d8cbb8] bg-[#111111] p-3 text-white shadow-[0_18px_48px_rgba(13,20,27,0.14)]">
      <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2 text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
          <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
            Packaging Solutions
          </h3>
          <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
        </div>
        <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
          Secure packing for safe transport and reliable delivery
        </p>
      </div>
      <div className="grid gap-2.5 pt-3 md:grid-cols-3">
        {packagingOptions.map((option) => (
          <article key={option.title} className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_12px_30px_rgba(0,0,0,0.22)]">
            <div className="grid grid-cols-[2.2rem_1fr] border-b border-[#f6d044]/30 bg-[#f6d044] text-[#101820]">
              <span className="flex items-center justify-center bg-[#111111] text-[1.35rem] font-semibold leading-none text-[#f6d044]">
                {option.number}
              </span>
              <h4 className="flex min-h-9 items-center justify-center px-2 text-center text-[0.66rem] font-semibold uppercase leading-4 tracking-[0.08em]">
                {option.title}
              </h4>
            </div>
            <p className="px-2 pt-2 text-center text-[0.7rem] font-medium leading-4 text-white/82">
              {option.subtitle}
            </p>
            <div className="relative flex h-36 items-center justify-center overflow-hidden px-3 pb-3 pt-2 sm:h-40 lg:h-44">
              <Image
                src={option.image}
                alt={option.subtitle}
                width={430}
                height={540}
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`h-auto w-auto object-contain ${option.imageClassName}`}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
function ProofIcon({ type }: { type: string }) {
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

  if (type === "finish") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 22l9-9 3 3-9 9H8v-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M18 12l3-3 3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M7 8h4M9 6v4M23 22h3M24.5 20.5v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "forms") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M7 9h14l4 4v10H7V9z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M21 9v5h5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 17h12M10 21h9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M5 12h2M5 16h2M5 20h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "container") {
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
export function CoilProductPage({
  title,
  description,
  heroImage,
  structuredData = [],
}: CoilProductPageProps) {
  return (
    <>
      {structuredData.map((node, index) => (
        <script
          key={`${title}-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}

      <div className="border-b border-slate-200/80 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <nav className="flex min-w-0 items-center gap-2 overflow-hidden whitespace-nowrap text-[0.82rem] text-slate-500">
            <Link href="/" className="shrink-0 hover:text-brand-dark">Home</Link>
            <span>/</span>
            <Link href="/products" className="shrink-0 hover:text-brand-dark">Products</Link>
            <span>/</span>
            <span className="min-w-0 truncate text-brand-dark">{title}</span>
          </nav>
        </div>
      </div>

      <section className="relative overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
        {heroImage && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={title}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-[0.55]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.64)_100%)]" />
          </div>
        )}
        <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
            Product release
            <span className="h-px w-10 bg-brand-accent/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[2.45rem] lg:text-[2.9rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
              {description}
            </p>
          )}
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/contact#pricing-request" className="inline-flex min-h-11 items-center bg-brand-accent px-5 text-sm font-semibold text-brand-dark transition hover:bg-brand-accent-hover">
              Request coil pricing
            </Link>
            <Link href="#coil-options" className="inline-flex min-h-11 items-center border border-white/20 bg-white/10 px-5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-brand-accent/60 hover:text-brand-accent">
              Check options
            </Link>
          </div>
        </div>
      </section>

      <section id="coil-options" className="bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
        <div className="mx-auto grid min-h-[calc(50vh-6rem)] w-full max-w-5xl gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
          <div className="border border-white/12 bg-[#f8f4ec] p-3 shadow-[0_22px_58px_rgba(0,0,0,0.22)]">
            <div className="grid gap-3 md:grid-cols-3">
              <div className="flex min-h-[15.5rem] flex-col border border-[#dfd1be] bg-[#fffdf8] p-3.5">
                <p className="text-sm font-semibold text-brand-dark">Rolling route</p>
                <div className="mt-4 grid gap-2">
                  {routes.map((item, index) => (
                    <span
                      key={item.name}
                      aria-disabled="true"
                      className={
                        index % 2 === 0
                          ? "flex min-h-10 cursor-default items-center whitespace-nowrap border border-brand-accent/60 bg-brand-accent px-2.5 text-[0.68rem] font-semibold leading-4 text-brand-dark"
                          : "flex min-h-10 cursor-default items-center whitespace-nowrap border border-[#111b24] bg-[#0d141b] px-2.5 text-[0.68rem] font-semibold leading-4 text-white"
                      }
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex min-h-[15.5rem] flex-col border border-[#dfd1be] bg-[#fffdf8] p-3.5">
                <p className="text-sm font-semibold text-brand-dark">Grade selection</p>
                <div className="mt-4 grid gap-2">
                  {grades.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={
                        index % 2 === 0
                          ? "flex min-h-9 items-center whitespace-nowrap border border-brand-accent/60 bg-brand-accent px-2.5 text-[0.66rem] font-semibold leading-4 text-brand-dark transition hover:bg-brand-accent-hover"
                          : "flex min-h-9 items-center whitespace-nowrap border border-[#111b24] bg-[#0d141b] px-2.5 text-[0.66rem] font-semibold leading-4 text-white transition hover:border-brand-accent hover:text-brand-accent"
                      }
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex min-h-[15.5rem] flex-col border border-[#dfd1be] bg-[#fffdf8] p-3.5">
                <p className="text-sm font-semibold text-brand-dark">Surface finish</p>
                <div className="mt-4 grid gap-2">
                  {finishes.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={
                        index % 2 === 0
                          ? "flex min-h-9 items-center whitespace-nowrap border border-brand-accent/60 bg-brand-accent px-2.5 text-[0.66rem] font-semibold leading-4 text-brand-dark transition hover:bg-brand-accent-hover"
                          : "flex min-h-9 items-center whitespace-nowrap border border-[#111b24] bg-[#0d141b] px-2.5 text-[0.66rem] font-semibold leading-4 text-white transition hover:border-brand-accent hover:text-brand-accent"
                      }
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[1.85rem] font-semibold leading-[1.04] text-white sm:text-[2.55rem]">
              Available coil options
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/72 first-letter:float-left first-letter:mr-2 first-letter:text-[3rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-brand-accent first-letter:uppercase sm:text-base">
              Choose stainless steel coil by rolling route, grade, and surface finish, including cold-rolled coil, hot-rolled coil, 304, 316L, 430, 201, duplex stainless steel, and common finishes such as 2B, BA, No.4, Hairline, 8K, and AFP.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#fbf8f0] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
        <div className="mx-auto grid min-h-[calc(50vh-6rem)] w-full max-w-5xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
          <div>
            <h2 className="text-[1.85rem] font-semibold leading-[1.04] text-brand-dark sm:text-[2.55rem]">
              Why choose us
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#5f6872] first-letter:float-left first-letter:mr-2 first-letter:text-[3rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase sm:text-base">
              {sectionDescriptions.why}
            </p>
          </div>
          <ol className="grid gap-2.5">
            {proofPoints.map((point) => (
              <li key={point.text} className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]">
                <span className="flex items-center justify-center bg-[#0d141b] text-brand-accent">
                  <ProofIcon type={point.icon} />
                </span>
                <p className="px-4 py-2.5 text-sm font-semibold leading-6 text-brand-dark sm:px-5">
                  {point.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
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
                High quality stainless steel coils for diverse industrial applications
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
                {coilTechnicalRows.map((row) => (
                  <tr key={row.item} className="bg-[#111111]">
                    <th className="border-r border-t border-white/14 px-3 py-1.5 sm:px-4">
                      <div className="flex items-center gap-2.5 text-left">
                        <span className="shrink-0 text-[#f6d044]">
                          <CoilSpecIcon type={row.icon} />
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
            <h2 className="text-[1.85rem] font-semibold leading-[1.04] text-brand-dark sm:text-[2.45rem]">
              Technical specification
            </h2>
            <p className="mt-4 text-sm leading-6 text-[#5f6872] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase sm:text-[0.96rem]">
              {sectionDescriptions.technical}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0d141b] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
            <div>
              <h2 className="text-[2rem] font-semibold leading-[1.04] text-white sm:text-[3rem]">
                Processing and quality control
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/76 first-letter:float-left first-letter:mr-2 first-letter:text-[3rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-brand-accent first-letter:uppercase">
                Our stainless steel coils undergo strict processing and inspection procedures, including precision slitting, cut-to-length, and surface finishing. Each batch is checked for thickness tolerance, flatness, edge quality, and surface consistency to support stable performance and reliable export quality.
              </p>
            </div>
            <div className="overflow-hidden border border-white/14 bg-white/[0.06] p-3 shadow-[0_18px_48px_rgba(0,0,0,0.22)]">
              <VideoEmbed
                youtubeId="0sKoKm5tC2o"
                title="Stainless steel coil processing video"
                caption="Watch the stainless steel coil processing video"
                className="[&>div]:rounded-none"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fbf8f0] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid min-h-[calc(50vh-6rem)] gap-8 lg:grid-cols-[0.56fr_0.44fr] lg:items-center">
            <CoilPackagingSolutionsGraphic />
            <div>
              <h2 className="text-[1.85rem] font-semibold leading-[1.04] text-brand-dark sm:text-[2.55rem]">
                Packaging solutions
              </h2>
              <p className="mt-4 text-sm leading-6 text-[#5f6872] first-letter:float-left first-letter:mr-2 first-letter:text-[3rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase">
                Export-standard seaworthy packaging protects stainless steel coils and slit coils during container transport, warehouse storage, and handling. Packing options include Eye to Sky, Eye to Wall, and single slit coil packs with PE/PVC film, VCI paper, edge protectors, strapping, and pallet support.
              </p>
            </div>
          </div>
        </div>
      </section>
      {SHOW_COMMERCIAL_RELATED_ARTICLES ? (
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div>
              <h2 className="max-w-[8.5em] text-[2.2rem] font-semibold leading-[1.04] text-brand-dark sm:text-[3.05rem]">
                Related articles
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {relatedArticles.map((item) => (
                <Link key={item.href} href={item.href} className="group relative flex min-h-72 overflow-hidden rounded-lg border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 320px"
                    className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.2)_0%,rgba(13,20,27,0.78)_54%,rgba(13,20,27,0.95)_100%)]" aria-hidden="true" />
                  <div className="relative z-10 flex h-full min-h-60 flex-col justify-end">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">Read next</p>
                    <h3 className="mt-3 min-h-[4.5rem] text-lg font-semibold leading-6 text-white">{item.name}</h3>
                    <p className="mt-3 line-clamp-4 text-sm leading-6 text-white/76">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      ) : null}

    </>
  );
}




















