import Link from "next/link";

const signatures = [
  {
    badge: "No.8 mirror",
    name: "Mirror is released by route, not by the word mirror.",
    outcome:
      "Substrate, polishing sequence, sample face, light check, film, and packing stay tied together. When 430 mirror is the right value route, the base choice is reviewed before the shine is promised.",
    benefit: "The visible face has a release basis before the panel reaches site.",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
    span: "lg:col-span-2",
  },
  {
    badge: "AFP coating",
    name: "Anti-fingerprint work starts before the coating.",
    outcome:
      "Base finish, tone, coating feel, cleaning habit, laser route, and protective film are checked as one stack instead of treated as a late clear coat.",
    benefit: "Touch-heavy panels are easier to approve, clean, and restock.",
    href: "/surfaces/stainless-steel-afp-finish",
    span: "lg:col-span-2",
  },
  {
    badge: "Super Finish",
    name: "Corrosion reserve can be built into the surface route.",
    outcome:
      "For No.4, hairline, and satin-brushed work, Super Finish is discussed as a specified route when cleaning, humidity, or coastal use makes the surface the weak point.",
    benefit: "The same visual language can carry a stronger service margin.",
    href: "/knowledge-base/super-finish-vs-316l-upgrade-when-passivation-beats-alloy",
    span: "lg:col-span-2",
  },
  {
    badge: "Integrated processing",
    name: "Raw material and processing stay in one conversation.",
    outcome:
      "Coil, sheet, tube, bar, slitting, cut-to-length, finishing, bending, welding, and packing are planned before the order splits into separate handoffs.",
    benefit: "Tolerance, finish, timing, and responsibility stay clearer.",
    href: "/solutions/capabilities",
    span: "lg:col-span-2",
  },
  {
    badge: "Export details",
    name: "Small handling choices are treated as quality work.",
    outcome:
      "Tube ends, wax cleaning, burr removal, protective film, pallet logic, labels, packing photos, and loading checks are not decoration. They decide what the buyer sees on arrival.",
    benefit: "Fewer avoidable scratches, stains, dents, and disputes.",
    href: "/solutions/capabilities/packaging-logistics",
    span: "lg:col-span-2",
  },
  {
    badge: "Supply resilience",
    name: "The order route can move with the market.",
    outcome:
      "Common grades, product forms, mixed containers, qualification stock, and origin-route questions can be reviewed together when tariffs, export policy, or timing change.",
    benefit: "The first order can move without becoming a chaotic one-off.",
    href: "/knowledge-base/where-to-buy-stainless-steel-in-asia",
    span: "lg:col-span-2",
  },
] as const;

export function SignatureProcesses() {
  return (
    <section id="signature" className="bg-white py-18 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1fr] lg:items-end">
          <div>
            <p className="mb-3 text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-brand-accent">
              Where Jinling is not ordinary
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-brand-dark sm:text-4xl">
              The difficult parts are treated as the product.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-text-secondary lg:justify-self-end">
            A stainless sample can look fine for one afternoon. Jinling is more
            useful when the order has to survive polishing, cutting, cleaning,
            packing, customs documents, and the receiving inspection after a
            long shipment.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {signatures.map((item) => (
            <Link
              key={item.badge}
              href={item.href}
              className={`group relative flex min-h-[19rem] flex-col rounded-card-md border border-border bg-[linear-gradient(180deg,#fbfaf6_0%,#f4efe6_100%)] p-6 transition hover:-translate-y-0.5 hover:border-brand-dark/30 hover:bg-white hover:shadow-[0_18px_50px_rgba(13,20,27,0.08)] ${item.span}`}
            >
              <span className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand-accent">
                {item.badge}
              </span>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-brand-dark">
                {item.name}
              </h3>
              <p className="mt-4 text-sm leading-7 text-text-secondary">
                {item.outcome}
              </p>
              <p className="mt-auto flex min-h-[5.25rem] items-center rounded-card-sm border border-cream-border bg-white/62 px-4 py-3 text-sm font-semibold leading-6 text-brand-dark">
                {item.benefit}
              </p>
              <span className="inline-flex items-center gap-1 pt-7 text-sm font-semibold text-brand-dark transition-all group-hover:gap-2 group-hover:text-brand-accent">
                Open the route
                <span aria-hidden>&rarr;</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
