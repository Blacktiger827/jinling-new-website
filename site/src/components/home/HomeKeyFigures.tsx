"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const keyFigures = [
  {
    value: 1997,
    labelLines: ["Since 1997", "stainless steel service"],
    description:
      "A long-running stainless steel supplier rooted in China sourcing, service, and buyer relationships.",
  },
  {
    value: 29,
    suffix: "yrs",
    labelLines: ["stainless steel", "industry experience"],
    description:
      "Experience across stainless steel sourcing, surface finishing, processing, export packing, and customer support.",
  },
  {
    value: 8,
    suffix: "yrs",
    labelLines: ["weekly market", "reporting practice"],
    description:
      "Weekly China stainless steel market reports that help buyers follow price movement, supply changes, and sourcing timing.",
  },
  {
    value: 25000,
    suffix: "m2",
    labelLines: ["Foshan stainless", "processing base"],
    description:
      "A Foshan stainless steel manufacturing base supporting finishing, slitting, cut-to-length, film, packing, and shipment control.",
  },
  {
    value: 15,
    suffix: "yrs",
    labelLines: ["export order", "support experience"],
    description:
      "Export experience for buyers who care about surface quality, documents, packing, and long-distance transport protection.",
  },
  {
    value: 10,
    suffix: "+",
    labelLines: ["quality checks", "before delivery"],
    description:
      "Order details, thickness, surface, film, packing, marking, loading, and shipment preparation are checked before delivery.",
  },
] as const;

function AnimatedFigure({
  value,
  suffix = "",
  runId,
}: {
  value: number;
  suffix?: string;
  runId: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (runId === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionFrame = window.requestAnimationFrame(() => {
        setDisplayValue(value);
      });

      return () => window.cancelAnimationFrame(reducedMotionFrame);
    }

    let frame = 0;
    let rafId = 0;
    const totalFrames = 58;

    const tick = () => {
      const progress = Math.min(frame / totalFrames, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(value * eased));
      frame += 1;

      if (progress < 1) {
        rafId = window.requestAnimationFrame(tick);
      }
    };

    rafId = window.requestAnimationFrame(tick);

    return () => window.cancelAnimationFrame(rafId);
  }, [runId, value]);

  return (
    <span>
      {displayValue.toLocaleString("en-US")}
      {suffix === "m2" ? (
        <span className="ml-1 align-super text-[0.42em] leading-none">
          m2
        </span>
      ) : (
        suffix
      )}
    </span>
  );
}

export default function HomeKeyFigures() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const visibleRef = useRef(false);
  const [animationRuns, setAnimationRuns] = useState<number[]>(
    keyFigures.map(() => 0),
  );

  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visibleRef.current) {
          visibleRef.current = true;
          setAnimationRuns((runs) => runs.map((run) => run + 1));
        }

        if (!entry.isIntersecting) {
          visibleRef.current = false;
        }
      },
      { threshold: 0.32 },
    );

    observer.observe(current);
    return () => observer.disconnect();
  }, []);

  const restartFigure = (targetIndex: number) => {
    setAnimationRuns((runs) =>
      runs.map((run, index) => (index === targetIndex ? run + 1 : run)),
    );
  };

  return (
    <section
      ref={sectionRef}
      aria-label="Jinling stainless steel key figures"
      className="relative isolate overflow-hidden bg-[#f6d044] text-[#111820]"
    >
      <Image
        src="/images/about/company-overview/01-manufacturing-base.jpg"
        alt="Jinling Metals Foshan stainless steel manufacturing base"
        fill
        sizes="100vw"
        className="object-cover object-[center_54%] opacity-48 mix-blend-multiply"
      />
      <div
        className="absolute inset-0 bg-[#f6d044]/82"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,24,32,0.12)_0%,rgba(246,208,68,0.16)_46%,rgba(17,24,32,0.2)_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-[3.2rem] sm:px-6 sm:py-[3.7rem] lg:px-8">
        <div className="mx-auto max-w-4xl text-left">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#111820]">
            Key Figures
          </p>
          <h2 className="mt-5 text-[2.2rem] font-semibold leading-[1.08] sm:text-[3rem] lg:text-[3.35rem]">
            Reliable Stainless Steel in Numbers
          </h2>
          <p className="mt-6 text-[1.03rem] leading-8 text-[#111820]/78 sm:text-[1.1rem]">
            Key figures behind Jinling Metals&apos; stainless steel supply,
            market insight, and export support.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {keyFigures.map((figure, index) => (
              <div
                key={figure.labelLines.join("-")}
                className="group relative min-h-[9.1rem] bg-[#111820]/88 p-4 text-left shadow-[0_18px_52px_rgba(17,24,32,0.2)] outline-none ring-1 ring-[#111820]/12 transition duration-300 hover:-translate-y-1 hover:bg-[#111820]/94 focus:-translate-y-1 focus:bg-[#111820]/94 focus-visible:ring-2 focus-visible:ring-[#111820] sm:p-5"
                onFocus={() => restartFigure(index)}
                onMouseEnter={() => restartFigure(index)}
                tabIndex={0}
              >
                <div
                  className="text-[2.15rem] font-semibold leading-none text-[#f6d044] transition duration-300 group-hover:-translate-y-1 sm:text-[2.55rem]"
                  onMouseEnter={() => restartFigure(index)}
                >
                  <AnimatedFigure
                    value={figure.value}
                    suffix={"suffix" in figure ? figure.suffix : ""}
                    runId={animationRuns[index] ?? 0}
                  />
                </div>
                <h3 className="mt-3 text-[0.82rem] font-semibold uppercase leading-[1.32] tracking-[0.08em] text-white">
                  {figure.labelLines.map((line) => (
                    <span key={line} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="mt-0 max-h-0 overflow-hidden text-[0.76rem] leading-[1.25rem] text-white/70 opacity-0 transition-all duration-300 group-hover:mt-2.5 group-hover:max-h-24 group-hover:opacity-100 group-focus:mt-2.5 group-focus:max-h-24 group-focus:opacity-100">
                  {figure.description}
                </p>
                <span
                  className="mt-3 block h-px w-12 bg-[#f6d044]/62 transition duration-300 group-hover:w-16"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
