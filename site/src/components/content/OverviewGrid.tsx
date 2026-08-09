import Link from "next/link";

interface GridItem {
  title: string;
  description: string;
  href: string;
}

interface OverviewGridProps {
  title: string;
  subtitle: string;
  description: string;
  items: GridItem[];
  columns?: 2 | 3 | 4;
}

export function OverviewGrid({
  title,
  subtitle,
  description,
  items,
  columns = 3,
}: OverviewGridProps) {
  const colClass =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <div className="bg-brand-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p className="text-brand-accent text-sm font-medium tracking-widest uppercase mb-3">
            {subtitle}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight max-w-3xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className={`grid grid-cols-1 ${colClass} gap-6`}>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-xl border border-border bg-white p-6 hover:border-brand-accent/40 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-brand-dark group-hover:text-brand-accent transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-3">
                {item.description}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-accent">
                Learn more
                <svg
                  className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
