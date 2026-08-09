import { getContentList } from "@/lib/content";
import {
  latestMarketReportSlugs,
  marketReviewOutlookReportSlugs,
  policyExportNewsReportSlugs,
  priceInventoryReportSlugs,
} from "@/lib/market-insight-groups";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string; page: string }>;
}

type InsightArticle = ReturnType<typeof getContentList>[number];
const ARTICLES_PER_PAGE = 5;

const categoryConfig = [
  {
    id: "latest-market-updates",
    navLabel: "Latest Market Updates",
    title: "Latest China Stainless Steel Market Updates",
    description:
      "Recent China stainless steel market reports covering price movement, Wuxi inventory, mill pricing, policy signals, and buying timing.",
  },
  {
    id: "price-inventory",
    navLabel: "Price & Inventory",
    title: "China Stainless Steel Price & Inventory Reports",
    description:
      "Weekly price and inventory notes for buyers comparing stainless steel grades, market availability, and China sourcing timing.",
  },
  {
    id: "policy-export-news",
    navLabel: "Policy & Export News Focus",
    title: "China Stainless Steel Policy & Export News",
    description:
      "Policy, export licence, tariff, customs, freight, and document timing notes for stainless steel buyers.",
  },
  {
    id: "market-review-outlook",
    navLabel: "Market Review & Outlook",
    title: "China Stainless Steel Market Review & Outlook",
    description:
      "Longer stainless steel market review and outlook articles covering annual direction, raw-material pressure, production, export, and buying posture.",
  },
] as const;

function sortByPublishedDate(articles: InsightArticle[]) {
  return [...articles].sort(
    (a, b) =>
      (b.publishedAt || "").localeCompare(a.publishedAt || "") ||
      b.slug.localeCompare(a.slug)
  );
}

function getArticlesBySlugOrder(
  articles: InsightArticle[],
  slugs: readonly string[]
) {
  return slugs
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article): article is InsightArticle => Boolean(article));
}

