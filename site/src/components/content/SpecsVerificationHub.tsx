import Link from "next/link";

const verificationRoutes = [
  {
    title: "Certificate & Traceability",
    description:
      "Where heat number, MTC type, grade equivalence, and signatory authority decide whether the paperwork is actually release-ready.",
    recommendation: "MTC + heat traceability",
  },
  {
    title: "Incoming Inspection",
    description:
      "The receiving check for labels, packaging condition, dimensions, surface condition, and the truckside hold-or-release decision.",
    recommendation: "Dockside release logic",
  },
  {
    title: "Tolerance & Geometry",
    description:
      "Where thickness, flatness, width, and contract wording matter more than the nominal number on the drawing.",
    recommendation: "Standard + PO wording",
  },
  {
    title: "Complaint & NCR",
    description:
      "For out-of-spec chemistry, visible defects, non-conforming deliveries, and the evidence chain behind a real claim.",
    recommendation: "Evidence before blame",
  },
] as const;

const verificationReadingShelf = [
  {
    eyebrow: "Document proof",
    title: "How to Read the MTC",
    description:
      "Start here when the shipment looks acceptable but the real question is whether the certificate proves what the PO required.",
    href: "/knowledge-base/how-to-read-mill-test-certificate",
  },
  {
    eyebrow: "3.1 proof",
    title: "EN 10204 3.1 Certificate",
    description:
      "Useful when the buyer or auditor needs more than an MTC label: the certification basis and signing authority have to be clear.",
    href: "/knowledge-base/how-to-read-mill-test-certificate",
  },
  {
    eyebrow: "Material check",
    title: "PMI Testing",
    description:
      "The fastest reference when you need to know whether handheld XRF, lab chemistry, or simple certificate review is enough.",
    href: "/knowledge-base/pmi-testing-stainless-steel",
  },
  {
    eyebrow: "Receiving check",
    title: "Incoming Inspection Checklist",
    description:
      "Use this when the real question is what needs to be checked before unloading becomes acceptance.",
    href: "/knowledge-base/stainless-steel-incoming-inspection-checklist",
  },
  {
    eyebrow: "Tolerance check",
    title: "Thickness Tolerance Standards",
    description:
      "Built for jobs where ASTM, EN, or GB thickness language determines whether a dispute will be easy or messy later.",
    href: "/knowledge-base/stainless-steel-thickness-tolerance-standards",
  },
  {
    eyebrow: "Complaint evidence",
    title: "Quality Complaint Handling",
    description:
      "Go here when the shipment has already failed and the next step is evidence, isolation, and a usable claim package.",
    href: "/knowledge-base/how-to-file-quality-complaint-stainless-steel",
  },
] as const;

const verificationTools = [
  {
    title: "Open Quality Guides",
    description:
      "Use quality guides when the next question is grade equivalence, documentation notes, ordering designation, or inspection proof.",
    href: "/resources/stainless-steel-guides#quality",
    cta: "Browse guides",
  },
  {
    title: "Open Grade Library",
    description:
      "Move into core grades when the verification problem is actually a grade-selection or naming problem upstream.",
    href: "/grades",
    cta: "Browse grades",
  },
  {
    title: "Ask for Release Review",
    description:
      "Use this when the material is close to release but the documentation, tolerance, or traceability still needs a second set of eyes.",
    href: "/contact#technical-review",
    cta: "Ask for review",
  },
] as const;

export function SpecsVerificationHub() {
  return (
    <section className="rounded-card-lg border border-border bg-gradient-to-br from-[#eef1f3] via-white to-[#f5efe7] p-6 shadow-sm shadow-brand-dark/5 sm:p-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
          Specs & Verification
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-brand-dark sm:text-3xl">
          Turn inspection questions into release-ready proof.
        </h2>
        <p className="mt-3 text-base leading-7 text-text-secondary">
          Name the proof problem first: certificate, receiving, tolerance, or
          non-conformance. Then open the right knowledge page and move into
          grades, datasheets, or technical review when the release decision
          still needs support.
        </p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {verificationRoutes.map((route) => (
          <article
            key={route.title}
            className="rounded-card-md border border-border bg-white/85 p-5 backdrop-blur-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
              Verification Check
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
              Three proof checks before the shipment is released.
            </h3>
          </div>
          <Link
            href="/resources/stainless-steel-guides#quality"
            className="text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent-hover"
          >
            More verification reads
          </Link>
        </div>

        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          {verificationReadingShelf.slice(0, 3).map((item) => (
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
        {verificationTools.map((tool) => (
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

