import Link from "next/link";

const CONTACT_EMAIL = "info@jinlingsteel.com";

type InquiryVariant = "product" | "application" | "capability";

interface DirectInquiryStripProps {
  title: string;
  pageUrl?: string;
  variant: InquiryVariant;
}

function buildMailto({ title, pageUrl, variant }: DirectInquiryStripProps) {
  const subjectPrefix =
    variant === "product"
      ? "Product question"
      : variant === "application"
        ? "Application review"
        : "Process review";
  const contextLine = pageUrl ? `Page: https://www.jinlingsteel.com${pageUrl}` : `Page: ${title}`;
  const body = [
    "Hi Jinling team,",
    "",
    "I am reviewing this page and would like help checking the order route.",
    contextLine,
    "",
    "What we know:",
    "- Grade / finish:",
    "- Size / quantity:",
    "- Destination / timing:",
    "",
    "The point we still need to confirm:",
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`${subjectPrefix}: ${title}`)}&body=${encodeURIComponent(body)}`;
}

export function DirectInquiryStrip(props: DirectInquiryStripProps) {
  const { variant } = props;
  const eyebrow =
    variant === "product"
      ? "Order route"
      : variant === "application"
        ? "Service route"
        : "Process route";
  const heading =
    variant === "product"
      ? "If this form is close, send the point that still feels risky."
      : variant === "application"
        ? "If the service condition is the question, send it before the grade is locked."
        : "If the process can make or break release, send that risk first.";
  const note =
    variant === "product"
      ? "Useful when form, grade, finish, tolerance, packing, or lead time still needs a calm check."
      : variant === "application"
        ? "Useful when corrosion exposure, fabrication, cleaning, or visible finish could change the route."
        : "Useful when width, flatness, film, edge, coating, or packing may decide whether the order releases cleanly.";
  const secondaryHref =
    variant === "product" ? "/get-quote" : "/contact#technical-review";
  const secondaryLabel =
    variant === "product" ? "Use quote form" : "Ask technical review";
  const proofLine =
    variant === "product"
      ? "Bring the grade, finish, size, packing, and timing risk."
      : variant === "application"
        ? "Bring the service condition, exposure, cleaning route, and acceptance risk."
        : "Bring the process, tolerance, film, edge, coating, or packing risk.";

  return (
    <section className="not-prose mt-12 border-y border-[#d8cbb8] bg-[#fffdf8]/70 py-5 sm:py-6">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a6b32]">
            {eyebrow}
          </p>
          <h2 className="mt-2 max-w-2xl text-[1.16rem] font-semibold leading-7 tracking-[-0.02em] text-brand-dark sm:text-[1.35rem]">
            {heading}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-text-secondary">
            {note}
          </p>
          <p className="mt-3 border-l-2 border-brand-accent/70 pl-3 text-sm leading-6 text-[#6d6256]">
            {proofLine}
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 lg:justify-end">
          <a
            href={buildMailto(props)}
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-brand-dark px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#18222d]"
          >
            Email this page
          </a>
          <Link
            href={secondaryHref}
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#d8cbb8] bg-white/75 px-5 py-2.5 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-accent hover:text-brand-accent"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
