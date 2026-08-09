"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type CultureWallItem = {
  src: string;
  alt: string;
  label: string;
};

type CultureWallGroup = {
  title: string;
  eyebrow: string;
  description: string;
  items: readonly CultureWallItem[];
};

type AboutCultureWallProps = {
  groups: readonly CultureWallGroup[];
};

export function AboutCultureWall({ groups }: AboutCultureWallProps) {
  const [activeGroupIndex, setActiveGroupIndex] = useState<number | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const activeGroup =
    activeGroupIndex !== null ? groups[activeGroupIndex] ?? null : null;
  const activeItem = activeGroup?.items[activeImageIndex] ?? null;

  const openGroup = (groupIndex: number) => {
    setActiveGroupIndex(groupIndex);
    setActiveImageIndex(0);
  };

  const showPreviousImage = useCallback(() => {
    setActiveImageIndex((current) => {
      if (!activeGroup || activeGroup.items.length === 0) {
        return 0;
      }

      return current === 0 ? activeGroup.items.length - 1 : current - 1;
    });
  }, [activeGroup]);

  const showNextImage = useCallback(() => {
    setActiveImageIndex((current) => {
      if (!activeGroup || activeGroup.items.length === 0) {
        return 0;
      }

      return current === activeGroup.items.length - 1 ? 0 : current + 1;
    });
  }, [activeGroup]);

  useEffect(() => {
    if (!activeGroup) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveGroupIndex(null);
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
  }, [activeGroup, showNextImage, showPreviousImage]);

  return (
    <>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {groups.map((group, index) => {
          const cover = group.items[0];
          const second = group.items[1] ?? cover;
          const third = group.items[2] ?? cover;

          return (
            <button
              key={group.title}
              type="button"
              onClick={() => openGroup(index)}
              className="group relative min-h-[22rem] overflow-hidden bg-[#111820] text-left shadow-[0_18px_42px_rgba(13,20,27,0.13)] outline-none transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_58px_rgba(13,20,27,0.22)] focus:-translate-y-1 focus:shadow-[0_26px_58px_rgba(13,20,27,0.22)] focus-visible:ring-2 focus-visible:ring-[#111820]"
              aria-label={`Open ${group.title} gallery`}
            >
              <Image
                src={cover.src}
                alt={cover.alt}
                fill
                className="object-cover opacity-88 transition duration-500 group-hover:scale-105 group-hover:brightness-[0.78] group-focus:scale-105 group-focus:brightness-[0.78]"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
              <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.12)_0%,rgba(13,20,27,0.2)_36%,rgba(13,20,27,0.88)_100%)]" />
              <span className="absolute left-4 top-4 bg-[#f6d044] px-3 py-1.5 text-[0.64rem] font-extrabold uppercase tracking-[0.14em] text-[#111820] shadow-[0_8px_18px_rgba(13,20,27,0.16)]">
                {group.eyebrow}
              </span>

              <div className="absolute inset-x-4 bottom-4">
                <h3 className="text-[1.2rem] font-extrabold uppercase leading-tight tracking-[0.08em] text-white">
                  {group.title}
                </h3>
                <p className="mt-3 text-[0.78rem] leading-5 text-white/78">
                  {group.description}
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[cover, second, third].map((item) => (
                    <span
                      key={item.src}
                      className="relative block aspect-[4/3] overflow-hidden border border-white/18 bg-white/10"
                    >
                      <Image
                        src={item.src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="90px"
                        aria-hidden="true"
                      />
                    </span>
                  ))}
                </div>
                <span className="mt-4 inline-flex bg-white px-3 py-2 text-[0.66rem] font-extrabold uppercase tracking-[0.14em] text-[#111820] transition group-hover:bg-[#f6d044] group-focus:bg-[#f6d044]">
                  View gallery
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {activeGroup && activeItem ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d141b]/88 px-4 py-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${activeGroup.title} gallery`}
          onClick={() => setActiveGroupIndex(null)}
        >
          <div
            className="relative flex h-full max-h-[88vh] w-full max-w-6xl flex-col bg-[#f5efe3] p-3 shadow-[0_24px_80px_rgba(0,0,0,0.34)] sm:p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate text-xs font-extrabold uppercase tracking-[0.16em] text-[#9a6b00]">
                  {activeGroup.eyebrow}
                </p>
                <p className="mt-1 truncate text-sm font-extrabold uppercase tracking-[0.12em] text-[#111820]">
                  {activeGroup.title} / {activeItem.label}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveGroupIndex(null)}
                className="shrink-0 bg-[#111820] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-[#f6d044] hover:text-[#111820]"
              >
                Close
              </button>
            </div>
            <div className="relative min-h-0 flex-1 bg-white">
              <button
                type="button"
                onClick={showPreviousImage}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-[#111820]/88 text-xl font-bold text-white transition hover:bg-[#f6d044] hover:text-[#111820]"
                aria-label="Previous image"
              >
                &lt;
              </button>
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
              <button
                type="button"
                onClick={showNextImage}
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center bg-[#111820]/88 text-xl font-bold text-white transition hover:bg-[#f6d044] hover:text-[#111820]"
                aria-label="Next image"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
