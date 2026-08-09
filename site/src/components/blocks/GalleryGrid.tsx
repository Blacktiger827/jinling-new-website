/**
 * GalleryGrid — 图片导航网格
 *
 * 用于 Overview 页替代长文本，每格是"图片 + 标题 + 副标题 + 跳转链接"。
 * 支持 2/3/4 列切换。
 *
 * 示例用法：
 * <GalleryGrid items={[
 *   { image: "/images/products/coil/hero.webp", title: "Coil", subtitle: "0.3-14 mm", href: "/products/stainless-steel-coil" },
 *   ...
 * ]} columns={4} />
 */

import Image from "next/image";
import Link from "next/link";

export interface GalleryItem {
  image: string;
  title: string;
  subtitle?: string;
  href: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  columns?: 2 | 3 | 4;
  aspectRatio?: "square" | "landscape" | "portrait";
  className?: string;
}

export function GalleryGrid({
  items,
  columns = 4,
  aspectRatio = "square",
  className = "",
}: GalleryGridProps) {
  const colsClass = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 lg:grid-cols-4",
  }[columns];

  const aspectClass = {
    square: "aspect-square",
    landscape: "aspect-[4/3]",
    portrait: "aspect-[3/4]",
  }[aspectRatio];

  return (
    <div className={`grid ${colsClass} gap-4 sm:gap-6 ${className}`}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group block overflow-hidden rounded-lg bg-bg-light transition-shadow hover:shadow-lg"
        >
          <div className={`relative ${aspectClass} overflow-hidden bg-gray-200`}>
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            />
          </div>
          <div className="p-4">
            <h3 className="text-sm font-semibold text-brand-dark group-hover:text-brand-accent transition-colors">
              {item.title}
            </h3>
            {item.subtitle && (
              <p className="mt-1 text-xs text-text-secondary">{item.subtitle}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
