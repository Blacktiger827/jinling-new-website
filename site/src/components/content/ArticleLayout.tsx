import Image from "next/image";
import Link from "next/link";
import { HeroStatsCard } from "@/components/blocks";
import type { HeroStat } from "@/lib/content";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface ArticleLayoutProps {
  title: string;
  description?: string;
  breadcrumbs: Breadcrumb[];
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  variant?: "default" | "knowledge-base" | "insight" | "application" | "capability" | "product" | "surface" | "datasheet";
  heroImage?: string;
  heroImageMode?: "background" | "narrow";
  heroStats?: HeroStat[];
  heroEyebrow?: React.ReactNode;
  heroActionContent?: React.ReactNode;
  customHero?: React.ReactNode;
  author?: string;
  reviewedBy?: string;
  publishedAt?: string;
}

function formatEditorialDate(value: string) {
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

export function ArticleLayout({
  title,
  description,
  breadcrumbs,
  children,
  sidebar,
  variant = "default",
  heroImage,
  heroImageMode = "background",
  heroStats,
  heroEyebrow,
  heroActionContent,
  customHero,
  author,
  reviewedBy,
  publishedAt,
}: ArticleLayoutProps) {
  const isKnowledgeBase = variant === "knowledge-base";
  const isInsight = variant === "insight";
  const isApplication = variant === "application";
  const isCapability = variant === "capability";
  const isProduct = variant === "product";
  const isSurface = variant === "surface";
  const isDatasheet = variant === "datasheet";
  const isCoilProductHero =
    isProduct && heroImage?.includes("/images/products/coil/");
  const useCleanKnowledgeBaseArticle = isKnowledgeBase && Boolean(customHero);
  const useLightHeader = isKnowledgeBase || isApplication || isCapability || isProduct || isSurface || isDatasheet;
  const resolvedHeroImageMode =
    heroImageMode === "background"
      ? "background"
      : isKnowledgeBase || isApplication || isCapability || isProduct || isSurface || isDatasheet
        ? "narrow"
        : heroImageMode;
  const metadataItems: Array<{ label: string; value: string }> = [];
  const headerClassName = isKnowledgeBase
    ? "relative overflow-hidden border-b border-slate-200/80 bg-[linear-gradient(180deg,#fcfcfa_0%,#f5f2eb_100%)] text-brand-dark"
    : isCapability
      ? "relative overflow-hidden border-b border-[#d8cbb8] bg-[radial-gradient(circle_at_14%_16%,rgba(246,208,68,0.22),transparent_28%),linear-gradient(180deg,#fbf8f0_0%,#efe5d6_100%)] text-brand-dark"
      : isApplication
      ? "relative overflow-hidden border-b border-[#d8cbb8] bg-[radial-gradient(circle_at_12%_18%,rgba(246,208,68,0.18),transparent_26%),linear-gradient(180deg,#fbf8f0_0%,#eee5d8_100%)] text-brand-dark"
      : isProduct
      ? "relative overflow-hidden border-b border-[#d8cbb8] bg-[radial-gradient(circle_at_15%_14%,rgba(246,208,68,0.2),transparent_26%),radial-gradient(circle_at_78%_8%,rgba(40,52,62,0.08),transparent_26%),linear-gradient(180deg,#fbf8f0_0%,#eee4d4_100%)] text-brand-dark"
      : isSurface
      ? "relative overflow-hidden border-b border-[#d8cbb8] bg-[radial-gradient(circle_at_16%_14%,rgba(246,208,68,0.19),transparent_26%),radial-gradient(circle_at_82%_10%,rgba(40,52,62,0.08),transparent_27%),linear-gradient(180deg,#fbf8f0_0%,#eee4d4_100%)] text-brand-dark"
      : isDatasheet
      ? "relative overflow-hidden border-b border-[#d8cbb8] bg-[radial-gradient(circle_at_10%_18%,rgba(246,208,68,0.17),transparent_25%),radial-gradient(circle_at_84%_10%,rgba(40,52,62,0.07),transparent_24%),linear-gradient(180deg,#fbf8f0_0%,#efe6d9_100%)] text-brand-dark"
      : isInsight
        ? "relative overflow-hidden bg-brand-dark text-white before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-gradient-to-r before:from-copper-deep before:via-copper before:to-copper-soft"
        : "relative overflow-hidden bg-brand-dark text-white";
  const headerInnerClassName = isKnowledgeBase
    ? "relative mx-auto max-w-[64rem] px-5 py-10 sm:px-8 sm:py-14 lg:px-10"
    : isCapability
      ? "relative mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    : isApplication
      ? "relative mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    : isProduct
      ? isCoilProductHero
        ? "relative mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        : "relative mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    : isSurface
      ? "relative mx-auto max-w-5xl px-4 py-9 sm:px-6 sm:py-14 lg:px-8"
    : isDatasheet
      ? "relative mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    : "relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8";
  const titleClassName = isKnowledgeBase
    ? "max-w-[56rem] text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.03em] text-brand-dark sm:text-[2.65rem]"
    : isCapability
      ? "max-w-4xl text-[2.15rem] font-semibold leading-[1.08] tracking-[-0.035em] text-brand-dark sm:text-[2.9rem]"
      : isApplication
      ? "max-w-4xl text-[2.05rem] font-semibold leading-[1.08] tracking-[-0.035em] text-brand-dark sm:text-[2.65rem]"
      : isProduct
      ? "max-w-4xl text-[2.08rem] font-semibold leading-[1.08] tracking-[-0.035em] text-brand-dark sm:text-[2.72rem]"
    : isSurface
      ? "max-w-4xl text-[2.02rem] font-semibold leading-[1.08] tracking-[-0.035em] text-brand-dark sm:text-[2.68rem]"
    : isDatasheet
      ? "max-w-4xl text-[2.02rem] font-semibold leading-[1.08] tracking-[-0.035em] text-brand-dark sm:text-[2.58rem]"
    : "max-w-4xl text-3xl font-bold leading-tight sm:text-4xl";
  const descriptionClassName = isKnowledgeBase
    ? "mt-5 max-w-[50rem] text-[1.02rem] leading-8 text-slate-600"
    : isCapability
      ? "mt-5 max-w-3xl text-[1.02rem] leading-8 text-[#5d554b] sm:text-lg"
      : isApplication
      ? "mt-5 max-w-3xl text-[1.02rem] leading-8 text-[#5d554b] sm:text-lg"
      : isProduct
      ? "mt-5 max-w-3xl text-[1.02rem] leading-8 text-[#5d554b] sm:text-lg"
    : isSurface
      ? "mt-5 max-w-3xl text-[1rem] leading-8 text-[#5d554b] sm:text-lg"
    : isDatasheet
      ? "mt-5 max-w-3xl text-[1rem] leading-8 text-[#5d554b] sm:text-lg"
    : "mt-4 max-w-3xl text-lg leading-relaxed text-gray-200";
  const contentShellClassName = useCleanKnowledgeBaseArticle
    ? "mx-auto max-w-[52rem] px-4 pb-12 pt-1 sm:px-6 sm:pb-16 sm:pt-2 lg:px-8"
    : isKnowledgeBase
    ? "mx-auto max-w-[64rem] px-5 py-10 sm:px-8 sm:py-14 lg:px-10"
    : isInsight && customHero
      ? "mx-auto max-w-7xl px-4 pb-12 pt-4 sm:px-6 sm:pb-16 sm:pt-5 lg:px-8"
    : isCapability
      ? "mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    : isApplication
      ? "mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    : isProduct
      ? "mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    : isSurface
      ? "mx-auto max-w-7xl px-4 py-9 sm:px-6 sm:py-14 lg:px-8"
    : isDatasheet
      ? "mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    : "mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8";
  const gridClassName = sidebar
    ? isKnowledgeBase
      ? "lg:grid lg:grid-cols-12 lg:items-start lg:gap-10 xl:gap-14"
      : "lg:grid lg:grid-cols-4 lg:gap-12"
    : "";
  const contentColumnClassName = sidebar
    ? isKnowledgeBase
      ? "w-full max-w-[46rem] lg:col-span-8 xl:col-span-7"
      : "lg:col-span-3"
    : useCleanKnowledgeBaseArticle
      ? "mx-auto w-full max-w-[52rem]"
    : isKnowledgeBase
      ? "mx-auto w-full max-w-[58rem]"
      : isInsight
        ? "mx-auto max-w-3xl"
      : "max-w-3xl";
  const sidebarClassName = isKnowledgeBase
    ? "mt-12 lg:col-span-4 lg:mt-0 xl:col-span-4"
    : "mt-10 lg:col-span-1 lg:mt-0";
  const proseClassName = useCleanKnowledgeBaseArticle
    ? "prose prose-lg max-w-none prose-headings:text-brand-dark prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-text-secondary prose-p:leading-relaxed prose-a:font-medium prose-a:text-brand-dark prose-a:underline prose-a:decoration-slate-300 prose-a:underline-offset-4 hover:prose-a:text-text-primary hover:prose-a:decoration-slate-500 prose-table:my-0 prose-table:min-w-[34rem] prose-table:w-full prose-table:text-sm prose-th:bg-bg-light prose-th:px-4 prose-th:py-3 prose-th:text-left prose-td:px-4 prose-td:py-3 prose-td:border-border prose-strong:text-text-primary prose-li:text-text-secondary [&_.article-note]:mt-3 [&_.article-note]:text-sm [&_.article-note]:leading-6 [&_.article-note]:text-text-light [&_.article-note_em]:not-italic [&_.article-formula]:my-6 [&_.article-formula]:text-center [&_.article-formula]:text-lg [&_.article-formula]:font-medium [&_.article-formula]:tracking-normal [&_.article-formula]:text-brand-dark [&_.article-table]:my-8 [&_.article-table]:overflow-x-auto [&_.article-table]:rounded-xl [&_.article-table]:border [&_.article-table]:border-border [&_.article-table]:bg-white"
    : isKnowledgeBase
    ? "prose prose-lg max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-[-0.022em] prose-headings:text-brand-dark prose-h2:mt-16 prose-h2:mb-6 prose-h2:text-[1.78rem] prose-h2:leading-[1.18] prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-[1.24rem] prose-h3:leading-[1.34] prose-p:my-6 prose-p:text-[1.04rem] prose-p:leading-8 prose-p:text-slate-600 prose-a:border-b prose-a:border-slate-300/80 prose-a:pb-[0.08em] prose-a:font-normal prose-a:text-[#36526B] prose-a:no-underline hover:prose-a:border-slate-500/70 hover:prose-a:text-brand-dark prose-ul:my-7 prose-ol:my-7 prose-li:my-2 prose-li:text-slate-600 prose-li:leading-8 prose-blockquote:border-l prose-blockquote:border-slate-200 prose-blockquote:pl-5 prose-blockquote:text-slate-600 prose-hr:my-12 prose-hr:border-slate-200 prose-table:my-0 prose-table:min-w-0 prose-table:w-full prose-table:text-[0.95rem] prose-th:border-b prose-th:border-slate-300 prose-th:bg-transparent prose-th:px-0 prose-th:py-3 prose-th:pr-6 prose-th:text-left prose-th:text-xs prose-th:font-semibold prose-th:uppercase prose-th:tracking-[0.12em] prose-th:text-slate-500 prose-td:border-b prose-td:border-slate-200 prose-td:px-0 prose-td:py-3.5 prose-td:pr-6 prose-td:align-top prose-strong:font-semibold prose-strong:text-brand-dark prose-code:bg-transparent prose-code:px-0 prose-code:text-[0.98em] prose-code:font-normal prose-code:font-serif prose-code:text-[#243647] prose-code:before:content-none prose-code:after:content-none prose-pre:bg-cream-100 prose-pre:text-[#243647] prose-img:mx-auto prose-img:max-w-[38rem] prose-img:rounded-2xl prose-img:border prose-img:border-slate-200 prose-img:shadow-none prose-figure:mx-auto prose-figure:max-w-[38rem] [&_.article-note]:mt-4 [&_.article-note]:border-l [&_.article-note]:border-slate-200 [&_.article-note]:pl-4 [&_.article-note]:text-[0.92rem] [&_.article-note]:leading-6 [&_.article-note]:tracking-[0.01em] [&_.article-note]:text-slate-500 [&_.article-note_em]:not-italic [&_.article-formula]:my-8 [&_.article-formula]:text-center [&_.article-formula]:font-serif [&_.article-formula]:text-[1.14rem] [&_.article-formula]:font-normal [&_.article-formula]:tracking-[0.015em] [&_.article-formula]:text-[#243647] sm:[&_.article-formula]:text-[1.22rem] [&_.article-table]:-mx-1 [&_.article-table]:my-10 [&_.article-table]:overflow-x-auto [&_.article-table]:border-y [&_.article-table]:border-slate-200 [&_.article-table]:pb-1 sm:[&_.article-table]:mx-0 sm:[&_.article-table]:overflow-visible [&_.article-table+p]:mt-3 [&_.article-table+p]:text-[0.92rem] [&_.article-table+p]:leading-6 [&_.article-table+p]:text-slate-500"
    : isCapability
      ? "prose prose-lg max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-[-0.025em] prose-headings:text-brand-dark prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-[1.65rem] prose-h2:leading-[1.18] prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[1.18rem] prose-p:text-[1rem] prose-p:leading-8 prose-p:text-[#5f6872] prose-a:font-medium prose-a:text-[#36526B] prose-a:underline prose-a:decoration-slate-300 prose-a:underline-offset-4 hover:prose-a:text-brand-dark prose-ul:my-6 prose-li:text-[#5f6872] prose-li:leading-7 prose-table:my-0 prose-table:min-w-[30rem] prose-table:w-full prose-table:text-sm prose-th:border-b prose-th:border-slate-300 prose-th:bg-[#f7f2e8] prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:text-xs prose-th:font-semibold prose-th:uppercase prose-th:tracking-[0.12em] prose-th:text-slate-500 prose-td:border-b prose-td:border-slate-200 prose-td:px-4 prose-td:py-3.5 prose-td:align-top prose-strong:text-brand-dark [&_.article-note]:my-6 [&_.article-note]:rounded-card-md [&_.article-note]:border [&_.article-note]:border-[#d9cfbd] [&_.article-note]:bg-[#fbf8f0] [&_.article-note]:px-5 [&_.article-note]:py-4 [&_.article-note]:text-[0.95rem] [&_.article-note]:leading-7 [&_.article-note]:text-[#5d554b] [&_.article-note_em]:not-italic [&_.article-table]:my-8 [&_.article-table]:overflow-x-auto [&_.article-table]:rounded-card-md [&_.article-table]:border [&_.article-table]:border-[#d9cfbd] [&_.article-table]:bg-white"
    : isApplication
      ? "prose prose-lg max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-[-0.025em] prose-headings:text-brand-dark prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-[1.58rem] prose-h2:leading-[1.18] prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[1.16rem] prose-p:text-[1rem] prose-p:leading-8 prose-p:text-[#5f6872] prose-a:font-medium prose-a:text-[#36526B] prose-a:underline prose-a:decoration-slate-300 prose-a:underline-offset-4 hover:prose-a:text-brand-dark prose-ul:my-6 prose-li:text-[#5f6872] prose-li:leading-7 prose-table:my-0 prose-table:min-w-0 prose-table:w-full prose-table:table-fixed prose-table:text-[0.92rem] prose-th:border-b prose-th:border-[#d8cbb8] prose-th:bg-[#fbf8f0] prose-th:px-3 prose-th:py-3 prose-th:text-left prose-th:text-xs prose-th:font-semibold prose-th:uppercase prose-th:tracking-[0.11em] prose-th:text-[#847667] prose-td:border-b prose-td:border-[#ece3d5] prose-td:px-3 prose-td:py-3.5 prose-td:align-top prose-td:leading-6 prose-td:break-words prose-strong:text-brand-dark [&_.article-note]:my-6 [&_.article-note]:rounded-card-md [&_.article-note]:border [&_.article-note]:border-[#d9cfbd] [&_.article-note]:bg-[#fbf8f0] [&_.article-note]:px-5 [&_.article-note]:py-4 [&_.article-note]:text-[0.95rem] [&_.article-note]:leading-7 [&_.article-note]:text-[#5d554b] [&_.article-note_em]:not-italic [&_.article-table]:my-8 [&_.article-table]:overflow-visible [&_.article-table]:rounded-card-md [&_.article-table]:border [&_.article-table]:border-[#d9cfbd] [&_.article-table]:bg-white [&_.article-table]:shadow-[0_14px_36px_rgba(13,20,27,0.045)]"
    : isProduct
      ? "prose prose-lg max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-[-0.025em] prose-headings:text-brand-dark prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-[1.58rem] prose-h2:leading-[1.18] prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[1.16rem] prose-p:text-[1rem] prose-p:leading-8 prose-p:text-[#5f6872] prose-a:font-medium prose-a:text-[#36526B] prose-a:underline prose-a:decoration-slate-300 prose-a:underline-offset-4 hover:prose-a:text-brand-dark prose-ul:my-6 prose-li:text-[#5f6872] prose-li:leading-7 prose-table:my-0 prose-table:min-w-0 prose-table:w-full prose-table:table-fixed prose-table:text-[0.92rem] prose-th:border-b prose-th:border-[#d8cbb8] prose-th:bg-[#fbf8f0] prose-th:px-3 prose-th:py-3 prose-th:text-left prose-th:text-xs prose-th:font-semibold prose-th:uppercase prose-th:tracking-[0.11em] prose-th:text-[#847667] prose-td:border-b prose-td:border-[#ece3d5] prose-td:px-3 prose-td:py-3.5 prose-td:align-top prose-td:leading-6 prose-td:break-words prose-strong:text-brand-dark [&_.article-note]:my-6 [&_.article-note]:rounded-card-md [&_.article-note]:border [&_.article-note]:border-[#d9cfbd] [&_.article-note]:bg-[#fbf8f0] [&_.article-note]:px-5 [&_.article-note]:py-4 [&_.article-note]:text-[0.95rem] [&_.article-note]:leading-7 [&_.article-note]:text-[#5d554b] [&_.article-note_em]:not-italic [&_.article-table]:my-8 [&_.article-table]:overflow-visible [&_.article-table]:rounded-card-md [&_.article-table]:border [&_.article-table]:border-[#d9cfbd] [&_.article-table]:bg-white [&_.article-table]:shadow-[0_14px_36px_rgba(13,20,27,0.045)]"
    : isSurface
      ? "prose prose-lg max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-[-0.025em] prose-headings:text-brand-dark prose-h2:mt-11 prose-h2:mb-4 prose-h2:text-[1.5rem] prose-h2:leading-[1.18] prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[1.14rem] prose-p:text-[1rem] prose-p:leading-8 prose-p:text-[#5f6872] prose-a:font-medium prose-a:text-[#36526B] prose-a:underline prose-a:decoration-slate-300 prose-a:underline-offset-4 hover:prose-a:text-brand-dark prose-ul:my-6 prose-li:text-[#5f6872] prose-li:leading-7 prose-table:my-0 prose-table:min-w-0 prose-table:w-full prose-table:table-fixed prose-table:text-[0.9rem] prose-th:border-b prose-th:border-[#d8cbb8] prose-th:bg-[#fbf8f0] prose-th:px-3 prose-th:py-3 prose-th:text-left prose-th:text-xs prose-th:font-semibold prose-th:uppercase prose-th:tracking-[0.1em] prose-th:text-[#847667] prose-td:border-b prose-td:border-[#ece3d5] prose-td:px-3 prose-td:py-3.5 prose-td:align-top prose-td:leading-6 prose-td:break-words prose-strong:text-brand-dark [&_.article-note]:my-6 [&_.article-note]:rounded-card-md [&_.article-note]:border [&_.article-note]:border-[#d9cfbd] [&_.article-note]:bg-[#fbf8f0] [&_.article-note]:px-5 [&_.article-note]:py-4 [&_.article-note]:text-[0.95rem] [&_.article-note]:leading-7 [&_.article-note]:text-[#5d554b] [&_.article-note_em]:not-italic [&_.article-table]:my-8 [&_.article-table]:overflow-visible [&_.article-table]:rounded-card-md [&_.article-table]:border [&_.article-table]:border-[#d9cfbd] [&_.article-table]:bg-white [&_.article-table]:shadow-[0_14px_36px_rgba(13,20,27,0.045)]"
    : isDatasheet
      ? "prose prose-lg max-w-none prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-[-0.025em] prose-headings:text-brand-dark prose-h2:mt-11 prose-h2:mb-4 prose-h2:text-[1.5rem] prose-h2:leading-[1.18] prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-[1.12rem] prose-p:text-[1rem] prose-p:leading-8 prose-p:text-[#5f6872] prose-a:font-medium prose-a:text-[#36526B] prose-a:underline prose-a:decoration-slate-300 prose-a:underline-offset-4 hover:prose-a:text-brand-dark prose-ul:my-6 prose-li:text-[#5f6872] prose-li:leading-7 prose-strong:text-brand-dark [&_.article-note]:my-6 [&_.article-note]:rounded-card-md [&_.article-note]:border [&_.article-note]:border-[#d9cfbd] [&_.article-note]:bg-[#fbf8f0] [&_.article-note]:px-5 [&_.article-note]:py-4 [&_.article-note]:text-[0.95rem] [&_.article-note]:leading-7 [&_.article-note]:text-[#5d554b] [&_.article-note_em]:not-italic"
    : "prose prose-lg max-w-none prose-headings:text-brand-dark prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-text-secondary prose-p:leading-relaxed prose-a:font-medium prose-a:text-brand-dark prose-a:underline prose-a:decoration-slate-300 prose-a:underline-offset-4 hover:prose-a:text-text-primary hover:prose-a:decoration-slate-500 prose-table:my-0 prose-table:min-w-[34rem] prose-table:w-full prose-table:text-sm prose-th:bg-bg-light prose-th:px-4 prose-th:py-3 prose-th:text-left prose-td:px-4 prose-td:py-3 prose-td:border-border prose-strong:text-text-primary prose-li:text-text-secondary [&_.article-note]:mt-3 [&_.article-note]:text-sm [&_.article-note]:leading-6 [&_.article-note]:text-text-light [&_.article-note_em]:not-italic [&_.article-formula]:my-6 [&_.article-formula]:text-center [&_.article-formula]:text-lg [&_.article-formula]:font-medium [&_.article-formula]:tracking-normal [&_.article-formula]:text-brand-dark [&_.article-table]:my-8 [&_.article-table]:overflow-x-auto [&_.article-table]:rounded-xl [&_.article-table]:border [&_.article-table]:border-border [&_.article-table]:bg-white";
  const heroStatsClassName =
    isCapability || isApplication || isProduct || isSurface || isDatasheet
      ? "border border-[#d8cbb8] bg-[#fbf8f0] shadow-[0_16px_34px_rgba(13,20,27,0.06)]"
      : !isKnowledgeBase && heroStats && heroStats.length < 4
      ? "bg-transparent p-0 max-w-4xl"
      : "bg-transparent p-0";

  if (isCapability || isApplication || isProduct || isSurface || isDatasheet) {
    if (reviewedBy) {
      metadataItems.push({ label: "Technical Review", value: reviewedBy });
    }

    if (publishedAt) {
      metadataItems.push({
        label: "Updated",
        value: formatEditorialDate(publishedAt),
      });
    }
  } else if (author) {
    metadataItems.push({ label: "Author", value: author });
  }

  if (!isCapability && !isApplication && !isProduct && !isSurface && !isDatasheet && reviewedBy) {
    metadataItems.push({ label: "Technical Review", value: reviewedBy });
  }

  if (!isCapability && !isApplication && !isProduct && !isSurface && !isDatasheet && publishedAt) {
    metadataItems.push({
      label: "Published",
      value: formatEditorialDate(publishedAt),
    });
  }

  return (
    <>
      {/* Breadcrumbs */}
      <div
        className={
          useLightHeader
            ? "border-b border-slate-200/80 bg-white"
            : "bg-bg-light border-b border-border"
        }
      >
        <div
          className={
            isKnowledgeBase
              ? "mx-auto max-w-[64rem] px-5 py-3 sm:px-8 lg:px-10"
              : "mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8"
          }
        >
          <nav
            className={
              useLightHeader
                ? "flex min-w-0 items-center gap-2 overflow-hidden whitespace-nowrap text-[0.82rem] text-slate-500"
                : "flex min-w-0 items-center gap-2 overflow-hidden whitespace-nowrap text-sm text-text-light"
            }
          >
            <Link href="/" className="shrink-0 hover:text-text-primary transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => {
              const isLast = i === breadcrumbs.length - 1;

              return (
              <span
                key={i}
                className={`flex min-w-0 items-center gap-2 ${isLast ? "flex-1" : "shrink-0"}`}
              >
                <span className="shrink-0">/</span>
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="shrink-0 hover:text-text-primary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="min-w-0 truncate text-text-primary">{crumb.label}</span>
                )}
              </span>
              );
            })}
          </nav>
        </div>
      </div>

      {customHero}
      {!customHero && (
        <>
      {/* Header */}
      <div className={headerClassName}>
        {heroImage && resolvedHeroImageMode === "background" && (
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt={title}
              fill
              className={
                isCoilProductHero
                  ? "object-cover object-center opacity-85"
                  : useLightHeader
                    ? "object-cover opacity-55"
                    : "object-cover opacity-40"
              }
              priority
              sizes="100vw"
            />
            {useLightHeader && (
              <div
                className={
                  isCoilProductHero
                    ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(251,248,240,0.76)_0%,rgba(251,248,240,0.46)_46%,rgba(251,248,240,0.08)_100%)]"
                    : "absolute inset-0 bg-[linear-gradient(90deg,rgba(251,248,240,0.95)_0%,rgba(251,248,240,0.82)_46%,rgba(251,248,240,0.38)_100%)]"
                }
              />
            )}
          </div>
        )}
        <div className={headerInnerClassName}>
          {isCapability && !heroEyebrow && (
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6b32]">
              <span>Process capability</span>
              <span className="h-px w-10 bg-[#c7ad72]" aria-hidden="true" />
            </div>
          )}
          {isApplication && !heroEyebrow && (
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6b32]">
              <span>Application route</span>
              <span className="h-px w-10 bg-[#c7ad72]" aria-hidden="true" />
            </div>
          )}
          {isProduct && !heroEyebrow && (
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6b32]">
              <span>Product release</span>
              <span className="h-px w-10 bg-[#c7ad72]" aria-hidden="true" />
            </div>
          )}
          {isSurface && !heroEyebrow && (
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6b32]">
              <span>Surface finish</span>
              <span className="h-px w-10 bg-[#c7ad72]" aria-hidden="true" />
            </div>
          )}
          {isDatasheet && !heroEyebrow && (
            <div className="mb-5 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6b32]">
              <span>Datasheet release</span>
              <span className="h-px w-10 bg-[#c7ad72]" aria-hidden="true" />
            </div>
          )}
          {heroEyebrow && <div className="mb-6">{heroEyebrow}</div>}
          <h1 className={titleClassName}>{title}</h1>
          {description && <p className={descriptionClassName}>{description}</p>}
          {heroActionContent}
          {metadataItems.length > 0 && (
            <div
              className={
                isKnowledgeBase
                  ? "mt-7 flex max-w-[41rem] flex-wrap gap-x-5 gap-y-3 border-t border-slate-200/80 pt-4 text-sm"
                  : isCapability
                    ? "mt-6 hidden max-w-4xl flex-wrap gap-x-5 gap-y-2 border-t border-[#d8cbb8]/80 pt-4 text-sm sm:flex"
                  : isApplication
                    ? "mt-6 hidden max-w-4xl flex-wrap gap-x-5 gap-y-2 border-t border-[#d8cbb8]/80 pt-4 text-sm sm:flex"
                    : isProduct || isSurface || isDatasheet
                    ? "mt-6 hidden max-w-4xl flex-wrap gap-x-5 gap-y-2 border-t border-[#d8cbb8]/80 pt-4 text-sm sm:flex"
                    : "mt-6 flex max-w-4xl flex-wrap gap-3"
              }
            >
              {metadataItems.map((item) =>
                useLightHeader ? (
                  <div
                    key={`${item.label}-${item.value}`}
                    className="inline-flex items-baseline gap-2"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
                      {item.label}
                    </span>
                    <span className="text-slate-600">{item.value}</span>
                  </div>
                ) : (
                  <div
                    key={`${item.label}-${item.value}`}
                    className="inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-gray-100 backdrop-blur-sm sm:rounded-full"
                  >
                    <span className="shrink-0 font-semibold text-white">{item.label}</span>
                    <span className="min-w-0 break-words text-gray-200">{item.value}</span>
                  </div>
                )
              )}
            </div>
          )}
          {heroImage && resolvedHeroImageMode === "narrow" && (
            <div
              className={
                isKnowledgeBase
                  ? "mt-8 max-w-[56rem]"
                  : isCapability
                    ? "mt-8 max-w-5xl lg:mt-9"
                  : isApplication
                    ? "mt-8 max-w-5xl lg:mt-9"
                    : isProduct || isSurface || isDatasheet
                    ? "mt-8 max-w-5xl lg:mt-9"
                    : "mt-8 max-w-3xl"
              }
            >
              <div
                className={
                  isCapability
                    ? "relative h-32 overflow-hidden rounded-[1.35rem] border border-[#d8cbb8] bg-white shadow-[0_20px_44px_rgba(13,20,27,0.1)] sm:h-44 lg:h-52"
                    : isApplication
                    ? "relative h-36 overflow-hidden rounded-[1.35rem] border border-[#d8cbb8] bg-white shadow-[0_20px_44px_rgba(13,20,27,0.1)] sm:h-48 lg:h-56"
                    : isProduct || isSurface || isDatasheet
                    ? "relative h-36 overflow-hidden rounded-[1.35rem] border border-[#d8cbb8] bg-white shadow-[0_20px_44px_rgba(13,20,27,0.1)] sm:h-48 lg:h-56"
                    : useLightHeader
                    ? "relative h-20 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_16px_34px_rgba(13,20,27,0.08)] sm:h-28"
                    : "relative h-24 overflow-hidden rounded-card-sm border border-white/10 shadow-[0_18px_40px_rgba(7,12,17,0.26)] sm:h-32"
                }
              >
                <Image
                  src={heroImage}
                  alt={title}
                  fill
                  className={isApplication || isProduct || isSurface ? "object-cover saturate-[0.9] contrast-[1.03]" : "object-cover"}
                  priority
                  sizes="(min-width: 1024px) 768px, 100vw"
                />
                {(isCapability || isApplication || isProduct || isSurface || isDatasheet) && (
                  <div
                    className="absolute left-0 top-0 h-full w-1 bg-brand-accent"
                    aria-hidden="true"
                  />
                )}
                <div
                  className={
                    isCapability
                      ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.14)_0%,rgba(13,20,27,0.03)_34%,rgba(246,208,68,0.06)_100%)]"
                    : isApplication
                      ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.12)_0%,rgba(13,20,27,0.02)_38%,rgba(246,208,68,0.05)_100%)]"
                    : isProduct || isSurface || isDatasheet
                      ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.13)_0%,rgba(13,20,27,0.025)_38%,rgba(246,208,68,0.06)_100%)]"
                    : useLightHeader
                      ? "absolute inset-0 bg-[linear-gradient(180deg,rgba(248,248,246,0.06)_0%,rgba(13,20,27,0.08)_100%)]"
                      : "absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.04)_0%,rgba(13,20,27,0.16)_100%)]"
                  }
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hero Stats (if provided) */}
      {heroStats && heroStats.length > 0 && (
        <div
          className={
            isKnowledgeBase
              ? "border-b border-slate-200/80 bg-white"
              : "bg-white border-b border-border"
          }
        >
          <div
            className={
              isKnowledgeBase
                ? "mx-auto max-w-[64rem] px-5 py-6 sm:px-8 lg:px-10"
                : isCapability
                  ? "mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8"
                : isApplication
                  ? "mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8"
                : isProduct
                  ? "mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8"
                : isSurface
                  ? "mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8"
                : isDatasheet
                  ? "mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4 lg:px-8"
                : "mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"
            }
          >
            <HeroStatsCard
              stats={heroStats}
              className={heroStatsClassName}
              variant={isCapability ? "compact" : isApplication || isProduct || isSurface || isDatasheet ? "route" : "default"}
            />
          </div>
        </div>
      )}
        </>
      )}

      {/* Content */}
      <div className={useCleanKnowledgeBaseArticle ? "bg-white" : undefined}>
        <div className={contentShellClassName}>
          <div className={gridClassName}>
            <div className={contentColumnClassName}>
              <div className={proseClassName}>
                {children}
              </div>
            </div>
            {sidebar && <div className={sidebarClassName}>{sidebar}</div>}
          </div>
        </div>
      </div>
    </>
  );
}








