import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";
import publishedKnowledgeBaseSlugs from "./published-knowledge-base.json";

const CONTENT_DIR = path.join(process.cwd(), "content");
const KB_ARTICLE_INDEX_PATH = path.join(
  process.cwd(),
  "src/app/knowledge-base/articles.json"
);

let kbCategoryOverrideMap: Map<string, string> | null = null;

const publishedKnowledgeBaseSlugSet = new Set<string>(
  publishedKnowledgeBaseSlugs
);

export function isPublishedKnowledgeBaseSlug(slug: string) {
  return publishedKnowledgeBaseSlugSet.has(slug);
}

function isPublishableContent(subdir: string, slug: string) {
  return subdir !== "blog" || isPublishedKnowledgeBaseSlug(slug);
}

function normalizeDateValue(value: unknown): string | undefined {
  if (!value) return undefined;

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    const match = trimmed.match(/^(\d{4}-\d{2}-\d{2})/);
    return match ? match[1] : trimmed || undefined;
  }

  return undefined;
}

function getKnowledgeBaseCategoryOverrides() {
  if (kbCategoryOverrideMap) return kbCategoryOverrideMap;

  if (!fs.existsSync(KB_ARTICLE_INDEX_PATH)) {
    kbCategoryOverrideMap = new Map();
    return kbCategoryOverrideMap;
  }

  try {
    const raw = fs.readFileSync(KB_ARTICLE_INDEX_PATH, "utf-8");
    const items = JSON.parse(raw) as Array<{ slug?: string; category?: string }>;
    kbCategoryOverrideMap = new Map(
      items
        .filter(
          (item): item is { slug: string; category: string } =>
            Boolean(item.slug && item.category)
        )
        .map((item) => [item.slug, item.category])
    );
  } catch {
    kbCategoryOverrideMap = new Map();
  }

  return kbCategoryOverrideMap;
}

