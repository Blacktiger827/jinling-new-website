export type ChinaMarketInsightType = "weekly" | "annual" | "policy";

interface SourceGroup {
  label: string;
  title: string;
  description: string;
}

interface SourcePanelConfig {
  eyebrow: string;
  title: string;
  description: string;
  note: string;
  groups: readonly SourceGroup[];
}

const SOURCE_PANEL_CONFIG: Record<ChinaMarketInsightType, SourcePanelConfig> = {
  weekly: {
    eyebrow: "Source Basis",
    title: "How to Read the Evidence Behind a Weekly China Market Note",
    description:
      "These weekly notes combine spot-market observation with public market signals. They are meant to show what moved, why it moved, and which parts are still interpretation rather than hard settlement data.",
    note:
      "The price lines in these notes should be read as reference market quotations from the Wuxi and Foshan stainless trade context, not as universal contract prices.",
    groups: [
      {
        label: "Market quotes",
        title: "Wuxi and Foshan spot reference levels",
        description:
          "Mainstream 200, 300, and 400 series spot quotes are used as market-reference pricing to show direction and relative movement week to week.",
      },
      {
        label: "Inventory & futures",
        title: "Inventory snapshots, SHFE/LME moves, and freight markers",
        description:
          "When cited, warehouse inventory changes, SHFE or LME nickel/stainless moves, and SCFI-style freight context are used as public market signals around the weekly price move.",
      },
      {
        label: "Mill & policy signals",
        title: "Public mill notices, allocation signals, and policy updates",
        description:
          "Mill opening prices, allocation windows, Indonesia nickel-policy developments, and public trade-policy events are included when they materially affect the week.",
      },
      {
        label: "Editorial reading",
        title: "Buyer takeaway and timing judgement",
        description:
          "The buying implication, spec advice, and timing conclusion are Jinling's market-reading layer rather than a raw data feed.",
      },
    ],
  },
  annual: {
    eyebrow: "Source Basis",
    title: "How to Read the Evidence Behind an Annual China Market Review",
    description:
      "The annual review and outlook notes sit above weekly market noise. They combine public production, trade, and policy signals with Jinling interpretation about what those signals mean for buyers sourcing from China.",
    note:
      "The annual notes mix public statistics, public policy changes, and market observation. The outlook section is intentionally interpretive rather than a formal forecast model.",
    groups: [
      {
        label: "Market ranges",
        title: "Yearly price ranges and mainstream market levels",
        description:
          "Average, high, and low reference levels are used to frame where the China market traded during the year, especially for mainstream grades and forms.",
      },
      {
        label: "Output & trade data",
        title: "Public production, export volume, and value signals",
        description:
          "Crude steel output, export volume and value, and broad trade-balance observations are pulled from public industry and policy reporting where cited in the note.",
      },
      {
        label: "Raw material & macro",
        title: "Nickel, ferroalloy, and macro direction markers",
        description:
          "Nickel, ferronickel, ferrochrome, and macro indicators are used to explain cost floors and external pressure points around the stainless market.",
      },
      {
        label: "Editorial reading",
        title: "Outlook logic and buyer strategy",
        description:
          "The 2026-style direction call and buyer takeaway are Jinling's interpretation of the public signal mix, not a guaranteed price forecast.",
      },
    ],
  },
  policy: {
    eyebrow: "Source Basis",
    title: "How to Read the Evidence Behind a China Policy Note",
    description:
      "Policy notes are anchored more heavily in official announcements and operating consequences than in spot market movement. They explain what changed on paper, then separate that from what we observe in actual export handling.",
    note:
      "These notes are not legal advice. They are operational readings of policy changes for buyers who need to understand documents, shipment timing, and supplier discipline.",
    groups: [
      {
        label: "Official policy",
        title: "MOFCOM, GACC, and published policy text",
        description:
          "The base layer comes from official policy announcements, annexes, tariff-code scope, and other formal regulatory text when the note discusses export control or licensing.",
      },
      {
        label: "Trade context",
        title: "Public export data and policy environment",
        description:
          "Export volume, value trends, and broader trade-friction context are used to explain why the policy matters commercially as well as administratively.",
      },
      {
        label: "Operational observation",
        title: "Exporter workflow and document-sequence observation",
        description:
          "The shipment timing, document-completeness, and traceability implications come from on-the-ground export workflow reading rather than from the policy text alone.",
      },
      {
        label: "Editorial reading",
        title: "Buyer-risk and supplier-screening implication",
        description:
          "The final guidance about what serious buyers should do next is Jinling's interpretation of how the policy changes commercial discipline.",
      },
    ],
  },
};

const INSIGHT_TYPE_LABELS: Record<ChinaMarketInsightType, string> = {
  weekly: "Weekly note",
  annual: "Annual review",
  policy: "Policy note",
};

export function getChinaMarketInsightType(slug: string): ChinaMarketInsightType {
  if (
    slug.includes("market-review") ||
    slug.includes("mid-year-review") ||
    slug.includes("outlook")
  ) {
    return "annual";
  }

  if (
    slug.includes("export-license") ||
    slug.includes("outbreak-all")
  ) {
    return "policy";
  }

  return "weekly";
}

export function getChinaMarketInsightArchiveMeta(slug: string) {
  const type = getChinaMarketInsightType(slug);
  const config = SOURCE_PANEL_CONFIG[type];

  return {
    type,
    typeLabel: INSIGHT_TYPE_LABELS[type],
    sourceBadges: config.groups.map((group) => group.label),
    sourceSummary: config.note,
  };
}

export function ChinaMarketSourcesPanel({
  type,
}: {
  type: ChinaMarketInsightType;
}) {
  const config = SOURCE_PANEL_CONFIG[type];

  return (
    <section className="rounded-card-lg border border-border bg-gradient-to-br from-[#f5f1e8] via-white to-[#ebe3d5] p-6 shadow-sm shadow-brand-dark/5 sm:p-8">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
          {config.eyebrow}
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-brand-dark sm:text-3xl">
          {config.title}
        </h2>
        <p className="mt-3 text-base leading-7 text-text-secondary">
          {config.description}
        </p>
      </div>

      <div className="mt-8 divide-y divide-cream-border rounded-card-md border border-cream-border bg-white/78">
        {config.groups.map((group) => (
          <div
            key={group.title}
            className="grid gap-2 px-5 py-4 md:grid-cols-[11rem_minmax(0,1fr)] md:gap-6"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-light">
              {group.label}
            </p>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-brand-dark">
                {group.title}
              </h3>
              <p className="mt-1 text-sm leading-6 text-text-secondary">
                {group.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-card-md border border-brand-accent/15 bg-brand-accent/8 px-5 py-4">
        <p className="text-sm leading-7 text-text-secondary">{config.note}</p>
      </div>
    </section>
  );
}
