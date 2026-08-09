/**
 * ApplicationShowcase - industry scene cards
 *
 * 用于 Application 行业页，或 Product/Surface 页的"Applications"区。
 * 每项是"场景图 + 行业名 + 推荐配方 + 跳转链接"。
 *
 * 示例用法：
 * <ApplicationShowcase items={[
 *   { image: "/images/applications/kitchen-equipment/scene-1.webp",
 *     industry: "Kitchen Equipment",
 *     recommendation: "304 / 316L · 1.5 mm · No.4",
 *     href: "/solutions/applications/kitchen-equipment" },
 * ]} />
 */

import Image from "next/image";
import Link from "next/link";

export interface ApplicationItem {
  image: string;
  industry: string;
  recommendation: string;
  href: string;
  description?: string;
}

interface ApplicationShowcaseProps {
  items: ApplicationItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function ApplicationShowcase({
  items,
  columns = 3,
  className = "",
}: ApplicationShowcaseProps) {
  const colsClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={`grid ${colsClass} auto-rows-fr gap-6 ${className}`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group flex h-full flex-col overflow-hidden rounded-card-lg border border-cream-border bg-white shadow-[0_18px_54px_rgba(13,20,27,0.055)] transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/45 hover:shadow-[0_24px_70px_rgba(13,20,27,0.09)]"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-[#d7d0c5]">
            <Image
              src={item.image}
              alt={item.industry}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.02)_0%,rgba(13,20,27,0.22)_100%)]" />
          </div>
          <div className="flex flex-1 flex-col p-5">
            <h3 className="text-lg font-semibold text-brand-dark transition-colors group-hover:text-brand-accent">
              {item.industry}
            </h3>
            <p className="mt-3 text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-brand-accent">
              {item.recommendation}
            </p>
            {item.description && (
              <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary line-clamp-3">
                {item.description}
              </p>
            )}
            <span className="mt-5 inline-flex text-sm font-semibold text-brand-dark transition-colors group-hover:text-brand-accent">
              Open application
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
