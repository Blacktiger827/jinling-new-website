import { getContent, getContentSlugs, getContentList } from "@/lib/content";
import { ContentPage } from "@/components/content/ContentPage";
import {
  ChinaMarketSourcesPanel,
  getChinaMarketInsightType,
} from "@/components/content/ChinaMarketSourcesPanel";
import {
  customMarketInsightHeroSlugs,
  latestMarketReportSlugs,
  priceInventoryReportSlugs,
} from "@/lib/market-insight-groups";
import {
  buildArticleSchema,
  buildFaqSchema,
  extractFaqEntries,
} from "@/lib/structured-data";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

const insightTypeLabels = {
  weekly: "Dated weekly note",
  annual: "Annual market review",
  policy: "Policy operation note",
} as const;

const latestMarketReportSlugSet = new Set<string>(latestMarketReportSlugs);
const priceInventoryReportSlugSet = new Set<string>(priceInventoryReportSlugs);
const customMarketInsightHeroSlugSet = new Set<string>(customMarketInsightHeroSlugs);

function formatInsightDate(value?: string) {
  if (!value) return "dated market note";

  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return value;

  const [, year, month, day] = match;
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)));

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

function MarketNoteContext({
  type,
  publishedAt,
}: {
  type: ReturnType<typeof getChinaMarketInsightType>;
  publishedAt?: string;
}) {
  const typeLabel = insightTypeLabels[type];
  const dateLabel = formatInsightDate(publishedAt);

  return (
    <section className="rounded-card-md border border-cream-border bg-cream-50 p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-light">
        Market note context
      </p>
      <p className="mt-3 text-sm leading-7 text-text-secondary">
        This is a {typeLabel.toLowerCase()} published on {dateLabel}. Read it
        as a period-specific buying signal, not as a live price sheet or a
        guaranteed forecast.
      </p>
    </section>
  );
}

