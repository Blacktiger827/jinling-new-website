"use client";

import Image from "next/image";
import { useState } from "react";

interface VideoEmbedProps {
  youtubeId: string;
  title: string;
  poster?: string;
  caption?: string;
  className?: string;
  startSeconds?: number;
}

export function VideoEmbed({
  youtubeId,
  title,
  poster,
  caption,
  className = "",
  startSeconds = 0,
}: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false);
  const fallbackPoster = `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`;
  const coverImage = poster || fallbackPoster;
  const embedQuery = `autoplay=1${startSeconds > 0 ? `&start=${startSeconds}` : ""}`;

  return (
    <figure className={className}>
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
        {!loaded ? (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="group absolute inset-0 flex items-center justify-center"
            aria-label={`Play ${title}`}
          >
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 720px"
              unoptimized={!poster}
            />
            <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent shadow-lg transition-transform group-hover:scale-110">
              <svg
                className="h-7 w-7 translate-x-0.5 text-brand-dark"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M6.3 2.84A1 1 0 004.8 3.7v12.6a1 1 0 001.5.86l11-6.3a1 1 0 000-1.72l-11-6.3z" />
              </svg>
            </span>
          </button>
        ) : (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?${embedQuery}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs text-text-secondary">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}