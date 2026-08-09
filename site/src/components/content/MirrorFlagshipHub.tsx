import Image from "next/image";
import Link from "next/link";

const mirrorRoutes = [
  {
    title: "Landmark Interiors & Feature Panels",
    description:
      "Lobby walls, column wraps, ceilings, and branded feature zones where reflectivity itself is part of the design brief.",
    recommendation: "304 / 430 + No.8",
  },
  {
    title: "Elevator Ceilings & Accent Zones",
    description:
      "Cab programs where mirror belongs on the highlight zone, but touch areas still need AFP, brushed finishes, or tighter lot control.",
    recommendation: "304 + No.8, AFP by touch map",
  },
  {
    title: "Appliance & Controlled Indoor Panels",
    description:
      "Appliance doors, decorative trims, and indoor reflective panels where 430 mirror can carry the look without paying for unused corrosion reserve.",
    recommendation: "430 + No.8",
  },
  {
    title: "Coastal or Humid Reflective Work",
    description:
      "Reflective projects near chlorides or wet cleaning where the real choice is 316L mirror versus stepping back to a safer brushed finish.",
    recommendation: "316L mirror or rethink finish",
  },
] as const;

const mirrorReadingShelf = [
  {
    eyebrow: "Spec proof",
    title: "8K Mirror Finish Guide",
    description:
      "Use this when the project needs measured proof: Ra, gloss, substrate, film selection, and release checks.",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
    cta: "Open finish page",
  },
  {
    eyebrow: "Substrate split",
    title: "304 or 430 for Mirror Panels?",
    description:
      "Use this when the mirror conversation is really about indoor decorative 430 versus the safer installed-surface choice in 304.",
    href: "/knowledge-base/304-vs-430-mirror-panels",
    cta: "Open article",
  },
  {
    eyebrow: "Environment check",
    title: "When Does Mirror Need 316L?",
    description:
      "Open this when the mirror panel lives in a coastal, humid, or lobby environment and the real issue is chloride margin, not shine.",
    href: "/knowledge-base/316l-mirror-for-coastal-lobby-elevator",
    cta: "Open article",
  },
  {
    eyebrow: "Top-coat check",
    title: "When Is AFP Over Mirror Worth It?",
    description:
      "Best when mirror is right but fingerprints, wipe marks, and handover maintenance are the real project risk.",
    href: "/knowledge-base/afp-over-mirror-when-worth-it",
    cta: "Open article",
  },
  {
    eyebrow: "Acceptance check",
    title: "How Do I Accept a Mirror Sheet?",
    description:
      "Use this when haze, gloss, pinholes, and lot consistency need an agreed release method before fabrication starts.",
    href: "/knowledge-base/mirror-finish-acceptance-haze-gloss-pinhole",
    cta: "Open article",
  },
  {
    eyebrow: "Packaging check",
    title: "How Should Mirror Be Packed?",
    description:
      "The right next step when the defect risk is not the polish itself but scratches, sliding contact, and bad unloading discipline.",
    href: "/knowledge-base/mirror-finish-packaging-scratch-prevention",
    cta: "Open article",
  },
  {
    eyebrow: "Process proof",
    title: "How 8K Mirror Is Really Made",
    description:
      "Open this when the quotation says mirror but the real question is how the grit sequence, substrate, and inspection are controlled.",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
    cta: "Open article",
  },
  {
    eyebrow: "Base-finish choice",
    title: "2B or BA Before Mirror?",
    description:
      "Use this when the buying decision starts with substrate choice rather than the final reflective look.",
    href: "/knowledge-base/2b-vs-ba-surface-finish",
    cta: "Open article",
  },
] as const;

const mirrorTools = [
  {
    title: "Open Grade Pages",
    description:
      "Compare 304, 316L, and 430 when the mirror conversation has turned into a substrate, corrosion-margin, or cost question.",
    href: "/grades",
    cta: "Browse grades",
  },
  {
    title: "Damage & Repair Limits",
    description:
      "Use this when the panel is already scratched and the real question is whether mirror can still be repaired or should be replaced.",
    href: "/knowledge-base/stainless-steel-scratch-repair",
    cta: "Open repair limits",
  },
  {
    title: "Ask for Mirror Review",
    description:
      "Use this when mirror is clearly the right finish but the project still needs help on substrate, film, AFP, lot control, or release wording.",
    href: "/contact#technical-review",
    cta: "Ask for review",
  },
] as const;

