import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import HomeKeyFigures from "@/components/home/HomeKeyFigures";
import HomeWhyChooseUs from "@/components/home/HomeWhyChooseUs";
import { getContentList } from "@/lib/content";
import { latestMarketReportSlugs } from "@/lib/market-insight-groups";

export const metadata: Metadata = {
  title: "Stainless Steel Supplier in China | 8K Mirror, AFP, Sheet, Coil & Tube",
  description:
    "Jinling Metals supplies stainless steel sheet, coil, tube, pipe, 8K mirror finish, AFP anti-fingerprint stainless steel, surface finishing, processing, packing, and market insight for global buyers.",
  alternates: {
    canonical: "/",
  },
};

const heroHighlights = [
  {
    cta: "Explore 8K Mirror Finish",
    title: "8K Mirror Stainless Steel",
    summary: "High-reflectivity decorative stainless steel for visible surfaces.",
    description:
      "High-reflective stainless steel sheet for decorative panels, elevators, interiors, appliances, signage, and premium metal design.",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
    image: "/images/hero/home-8k-mirror-highlight.jpeg",
    imagePosition: "object-[center_30%]",
    imageAlt:
      "8K mirror stainless steel sheet with high reflective surface for decorative panels and interiors",
  },
  {
    cta: "Explore AFP Finish",
    title: "AFP Anti-Fingerprint Stainless Steel",
    summary: "Fingerprint-resistant coated stainless steel for touch zones.",
    description:
      "Anti-fingerprint stainless steel for high-touch surfaces, appliance panels, cabinet doors, elevator interiors, and visible decorative applications.",
    href: "/surfaces/stainless-steel-afp-finish",
    image: "/images/hero/home-afp-highlight.jpeg",
    imagePosition: "object-[center_48%]",
    imageAlt:
      "AFP anti-fingerprint stainless steel sheet for appliance panels and high-touch decorative surfaces",
  },
] as const;

const buyerNeedRoutes = [
  {
    need: "I Need Stainless Steel by Product Form",
    label: "Product Forms",
    description:
      "Start here when you already know the stainless steel form: coil, sheet, plate, tube, pipe, or bar for manufacturing, distribution, fabrication, or project supply.",
    image: "/images/hero/products-hero.jpg",
    imageAlt: "Stainless steel product forms including coil sheet tube pipe and bar",
    imagePosition: "object-[center_52%]",
    links: [
      { label: "Stainless Steel Coil", href: "/products/stainless-steel-coil" },
      { label: "Stainless Steel Sheet & Plate", href: "/products/stainless-steel-sheet" },
      { label: "Stainless Steel Tube & Pipe", href: "/products/stainless-steel-tube-pipe" },
      { label: "Stainless Steel Bar", href: "/products/stainless-steel-bar" },
    ],
  },
  {
    need: "I Need a Surface Finish for Visible Panels",
    label: "Surface Finishes",
    description:
      "Use this route for decorative stainless steel surfaces, elevator panels, appliance skins, interior metalwork, high-touch areas, and surface-focused applications.",
    image: "/images/hero/home-8k-mirror-highlight.jpeg",
    imageAlt: "8K mirror stainless steel and decorative surface finish navigation",
    imagePosition: "object-[center_48%]",
    links: [
      { label: "8K Mirror Finish", href: "/surfaces/stainless-steel-8k-mirror-finish" },
      { label: "AFP Anti-Fingerprint", href: "/surfaces/stainless-steel-afp-finish" },
      { label: "Hairline Finish", href: "/surfaces/stainless-steel-hairline-finish" },
      { label: "All Surface Finishes", href: "/surfaces" },
    ],
  },
  {
    need: "I Need the Right Grade for My Environment",
    label: "Grade Selection",
    description:
      "Choose by corrosion risk, wet exposure, chloride conditions, cost target, fabrication method, and whether the material needs 304, 316L, 430, or duplex stainless steel.",
    image: "/images/grades/316l-stainless-steel/hero-316l-rebuild.jpg",
    imageAlt: "Stainless steel grade selection for corrosion resistance and application environment",
    imagePosition: "object-[center_50%]",
    links: [
      { label: "304 Stainless Steel", href: "/grades/304-stainless-steel" },
      { label: "316L Stainless Steel", href: "/grades/316l-stainless-steel" },
      { label: "430 Stainless Steel", href: "/grades/430-stainless-steel" },
      { label: "2205 Duplex Stainless Steel", href: "/grades/2205-duplex-stainless-steel" },
    ],
  },
  {
    need: "I Need Processing, Film, or Export Packing",
    label: "Processing & Packing",
    description:
      "For buyers who need cut-to-length, slitting, edging, protective film, export packing, batch control, and delivery support before shipment.",
    image: "/images/capabilities/packaging-logistics/hero.jpg",
    imageAlt: "Stainless steel processing protective film export packing and logistics support",
    imagePosition: "object-[center_48%]",
    links: [
      { label: "Cut-to-Length", href: "/solutions/capabilities/cut-to-length" },
      { label: "Slitting & Edging", href: "/solutions/capabilities/slitting-edging" },
      { label: "Protective Film", href: "/solutions/capabilities/protective-film" },
      { label: "Packaging & Logistics", href: "/solutions/capabilities/packaging-logistics" },
    ],
  },
] as const;

