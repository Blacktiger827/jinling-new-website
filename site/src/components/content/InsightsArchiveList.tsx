"use client";

import { startTransition, useState } from "react";
import Link from "next/link";

const INITIAL_VISIBLE = 4;
const STEP = 4;

interface InsightsArchiveItem {
  slug: string;
  title: string;
  description: string;
  publishedAt: string | undefined;
  typeLabel: string;
  sourceBadges: string[];
}

interface InsightsArchiveListProps {
  articles: InsightsArchiveItem[];
}

export function InsightsArchiveList({ articles }: InsightsArchiveListProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const visibleArticles = articles.slice(0, visibleCount);
  const remaining = Math.max(articles.length - visibleCount, 0);

  function showMore() {
    startTransition(() => {
      setVisibleCount((current) => Math.min(current + STEP, articles.length));
    });
  }

  return (
    <div className="mt-8">
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-text-light">
        Showing {visibleArticles.length} of {articles.length} dated notes
      </p>
      <div className="grid gap-4 lg:grid-cols-2">
        {visibleArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/insights/${article.slug}`}
            className="group flex h-full flex-col rounded-card-md border border-border bg-white p-5 transition-all hover:border-brand-accent/40 hover:shadow-md"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-brand-accent/20 bg-brand-accent/10 px-2.5 py-1 text-xs font-semibold text-brand-dark">
                {article.typeLabel}
              </span>
              {article.publishedAt && (
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-text-light">
                  {article.publishedAt}
                </span>
              )}
            </div>
            <h3 className="mt-3 text-base font-semibold text-brand-dark transition-colors group-hover:text-brand-accent">
              {article.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-6 text-text-light line-clamp-2">
              {article.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {article.sourceBadges.slice(0, 3).map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-border bg-cream-100 px-2.5 py-1 text-xs font-medium text-text-secondary"
                >
                  {badge}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {remaining > 0 && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={showMore}
            className="rounded-full border border-brand-dark/15 bg-white px-5 py-3 text-sm font-semibold text-brand-dark transition hover:border-brand-accent hover:text-brand-accent"
          >
            Show {Math.min(STEP, remaining)} older market notes
          </button>
        </div>
      )}
    </div>
  );
}
