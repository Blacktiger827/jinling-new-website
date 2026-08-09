import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  getGuidePosterTitle,
  guideCoverBySlug,
} from "@/components/content/guidePosterCovers";
import { getContentList, type ContentItem } from "@/lib/content";
import { latestMarketReportSlugs } from "@/lib/market-insight-groups";
import { stainlessSteelGuideCategorySections } from "@/lib/stainless-steel-guide-groups";

export const metadata: Metadata = {
  title:
    "Stainless Steel Resources | Market Insights & Buying Guides | Jinling Metals",
  description:
    "Explore Jinling Metals stainless steel resources for China stainless steel market insights, price trends, inventory updates, grade selection, surface finish, processing, inspection, and export buying guidance.",
  alternates: {
    canonical: "/resources",
  },
};

const heroLinks = [
  { label: "Market Insights", href: "/resources/market-insights" },
  { label: "Stainless Steel Guides", href: "/resources/stainless-steel-guides" },
] as const;

const resourcePaths = [
  {
    eyebrow: "Market Insights",
    title: "China stainless steel market reports",
    description:
      "Follow dated market notes for stainless steel price movement, inventory changes, export policy, freight signals, and sourcing timing before the next order is fixed.",
    href: "/resources/market-insights",
    cta: "Explore Market Insights",
    image: "/images/resources/market-insights-hero-red-facade.jpg",
    alt: "China stainless steel market insights resource page background",
    points: ["Price & inventory", "Policy & export news", "Market review & outlook"],
  },
  {
    eyebrow: "Stainless Steel Guides",
    title: "Useful Stainless Steel Guides",
    description:
      "Use practical guides for grade selection, surface finish comparison, corrosion exposure, processing routes, MTC review, inspection proof, and export buying decisions.",
    href: "/resources/stainless-steel-guides",
    cta: "Explore Stainless Steel Guides",
    image: "/images/resources/stainless-steel-guides-hero-color-facade.jpg",
    alt: "Stainless steel guides resource page background",
    points: ["Grade & application", "Finish & fabrication", "Standards & buying"],
  },
] as const;

