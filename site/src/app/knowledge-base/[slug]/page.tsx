import { getContent, getContentSlugs, renderMarkdownToHtml } from "@/lib/content";
import {
  buildKnowledgeBaseArticleMarkdown,
  getKnowledgeBaseArticleExperience,
  KB_CATEGORY_NAMES,
  type KBCategorySlug,
} from "@/lib/knowledge-base";
import { ContentPage } from "@/components/content/ContentPage";
import { KnowledgeBaseNextSteps } from "@/components/content/KnowledgeBaseNextSteps";
import {
  buildArticleSchema,
  buildFaqSchema,
  extractFaqEntries,
} from "@/lib/structured-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import articleList from "../articles.json";
import { isPublishedKnowledgeBaseSlug } from "@/lib/content";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

const publishedArticleList = articleList.filter((article) =>
  isPublishedKnowledgeBaseSlug(article.slug)
);

const RELATED_OVERRIDES: Record<
  string,
  { title: string; slugs: string[] }
> = {
  "304-vs-316-stainless-steel": {
    title: "Related questions",
    slugs: [
      "201-vs-304-stainless-steel",
      "304-vs-304l-vs-304h",
      "is-304-enough-for-coastal-use",
      "what-does-l-mean-stainless-steel",
    ],
  },
  // Algorithm picks weak buyers-guide siblings here because the slug
  // tokens "marine"/"offshore" don't overlap with same-category
  // articles. Hand-curated to anchor on the corrosion side instead.
  "stainless-steel-for-marine-offshore": {
    title: "Related corrosion routes",
    slugs: [
      "saltwater-stainless-steel",
      "304-316-coastal-specifier-framework",
      "is-304-enough-for-coastal-use",
    ],
  },
  // Algorithm picks 2B/BA/304-vs-430 articles because the generic tokens
  // "should/buy/stainless" outweigh the country-name tokens that only
  // appear in the title. Hand-curated to anchor on sourcing-context
  // siblings instead.
  "where-to-buy-stainless-steel-in-asia": {
    title: "Related sourcing decisions",
    slugs: [
      "indonesia-origin-tariff-driven-sourcing",
      "china-vs-european-stainless-steel-quality",
      "what-the-2026-china-export-licence-changes-for-stainless-buyers",
    ],
  },
};

// Tokens that appear too often to indicate topical closeness.
const STOP_TOKENS = new Set([
  "stainless", "steel", "the", "and", "for", "vs", "a", "an", "of", "in",
  "to", "on", "with", "do", "is", "are", "was", "what", "when", "how",
  "i", "my", "this", "that", "you", "your", "or", "by", "be",
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[\W_]+/)
    .filter((t) => t.length > 2 && !STOP_TOKENS.has(t));
}

interface RelatedCandidate {
  slug: string;
  title: string;
  category: string;
}

function scoreCloseness(
  current: RelatedCandidate,
  candidate: RelatedCandidate,
): number {
  if (current.slug === candidate.slug) return -Infinity;

  let score = 0;

  // Same-category baseline. Kept low so that strong topical overlap
  // across categories can outrank a weakly-related same-category
  // sibling (e.g. an MTC article should pair with COO/PMI articles
  // even though they sit in different categories).
  if (current.category === candidate.category) score += 3;

  // Slug token overlap is the strongest topical signal: it captures
  // grade names (304, 316l, 2205), surface routes (mirror, hairline),
  // service contexts (welded, coastal, pickling), and product forms.
  const currentSlugTokens = new Set(tokenize(current.slug));
  const candidateSlugTokens = new Set(tokenize(candidate.slug));
  let sharedSlugTokens = 0;
  for (const t of currentSlugTokens) {
    if (candidateSlugTokens.has(t)) sharedSlugTokens += 1;
  }
  score += sharedSlugTokens * 6;

  // Title token overlap picks up shared concepts not visible in the
  // slug (e.g. "ra", "weld", "tolerance"). Lower weight so it tunes
  // ordering rather than dominating it.
  const currentTitleTokens = new Set(tokenize(current.title));
  const candidateTitleTokens = new Set(tokenize(candidate.title));
  let sharedTitleTokens = 0;
  for (const t of currentTitleTokens) {
    if (candidateTitleTokens.has(t) && !currentSlugTokens.has(t)) {
      sharedTitleTokens += 1;
    }
  }
  score += sharedTitleTokens * 2;

  return score;
}

