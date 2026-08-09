import Link from "next/link";

export function CTABanner() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">
          Ready to move the project forward?
        </h2>
        <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">
          Send the grade, finish, dimensions, quantity, or even the application
          question. We route it to pricing or technical review instead of
          forcing every request through one inbox.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact#pricing-request"
            className="inline-flex items-center justify-center rounded-md bg-brand-accent px-8 py-3.5 text-sm font-semibold text-brand-dark hover:bg-brand-accent-hover transition-colors"
          >
            Request Pricing
          </Link>
          <Link
            href="/contact#technical-review"
            className="inline-flex items-center justify-center rounded-md border border-border px-8 py-3.5 text-sm font-semibold text-text-primary hover:bg-bg-light transition-colors"
          >
            Ask a Technical Question
          </Link>
        </div>
      </div>
    </section>
  );
}
