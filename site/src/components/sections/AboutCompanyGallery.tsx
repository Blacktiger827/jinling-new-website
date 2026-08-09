"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

type CompanyGalleryItem = {
  src: string;
  alt: string;
  label: string;
};

type CompanyGalleryGroup = {
  title: string;
  items: readonly CompanyGalleryItem[];
};

type AboutCompanyGalleryProps = {
  groups: readonly CompanyGalleryGroup[];
};

export function AboutCompanyGallery({ groups }: AboutCompanyGalleryProps) {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const activeGroup = groups[activeGroupIndex] ?? groups[0];
  const activeImage =
    activeGroup && activeImageIndex !== null
      ? activeGroup.items[activeImageIndex] ?? null
      : null;
  const activeImageCount = activeGroup?.items.length ?? 0;
  const activeImageTitle = useMemo(() => {
    if (!activeImage) {
      return "";
    }

    return activeGroup
      ? `${activeGroup.title} / ${activeImage.label}`
      : activeImage.label;
  }, [activeGroup, activeImage]);

  const showPreviousImage = useCallback(() => {
    setActiveImageIndex((current) => {
      if (current === null || activeImageCount === 0) {
        return null;
      }

      return current === 0 ? activeImageCount - 1 : current - 1;
    });
  }, [activeImageCount]);

  const showNextImage = useCallback(() => {
    setActiveImageIndex((current) => {
      if (current === null || activeImageCount === 0) {
        return null;
      }

      return current === activeImageCount - 1 ? 0 : current + 1;
    });
  }, [activeImageCount]);

  useEffect(() => {
    if (!activeImage) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveImageIndex(null);
      }

      if (event.key === "ArrowLeft") {
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        showNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage, showNextImage, showPreviousImage]);

  if (!activeGroup) {
    return null;
  }

  return (
    <>
      <div className="mt-8 border border-[#d8cbb8] bg-white/54 p-3 shadow-[0_18px_48px_rgba(13,20,27,0.075)] sm:p-4">
        <div className="border border-[#e3d7c6] bg-[#fffaf1]/78 p-3">
          <div className="grid grid-cols-2 gap-2 border-b border-[#e0d3bf] pb-3 sm:grid-cols-3 lg:grid-cols-5">
            {groups.map((group, index) => {
              const isActive = index === activeGroupIndex;

              return (
                <button
                  key={group.title}
                  type="button"
                  onClick={() => setActiveGroupIndex(index)}
                  onFocus={() => setActiveGroupIndex(index)}
                  onMouseEnter={() => setActiveGroupIndex(index)}
                  className={[
                    "min-h-12 px-3 py-2 text-center text-[0.68rem] font-extrabold uppercase leading-snug tracking-[0.1em] transition",
                    isActive
                      ? "bg-[#111820] text-[#f6d044] shadow-[0_10px_24px_rgba(13,20,27,0.12)]"
                      : "bg-white/76 text-[#30363d] hover:bg-[#f6d044] hover:text-[#111820]",
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  {group.title}
                </button>
              );
            })}
          </div>

          <div className="pt-4">
            <div className="mb-3">
              <h3 className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#111820]">
                {activeGroup.title}
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {activeGroup.items.map((item, index) => (
                <button
                  key={item.src}
                  type="button"
                  onClick={() => setActiveImageIndex(index)}
                  className="group relative overflow-hidden bg-[#111820] text-left shadow-[0_10px_24px_rgba(13,20,27,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(13,20,27,0.16)]"
                >
                  <div className="relative aspect-[4/3] bg-[#efe5d5]">
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      className="scale-110 object-cover opacity-35 blur-md transition duration-500 group-hover:scale-125"
                      sizes="(min-width: 1024px) 220px, (min-width: 640px) 45vw, 100vw"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-[#f5efe3]/28" />
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-contain p-2 transition duration-500 group-hover:scale-[1.03]"
                      sizes="(min-width: 1024px) 220px, (min-width: 640px) 45vw, 100vw"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-2/5 bg-[linear-gradient(180deg,rgba(13,20,27,0)_0%,rgba(13,20,27,0.62)_100%)]" />
                  </div>
                  <span className="absolute inset-x-0 bottom-0 px-3 pb-3 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {activeImage ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d141b]/86 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={activeImageTitle}
          onClick={() => setActiveImageIndex(null)}
        >
          <div
            className="relative flex h-full max-h-[86vh] w-full max-w-6xl flex-col bg-[#f5efe3] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="min-w-0 truncate text-xs font-extrabold uppercase tracking-[0.16em] text-[#111820]">
                {activeImageTitle}
              </p>
              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                className="shrink-0 bg-[#111820] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-[#f6d044] hover:text-[#111820]"
              >
                Close
              </button>
            </div>
            <div className="relative min-h-0 flex-1 bg-white">
              <button
                type="button"
                onClick={showPreviousImage}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-[#111820]/88 text-2xl font-light leading-none text-white transition hover:bg-[#f6d044] hover:text-[#111820]"
                aria-label="Previous image"
              >
                ‹
              </button>
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-[#111820]/88 text-2xl font-light leading-none text-white transition hover:bg-[#f6d044] hover:text-[#111820]"
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
