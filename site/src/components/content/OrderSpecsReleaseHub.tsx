import Link from "next/link";

const orderRoutes = [
  {
    title: "Quote & Order Definition",
    description:
      "Write alloy, finish, thickness, tolerance, documents, and Incoterm before comparing price.",
    recommendation: "Same spec before same price",
  },
  {
    title: "Documents & Traceability",
    description:
      "Confirm MTC type, heat number, sample timing, COO logic, and signatory authority.",
    recommendation: "Proof before shipment",
  },
  {
    title: "Incoming Release & Geometry",
    description:
      "Check packaging, labels, dimensions, tolerance basis, and the acceptance point at unloading.",
    recommendation: "Check before acceptance",
  },
  {
    title: "Claim & Commercial Recovery",
    description:
      "Use complaint timing, evidence, NCR logic, and payment leverage before escalation.",
    recommendation: "Evidence before escalation",
  },
] as const;

const orderReadingShelf = [
  {
    eyebrow: "Buying basics",
    title: "Common Buying Mistakes",
    description:
      "Start here when the quotation round feels active but the real risk is that the order has not been defined tightly enough.",
    href: "/knowledge-base/common-mistakes-buying-stainless-steel",
  },
  {
    eyebrow: "Timing check",
    title: "Lead Time by Product Form",
    description:
      "Use this when the number of days on the quote matters less than what actually controls the date.",
    href: "/knowledge-base/stainless-steel-lead-time-by-product-form",
  },
  {
    eyebrow: "Document timing",
    title: "Samples, MTC, and COO",
    description:
      "Built for buyers who need to know which evidence can exist before shipment and which documents only become real later.",
    href: "/knowledge-base/stainless-steel-samples-mtc-certificate-of-origin",
  },
  {
    eyebrow: "Certificate proof",
    title: "How to Read the MTC",
    description:
      "Go here when the shipment may be acceptable, but the release still depends on whether the certificate proves what the PO required.",
    href: "/knowledge-base/how-to-read-mill-test-certificate",
  },
  {
    eyebrow: "PO wording",
    title: "Tolerance Contract Terms",
    description:
      "Use this when the issue is whether nominal thickness, minimum delivered thickness, or standard language was actually written well enough to enforce.",
    href: "/knowledge-base/stainless-steel-tolerance-contract-terms",
  },
  {
    eyebrow: "Release check",
    title: "How to Inspect Delivery",
    description:
      "Useful when the truck has arrived and the question is what to verify before unloading becomes a release decision.",
    href: "/knowledge-base/how-to-inspect-stainless-steel-delivery",
  },
] as const;

const orderTools = [
  {
    title: "Prepare a Pricing Request",
    description:
      "Use this when the order is mostly defined and the next step is turning alloy, form, finish, quantity, and destination into a usable RFQ.",
    href: "/contact#pricing-request",
    cta: "Request pricing",
  },
  {
    title: "Open Buying Guides",
    description:
      "Jump into buying guides when the order is blocked by designation, delivery condition, documentation, or release notes.",
    href: "/resources/stainless-steel-guides#buyers-guide",
    cta: "Browse guides",
  },
  {
    title: "Ask for Release Review",
    description:
      "Use this when the order is close to release but the documentation, tolerance, arrival check, or claim logic still needs a second review.",
    href: "/contact#technical-review",
    cta: "Ask for review",
  },
] as const;

export function OrderSpecsReleaseHub() {
  return (
    <section className="flex h-full flex-col rounded-card-lg border border-cream-border bg-white/86 p-5 shadow-[0_14px_42px_rgba(13,20,27,0.045)] sm:p-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
          Order, Specs &amp; Release
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-brand-dark">
          Keep buying and release in one line.
        </h2>
        <p className="mt-3 text-sm leading-6 text-text-secondary">
          Name the blocker: quote discipline, document proof, incoming
          release, or claim handling. Then move to pricing, datasheets, or
          review only when needed.
        </p>
      </div>

      <div className="mt-5 grid auto-rows-fr gap-2.5 sm:grid-cols-2">
        {orderRoutes.map((route) => (
          <article
            key={route.title}
            className="flex h-full min-h-[10.5rem] flex-col rounded-card-sm border border-cream-border-soft bg-cream-50 px-4 py-3 transition hover:border-brand-accent/35 hover:bg-white"
          >
            <div className="min-h-[2.2rem] text-xs font-semibold uppercase leading-4 tracking-[0.16em] text-brand-accent">
              {route.recommendation}
            </div>
            <h3 className="mt-2 text-sm font-semibold leading-6 text-brand-dark">
              {route.title}
            </h3>
            <p className="mt-auto line-clamp-2 pt-2 text-sm leading-6 text-text-secondary">
              {route.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-5 rounded-card-md border border-cream-border bg-cream-100/76 p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-light">
            Key reads
          </p>
          <Link
            href="/contact#technical-review"
            className="text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent-hover"
          >
            Ask for release review
          </Link>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {orderReadingShelf.slice(0, 2).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-cream-border bg-white px-3 py-2 text-sm font-semibold text-brand-dark transition hover:border-brand-accent/50 hover:text-brand-accent"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-cream-border pt-5 text-sm font-semibold">
        {orderTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="text-brand-dark transition-colors hover:text-brand-accent"
          >
            {tool.cta}
          </Link>
        ))}
      </div>
    </section>
  );
}
