import Link from "next/link";

interface SurfaceDecisionItem {
  label: string;
  title: string;
  note: string;
}

interface SurfaceDecisionConfig {
  eyebrow: string;
  title: string;
  description: string;
  items: readonly SurfaceDecisionItem[];
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}

const surfaceDecisionConfigs: Record<string, SurfaceDecisionConfig> = {
  "stainless-steel-2b-finish": {
    eyebrow: "Finish route",
    title: "Keep 2B only when the face is still working, not performing.",
    description:
      "The useful decision is whether 2B stays as a fabrication surface or becomes the base for a visible finish later.",
    primaryHref: "/surfaces/stainless-steel-ba-finish",
    primaryLabel: "Compare BA next",
    secondaryHref: "/solutions/capabilities/cut-to-length",
    secondaryLabel: "Check panel release",
    items: [
      {
        label: "Stay",
        title: "Fabrication first",
        note: "Use 2B when flatness, forming, welding, and supply stability matter more than visual drama.",
      },
      {
        label: "Move",
        title: "Visible face",
        note: "Step to BA, No.4, hairline, mirror, or AFP once the installed face will be judged by appearance.",
      },
      {
        label: "Lock",
        title: "State and handling",
        note: "Name sheet, coil, or slit strip; then set edge, film, and flatness before the order leaves the line.",
      },
    ],
  },
  "stainless-steel-ba-finish": {
    eyebrow: "Bright finish route",
    title: "BA should feel bright and controlled, not oversold as mirror.",
    description:
      "Use BA when the project needs a cleaner mill face or a better polishing base, then decide whether it stays visible.",
    primaryHref: "/resources/stainless-steel-guides#processing",
    primaryLabel: "Open finish guides",
    secondaryHref: "/surfaces/stainless-steel-8k-mirror-finish",
    secondaryLabel: "Move to mirror",
    items: [
      {
        label: "Stay",
        title: "Bright indoor face",
        note: "Appliance panels, indoor trim, and cleaner decorative sheet can stay on BA when handling is controlled.",
      },
      {
        label: "Move",
        title: "Touch or reflection",
        note: "Add AFP for high-touch bright panels; move to 8K when reflected image clarity becomes the real promise.",
      },
      {
        label: "Lock",
        title: "Role in the order",
        note: "Say whether BA is the delivered face or the process base for AFP, mirror polishing, or later fabrication.",
      },
    ],
  },
  "stainless-steel-hairline-finish": {
    eyebrow: "Grain route",
    title: "Hairline succeeds when the grain is planned like a layout line.",
    description:
      "The finish is calm only when direction, panel sequence, lot continuity, and film route stay connected.",
    primaryHref: "/knowledge-base/no4-vs-hairline-finish",
    primaryLabel: "Compare No.4 / Hairline",
    secondaryHref: "/surfaces/stainless-steel-afp-finish",
    secondaryLabel: "Add AFP route",
    items: [
      {
        label: "Stay",
        title: "Large visible fields",
        note: "Use hairline when elevator walls, lobby panels, or cladding need a longer and quieter grain than No.4.",
      },
      {
        label: "Move",
        title: "Touch-heavy panels",
        note: "Keep the hairline look but add AFP when wipe marks and daily hand contact will decide acceptance.",
      },
      {
        label: "Lock",
        title: "Direction and restock",
        note: "Fix grain direction, sample approval, panel sequence, and lot-matching rules before production starts.",
      },
    ],
  },
};

export function getSurfaceDecisionConfig(slug: string) {
  return surfaceDecisionConfigs[slug];
}

export function SurfaceDecisionPanel({
  config,
}: {
  config: SurfaceDecisionConfig;
}) {
  return (
    <section className="overflow-hidden rounded-[1.35rem] border border-[#d8cbb8] bg-[#fbf7ee] shadow-[0_18px_50px_rgba(13,20,27,0.065)]">
      <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative bg-brand-dark p-6 text-white sm:p-7">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(218,174,93,0.24),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
              {config.eyebrow}
            </p>
            <h3 className="mt-3 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-[1.8rem]">
              {config.title}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/74">
              {config.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                href={config.primaryHref}
                className="inline-flex min-h-10 items-center justify-center rounded-full bg-brand-accent px-4 py-2 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-accent-hover"
              >
                {config.primaryLabel}
              </Link>
              <Link
                href={config.secondaryHref}
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/18 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/14"
              >
                {config.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-3 p-4 sm:p-5 lg:grid-cols-3">
          {config.items.map((item) => (
            <article
              key={item.label}
              className="flex h-full flex-col rounded-card-md border border-[#e0d4c4] bg-white/82 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a6b32]">
                {item.label}
              </p>
              <h4 className="mt-3 text-[1rem] font-semibold leading-6 text-brand-dark">
                {item.title}
              </h4>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {item.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
