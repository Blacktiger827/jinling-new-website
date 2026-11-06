"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const PHONE_DISPLAY = "+86-757-81637153";
const PHONE_HREF = "tel:+8675781637153";

const contactPaths = [
  {
    id: "pricing-request",
    eyebrow: "Quote & Lead Time",
    title: "The spec is mostly ready for pricing",
    subtitle:
      "Use this when product form, grade, finish, size, quantity, and destination are clear enough to quote.",
    highlight: "Quote path",
    subject: "Pricing Request - Jinling Steel",
    checklistTitle: "Quote faster with",
    checklist: [
      "Product form, grade, and finish",
      "Thickness, width, length, or OD / wall",
      "Quantity, destination port, and target delivery window",
      "Any tolerance, packaging, or document requirements",
    ],
    helperLinks: [
      { label: "Open grade library", href: "/grades" },
      { label: "Browse stainless steel guides", href: "/resources/stainless-steel-guides" },
      { label: "See product forms", href: "/products" },
    ],
    responseNote:
      "If the specification is mostly complete, the response should be pricing, lead time, or the exact missing items still blocking a quote.",
  },
  {
    id: "technical-review",
    eyebrow: "Grade & Finish",
    title: "The grade, finish, or standard is still open",
    subtitle:
      "Use this when the real decision is material fit: corrosion margin, surface choice, cleaning, or standard wording.",
    highlight: "Spec path",
    subject: "Technical Review Request - Jinling Steel",
    checklistTitle: "Most useful inputs",
    checklist: [
      "Application and service environment",
      "Temperature, chloride, cleaner, or chemical exposure",
      "Any relevant code, end-user standard, or drawing note",
      "Photos, existing supplier data, or failure symptoms",
    ],
    helperLinks: [
      { label: "Browse surfaces", href: "/surfaces" },
      { label: "Open applications", href: "/solutions/applications" },
      { label: "Open knowledge base", href: "/resources/stainless-steel-guides" },
    ],
    responseNote:
      "The first useful answer here is usually a cleaner spec basis: which grade, finish, or documentation basis should be specified before pricing.",
  },
  {
    id: "product-route",
    eyebrow: "Product Form",
    title: "The form or processing route is not settled",
    subtitle:
      "Use this when the order could be coil, sheet, strip, tube, pipe, or bar, or when cutting and tolerance route still affect the quote.",
    highlight: "Route path",
    subject: "Product Route Review - Jinling Steel",
    checklistTitle: "Most useful inputs",
    checklist: [
      "Target product form or drawing basis",
      "Thickness, width, length, OD / wall, or profile",
      "Downstream process: laser cutting, forming, welding, machining",
      "Tolerance, flatness, burr, edge, or packing concern",
    ],
    helperLinks: [
      { label: "See product forms", href: "/products" },
      { label: "Open capabilities", href: "/solutions/capabilities" },
      { label: "Read buying route", href: "/resources/stainless-steel-guides?track=buyers-guide#archive" },
    ],
    responseNote:
      "This path is for preventing a quote from being technically neat but commercially wrong because the form, processing route, or tolerance basis was chosen too early.",
  },
  {
    id: "documentation-samples",
    eyebrow: "Documents & Samples",
    title: "I need proof before I commit",
    subtitle:
      "Best when the order depends on sample pieces, MTC format, PMI scope, COO timing, or inspection planning.",
    highlight: "Proof path",
    subject: "Sample and Documentation Request - Jinling Steel",
    checklistTitle: "Most useful inputs",
    checklist: [
      "Grade and product form",
      "What sample, finish, or document preview is needed",
      "Whether PMI, 3.1, or third-party inspection matters",
      "Decision date or qualification milestone",
    ],
    helperLinks: [
      { label: "Read MTC guide", href: "/knowledge-base/how-to-read-mill-test-certificate" },
      { label: "Read PMI guide", href: "/knowledge-base/pmi-testing-stainless-steel" },
      { label: "Open specs archive", href: "/resources/stainless-steel-guides?track=quality#archive" },
    ],
    responseNote:
      "The goal is not generic reassurance. The goal is to clarify what proof can exist now, what appears later, and what should be written into the PO.",
  },
  {
    id: "shipment-release",
    eyebrow: "Shipment & Release",
    title: "Packing, timing, or export release is the concern",
    subtitle:
      "Use this when the issue is lead time, container plan, port choice, protective packing, documents, or shipment handoff.",
    highlight: "Release path",
    subject: "Shipment and Release Review - Jinling Steel",
    checklistTitle: "Please include",
    checklist: [
      "Order stage: RFQ, PO, production, packed, or shipped",
      "Destination port and required delivery window",
      "Packing, film, pallet, or container-loading concern",
      "Any document or inspection deadline",
    ],
    helperLinks: [
      { label: "Read export packaging", href: "/knowledge-base/stainless-steel-export-packaging-container-loading" },
      { label: "Read lead time guide", href: "/knowledge-base/stainless-steel-lead-time-by-product-form" },
      { label: "Open buying release", href: "/resources/stainless-steel-guides?track=buyers-guide#archive" },
    ],
    responseNote:
      "This path is for the moment when the material may be correct, but arrival condition, timing, or release paperwork still decides whether the order works.",
  },
  {
    id: "claim-review",
    eyebrow: "Claim & Review",
    title: "A sample or delivered order needs review",
    subtitle:
      "Use this for scratches, stains, wrong finish expectation, tolerance dispute, document mismatch, or post-arrival inspection questions.",
    highlight: "Review path",
    subject: "Claim or Technical Review - Jinling Steel",
    checklistTitle: "Please include",
    checklist: [
      "Product, grade, finish, and order reference",
      "Photos under normal and raking light if surface is involved",
      "Packing condition, receiving notes, and inspection timing",
      "What decision you need: root cause, replacement, credit, or prevention",
    ],
    helperLinks: [
      { label: "Read incoming inspection", href: "/knowledge-base/stainless-steel-incoming-inspection-checklist" },
      { label: "Read surface defects", href: "/knowledge-base/stainless-steel-surface-defect-standards" },
      { label: "Open technical review", href: "/contact#technical-review" },
    ],
    responseNote:
      "A useful review starts with evidence and sequence. We need to know what was ordered, what arrived, how it was handled, and what decision the buyer needs next.",
  },
] as const;

