import { ArticleLayout } from "./ArticleLayout";
import { DirectInquiryStrip } from "./DirectInquiryStrip";
import { ExpertBioCard } from "./ExpertBioCard";
import {
  getGuidePosterSlugFromHref,
  getGuidePosterTitle,
  guideCoverBySlug,
  guideCoverImageClassBySlug,
} from "./guidePosterCovers";
import Image from "next/image";
import Link from "next/link";
import type { HeroStat } from "@/lib/content";
import {
  buildBreadcrumbSchema,
  type StructuredDataNode,
} from "@/lib/structured-data";

interface RelatedItem {
  name: string;
  href: string;
  description?: string;
  image?: string;
  dateLabel?: string;
}

interface ContentPageProps {
  title: string;
  description?: string;
  htmlContent: string;
  breadcrumbs: { label: string; href?: string }[];
  variant?: "default" | "knowledge-base" | "insight" | "application" | "capability" | "product" | "surface" | "datasheet";
  relatedItems?: RelatedItem[];
  relatedTitle?: string;
  ctaHeading?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
  heroImage?: string;
  heroImageMode?: "background" | "narrow";
  heroStats?: HeroStat[];
  heroEyebrow?: React.ReactNode;
  customHero?: React.ReactNode;
  pageUrl?: string;
  structuredData?: StructuredDataNode[];
  author?: string;
  reviewedBy?: string;
  publishedAt?: string;
  beforeArticleContent?: React.ReactNode;
  beforeExpertContent?: React.ReactNode;
  afterContent?: React.ReactNode;
  hideSidebar?: boolean;
  hideDirectInquiry?: boolean;
  hideExpertBio?: boolean;
}

function CleanKnowledgeBaseRelatedCard({ item }: { item: RelatedItem }) {
  const guideSlug = getGuidePosterSlugFromHref(item.href);
  const posterImage = guideCoverBySlug[guideSlug];
  const imageSrc = posterImage || item.image;
  const hasPosterCover = Boolean(posterImage);

  return (
    <article className="group overflow-hidden border border-slate-200 bg-white transition hover:border-brand-accent/50 hover:shadow-[0_16px_36px_rgba(13,20,27,0.06)]">
      {imageSrc ? (
        <Link
          href={item.href}
          className="relative block aspect-[1.86/1] overflow-hidden bg-slate-100"
          aria-label={item.name}
        >
          <Image
            src={imageSrc}
            alt={`${item.name} stainless steel guide cover`}
            fill
            className={
              guideCoverImageClassBySlug[guideSlug] ||
              "object-cover transition duration-500 group-hover:scale-[1.03]"
            }
            sizes="(min-width: 768px) 360px, calc(100vw - 2rem)"
          />
          {hasPosterCover ? (
            <>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.18)_0%,rgba(13,20,27,0.58)_52%,rgba(13,20,27,0.22)_100%)]" />
              <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                <h3 className="mx-auto max-w-[24rem] text-[1.28rem] font-black leading-[0.98] tracking-normal text-brand-accent drop-shadow-[0_4px_16px_rgba(0,0,0,0.52)] sm:text-[1.45rem] lg:text-[1.55rem]">
                  {getGuidePosterTitle(guideSlug, item.name)}
                </h3>
              </div>
            </>
          ) : null}
        </Link>
      ) : (
        <div className="aspect-[1.86/1] bg-slate-100" />
      )}
      <div className="flex min-h-[13rem] flex-col p-5">
        {item.dateLabel && (
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
            {item.dateLabel}
          </p>
        )}
        <h3 className="mt-3 text-[1.08rem] font-semibold leading-6 text-brand-dark">
          <Link
            href={item.href}
            className="transition hover:text-brand-accent"
          >
            {item.name}
          </Link>
        </h3>
        {item.description && (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-text-secondary">
            {item.description}
          </p>
        )}
        <Link
          href={item.href}
          className="mt-auto inline-flex pt-5 text-sm font-semibold text-brand-accent transition hover:text-brand-accent-hover"
        >
          Continue reading
        </Link>
      </div>
    </article>
  );
}

