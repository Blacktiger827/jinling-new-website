import Image from "next/image";
import Link from "next/link";
import { productsBySurface } from "@/lib/site-navigation";

const finishDetails = {
  "8K Mirror Finish": {
    description: "Mirror release by substrate, haze, film, and packing.",
    route: "Substrate / haze / film / packing",
    image: "/images/surfaces/no8-mirror/hero.webp",
  },
  "AFP (Anti-Fingerprint)": {
    description: "Touch-control coating over the chosen base finish.",
    route: "Touch marks / cleaning / base finish",
  },
  "No.4 Brushed": {
    description: "Directional grain for equipment and visible panels.",
    route: "Grain direction / panel approval",
  },
  Hairline: {
    description: "Long-grain surface where direction must stay consistent.",
    route: "Long grain / orientation / protection",
  },
  "2B Finish": {
    description: "Mill finish for forming, cutting, and hidden faces.",
    route: "Forming / hidden face / next process",
  },
  "BA Finish": {
    description: "Bright mill finish, not a polished mirror substitute.",
    route: "Bright mill / not mirror polish",
  },
} as const;

const finishes = productsBySurface.map((finish) => ({
  ...finish,
  ...finishDetails[finish.name],
}));

export function SurfaceFinishes() {
  const mirrorFinish = finishes[0]!;
  const supportingFinishes = finishes.slice(1);

  return (
    <section className="py-20 sm:py-24 bg-bg-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.86fr_1fr] lg:items-end">
          <div>
            <p className="mb-3 text-sm font-medium tracking-widest uppercase text-brand-accent">
              Surface release
            </p>
            <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
              Mirror comes first when the surface has to carry the job.
            </h2>
          </div>
          <p className="max-w-2xl text-text-secondary lg:justify-self-end">
            Surface finish is not decoration at the end. It changes substrate
            choice, cleaning, film, packing, and how the customer accepts the
            material after installation. The mirror route gets the most proof;
            the quieter finishes still need a clean release basis.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.08fr_1fr]">
          <Link
            href={mirrorFinish.href}
            className="group relative min-h-[27rem] overflow-hidden rounded-card-lg border border-brand-dark/10 bg-brand-dark text-white shadow-sm shadow-brand-dark/10"
          >
            <Image
              src="/images/surfaces/no8-mirror/hero.webp"
              alt={mirrorFinish.name}
              fill
              className="object-cover transition duration-700 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.08)_0%,rgba(13,20,27,0.72)_78%,rgba(13,20,27,0.9)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
                Flagship visible-face route
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">
                {mirrorFinish.name}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/76">
                {mirrorFinish.description} Use this route before treating
                mirror as a normal finish label.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <span className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/78">
                  {mirrorFinish.route}
                </span>
                <span className="text-sm font-semibold text-brand-accent transition group-hover:text-white">
                  Open mirror route <span aria-hidden>&rarr;</span>
                </span>
              </div>
            </div>
          </Link>

          <div className="grid gap-4 sm:grid-cols-2">
            {supportingFinishes.map((finish) => (
              <Link
                key={finish.name}
                href={finish.href}
                className="group flex min-h-[12rem] flex-col rounded-card-md border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-light">
                  {finish.route}
                </p>
                <h3 className="mt-4 text-base font-semibold text-brand-dark">
                  {finish.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-text-secondary">
                  {finish.description}
                </p>
                <span className="mt-5 text-sm font-semibold text-brand-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Open finish note <span aria-hidden>&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