type ContactPathId = (typeof contactPaths)[number]["id"];

type FormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  productForm: string;
  grade: string;
  finish: string;
  size: string;
  quantity: string;
  destinationPort: string;
  deliveryWindow: string;
  application: string;
  serviceEnvironment: string;
  standardRequirement: string;
  currentIssue: string;
  packingConcern: string;
  shipmentStatus: string;
  documentNeed: string;
  sampleNeed: string;
  qualificationStage: string;
  decisionDate: string;
  affectedMaterial: string;
  evidenceAvailable: string;
  requestedReview: string;
  projectReference: string;
  fileLink: string;
  message: string;
};

const initialState: FormState = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  productForm: "",
  grade: "",
  finish: "",
  size: "",
  quantity: "",
  destinationPort: "",
  deliveryWindow: "",
  application: "",
  serviceEnvironment: "",
  standardRequirement: "",
  currentIssue: "",
  packingConcern: "",
  shipmentStatus: "",
  documentNeed: "",
  sampleNeed: "",
  qualificationStage: "",
  decisionDate: "",
  affectedMaterial: "",
  evidenceAvailable: "",
  requestedReview: "",
  projectReference: "",
  fileLink: "",
  message: "",
};

function buildMailto(email: string, subject: string, body: string) {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function buildInquiryBody(pathId: ContactPathId, values: FormState) {
  const baseLines = [
    `Inquiry type: ${pathId}`,
    `Name: ${values.fullName}`,
    `Company: ${values.company || "-"}`,
    `Email: ${values.email}`,
    `Phone / WhatsApp: ${values.phone || "-"}`,
    `Country / Destination: ${values.country || "-"}`,
  ];

  const routeLines: Record<ContactPathId, string[]> = {
    "pricing-request": [
      `Product form: ${values.productForm || "-"}`,
      `Grade: ${values.grade || "-"}`,
      `Finish: ${values.finish || "-"}`,
      `Size: ${values.size || "-"}`,
      `Quantity: ${values.quantity || "-"}`,
      `Destination port: ${values.destinationPort || "-"}`,
      `Requested delivery window: ${values.deliveryWindow || "-"}`,
    ],
    "technical-review": [
      `Application: ${values.application || "-"}`,
      `Service environment: ${values.serviceEnvironment || "-"}`,
      `Standard / requirement: ${values.standardRequirement || "-"}`,
      `Current uncertainty or issue: ${values.currentIssue || "-"}`,
    ],
    "product-route": [
      `Product form under review: ${values.productForm || "-"}`,
      `Size / drawing basis: ${values.size || "-"}`,
      `Application or downstream process: ${values.application || "-"}`,
      `Route uncertainty: ${values.currentIssue || "-"}`,
    ],
    "documentation-samples": [
      `Document need: ${values.documentNeed || "-"}`,
      `Sample need: ${values.sampleNeed || "-"}`,
      `Qualification stage: ${values.qualificationStage || "-"}`,
      `Decision date: ${values.decisionDate || "-"}`,
    ],
    "shipment-release": [
      `Order / shipment stage: ${values.shipmentStatus || "-"}`,
      `Destination port: ${values.destinationPort || "-"}`,
      `Required delivery window: ${values.deliveryWindow || "-"}`,
      `Packing / release concern: ${values.packingConcern || "-"}`,
    ],
    "claim-review": [
      `Affected material: ${values.affectedMaterial || "-"}`,
      `Issue or claim: ${values.currentIssue || "-"}`,
      `Evidence available: ${values.evidenceAvailable || "-"}`,
      `Requested review outcome: ${values.requestedReview || "-"}`,
      `Project reference: ${values.projectReference || "-"}`,
    ],
  };

  return [
    ...baseLines,
    "",
    ...routeLines[pathId],
    "",
    `Drawing / file link: ${values.fileLink || "-"}`,
    "",
    "Message:",
    values.message || "-",
  ].join("\n");
}

function getRequestedPath(): ContactPathId | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.replace("#", "");
  if (contactPaths.some((path) => path.id === hash)) {
    return hash as ContactPathId;
  }

  const inquiry = new URLSearchParams(window.location.search).get("inquiry");
  if (contactPaths.some((path) => path.id === inquiry)) {
    return inquiry as ContactPathId;
  }

  return null;
}

