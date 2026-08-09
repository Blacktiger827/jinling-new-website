import Link from "next/link";

const buyingRoutes = [
  {
    title: "Quote & Spec Discipline",
    description:
      "Where alloy, finish, thickness, Incoterm, and document scope must be written clearly before price comparison means anything.",
    recommendation: "Compare with the same spec",
  },
  {
    title: "Lead Time & Trial Orders",
    description:
      "For first orders, mixed lots, MOQ questions, and the difference between a short quote lead time and a reliable shipping lead time.",
    recommendation: "Date logic before deposit",
  },
  {
    title: "Packaging & Handover",
    description:
      "Where protection film, export packing, loading discipline, and handover evidence decide whether the shipment arrives usable.",
    recommendation: "Damage prevention + proof",
  },
  {
    title: "Claim & Commercial Recovery",
    description:
      "For complaint timing, evidence quality, document preservation, and what makes a real claim stronger than an emotional email.",
    recommendation: "Evidence before escalation",
  },
] as const;

const buyingReadingShelf = [
  {
    eyebrow: "Buying basics",
    title: "Common Buying Mistakes",
    description:
      "Start here when the PO keeps changing, suppliers are hard to compare, or the quote looks clean but the order still feels risky.",
    href: "/knowledge-base/common-mistakes-buying-stainless-steel",
  },
  {
    eyebrow: "Timing check",
    title: "Lead Time by Product Form",
    description:
      "Use this when the real question is not the quoted number of days, but what actually controls the delivery date.",
    href: "/knowledge-base/stainless-steel-lead-time-by-product-form",
  },
  {
    eyebrow: "Trial order",
    title: "MOQ and Trial Orders",
    description:
      "Built for buyers testing a new supplier, mixed container order, or custom processing path without committing to a full production lot.",
    href: "/knowledge-base/stainless-steel-moq-trial-order",
  },
  {
    eyebrow: "Document timing",
    title: "Samples, MTC, and COO",
    description:
      "Useful when the supplier says the paperwork is available, but you need to know which evidence can exist before shipment and which cannot.",
    href: "/knowledge-base/stainless-steel-samples-mtc-certificate-of-origin",
  },
  {
    eyebrow: "Packing check",
    title: "Export Packaging and Loading",
    description:
      "Go here when the material is acceptable on paper but the shipping plan still risks edge damage, moisture problems, or mixed-load confusion.",
    href: "/knowledge-base/stainless-steel-export-packaging-container-loading",
  },
  {
    eyebrow: "Risk control",
    title: "Payment Terms and Risk Control",
    description:
      "Use this when the real commercial question is what evidence should appear before each payment step moves.",
    href: "/knowledge-base/stainless-steel-payment-terms-risk-control",
  },
] as const;

const buyingTools = [
  {
    title: "Prepare a Pricing Request",
    description:
      "Use this when the buying picture is mostly clear and the next step is turning alloy, form, finish, quantity, and destination into a usable RFQ.",
    href: "/contact#pricing-request",
    cta: "Request pricing",
  },
  {
    title: "Open Grade Library",
    description:
      "Move into grade pages when the commercial problem is still blocked by 201 vs 304, 304 vs 316L, or export naming confusion.",
    href: "/grades",
    cta: "Browse grades",
  },
  {
    title: "Open Specs & Verification",
    description:
      "Jump into verification when the order is blocked by MTC logic, tolerance wording, PMI, or arrival inspection questions.",
    href: "/resources/stainless-steel-guides#buyers-guide",
    cta: "Open verification guide",
  },
] as const;

export function BuyingReleaseHub() {
  return (
    <section className="rounded-card-lg border border-border bg-gradient-to-br from-[#f7f2ea] via-white to-[#efe8df] p-6 shadow-sm shadow-brand-dark/5 sm:p-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
          Buying & Release
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-brand-dark sm:text-3xl">
          Turn quote-stage uncertainty into a cleaner order.
        </h2>
        <p className="mt-3 text-base leading-7 text-text-secondary">
          Start by separating quote discipline, lead time, packing, and claim
          logic. Then open the right knowledge page and move into grades,
          pricing, or verification when the order still needs a cleaner release
          path.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {buyingRoutes.map((route) => (
          <article
            key={route.title}
            className="rounded-card-md border border-border bg-white/85 p-5 backdrop-blur-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
              Commercial Check
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

      <div className="mt-10 rounded-card-lg border border-border bg-white/88 px-6 py-7 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
              Related reads
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-brand-dark">
              Three checks before comparing stainless steel offers.
            </h3>
          </div>
          <Link
            href="/resources/stainless-steel-guides#buyers-guide"
            className="text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent-hover"
          >
            More buying reads
          </Link>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {buyingReadingShelf.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-card-md border border-border bg-cream-100 p-4 transition-colors hover:border-brand-accent/35"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-light">
                {item.eyebrow}
              </p>
              <h4 className="mt-2 text-base font-semibold text-brand-dark">
                {item.title}
              </h4>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-text-secondary">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {buyingTools.map((tool) => (
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