function MarketInsightArticleHero({
  title,
  description,
  heroImage,
}: {
  title: string;
  description?: string;
  heroImage?: string;
}) {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-[52rem] px-4 pb-4 pt-10 sm:px-6 sm:pb-5 sm:pt-12 lg:px-8">
        <h1 className="text-[1.9rem] font-semibold leading-[1.08] text-brand-dark sm:text-[2.25rem] lg:text-[2.25rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-[1.02rem] leading-8 text-[#5d6670] sm:text-[1.08rem]">
            {description}
          </p>
        )}
        {heroImage && (
          <div className="mt-8 overflow-hidden bg-white">
            <div className="relative aspect-[1024/504] w-full">
              <Image
                src={heroImage}
                alt={title}
                fill
                priority
                className="object-contain"
                sizes="(min-width: 1024px) 832px, calc(100vw - 2rem)"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

function getNearbyMarketNotes(slug: string) {
  const allInsights = getContentList("insights");

  const clusterSlugs = priceInventoryReportSlugSet.has(slug)
    ? priceInventoryReportSlugs
    : latestMarketReportSlugSet.has(slug)
      ? latestMarketReportSlugs
      : null;

  if (clusterSlugs) {
    const clusterReports = clusterSlugs
      .map((itemSlug) => allInsights.find((p) => p.slug === itemSlug))
      .filter((item): item is NonNullable<typeof item> => Boolean(item))
    const currentIndex = clusterReports.findIndex((p) => p.slug === slug);
    const newerReport = clusterReports[currentIndex - 1];
    const olderReport = clusterReports[currentIndex + 1];
    const nearby = [newerReport, olderReport].filter(
      (item): item is NonNullable<typeof item> => Boolean(item)
    );

    if (nearby.length >= 2) return nearby;

    const fallback = [
      clusterReports[currentIndex - 2],
      clusterReports[currentIndex + 2],
      clusterReports[currentIndex - 3],
      clusterReports[currentIndex + 3],
      clusterReports[currentIndex - 4],
      clusterReports[currentIndex + 4],
    ].filter((item): item is NonNullable<typeof item> => Boolean(item));

    return [...nearby, ...fallback].slice(0, 2);
  }

  const currentType = getChinaMarketInsightType(slug);
  const sameTypeInsights = allInsights
    .filter((p) => p.slug !== slug && getChinaMarketInsightType(p.slug) === currentType)
    .sort(
      (a, b) =>
        (a.publishedAt || "").localeCompare(b.publishedAt || "") ||
        a.slug.localeCompare(b.slug)
    );
  const current = allInsights.find((p) => p.slug === slug);
  const currentDate = current?.publishedAt || "";
  const previous = [...sameTypeInsights]
    .reverse()
    .find((p) => (p.publishedAt || "") < currentDate);
  const next = sameTypeInsights.find((p) => (p.publishedAt || "") > currentDate);
  const nearby = [next, previous].filter(
    (item): item is NonNullable<typeof item> => Boolean(item)
  );

  if (nearby.length >= 2) return nearby.slice(0, 2);
  if (currentType === "annual" || currentType === "policy") return nearby;

  const fallback = allInsights
    .filter((p) => p.slug !== slug && !nearby.some((item) => item.slug === p.slug))
    .sort(
      (a, b) =>
        (b.publishedAt || "").localeCompare(a.publishedAt || "") ||
        b.slug.localeCompare(a.slug)
    );

  return [...nearby, ...fallback].slice(0, 2);
}

function getMarketNotePreviewText(article: ReturnType<typeof getContentList>[number]) {
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

  return (preview || article.description || "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export async function generateStaticParams() {
  return getContentSlugs("insights").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContent("insights", slug);
  if (!content) return {};
  return {
    title: content.seoTitle || content.title,
    description: content.description,
    alternates: {
      canonical: `/insights/${slug}`,
    },
  };
}

export default async function InsightArticle({ params }: Props) {
  const { slug } = await params;
  const content = await getContent("insights", slug);
  if (!content) notFound();
  const faqSchema = buildFaqSchema(extractFaqEntries(content.content));
  const insightType = getChinaMarketInsightType(slug);

  const related = getNearbyMarketNotes(slug)
    .map((p) => ({
      name: p.title,
      href: `/insights/${p.slug}`,
      description: getMarketNotePreviewText(p),
      image: p.heroImage,
      dateLabel: formatInsightDate(p.publishedAt),
    }));
  const heroLabel = insightTypeLabels[insightType];
  const useSampleArticleHero = customMarketInsightHeroSlugSet.has(slug);

  return (
    <ContentPage
      title={content.title}
      description={content.description}
      htmlContent={content.htmlContent}
      variant="insight"
      pageUrl={`/insights/${slug}`}
      structuredData={[
        buildArticleSchema({
          title: content.title,
          description: content.description,
          pageUrl: `/insights/${slug}`,
          type: "Article",
          author: content.author,
          reviewedBy: content.reviewedBy,
          publishedAt: content.publishedAt,
          articleSection: "China Market Insights",
        }),
        ...(faqSchema ? [faqSchema] : []),
      ]}
      heroEyebrow={
        useSampleArticleHero ? undefined : (
          <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold text-white/85 backdrop-blur-sm">
            <span className="uppercase tracking-[0.28em] text-brand-accent">
              China market note
            </span>
            <span className="h-1 w-1 rounded-full bg-white/35" />
            <span>{heroLabel}</span>
            <span className="h-1 w-1 rounded-full bg-white/35" />
            <span>{formatInsightDate(content.publishedAt)}</span>
          </div>
        )
      }
      heroImage={content.heroImage}
      customHero={
        useSampleArticleHero ? (
          <MarketInsightArticleHero
            title={content.title}
            heroImage={content.heroImage}
          />
        ) : undefined
      }
      breadcrumbs={[
        { label: "China Market Insights", href: "/resources/market-insights" },
        { label: "Market note" },
      ]}
      relatedItems={related}
      relatedTitle="Related Posts"
      ctaHeading="Need this dated note checked against a live quote?"
      ctaText="Ask for Quote Benchmark"
      ctaHref="/contact#pricing-request"
      ctaSecondaryText="Open Products"
      ctaSecondaryHref="/products"
      author={content.author}
      reviewedBy={content.reviewedBy}
      publishedAt={content.publishedAt}
      hideSidebar
      hideExpertBio={useSampleArticleHero}
      beforeExpertContent={
        useSampleArticleHero ? undefined : (
          <MarketNoteContext type={insightType} publishedAt={content.publishedAt} />
        )
      }
      afterContent={
        useSampleArticleHero ? undefined : (
          <ChinaMarketSourcesPanel type={insightType} />
        )
      }
    />
  );
}

