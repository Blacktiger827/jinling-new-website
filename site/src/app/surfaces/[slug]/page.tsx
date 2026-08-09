import { getContent, getContentSlugs, getContentList } from "@/lib/content";
import { ContentPage } from "@/components/content/ContentPage";
import { VideoEmbed } from "@/components/blocks/VideoEmbed";
import { MirrorFlagshipHub } from "@/components/content/MirrorFlagshipHub";
import {
  getSurfaceVisualGallery,
  VisualProofGallery,
} from "@/components/content/VisualProofGallery";
import {
  getSurfaceDecisionConfig,
  SurfaceDecisionPanel,
} from "@/components/content/SurfaceDecisionPanel";
import { buildArticleSchema } from "@/lib/structured-data";
import { SHOW_COMMERCIAL_RELATED_ARTICLES } from "@/lib/commercial-related-articles";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

interface SurfaceSidebarConfig {
  relatedTitle: string;
  items: Array<{ name: string; href: string }>;
  ctaHeading?: string;
  ctaText?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
}

const SURFACE_SIDEBAR_CONFIG: Record<string, SurfaceSidebarConfig> = {
  "stainless-steel-8k-mirror-finish": {
    relatedTitle: "Mirror Decision Links",
    items: [
      { name: "304 or 430 for Mirror Panels?", href: "/knowledge-base/304-vs-430-mirror-panels" },
      {
        name: "When Does Mirror Need 316L?",
        href: "/knowledge-base/316l-mirror-for-coastal-lobby-elevator",
      },
      { name: "AFP Anti-Fingerprint Finish", href: "/surfaces/stainless-steel-afp-finish" },
      {
        name: "Mirror Acceptance: Haze, Gloss, Pinhole",
        href: "/knowledge-base/mirror-finish-acceptance-haze-gloss-pinhole",
      },
    ],
    ctaHeading: "Need mirror, substrate, or protective-film guidance?",
    ctaText: "Ask for Mirror Review",
  },
  "stainless-steel-afp-finish": {
    relatedTitle: "AFP Decision Links",
    items: [
      { name: "8K Mirror Finish", href: "/surfaces/stainless-steel-8k-mirror-finish" },
      { name: "No.4 Brushed Finish", href: "/surfaces/stainless-steel-no4-brushed-finish" },
      { name: "When Is AFP Over Mirror Worth It?", href: "/knowledge-base/afp-over-mirror-when-worth-it" },
      { name: "Elevator Interiors", href: "/solutions/applications/elevator-decoration" },
    ],
  },
  "stainless-steel-no4-brushed-finish": {
    relatedTitle: "Brush Finish Links",
    items: [
      { name: "Hairline Finish", href: "/surfaces/stainless-steel-hairline-finish" },
      { name: "No.4 vs Hairline", href: "/knowledge-base/no4-vs-hairline-finish" },
      { name: "AFP Anti-Fingerprint Finish", href: "/surfaces/stainless-steel-afp-finish" },
      { name: "Commercial Kitchen Equipment", href: "/solutions/applications/kitchen-equipment" },
    ],
  },
  "stainless-steel-hairline-finish": {
    relatedTitle: "Grain Finish Links",
    items: [
      { name: "No.4 Brushed Finish", href: "/surfaces/stainless-steel-no4-brushed-finish" },
      { name: "No.4 vs Hairline", href: "/knowledge-base/no4-vs-hairline-finish" },
      { name: "AFP Anti-Fingerprint Finish", href: "/surfaces/stainless-steel-afp-finish" },
      { name: "Architecture Application", href: "/solutions/applications/architecture" },
    ],
  },
  "stainless-steel-ba-finish": {
    relatedTitle: "Bright Finish Links",
    items: [
      { name: "2B Finish", href: "/surfaces/stainless-steel-2b-finish" },
      { name: "2B vs BA Surface Finish", href: "/knowledge-base/2b-vs-ba-surface-finish" },
      { name: "8K Mirror Finish", href: "/surfaces/stainless-steel-8k-mirror-finish" },
      { name: "Finish Selection Guides", href: "/resources/stainless-steel-guides#processing" },
    ],
  },
  "stainless-steel-2b-finish": {
    relatedTitle: "Foundation Finish Links",
    items: [
      { name: "BA Finish", href: "/surfaces/stainless-steel-ba-finish" },
      { name: "2B vs BA Surface Finish", href: "/knowledge-base/2b-vs-ba-surface-finish" },
      { name: "Stainless Steel Sheet & Plate", href: "/products/stainless-steel-sheet" },
      { name: "Cut-to-Length Capability", href: "/solutions/capabilities/cut-to-length" },
    ],
  },
};

export async function generateStaticParams() {
  return getContentSlugs("surfaces").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContent("surfaces", slug);
  if (!content) return {};
  return {
    title: content.seoTitle || content.title,
    description: content.description,
    alternates: {
      canonical: `/surfaces/${slug}`,
    },
  };
}

