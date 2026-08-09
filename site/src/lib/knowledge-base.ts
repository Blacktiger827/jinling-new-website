export const KB_CATEGORIES = [
  {
    slug: "material-guide",
    name: "Grades & Selection",
    eyebrow: "Find the selection problem",
    description:
      "Grade families, substitutions, application fit, and the questions buyers ask before they ever request pricing.",
  },
  {
    slug: "processing",
    name: "Processing & Fabrication",
    eyebrow: "Turn theory into production",
    description:
      "Welding, bending, deep drawing, cutting, forming, and the process controls that keep stainless usable after fabrication.",
  },
  {
    slug: "corrosion",
    name: "Corrosion & Service Limits",
    eyebrow: "Know the service boundary before it fails",
    description:
      "Pitting, crevice corrosion, SCC, passivation, and the environmental thresholds that drive grade upgrades.",
  },
  {
    slug: "quality",
    name: "Specs & Verification",
    eyebrow: "Verify what the shipment and spec really say",
    description:
      "MTC interpretation, PMI, tolerance standards, complaints, and the documentation discipline behind reliable stainless supply.",
  },
  {
    slug: "buyers-guide",
    name: "Buying & Release",
    eyebrow: "Buy and release with fewer surprises",
    description:
      "Commercial judgment for pricing, inspections, finish selection, supplier comparison, and risk control in real orders.",
  },
] as const;

export type KBCategorySlug = (typeof KB_CATEGORIES)[number]["slug"];

export const KB_CATEGORY_NAMES: Record<KBCategorySlug, string> = {
  "material-guide": "Grades & Selection",
  processing: "Processing & Fabrication",
  corrosion: "Corrosion & Service Limits",
  quality: "Specs & Verification",
  "buyers-guide": "Buying & Release",
};

export const KB_READING_PATHS = [
  {
    title: "New to stainless steel",
    description:
      "Understand the material families, the 304 vs 316 decision, and the minimum vocabulary you need before talking to a mill or fabricator.",
    href: "/resources/stainless-steel-guides?track=material-guide#archive",
    label: "Foundation path",
    nextStepLabel: "Compare common grades",
    nextStepHref: "/grades",
    articleSlugs: [
      "what-is-stainless-steel",
      "5-types-of-stainless-steel",
      "304-vs-316-stainless-steel",
    ],
  },
  {
    title: "Engineer or QA",
    description:
      "Jump straight into grade equivalence, corrosion mechanisms, documentation checks, and the process variables that change field performance.",
    href: "/resources/stainless-steel-guides?track=quality#archive",
    label: "Technical path",
    nextStepLabel: "Ask for a technical review",
    nextStepHref: "/contact#technical-review",
    articleSlugs: [
      "stainless-steel-grade-comparison",
      "what-is-pitting-corrosion",
      "how-to-read-mill-test-certificate",
    ],
  },
  {
    title: "Procurement and sourcing",
    description:
      "Use the library like a commercial playbook: reduce inspection risk, avoid common sourcing mistakes, and resolve quality disputes faster.",
    href: "/resources/stainless-steel-guides?track=buyers-guide#archive",
    label: "Commercial path",
    nextStepLabel: "Prepare a pricing request",
    nextStepHref: "/contact#pricing-request",
    articleSlugs: [
      "common-mistakes-buying-stainless-steel",
      "stainless-steel-lead-time-by-product-form",
      "stainless-steel-moq-trial-order",
    ],
  },
] as const;

export type KBArticleIntent =
  | "informational"
  | "comparison"
  | "technical"
  | "quality"
  | "commercial";

