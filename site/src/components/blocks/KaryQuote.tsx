/**
 * KaryQuote — 创始人 Kary 原话引用块
 *
 * 用于 About / Blog / Application 决策信任场景，嵌入 Kary 原话。
 * 可选配头像、YouTube 视频链接。
 *
 * 示例用法：
 * <KaryQuote
 *   quote="Quality lies in details. We don't chase for production speed."
 *   source="Kary's 2025 Year-End Review"
 *   videoHref="https://youtu.be/..."
 *   portrait="/images/about/kary-portrait.jpg"
 * />
 */

import Image from "next/image";

interface KaryQuoteProps {
  quote: string;
  source?: string;
  videoHref?: string;
  portrait?: string;
  className?: string;
}

export function KaryQuote({
  quote,
  source = "Kary · Jinling Steel",
  videoHref,
  portrait,
  className = "",
}: KaryQuoteProps) {
  return (
    <aside
      className={`rounded-lg border-l-4 border-brand-accent bg-bg-light p-6 sm:p-8 ${className}`}
    >
      <div className="flex gap-4 sm:gap-6">
        {portrait && (
          <div className="relative h-14 w-14 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-full bg-gray-200">
            <Image
              src={portrait}
              alt="Kary, Jinling Steel"
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
        )}
        <div className="flex-1">
          <blockquote className="text-base sm:text-lg italic text-brand-dark leading-relaxed">
            &ldquo;{quote}&rdquo;
          </blockquote>
          <footer className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-secondary">
            <span>— {source}</span>
            {videoHref && (
              <a
                href={videoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-accent hover:underline"
              >
                Watch on YouTube →
              </a>
            )}
          </footer>
        </div>
      </div>
    </aside>
  );
}