function SurfaceBreadcrumbBar({ title }: { title: string }) {
  return (
    <div className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <nav className="flex min-w-0 items-center gap-2 overflow-hidden whitespace-nowrap text-[0.82rem] text-slate-500">
          <Link href="/" className="shrink-0 transition-colors hover:text-text-primary">
            Home
          </Link>
          <span className="flex shrink-0 items-center gap-2">
            <span className="shrink-0">/</span>
            <Link href="/surfaces" className="shrink-0 transition-colors hover:text-text-primary">
              Surfaces
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

function MirrorRebuildHero() {
  return (
    <>
      <SurfaceBreadcrumbBar title="8K Mirror Finish Stainless Steel" />
      <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
        <Image
          src="/images/surfaces/no8-mirror/hero-ai-8k-mirror-logical-v2.png"
          alt="8K mirror and black mirror stainless steel sheets reflecting two visible tomatoes"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom opacity-[0.68] brightness-[0.86] saturate-[1.04] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.64)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Surface release
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[2.9rem]">
            Premium 8K Mirror Finish Stainless Steel Sheet &amp; Coil | Super Mirror Steel Supplier
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Looking for high-reflectivity 8K mirror finish stainless steel with zero defects? Jinling delivers premium mirror polished sheets with Ra &lt;= 0.03 um, glossiness &gt; 800 GU. Since 1997, trusted by 500+ global projects.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact#pricing-request"
              className="inline-flex min-h-11 items-center bg-[#f6d044] px-5 text-sm font-semibold text-[#111820] transition hover:bg-[#f2c820]"
            >
              Request 8K pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function No4RebuildHero() {
  return (
    <>
      <SurfaceBreadcrumbBar title="No.4 Brushed Finish Stainless Steel" />
      <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
        <Image
          src="/images/surfaces/no4-brushed/hero-no4-brushed-banner.jpg"
          alt="No.4 brushed stainless steel sheet with uniform satin grain and product display"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.72] brightness-[0.82] saturate-[0.92] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.56)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Surface release
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.8rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.4rem] lg:text-[2.85rem]">
            Premium No.4 Brushed Stainless Steel Sheet & Coil | Uniform Satin Finish Supplier
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Jinling&apos;s No.4 finish features a consistent, directional grit aligned with NAAMM & ASTM A480 standards. We specialize in eliminating batch-to-batch grain deviation, a critical factor for architectural facades and appliance OEMs. By strictly controlling Surface Roughness (Ra) and abrasive pressure, we provide &quot;fabrication-ready&quot; panels that ensure a perfect visual match between your initial install and future restocks.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact#pricing-request"
              className="inline-flex min-h-11 items-center bg-[#f6d044] px-5 text-sm font-semibold text-[#111820] transition hover:bg-[#f2c820]"
            >
              Request No.4 pricing
            </Link>
            <Link
              href="/products/stainless-steel-sheet"
              className="inline-flex min-h-11 items-center bg-white/10 px-5 text-sm font-semibold text-white ring-1 ring-white/18 transition hover:bg-white/16"
            >
              Check sheet options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function TwoBRebuildHero() {
  return (
    <>
      <SurfaceBreadcrumbBar title="2B Finish Stainless Steel" />
      <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
        <Image
          src="/images/surfaces/2b/hero-2b-finish-banner-textless.jpeg"
          alt="2B finish stainless steel panels used for stable mechanical properties and surface integrity"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.72] brightness-[0.78] saturate-[0.9] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.54)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Surface release
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.8rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.4rem] lg:text-[2.85rem]">
            High-Precision 2B Finish Stainless Steel | Stable Mechanical Properties & Surface Integrity
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Our 2B finish is engineered for high-precision manufacturing, offering a smooth, silver-grey surface with superior flatness. Through precise skin-pass leveling, we eliminate internal stresses to prevent spring-back during complex bending or welding. Fully compliant with ASTM A480, it is the ideal substrate for fiber laser processing where dimensional stability is non-negotiable.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact#pricing-request"
              className="inline-flex min-h-11 items-center bg-[#f6d044] px-5 text-sm font-semibold text-[#111820] transition hover:bg-[#f2c820]"
            >
              Request 2B pricing
            </Link>
            <Link
              href="/products/stainless-steel-sheet"
              className="inline-flex min-h-11 items-center bg-white/10 px-5 text-sm font-semibold text-white ring-1 ring-white/18 transition hover:bg-white/16"
            >
              Check sheet options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function HairlineRebuildHero() {
  return (
    <>
      <SurfaceBreadcrumbBar title="Hairline Finish Stainless Steel" />
      <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
        <Image
          src="/images/surfaces/hairline/hero-hairline-banner.jpg"
          alt="Hairline finish stainless steel sheet with protective film and continuous long grain surface"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.74] brightness-[0.8] saturate-[0.9] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_46%,rgba(13,20,27,0.56)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Surface release
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.8rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.4rem] lg:text-[2.85rem]">
            Professional Hairline Finish Stainless Steel (HL) | Elegant Long-Grain Architectural Surfaces
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Jinling&apos;s Hairline (HL) finish features continuous, unidirectional &quot;long-grain&quot; textures designed for premium architectural aesthetics. Unlike broken-grit No.4, our HL process ensures zero visual deviation in parallelism across full 5-foot (1524mm) widths. It is the industry standard for luxury elevator cabins and facades where surface integrity and consistent light reflection are paramount.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact#pricing-request"
              className="inline-flex min-h-11 items-center bg-[#f6d044] px-5 text-sm font-semibold text-[#111820] transition hover:bg-[#f2c820]"
            >
              Request HL pricing
            </Link>
            <Link
              href="/products/stainless-steel-sheet"
              className="inline-flex min-h-11 items-center bg-white/10 px-5 text-sm font-semibold text-white ring-1 ring-white/18 transition hover:bg-white/16"
            >
              Check sheet options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function BaRebuildHero() {
  return (
    <>
      <SurfaceBreadcrumbBar title="BA Finish Stainless Steel" />
      <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
        <Image
          src="/images/surfaces/ba-finish/hero-ba-finish-left.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-105 object-cover object-[56%_50%] opacity-[0.58] brightness-[0.62] saturate-[0.9] contrast-[1.08]"
        />
        <Image
          src="/images/surfaces/ba-finish/hero-ba-finish.jpg"
          alt="BA finish stainless steel sheet with bright annealed surface, carton packaging, and Jinling protective tape"
          fill
          priority
          sizes="100vw"
          className="object-contain object-right opacity-[0.68] brightness-[0.68] saturate-[0.88] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.95)_0%,rgba(13,20,27,0.8)_46%,rgba(13,20,27,0.36)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Surface release
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.8rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.4rem] lg:text-[2.85rem]">
            Premium BA Finish Stainless Steel Sheet &amp; Coil | Bright Annealed Surface Supplier
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Jinling supplies BA finish stainless steel with a bright, smooth, reflective surface produced by cold rolling and bright annealing in a controlled atmosphere. Designed for kitchen appliances, elevator interiors, decorative panels, and precision fabrication, our BA sheets and coils deliver stable flatness, clean surface integrity, consistent batch-to-batch gloss, protective film, and export-ready packing.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact#pricing-request"
              className="inline-flex min-h-11 items-center bg-[#f6d044] px-5 text-sm font-semibold text-[#111820] transition hover:bg-[#f2c820]"
            >
              Request BA pricing
            </Link>
            <Link
              href="/products/stainless-steel-sheet"
              className="inline-flex min-h-11 items-center bg-white/10 px-5 text-sm font-semibold text-white ring-1 ring-white/18 transition hover:bg-white/16"
            >
              Check sheet options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const baSpecificationRows = [
  {
    item: "Standard",
    detail: "JIS, AISI, ASTM, GB, DIN, EN",
  },
  {
    item: "Thickness",
    detail: "0.3 mm - 3.0 mm",
  },
  {
    item: "Width",
    detail: "1000mm, 1220mm, 1250mm, 1500mm",
  },
  {
    item: "Length",
    detail: "2000mm, 2438mm, 3048mm, Customized",
  },
  {
    item: "Tolerance",
    detail: "+/-1%",
  },
  {
    item: "SS Grade",
    detail: "304, 316, 316L, 201, 401, 430, etc.",
  },
  {
    item: "Rolling Route",
    detail: "Cold Rolled / Bright Annealed",
  },
  {
    item: "Edge",
    detail: "Mill, Slit",
  },
];

function BaSpecificationsSection() {
  return (
    <section className="bg-[#f7f1e8] px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] max-w-5xl gap-7 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
        <div className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.18)]">
          <div className="px-4 py-4 text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                Specifications
              </h3>
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
              BA finish stainless steel sheet and coil supply range
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-[0.72rem] sm:text-[0.8rem]">
            <thead>
              <tr className="bg-[#f6d044] text-[#111820]">
                <th className="w-[32%] border-r border-[#111820]/24 px-4 py-3 text-center text-[0.66rem] font-semibold uppercase tracking-[0.1em]">
                  Item
                </th>
                <th className="px-4 py-3 text-center text-[0.66rem] font-semibold uppercase tracking-[0.1em]">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {baSpecificationRows.map((row) => (
                <tr key={row.item} className="bg-[#111111] align-middle">
                  <th className="border-r border-t border-white/14 px-4 py-4 text-center align-middle font-semibold leading-[1.3] text-white">
                    {row.item}
                  </th>
                  <td className="border-t border-white/14 px-4 py-4 leading-[1.45] text-white/88">
                    {row.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Specifications
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#4f5864] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase">
            Review BA finish stainless steel sheet and coil specifications for bright annealed surface projects, including ASTM, AISI, JIS, EN standards, 304, 316L, 201, 401, and 430 stainless steel grades, common widths, custom lengths, tolerance, and mill or slit edge options for reflective appliance panels, elevator interiors, decorative cladding, and precision fabrication.
          </p>
        </div>
      </div>
    </section>
  );
}

const baProcessingFlowRows = [
  {
    step: "Hot Rolled Coil Preparation",
    detail: "Start with annealed and pickled hot rolled stainless steel coil as the base for cold rolling.",
  },
  {
    step: "Cold Rolling",
    detail: "Reduce thickness and improve flatness to create a smooth substrate for BA bright annealed stainless steel.",
  },
  {
    step: "Surface Cleaning / Degreasing",
    detail: "Remove rolling oil, dust, and residues before furnace entry to prevent haze, stains, and uneven brightness.",
  },
  {
    step: "Bright Annealing",
    detail: "Anneal in a controlled protective atmosphere so the stainless steel surface stays bright without oxide scale.",
  },
  {
    step: "Skin Pass / Light Leveling",
    detail: "Apply light leveling to improve coil shape and flatness while preserving the reflective BA finish surface.",
  },
  {
    step: "Surface Inspection",
    detail: "Check brightness, haze, scratches, roller marks, color consistency, thickness tolerance, and flatness before release.",
  },
  {
    step: "Slitting / Cut-to-Length / Protective Film",
    detail: "Finish with slit edge, cut-to-length sheets, protective film, and export packing for fabrication-ready supply.",
  },
];

function BaProcessingFlowSection() {
  return (
    <section className="flex bg-white px-4 py-7 sm:px-6 lg:min-h-[38vh] lg:items-center lg:px-8 lg:py-8">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Processing Flow
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#4f5864] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase">
            BA finish stainless steel is produced from cold rolled coil through cleaning, bright annealing in a protective atmosphere, light leveling, and strict surface inspection. This process creates a clean reflective stainless steel sheet and coil surface for kitchen appliances, elevator interiors, decorative panels, and precision fabrication.
          </p>
        </div>
        <ol className="grid gap-2.5">
          {baProcessingFlowRows.map((item, index) => (
            <li
              key={item.step}
              tabIndex={0}
              className="group grid min-h-[3.65rem] grid-cols-[3.75rem_1fr] overflow-hidden border border-[#e0b72b] bg-[#f6d044] shadow-[0_12px_32px_rgba(13,20,27,0.045)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(13,20,27,0.1)] focus:-translate-y-0.5 focus:outline-none focus:shadow-[0_16px_38px_rgba(13,20,27,0.1)]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <span className="text-[0.76rem] font-semibold uppercase tracking-[0.12em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="px-4 py-3">
                <h3 className="text-[0.9rem] font-semibold leading-5 text-[#111820]">
                  {item.step}
                </h3>
                <p className="max-h-0 overflow-hidden text-sm leading-6 text-[#5f6872] opacity-0 transition-all duration-200 group-hover:mt-1 group-hover:max-h-24 group-hover:opacity-100 group-focus:mt-1 group-focus:max-h-24 group-focus:opacity-100">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const twoBSpecificationRows = [
  {
    item: "Standard",
    detail: "JIS, AISI, ASTM, GB, DIN, EN",
  },
  {
    item: "Thickness",
    detail: "0.3 mm - 3.0 mm",
  },
  {
    item: "Width",
    detail: "1000mm, 1220mm, 1250mm, 1500mm",
  },
  {
    item: "Length",
    detail: "2000mm, 2438mm, 3048mm, Customized",
  },
  {
    item: "Tolerance",
    detail: "+/-1%",
  },
  {
    item: "SS Grade",
    detail: "304, 316, 316L, 201, 401, 430, etc.",
  },
  {
    item: "Rolling Route",
    detail: "Cold Rolled",
  },
  {
    item: "Edge",
    detail: "Mill, Slit",
  },
];

function TwoBSpecificationsSection() {
  return (
    <section className="bg-[#f7f1e8] px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] max-w-5xl gap-7 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
        <div className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.18)]">
          <div className="px-4 py-4 text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                Specifications
              </h3>
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
              2B finish stainless steel sheet and coil supply range
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-[0.72rem] sm:text-[0.8rem]">
            <thead>
              <tr className="bg-[#f6d044] text-[#111820]">
                <th className="w-[32%] border-r border-[#111820]/24 px-4 py-3 text-center text-[0.66rem] font-semibold uppercase tracking-[0.1em]">
                  Item
                </th>
                <th className="px-4 py-3 text-center text-[0.66rem] font-semibold uppercase tracking-[0.1em]">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {twoBSpecificationRows.map((row) => (
                <tr key={row.item} className="bg-[#111111] align-middle">
                  <th className="border-r border-t border-white/14 px-4 py-4 text-center align-middle font-semibold leading-[1.3] text-white">
                    {row.item}
                  </th>
                  <td className="border-t border-white/14 px-4 py-4 leading-[1.45] text-white/88">
                    {row.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Specifications
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#4f5864] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase">
            Review 2B finish stainless steel sheet and coil specifications for cold rolled surface projects, including ASTM, AISI, JIS, EN standards, 304, 316L, 201, 401, and 430 stainless steel grades, common widths, custom lengths, tolerance, and slit edge options for laser cutting, bending, welding, appliance panels, and industrial fabrication.
          </p>
        </div>
      </div>
    </section>
  );
}

const hairlineSpecificationRows = [
  {
    item: "Standard",
    detail: "JIS, AISI, ASTM, GB, DIN, EN",
  },
  {
    item: "Thickness",
    detail: "0.3 mm - 3.0 mm",
  },
  {
    item: "Width",
    detail: "1000mm, 1220mm, 1250mm, 1500mm",
  },
  {
    item: "Length",
    detail: "2000mm, 2438mm, 3048mm, Customized",
  },
  {
    item: "Tolerance",
    detail: "±1%",
  },
  {
    item: "SS Grade",
    detail: "304, 316, 316L, 201, 401, 430, etc.",
  },
  {
    item: "Rolling Route",
    detail: "Cold Rolled",
  },
  {
    item: "Edge",
    detail: "Mill, Slit",
  },
];

function HairlineSpecificationsSection() {
  return (
    <section className="bg-[#f7f1e8] px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] max-w-5xl gap-7 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
        <div className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.18)]">
          <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-3 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                Specifications
              </h3>
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
              Hairline finish stainless steel sheet and coil supply range
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-[0.72rem] sm:text-[0.8rem]">
            <thead>
              <tr className="bg-[#f6d044] text-[#101820]">
                <th className="w-[32%] border-r border-[#111820]/24 px-4 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.1em]">
                  Item
                </th>
                <th className="px-4 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.1em]">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {hairlineSpecificationRows.map((row) => (
                <tr key={row.item} className="bg-[#111111] align-middle">
                  <th className="border-r border-t border-white/14 px-4 py-3 text-center align-middle font-semibold leading-[1.3] text-white">
                    {row.item}
                  </th>
                  <td className="border-t border-white/14 px-4 py-3 leading-[1.45] text-white/78">
                    {row.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Specifications
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#4f5864] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase">
            Review Hairline finish stainless steel sheet and coil specifications for cold rolled HL surface projects, including AISI, ASTM, JIS, EN standards, 304 and 316L stainless steel grades, common widths, cut lengths, tolerance, and slit edge options for elevator panels, architectural interiors, appliance panels, and decorative fabrication.
          </p>
        </div>
      </div>
    </section>
  );
}

const twoBProcessingFlowRows = [
  {
    step: "Hot Rolled Coil Preparation",
    detail: "Stainless steel slabs are hot rolled into coil as the base material for further cold rolling.",
  },
  {
    step: "Annealing & Pickling",
    detail: "Heat treatment restores material structure, while pickling removes oxide scale and prepares a clean surface.",
  },
  {
    step: "Cold Rolling",
    detail: "The coil is cold rolled to the required thickness, improving flatness, dimensional accuracy, and surface smoothness.",
  },
  {
    step: "Final Annealing & Pickling",
    detail: "The cold rolled coil is annealed again and pickled to achieve stable mechanical properties and corrosion resistance.",
  },
  {
    step: "Skin Pass / Light Cold Rolling",
    detail: "A light pass with polished rolls creates the smooth, silver-grey 2B stainless steel finish and improves flatness.",
  },
  {
    step: "Leveling & Surface Inspection",
    detail: "Coil or sheet is checked for flatness, thickness tolerance, scratches, roll marks, and surface consistency.",
  },
  {
    step: "Slitting / Cut-to-Length / Protective Packing",
    detail: "Finished 2B stainless steel coil can be slit, cut into sheets, protected with film, and packed for fabrication or export.",
  },
];

function TwoBProcessingFlowSection() {
  return (
    <section className="flex bg-white px-4 py-7 sm:px-6 lg:min-h-[38vh] lg:items-center lg:px-8 lg:py-8">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Processing Flow
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#4f5864] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase">
            2B stainless steel is produced through cold rolling, annealing, pickling, and skin-pass finishing to create a smooth, silver-grey surface with stable flatness, tight thickness tolerance, and reliable mechanical properties for laser cutting, bending, welding, appliance panels, and industrial fabrication.
          </p>
        </div>
        <ol className="grid gap-2.5">
          {twoBProcessingFlowRows.map((item, index) => (
            <li
              key={item.step}
              tabIndex={0}
              className="group grid min-h-[3.65rem] grid-cols-[3.75rem_1fr] overflow-hidden border border-[#e0b72b] bg-[#f6d044] shadow-[0_12px_32px_rgba(13,20,27,0.045)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(13,20,27,0.1)] focus:-translate-y-0.5 focus:outline-none focus:shadow-[0_16px_38px_rgba(13,20,27,0.1)]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <span className="text-[0.76rem] font-semibold uppercase tracking-[0.12em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="px-4 py-3">
                <h3 className="text-[0.9rem] font-semibold leading-5 text-[#111820]">
                  {item.step}
                </h3>
                <p className="max-h-0 overflow-hidden text-sm leading-6 text-[#5f6872] opacity-0 transition-all duration-200 group-hover:mt-1 group-hover:max-h-24 group-hover:opacity-100 group-focus:mt-1 group-focus:max-h-24 group-focus:opacity-100">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const baWhyChooseRows = [
  {
    icon: "surface",
    text: "Stable BA brightness and smooth reflective appearance support appliance panels, elevator interiors, and decorative stainless steel projects.",
  },
  {
    icon: "panel",
    text: "Controlled flatness helps BA stainless steel sheets perform better during cutting, bending, stamping, and panel assembly.",
  },
  {
    icon: "surface",
    text: "Surface inspection helps reduce scratches, haze, roller marks, and visible defects before packing and shipment.",
  },
  {
    icon: "width",
    text: "304, 316L, 201, 430, and other stainless steel grades are available with common widths, custom lengths, and slit edge options.",
  },
  {
    icon: "delivery",
    text: "Protective film and export-ready packing help preserve the BA finish surface during handling, transport, and downstream fabrication.",
  },
];

function BaWhyChooseUsSection() {
  return (
    <section className="flex bg-[#f7f1e8] px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:items-center lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Why choose us
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#4f5864] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase">
            Jinling supplies BA finish stainless steel sheet and coil with stable brightness, clean surface integrity, and controlled flatness for appliance panels, elevator interiors, decorative parts, and precision fabrication. With reliable cold rolled material sourcing, protective film options, and export-ready packing, our bright annealed stainless steel helps buyers reduce surface defects, batch variation, and downstream processing risk.
          </p>
        </div>
        <ul className="grid gap-2.5">
          {baWhyChooseRows.map((point) => (
            <li
              key={point.text}
              className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <No4AdvantageIcon type={point.icon} />
              </div>
              <p className="px-4 py-3 text-sm font-semibold leading-6 text-[#1f2933]">
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const baRelatedArticles = [
  {
    name: "2B vs BA Finish: Which Stainless Steel Surface Should You Choose?",
    href: "/knowledge-base/2b-vs-ba-surface-finish",
    image: "/images/surfaces/ba-finish/hero-ba-finish.jpg",
    excerpt:
      "Compare bright annealed BA and 2B stainless steel by gloss, surface smoothness, fabrication route, and visible application needs.",
  },
  {
    name: "How to Inspect BA Finish Stainless Steel Before Fabrication",
    href: "/knowledge-base/ba-finish-stainless-steel-inspection",
    image: "/images/surfaces/ba-finish/hero-ba-finish-left.jpg",
    excerpt:
      "A buyer checklist for BA stainless steel brightness, haze, scratches, roller marks, flatness, protective film, and export packing.",
  },
  {
    name: "Best Applications for Bright Annealed Stainless Steel Sheet",
    href: "/knowledge-base/bright-annealed-stainless-steel-applications",
    image: "/images/surfaces/2b/hero-2b-finish-banner-textless.jpeg",
    excerpt:
      "See where BA finish stainless steel works best, from appliance panels and elevator interiors to decorative cladding and precision parts.",
  },
] as const;

function BaRelatedArticles() {
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
            {baRelatedArticles.map((item) => (
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
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.2)_0%,rgba(13,20,27,0.78)_54%,rgba(13,20,27,0.95)_100%)]"
                  aria-hidden="true"
                />
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(6.25rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
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

const twoBWhyChooseRows = [
  {
    icon: "panel",
    text: "Skin-pass leveling helps improve flatness and reduce spring-back risk during bending, welding, and precision fabrication.",
  },
  {
    icon: "surface",
    text: "Smooth silver-grey 2B stainless steel surface supports laser cutting, stamping, polishing, brushing, and coating routes.",
  },
  {
    icon: "width",
    text: "Stable thickness, width, length, and +/-1% tolerance help buyers control nesting, yield, and downstream assembly accuracy.",
  },
  {
    icon: "surface",
    text: "304, 316, 316L, 201, 401, and 430 options cover corrosion resistance, cost control, and industrial fabrication needs.",
  },
  {
    icon: "delivery",
    text: "Cold rolled coil, slit edge, cut-to-length sheet, and export packing options make 2B stainless steel sourcing easier.",
  },
];

function TwoBWhyChooseUsSection() {
  return (
    <section className="flex bg-[#f7f1e8] px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:items-center lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Why choose us
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#4f5864] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase">
            Choose Jinling for 2B finish stainless steel sheet and coil when flatness, dimensional stability, smooth surface integrity, and fabrication-ready supply matter. Our cold rolled 2B stainless steel supports laser cutting, bending, welding, appliance panels, industrial parts, and further surface finishing.
          </p>
        </div>
        <ul className="grid gap-2.5">
          {twoBWhyChooseRows.map((point) => (
            <li
              key={point.text}
              className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <No4AdvantageIcon type={point.icon} />
              </div>
              <p className="px-4 py-3 text-sm font-semibold leading-6 text-[#1f2933]">
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const hairlineProcessingFlowRows = [
  {
    step: "2B Substrate",
    detail: "Cold rolled, annealed, and pickled 2B stainless steel provides a flat base for stable hairline finish.",
  },
  {
    step: "Surface Cleaning",
    detail: "Oil, dust, roll marks, and visible defects are removed before brushing to improve grain consistency.",
  },
  {
    step: "Progressive Pre-Grinding",
    detail: "Coarse abrasive belts level the surface before finer grits gradually refine the stainless steel texture.",
  },
  {
    step: "Long-Grain HL Grinding",
    detail: "Abrasive, non-woven, or Scotch-Brite belts run in one direction to create continuous hairline grain.",
  },
  {
    step: "Fine Grit Control",
    detail: "180# to 400# options support standard, fine, decorative, and premium hairline stainless steel finishes.",
  },
  {
    step: "Scotch-Brite Refinement",
    detail: "Optional refinement softens the grain, evens gloss, and reduces belt transition marks for elevator panels.",
  },
  {
    step: "Protective Film",
    detail: "Laser PVC, PE film, or Novacel protects the visible HL surface during cutting, fabrication, and delivery.",
  },
];

function HairlineProcessingFlowSection() {
  return (
    <section className="flex bg-white px-4 py-7 sm:px-6 lg:min-h-[38vh] lg:items-center lg:px-8 lg:py-8">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Processing Flow
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#4f5864] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase">
            Jinling produces hairline finish stainless steel sheet and coil from clean 2B substrate through controlled grinding, long-grain HL brushing, optional Scotch-Brite refinement, and protective film lamination. This workflow helps buyers receive continuous directional grain, stable light reflection, and fabrication-ready hairline stainless steel panels for elevators, architectural interiors, facades, and decorative metal projects.
          </p>
        </div>
        <ol className="grid gap-2.5">
          {hairlineProcessingFlowRows.map((item, index) => (
            <li
              key={item.step}
              tabIndex={0}
              className="group grid min-h-[3.65rem] grid-cols-[3.75rem_1fr] overflow-hidden border border-[#e0b72b] bg-[#f6d044] shadow-[0_12px_32px_rgba(13,20,27,0.045)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(13,20,27,0.1)] focus:-translate-y-0.5 focus:outline-none focus:shadow-[0_16px_38px_rgba(13,20,27,0.1)]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <span className="text-[0.76rem] font-semibold uppercase tracking-[0.12em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="px-4 py-3">
                <h3 className="text-[0.9rem] font-semibold leading-5 text-[#111820]">
                  {item.step}
                </h3>
                <p className="max-h-0 overflow-hidden text-sm leading-6 text-[#5f6872] opacity-0 transition-all duration-200 group-hover:mt-1 group-hover:max-h-24 group-hover:opacity-100 group-focus:mt-1 group-focus:max-h-24 group-focus:opacity-100">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const no4SpecificationRows = [
  {
    item: "Standard",
    detail: "JIS, AISI, ASTM, GB, DIN, EN",
  },
  {
    item: "Thickness",
    detail: "0.3 mm - 3.0 mm",
  },
  {
    item: "Width",
    detail: "1000mm, 1220mm, 1250mm, 1500mm",
  },
  {
    item: "Length",
    detail: "2000mm, 2438mm, 3048mm, Customized",
  },
  {
    item: "Tolerance",
    detail: "±1%",
  },
  {
    item: "SS Grades",
    detail: "304, 316, 316L, 201, 401, 430, etc.",
  },
  {
    item: "Edge",
    detail: "Mill, Slit",
  },
];

function No4SpecificationsSection() {
  return (
    <section className="bg-[#f7f1e8] px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] max-w-5xl gap-7 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
        <div className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.18)]">
          <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-3 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                Specifications
              </h3>
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
              Key technical details at a glance
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-[0.74rem] sm:text-[0.82rem]">
            <thead>
              <tr className="bg-[#f6d044] text-[#101820]">
                <th className="w-[32%] border-r border-[#111820]/24 px-4 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.1em]">
                  Item
                </th>
                <th className="px-4 py-3 text-center text-[0.68rem] font-semibold uppercase tracking-[0.1em]">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {no4SpecificationRows.map((row) => (
                <tr key={row.item} className="bg-[#111111] align-middle">
                  <th className="border-r border-t border-white/14 px-4 py-4 text-center align-middle font-semibold leading-[1.3] text-white">
                    {row.item}
                  </th>
                  <td className="border-t border-white/14 px-4 py-4 leading-[1.45] text-white/78">
                    {row.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Specifications
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#4f5864] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase">
            Review No.4 brushed stainless steel sheet and coil specifications, including JIS, AISI, ASTM, GB, DIN, and EN standards, 304, 316, 316L, 201, 401, and 430 stainless steel grades, common widths, cut lengths, tolerance, and mill or slit edge options for architectural panels, appliance parts, elevator interiors, and fabrication-ready brushed stainless steel orders.
          </p>
        </div>
      </div>
    </section>
  );
}

const no4ProcessingFlowRows = [
  {
    step: "2B Substrate Preparation",
    detail: "No.4 finish normally starts from cold rolled, annealed, pickled, skin-passed 2B stainless steel for a flat and stable base.",
  },
  {
    step: "Surface Pre-Treatment",
    detail: "Oil, dust, scratches, and roll marks are checked and removed before grinding to improve brushed stainless steel consistency.",
  },
  {
    step: "Continuous Belt Grinding",
    detail: "Abrasive, emery, or Scotch-Brite belts grind in one direction to create the ASTM A480-style linearly textured No.4 finish.",
  },
  {
    step: "Grit Refinement",
    detail: "150#, 180#, 240#, and 320# options support coarse No.4, standard No.4, fine satin, and super satin requirements.",
  },
  {
    step: "Scotch-Brite Finishing",
    detail: "Optional Scotch-Brite treatment softens the grain, evens reflection, and reduces belt marks for elevator and architectural panels.",
  },
  {
    step: "Quality Inspection",
    detail: "Grain consistency, directionality, surface roughness Ra, color difference, and scratches are checked before protective film application.",
  },
];

function No4ProcessingFlowSection() {
  return (
    <section className="flex bg-white px-4 py-7 sm:px-6 lg:min-h-[38vh] lg:items-center lg:px-8 lg:py-8">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Processing Flow
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#4f5864] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase">
            Jinling produces No.4 brushed stainless steel sheet and coil from stable 2B substrate through surface pre-treatment, continuous belt grinding, grit refinement, optional Scotch-Brite satin finishing, and quality inspection. This controlled No.4 finish process helps buyers receive uniform linear grain, consistent satin reflection, and fabrication-ready brushed stainless steel panels for elevators, appliances, architectural interiors, and OEM projects.
          </p>
        </div>
        <ol className="grid gap-2.5">
          {no4ProcessingFlowRows.map((item, index) => (
            <li
              key={item.step}
              tabIndex={0}
              className="group grid min-h-[3.65rem] grid-cols-[3.75rem_1fr] overflow-hidden border border-[#e0b72b] bg-[#f6d044] shadow-[0_12px_32px_rgba(13,20,27,0.045)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(13,20,27,0.1)] focus:-translate-y-0.5 focus:outline-none focus:shadow-[0_16px_38px_rgba(13,20,27,0.1)]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <span className="text-[0.76rem] font-semibold uppercase tracking-[0.12em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="px-4 py-3">
                <h3 className="text-[0.9rem] font-semibold leading-5 text-[#111820]">
                  {item.step}
                </h3>
                <p className="max-h-0 overflow-hidden text-sm leading-6 text-[#5f6872] opacity-0 transition-all duration-200 group-hover:mt-1 group-hover:max-h-24 group-hover:opacity-100 group-focus:mt-1 group-focus:max-h-24 group-focus:opacity-100">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

const no4WhyChooseRows = [
  {
    icon: "surface",
    text: "Cleaner brushed surfaces help reduce visible scratches, stains, and polishing defects before cutting, bending, or installation.",
  },
  {
    icon: "panel",
    text: "Stable No.4 brushed stainless steel finish works well for elevator interiors, appliance panels, wall cladding, doors, and decorative trims.",
  },
  {
    icon: "width",
    text: "Extra-wide 1524mm brushed stainless steel sheets help create cleaner architectural layouts and reduce panel joints.",
  },
  {
    icon: "delivery",
    text: "Standard grit ranges, protective film options, and stable sheet or coil supply make sourcing easier for OEM and project buyers.",
  },
];

function No4WhyChooseUsSection() {
  return (
    <section className="flex bg-[#f7f1e8] px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:items-center lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Why choose us
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#4f5864] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase">
            Choose Jinling for No.4 brushed stainless steel sheet and coil when visual consistency, clean fabrication, extra-wide panel supply, and reliable export delivery matter. Our satin finish supports appliance OEMs, elevator interiors, architectural wall cladding, doors, trims, and decorative stainless steel projects.
          </p>
        </div>
        <ul className="grid gap-2.5">
          {no4WhyChooseRows.map((point) => (
            <li
              key={point.text}
              className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <No4AdvantageIcon type={point.icon} />
              </div>
              <p className="px-4 py-3 text-sm font-semibold leading-6 text-[#1f2933]">
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const hairlineWhyChooseRows = [
  {
    icon: "surface",
    text: "Controlled HL brushing keeps the hairline grain straight, continuous, and visually aligned across full stainless steel panels.",
  },
  {
    icon: "panel",
    text: "Consistent grain direction and gloss help reduce mismatch between first installation and future replacement orders.",
  },
  {
    icon: "width",
    text: "5-foot wide hairline stainless steel sheets support elevator cabins, wall panels, doors, and architectural interiors with fewer joints.",
  },
  {
    icon: "surface",
    text: "180#-400# hairline options with optional Scotch-Brite refinement support fine HL, decorative HL, and soft satin effects.",
  },
  {
    icon: "delivery",
    text: "Laser PVC, PE film, or Novacel protection helps reduce scratches during cutting, bending, installation, and export handling.",
  },
];

function HairlineWhyChooseUsSection() {
  return (
    <section className="flex bg-[#f7f1e8] px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:items-center lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Why choose us
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#4f5864] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase">
            Choose Jinling for hairline finish stainless steel sheet and coil when long-grain consistency, restocking match, wide decorative panels, and protected export delivery matter. Our HL finish supports elevator cabins, architectural interiors, wall panels, doors, appliance faces, and premium decorative stainless steel projects.
          </p>
        </div>
        <ul className="grid gap-2.5">
          {hairlineWhyChooseRows.map((point) => (
            <li
              key={point.text}
              className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <No4AdvantageIcon type={point.icon} />
              </div>
              <p className="px-4 py-3 text-sm font-semibold leading-6 text-[#1f2933]">
                {point.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function No4AdvantageIcon({ type }: { type: string }) {
  const common = "h-5 w-5";

  if (type === "surface") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 22L22 6M10 26L26 10M5 14L14 5M18 27L27 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "panel") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="5" width="20" height="22" stroke="currentColor" strokeWidth="2" />
        <path d="M11 9v14M16 9v14M21 9v14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "width") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="5" y="10" width="22" height="12" stroke="currentColor" strokeWidth="2" />
        <path d="M9 16h14M9 16l3-3M9 16l3 3M23 16l-3-3M23 16l-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 20V9h14v11M20 13h4l3 4v3h-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="11" cy="23" r="2.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="23" cy="23" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const mirrorSlides = [
  {
    src: "/images/surfaces/no8-mirror/slideshow/mirror-gloss-inspection-01.jpeg",
    alt: "8K mirror stainless steel gloss inspection on production line",
    caption: "Gloss inspection",
    note: "Surface gloss and reflection inspection before mirror sheet release",
    contain: false,
  },
  {
    src: "/images/surfaces/no8-mirror/slideshow/mirror-ra-testing-02.jpeg",
    alt: "8K mirror stainless steel Ra roughness testing close-up",
    caption: "Ra roughness check",
    note: "Low surface roughness supports clearer No.8 mirror reflection",
    contain: false,
  },
  {
    src: "/images/surfaces/no8-mirror/slideshow/mirror-light-inspection-03.jpeg",
    alt: "8K mirror finish stainless steel surface light inspection",
    caption: "Light inspection",
    note: "Fine scratches, haze, and polishing marks are checked under light",
    contain: false,
  },
  {
    src: "/images/surfaces/no8-mirror/slideshow/mirror-film-line-04.jpeg",
    alt: "8K mirror stainless steel protective film application line",
    caption: "Protective film",
    note: "PVC film protects the mirror surface during fabrication and export",
    contain: true,
  },
  {
    src: "/images/surfaces/no8-mirror/slideshow/mirror-edge-check-05.jpeg",
    alt: "8K mirror stainless steel edge and reflection close-up",
    caption: "Edge reflection",
    note: "Mirror clarity and sheet edge quality are checked before packing",
    contain: true,
  },
  {
    src: "/images/surfaces/no8-mirror/slideshow/mirror-polishing-line-06.jpeg",
    alt: "8K mirror stainless steel polishing line inspection",
    caption: "Mirror polishing",
    note: "Controlled polishing route creates a high-gloss reflective surface",
    contain: true,
  },
  {
    src: "/images/surfaces/no8-mirror/slideshow/mirror-lamination-07.jpeg",
    alt: "8K mirror stainless steel lamination machine with protective film",
    caption: "Film lamination",
    note: "Protective film is applied after inspection to reduce handling marks",
    contain: true,
  },
  {
    src: "/images/surfaces/no8-mirror/slideshow/mirror-frame-reflection-08.jpeg",
    alt: "8K mirror stainless steel frame reflection inspection",
    caption: "Reflection test",
    note: "Clear reflection helps buyers judge mirror depth and surface flatness",
    contain: false,
  },
  {
    src: "/images/surfaces/no8-mirror/slideshow/mirror-detail-inspection-09.jpeg",
    alt: "8K black mirror stainless steel detailed surface inspection",
    caption: "Detail inspection",
    note: "Operators check the mirror surface from multiple viewing angles",
    contain: false,
  },
  {
    src: "/images/surfaces/no8-mirror/slideshow/mirror-flashlight-check-10.jpeg",
    alt: "8K mirror stainless steel flashlight surface inspection",
    caption: "Focused light check",
    note: "Focused light reveals pinholes, dust points, haze, and micro marks",
    contain: false,
  },
  {
    src: "/images/surfaces/no8-mirror/slideshow/mirror-lamp-check-11.jpeg",
    alt: "8K mirror stainless steel lamp reflection inspection",
    caption: "Lamp reflection",
    note: "Direct light checks mirror clarity before protective packing",
    contain: false,
  },
  {
    src: "/images/surfaces/no8-mirror/slideshow/mirror-object-reflection-12.jpeg",
    alt: "8K mirror stainless steel object reflection proof",
    caption: "Object reflection",
    note: "Object reflection shows the depth and cleanliness of the mirror finish",
    contain: false,
  },
  {
    src: "/images/surfaces/no8-mirror/slideshow/mirror-release-check-13.jpeg",
    alt: "8K mirror stainless steel final release inspection",
    caption: "Final release check",
    note: "Final visual inspection confirms the sheet is ready for shipment",
    contain: true,
  },
];

function MirrorWhatIsSection() {
  return (
    <section className="bg-white px-4 py-9 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] max-w-5xl gap-8 lg:grid-cols-[0.43fr_0.57fr] lg:items-center">
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#111820] sm:text-[2.45rem]">
            What is 8K Mirror Finish?
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#4f5864] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] first-letter:uppercase">
            8K mirror finish stainless steel, also called No.8 mirror polished stainless steel, is produced through fine polishing to create a high-gloss, low-haze reflective surface. It is widely used for elevator panels, architectural decoration, hotel interiors, retail display, kitchen equipment, and premium stainless steel sheet and coil projects that require clear reflection and strict surface inspection.
          </p>
        </div>
        <div className="relative overflow-hidden border border-[#e2d5c3] bg-white shadow-[0_20px_55px_rgba(17,24,32,0.14)]">
          <style>{`
            .mirror-slide { opacity: 0; pointer-events: none; transform: scale(1.015); }
            .mirror-control-set { display: none; }
            #mirror-slide-0:checked ~ .mirror-viewport .mirror-slides .mirror-slide-0,
            #mirror-slide-1:checked ~ .mirror-viewport .mirror-slides .mirror-slide-1,
            #mirror-slide-2:checked ~ .mirror-viewport .mirror-slides .mirror-slide-2,
            #mirror-slide-3:checked ~ .mirror-viewport .mirror-slides .mirror-slide-3,
            #mirror-slide-4:checked ~ .mirror-viewport .mirror-slides .mirror-slide-4,
            #mirror-slide-5:checked ~ .mirror-viewport .mirror-slides .mirror-slide-5,
            #mirror-slide-6:checked ~ .mirror-viewport .mirror-slides .mirror-slide-6,
            #mirror-slide-7:checked ~ .mirror-viewport .mirror-slides .mirror-slide-7,
            #mirror-slide-8:checked ~ .mirror-viewport .mirror-slides .mirror-slide-8,
            #mirror-slide-9:checked ~ .mirror-viewport .mirror-slides .mirror-slide-9,
            #mirror-slide-10:checked ~ .mirror-viewport .mirror-slides .mirror-slide-10,
            #mirror-slide-11:checked ~ .mirror-viewport .mirror-slides .mirror-slide-11,
            #mirror-slide-12:checked ~ .mirror-viewport .mirror-slides .mirror-slide-12 { opacity: 1; pointer-events: auto; transform: scale(1); }
            #mirror-slide-0:checked ~ .mirror-viewport .mirror-controls .mirror-control-set-0,
            #mirror-slide-1:checked ~ .mirror-viewport .mirror-controls .mirror-control-set-1,
            #mirror-slide-2:checked ~ .mirror-viewport .mirror-controls .mirror-control-set-2,
            #mirror-slide-3:checked ~ .mirror-viewport .mirror-controls .mirror-control-set-3,
            #mirror-slide-4:checked ~ .mirror-viewport .mirror-controls .mirror-control-set-4,
            #mirror-slide-5:checked ~ .mirror-viewport .mirror-controls .mirror-control-set-5,
            #mirror-slide-6:checked ~ .mirror-viewport .mirror-controls .mirror-control-set-6,
            #mirror-slide-7:checked ~ .mirror-viewport .mirror-controls .mirror-control-set-7,
            #mirror-slide-8:checked ~ .mirror-viewport .mirror-controls .mirror-control-set-8,
            #mirror-slide-9:checked ~ .mirror-viewport .mirror-controls .mirror-control-set-9,
            #mirror-slide-10:checked ~ .mirror-viewport .mirror-controls .mirror-control-set-10,
            #mirror-slide-11:checked ~ .mirror-viewport .mirror-controls .mirror-control-set-11,
            #mirror-slide-12:checked ~ .mirror-viewport .mirror-controls .mirror-control-set-12 { display: flex; }
            #mirror-slide-0:checked ~ .mirror-footer .mirror-dots label[for="mirror-slide-0"],
            #mirror-slide-1:checked ~ .mirror-footer .mirror-dots label[for="mirror-slide-1"],
            #mirror-slide-2:checked ~ .mirror-footer .mirror-dots label[for="mirror-slide-2"],
            #mirror-slide-3:checked ~ .mirror-footer .mirror-dots label[for="mirror-slide-3"],
            #mirror-slide-4:checked ~ .mirror-footer .mirror-dots label[for="mirror-slide-4"],
            #mirror-slide-5:checked ~ .mirror-footer .mirror-dots label[for="mirror-slide-5"],
            #mirror-slide-6:checked ~ .mirror-footer .mirror-dots label[for="mirror-slide-6"],
            #mirror-slide-7:checked ~ .mirror-footer .mirror-dots label[for="mirror-slide-7"],
            #mirror-slide-8:checked ~ .mirror-footer .mirror-dots label[for="mirror-slide-8"],
            #mirror-slide-9:checked ~ .mirror-footer .mirror-dots label[for="mirror-slide-9"],
            #mirror-slide-10:checked ~ .mirror-footer .mirror-dots label[for="mirror-slide-10"],
            #mirror-slide-11:checked ~ .mirror-footer .mirror-dots label[for="mirror-slide-11"],
            #mirror-slide-12:checked ~ .mirror-footer .mirror-dots label[for="mirror-slide-12"] { width: 1.25rem; background: #f6d044; }
          `}</style>
          {mirrorSlides.map((slide, index) => (
            <input
              key={`input-${slide.src}`}
              id={`mirror-slide-${index}`}
              type="radio"
              name="mirror-slideshow"
              className="sr-only"
              defaultChecked={index === 0}
            />
          ))}
          <div className="mirror-viewport relative aspect-[16/10] bg-[#071018]">
            <div className="mirror-slides absolute inset-0">
              {mirrorSlides.map((slide, index) => (
                <div
                  key={slide.src}
                  className={`mirror-slide mirror-slide-${index} absolute inset-0 transition duration-500`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className={slide.contain ? "object-contain p-5" : "object-cover"}
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(7,16,24,0.86),rgba(7,16,24,0))] px-5 pb-5 pt-16 text-white">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                      {slide.caption}
                    </p>
                    <p className="mt-1 text-sm font-semibold leading-5 text-white/92">{slide.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mirror-controls absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-3" aria-label="8K mirror slideshow controls">
              {mirrorSlides.map((slide, index) => {
                const previous = (index - 1 + mirrorSlides.length) % mirrorSlides.length;
                const next = (index + 1) % mirrorSlides.length;
                return (
                  <div key={`controls-${slide.src}`} className={`mirror-control-set mirror-control-set-${index} w-full items-center justify-between`}>
                    <label
                      htmlFor={`mirror-slide-${previous}`}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center bg-[#071018]/80 text-xl font-semibold leading-none text-[#f6d044] transition hover:bg-[#071018]"
                      aria-label="Previous 8K mirror slide"
                    >
                      {"<"}
                    </label>
                    <label
                      htmlFor={`mirror-slide-${next}`}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center bg-[#071018]/80 text-xl font-semibold leading-none text-[#f6d044] transition hover:bg-[#071018]"
                      aria-label="Next 8K mirror slide"
                    >
                      {">"}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mirror-footer flex items-center justify-between border-t border-[#e2d5c3] bg-[#fffaf1] px-5 py-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#111820]">
              8K visual proof
            </p>
            <div className="mirror-dots flex gap-1.5">
              {mirrorSlides.map((slide, index) => (
                <label
                  key={slide.src}
                  htmlFor={`mirror-slide-${index}`}
                  className="h-1.5 w-1.5 cursor-pointer bg-[#c8bba8] transition-all"
                  aria-label={`Show 8K mirror slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AfpRebuildHero() {
  return (
    <>
      <SurfaceBreadcrumbBar title="AFP Anti-Fingerprint Finish Stainless Steel" />
      <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
        <Image
          src="/images/surfaces/afp/hero-diagonal-afp-preview-v1.jpg"
          alt="Anti-fingerprint stainless steel applications in kitchen panels, vacuum bottles, appliances, and AFP samples"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.72] brightness-[0.86] saturate-[0.96] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.56)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Surface release
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.8rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.4rem] lg:text-[2.85rem]">
            Anti-Fingerprint (AFP) Mirror Finish Stainless Steel | Fingerprint-Resistant Steel Supplier
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Enhance your products with our advanced nano anti-fingerprint (AFP) coating. This hydrophobic surface treatment reduces fingerprint marks by 80%+ while maintaining the brilliant mirror reflectivity. Ideal for elevator cabins, kitchen appliances, and high-touch surfaces.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact#pricing-request"
              className="inline-flex min-h-11 items-center bg-[#f6d044] px-5 text-sm font-semibold text-[#111820] transition hover:bg-[#f2c820]"
            >
              Request AFP pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

const afpSlides = [
  {
    src: "/images/surfaces/afp/slideshow/afp-layer-blue-structure.jpeg",
    alt: "Blue protective PVC and AFP resin layer structure over stainless steel",
    caption: "AFP layer structure",
    note: "Protective PVC, AFP resin, stainless steel, and optional back pass",
    contain: true,
  },
  {
    src: "/images/surfaces/afp/slideshow/afp-layer-gold-structure.jpeg",
    alt: "Gold color AFP resin layer structure over No.4 hairline stainless steel",
    caption: "Color AFP structure",
    note: "AFP resin with colored glaze for decorative stainless steel panels",
    contain: true,
  },
  {
    src: "/images/surfaces/afp/slideshow/afp-gloss-testing.jpeg",
    alt: "AFP stainless steel surface gloss testing with gloss meter",
    caption: "Surface gloss testing",
    note: "Gloss inspection before release for visible AFP stainless steel panels",
    contain: true,
  },
  {
    src: "/images/surfaces/afp/slideshow/afp-brushed-color-sample-01.jpeg",
    alt: "AFP brushed stainless steel color sample close-up",
    caption: "Brushed AFP sample",
    note: "Fingerprint-resistant No.4 and colored stainless steel surface options",
    contain: false,
  },
  {
    src: "/images/surfaces/afp/slideshow/afp-brushed-color-sample-02.jpeg",
    alt: "Gold and silver AFP brushed stainless steel sample panels",
    caption: "Color AFP panels",
    note: "Decorative AFP finish for appliance, elevator, and interior panels",
    contain: false,
  },
  {
    src: "/images/surfaces/afp/slideshow/afp-brushed-panel-closeup.jpeg",
    alt: "Close-up of AFP brushed stainless steel panels with clean reflection",
    caption: "Panel close-up",
    note: "Consistent hairline texture with cleaner handling performance",
    contain: false,
  },
  {
    src: "/images/surfaces/afp/slideshow/afp-brushed-wood-reflection.jpeg",
    alt: "AFP brushed stainless steel sample reflecting wood grain surface",
    caption: "Reflection sample",
    note: "Stable satin reflection for decorative high-touch surfaces",
    contain: false,
  },
];

function AfpWhatIsSection() {
  return (
    <section className="bg-[#f7f1e8] px-4 py-9 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] max-w-5xl gap-8 lg:grid-cols-[0.43fr_0.57fr] lg:items-center">
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#111820] sm:text-[2.45rem]">
            What is AFP?
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#4f5864] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] first-letter:uppercase">
            AFP (Anti-Fingerprint) stainless steel uses a transparent nano hydrophobic coating to help resist fingerprints, water marks, oil stains, and daily cleaning traces while keeping mirror, brushed, or hairline stainless steel bright and consistent for high-touch applications.
          </p>
        </div>
        <div className="relative overflow-hidden border border-[#e2d5c3] bg-white shadow-[0_20px_55px_rgba(17,24,32,0.14)]">
          <style>{`
            .afp-slide { opacity: 0; pointer-events: none; transform: scale(1.015); }
            .afp-control-set { display: none; }
            #afp-slide-0:checked ~ .afp-viewport .afp-slides .afp-slide-0,
            #afp-slide-1:checked ~ .afp-viewport .afp-slides .afp-slide-1,
            #afp-slide-2:checked ~ .afp-viewport .afp-slides .afp-slide-2,
            #afp-slide-3:checked ~ .afp-viewport .afp-slides .afp-slide-3,
            #afp-slide-4:checked ~ .afp-viewport .afp-slides .afp-slide-4,
            #afp-slide-5:checked ~ .afp-viewport .afp-slides .afp-slide-5,
            #afp-slide-6:checked ~ .afp-viewport .afp-slides .afp-slide-6 { opacity: 1; pointer-events: auto; transform: scale(1); }
            #afp-slide-0:checked ~ .afp-viewport .afp-controls .afp-control-set-0,
            #afp-slide-1:checked ~ .afp-viewport .afp-controls .afp-control-set-1,
            #afp-slide-2:checked ~ .afp-viewport .afp-controls .afp-control-set-2,
            #afp-slide-3:checked ~ .afp-viewport .afp-controls .afp-control-set-3,
            #afp-slide-4:checked ~ .afp-viewport .afp-controls .afp-control-set-4,
            #afp-slide-5:checked ~ .afp-viewport .afp-controls .afp-control-set-5,
            #afp-slide-6:checked ~ .afp-viewport .afp-controls .afp-control-set-6 { display: flex; }
            #afp-slide-0:checked ~ .afp-footer .afp-dots label[for="afp-slide-0"],
            #afp-slide-1:checked ~ .afp-footer .afp-dots label[for="afp-slide-1"],
            #afp-slide-2:checked ~ .afp-footer .afp-dots label[for="afp-slide-2"],
            #afp-slide-3:checked ~ .afp-footer .afp-dots label[for="afp-slide-3"],
            #afp-slide-4:checked ~ .afp-footer .afp-dots label[for="afp-slide-4"],
            #afp-slide-5:checked ~ .afp-footer .afp-dots label[for="afp-slide-5"],
            #afp-slide-6:checked ~ .afp-footer .afp-dots label[for="afp-slide-6"] { width: 1.25rem; background: #f6d044; }
          `}</style>
          {afpSlides.map((slide, index) => (
            <input
              key={`input-${slide.src}`}
              id={`afp-slide-${index}`}
              type="radio"
              name="afp-slideshow"
              className="sr-only"
              defaultChecked={index === 0}
            />
          ))}
          <div className="afp-viewport relative aspect-[16/10] bg-[#071018]">
            <div className="afp-slides absolute inset-0">
            {afpSlides.map((slide, index) => (
              <div
                key={slide.src}
                className={`afp-slide afp-slide-${index} absolute inset-0 transition duration-500`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(min-width: 1024px) 56vw, 100vw"
                  className={slide.contain ? "object-contain p-5" : "object-cover"}
                />
                <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(7,16,24,0.86),rgba(7,16,24,0))] px-5 pb-5 pt-16 text-white">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    {slide.caption}
                  </p>
                  <p className="mt-1 text-sm font-semibold leading-5 text-white/92">{slide.note}</p>
                </div>
              </div>
            ))}
            </div>
            <div className="afp-controls absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-3" aria-label="AFP slideshow controls">
              {afpSlides.map((slide, index) => {
                const previous = (index - 1 + afpSlides.length) % afpSlides.length;
                const next = (index + 1) % afpSlides.length;
                return (
                  <div key={`controls-${slide.src}`} className={`afp-control-set afp-control-set-${index} w-full items-center justify-between`}>
                    <label
                      htmlFor={`afp-slide-${previous}`}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center bg-[#071018]/80 text-2xl font-semibold leading-none text-[#f6d044] transition hover:bg-[#071018]"
                      aria-label="Previous AFP slide"
                    >
                      {"<"}
                    </label>
                    <label
                      htmlFor={`afp-slide-${next}`}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center bg-[#071018]/80 text-2xl font-semibold leading-none text-[#f6d044] transition hover:bg-[#071018]"
                      aria-label="Next AFP slide"
                    >
                      {">"}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="afp-footer flex items-center justify-between border-t border-[#e2d5c3] bg-[#fffaf1] px-5 py-3">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#111820]">
              AFP visual proof
            </p>
            <div className="afp-dots flex gap-1.5">
              {afpSlides.map((slide, index) => (
                <label
                  key={slide.src}
                  htmlFor={`afp-slide-${index}`}
                  className="h-1.5 w-1.5 cursor-pointer bg-[#c8bba8] transition-all"
                  aria-label={`Show AFP slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const afpComparisonRows = [
  {
    feature: "Fingerprint Visibility",
    without: "Obvious marks, hard to clean",
    with: "80%+ reduction, barely visible",
  },
  {
    feature: "Cleaning Required",
    without: "Metal cleaners needed",
    with: "Just water or soft cloth",
  },
  {
    feature: "Maintenance Cost",
    without: "High",
    with: "Low",
  },
  {
    feature: "Outdoor Durability",
    without: "Fast oxidation",
    with: "Effective moisture isolation",
  },
  {
    feature: "Surface Protection",
    without: "None",
    with: "Anti-scratch and anti-corrosion",
  },
];

function AfpComparisonSection() {
  return (
    <section className="bg-white px-4 py-9 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] max-w-5xl gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
        <div className="overflow-hidden border border-[#ded6ca] bg-[#111111] shadow-[0_18px_48px_rgba(17,24,32,0.14)]">
          <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-3 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                AFP vs Non-AFP
              </h3>
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
              Buyer-focused comparison for fingerprint-resistant stainless steel surfaces
            </p>
          </div>
          <table className="w-full border-collapse text-left text-[0.72rem] sm:text-[0.8rem]">
            <thead>
              <tr className="bg-[#f6d044] text-[#101820]">
                <th className="w-[28%] border-r border-[#111820]/24 px-3 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em]">
                  Feature
                </th>
                <th className="w-[36%] border-r border-[#111820]/24 px-3 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em]">
                  Without AFP
                </th>
                <th className="w-[36%] px-3 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.1em]">
                  With AFP Coating
                </th>
              </tr>
            </thead>
            <tbody>
              {afpComparisonRows.map((row) => (
                <tr key={row.feature} className="border-b border-white/10 last:border-b-0">
                  <th className="border-r border-white/10 px-3 py-3 align-middle font-semibold text-white">
                    {row.feature}
                  </th>
                  <td className="border-r border-white/10 px-3 py-3 align-middle leading-5 text-white/78">
                    {row.without}
                  </td>
                  <td className="px-3 py-3 align-middle leading-5 text-white/88">
                    {row.with}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#111820] sm:text-[2.45rem]">
            AFP vs Non-AFP Comparison
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#4f5864] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] first-letter:uppercase">
            Compare standard stainless steel with AFP anti-fingerprint stainless steel coating for fingerprint resistance, easy cleaning, surface protection, and long-term maintenance. This helps buyers choose the right finish for elevator panels, kitchen appliances, interior wall cladding, and other high-touch decorative stainless steel applications.
          </p>
        </div>
      </div>
    </section>
  );
}

const afpWhyChooseRows = [
  {
    icon: "nano",
    title: "Advanced Nano Technology",
    text: "Premium nano-level resin forms a 10-20 um protective layer, maintaining mirror reflectivity while reducing fingerprint visibility by 80%+.",
  },
  {
    icon: "line",
    title: "In-House Production",
    text: "Our own 380m AFP coating line supports 60MT daily capacity, helping buyers secure consistent quality and faster delivery.",
  },
  {
    icon: "qc",
    title: "Strict Quality Control",
    text: "Adhesion testing, coating thickness verification, surface inspection, and Delta E <= 1-2 color control support stable batch release.",
  },
  {
    icon: "global",
    title: "Global Experience",
    text: "Years of experience supplying North American and European markets make Jinling a reliable AFP stainless steel partner for manufacturers.",
  },
];

function AfpWhyIcon({ type }: { type: string }) {
  if (type === "nano") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M7.5 12.5h9M12 8v9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <circle cx="12" cy="12.5" r="2.7" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="5.5" cy="6" r="1.4" fill="currentColor" />
        <circle cx="18.5" cy="7" r="1.4" fill="currentColor" />
        <circle cx="6.5" cy="18" r="1.4" fill="currentColor" />
        <circle cx="18" cy="17.5" r="1.4" fill="currentColor" />
      </svg>
    );
  }
  if (type === "line") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M4 8h16M4 16h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M7 6v12M17 6v12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M9 12h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "qc") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M12 3.5 18.5 6v5.2c0 4.1-2.6 7.3-6.5 9.3-3.9-2-6.5-5.2-6.5-9.3V6L12 3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="m8.8 12.1 2.1 2.1 4.4-4.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3.8 12h16.4M12 3.8c2.2 2.2 3.3 4.9 3.3 8.2s-1.1 6-3.3 8.2M12 3.8C9.8 6 8.7 8.7 8.7 12s1.1 6 3.3 8.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function AfpWhyChooseUs() {
  return (
    <section className="bg-[#f7f1e8] px-4 py-9 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] max-w-5xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#111820] sm:text-[2.45rem]">
            Why choose us
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.9rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase">
            Choose Jinling for AFP anti-fingerprint stainless steel with advanced nano coating technology, in-house coating capacity, strict surface quality control, and proven export supply for elevator panels, kitchen appliances, decorative wall panels, and high-touch stainless steel products.
          </p>
        </div>
        <div className="grid gap-3">
          {afpWhyChooseRows.map((item, index) => (
            <div
              key={item.title}
              className="grid min-h-[4.75rem] grid-cols-[3.25rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_30px_rgba(17,24,32,0.06)]"
            >
              <div className={index % 2 === 0 ? "flex items-center justify-center bg-[#f6d044] text-[#111820]" : "flex items-center justify-center bg-[#0d141b] text-[#f6d044]"}>
                <AfpWhyIcon type={item.icon} />
              </div>
              <div className="px-4 py-3">
                <h3 className="text-[0.9rem] font-semibold leading-5 text-[#111820]">
                  {item.title}
                </h3>
                <p className="mt-1 text-[0.8rem] leading-5 text-[#4f5864]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AfpTechnologyVideo() {
  return (
    <section className="bg-[#071018] px-4 py-8 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] w-full max-w-5xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] text-white sm:text-[2.5rem]">
            The Science Behind AFP Technology
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/70 first-letter:float-left first-letter:mr-2 first-letter:text-[2.9rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#f6d044] first-letter:uppercase sm:text-base">
            Our nano-level coating creates a hydrophobic barrier that repels fingerprints, oil, and water while preserving the brilliant mirror finish. Discover how this technology transforms high-touch stainless steel surfaces for elevator cabins, kitchen appliances, decorative panels, and daily-use products.
          </p>
        </div>
        <div className="border border-white/12 bg-[#101820] p-3 shadow-[0_22px_54px_rgba(0,0,0,0.28)]">
          <VideoEmbed
            youtubeId="sVueW72-az4"
            title="The Science Behind AFP Technology video"
            className="[&_div]:rounded-none"
          />
        </div>
      </div>
    </section>
  );
}

const afpApplicationLinks = [
  {
    title: "Kitchen Equipment",
    description:
      "AFP stainless steel keeps appliance fronts, kitchen panels, counters, and high-touch surfaces cleaner with easier daily maintenance.",
    href: "/solutions/applications/kitchen-equipment",
    image: "/images/surfaces/afp/applications/afp-kitchen-equipment-v2.jpg",
  },
  {
    title: "Elevator & Interiors",
    description:
      "Anti-fingerprint coating helps elevator cabins, door panels, lobby walls, and interior decorative panels resist visible handling marks.",
    href: "/solutions/applications/elevator-decoration",
    image: "/images/surfaces/afp/applications/afp-elevator-interiors-v2.jpg",
  },
  {
    title: "Architecture",
    description:
      "Fingerprint-resistant stainless steel supports architectural cladding, wall panels, ceilings, and public-space metal decoration.",
    href: "/solutions/applications/architecture",
    image: "/images/surfaces/afp/applications/afp-architecture-v2.jpg",
  },
  {
    title: "Food & Beverage",
    description:
      "AFP surfaces are useful for visible equipment housings, drinkware, display areas, and non-food-contact stainless steel components.",
    href: "/solutions/applications/food-beverage",
    image: "/images/surfaces/afp/applications/afp-food-beverage-v2.jpg",
  },
] as const;

function AfpApplicationsShowcase() {
  return (
    <section className="bg-[#f7f2e8] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-7 lg:grid-cols-[minmax(0,1.14fr)_minmax(18rem,18rem)] lg:items-center">
        <div className="order-2 grid min-w-0 grid-cols-2 gap-2.5 sm:grid-cols-4 lg:order-1 lg:gap-3">
          {afpApplicationLinks.map((application) => (
            <Link
              key={application.title}
              href={application.href}
              className="group relative isolate block w-full overflow-hidden border border-[#d8b94a] bg-[#101820] shadow-[0_16px_34px_rgba(13,20,27,0.12)] outline-none transition duration-300 hover:z-10 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(13,20,27,0.18)] focus-visible:z-10 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src={application.image}
                alt={`${application.title} application for AFP anti-fingerprint stainless steel`}
                fill
                sizes="(min-width: 1024px) 15vw, 45vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.12] group-focus-visible:scale-[1.12]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.72)_0%,rgba(13,20,27,0.10)_34%,rgba(13,20,27,0.74)_100%)]" aria-hidden="true" />
              <div className="absolute inset-x-0 top-0 z-10 p-2.5 text-center sm:p-3">
                <h3 className="text-[0.76rem] font-semibold leading-4 tracking-[0.01em] text-white sm:text-[0.86rem] lg:text-[0.78rem] xl:text-[0.86rem]">
                  {application.title}
                </h3>
              </div>
              <div className="absolute inset-0 z-20 flex translate-y-3 items-center justify-center bg-[#101820]/90 px-3 text-left opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:px-3.5">
                <div className="w-full max-w-[9.5rem]">
                  <h3 className="text-[0.82rem] font-semibold leading-4 text-white sm:text-[0.9rem]">
                    {application.title}
                  </h3>
                  <p className="mt-2.5 text-[0.68rem] font-medium leading-[1.5] text-white/78 sm:text-[0.72rem]">
                    {application.description}
                  </p>
                  <span className="mt-3.5 inline-flex min-h-8 items-center bg-[#f6d044] px-3 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#101820] transition group-hover:bg-[#f2c820]">
                    Read more
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="order-1 flex min-w-0 flex-col justify-center lg:order-2 lg:pl-4">
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
            <span className="whitespace-nowrap">Anti-fingerprint</span> applications
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] sm:text-[0.96rem]">
            Explore AFP anti-fingerprint stainless steel applications for kitchen equipment, elevator interiors, architectural decoration, and food and beverage equipment surfaces. The nano coating helps reduce fingerprints, oil marks, water stains, and cleaning work on high-touch stainless steel panels.
          </p>
        </div>
      </div>
    </section>
  );
}
const mirrorFinishRows = [
  {
    type: "8K Mirror Finish",
    gloss: ">=800 GU @20deg",
    ra: "<=0.08 um",
    applications: "Elevator panels, decorative walls, signage, kitchen panels",
  },
  {
    type: "Super 8K Finish",
    gloss: ">=1100 GU @20deg",
    ra: "<=0.05 um",
    applications: "Premium interiors, hotel panels, retail display, ceiling cladding",
  },
  {
    type: "10K Ultra Mirror",
    gloss: ">=1400 GU @20deg",
    ra: "<=0.03 um",
    applications: "Luxury interiors, high-end elevator cabins, art walls, PVD mirror base",
  },
];

function MirrorFinishComparison() {
  return (
    <section className="bg-[#f7f1e8] px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] max-w-5xl gap-7 lg:grid-cols-[0.64fr_0.36fr] lg:items-center">
        <div className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
          <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2.5 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                Mirror Finish Grades
              </h3>
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
              Typical Jinling QC targets for 8K, Super 8K, and 10K mirror stainless steel
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-[0.68rem] sm:text-[0.74rem]">
            <thead>
              <tr className="bg-[#f6d044] text-[#101820]">
                <th className="w-[24%] border-r border-[#111820]/24 px-2.5 py-2 text-center text-[0.62rem] font-semibold uppercase tracking-[0.1em] sm:px-3">
                  Finish Type
                </th>
                <th className="w-[22%] border-r border-[#111820]/24 px-2.5 py-2 text-center text-[0.62rem] font-semibold uppercase tracking-[0.1em] sm:px-3">
                  Gloss Level
                </th>
                <th className="w-[18%] border-r border-[#111820]/24 px-2.5 py-2 text-center text-[0.62rem] font-semibold uppercase tracking-[0.1em] sm:px-3">
                  Typical Ra
                </th>
                <th className="px-2.5 py-2 text-center text-[0.62rem] font-semibold uppercase tracking-[0.1em] sm:px-3">
                  Applications
                </th>
              </tr>
            </thead>
            <tbody>
              {mirrorFinishRows.map((row) => (
                <tr key={row.type} className="bg-[#111111]">
                  <th className="border-r border-t border-white/14 px-2.5 py-1.5 text-left align-middle font-semibold leading-[1.25] text-white sm:px-3">
                    {row.type}
                  </th>
                  <td className="border-r border-t border-white/14 px-2.5 py-2 text-center font-semibold leading-5 text-[#f6d044] sm:px-3">
                    {row.gloss}
                  </td>
                  <td className="border-r border-t border-white/14 px-2.5 py-2 text-center font-semibold leading-5 text-white sm:px-3">
                    {row.ra}
                  </td>
                  <td className="border-t border-white/14 px-2.5 py-1.5 leading-[1.25] text-white/78 sm:px-3">
                    {row.applications}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="border-t border-white/14 px-4 py-2.5 text-[0.66rem] leading-4 text-white/58">
            Gloss level is measured at 20deg where required. 8K, Super 8K, and 10K are commercial mirror-polish grades; final acceptance should follow approved samples, Ra / gloss reports, and visible defect inspection.
          </p>
        </div>
        <div>
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.45rem]">
            Mirror finish grade comparison
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] first-letter:uppercase sm:text-[0.96rem]">
            Compare 8K mirror finish stainless steel, Super 8K finish, and 10K ultra mirror stainless steel sheet and coil by gloss level, typical Ra, and application before confirming mirror polished panels for elevators, decorative wall cladding, hotel interiors, retail display, and PVD mirror projects.
          </p>
        </div>
      </div>
    </section>
  );
}
const mirrorSpecificationRows = [
  {
    item: "Finish Grade",
    standard: ["No.8 (Standard 8K) [ASTM A480]", "Super No.8 / No.10 / No.12 (Premium)"],
    optional: ["Nano AFP Coating (Anti-Fingerprint)", "Color PVD Coating (Gold, Rose Gold, Black)"],
  },
  {
    item: "Material Grade",
    standard: ["304 & 304L (Standard corrosion resistant)", "316L (Marine / Coastal)", "430 (Indoor / Economic)", "201 (Budget-friendly)"],
    optional: [],
  },
  {
    item: "Surface Roughness (Ra)",
    standard: ["Standard 8K: <= 0.05 um", "Super 8K: <= 0.03 um", "[ISO 4287 / ASME B46.1]"],
    optional: [],
  },
  {
    item: "Glossiness (Gu)",
    standard: ["> 800 Gu (at 60deg)", "[ISO 2813 / ASTM D523]"],
    optional: [],
  },
  {
    item: "Thickness",
    standard: ["Cold Rolled: 0.5mm - 3.0mm", "Hot Rolled (HRAP): 3.0mm - 12.0mm", "[ASTM A480 / A666]"],
    optional: [],
  },
  {
    item: "Width",
    standard: ["Standard: 1000mm / 1219mm (4ft)", "Extra Wide: 1524mm (5ft / 60in)"],
    optional: ["Cut-to-Length / Precision Slitting"],
  },
  {
    item: "Applicable Standards",
    standard: ["ASTM A480 (Primary)", "ASTM A666, EN 10088, JIS G 4305"],
    optional: [],
  },
  {
    item: "Protective Film",
    standard: ["Standard"],
    optional: ["Novacel 4318 (Laser), 4273 (AFP), Polifilm"],
  },
];

function MirrorTechnicalSpecification() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] max-w-5xl gap-7 lg:grid-cols-[0.64fr_0.36fr] lg:items-center">
        <div className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
          <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2.5 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                Technical Specifications
              </h3>
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
              8K mirror stainless steel sheet and coil specification range
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-[0.64rem] sm:text-[0.7rem]">
            <thead>
              <tr className="bg-[#f6d044] text-[#101820]">
                <th className="w-[26%] border-r border-[#111820]/24 px-2.5 py-2 text-center text-[0.62rem] font-semibold uppercase tracking-[0.1em] sm:px-3">
                  Specification
                </th>
                <th className="w-[42%] border-r border-[#111820]/24 px-2.5 py-2 text-center text-[0.62rem] font-semibold uppercase tracking-[0.1em] sm:px-3">
                  Standard / Range
                </th>
                <th className="px-2.5 py-2 text-center text-[0.62rem] font-semibold uppercase tracking-[0.1em] sm:px-3">
                  Optional Enhancements
                </th>
              </tr>
            </thead>
            <tbody>
              {mirrorSpecificationRows.map((row) => (
                <tr key={row.item} className="bg-[#111111] align-middle">
                  <th className="border-r border-t border-white/14 px-2.5 py-1.5 text-left align-middle font-semibold leading-[1.25] text-white sm:px-3">
                    {row.item}
                  </th>
                  <td className="border-r border-t border-white/14 px-2.5 py-1.5 leading-[1.25] text-white/78 sm:px-3">
                    <div className="grid gap-0.5">
                      {row.standard.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </div>
                  </td>
                  <td className="border-t border-white/14 px-2.5 py-1.5 leading-[1.25] text-white/78 sm:px-3">
                    {row.optional.length ? (
                      <div className="grid gap-0.5">
                        {row.optional.map((line) => (
                          <span key={line}>{line}</span>
                        ))}
                      </div>
                    ) : (
                      <span className="text-white/30">-</span>
                    )}
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
            Review 8K mirror finish stainless steel sheet and coil specifications, including No.8 mirror grade, 304, 316L, 430, and 201 material options, Ra surface roughness, glossiness, thickness, width, protective film, AFP coating, and PVD color coating for elevator panels, decorative wall cladding, hotel interiors, and premium architectural projects.
          </p>
        </div>
      </div>
    </section>
  );
}
const mirrorWhyChooseRows = [
  {
    icon: "capacity",
    text: "1000+ tons monthly output for stable 8K mirror stainless steel sheet and coil supply.",
  },
  {
    icon: "qc",
    text: "North American quality standard with expert QC for gloss, haze, scratches, pinholes, and film protection.",
  },
  {
    icon: "gauge",
    text: "Heavy-gauge mirror polishing capability up to 12mm for stainless steel sheet and plate projects.",
  },
  {
    icon: "width",
    text: "5-feet extra-wide processing up to 1524mm for elevator panels, wall cladding, and large decorative sheets.",
  },
];

function MirrorProofIcon({ type }: { type: string }) {
  const common = "h-7 w-7";

  if (type === "capacity") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M7 22h18M9 18h14M11 14h10M13 10h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 25h20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "qc") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4l10 5v8c0 5.8-4.1 9.3-10 11-5.9-1.7-10-5.2-10-11V9l10-5z" stroke="currentColor" strokeWidth="2" />
        <path d="M11 16l3 3 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "gauge") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 9h16M8 23h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M16 11v10M12 14l4-4 4 4M12 18l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="6" y="10" width="20" height="12" rx="1.5" stroke="currentColor" strokeWidth="2" />
      <path d="M10 16h12M10 16l3-3M10 16l3 3M22 16l-3-3M22 16l-3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MirrorWhyChooseUs() {
  return (
    <section className="flex bg-[#f7f2e8] px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:items-center lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.5rem]">
            Why choose us
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5f6872] first-letter:float-left first-letter:mr-2 first-letter:text-[2.9rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase sm:text-base">
            Choose Jinling for 8K mirror finish stainless steel sheet and coil with stable capacity, expert surface QC, heavy-gauge polishing, and extra-wide 1524mm processing for elevator panels, decorative wall cladding, hotel interiors, retail display, and premium architectural projects.
          </p>
        </div>
        <ol className="grid gap-2.5">
          {mirrorWhyChooseRows.map((point, index) => (
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
                <MirrorProofIcon type={point.icon} />
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
function MirrorProcessingVideo() {
  return (
    <section className="bg-[#071018] px-4 py-8 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] w-full max-w-5xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] text-white sm:text-[2.5rem]">
            8K mirror finish processing
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/70 first-letter:float-left first-letter:mr-2 first-letter:text-[2.9rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#f6d044] first-letter:uppercase sm:text-base">
            Watch the 8K mirror finish stainless steel processing route, from mirror polishing and surface refinement to gloss inspection, protective film application, and export-ready packing. This video helps buyers understand how No.8 mirror polished stainless steel sheet and coil are prepared for elevator panels, decorative wall cladding, hotel interiors, retail display, and premium architectural projects.
          </p>
        </div>
        <div className="border border-white/12 bg-[#101820] p-3 shadow-[0_22px_54px_rgba(0,0,0,0.28)]">
          <VideoEmbed
            youtubeId="6uuisoXzwig"
            title="8K mirror finish stainless steel processing video"
            className="[&_div]:rounded-none"
          />
        </div>
      </div>
    </section>
  );
}
const mirrorApplicationLinks = [
  {
    title: "Elevator & Decoration",
    description:
      "8K mirror stainless steel panels create clean reflection, premium elevator cabins, lobby walls, and decorative interior surfaces.",
    href: "/solutions/applications/elevator-decoration",
    image: "/images/surfaces/no8-mirror/applications/elevator-decoration.jpg",
  },
  {
    title: "Architecture",
    description:
      "Mirror polished stainless steel sheet supports architectural cladding, feature walls, sculptural panels, and high-impact public spaces.",
    href: "/solutions/applications/architecture",
    image: "/images/surfaces/no8-mirror/applications/architecture.jpg",
  },
  {
    title: "Kitchen Equipment",
    description:
      "Reflective stainless steel surfaces suit appliance panels, premium kitchen fronts, counters, cabinets, and visible decorative equipment.",
    href: "/solutions/applications/kitchen-equipment",
    image: "/images/surfaces/no8-mirror/applications/kitchen-equipment.jpg",
  },
  {
    title: "Retail Display & Signage",
    description:
      "Super mirror stainless steel adds depth, brightness, and luxury impact to retail displays, signage, shelves, and exhibition interiors.",
    href: "/solutions/applications/architecture",
    image: "/images/surfaces/no8-mirror/applications/retail-display-signage.jpg",
  },
] as const;

function MirrorApplicationsShowcase() {
  return (
    <section className="bg-[#f7f2e8] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-7 lg:grid-cols-[minmax(0,1.14fr)_minmax(18rem,18rem)] lg:items-center">
        <div className="order-2 grid min-w-0 grid-cols-2 gap-2.5 sm:grid-cols-4 lg:order-1 lg:gap-3">
          {mirrorApplicationLinks.map((application) => (
            <Link
              key={application.title}
              href={application.href}
              className="group relative isolate block w-full overflow-hidden border border-[#d8b94a] bg-[#101820] shadow-[0_16px_34px_rgba(13,20,27,0.12)] outline-none transition duration-300 hover:z-10 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(13,20,27,0.18)] focus-visible:z-10 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#f6d044]" style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src={application.image}
                alt={`${application.title} application for 8K mirror stainless steel`}
                fill
                sizes="(min-width: 1024px) 15vw, 45vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.12] group-focus-visible:scale-[1.12]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.74)_0%,rgba(13,20,27,0.12)_34%,rgba(13,20,27,0.72)_100%)]" aria-hidden="true" />
              <div className="absolute inset-x-0 top-0 z-10 p-2.5 text-center sm:p-3">
                <h3 className="text-[0.76rem] font-semibold leading-4 tracking-[0.01em] text-white sm:text-[0.86rem] lg:text-[0.78rem] xl:text-[0.86rem]">
                  {application.title}
                </h3>
              </div>
              <div className="absolute inset-0 z-20 flex translate-y-3 items-center justify-center bg-[#101820]/90 px-3 text-left opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:px-3.5">
                <div className="w-full max-w-[9.5rem]">
                  <h3 className="text-[0.82rem] font-semibold leading-4 text-white sm:text-[0.9rem]">
                    {application.title}
                  </h3>
                  <p className="mt-2.5 text-[0.68rem] font-medium leading-[1.5] text-white/78 sm:text-[0.72rem]">
                    {application.description}
                  </p>
                  <span className="mt-3.5 inline-flex min-h-8 items-center bg-[#f6d044] px-3 text-[0.66rem] font-semibold uppercase tracking-[0.1em] text-[#101820] transition group-hover:bg-[#f2c820]">
                    Read more
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="order-1 flex min-w-0 flex-col justify-center lg:order-2 lg:pl-4">
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
            Mirror finish applications
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] sm:text-[0.96rem]">
            Explore 8K mirror finish stainless steel applications for elevator decoration, architectural cladding, premium kitchen equipment, retail display, and signage projects, with each route linked to the application guidance buyers need before selecting mirror polished sheet or coil.
          </p>
        </div>
      </div>
    </section>
  );
}

const afpRelatedArticles = [
  {
    name: "Which Finish Works Best for Kitchen Equipment: 2B, No.4, or AFP?",
    href: "/knowledge-base/2b-vs-no4-vs-afp-kitchen-equipment",
    image: "/images/surfaces/afp/applications/afp-kitchen-equipment-v2.jpg",
    excerpt:
      "Compare 2B, No.4 brushed, and AFP anti-fingerprint stainless steel for kitchen equipment panels, appliance fronts, cleaning, and appearance.",
  },
  {
    name: "When Is AFP Over Mirror Worth the Cost?",
    href: "/knowledge-base/afp-over-mirror-when-worth-it",
    image: "/images/surfaces/afp/slideshow/afp-brushed-color-sample-02.jpeg",
    excerpt:
      "A buyer-focused guide to choosing AFP coating over mirror stainless steel for high-touch elevator, appliance, and interior surfaces.",
  },
  {
    name: "How We Caught a Bad AFP Resin Before It Shipped",
    href: "/knowledge-base/how-we-caught-a-bad-afp-resin-before-it-shipped",
    image: "/images/surfaces/afp/slideshow/afp-gloss-testing.jpeg",
    excerpt:
      "See how AFP resin quality control, adhesion checks, gloss testing, and surface inspection help prevent coating problems before delivery.",
  },
] as const;

function AfpRelatedArticles() {
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
            {afpRelatedArticles.map((item) => (
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
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(6.25rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
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

const mirrorRelatedArticles = [
  {
    name: "How Do I Accept or Reject a Mirror Finish Sheet?",
    href: "/knowledge-base/mirror-finish-acceptance-haze-gloss-pinhole",
    image: "/images/surfaces/no8-mirror/hero-ai-8k-mirror-logical-v2.png",
    excerpt:
      "Mirror finish acceptance guidance for haze, gloss, pinholes, scratches, reflection clarity, and visible surface defects before shipment.",
  },
  {
    name: "How Should Mirror Stainless Be Packed to Prevent Scratches?",
    href: "/knowledge-base/mirror-finish-packaging-scratch-prevention",
    image: "/images/surfaces/no8-mirror/applications/retail-display-signage.jpg",
    excerpt:
      "Protective film, face protection, edge guards, packing photos, and handling details that reduce claims on mirror polished stainless steel.",
  },
  {
    name: "Why Our 8K Mirror Stainless Steel Line Runs at 2 Metres a Minute",
    href: "/knowledge-base/why-mirror-line-runs-at-2-metres-per-minute",
    image: "/images/surfaces/no8-mirror/applications/elevator-decoration.jpg",
    excerpt:
      "A buyer-focused look at controlled mirror polishing speed, surface stability, low haze, and consistent 8K stainless steel reflection quality.",
  },
] as const;

function MirrorRelatedArticles() {
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
            {mirrorRelatedArticles.map((item) => (
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
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(6.25rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
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

const no4RelatedArticles = [
  {
    name: "How to Choose No.4 Brushed Stainless Steel for Appliances and Interiors",
    href: "/knowledge-base/how-to-choose-no4-brushed-stainless-steel",
    image: "/images/surfaces/no4-brushed/hero-no4-brushed-banner.jpg",
    excerpt:
      "A buyer guide to grit range, satin grain direction, protective film, and brushed stainless steel sheet selection for visible panels.",
  },
  {
    name: "2B vs No.4 vs AFP: Which Finish Works Best for Kitchen Equipment?",
    href: "/knowledge-base/2b-vs-no4-vs-afp-kitchen-equipment",
    image: "/images/surfaces/afp/applications/afp-kitchen-equipment-v2.jpg",
    excerpt:
      "Compare 2B, No.4 brushed, and AFP anti-fingerprint stainless steel for appliance fronts, cleaning, handling, and appearance.",
  },
  {
    name: "How Protective Film Reduces Scratches on Brushed Stainless Steel",
    href: "/knowledge-base/brushed-stainless-steel-protective-film",
    image: "/images/surfaces/no8-mirror/applications/elevator-decoration.jpg",
    excerpt:
      "See how laser film, packing, and handling controls protect No.4 brushed stainless steel sheets during fabrication and delivery.",
  },
] as const;

function No4RelatedArticles() {
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
            {no4RelatedArticles.map((item) => (
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
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(6.25rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
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

const hairlineRelatedArticles = [
  {
    name: "No.4 vs Hairline Finish: Which Brushed Stainless Steel Surface Should You Choose?",
    href: "/knowledge-base/no4-vs-hairline-finish",
    image: "/images/generated/knowledge-base/no4-vs-hairline-finish/comparison-ai-v1.webp",
    excerpt:
      "Compare No.4 brushed and hairline stainless steel by grain length, reflection, application, and visual matching requirements.",
  },
  {
    name: "Architectural Stainless Steel Surface Selection for Interior Panels",
    href: "/knowledge-base/architectural-ss-surface-selection",
    image: "/images/surfaces/hairline/hero-hairline-banner.jpg",
    excerpt:
      "A practical guide to selecting hairline, No.4, mirror, AFP, and colored stainless steel finishes for visible architectural use.",
  },
  {
    name: "How Protective Film Reduces Scratches on Brushed Stainless Steel",
    href: "/knowledge-base/brushed-stainless-steel-protective-film",
    image: "/images/surfaces/no8-mirror/applications/elevator-decoration.jpg",
    excerpt:
      "Learn how laser PVC, PE film, Novacel, packing, and handling controls protect brushed and hairline stainless steel sheets.",
  },
] as const;

const twoBRelatedArticles = [
  {
    name: "2B vs No.4 vs AFP: Which Finish Works Best for Kitchen Equipment?",
    href: "/knowledge-base/2b-vs-no4-vs-afp-kitchen-equipment",
    image: "/images/surfaces/2b/hero-2b-finish-banner-textless.jpeg",
    excerpt:
      "Compare 2B, No.4 brushed, and AFP anti-fingerprint stainless steel for appliance panels, cleaning needs, fabrication, and appearance.",
  },
  {
    name: "How to Choose Stainless Steel Sheet for Laser Cutting and Bending",
    href: "/knowledge-base/stainless-steel-sheet-laser-cutting-bending",
    image: "/images/surfaces/no4-brushed/hero-no4-brushed-banner.jpg",
    excerpt:
      "A practical buyer guide to flatness, thickness tolerance, spring-back control, protective film, and 2B stainless steel sheet selection.",
  },
  {
    name: "Cold Rolled vs Hot Rolled Stainless Steel Sheet: What Buyers Should Check",
    href: "/knowledge-base/cold-rolled-vs-hot-rolled-stainless-steel-sheet",
    image: "/images/surfaces/hairline/hero-hairline-banner.jpg",
    excerpt:
      "Understand cold rolled 2B surface quality, hot rolled thickness range, flatness, tolerance, and downstream fabrication requirements.",
  },
] as const;

function TwoBRelatedArticles() {
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
            {twoBRelatedArticles.map((item) => (
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
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(6.25rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
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

function HairlineRelatedArticles() {
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
            {hairlineRelatedArticles.map((item) => (
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
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(6.25rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
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
export default async function SurfacePage({ params }: Props) {
  const { slug } = await params;
  const content = await getContent("surfaces", slug);
  if (!content) notFound();
  const isMirrorPage = slug === "stainless-steel-8k-mirror-finish";
  const isAfpPage = slug === "stainless-steel-afp-finish";
  const isNo4Page = slug === "stainless-steel-no4-brushed-finish";
  const isHairlinePage = slug === "stainless-steel-hairline-finish";
  const isTwoBPage = slug === "stainless-steel-2b-finish";
  const isBaPage = slug === "stainless-steel-ba-finish";
  if (isBaPage) {
    return (
        <>
          <BaRebuildHero />
          <BaSpecificationsSection />
          <BaProcessingFlowSection />
          <BaWhyChooseUsSection />
          {SHOW_COMMERCIAL_RELATED_ARTICLES ? <BaRelatedArticles /> : null}
        </>
      );
    }
  if (isAfpPage) {
    return (
      <>
        <AfpRebuildHero />
        <AfpWhatIsSection />
        <AfpComparisonSection />
        <AfpWhyChooseUs />
        <AfpTechnologyVideo />
        <AfpApplicationsShowcase />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <AfpRelatedArticles /> : null}
      </>
    );
  }
  if (isNo4Page) {
    return (
      <>
        <No4RebuildHero />
        <No4SpecificationsSection />
        <No4ProcessingFlowSection />
        <No4WhyChooseUsSection />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <No4RelatedArticles /> : null}
      </>
    );
  }
  if (isTwoBPage) {
    return (
      <>
        <TwoBRebuildHero />
        <TwoBSpecificationsSection />
        <TwoBProcessingFlowSection />
        <TwoBWhyChooseUsSection />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <TwoBRelatedArticles /> : null}
      </>
    );
  }
  if (isHairlinePage) {
    return (
      <>
        <HairlineRebuildHero />
        <HairlineSpecificationsSection />
        <HairlineProcessingFlowSection />
        <HairlineWhyChooseUsSection />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <HairlineRelatedArticles /> : null}
      </>
    );
  }
  if (isMirrorPage) {
    return (
      <>
        <MirrorRebuildHero />
        <MirrorWhatIsSection />
        <MirrorFinishComparison />
        <MirrorTechnicalSpecification />
        <MirrorWhyChooseUs />
        <MirrorProcessingVideo />
        <MirrorApplicationsShowcase />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <MirrorRelatedArticles /> : null}
      </>
    );
  }
  const surfaceVisualGallery = isMirrorPage
    ? undefined
    : getSurfaceVisualGallery(slug);
  const surfaceDecisionConfig = getSurfaceDecisionConfig(slug);
  const sidebarConfig = SURFACE_SIDEBAR_CONFIG[slug];

  const related = getContentList("surfaces")
    .filter((p) => p.slug !== slug)
    .map((p) => ({ name: p.title, href: `/surfaces/${p.slug}` }));

  return (
    <ContentPage
      title={content.title}
      description={content.description}
      htmlContent={content.htmlContent}
      variant="surface"
      pageUrl={`/surfaces/${slug}`}
      structuredData={[
        buildArticleSchema({
          title: content.title,
          description: content.description,
          pageUrl: `/surfaces/${slug}`,
          imageUrl: content.heroImage,
          type: "TechArticle",
          articleSection: "Stainless Steel Surface Finish",
          author: content.author,
          reviewedBy: content.reviewedBy,
          publishedAt: content.publishedAt,
        }),
      ]}
      breadcrumbs={[
        { label: "Surfaces", href: "/surfaces" },
        { label: content.title },
      ]}
      relatedItems={sidebarConfig?.items ?? related}
      relatedTitle={sidebarConfig?.relatedTitle ?? "Other Finishes"}
      ctaHeading={
        sidebarConfig?.ctaHeading ?? "Need finish guidance, samples, or process advice?"
      }
      ctaText={sidebarConfig?.ctaText ?? "Ask a Technical Question"}
      ctaHref="/contact#technical-review"
      ctaSecondaryText={sidebarConfig?.ctaSecondaryText}
      ctaSecondaryHref={sidebarConfig?.ctaSecondaryHref}
      heroImage={content.heroImage}
      heroStats={content.heroStats}
      author={content.author}
      reviewedBy={content.reviewedBy}
      publishedAt={content.publishedAt}
      beforeExpertContent={
        surfaceVisualGallery || surfaceDecisionConfig ? (
          <div className="grid gap-5 sm:gap-6">
            {surfaceVisualGallery && (
              <VisualProofGallery config={surfaceVisualGallery} />
            )}
            {surfaceDecisionConfig && (
              <SurfaceDecisionPanel config={surfaceDecisionConfig} />
            )}
          </div>
        ) : undefined
      }
      afterContent={
        isMirrorPage ? (
          <MirrorFlagshipHub />
        ) : undefined
      }
    />
  );
}
