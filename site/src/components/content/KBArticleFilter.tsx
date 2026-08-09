"use client";

import Link from "next/link";
import { startTransition, useDeferredValue, useEffect, useState } from "react";
import { KB_CATEGORIES, KB_CATEGORY_NAMES } from "@/lib/knowledge-base";

interface ArticleEntry {
  slug: string;
  title: string;
  description: string;
  category?: string;
}

const INITIAL_VISIBLE = 12;

function getCategoryLabel(category?: string) {
  if (category && category in KB_CATEGORY_NAMES) {
    return KB_CATEGORY_NAMES[category as keyof typeof KB_CATEGORY_NAMES];
  }

  return "Stainless Steel Guide";
}

export function KBArticleFilter({ articles }: { articles: ArticleEntry[] }) {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query.trim().toLowerCase());
  const filterKey = `${active}:${deferredQuery}`;
  const [visibleState, setVisibleState] = useState({
    key: filterKey,
    count: INITIAL_VISIBLE,
  });
  const visibleCount =
    visibleState.key === filterKey ? visibleState.count : INITIAL_VISIBLE;

  useEffect(() => {
    const syncFromLocation = () => {
      const track =
        typeof window !== "undefined"
          ? new URLSearchParams(window.location.search).get("track") || ""
          : "";
      const hash =
        typeof window !== "undefined"
          ? window.location.hash.replace("#", "")
          : "";

      if (hash && KB_CATEGORIES.some((category) => category.slug === hash)) {
        setActive(hash);
        return;
      }

      if (track && KB_CATEGORIES.some((category) => category.slug === track)) {
        setActive(track);
        return;
      }

      setActive("all");
    };

    syncFromLocation();
    window.addEventListener("hashchange", syncFromLocation);
    return () => window.removeEventListener("hashchange", syncFromLocation);
  }, []);

  const categoryCounts = KB_CATEGORIES.map((category) => ({
    ...category,
    count: articles.filter((article) => article.category === category.slug).length,
  }));

  const selectTrack = (track: string) => {
    startTransition(() => setActive(track));

    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    if (track === "all") {
      params.delete("track");
    } else {
      params.set("track", track);
    }
    const nextSearch = params.toString() ? `?${params.toString()}` : "";

    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${nextSearch}#archive`
    );
  };

  const filtered = articles.filter((article) => {
    const matchesCategory =
      active === "all" ? true : article.category === active;

    if (!matchesCategory) return false;
    if (!deferredQuery) return true;

    const haystack = `${article.title} ${article.description}`.toLowerCase();
    return haystack.includes(deferredQuery);
  });

  const visibleArticles = filtered.slice(0, visibleCount);

  return (
    <div className="rounded-card-lg border border-cream-border bg-white p-5 shadow-[0_20px_80px_rgba(13,20,27,0.06)] sm:p-8">
      <div className="flex flex-col gap-5 border-b border-cream-border pb-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-light">
              Technical article finder
            </p>
          </div>
          <div className="text-sm text-text-light">
            Showing{" "}
            <span className="font-semibold text-text-primary">
              {visibleArticles.length}
            </span>{" "}
            of{" "}
            <span className="font-semibold text-text-primary">
              {filtered.length}
            </span>{" "}
            matching articles
          </div>
        </div>

        <div className="relative max-w-xl">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-light"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-4.35-4.35m1.85-5.15a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
          <input
            id="kb-article-filter-query"
            name="q"
            type="search"
            aria-label="Search stainless steel guides"
            value={query}
            onChange={(event) =>
              startTransition(() => setQuery(event.target.value))
            }
            placeholder="Search topics like 304 vs 316, passivation, MTC, or welding"
            className="w-full rounded-full border border-cream-border bg-cream-50 py-3 pl-11 pr-12 text-sm text-text-primary outline-none transition focus:border-brand-accent focus:bg-white"
          />
          {query && (
            <button
              type="button"
              onClick={() => startTransition(() => setQuery(""))}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-cream-border px-3 py-1 text-xs font-medium text-text-secondary transition hover:border-brand-accent hover:text-text-primary"
            >
              Clear
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            id="all-articles"
            type="button"
            onClick={() => selectTrack("all")}
            className={`rounded-full border px-4 py-2 text-sm transition ${
              active === "all"
                ? "border-brand-dark bg-brand-dark text-white"
                : "border-cream-border bg-cream-50 text-text-secondary hover:border-brand-accent hover:text-text-primary"
            }`}
          >
            All Articles
            <span className="ml-2 text-xs opacity-70">{articles.length}</span>
          </button>
          {categoryCounts.map((category) => (
            <button
              id={category.slug}
              key={category.slug}
              type="button"
              onClick={() => selectTrack(category.slug)}
              className={`scroll-mt-32 rounded-full border px-4 py-2 text-sm transition ${
                active === category.slug
                  ? "border-brand-dark bg-brand-dark text-white"
                  : "border-cream-border bg-cream-50 text-text-secondary hover:border-brand-accent hover:text-text-primary"
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-70">{category.count}</span>
            </button>
          ))}
        </div>
      </div>

      {visibleArticles.length > 0 ? (
        <>
          <div className="mt-6 grid gap-4 xl:grid-cols-2">
            {visibleArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/knowledge-base/${article.slug}`}
                className="group flex h-full flex-col justify-between rounded-card-md border border-cream-border-soft bg-cream-50 p-5 transition duration-300 hover:-translate-y-0.5 hover:border-brand-accent/60 hover:bg-white hover:shadow-[0_18px_50px_rgba(13,20,27,0.08)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-text-light">
                      {getCategoryLabel(article.category)}
                    </span>
                    <span className="text-xs text-text-light">/{article.slug}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-snug text-brand-dark transition-colors group-hover:text-brand-accent">
                    {article.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-text-secondary line-clamp-3">
                    {article.description}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center text-sm font-semibold text-brand-dark transition-colors group-hover:text-brand-accent">
                  Read article
                  <svg
                    className="ml-2 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.75}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h14m-5.25-5.25L18.5 12l-5.25 5.25"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          {filtered.length > visibleCount && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() =>
                  startTransition(() =>
                    setVisibleState({
                      key: filterKey,
                      count: visibleCount + INITIAL_VISIBLE,
                    })
                  )
                }
                className="rounded-full border border-brand-dark px-5 py-2.5 text-sm font-semibold text-brand-dark transition hover:bg-brand-dark hover:text-white"
              >
                Load {Math.min(INITIAL_VISIBLE, filtered.length - visibleCount)} more
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="py-16 text-center">
          <p className="text-lg font-semibold text-brand-dark">
            No articles match this search yet.
          </p>
          <p className="mt-2 text-sm text-text-secondary">
            Try a grade name, a corrosion mechanism, or switch back to a broader
            topic track.
          </p>
        </div>
      )}
    </div>
  );
}

