import { GuideArticleCard } from "@/components/content/GuideArticleCard";
import { GuideCategoryNav } from "@/components/content/GuideCategoryNav";
import { getContentList } from "@/lib/content";
import {
  allStainlessSteelGuidesCategory,
  getStainlessSteelGuidePageCategoryById,
  STAINLESS_STEEL_GUIDES_PER_PAGE,
  stainlessSteelGuideCategorySections,
} from "@/lib/stainless-steel-guide-groups";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string; page: string }>;
}

type GuideArticle = ReturnType<typeof getContentList>[number];

function getArticlesBySlugOrder(
  articles: GuideArticle[],
  slugs: readonly string[]
) {
  return slugs
    .map((slug) => articles.find((article) => article.slug === slug))
    .filter((article): article is GuideArticle => Boolean(article));
}

function getCategoryArticles(categoryId: string) {
  const current = getStainlessSteelGuidePageCategoryById(categoryId);
  if (!current) return [];

  const articleSummaries = getContentList("blog").sort((articleA, articleB) =>
    (articleB.publishedAt || "").localeCompare(articleA.publishedAt || "")
  );

  return getArticlesBySlugOrder(articleSummaries, current.articleSlugs);
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
      ? `/resources/stainless-steel-guides/${categoryId}`
      : `/resources/stainless-steel-guides/${categoryId}/page/${page}`;

  return (
    <nav
      aria-label="Stainless steel guide pagination"
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
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
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
        )
      )}
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

export const dynamicParams = false;

export function generateStaticParams() {
  return [...stainlessSteelGuideCategorySections, allStainlessSteelGuidesCategory].flatMap((category) => {
    const articles = getCategoryArticles(category.id);
    const totalPages = Math.ceil(
      articles.length / STAINLESS_STEEL_GUIDES_PER_PAGE
    );

    return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, index) => ({
      category: category.id,
      page: String(index + 2),
    }));
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, page } = await params;
  const current = getStainlessSteelGuidePageCategoryById(category);
  if (!current) return {};

  return {
    title: `${current.title} | Page ${page} | Jinling Metals`,
    description: current.description,
    alternates: {
      canonical: `/resources/stainless-steel-guides/${current.id}/page/${page}`,
    },
  };
}

export default async function StainlessSteelGuidePagedCategoryPage({
  params,
}: Props) {
  const { category, page } = await params;
  const current = getStainlessSteelGuidePageCategoryById(category);
  if (!current) notFound();

  const pageNumber = Number(page);
  const allArticles = getCategoryArticles(current.id);
  const totalPages = Math.ceil(allArticles.length / STAINLESS_STEEL_GUIDES_PER_PAGE);
  if (!Number.isInteger(pageNumber) || pageNumber < 2 || pageNumber > totalPages) {
    notFound();
  }

  const startIndex = (pageNumber - 1) * STAINLESS_STEEL_GUIDES_PER_PAGE;
  const articles = allArticles.slice(
    startIndex,
    startIndex + STAINLESS_STEEL_GUIDES_PER_PAGE
  );

  return (
    <main className="bg-cream-200 text-[#101010]">
      <section className="relative overflow-hidden bg-[#0d141b] text-white">
        <div className="absolute inset-0 opacity-[0.74]">
          <Image
            src="/images/resources/stainless-steel-guides-hero-color-facade.jpg"
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
                Stainless Steel Guides
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
          <GuideCategoryNav activeId={current.id} />

          <div className="mx-auto w-full max-w-[56rem] xl:col-start-2">
            <div className="grid w-full gap-5">
              {articles.map((article) => (
                <GuideArticleCard key={article.slug} article={article} />
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
    </main>
  );
}