export function ContactInquiryDesk({
  email,
}: {
  email: string;
}) {
  const [selectedPath, setSelectedPath] =
    useState<ContactPathId>("pricing-request");
  const [formState, setFormState] = useState<FormState>(initialState);
  const [draftPrepared, setDraftPrepared] = useState(false);

  useEffect(() => {
    const syncFromUrl = () => {
      const requestedPath = getRequestedPath();
      if (requestedPath) {
        setSelectedPath(requestedPath);
        requestAnimationFrame(() => {
          document.getElementById(requestedPath)?.scrollIntoView({
            block: "start",
            behavior: "smooth",
          });
        });
      }
    };

    syncFromUrl();
    window.addEventListener("hashchange", syncFromUrl);
    return () => window.removeEventListener("hashchange", syncFromUrl);
  }, []);

  const selectedConfig =
    contactPaths.find((path) => path.id === selectedPath) ?? contactPaths[0];

  function updateHash(pathId: ContactPathId) {
    setSelectedPath(pathId);
    setDraftPrepared(false);
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${pathId}`);
    }
  }

  function handleChange<K extends keyof FormState>(field: K, value: FormState[K]) {
    setFormState((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = buildInquiryBody(selectedPath, formState);
    const subject =
      `${selectedConfig.subject}${formState.company ? ` | ${formState.company}` : ""}`;

    setDraftPrepared(true);
    window.location.href = buildMailto(email, subject, body);
  }

  return (
    <section id="contact-form" className="grid gap-8 xl:grid-cols-[1.18fr_0.82fr]">
      <div className="rounded-card-lg border border-cream-border bg-white p-6 shadow-[0_22px_70px_rgba(13,20,27,0.06)] sm:p-7">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-light">
            Inquiry Form
          </p>
          <h2
            className="mt-3 text-3xl text-brand-dark sm:text-4xl"
            style={{
              fontFamily:
                '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
            }}
          >
            Choose the inquiry type first, then only ask for the fields that matter.
          </h2>
          <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base">
            This form is designed to reduce back-and-forth. Pick the inquiry type that
            matches your situation, then send the minimum information needed for
            a useful first reply.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {contactPaths.map((path) => {
            const active = path.id === selectedPath;
            return (
              <button
                key={path.id}
                id={path.id}
                type="button"
                onClick={() => updateHash(path.id)}
                aria-pressed={active}
                className={`flex h-full flex-col rounded-card-md border p-5 text-left transition ${
                  active
                    ? "border-brand-accent bg-[#fff8df] shadow-[0_14px_40px_rgba(246,208,68,0.18)]"
                    : "border-cream-border-soft bg-cream-50 hover:border-brand-accent/45 hover:bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
                    {path.eyebrow}
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
                      active
                        ? "bg-brand-dark text-white"
                        : "border border-cream-border text-text-secondary"
                    }`}
                  >
                    {path.highlight}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-brand-dark">
                  {path.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">
                  {path.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        <form className="mt-8 space-y-8" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-brand-dark">Full name</span>
              <input
                required
                value={formState.fullName}
                onChange={(event) => handleChange("fullName", event.target.value)}
                className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                placeholder="Your name"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-brand-dark">Company</span>
              <input
                value={formState.company}
                onChange={(event) => handleChange("company", event.target.value)}
                className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                placeholder="Company name"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-brand-dark">Email</span>
              <input
                required
                type="email"
                value={formState.email}
                onChange={(event) => handleChange("email", event.target.value)}
                className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                placeholder="name@company.com"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-brand-dark">
                Phone / WhatsApp
              </span>
              <input
                value={formState.phone}
                onChange={(event) => handleChange("phone", event.target.value)}
                className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                placeholder="+86..."
              />
            </label>

            <label className="space-y-2 md:col-span-2">
              <span className="text-sm font-semibold text-brand-dark">
                Country / destination market
              </span>
              <input
                value={formState.country}
                onChange={(event) => handleChange("country", event.target.value)}
                className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                placeholder="Country, region, or destination port"
              />
            </label>
          </div>

          {selectedPath === "pricing-request" && (
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">Product form</span>
                <input
                  value={formState.productForm}
                  onChange={(event) => handleChange("productForm", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Coil, sheet, tube, pipe, bar..."
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">Grade</span>
                <input
                  value={formState.grade}
                  onChange={(event) => handleChange("grade", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="304, 316L, 430, 2205..."
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">Finish</span>
                <input
                  value={formState.finish}
                  onChange={(event) => handleChange("finish", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="2B, No.4, BA, mirror, AFP..."
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">Size</span>
                <input
                  value={formState.size}
                  onChange={(event) => handleChange("size", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Thickness × width × length or OD × wall"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">Quantity</span>
                <input
                  value={formState.quantity}
                  onChange={(event) => handleChange("quantity", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Tons, sheets, meters..."
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">Destination port</span>
                <input
                  value={formState.destinationPort}
                  onChange={(event) => handleChange("destinationPort", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Example: Hamburg, Jebel Ali, Los Angeles"
                />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-brand-dark">
                  Requested delivery window
                </span>
                <input
                  value={formState.deliveryWindow}
                  onChange={(event) => handleChange("deliveryWindow", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Need-by date, shipment window, or project milestone"
                />
              </label>
            </div>
          )}

          {selectedPath === "technical-review" && (
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-brand-dark">Application</span>
                <input
                  value={formState.application}
                  onChange={(event) => handleChange("application", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Food equipment, facade panel, marine bracket, process tank..."
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">
                  Service environment
                </span>
                <input
                  value={formState.serviceEnvironment}
                  onChange={(event) => handleChange("serviceEnvironment", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Indoor, coastal, chloride cleaners, acidic..."
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">
                  Standard / requirement
                </span>
                <input
                  value={formState.standardRequirement}
                  onChange={(event) => handleChange("standardRequirement", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="ASTM, EN, food-contact, project notes..."
                />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-brand-dark">
                  Current uncertainty or issue
                </span>
                <textarea
                  rows={4}
                  value={formState.currentIssue}
                  onChange={(event) => handleChange("currentIssue", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="What decision is still open: grade, finish, thickness, tolerance, corrosion concern..."
                />
              </label>
            </div>
          )}

          {selectedPath === "product-route" && (
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">Product form under review</span>
                <input
                  value={formState.productForm}
                  onChange={(event) => handleChange("productForm", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Coil, sheet, strip, tube, pipe, bar..."
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">Size / drawing basis</span>
                <input
                  value={formState.size}
                  onChange={(event) => handleChange("size", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Thickness, width, length, OD / wall, profile..."
                />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-brand-dark">
                  Application or downstream process
                </span>
                <input
                  value={formState.application}
                  onChange={(event) => handleChange("application", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Laser cutting, bending, welding, machining, installation..."
                />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-brand-dark">
                  What is still uncertain?
                </span>
                <textarea
                  rows={4}
                  value={formState.currentIssue}
                  onChange={(event) => handleChange("currentIssue", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Form choice, tolerance, flatness, edge, burr, packing, or processing sequence..."
                />
              </label>
            </div>
          )}

          {selectedPath === "documentation-samples" && (
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">Document need</span>
                <input
                  value={formState.documentNeed}
                  onChange={(event) => handleChange("documentNeed", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="MTC preview, 3.1, PMI, COO..."
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">Sample need</span>
                <input
                  value={formState.sampleNeed}
                  onChange={(event) => handleChange("sampleNeed", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Sample size, finish, or benchmark piece"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">
                  Qualification stage
                </span>
                <input
                  value={formState.qualificationStage}
                  onChange={(event) => handleChange("qualificationStage", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Supplier screen, first order, audit..."
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">Decision date</span>
                <input
                  value={formState.decisionDate}
                  onChange={(event) => handleChange("decisionDate", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="When this proof is needed"
                />
              </label>
            </div>
          )}

          {selectedPath === "shipment-release" && (
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">
                  Order / shipment stage
                </span>
                <input
                  value={formState.shipmentStatus}
                  onChange={(event) => handleChange("shipmentStatus", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="RFQ, PO issued, in production, packed, shipped..."
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">Destination port</span>
                <input
                  value={formState.destinationPort}
                  onChange={(event) => handleChange("destinationPort", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Example: Santos, Hamburg, Jebel Ali"
                />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-brand-dark">
                  Required delivery window
                </span>
                <input
                  value={formState.deliveryWindow}
                  onChange={(event) => handleChange("deliveryWindow", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Required vessel, site deadline, installation date, or inspection window"
                />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-brand-dark">
                  Packing, document, or release concern
                </span>
                <textarea
                  rows={4}
                  value={formState.packingConcern}
                  onChange={(event) => handleChange("packingConcern", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Film, pallet, tube-end protection, container loading, MTC timing, COO, inspection..."
                />
              </label>
            </div>
          )}

          {selectedPath === "claim-review" && (
            <div className="grid gap-4 md:grid-cols-2">
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-brand-dark">Affected material</span>
                <input
                  value={formState.affectedMaterial}
                  onChange={(event) => handleChange("affectedMaterial", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Product, grade, finish, size, order number, or sample reference"
                />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-brand-dark">
                  What needs review?
                </span>
                <textarea
                  rows={4}
                  value={formState.currentIssue}
                  onChange={(event) => handleChange("currentIssue", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Scratch, stain, finish mismatch, tolerance dispute, document mismatch, packing issue..."
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">Evidence available</span>
                <input
                  value={formState.evidenceAvailable}
                  onChange={(event) => handleChange("evidenceAvailable", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Photos, receiving report, MTC, packing photos..."
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-brand-dark">Requested review outcome</span>
                <input
                  value={formState.requestedReview}
                  onChange={(event) => handleChange("requestedReview", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="Root cause, prevention, replacement, credit, spec correction..."
                />
              </label>
              <label className="space-y-2 md:col-span-2">
                <span className="text-sm font-semibold text-brand-dark">
                  Project or order reference
                </span>
                <input
                  value={formState.projectReference}
                  onChange={(event) => handleChange("projectReference", event.target.value)}
                  className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                  placeholder="PO, invoice, project, or sample reference"
                />
              </label>
            </div>
          )}

          <div className="grid gap-4">
            <label className="space-y-2">
              <span className="text-sm font-semibold text-brand-dark">
                Drawing, photo, or file link
              </span>
              <input
                value={formState.fileLink}
                onChange={(event) => handleChange("fileLink", event.target.value)}
                className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                placeholder="Share link to drawings, photos, current MTC, or benchmark material"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-brand-dark">
                Message
              </span>
              <textarea
                required
                rows={6}
                value={formState.message}
                onChange={(event) => handleChange("message", event.target.value)}
                className="w-full rounded-card-sm border border-cream-border bg-cream-50 px-4 py-3 text-sm leading-6 text-brand-dark outline-none transition focus:border-brand-accent focus:bg-white"
                placeholder="Tell us what you are trying to make, buy, qualify, or verify."
              />
            </label>
          </div>

          <div className="rounded-card-md border border-cream-border bg-cream-50 p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.14em] text-text-light">
              Submit path
            </div>
            <p className="mt-3 text-sm leading-7 text-text-secondary">
              The button below prepares a structured email draft using your form
              inputs, so the inquiry arrives in a format our export or technical
              team can act on faster.
            </p>
            {draftPrepared ? (
              <p className="mt-3 text-sm font-semibold text-brand-dark">
                Email draft prepared. If your mail app did not open, use the
                direct email link in the right-hand panel.
              </p>
            ) : null}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="inline-flex items-center rounded-full bg-brand-dark px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18222d]"
            >
              Prepare inquiry draft
            </button>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center rounded-full border border-cream-border px-5 py-3 text-sm font-semibold text-text-primary transition hover:border-brand-accent hover:text-brand-dark"
            >
              Call instead
            </a>
          </div>
        </form>
      </div>

      <aside className="space-y-5">
        <div className="rounded-card-lg border border-brand-dark/8 bg-[linear-gradient(135deg,#111a23_0%,#1a2430_100%)] p-6 text-white shadow-[0_28px_90px_rgba(13,20,27,0.14)]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-accent">
            Selected Inquiry
          </p>
          <h3
            className="mt-4 text-3xl text-white"
            style={{
              fontFamily:
                '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
            }}
          >
            {selectedConfig.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-white/72">
            {selectedConfig.responseNote}
          </p>
          <div className="mt-6 rounded-card-md border border-white/10 bg-white/6 p-5">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-accent/88">
              {selectedConfig.checklistTitle}
            </div>
            <ul className="mt-4 space-y-3">
              {selectedConfig.checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-6 text-white/74"
                >
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-card-lg border border-cream-border bg-white p-6 shadow-[0_16px_50px_rgba(13,20,27,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-light">
            Before You Send
          </p>
          <div className="mt-5 space-y-3">
            {selectedConfig.helperLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group block rounded-card-sm border border-cream-border bg-cream-50 p-4 transition hover:border-brand-accent/55 hover:bg-white"
              >
                <span className="text-sm font-semibold text-brand-dark transition-colors group-hover:text-brand-accent">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-card-lg border border-cream-border bg-white p-6 shadow-[0_16px_50px_rgba(13,20,27,0.05)]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-light">
            Direct Contact
          </p>
          <div className="mt-5 space-y-4">
            <div className="rounded-card-sm border border-cream-border bg-cream-50 p-4">
              <div className="text-sm font-semibold text-brand-dark">Email</div>
              <a
                href={`mailto:${email}`}
                className="mt-2 inline-block text-sm text-text-secondary transition hover:text-brand-dark"
              >
                {email}
              </a>
            </div>
            <div className="rounded-card-sm border border-cream-border bg-cream-50 p-4">
              <div className="text-sm font-semibold text-brand-dark">Phone</div>
              <a
                href={PHONE_HREF}
                className="mt-2 inline-block text-sm text-text-secondary transition hover:text-brand-dark"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
}