function SectionLabel({
  children,
  tone = "light",
}: {
  children: ReactNode;
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
        className={`mt-5 text-[1.9rem] font-semibold leading-[1.08] sm:text-[2.35rem] lg:text-[2.85rem] ${
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

function getArticlePreviewText(article: ContentItem) {
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
        !/^\|?\s*-{3,}/.test(item)
    );
  const preview = paragraphs.slice(0, 2).join(" ");

  return (preview || article.description)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function InsightMiniCard({ article }: { article: ContentItem }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className="group grid overflow-hidden border border-[#d7d0c2] bg-white shadow-[0_14px_34px_rgba(13,20,27,0.05)] transition hover:border-[#f6d044] hover:shadow-[0_18px_44px_rgba(13,20,27,0.09)] sm:grid-cols-[18rem_minmax(0,1fr)]"
    >
      <div className="relative min-h-[13.5rem] bg-[#f6f0e5] sm:min-h-full">
        <Image
          src={article.heroImage || "/images/resources/market-insights-hero-red-facade.jpg"}
          alt={`${article.title} stainless steel market report cover`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 288px, 100vw"
        />
      </div>
      <article className="flex min-w-0 flex-col p-3.5">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7c8792]">
          {formatDate(article.publishedAt)}
        </span>
        <h3 className="mt-2 line-clamp-2 text-[0.96rem] font-semibold leading-tight text-[#111820] transition group-hover:text-[#b99418]">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[0.78rem] leading-5 text-[#53606b]">
          {getArticlePreviewText(article)}
        </p>
        <span className="mt-auto pt-3 text-sm font-semibold text-[#b99418]">
          Continue reading
        </span>
      </article>
    </Link>
  );
}

function GuideMiniCard({ article }: { article: ContentItem }) {
  const imageSrc =
    guideCoverBySlug[article.slug] ||
    article.heroImage ||
    "/images/resources/stainless-steel-guides-hero-color-facade.jpg";

  return (
    <Link
      href={`/knowledge-base/${article.slug}`}
      className="group grid overflow-hidden border border-[#d7d0c2] bg-white shadow-[0_14px_34px_rgba(13,20,27,0.05)] transition hover:border-[#f6d044] hover:shadow-[0_18px_44px_rgba(13,20,27,0.09)] sm:grid-cols-[18rem_minmax(0,1fr)]"
    >
      <div className="relative min-h-[13.5rem] overflow-hidden bg-[#f6f0e5] sm:min-h-full">
        <Image
          src={imageSrc}
          alt={`${article.title} stainless steel guide cover`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(min-width: 1024px) 288px, 100vw"
        />
        {guideCoverBySlug[article.slug] ? (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.16)_0%,rgba(13,20,27,0.58)_54%,rgba(13,20,27,0.2)_100%)]" />
            <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
              <h3 className="text-[1.45rem] font-black leading-[0.95] text-[#f6d044] drop-shadow-[0_4px_14px_rgba(0,0,0,0.5)]">
                {getGuidePosterTitle(article.slug, article.title)}
              </h3>
            </div>
          </>
        ) : null}
      </div>
      <article className="flex min-w-0 flex-col p-3.5">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7c8792]">
          {article.category || "Stainless Steel Guide"}
        </span>
        <h3 className="mt-2 line-clamp-2 text-[0.96rem] font-semibold leading-tight text-[#111820] transition group-hover:text-[#b99418]">
          {article.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[0.78rem] leading-5 text-[#53606b]">
          {article.description.replace(/\s+/g, " ").trim()}
        </p>
        <span className="mt-auto pt-3 text-sm font-semibold text-[#b99418]">
          Continue reading
        </span>
      </article>
    </Link>
  );
}

export default function ResourcesPage() {
  const insightArticles = getContentList("insights");
  const articleBySlug = new Map(
    insightArticles.map((article) => [article.slug, article])
  );
  const latestReports = latestMarketReportSlugs
    .map((slug) => articleBySlug.get(slug))
    .filter((article): article is ContentItem => Boolean(article))
    .slice(0, 2);

  const guideArticles = getContentList("blog");
  const guideBySlug = new Map(
    guideArticles.map((article) => [article.slug, article])
  );
  const featuredGuides = stainlessSteelGuideCategorySections
    .map((section) => guideBySlug.get(section.articleSlugs[0]))
    .filter((article): article is ContentItem => Boolean(article))
    .slice(0, 2);

  return (
    <div className="bg-[#f6f0e5] text-[#111820]">
      <section className="relative overflow-hidden bg-[#0d141b] text-white">
        <div className="absolute inset-0 opacity-[0.72]">
          <Image
            src="/images/resources/resources-hero-white-metal-panels.jpg"
            alt="Jinling stainless steel resource hub for market insights and buying guides"
            fill
            className="object-cover object-[center_50%]"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.84)_0%,rgba(13,20,27,0.62)_48%,rgba(13,20,27,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(13,20,27,0)_0%,rgba(246,240,229,0.98)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <div className="mx-auto max-w-4xl text-left">
            <div className="inline-flex items-center gap-4">
              <SectionLabel tone="dark">Stainless Steel Resources</SectionLabel>
              <span className="h-px w-12 bg-[#f6d044]/70" aria-hidden="true" />
            </div>
            <h1 className="mt-6 max-w-[66rem] text-[2.4rem] font-semibold leading-[1.04] text-white sm:text-[3.3rem] lg:text-[4.26rem]">
              Stainless Steel Resources for Smarter Sourcing
            </h1>
            <p className="mt-6 max-w-[54rem] text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem]">
              Explore China stainless steel market insights and practical
              buying guides from Jinling Metals. Use market reports to follow
              price, inventory, policy, and shipping signals, or browse
              stainless steel guides for grade selection, surface finish,
              processing, inspection, and export buying decisions.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {heroLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`inline-flex border px-4 py-2.5 text-sm font-semibold transition ${
                    index === 0
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

      <section className="bg-[#111820] px-4 py-12 text-white sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Resource Paths"
            title="Choose the Right Resource Route"
            description="The resource hub has two clear paths: dated China stainless steel market reports for timing decisions, and evergreen stainless steel guides for material, finish, inspection, and buying decisions."
            tone="dark"
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {resourcePaths.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className="group relative isolate min-h-[20rem] overflow-hidden border border-white/12 bg-black shadow-2xl shadow-black/20"
              >
                <Image
                  src={path.image}
                  alt={path.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover opacity-68 transition duration-500 group-hover:scale-105 group-hover:opacity-82"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/52 to-black/14" />
                <div className="relative z-10 flex min-h-[20rem] flex-col justify-between p-6 sm:p-7 lg:p-8">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-[#f6d044]">
                      {path.eyebrow}
                    </p>
                    <h2 className="mt-4 max-w-2xl text-[1.75rem] font-semibold leading-tight sm:text-[2.15rem] lg:whitespace-nowrap">
                      {path.title}
                    </h2>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/78">
                      {path.description}
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <ul className="space-y-1.5 text-xs font-medium uppercase tracking-[0.12em] text-white/68">
                      {path.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <span className="inline-flex w-fit bg-[#f6d044] px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#111820]">
                      {path.cta}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0e5] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Latest From Resources"
            title="Fresh Market Notes and Featured Guides"
            description="Explore recent China stainless steel market reports and practical buying guides selected for buyers comparing prices, grades, finishes, inspection needs, and export purchasing decisions."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold leading-tight text-[#111820]">
                    Latest Market Reports
                  </h2>
                </div>
                <Link
                  href="/resources/market-insights"
                  className="inline-flex shrink-0 border border-[#f6d044] bg-[#f6d044] px-4 py-3 text-sm font-semibold text-[#111820] transition hover:bg-white"
                >
                  View All
                </Link>
              </div>
              <div className="grid gap-5">
                {latestReports.map((article) => (
                  <InsightMiniCard key={article.slug} article={article} />
                ))}
              </div>
            </div>

            <div>
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold leading-tight text-[#111820]">
                    Featured Stainless Steel Guides
                  </h2>
                </div>
                <Link
                  href="/resources/stainless-steel-guides"
                  className="inline-flex shrink-0 border border-[#f6d044] bg-[#f6d044] px-4 py-3 text-sm font-semibold text-[#111820] transition hover:bg-white"
                >
                  View All
                </Link>
              </div>
              <div className="grid gap-5">
                {featuredGuides.map((article) => (
                  <GuideMiniCard key={article.slug} article={article} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
