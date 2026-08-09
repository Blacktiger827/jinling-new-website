import Link from "next/link";

interface ExpertBioCardProps {
  author?: string;
  reviewedBy?: string;
  publishedAt?: string;
  variant?: "default" | "knowledge-base" | "insight" | "application" | "capability" | "product" | "surface" | "datasheet";
}

function formatReviewDate(value: string) {
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

export function ExpertBioCard({
  author,
  reviewedBy,
  publishedAt,
  variant = "default",
}: ExpertBioCardProps) {
  if (!author && !reviewedBy && !publishedAt) return null;

  // Light-bg variants (KB + Application) get the warm-cream card; dark-bg
  // variants (default + Insight) get the white card with shadow.
  const useLightCard =
    variant === "knowledge-base" ||
    variant === "application" ||
    variant === "capability" ||
    variant === "product" ||
    variant === "surface" ||
    variant === "datasheet";
  const reviewedDateLine = publishedAt
    ? `Last reviewed ${formatReviewDate(publishedAt)}`
    : null;

  if (useLightCard) {
    return (
      <aside
        className="not-prose mt-12 rounded-2xl border border-slate-200/80 bg-warm-cream/70 p-6 sm:mt-16 sm:p-7"
        aria-label="Editorial review information"
      >
        <div className="flex items-start gap-4">
          <div
            aria-hidden
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-dark text-[0.78rem] font-semibold tracking-[0.12em] text-copper-soft"
          >
            JS
          </div>
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-copper">
              Editorial review
            </p>
            {reviewedBy && (
              <p className="mt-2 text-[0.98rem] font-medium leading-7 text-brand-dark">
                Technically reviewed by {reviewedBy}.
              </p>
            )}
            {(author || reviewedDateLine) && (
              <p className="mt-1 text-[0.9rem] leading-6 text-slate-500">
                {author && <>Authored by {author}</>}
                {author && reviewedDateLine && <> · </>}
                {reviewedDateLine}
              </p>
            )}
            <p className="mt-3 text-[0.9rem] leading-6 text-slate-500">
              Materials engineers, QC specialists, and export operations
              staff based at our Foshan production facility &mdash; the same
              team that releases our orders, signs our MTCs, and handles
              project specification reviews.
            </p>
            <Link
              href="/contact#technical-review"
              className="mt-4 inline-flex items-center gap-1.5 text-[0.88rem] font-medium text-editorial-link transition-colors hover:text-brand-dark"
            >
              Talk to engineering
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside
      className="not-prose mt-12 rounded-2xl border border-border bg-white p-6 shadow-sm sm:p-7"
      aria-label="Editorial review information"
    >
      <div className="flex items-start gap-4">
        <div
          aria-hidden
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-dark text-sm font-semibold tracking-wide text-copper-soft"
        >
          JS
        </div>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-copper">
            Editorial review
          </p>
          {reviewedBy && (
            <p className="mt-2 text-base font-medium leading-7 text-text-primary">
              Technically reviewed by {reviewedBy}.
            </p>
          )}
          {(author || reviewedDateLine) && (
            <p className="mt-1 text-sm leading-6 text-text-secondary">
              {author && <>Authored by {author}</>}
              {author && reviewedDateLine && <> · </>}
              {reviewedDateLine}
            </p>
          )}
          <p className="mt-3 text-sm leading-6 text-text-secondary">
            Materials engineers, QC specialists, and export operations staff
            based at our Foshan production facility &mdash; the same team that
            releases our orders, signs our MTCs, and handles project
            specification reviews.
          </p>
          <Link
            href="/contact#technical-review"
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand-dark transition-colors hover:text-brand-accent"
          >
            Talk to engineering
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