type InsightArticle = ReturnType<typeof getContentList>[number];

function getLatestHomeMarketReports() {
  const articles = getContentList("insights");

  return latestMarketReportSlugs
    .slice(0, 3)
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article): article is InsightArticle => Boolean(article));
}

function formatDate(value?: string) {
  if (!value) return "Market note";
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return value;

  const [, year, month, day] = match;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(Number(year), Number(month) - 1, Number(day))));
}

function getArticlePreviewText(article: InsightArticle) {
  const paragraphs = article.content
    .replace(/^#\s+.+$/m, "")
    .split(/\r?\n\s*\r?\n/)
    .map((item) => item.trim())
    .filter(
      (item) =>
        item &&
        !item.startsWith("!") &&
        !item.startsWith("#") &&
        !item.startsWith("|") &&
        !item.startsWith("##") &&
        !/^\|?\s*-{3,}/.test(item)
    );

  return (paragraphs.slice(0, 2).join(" ") || article.description)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function HomeHero() {
  return (
    <>
      <section className="isolate overflow-hidden bg-[#0d141b] text-white">
        <div className="relative flex h-[calc(100vh-4rem)] min-h-[42rem] flex-col">
          <div className="relative flex flex-1 flex-col justify-center overflow-hidden">
            <Image
              src="/images/hero/home-surface-architecture.jpg"
              alt="Architectural stainless steel surface panels used as a premium metal facade background"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-100 brightness-100 saturate-100 contrast-100"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.18)_0%,rgba(13,20,27,0.12)_52%,rgba(13,20,27,0.34)_100%)]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.46)_0%,rgba(13,20,27,0.18)_48%,rgba(13,20,27,0.1)_100%)]"
              aria-hidden="true"
            />
            <div
              className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45"
              aria-hidden="true"
            />

            <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-left">
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#f6d044]">
                  China stainless steel supplier
                </p>
                <h1 className="mt-6 text-[2.4rem] font-semibold leading-[1.04] text-white sm:text-[3.3rem] lg:text-[4.26rem]">
                  Stainless Steel Supplier for Surface-Focused Materials
                </h1>
                <p className="mt-6 max-w-[54rem] text-[1.1rem] leading-8 text-white/80 sm:text-[1.2rem]">
                  Jinling Metals supplies stainless steel sheet, coil, tube,
                  pipe, and decorative surfaces for manufacturers,
                  distributors, and project buyers. Our strengths include 8K
                  mirror stainless steel, AFP anti-fingerprint finishes,
                  surface processing, export packing, and China stainless steel
                  market insight.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/products"
                    className="inline-flex min-h-[3.3rem] items-center bg-[#f6d044] px-6 text-[0.98rem] font-semibold text-[#111820] transition hover:bg-[#e5bf2e]"
                  >
                    Explore Products
                  </Link>
                  <Link
                    href="/solutions/capabilities/surface-finish-capability"
                    className="inline-flex min-h-[3.3rem] items-center bg-white/10 px-6 text-[0.98rem] font-semibold text-white ring-1 ring-white/18 transition hover:bg-white/16"
                  >
                    View Surface Finishing
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid bg-[#0d141b] md:h-[17.5rem] md:grid-cols-2">
            {heroHighlights.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex min-h-[16rem] overflow-hidden border-y border-white/18 bg-[#0d141b] p-6 shadow-[0_-20px_70px_rgba(0,0,0,0.22)] transition hover:bg-[#111b24] sm:p-7 md:min-h-0 md:border-x"
              >
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className={`object-cover opacity-[0.72] transition duration-500 group-hover:scale-[1.03] group-hover:opacity-[0.88] ${item.imagePosition}`}
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(135deg,rgba(13,20,27,0.88)_0%,rgba(13,20,27,0.64)_38%,rgba(13,20,27,0.18)_100%)]"
                  aria-hidden="true"
                />
                <div className="relative z-10 mx-auto flex min-h-[13rem] max-w-xl flex-col justify-center text-left md:min-h-0">
                  <h2 className="text-[1.72rem] font-semibold leading-[1.08] text-white sm:text-[2.08rem]">
                    {item.title}
                  </h2>
                  <p className="mt-3 max-w-lg text-[0.92rem] font-semibold leading-6 text-[#f6d044] sm:text-[0.98rem]">
                    {item.summary}
                  </p>
                  <p className="mt-0 max-h-0 max-w-lg overflow-hidden text-[0.9rem] leading-6 text-white/80 opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-24 group-hover:opacity-100 group-focus:mt-4 group-focus:max-h-24 group-focus:opacity-100">
                    {item.description}
                  </p>
                  <span className="mt-5 inline-flex w-fit items-center border-b border-[#f6d044]/70 pb-1 text-[1rem] font-semibold text-[#f6d044]">
                    {item.cta}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProductNavigation() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d141b] text-white">
      <Image
        src="/images/hero/home-product-navigation-bg.png"
        alt="Architectural stainless steel and glass stair project background"
        fill
        sizes="100vw"
        className="object-cover object-[center_52%] opacity-[0.86]"
      />
      <div className="absolute inset-0 bg-[#0d141b]/42" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.64)_0%,rgba(13,20,27,0.3)_42%,rgba(13,20,27,0.76)_100%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-[5rem] sm:px-6 sm:py-[6rem] lg:px-8">
        <div className="mx-auto max-w-4xl text-left">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#f6d044]">
            Sourcing Routes
          </p>
          <h2 className="mt-5 text-[2.2rem] font-semibold leading-[1.08] sm:text-[3rem] lg:text-[3.35rem]">
            Choose Your Sourcing Route
          </h2>
          <p className="mt-6 text-[1.03rem] leading-8 text-white/80 sm:text-[1.1rem]">
            Start with the route that matches your stainless steel decision:
            product form, surface finish, grade environment, or processing and
            export packing.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {buyerNeedRoutes.map((card) => (
            <div
              key={card.need}
              tabIndex={0}
              className="group relative min-h-[16.8rem] overflow-hidden p-5 shadow-[0_22px_60px_rgba(0,0,0,0.32)] outline-none ring-1 ring-white/16 transition duration-300 hover:-translate-y-1 hover:ring-[#f6d044]/70 focus:-translate-y-1 focus:ring-[#f6d044]/70 focus-visible:ring-2 focus-visible:ring-[#f6d044]"
            >
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                className={`object-cover opacity-[0.9] transition duration-500 group-hover:scale-[1.04] group-hover:opacity-100 ${card.imagePosition}`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.74)_0%,rgba(13,20,27,0.42)_46%,rgba(13,20,27,0.86)_100%)]" />

              <div className="relative z-10 flex min-h-[13.9rem] flex-col justify-center">
                <div className="flex flex-col items-center">
                  <h3 className="whitespace-nowrap text-[1.28rem] font-semibold leading-tight text-[#f6d044] sm:text-[1.42rem] xl:text-[1.28rem] 2xl:text-[1.38rem]">
                    {card.label}
                  </h3>
                  <p className="mt-0 max-h-0 overflow-hidden text-left text-[0.82rem] leading-5 text-white/78 opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:max-h-32 group-hover:opacity-100 group-focus:mt-3 group-focus:max-h-32 group-focus:opacity-100 group-focus-within:mt-3 group-focus-within:max-h-32 group-focus-within:opacity-100">
                    {card.description}
                  </p>
                </div>

                <div className="mx-auto mt-6 grid w-full max-w-[13.75rem] translate-x-7 auto-rows-fr">
                  {card.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex min-h-[2.25rem] items-center border-t border-white/18 py-2 text-left text-[0.82rem] font-semibold leading-tight text-white transition hover:text-[#f6d044]"
                    >
                      <span>{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeMarketInsights() {
  const reports = getLatestHomeMarketReports();
  if (reports.length === 0) return null;

  return (
    <section className="bg-cream-200 text-brand-dark">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="relative mx-auto max-w-4xl">
          <div>
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-copper">
              China Market Insights
            </p>
            <Link
              href="/resources/market-insights"
              className="mt-4 inline-flex shrink-0 items-center justify-center border border-brand-accent bg-brand-accent px-5 py-3 text-sm font-semibold text-brand-dark transition hover:border-brand-accent-hover hover:bg-brand-accent-hover sm:absolute sm:right-0 sm:top-0 sm:mt-0"
            >
              View All Market Insights
            </Link>
          </div>
          <div>
            <h2 className="mt-5 text-[2.2rem] font-semibold leading-[1.08] text-brand-dark sm:text-[3rem] lg:text-[3.35rem]">
              Latest Market Reports
            </h2>
            <p className="mt-6 text-[1.03rem] leading-8 text-text-secondary sm:text-[1.1rem]">
              Follow recent China stainless steel price movement, inventory
              changes, raw material signals, freight updates, and sourcing
              timing before placing your next order.
            </p>
          </div>
        </div>

        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          {reports.map((article) => {
            const previewText = getArticlePreviewText(article);
            const imageSrc =
              article.heroImage ||
              "/images/about/culture/daily-02-weekly-market-report.jpg";

            return (
              <Link
                key={article.slug}
                href={`/insights/${article.slug}`}
                className="group block h-full overflow-hidden border border-cream-border bg-white shadow-[0_18px_46px_rgba(13,20,27,0.07)] transition hover:-translate-y-1 hover:border-brand-accent/55 hover:shadow-[0_24px_58px_rgba(13,20,27,0.11)]"
                aria-label={article.title}
              >
                <article className="flex h-full flex-col">
                  <div className="relative aspect-[1024/504] w-full overflow-hidden bg-white">
                    <Image
                      src={imageSrc}
                      alt={article.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  </div>
                  <div className="flex min-h-[12.25rem] flex-1 flex-col p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
                      {formatDate(article.publishedAt)}
                    </span>
                    <h3 className="mt-3 text-[1.18rem] font-semibold leading-tight text-brand-dark transition group-hover:text-brand-accent">
                      {article.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-text-secondary">
                      {previewText}
                    </p>
                    <span className="mt-auto inline-flex pt-5 text-sm font-semibold text-brand-accent">
                      Continue reading
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <ProductNavigation />
      <HomeKeyFigures />
      <HomeWhyChooseUs />
      <HomeMarketInsights />
    </>
  );
}