function normalizeCategoryValue(
  value: unknown,
  subdir?: string,
  slug?: string
): string | undefined {
  if (subdir === "blog" && slug) {
    const override = getKnowledgeBaseCategoryOverrides().get(slug);
    if (override) return override;
  }

  if (typeof value !== "string") return undefined;

  const raw = value.trim();
  const cleaned = raw.replace(/^['"]|['"]$/g, "").trim().toLowerCase();

  const categoryMap: Record<string, string> = {
    "material-guide": "material-guide",
    "grades & selection": "material-guide",
    "material & grade guide": "material-guide",
    "grade selection": "material-guide",
    "grade guide": "material-guide",
    "grade guides": "material-guide",
    "grade comparison": "material-guide",
    "mechanical properties": "material-guide",
    "technical reference": "material-guide",
    "material selection": "material-guide",
    applications: "material-guide",
    "industry applications": "material-guide",

    processing: "processing",
    "processing & fabrication": "processing",
    "fabrication & processing": "processing",
    welding: "processing",
    "welding & joining": "processing",
    "surface finish": "processing",
    "surface finishing": "processing",
    "surface treatment": "processing",

    corrosion: "corrosion",
    "corrosion & protection": "corrosion",
    "corrosion & service limits": "corrosion",
    "care & maintenance": "corrosion",

    quality: "quality",
    "quality & standards": "quality",
    "quality & compliance": "quality",
    "specs & verification": "quality",
    "standards & specifications": "quality",
    "dimensions & tolerances": "quality",

    "buyers-guide": "buyers-guide",
    "buyer's guide": "buyers-guide",
    "buyers guide": "buyers-guide",
    "buying guide": "buyers-guide",
    "buying & release": "buyers-guide",
    "procurement & sourcing": "buyers-guide",
  };

  return categoryMap[cleaned] || raw;
}

export interface HeroStat {
  value: string;
  unit?: string;
  label: string;
}

export interface ContentItem {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  category?: string;
  content: string; // raw markdown
  heroImage?: string;
  heroImageMode?: "background" | "narrow";
  heroStats?: HeroStat[];
  author?: string;
  reviewedBy?: string;
  publishedAt?: string;
}

export interface RenderedContent extends ContentItem {
  htmlContent: string;
}

function getPlainTableLabel(value: string) {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeTableLabel(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function addTableCellLabels(tableHtml: string, labels: string[]) {
  if (labels.length === 0) return tableHtml;

  return tableHtml.replace(
    /<tr>([\s\S]*?)<\/tr>/g,
    (rowHtml: string, rowCells: string) => {
      if (/<th[\s>]/.test(rowCells)) return rowHtml;

      let cellIndex = 0;
      const labeledCells = rowCells.replace(
        /<td(?![^>]*\bdata-label=)([^>]*)>/g,
        (cellOpen: string, attrs: string) => {
          const label = labels[cellIndex++];
          if (!label) return cellOpen;

          return `<td${attrs} data-label="${escapeTableLabel(label)}">`;
        }
      );

      return `<tr>${labeledCells}</tr>`;
    }
  );
}

function applyTableHtmlTransforms(htmlContent: string) {
  return htmlContent.replace(/<table>([\s\S]*?)<\/table>/g, (tableHtml) => {
    const labels = Array.from(tableHtml.matchAll(/<th[^>]*>([\s\S]*?)<\/th>/g))
      .map((match) => getPlainTableLabel(match[1]))
      .filter(Boolean);
    const cardClass =
      labels.length > 0 && labels.length <= 3 ? " article-table--cards" : "";
    const tableWithLabels = addTableCellLabels(tableHtml, labels);

    return `<div class="article-table${cardClass}">${tableWithLabels}</div>`;
  });
}

function getYouTubeVideoId(rawUrl: string) {
  try {
    const url = new URL(rawUrl.replace(/&amp;/g, "&"));
    const host = url.hostname.replace(/^www\./, "").replace(/^m\./, "");

    if (host === "youtu.be") {
      return url.pathname.split("/").filter(Boolean)[0];
    }

    if (host === "youtube.com" || host === "youtube-nocookie.com") {
      const [, route, id] = url.pathname.split("/");

      if (route === "embed" || route === "shorts" || route === "live") {
        return id;
      }

      return url.searchParams.get("v");
    }
  } catch {
    return null;
  }

  return null;
}

function applyYouTubeHtmlTransforms(htmlContent: string) {
  return htmlContent.replace(
    /<p><a href="([^"]+)">([\s\S]*?)<\/a><\/p>/g,
    (paragraphHtml, href: string, labelHtml: string) => {
      const youtubeId = getYouTubeVideoId(href);
      if (!youtubeId || !/^[A-Za-z0-9_-]{6,}$/.test(youtubeId)) {
        return paragraphHtml;
      }

      const plainLabel = getPlainTableLabel(labelHtml) || "YouTube video";
      const title = escapeTableLabel(plainLabel);

      return `<figure class="not-prose my-8 overflow-hidden rounded-lg border border-cream-border bg-white shadow-[0_16px_42px_rgba(13,20,27,0.08)]"><div class="aspect-video w-full bg-black"><iframe class="h-full w-full" src="https://www.youtube.com/embed/${youtubeId}" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe></div><figcaption class="px-4 py-3 text-center text-xs text-text-secondary">${labelHtml}</figcaption></figure>`;
    }
  );
}

export async function renderMarkdownToHtml(markdown: string): Promise<string> {
  const processed = await remark().use(remarkGfm).use(html).process(markdown);
  let renderedHtml = processed
    .toString()
    .replace(/<p><em>([\s\S]*?)<\/em><\/p>/g, '<p class="article-note"><em>$1</em></p>');

  renderedHtml = applyTableHtmlTransforms(renderedHtml);
  renderedHtml = applyYouTubeHtmlTransforms(renderedHtml);

  return renderedHtml;
}

/**
 * Get all content items from a subdirectory (e.g. "products", "grades")
 */
export function getContentList(subdir: string): ContentItem[] {
  const dir = path.join(CONTENT_DIR, subdir);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .filter((filename) =>
      isPublishableContent(subdir, filename.replace(/\.md$/, ""))
    )
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8").replace(/^\uFEFF/, "");
      const { data, content } = matter(fileContent);

      // Extract title from frontmatter or first heading
      const markdownTitle = content.match(/^#\s+(.+)$/m)?.[1];
      const frontmatterTitle =
        typeof data.title === "string" ? data.title : undefined;
      const title = markdownTitle || frontmatterTitle || slug.replace(/-/g, " ");
      const seoTitle =
        typeof data.seoTitle === "string"
          ? data.seoTitle
          : frontmatterTitle || title;

      const description =
        data.description ||
        content
          .replace(/^#.+$/gm, "")
          .replace(/[*_#\[\]|>-]/g, "")
          .trim()
          .slice(0, 200);

      return {
        slug,
        title,
        seoTitle,
        description,
        category: normalizeCategoryValue(data.category, subdir, slug),
        heroImage: data.heroImage,
        heroImageMode: data.heroImageMode,
        heroStats: data.heroStats,
        author: data.author,
        reviewedBy: data.reviewedBy,
        publishedAt: normalizeDateValue(data.publishedAt || data.date),
        content,
      };
    });
}

/**
 * Get a single content item by slug, with rendered HTML
 */
export async function getContent(
  subdir: string,
  slug: string
): Promise<RenderedContent | null> {
  if (!isPublishableContent(subdir, slug)) return null;

  const filePath = path.join(CONTENT_DIR, subdir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8").replace(/^\uFEFF/, "");
  const { data, content } = matter(fileContent);

  const markdownTitle = content.match(/^#\s+(.+)$/m)?.[1];
  const frontmatterTitle =
    typeof data.title === "string" ? data.title : undefined;
  const title = markdownTitle || frontmatterTitle || slug.replace(/-/g, " ");
  const seoTitle =
    typeof data.seoTitle === "string"
      ? data.seoTitle
      : frontmatterTitle || title;

  const description =
    data.description ||
    content
      .replace(/^#.+$/gm, "")
      .replace(/[*_#\[\]|>-]/g, "")
      .trim()
      .slice(0, 200);

  // Remove the first H1 from content since we render it separately
  const bodyContent = content.replace(/^#\s+.+$/m, "").trim();

  const htmlContent = await renderMarkdownToHtml(bodyContent);

  return {
    slug,
    title,
    seoTitle,
    description,
    category: normalizeCategoryValue(data.category, subdir, slug),
    heroImage: data.heroImage,
    heroImageMode: data.heroImageMode,
    heroStats: data.heroStats,
    author: data.author,
    reviewedBy: data.reviewedBy,
    publishedAt: normalizeDateValue(data.publishedAt || data.date),
    content,
    htmlContent,
  };
}

/**
 * Get all slugs for static generation
 */
export function getContentSlugs(subdir: string): string[] {
  const dir = path.join(CONTENT_DIR, subdir);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .filter((filename) =>
      isPublishableContent(subdir, filename.replace(/\.md$/, ""))
    )
    .map((f) => f.replace(/\.md$/, ""));
}

