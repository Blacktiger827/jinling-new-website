export const SITE_URL = "https://www.jinlingmetals.com";

interface BreadcrumbInput {
  label: string;
  href?: string;
}

interface ArticleSchemaInput {
  title: string;
  description: string;
  pageUrl: string;
  imageUrl?: string;
  type?: "Article" | "BlogPosting" | "TechArticle";
  articleSection?: string;
  author?: string;
  reviewedBy?: string;
  publishedAt?: string;
}

interface ProductSchemaInput {
  title: string;
  description: string;
  pageUrl: string;
  imageUrl?: string;
  category?: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export type StructuredDataNode = Record<string, unknown>;

const ORGANIZATION_NODE = {
  "@type": "Organization",
  name: "Jinling Steel Co., Ltd.",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/images/common/jinling-logo.png`,
  },
};

function buildNamedEntity(name?: string) {
  if (!name) return undefined;

  const isOrganization =
    /\b(team|desk|steel|company|co\.|ltd\.|engineering|editorial)\b/i.test(
      name
    );

  return {
    "@type": isOrganization ? "Organization" : "Person",
    name,
  };
}

function stripMarkdown(text: string) {
  return text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/^>\s?/gm, "")
    .replace(/^[-*+]\s+/gm, "")
    .replace(/<\/?[^>]+>/g, "")
    .replace(/\r/g, "")
    .replace(/\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function toAbsoluteUrl(path: string) {
  if (!path) return SITE_URL;

  try {
    return new URL(path).toString();
  } catch {
    return new URL(path.startsWith("/") ? path : `/${path}`, SITE_URL).toString();
  }
}

export function buildBreadcrumbSchema({
  breadcrumbs,
  pageUrl,
  pageTitle,
}: {
  breadcrumbs: BreadcrumbInput[];
  pageUrl: string;
  pageTitle: string;
}): StructuredDataNode {
  const items = [
    { name: "Home", url: SITE_URL },
    ...breadcrumbs
      .filter((crumb) => Boolean(crumb.href))
      .map((crumb) => ({
        name: crumb.label,
        url: toAbsoluteUrl(crumb.href as string),
      })),
  ];

  const finalUrl = toAbsoluteUrl(pageUrl);
  if (items[items.length - 1]?.url !== finalUrl) {
    items.push({ name: pageTitle, url: finalUrl });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleSchema({
  title,
  description,
  pageUrl,
  imageUrl,
  type = "Article",
  articleSection,
  author,
  reviewedBy,
  publishedAt,
}: ArticleSchemaInput): StructuredDataNode {
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline: title,
    description,
    url: toAbsoluteUrl(pageUrl),
    mainEntityOfPage: toAbsoluteUrl(pageUrl),
    image: imageUrl ? [toAbsoluteUrl(imageUrl)] : undefined,
    articleSection,
    publisher: ORGANIZATION_NODE,
    author: buildNamedEntity(author) || ORGANIZATION_NODE,
    editor: buildNamedEntity(reviewedBy),
    datePublished: publishedAt,
    isAccessibleForFree: true,
  };
}

export function buildProductSchema({
  title,
  description,
  pageUrl,
  imageUrl,
  category,
}: ProductSchemaInput): StructuredDataNode {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: title,
    description,
    url: toAbsoluteUrl(pageUrl),
    image: imageUrl ? [toAbsoluteUrl(imageUrl)] : undefined,
    category,
    brand: {
      "@type": "Brand",
      name: "Jinling Steel",
    },
    manufacturer: ORGANIZATION_NODE,
  };
}

export function buildFaqSchema(faqEntries: FaqEntry[]) {
  if (!faqEntries.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((entry) => ({
      "@type": "Question",
      name: entry.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: entry.answer,
      },
    })),
  } satisfies StructuredDataNode;
}

export function extractFaqEntries(markdown: string): FaqEntry[] {
  const faqHeading = markdown.match(/^##+\s+FAQ\b.*$/im);
  if (!faqHeading || faqHeading.index === undefined) return [];

  const startIndex = faqHeading.index + faqHeading[0].length;
  const remaining = markdown.slice(startIndex);
  const nextHeading = remaining.match(/^\s*##\s+/m);
  const faqSection =
    nextHeading && nextHeading.index !== undefined
      ? remaining.slice(0, nextHeading.index)
      : remaining;

  const faqEntries: FaqEntry[] = [];
  const questionPattern =
    /^\*\*(.+?)\*\*\s*\n([\s\S]*?)(?=^\*\*.+?\*\*\s*\n|^\s*##\s+|\Z)/gm;

  let match: RegExpExecArray | null;
  while ((match = questionPattern.exec(faqSection)) !== null) {
    const question = stripMarkdown(match[1]);
    const answer = stripMarkdown(match[2]);

    if (question && answer) {
      faqEntries.push({ question, answer });
    }
  }

  return faqEntries;
}
