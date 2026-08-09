import Link from "next/link";
import type { Metadata } from "next";
import { ContactInquiryDesk } from "@/components/content/ContactInquiryDesk";

const EMAIL = "info@jinlingsteel.com";

const quoteBasis = [
  {
    title: "Material basis",
    detail: "Product form, grade, finish, and size should be clear enough to compare like with like.",
  },
  {
    title: "Processing basis",
    detail: "Tolerance, edge, film, cutting, packing, and inspection notes belong in the RFQ before price is judged.",
  },
  {
    title: "Release basis",
    detail: "Destination port, shipment window, MTC, COO, and inspection timing decide whether the quote can actually move.",
  },
] as const;

export const metadata: Metadata = {
  title: "Request Stainless Steel Pricing",
  description:
    "Request stainless steel pricing with product form, grade, finish, size, quantity, destination, packing, document, and shipment requirements.",
  alternates: {
    canonical: "/get-quote",
  },
};

export default function GetQuotePage() {
  return (
    <div className="bg-cream-200">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(246,208,68,0.15),transparent_28%),linear-gradient(180deg,#0d141b_0%,#111a23_100%)] text-white">
        <div className="absolute right-[-7rem] top-[-7rem] h-64 w-64 rounded-full border border-brand-accent/20" />
        <div className="absolute bottom-[-8rem] left-[-5rem] h-72 w-72 rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-accent">
                Request Pricing
              </p>
              <h1
                className="mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl"
                style={{
                  fontFamily:
                    '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
                }}
              >
                Quote the order only after the basis is clear.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/76 sm:text-lg">
                If grade, finish, product form, documents, packing, and shipment
                timing are already clear, start with pricing. If one of those
                points is still uncertain, route the question first so the quote
                does not become false precision.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#contact-form"
                  className="rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-brand-dark transition hover:bg-brand-accent-hover"
                >
                  Start pricing request
                </Link>
                <Link
                  href="/contact#technical-review"
                  className="rounded-full border border-white/20 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/10"
                >
                  Ask for spec review first
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {quoteBasis.map((item) => (
                <article
                  key={item.title}
                  className="rounded-card-md border border-white/12 bg-white/8 p-5 backdrop-blur"
                >
                  <h2 className="text-base font-semibold text-white">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-white/68">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <ContactInquiryDesk email={EMAIL} />
      </section>
    </div>
  );
}
