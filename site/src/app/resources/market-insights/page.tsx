import { getContent, getContentList } from "@/lib/content";
import {
  getChinaMarketInsightArchiveMeta,
} from "@/components/content/ChinaMarketSourcesPanel";
import {
  latestMarketReportSlugs,
  marketReviewOutlookReportSlugs,
  policyExportNewsReportSlugs,
  priceInventoryReportSlugs,
} from "@/lib/market-insight-groups";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "China Stainless Market | Prices and Exports",
  description:
    "China stainless steel market notes on prices, inventory, export policy, timing, and sourcing decisions for international buyers.",
  alternates: {
    canonical: "/resources/market-insights",
  },
};

type InsightArticle = ReturnType<typeof getContentList>[number];
const CATEGORY_PREVIEW_LIMIT = 5;

const categoryConfig = [
  {
    id: "latest-market-updates",
    href: "/resources/market-insights/latest-market-updates",
    navLabel: "Latest Market Updates",
    eyebrow: "Latest Market Updates",
    title: "Latest China stainless steel market updates",
    description:
      "The newest China stainless steel market reports for buyers tracking price movement, Wuxi inventory, mill pricing, freight changes, export policy, and order timing.",
  },
  {
    id: "price-inventory",
    href: "/resources/market-insights/price-inventory",
    navLabel: "Price & Inventory",
    eyebrow: "Price & Inventory",
    title: "Price and inventory signals",
    description:
      "Weekly stainless steel price and inventory updates for buyers comparing 304, 316L, 201, 430, and current China market availability.",
  },
  {
    id: "policy-export-news",
    href: "/resources/market-insights/policy-export-news",
    navLabel: "Policy & Export News Focus",
    eyebrow: "Policy & Export News Focus",
    title: "Policy and export news focus",
    description:
      "Export licence, tariff, customs, freight, and policy notes that may affect stainless steel shipment timing and document preparation.",
  },
  {
    id: "market-review-outlook",
    href: "/resources/market-insights/market-review-outlook",
    navLabel: "Market Review & Outlook",
    eyebrow: "Market Review & Outlook",
    title: "Market review and outlook",
    description:
      "Longer stainless steel market reviews for understanding annual direction, raw-material pressure, production trends, and sourcing posture.",
  },
] as const;

const fallbackImages = {
  weekly: "/images/about/culture/daily-02-weekly-market-report.jpg",
  policy: "/images/about/culture/02-jinling-news-market-sharing.jpg",
  annual: "/images/about/culture/meeting-04-annual-review.jpg",
} as const;

function sortByPublishedDate(articles: InsightArticle[]) {
  return [...articles].sort(
    (a, b) =>
      (b.publishedAt || "").localeCompare(a.publishedAt || "") ||
      b.slug.localeCompare(a.slug)
  );
}

function getArticlesBySlugOrder(articles: InsightArticle[], slugs: readonly string[]) {
  return slugs
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
  const preview = paragraphs.slice(0, 2).join(" ");

  return (preview || article.description)
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function ArticlePreviewCard({
  article,
  featured = false,
}: {
  article: InsightArticle;
  featured?: boolean;
}) {
  const archiveMeta = getChinaMarketInsightArchiveMeta(article.slug);
  const imageSrc = article.heroImage || fallbackImages[archiveMeta.type];
  const previewText = getArticlePreviewText(article);

  if (featured) {
    return (
      <article className="mx-auto w-full max-w-[56rem] overflow-hidden border border-cream-border bg-white shadow-[0_18px_46px_rgba(13,20,27,0.07)] transition hover:border-brand-accent/45 hover:shadow-[0_22px_54px_rgba(13,20,27,0.1)]">
        <Link
          href={`/insights/${article.slug}`}
          className="relative block aspect-[1024/504] w-full overflow-hidden bg-white"
          aria-label={article.title}
        >
          <Image
            src={imageSrc}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 896px, calc(100vw - 2rem)"
          />
        </Link>
        <div className="flex min-h-[12.5rem] flex-col p-4 sm:p-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
              {formatDate(article.publishedAt)}
            </span>
          </div>
          <h3 className="mt-3 text-xl font-semibold leading-tight text-brand-dark lg:text-[1.45rem]">
            <Link
              href={`/insights/${article.slug}`}
              className="transition hover:text-brand-accent"
            >
              {article.title}
            </Link>
          </h3>
          <p className="mt-2 min-h-6 line-clamp-2 text-sm leading-6 text-text-secondary">
            {previewText}
          </p>
          <Link
            href={`/insights/${article.slug}`}
            className="mt-auto inline-flex pt-4 text-sm font-semibold text-brand-accent transition hover:text-brand-accent-hover"
          >
            Continue reading
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="grid overflow-hidden rounded-card-md border border-cream-border bg-white shadow-[0_14px_34px_rgba(13,20,27,0.05)] transition hover:border-brand-accent/45 hover:shadow-[0_18px_42px_rgba(13,20,27,0.08)] sm:grid-cols-[14rem_minmax(0,1fr)]">
      <Link
        href={`/insights/${article.slug}`}
        className="relative block min-h-48 bg-cream-100 sm:min-h-full"
        aria-label={article.title}
      >
        <Image
          src={imageSrc}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 224px, 100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.02)_0%,rgba(13,20,27,0.18)_100%)]" />
      </Link>
      <div className="flex min-w-0 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
            {formatDate(article.publishedAt)}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-semibold leading-tight text-brand-dark">
          <Link
            href={`/insights/${article.slug}`}
            className="transition hover:text-brand-accent"
          >
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 h-12 line-clamp-2 text-sm leading-6 text-text-secondary">
          {previewText}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {archiveMeta.sourceBadges.slice(0, 3).map((badge) => (
            <span
              key={badge}
              className="rounded-card-sm border border-cream-border bg-cream-50 px-2.5 py-1 text-xs font-medium text-text-secondary"
            >
              {badge}
            </span>
          ))}
        </div>
        <Link
          href={`/insights/${article.slug}`}
          className="mt-5 inline-flex text-sm font-semibold text-brand-accent transition hover:text-brand-accent-hover"
        >
          Continue reading
        </Link>
      </div>
    </article>
  );
}