export function ContentPage({
  title,
  description,
  htmlContent,
  breadcrumbs,
  variant = "default",
  relatedItems,
  relatedTitle = "Related reading",
  ctaHeading = "Need project help or a spec review?",
  ctaText = "Contact Us",
  ctaHref = "/contact#technical-review",
  ctaSecondaryText,
  ctaSecondaryHref,
  heroImage,
  heroImageMode,
  heroStats,
  heroEyebrow,
  customHero,
  pageUrl,
  structuredData = [],
  author,
  reviewedBy,
  publishedAt,
  beforeArticleContent,
  beforeExpertContent,
  afterContent,
  hideSidebar = false,
  hideDirectInquiry = false,
  hideExpertBio = false,
}: ContentPageProps) {
  const isKnowledgeBase = variant === "knowledge-base";
  const isInsight = variant === "insight";
  const isApplication = variant === "application";
  const isCapability = variant === "capability";
  const isProduct = variant === "product";
  const isSurface = variant === "surface";
  const isDatasheet = variant === "datasheet";
  const directInquiryVariant = hideDirectInquiry
    ? null
    : isProduct
    ? "product"
    : isApplication
      ? "application"
      : isCapability
        ? "capability"
        : null;
  const resolvedRelatedItems = isKnowledgeBase
    ? relatedItems?.slice(0, 3)
    : relatedItems;
  const sidebarRelatedItems = resolvedRelatedItems?.slice(0, 3) ?? [];
  const schemaNodes = [
    ...(pageUrl
      ? [buildBreadcrumbSchema({ breadcrumbs, pageUrl, pageTitle: title })]
      : []),
    ...structuredData,
  ];

  const renderReleaseCheckCard = (placement: "sidebar" | "mobile" = "sidebar") => {
    const isMobilePlacement = placement === "mobile";
    const checkLabel = isApplication
      ? "Application Check"
      : isProduct
        ? "Product Release"
        : isSurface
          ? "Finish Review"
        : isDatasheet
          ? "Datasheet Review"
          : "Release Check";
    const checkNote = isApplication
      ? "Grade, finish, corrosion risk, and release documents checked together."
      : isProduct
        ? "Stock form, grade, finish, tolerance, packing, and timing checked together."
        : isSurface
          ? "Substrate, finish, film, sample, light, and packing checked together."
        : isDatasheet
          ? "Chemistry, finish, document route, and stop condition checked before quote or PO."
          : null;

    return (
      <div
        className={`rounded-card-md border border-cream-border bg-cream-50 shadow-[0_16px_42px_rgba(13,20,27,0.06)] ${
          isMobilePlacement ? "p-4" : "p-5"
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
          {checkLabel}
        </p>
        <p
          className={`font-semibold text-brand-dark ${
            isMobilePlacement ? "mt-2 text-[0.95rem] leading-6" : "mt-3 text-sm leading-6"
          }`}
        >
          {ctaHeading}
        </p>
        {checkNote && (
          <p className="mt-2 text-sm leading-6 text-text-secondary">
            {checkNote}
          </p>
        )}
        <div className={isMobilePlacement ? "mt-3 grid gap-2 sm:grid-cols-2" : ""}>
          <Link
            href={ctaHref}
            className={`inline-flex min-h-11 w-full items-center justify-center rounded-full bg-brand-dark px-4 text-sm font-semibold text-white transition-colors hover:bg-[#18222d] ${
              isMobilePlacement ? "py-2.5" : "mt-4 py-2.5"
            }`}
          >
            {ctaText}
          </Link>
          {ctaSecondaryText && ctaSecondaryHref && (
            <Link
              href={ctaSecondaryHref}
              className={`inline-flex min-h-11 w-full items-center justify-center rounded-full border border-cream-border bg-white px-4 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-accent hover:text-brand-accent ${
                isMobilePlacement ? "py-2.5" : "mt-3 py-2.5"
              }`}
            >
              {ctaSecondaryText}
            </Link>
          )}
        </div>
      </div>
    );
  };

  const surfaceHeroAction = isSurface ? (
    <div className="mt-7 grid max-w-5xl gap-3 lg:grid-cols-[minmax(0,0.78fr)_minmax(21rem,1fr)] lg:items-stretch">
      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
        <Link
          href={ctaHref}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand-dark px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(13,20,27,0.14)] transition-colors hover:bg-[#18222d]"
        >
          {ctaText}
        </Link>
        <Link
          href={ctaSecondaryHref ?? "/resources/stainless-steel-guides#processing"}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d8cbb8] bg-white/72 px-5 py-3 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-accent hover:text-brand-accent"
        >
          {ctaSecondaryText ?? "Open finish guides"}
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-1.5 rounded-card-md border border-[#d8cbb8] bg-white/62 p-2 shadow-[0_14px_34px_rgba(13,20,27,0.055)] backdrop-blur-sm sm:gap-2">
        {[
          ["Sample", "Before release"],
          ["Film", "With fabrication"],
          ["Light", "Before packing"],
        ].map(([label, text]) => (
          <div
            key={label}
            className="rounded-card-sm bg-white/76 px-2.5 py-2 text-left"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#8a6b32]">
              {label}
            </p>
            <p className="mt-1 text-[0.82rem] font-semibold leading-5 text-brand-dark">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  ) : undefined;

  const mobileCapabilityCta = isCapability && !hideSidebar ? (
    <div className="not-prose mb-8 lg:hidden">
      {renderReleaseCheckCard("mobile")}
    </div>
  ) : null;
  const mobileApplicationCta = isApplication && !hideSidebar ? (
    <div className="not-prose mb-8 lg:hidden">
      {renderReleaseCheckCard("mobile")}
    </div>
  ) : null;
  const mobileProductCta = isProduct && !hideSidebar ? (
    <div className="not-prose mb-8 lg:hidden">
      {renderReleaseCheckCard("mobile")}
    </div>
  ) : null;
  const mobileSurfaceCta = null;
  const mobileDatasheetCta = isDatasheet && !hideSidebar ? (
    <div className="not-prose mb-8 lg:hidden">
      {renderReleaseCheckCard("mobile")}
    </div>
  ) : null;

  const sidebar = !hideSidebar && !isKnowledgeBase ? (
    <div className={`${isCapability || isApplication || isProduct || isSurface || isDatasheet ? "hidden lg:block" : ""} sticky top-24 space-y-4`}>
      {renderReleaseCheckCard("sidebar")}
      {sidebarRelatedItems.length > 0 && (
        <div className="rounded-card-md border border-cream-border bg-white p-5 shadow-[0_12px_34px_rgba(13,20,27,0.045)]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
            {relatedTitle}
          </p>
          <div className="mt-4 space-y-2">
            {sidebarRelatedItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-card-sm border border-cream-border-soft bg-cream-50 px-3 py-3 text-sm font-semibold leading-5 text-brand-dark transition hover:border-brand-accent/50 hover:bg-white hover:text-brand-accent"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  ) : undefined;

  const cleanKnowledgeBaseRelatedSlots =
    isKnowledgeBase && customHero && resolvedRelatedItems?.length
      ? Array.from({ length: 2 }, (_, index) => resolvedRelatedItems[index] ?? null)
      : [];
  const knowledgeBaseRelatedSection =
    isKnowledgeBase && customHero && cleanKnowledgeBaseRelatedSlots.length ? (
      <section className="not-prose mt-14 border-t border-slate-200 pt-9">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6b32]">
          {relatedTitle}
        </p>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          {cleanKnowledgeBaseRelatedSlots.map((item, index) =>
            item ? (
              <CleanKnowledgeBaseRelatedCard key={item.href} item={item} />
            ) : (
              <article
                key={`reserved-guide-${index}`}
                className="overflow-hidden border border-dashed border-slate-200 bg-white"
              >
                <div className="aspect-[1.86/1] bg-[linear-gradient(135deg,#f8fafc_0%,#eef2f6_100%)]" />
                <div className="flex min-h-[13rem] flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
                    Reserved guide slot
                  </p>
                  <h3 className="mt-3 text-[1.08rem] font-semibold leading-6 text-slate-400">
                    Next stainless steel guide preview
                  </h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-400">
                    This position is reserved for the next related guide once
                    its cover image and article preview are confirmed.
                  </p>
                </div>
              </article>
            )
          )}
        </div>
      </section>
    ) : isKnowledgeBase && resolvedRelatedItems?.length ? (
      <section className="not-prose mt-16 border-t border-slate-200 pt-8 sm:mt-20 sm:pt-10">
        <div className="max-w-[58rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
            {relatedTitle}
          </p>
          <ul className="mt-6 divide-y divide-slate-200/80 border-y border-slate-200/80">
            {resolvedRelatedItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex items-start justify-between gap-6 py-4 text-brand-dark transition-colors hover:text-[#36526B]"
                >
                  <span className="max-w-2xl text-[1rem] leading-7">
                    {item.name}
                  </span>
                  <span className="pt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-400 transition-colors group-hover:text-slate-500">
                    Read next
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    ) : null;
  const datasheetExitCue = isDatasheet ? (
    <section className="not-prose mt-10 overflow-hidden rounded-[1.35rem] border border-[#d8cbb8] bg-[linear-gradient(135deg,#fffdf8_0%,#f4ead9_62%,#eef3f5_100%)] p-5 shadow-[0_16px_38px_rgba(13,20,27,0.055)] sm:p-6">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,1fr)] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a6b32]">
            Before this enters the RFQ
          </p>
          <h2 className="mt-3 text-[1.45rem] font-semibold leading-tight tracking-[-0.025em] text-brand-dark sm:text-[1.75rem]">
            A datasheet becomes useful when the order route is named beside it.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[#5d554b] sm:text-[0.96rem] sm:leading-7">
            Keep the reference compact, then attach the grade, finish, tolerance,
            document route, and arrival condition before it turns into a PO.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link
            href={ctaHref}
            className="group rounded-[1.05rem] border border-[#d8cbb8] bg-white/78 p-4 transition hover:border-brand-accent hover:bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6b32]">
              Check the route
            </p>
            <p className="mt-3 text-sm font-semibold leading-6 text-brand-dark">
              Send the spec point that still feels open.
            </p>
            <span className="mt-4 inline-flex min-h-10 items-center rounded-full bg-brand-dark px-4 text-sm font-semibold text-white transition group-hover:bg-brand-accent group-hover:text-brand-dark">
              {ctaText}
            </span>
          </Link>
          <Link
            href={ctaSecondaryHref ?? "/resources/stainless-steel-guides"}
            className="group rounded-[1.05rem] border border-[#d8cbb8] bg-white/62 p-4 transition hover:border-brand-accent hover:bg-white"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6b32]">
              Keep the reference
            </p>
            <p className="mt-3 text-sm font-semibold leading-6 text-brand-dark">
              Open the related grade or finish before quoting.
            </p>
            <span className="mt-4 inline-flex min-h-10 items-center rounded-full border border-[#d8cbb8] bg-white px-4 text-sm font-semibold text-brand-dark transition group-hover:border-brand-accent group-hover:text-brand-accent">
              {ctaSecondaryText ?? "Open reference"}
            </span>
          </Link>
        </div>
      </div>
    </section>
  ) : null;
  const insightRelatedSection =
    isInsight && resolvedRelatedItems?.length ? (
      <section className="not-prose mt-14 border-t border-slate-200 pt-9">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6b32]">
          {relatedTitle}
        </p>
        <div className="mt-5 grid gap-6 sm:grid-cols-2">
          {resolvedRelatedItems.slice(0, 2).map((item) => (
            <article
              key={item.href}
              className="group overflow-hidden border border-slate-200 bg-white transition hover:border-brand-accent/50 hover:shadow-[0_16px_36px_rgba(13,20,27,0.06)]"
            >
              {item.image && (
                <Link
                  href={item.href}
                  className="relative block aspect-[1.86/1] overflow-hidden bg-slate-100"
                  aria-label={item.name}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 360px, calc(100vw - 2rem)"
                  />
                </Link>
              )}
              <div className="flex min-h-[13rem] flex-col p-5">
                {item.dateLabel && (
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
                    {item.dateLabel}
                  </p>
                )}
                <h3 className="mt-3 text-[1.08rem] font-semibold leading-6 text-brand-dark">
                  <Link
                    href={item.href}
                    className="transition hover:text-brand-accent"
                  >
                    {item.name}
                  </Link>
                </h3>
                {item.description && (
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-text-secondary">
                    {item.description}
                  </p>
                )}
                <Link
                  href={item.href}
                  className="mt-auto inline-flex pt-5 text-sm font-semibold text-brand-accent transition hover:text-brand-accent-hover"
                >
                  Continue reading
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    ) : null;

  return (
    <>
      {schemaNodes.map((node, index) => (
        <script
          key={`${title}-schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
      <ArticleLayout
        title={title}
        description={description}
        breadcrumbs={breadcrumbs}
        sidebar={sidebar}
        variant={variant}
        heroImage={heroImage}
        heroImageMode={heroImageMode}
        heroStats={heroStats}
        heroEyebrow={heroEyebrow}
        heroActionContent={surfaceHeroAction}
        customHero={customHero}
        author={author}
        reviewedBy={reviewedBy}
        publishedAt={publishedAt}
      >
        {mobileCapabilityCta}
        {mobileApplicationCta}
        {mobileProductCta}
        {mobileSurfaceCta}
        {mobileDatasheetCta}
        {beforeArticleContent && (
          <div
            className={
              isKnowledgeBase
                ? "not-prose mb-12 border-b border-slate-200 pb-10"
                : isCapability
                  ? "not-prose mb-12"
                  : isApplication
                    ? "not-prose mb-10"
                  : isProduct
                    ? "not-prose mb-12"
                  : isSurface
                    ? "not-prose mb-10"
                  : isDatasheet
                    ? "not-prose mb-10"
                  : "not-prose mb-10"
            }
          >
            {beforeArticleContent}
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        {directInquiryVariant && (
          <DirectInquiryStrip
            title={title}
            pageUrl={pageUrl}
            variant={directInquiryVariant}
          />
        )}
        {beforeExpertContent && (
          <div
            className={
              isKnowledgeBase
                ? "not-prose mt-16 border-t border-slate-200 pt-8 sm:mt-20 sm:pt-10"
                : isProduct
                  ? "not-prose mt-12"
                : isSurface
                  ? "not-prose mt-10"
                : isDatasheet
                  ? "not-prose mt-10"
                : "not-prose mt-12"
            }
          >
            {beforeExpertContent}
          </div>
        )}
        {!hideExpertBio && (
          <ExpertBioCard
            author={author}
            reviewedBy={reviewedBy}
            publishedAt={publishedAt}
            variant={variant}
          />
        )}
        {datasheetExitCue}
        {afterContent && (
          <div
            className={
              isKnowledgeBase
                ? "not-prose mt-16 border-t border-slate-200 pt-8 sm:mt-20 sm:pt-10"
                : "not-prose mt-12"
            }
          >
            {afterContent}
          </div>
        )}
        {insightRelatedSection}
        {knowledgeBaseRelatedSection}
      </ArticleLayout>
    </>
  );
}



