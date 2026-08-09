import Link from "next/link";

interface ResourceProofSignal {
  label: string;
  text: string;
  href?: string;
  ctaLabel?: string;
}

interface ResourceProofRailProps {
  signals: readonly ResourceProofSignal[];
}

export function ResourceProofRail({ signals }: ResourceProofRailProps) {
  return (
    <div className="mt-7 grid max-w-4xl gap-2 sm:grid-cols-3">
      {signals.map((signal) => {
        const content = (
          <>
            <span className="block text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#8a6b32]">
              {signal.label}
            </span>
            <span className="mt-1 block text-sm font-semibold leading-5 text-brand-dark">
              {signal.text}
            </span>
          </>
        );

        if (signal.href) {
          return (
            <Link
              key={signal.label}
              href={signal.href}
              className="group rounded-card-md border border-[#d8cbb8] bg-white/66 px-4 py-3 shadow-[0_10px_28px_rgba(13,20,27,0.035)] transition hover:border-brand-accent/70 hover:bg-white"
            >
              {content}
              <span className="mt-2 inline-flex text-[0.78rem] font-semibold text-editorial-link transition group-hover:text-brand-accent">
                {signal.ctaLabel ?? "Open review route"}
              </span>
            </Link>
          );
        }

        return (
          <div
            key={signal.label}
            className="rounded-card-md border border-[#d8cbb8] bg-white/54 px-4 py-3 shadow-[0_10px_28px_rgba(13,20,27,0.03)]"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
