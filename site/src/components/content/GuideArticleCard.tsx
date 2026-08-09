import type { ContentItem } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import {
  getGuidePosterTitle,
  guideCoverBySlug,
  guideCoverImageClassBySlug,
} from "./guidePosterCovers";

function getPreviewText(article: ContentItem) {
  return article.description.replace(/\s+/g, " ").trim();
}

export function GuideArticleCard({ article }: { article: ContentItem }) {
  const imageSrc =
    guideCoverBySlug[article.slug] ||
    article.heroImage ||
    "/images/hero/products-core-forms-cold-rolled.jpg";
  const hasOverlayTitle = Boolean(guideCoverBySlug[article.slug]);
  const isPosterTitlePreview = hasOverlayTitle;

  return (
    <Link
      href={`/knowledge-base/${article.slug}`}
      className="group block overflow-hidden border border-cream-border bg-white shadow-[0_18px_46px_rgba(13,20,27,0.055)] transition hover:-translate-y-1 hover:border-brand-accent/55 hover:shadow-[0_24px_58px_rgba(13,20,27,0.1)]"
    >
      <article className="flex flex-col">
        <div className="relative aspect-[16/9] overflow-hidden bg-cream-100">
          <Image
            src={imageSrc}
            alt={`${article.title} stainless steel guide cover`}
            fill
            sizes="(min-width: 1024px) 56rem, 100vw"
            className={
              guideCoverImageClassBySlug[article.slug] ||
              "object-cover transition duration-500 group-hover:scale-[1.03]"
            }
          />
          {hasOverlayTitle ? (
            <>
              <div
                className={
                  isPosterTitlePreview
                    ? "absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.18)_0%,rgba(13,20,27,0.58)_52%,rgba(13,20,27,0.22)_100%)]"
                    : "absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.12)_0%,rgba(13,20,27,0.82)_100%)]"
                }
              />
              <div
                className={
                  isPosterTitlePreview
                    ? "absolute inset-0 flex items-center justify-center p-5 text-center sm:p-6"
                    : "absolute inset-x-0 bottom-0 p-5 sm:p-6"
                }
              >
                {!isPosterTitlePreview ? (
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
                    Stainless Steel Guide
                  </span>
                ) : null}
                <h3
                  className={
                    isPosterTitlePreview
                      ? "mx-auto max-w-[50rem] text-[2.5rem] font-black leading-[0.95] tracking-normal text-brand-accent drop-shadow-[0_4px_16px_rgba(0,0,0,0.52)] sm:text-[3.25rem] lg:text-[3.75rem]"
                      : "mt-3 max-w-[50rem] text-[1.2rem] font-semibold leading-tight text-white sm:whitespace-nowrap sm:text-[1.35rem] lg:text-[1.45rem]"
                  }
                >
                  {getGuidePosterTitle(article.slug, article.title)}
                </h3>
              </div>
            </>
          ) : null}
        </div>
        <div className="flex min-h-[13rem] flex-col p-5 sm:p-6">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
            {article.category || "Stainless Steel Guide"}
          </span>
          {!hasOverlayTitle ? (
            <h3 className="mt-3 text-[1.35rem] font-semibold leading-tight text-brand-dark transition group-hover:text-brand-accent sm:text-[1.55rem]">
              {article.title}
            </h3>
          ) : null}
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-text-secondary">
            {getPreviewText(article)}
          </p>
          <span className="mt-auto pt-5 text-sm font-semibold text-brand-accent">
            Continue reading
          </span>
        </div>
      </article>
    </Link>
  );
}
