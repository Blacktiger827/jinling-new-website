import Image from "next/image";
import Link from "next/link";
import { HubInquiryCue } from "@/components/content/HubInquiryCue";

const proofCards = [
  {
    label: "Mirror route",
    title: "Substrate · polish · film",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
  },
  {
    label: "Touch control",
    title: "Base finish · AFP · cleaning",
    href: "/surfaces/stainless-steel-afp-finish",
  },
  {
    label: "Export release",
    title: "MTC · label · packing proof",
    href: "/solutions/capabilities/packaging-logistics",
  },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#101820] text-white">
      <Image
        src="/images/hero/home-hero.webp"
        alt="Jinling stainless steel production and finishing line"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.62]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.92)_0%,rgba(13,20,27,0.7)_46%,rgba(13,20,27,0.28)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,rgba(13,20,27,0)_0%,rgba(13,20,27,0.78)_100%)]" />
      <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-[radial-gradient(circle_at_66%_28%,rgba(246,208,68,0.16),transparent_34%)] lg:block" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.98fr_0.72fr] lg:px-8 lg:py-32">
        <div className="max-w-3xl self-center">
          <p className="mb-6 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-brand-accent">
            Specialty finish · Processing route · Export release
          </p>
          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Stainless steel made safer{" "}
            <span className="text-white/85">before it leaves Foshan.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/78 sm:text-xl">
            Jinling controls what most stainless suppliers leave loose: the
            visible finish, processing route, packing, and release proof behind
            each export order.
          </p>
          <p className="mt-4 hidden max-w-2xl text-base leading-8 text-white/68 sm:block">
            From No.8 mirror and AFP coating to cut-to-length, tube release,
            film, MTC review, and container loading, the order stays connected
            from raw material to arrival condition.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/surfaces/stainless-steel-8k-mirror-finish"
              className="inline-flex items-center justify-center rounded-md bg-brand-accent px-8 py-3.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-accent-hover"
            >
              See signature finishes
            </Link>
            <Link
              href="/contact#technical-review"
              className="inline-flex items-center justify-center rounded-md border border-white/28 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/8"
            >
              Send the spec for review
            </Link>
          </div>
          <HubInquiryCue context="home" tone="dark" />
        </div>

        <div className="hidden self-end lg:block">
          <div className="relative overflow-hidden rounded-[1.6rem] border border-white/16 bg-white/9 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
              <Image
                src="/images/hero/home-proof-release.webp"
                alt="Jinling stainless steel surface release check on a mirror sheet"
                fill
                sizes="36vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.02)_0%,rgba(13,20,27,0.34)_54%,rgba(13,20,27,0.88)_100%)]" />
            </div>

            <div className="absolute left-7 top-7 rounded-full border border-white/18 bg-brand-dark/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent backdrop-blur-md">
              Release check
            </div>

            <div className="absolute inset-x-7 bottom-7 rounded-[1.15rem] border border-white/14 bg-brand-dark/78 p-4 backdrop-blur-md">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-brand-accent">
                What stays tied together
              </p>
              <p className="mt-2 text-base font-semibold leading-6 text-white">
                Finish, process, and shipment proof are reviewed as one route.
              </p>
              <div className="mt-4 grid gap-2">
                {proofCards.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center justify-between gap-3 rounded-card-sm border border-white/12 bg-white/[0.055] px-3 py-2.5 transition hover:border-brand-accent/60 hover:bg-white/[0.09]"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/58">
                      {item.label}
                    </span>
                    <span className="text-right text-sm font-semibold text-white/90">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
