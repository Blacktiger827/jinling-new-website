import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GuideArticleCard } from "@/components/content/GuideArticleCard";
import { GuideCategoryNav } from "@/components/content/GuideCategoryNav";
import { getContentList, type ContentItem } from "@/lib/content";
import {
  allStainlessSteelGuidesCategory,
  featuredGuideSlugs,
  stainlessSteelGuideCategorySections,
} from "@/lib/stainless-steel-guide-groups";

export const metadata: Metadata = {
  title:
    "Stainless Steel Guides | Grade, Finish, Corrosion & Buying Guide | Jinling Metals",
  description:
    "Read stainless steel guides for grade selection, 304 vs 316L, surface finish, corrosion resistance, processing, inspection, documentation, and stainless steel buying decisions.",
  alternates: {
    canonical: "/resources/stainless-steel-guides",
  },
};

function CategorySection({
  section,
  articles,
}: {
  section: (typeof stainlessSteelGuideCategorySections)[number];
  articles: ContentItem[];
}) {
  return (
    <section
      id={section.id}
      className="scroll-mt-24 border-b border-cream-border pb-12 last:border-b-0 last:pb-0"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-[42rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b88900]">
            {section.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-tight text-brand-dark sm:text-3xl">
            {section.title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-text-secondary sm:text-base">
            {section.description}
          </p>
        </div>
        <Link
          href={section.href}
          className="inline-flex shrink-0 items-center justify-center border border-brand-accent bg-brand-accent px-4 py-3 text-sm font-semibold text-brand-dark transition hover:border-brand-accent-hover hover:bg-brand-accent-hover"
        >
          View All {section.buttonLabel}
        </Link>
      </div>
      <div className="mt-7 grid gap-5">
        {articles.map((article) => (
          <GuideArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}

export default function StainlessSteelGuidesPage() {
  const articleSummaries = getContentList("blog").sort((articleA, articleB) =>
    (articleB.publishedAt || "").localeCompare(articleA.publishedAt || "")
  );
  const articleBySlug = new Map(
    articleSummaries.map((article) => [article.slug, article])
  );
  const featuredGuides = featuredGuideSlugs
    .map((slug) => articleBySlug.get(slug))
    .filter((article): article is ContentItem => Boolean(article));
  const featuredGuidePreview = featuredGuides.slice(0, 5);

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
              Stainless Steel Guides for Grade, Finish and Buying Decisions
            </h1>
            <p className="mt-6 max-w-[64rem] text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem]">
              Explore practical stainless steel knowledge for buyers,
              engineers, distributors, and manufacturers. These guides cover
              stainless steel grades, surface finish selection, corrosion
              exposure, processing routes, inspection proof, documentation, and
              export purchasing decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-cream-border bg-cream-100/70">
        <div className="mx-auto grid gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,56rem)_minmax(0,1fr)] xl:gap-x-4">
          <GuideCategoryNav />

          <div className="mx-auto w-full max-w-[56rem] xl:col-start-2">
            <div className="space-y-12">
              {stainlessSteelGuideCategorySections.map((section) => {
                const articles = section.articleSlugs
                  .map((slug) => articleBySlug.get(slug))
                  .filter((article): article is ContentItem =>
                    Boolean(article)
                  );

                return (
                  <CategorySection
                    key={section.id}
                    section={section}
                    articles={articles}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="archive"
        className="border-t border-cream-border bg-cream-100/70 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
      >
        <div className="mx-auto grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(0,56rem)_minmax(0,1fr)] xl:gap-x-4">
          <div className="xl:col-start-2">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-[42rem] text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b88900]">
                  {allStainlessSteelGuidesCategory.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-semibold leading-tight text-brand-dark sm:text-3xl">
                  {allStainlessSteelGuidesCategory.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-text-secondary sm:text-base">
                  {allStainlessSteelGuidesCategory.description}
                </p>
              </div>
              <Link
                href={allStainlessSteelGuidesCategory.href}
                className="inline-flex shrink-0 items-center justify-center border border-brand-accent bg-brand-accent px-4 py-3 text-sm font-semibold text-brand-dark transition hover:border-brand-accent-hover hover:bg-brand-accent-hover"
              >
                View All Guides
              </Link>
            </div>
            <div className="mt-8 grid gap-5">
              {featuredGuidePreview.map((article) => (
                <GuideArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