function CategorySection({
  id,
  eyebrow,
  title,
  description,
  href,
  navLabel,
  articles,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  navLabel: string;
  articles: InsightArticle[];
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-cream-border pb-12 last:border-b-0 last:pb-0">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-[42rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-brand-dark sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-text-secondary sm:text-base">
            {description}
          </p>
        </div>
        <Link
          href={href}
          className="inline-flex shrink-0 items-center justify-center border border-brand-accent bg-brand-accent px-4 py-3 text-sm font-semibold text-brand-dark transition hover:border-brand-accent-hover hover:bg-brand-accent-hover"
        >
          View All {navLabel}
        </Link>
      </div>
      <div className="mt-7 grid w-full gap-5">
        {articles.length > 0 ? (
          articles.map((article) => (
            <ArticlePreviewCard
              key={article.slug}
              article={article}
              featured
            />
          ))
        ) : (
          <div className="rounded-card-md border border-dashed border-cream-border bg-white/70 p-6 text-sm leading-7 text-text-secondary">
            New market notes for this category will appear here after migration.
          </div>
        )}
      </div>
    </section>
  );
}

export default async function InsightsPage() {
  const pillar = await getContent("pillar-pages", "weekly-insights-overview");
  const articles = sortByPublishedDate(getContentList("insights"));
  const latestArticles = getArticlesBySlugOrder(articles, latestMarketReportSlugs).slice(
    0,
    CATEGORY_PREVIEW_LIMIT
  );
  const priceInventoryArticles = getArticlesBySlugOrder(
    articles,
    priceInventoryReportSlugs
  ).slice(0, CATEGORY_PREVIEW_LIMIT);
  const policyArticles = getArticlesBySlugOrder(
    articles,
    policyExportNewsReportSlugs
  ).slice(0, CATEGORY_PREVIEW_LIMIT);
  const outlookArticles = getArticlesBySlugOrder(
    articles,
    marketReviewOutlookReportSlugs
  ).slice(0, CATEGORY_PREVIEW_LIMIT);

  return (
    <div className="bg-cream-200">
      <section className="relative overflow-hidden bg-[#0d141b] text-white">
        <div className="absolute inset-0 opacity-[0.74]">
          <Image
            src="/images/resources/market-insights-hero-red-facade.jpg"
            alt=""
            fill
            priority
            className="object-cover object-[center_48%]"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.86)_0%,rgba(13,20,27,0.63)_48%,rgba(13,20,27,0.28)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(13,20,27,0)_0%,rgba(246,240,229,0.98)_100%)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <div className="mx-auto max-w-[66rem] text-left">
            <div className="inline-flex items-center gap-4">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#f6d044]">
                China Market Insights
              </p>
              <span className="h-px w-12 bg-[#f6d044]/70" aria-hidden="true" />
            </div>
            <h1 className="mt-6 max-w-[66rem] text-[2.4rem] font-semibold leading-[1.04] text-white sm:text-[3.3rem] lg:text-[4.26rem]">
              {pillar?.title || "China Stainless Steel Market Insights"}
            </h1>
            <p className="mt-6 max-w-[64rem] text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem]">
              Jinling Metals tracks China stainless steel market updates to
              help buyers understand price trends, inventory changes, raw
              material movements, export policy, and shipping conditions before
              making purchasing decisions. Our weekly market insights cover
              major grades such as 304, 316L, 201, and 430 stainless steel,
              with attention to hot-rolled and cold-rolled inventory, nickel,
              chromium, molybdenum, mill news, and freight factors that may
              affect sourcing timing.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-cream-border bg-cream-100/70">
        <div className="mx-auto grid gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,56rem)_minmax(0,1fr)] xl:gap-x-4">
          <aside className="xl:sticky xl:top-24 xl:col-start-1 xl:justify-self-end xl:self-start">
            <div className="w-full border border-cream-border bg-white p-3 shadow-[0_12px_32px_rgba(13,20,27,0.045)] sm:w-[15.5rem]">
              <p className="px-2 py-1 text-center text-xs font-semibold uppercase tracking-[0.16em] text-brand-dark">
                Market Insight Categories
              </p>
              <nav className="mt-3 grid gap-2">
                {categoryConfig.map((category, index) => (
                  <Link
                    key={category.id}
                    href={category.href}
                    className={`block w-full whitespace-nowrap border border-transparent px-3 py-3 text-sm font-semibold transition ${
                      index % 2 === 0
                        ? "bg-brand-dark text-white hover:border-brand-accent hover:text-brand-accent"
                        : "bg-brand-accent text-brand-dark hover:bg-brand-accent-hover"
                    }`}
                  >
                    {category.navLabel}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <div className="mx-auto w-full max-w-[56rem] space-y-12 xl:col-start-2">
            <CategorySection
              {...categoryConfig[0]}
              articles={latestArticles}
            />
            <CategorySection
              {...categoryConfig[1]}
              articles={priceInventoryArticles}
            />
            <CategorySection
              {...categoryConfig[2]}
              articles={policyArticles}
            />
            <CategorySection
              {...categoryConfig[3]}
              articles={outlookArticles}
            />
          </div>
        </div>
      </section>

    </div>
  );
}

