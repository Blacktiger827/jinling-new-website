import Link from "next/link";

const CONTACT_EMAIL = "info@jinlingsteel.com";

type HubInquiryContext = "home" | "products" | "insights" | "capabilities";
type HubInquiryTone = "dark" | "light";

interface HubInquiryCueProps {
  context: HubInquiryContext;
  tone?: HubInquiryTone;
  className?: string;
}

const cueCopy: Record<
  HubInquiryContext,
  {
    eyebrow: string;
    heading: string;
    note: string;
    subject: string;
    body: string;
    secondaryHref: string;
    secondaryLabel: string;
  }
> = {
  home: {
    eyebrow: "Direct line",
    heading: "Have one unresolved spec point?",
    note: "Send the point that could delay the order. We will route it to pricing or technical review.",
    subject: "Stainless steel order route question",
    body: "I am reviewing Jinling Steel and want help with one order route question.",
    secondaryHref: "/contact#technical-review",
    secondaryLabel: "Technical review",
  },
  products: {
    eyebrow: "Before pricing",
    heading: "Send the form, finish, or tolerance question.",
    note: "Useful when the product family is clear, but the release route still needs checking.",
    subject: "Product route question",
    body: "I am reviewing the product range and want help checking the right form, finish, or tolerance route.",
    secondaryHref: "/get-quote",
    secondaryLabel: "Request pricing",
  },
  insights: {
    eyebrow: "Current check",
    heading: "Need today's buying signal checked against a real order?",
    note: "Market notes are dated. Use this when price, inventory, policy, or shipment timing needs a current read.",
    subject: "Current China stainless market check",
    body: "I am reading the market notes and want a current check for a possible stainless steel order.",
    secondaryHref: "/contact#pricing-request",
    secondaryLabel: "Pricing request",
  },
  capabilities: {
    eyebrow: "Process question",
    heading: "If the process can affect release, send it early.",
    note: "Best for flatness, edge, film, coating, packing, or finish questions that should be settled before production.",
    subject: "Processing route review",
    body: "I am reviewing Jinling processing capabilities and want help checking the right process route.",
    secondaryHref: "/contact#technical-review",
    secondaryLabel: "Technical review",
  },
};

function buildMailto(copy: (typeof cueCopy)[HubInquiryContext]) {
  const body = [
    "Hi Jinling team,",
    "",
    copy.body,
    "",
    "What we know:",
    "- Grade / product:",
    "- Finish / process:",
    "- Size / quantity:",
    "- Destination / timing:",
    "",
    "The point to confirm:",
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(body)}`;
}

export function HubInquiryCue({
  context,
  tone = "light",
  className = "",
}: HubInquiryCueProps) {
  const copy = cueCopy[context];
  const isDark = tone === "dark";

  return (
    <div
      className={`mt-5 max-w-4xl rounded-[1.15rem] border p-3.5 shadow-[0_14px_38px_rgba(13,20,27,0.09)] backdrop-blur-md sm:mt-7 sm:p-4 ${
        isDark
          ? "border-white/16 bg-brand-dark/58 text-white"
          : "border-[#d8cbb8] bg-white/62 text-brand-dark"
      } ${className}`}
    >
      <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-[0.16em] ${
              isDark ? "text-brand-accent" : "text-[#8a6b32]"
            }`}
          >
            {copy.eyebrow}
          </p>
          <p
            className={`mt-1.5 text-sm font-semibold leading-6 sm:text-base ${
              isDark ? "text-white" : "text-brand-dark"
            }`}
          >
            {copy.heading}
          </p>
          <p
            className={`mt-1 hidden text-sm leading-6 sm:block ${
              isDark ? "text-white/68" : "text-text-secondary"
            }`}
          >
            {copy.note}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={buildMailto(copy)}
            className={`inline-flex min-h-11 items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
              isDark
                ? "bg-brand-accent text-brand-dark hover:bg-brand-accent-hover"
                : "bg-brand-dark text-white hover:bg-[#18222d]"
            }`}
          >
            Email the question
          </a>
          <Link
            href={copy.secondaryHref}
            className={`inline-flex min-h-11 items-center justify-center rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
              isDark
                ? "border-white/20 bg-white/6 text-white hover:border-white/35 hover:bg-white/10"
                : "border-[#d8cbb8] bg-white/76 text-brand-dark hover:border-brand-accent hover:text-brand-accent"
            }`}
          >
            {copy.secondaryLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}