export interface KBIntentAction {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export interface KBArticleExperience {
  intent: KBArticleIntent;
  showFaq: boolean;
  relatedTitle: string;
  ctaHeading: string;
  ctaText: string;
  ctaHref: string;
  ctaSecondaryText?: string;
  ctaSecondaryHref?: string;
  endcapTitle: string;
  endcapDescription: string;
  nextSteps: KBIntentAction[];
}

const KB_INTENT_OVERRIDES: Partial<Record<string, KBArticleIntent>> = {
  "17-4ph-stainless-steel": "technical",
  "2b-vs-ba-surface-finish": "comparison",
  "2b-vs-no4-vs-afp-kitchen-equipment": "comparison",
  "304-vs-430-mirror-panels": "comparison",
  "304-316-coastal-specifier-framework": "quality",
  "304-vs-316l-commercial-kitchen-sinks": "comparison",
  "304-vs-430-kitchen-equipment": "comparison",
  "316l-mirror-for-coastal-lobby-elevator": "comparison",
  "304-stainless-steel-mechanical-properties": "technical",
  "afp-over-mirror-when-worth-it": "comparison",
  "2205-duplex-chemical-composition": "technical",
  "alloying-elements-stainless-steel": "technical",
  "architectural-ss-surface-selection": "technical",
  "cold-rolling-work-hardening-curves": "technical",
  "creep-stress-relaxation-stainless-steel": "technical",
  "dissimilar-metal-welding-stainless-carbon": "technical",
  "duplex-2205-mechanical-advantages": "technical",
  "duplex-2205-welding-guide": "technical",
  "duplex-hot-working-window": "technical",
  "duplex-stainless-steel-machining": "technical",
  "duplex-welding-challenges-buyer": "quality",
  "duplex-welding-phase-balance": "technical",
  "electropolishing-vs-mechanical-polishing": "comparison",
  "en-1-4301-vs-astm-304-stainless-steel": "comparison",
  "904l-vs-254smo-stainless-steel": "comparison",
  "fatigue-strength-stainless-steel": "technical",
  "ferrite-content-measurement-duplex": "quality",
  "food-grade-stainless-steel": "technical",
  "pharmaceutical-equipment-stainless-steel": "technical",
  "galvanic-corrosion-stainless-steel": "technical",
  "gb-astm-en-thickness-tolerance": "quality",
  "how-to-inspect-stainless-steel-delivery": "quality",
  "how-to-read-mill-test-certificate": "quality",
  "high-hardness-stainless-steel": "technical",
  "high-temperature-stainless-steel": "technical",
  "hot-rolled-wide-plate-narrow-strip-tolerance": "quality",
  "how-to-identify-real-304-stainless-steel": "quality",
  "igc-testing-methods-gb4334-astm-a262": "quality",
  "is-stainless-steel-magnetic": "technical",
  "iso-9445-vs-astm-a480": "quality",
  "low-temperature-toughness-austenitic-stainless-steel": "technical",
  "minus-tolerance-delivery-stainless-steel": "quality",
  "mill-edge-vs-slit-edge-delivery-standards": "quality",
  "mirror-finish-acceptance-haze-gloss-pinhole": "quality",
  "mirror-finish-packaging-scratch-prevention": "commercial",
  "molybdenum-content-corrosion-resistance": "technical",
  "martensitic-stainless-steel-hardness": "technical",
  "multi-pass-welding-thick-ss-plate": "technical",
  "ndt-method-selection-stainless-steel": "quality",
  "no4-vs-hairline-finish": "comparison",
  "non-conforming-stainless-steel-decision-guide": "quality",
  "pmi-testing-stainless-steel": "quality",
  "preheat-pwht-stainless-steel": "technical",
  "pre-value-stainless-steel-selection": "technical",
  "precision-ss-strip-tolerance-grades": "quality",
  "residual-stress-flatness-stainless-steel": "quality",
  "role-of-nitrogen-in-stainless-steel": "technical",
  "saltwater-stainless-steel": "technical",
  "stainless-steel-automotive-applications": "technical",
  "stainless-steel-elevator-decoration": "technical",
  "stainless-steel-flatness-requirements": "quality",
  "stainless-steel-incoming-inspection-checklist": "quality",
  "stainless-steel-in-architecture": "technical",
  "stainless-steel-chemical-environments": "technical",
  "stainless-steel-export-packaging-container-loading": "commercial",
  "stainless-steel-food-equipment": "technical",
  "stainless-steel-lgn-tanks-cryogenic": "technical",
  "stainless-steel-lead-time-by-product-form": "commercial",
  "stainless-steel-maintenance": "technical",
  "stainless-steel-medical-devices": "technical",
  "stainless-steel-moq-trial-order": "commercial",
  "stainless-steel-payment-terms-risk-control": "commercial",
  "stainless-steel-samples-mtc-certificate-of-origin": "commercial",
  "stainless-steel-sheet-sizes": "technical",
  "stainless-steel-thickness-tolerance-standards": "quality",
  "stainless-steel-composition-out-of-spec": "quality",
  "stainless-steel-fgd-flue-gas-desulfurization": "technical",
  "stainless-steel-for-marine-offshore": "technical",
  "stainless-steel-for-pressure-vessels": "quality",
  "stainless-steel-grade-equivalence-export": "quality",
  "stainless-steel-passivation-guide": "technical",
  "stainless-steel-pickling-passivation-specs": "technical",
  "stainless-steel-scratch-repair": "quality",
  "stainless-steel-tube-specifications": "technical",
  "stainless-steel-water-treatment-desalination": "technical",
  "stainless-steel-weld-discoloration": "quality",
  "stainless-steel-weight-calculator": "technical",
  "stainless-steel-bending-cracking": "technical",
  "stainless-steel-bending-guide": "technical",
  "stainless-steel-grade-comparison": "quality",
  "stainless-steel-hardness-by-grade": "technical",
  "stainless-steel-solution-annealing": "technical",
  "structural-stainless-steel-design": "technical",
  "stainless-steel-strength": "technical",
  "springback-compensation-stainless-steel": "technical",
  "stainless-steel-temper-conditions": "technical",
  "surface-roughness-ra-food-equipment": "technical",
  "surface-roughness-ra-corrosion-resistance": "technical",
  "ss-tube-wall-thickness-tolerance": "quality",
  "stainless-steel-tolerance-contract-terms": "quality",
  "tig-vs-mig-welding-stainless-steel": "comparison",
  "tensile-strength-stainless-steel": "technical",
  "third-party-inspection-stainless-steel": "quality",
  "en-10204-31-mill-test-certificate": "quality",
  "nuclear-power-stainless-steel": "quality",
  "nsf-51-vs-3a-kitchen-equipment": "quality",
  "uns-numbering-system-stainless-steel": "quality",
  "what-does-l-mean-stainless-steel": "technical",
  "what-is-cold-rolling-stainless-steel": "technical",
  "what-is-sus304-stainless-steel": "comparison",
  "weld-quality-acceptance-stainless-steel": "quality",
  "weld-corrosion-prevention": "technical",
  "work-hardening-annealing-fld": "technical",
  "work-hardening-stainless-steel": "technical",
};

function isComparisonArticle(title: string, slug: string) {
  return (
    /\b(vs|versus|difference|same|choose|pick|better|worth|substitute|compare)\b/i.test(
      title
    ) || /\bvs\b/.test(slug)
  );
}

function removeMarkdownSections(markdown: string, sectionNames: string[]) {
  if (!sectionNames.length) return markdown.trim();

  const sections = new Set(sectionNames.map((name) => name.toLowerCase()));
  const lines = markdown.split("\n");
  const kept: string[] = [];
  let skip = false;

  for (const line of lines) {
    const headingMatch = line.match(/^##\s+(.+)$/);
    if (headingMatch) {
      const normalized = headingMatch[1]
        .replace(/\s*\{#.*\}\s*$/, "")
        .trim()
        .toLowerCase();
      skip = sections.has(normalized);
      if (skip) {
        continue;
      }
    }

    if (!skip) {
      kept.push(line);
    }
  }

  return kept.join("\n").replace(/\n{3,}/g, "\n\n").trim();
}

function stripRecurringPromotionalParagraphs(markdown: string) {
  const recurringPatterns = [
    /150\+\s+clients across 10\+\s+countries/i,
    /Questions on grade, finish, or tolerance\?/i,
  ];

  return markdown
    .split(/\n{2,}/)
    .filter((block) => !recurringPatterns.some((pattern) => pattern.test(block)))
    .join("\n\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function buildKnowledgeBaseArticleMarkdown({
  markdown,
  showFaq,
}: {
  markdown: string;
  showFaq: boolean;
}) {
  const withoutRepeatedSections = removeMarkdownSections(markdown, [
    "Related Resources",
    ...(showFaq ? [] : ["FAQ"]),
  ]);

  return stripRecurringPromotionalParagraphs(withoutRepeatedSections);
}

export function getKnowledgeBaseArticleExperience({
  title,
  slug,
  category,
  faqCount,
}: {
  title: string;
  slug: string;
  category: KBCategorySlug;
  faqCount: number;
}): KBArticleExperience {
  const comparisonArticle = isComparisonArticle(title, slug);

  const intent: KBArticleIntent =
    KB_INTENT_OVERRIDES[slug] ??
    (category === "quality"
      ? "quality"
      : category === "buyers-guide"
        ? "commercial"
        : comparisonArticle
          ? "comparison"
          : category === "processing" || category === "corrosion"
            ? "technical"
            : "informational");

  const showFaq =
    faqCount >= 2 &&
    faqCount <= 6 &&
    (intent === "quality" || intent === "commercial" || intent === "comparison");

  if (intent === "quality") {
    return {
      intent,
      showFaq,
      relatedTitle: "More QA references",
      ctaHeading: "Need to verify an MTC, tolerance issue, or inspection point?",
      ctaText: "Ask a Technical Question",
      ctaHref: "/contact#technical-review",
      ctaSecondaryText: "Open Stainless Steel Guides",
      ctaSecondaryHref: "/resources/stainless-steel-guides",
      endcapTitle: "Turn this QA guidance into a usable reference set",
      endcapDescription:
        "Move from the article into spec pages, product forms, and a direct document review path when the shipment is already on the line.",
      nextSteps: [
        {
          eyebrow: "Reference values",
          title: "Open stainless steel guides",
          description:
            "Use stainless steel guides when you need a fast check on grade, finish, inspection, and release context.",
          href: "/resources/stainless-steel-guides",
          cta: "Browse guides",
        },
        {
          eyebrow: "Product context",
          title: "Match the issue to the product form",
          description:
            "Sheet, coil, plate, and tube fail differently. Name the commercial form before assigning blame.",
          href: "/products",
          cta: "View product forms",
        },
        {
          eyebrow: "Need help now",
          title: "Send the document set for review",
          description:
            "Best for MTC questions, tolerance disputes, PMI results, and incoming inspection issues that need a second pair of eyes.",
          href: "/contact#technical-review",
          cta: "Request a review",
        },
      ],
    };
  }

  if (intent === "commercial") {
    return {
      intent,
      showFaq,
      relatedTitle: "More sourcing guides",
      ctaHeading: "Ready to turn this buying guidance into a real RFQ?",
      ctaText: "Request Pricing",
      ctaHref: "/contact#pricing-request",
      ctaSecondaryText: "Compare Product Forms",
      ctaSecondaryHref: "/products",
      endcapTitle: "Carry this into a cleaner buying decision",
      endcapDescription:
        "These next steps help move from reading to quoting without losing the technical details that matter later in claims or qualification.",
      nextSteps: [
        {
          eyebrow: "Get commercial",
          title: "Prepare a pricing request",
          description:
            "Use the contact flow once you already know the grade, size range, quantity, and destination or are close to it.",
          href: "/contact#pricing-request",
          cta: "Request pricing",
        },
        {
          eyebrow: "Avoid bad substitutions",
          title: "Check the grade library first",
          description:
            "Make sure the commercial shortcut is not quietly changing the corrosion margin, weldability, or finish outcome.",
          href: "/grades",
          cta: "Open grade pages",
        },
        {
          eyebrow: "Match the form",
          title: "Compare the product forms",
          description:
            "A buying decision is only useful when it matches the real form: coil, sheet, plate, tube, bar, or decorative pipe.",
          href: "/products",
          cta: "View product forms",
        },
      ],
    };
  }

  if (intent === "comparison") {
    return {
      intent,
      showFaq,
      relatedTitle: "More selection comparisons",
      ctaHeading: "Need to turn this comparison into a project-ready choice?",
      ctaText: "Ask a Technical Question",
      ctaHref: "/contact#technical-review",
      ctaSecondaryText: "Open Stainless Steel Guides",
      ctaSecondaryHref: "/resources/stainless-steel-guides",
      endcapTitle: "Move from comparison to specification",
      endcapDescription:
        "Once the tradeoff is clear, the next step is to confirm the grade page, open the buying guide, and only then move into inquiry.",
      nextSteps: [
        {
          eyebrow: "Confirm the alloy",
          title: "Review the grade pages",
          description:
            "Use the canonical grade library when you need a cleaner summary of chemistry, form availability, and typical use boundaries.",
          href: "/grades",
          cta: "Compare grades",
        },
        {
          eyebrow: "Pull the reference",
          title: "Open stainless steel guides",
          description:
            "Guides are better when you need equivalents, supply notes, inspection context, and a faster spec reference.",
          href: "/resources/stainless-steel-guides",
          cta: "Browse guides",
        },
        {
          eyebrow: "Still ambiguous",
          title: "Get a technical review",
          description:
            "Use this when chloride level, finish choice, welding, or downstream fabrication makes the decision less obvious than the headline suggests.",
          href: "/contact#technical-review",
          cta: "Ask for review",
        },
      ],
    };
  }

  if (intent === "technical") {
    return {
      intent,
      showFaq,
      relatedTitle:
        category === "processing" ? "More fabrication references" : "More corrosion references",
      ctaHeading: "Need to confirm the process window or service condition?",
      ctaText: "Ask a Technical Question",
      ctaHref: "/contact#technical-review",
      ctaSecondaryText: "Open Stainless Steel Guides",
      ctaSecondaryHref: "/resources/stainless-steel-guides",
      endcapTitle: "Use this technical note in a broader specification path",
      endcapDescription:
        "Articles explain the mechanism. The links below help translate that mechanism into a grade choice, a capability, or a real spec review.",
      nextSteps: [
        {
          eyebrow: "Reference sheet",
          title: "Open the matching guide track",
          description:
            "Useful when you need grade, finish, delivery, or inspection context alongside the technical article.",
          href: "/resources/stainless-steel-guides",
          cta: "Browse guides",
        },
        {
          eyebrow: "Production need",
          title:
            category === "processing"
              ? "See fabrication capabilities"
              : "See applications",
          description:
            category === "processing"
              ? "Move from theory into the actual slitting, coating, packaging, or cut-to-length work you can request."
              : "Map the corrosion problem back to marine, food, chemical, water-treatment, and architectural use cases.",
          href:
            category === "processing"
              ? "/solutions/capabilities"
              : "/solutions/applications",
          cta:
            category === "processing"
              ? "Open capabilities"
              : "Open applications",
        },
        {
          eyebrow: "Need interpretation",
          title: "Discuss the operating conditions",
          description:
            "Best when temperature, chloride, weld procedure, forming depth, or cleaning chemistry changes how the article should be applied.",
          href: "/contact#technical-review",
          cta: "Start the review",
        },
      ],
    };
  }

  return {
    intent,
    showFaq,
    relatedTitle: "More grade fundamentals",
    ctaHeading: "Want to move from theory into actual grades and spec pages?",
    ctaText: "Open the Grade Library",
    ctaHref: "/grades",
    ctaSecondaryText: "Browse Stainless Steel Guides",
    ctaSecondaryHref: "/resources/stainless-steel-guides",
    endcapTitle: "Turn the overview into something spec-ready",
    endcapDescription:
      "The best next step after a foundation article is usually to narrow the alloy family, open the guide archive, and then match it to the real product form.",
    nextSteps: [
      {
        eyebrow: "Choose the alloy",
        title: "Compare the core grades",
        description:
          "Go from definitions into real choices such as 201, 304, 316L, 430, and 2205 before the sourcing conversation begins.",
        href: "/grades",
        cta: "Open grade pages",
      },
      {
        eyebrow: "Pull a reference",
        title: "Use the guide archive",
        description:
          "Guides are the cleaner bridge between education and procurement when you need a concise, reusable technical reference.",
        href: "/resources/stainless-steel-guides",
        cta: "Browse guides",
      },
      {
        eyebrow: "Match the form",
        title: "Check the product forms",
        description:
          "See how the same alloy shows up in sheet, coil, plate, tube, bar, and decorative product forms before you write the RFQ.",
        href: "/products",
        cta: "View products",
      },
    ],
  };
}