const proofPoints = [
  "Ra < 0.05 µm standard, < 0.03 µm Super 8K",
  "60° gloss > 900 GU target",
  "304 / 316L / 430 mirror logic",
  "Film, AFP, and lot control",
] as const;

const mirrorGallery = [
  {
    src: "/images/surfaces/no8-mirror/gallery-1.webp",
    alt: "8K mirror stainless steel sheet checked with a gloss instrument",
    label: "Measured face",
    caption: "Reflection still needs a release method: instrument reading, viewing light, and agreed surface condition.",
  },
  {
    src: "/images/surfaces/no8-mirror/gallery-2.webp",
    alt: "8K mirror stainless coil protected with film during release",
    label: "Film discipline",
    caption: "Mirror protection starts on the line, before laser cutting, bending, AFP, or direct installation decisions arrive.",
  },
  {
    src: "/images/surfaces/no8-mirror/gallery-3.webp",
    alt: "8K mirror polishing line in Jinling workshop",
    label: "Line release",
    caption: "The finish succeeds when substrate, polish, cooling, inspection, film, and packing stay together.",
  },
] as const;

export function MirrorFlagshipHub() {
  return (
    <section className="rounded-card-lg border border-border bg-gradient-to-br from-[#f7f0e4] via-white to-[#ece5d8] p-6 shadow-sm shadow-brand-dark/5 sm:p-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
          Mirror System
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-brand-dark sm:text-3xl">
          Treat mirror as a finish system, not a polished sheet.
        </h2>
        <p className="mt-3 text-base leading-7 text-text-secondary">
          It depends on substrate choice, polishing control, protective film,
          touch-map planning, and a release method the buyer can actually
          defend later.
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {proofPoints.map((point) => (
            <span
              key={point}
              className="rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1.5 text-xs font-semibold text-brand-dark"
            >
              {point}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {mirrorRoutes.map((route) => (
          <article
            key={route.title}
            className="rounded-card-md border border-border bg-white/90 p-5 backdrop-blur-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
              Mirror Fit
            </p>
            <h3 className="mt-3 text-lg font-semibold text-brand-dark">
              {route.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              {route.description}
            </p>
            <div className="mt-4 inline-flex rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-dark">
              {route.recommendation}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[320px] overflow-hidden rounded-card-lg border border-cream-border bg-[#d7d0c5] shadow-[0_22px_70px_rgba(13,20,27,0.09)]">
          <Image
            src="/images/surfaces/no8-mirror/hero.webp"
            alt="8K mirror stainless steel sheet sample with clear reflection"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 55vw, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.04)_0%,rgba(13,20,27,0.56)_100%)]" />
          <div className="absolute bottom-0 left-0 max-w-xl p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
              Mirror visual proof
            </p>
            <h3 className="mt-3 text-2xl font-semibold">
              Start with the face the buyer will inspect.
            </h3>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {mirrorGallery.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-card-md border border-cream-border bg-white shadow-[0_16px_44px_rgba(13,20,27,0.06)]"
            >
              <div className="relative h-36">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 30vw, 33vw"
                />
              </div>
              <figcaption className="p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-accent">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-card-lg border border-brand-dark/10 bg-brand-dark px-6 py-7 text-white sm:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-accent">
            Mirror Spec Reads
          </p>
          <h3 className="mt-3 text-2xl font-semibold">
            Four reads that keep the mirror spec defensible.
          </h3>
          <p className="mt-3 text-sm leading-7 text-gray-300">
            Work through substrate, environment, top-coat, and acceptance method.
            Open the wider archive only after those choices are clear.
          </p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          {mirrorReadingShelf.slice(0, 4).map((item) => (
            <article
              key={item.href}
              className="flex h-full flex-col rounded-card-md border border-white/10 bg-white/5 p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-accent/80">
                {item.eyebrow}
              </p>
              <h4 className="mt-3 text-lg font-semibold text-white">
                {item.title}
              </h4>
              <p className="mt-3 flex-1 text-sm leading-6 text-gray-300">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="mt-5 inline-flex items-center text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent-hover"
              >
                {item.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {mirrorTools.map((tool) => (
          <article
            key={tool.href}
            className="flex h-full flex-col rounded-card-md border border-border bg-white p-5"
          >
            <h3 className="text-lg font-semibold text-brand-dark">{tool.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">
              {tool.description}
            </p>
            <Link
              href={tool.href}
              className="mt-5 inline-flex items-center text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent-hover"
            >
              {tool.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