function getArticlesForCategory(categoryId: string) {
  const articles = sortByPublishedDate(getContentList("insights"));

  if (categoryId === "latest-market-updates") {
    return getArticlesBySlugOrder(articles, latestMarketReportSlugs);
  }

  if (categoryId === "price-inventory") {
    return getArticlesBySlugOrder(articles, priceInventoryReportSlugs);
  }

  if (categoryId === "policy-export-news") {
    return getArticlesBySlugOrder(articles, policyExportNewsReportSlugs);
  }

  if (categoryId === "market-review-outlook") {
    return getArticlesBySlugOrder(articles, marketReviewOutlookReportSlugs);
  }

  return [];
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

function ArticlePreviewCard({ article }: { article: InsightArticle }) {
  const imageSrc =
    article.heroImage || "/images/about/culture/daily-02-weekly-market-report.jpg";
  const previewText = getArticlePreviewText(article);

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
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
          {formatDate(article.publishedAt)}
        </span>
        <h2 className="mt-3 text-xl font-semibold leading-tight text-brand-dark lg:text-[1.45rem]">
          <Link
            href={`/insights/${article.slug}`}
            className="transition hover:text-brand-accent"
          >
            {article.title}
          </Link>
        </h2>
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

function PaginationNav({
  categoryId,
  currentPage,
  totalPages,
}: {
  categoryId: string;
  currentPage: number;
  totalPages: number;
}) {
  if (totalPages <= 1) return null;

  const getPageHref = (page: number) =>
    page === 1
      ? `/resources/market-insights/${categoryId}`
      : `/resources/market-insights/${categoryId}/page/${page}`;

  return (
    <nav
      aria-label="Market insight pagination"
      className="mt-10 flex flex-wrap items-center justify-center gap-2"
    >
      {currentPage > 1 ? (
        <Link
          href={getPageHref(currentPage - 1)}
          className="inline-flex min-h-11 items-center justify-center border border-brand-dark px-4 text-sm font-semibold text-brand-dark transition hover:border-brand-accent hover:bg-brand-accent"
        >
          Previous
        </Link>
      ) : null}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
        <Link
          key={page}
          href={getPageHref(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={`inline-flex h-11 min-w-11 items-center justify-center border px-3 text-sm font-semibold transition ${
            page === currentPage
              ? "border-brand-dark bg-brand-dark text-white"
              : "border-cream-border bg-white text-brand-dark hover:border-brand-accent hover:bg-brand-accent"
          }`}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages ? (
        <Link
          href={getPageHref(currentPage + 1)}
          className="inline-flex min-h-11 items-center justify-center border border-brand-dark px-4 text-sm font-semibold text-brand-dark transition hover:border-brand-accent hover:bg-brand-accent"
        >
          Next
        </Link>
      ) : null}
    </nav>
  );
}

function parsePage(value: string) {
  const page = Number(value);
  return Number.isInteger(page) && page > 1 ? page : null;
}

export function generateStaticParams() {
  return categoryConfig.flatMap((category) => {
    const articles = getArticlesForCategory(category.id);
    const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

    return Array.from({ length: Math.max(0, totalPages - 1) }, (_, index) => ({
      category: category.id,
      page: String(index + 2),
    }));
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, page } = await params;
  const current = categoryConfig.find((item) => item.id === category);
  const pageNumber = parsePage(page);
  if (!current || !pageNumber) return {};

  return {
    title: `${current.title} | Page ${pageNumber} | Jinling Metals`,
    description: current.description,
    alternates: {
      canonical: `/resources/market-insights/${current.id}/page/${pageNumber}`,
    },
  };
}

export default async function MarketInsightsCategoryPaginatedPage({
  params,
}: Props) {
  const { category, page } = await params;
  const current = categoryConfig.find((item) => item.id === category);
  const pageNumber = parsePage(page);
  if (!current || !pageNumber) notFound();

  const allArticles = getArticlesForCategory(current.id);
  const totalPages = Math.ceil(allArticles.length / ARTICLES_PER_PAGE);
  if (pageNumber > totalPages) notFound();

  const start = (pageNumber - 1) * ARTICLES_PER_PAGE;
  const articles = allArticles.slice(start, start + ARTICLES_PER_PAGE);

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
              {current.title}
            </h1>
            <p className="mt-6 max-w-[64rem] text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem]">
              {current.description}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-cream-border bg-cream-100/70">
        <div className="mx-auto grid gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,56rem)_minmax(0,1fr)] xl:gap-x-4">
          <aside className="xl:sticky xl:top-24 xl:col-start-1 xl:justify-self-end xl:self-start">
            <div className="w-full border border-cream-border bg-white p-3 shadow-[0_12px_32px_rgba(13,20,27,0.045)] sm:w-[15.5rem]">
              <Link
                href="/resources/market-insights"
                className="mb-3 block px-2 py-1 text-center text-xs font-semibold uppercase tracking-[0.16em] text-brand-dark transition hover:text-brand-accent"
              >
                Market Insight Categories
              </Link>
              <nav className="grid gap-2">
                {categoryConfig.map((item, index) => (
                  <Link
                    key={item.id}
                    href={`/resources/market-insights/${item.id}`}
                    className={`block w-full whitespace-nowrap border border-transparent px-3 py-3 text-sm font-semibold transition ${
                      index % 2 === 0
                        ? "bg-brand-dark text-white hover:border-brand-accent hover:text-brand-accent"
                        : "bg-brand-accent text-brand-dark hover:bg-brand-accent-hover"
                    }`}
                  >
                    {item.navLabel}
                  </Link>
                ))}
              </nav>
            </div>
          </aside>

          <div className="mx-auto w-full max-w-[56rem] xl:col-start-2">
            <div className="mx-auto grid w-full max-w-[56rem] gap-5">
              {articles.map((article) => (
                <ArticlePreviewCard key={article.slug} article={article} />
              ))}
            </div>
            <PaginationNav
              categoryId={current.id}
              currentPage={pageNumber}
              totalPages={totalPages}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