function pickClosestRelated(
  currentSlug: string,
  list: readonly RelatedCandidate[],
  limit = 3,
): RelatedCandidate[] {
  const current = list.find((a) => a.slug === currentSlug);
  if (!current) return [];

  return list
    .filter((a) => a.slug !== currentSlug)
    .map((candidate) => ({
      candidate,
      score: scoreCloseness(current, candidate),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.candidate);
}

function CleanGuideArticleIntro({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-[52rem] px-4 pb-3 pt-10 sm:px-6 sm:pb-4 sm:pt-12 lg:px-8">
        <h1 className="text-[1.9rem] font-semibold leading-[1.08] text-brand-dark sm:text-[2.25rem]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-[1.02rem] leading-8 text-[#5d6670] sm:text-[1.08rem]">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}

export async function generateStaticParams() {
  return getContentSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContent("blog", slug);
  if (!content) return {};
  return {
    title: content.seoTitle || content.title,
    description: content.description,
    alternates: {
      canonical: `/knowledge-base/${slug}`,
    },
  };
}

export default async function KnowledgeBaseArticle({ params }: Props) {
  const { slug } = await params;
  const content = await getContent("blog", slug);
  if (!content) notFound();

  const useCleanGuideArticle = isPublishedKnowledgeBaseSlug(slug);
  const currentArticle = publishedArticleList.find((a) => a.slug === slug);
  const category = (currentArticle?.category || "material-guide") as KBCategorySlug;
  const faqEntries = extractFaqEntries(content.content);
  const experience = getKnowledgeBaseArticleExperience({
    title: content.title,
    slug,
    category,
    faqCount: faqEntries.length,
  });
  const articleMarkdown = buildKnowledgeBaseArticleMarkdown({
    markdown: content.content,
    showFaq: experience.showFaq,
  });
  const htmlContent = await renderMarkdownToHtml(
    articleMarkdown.replace(/^#\s+.+$/m, "").trim()
  );
  const faqSchema = experience.showFaq ? buildFaqSchema(faqEntries) : null;

  // Hand-curated overrides take priority; otherwise pick the three
  // articles topically closest to this one (slug + title token overlap,
  // weighted on top of same-category baseline).
  const relatedOverride = RELATED_OVERRIDES[slug];
  const related = relatedOverride
    ? relatedOverride.slugs
        .map((relatedSlug) =>
          publishedArticleList.find((a) => a.slug === relatedSlug)
        )
        .filter(
          (
            article
          ): article is (typeof articleList)[number] => Boolean(article)
        )
        .map((a) => ({ name: a.title, href: `/knowledge-base/${a.slug}` }))
        .slice(0, 3)
    : pickClosestRelated(slug, publishedArticleList, 3).map((a) => ({
        name: a.title,
        href: `/knowledge-base/${a.slug}`,
      }));
  const enrichedRelated = await Promise.all(
    related.map(async (item) => {
      const relatedSlug = item.href.split("/").pop();
      const relatedContent = relatedSlug
        ? await getContent("blog", relatedSlug)
        : null;

      return {
        ...item,
        description: relatedContent?.description,
        image: relatedContent?.heroImage,
      };
    })
  );

  return (
    <ContentPage
      title={content.title}
      description={content.description}
      htmlContent={htmlContent}
      variant="knowledge-base"
      pageUrl={`/knowledge-base/${slug}`}
      structuredData={[
        buildArticleSchema({
          title: content.title,
          description: content.description,
          pageUrl: `/knowledge-base/${slug}`,
          type: "BlogPosting",
          author: content.author,
          reviewedBy: content.reviewedBy,
          publishedAt: content.publishedAt,
          articleSection:
            KB_CATEGORY_NAMES[
              category as keyof typeof KB_CATEGORY_NAMES
            ] || "Stainless Steel Guide",
        }),
        ...(faqSchema ? [faqSchema] : []),
      ]}
      breadcrumbs={[
        { label: "Stainless Steel Guides", href: "/resources/stainless-steel-guides" },
        {
          label:
            KB_CATEGORY_NAMES[
              category as keyof typeof KB_CATEGORY_NAMES
            ] || "Article",
        },
      ]}
      relatedItems={useCleanGuideArticle ? enrichedRelated.slice(0, 2) : related}
      relatedTitle={
        useCleanGuideArticle
          ? "Related Posts"
          : relatedOverride?.title || experience.relatedTitle
      }
      ctaHeading={experience.ctaHeading}
      ctaText={experience.ctaText}
      ctaHref={experience.ctaHref}
      ctaSecondaryText={experience.ctaSecondaryText}
      ctaSecondaryHref={experience.ctaSecondaryHref}
      heroImage={useCleanGuideArticle ? undefined : content.heroImage}
      heroImageMode={
        useCleanGuideArticle
          ? undefined
          : content.heroImage
            ? "narrow"
            : content.heroImageMode
      }
      customHero={
        useCleanGuideArticle ? (
          <CleanGuideArticleIntro
            title={content.title}
            description={content.description}
          />
        ) : undefined
      }
      heroStats={useCleanGuideArticle ? undefined : content.heroStats}
      author={useCleanGuideArticle ? undefined : content.author}
      reviewedBy={useCleanGuideArticle ? undefined : content.reviewedBy}
      publishedAt={useCleanGuideArticle ? undefined : content.publishedAt}
      afterContent={
        useCleanGuideArticle ? undefined : (
          <KnowledgeBaseNextSteps
            title={experience.endcapTitle}
            description={experience.endcapDescription}
            actions={experience.nextSteps}
          />
        )
      }
    />
  );
}


