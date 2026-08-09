import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/content/ContentPage";
import { getContent } from "@/lib/content";
import {
  DATASHEET_ENTRIES,
  getDatasheetEntry,
  getDatasheetHref,
} from "@/lib/datasheets";
import { buildArticleSchema } from "@/lib/structured-data";

interface Props {
  params: Promise<{ slug: string }>;
}

const relatedBySlug: Record<string, Array<{ name: string; href: string }>> = {
  "201": [
    { name: "201 vs 304 Stainless Steel", href: "/knowledge-base/201-vs-304-stainless-steel" },
    { name: "How to Identify Real 304", href: "/knowledge-base/how-to-identify-real-304-stainless-steel" },
    { name: "304 / 304L Datasheet", href: "/datasheets/304-304l" },
  ],
  "304-304l": [
    { name: "304 vs 316 Stainless Steel", href: "/knowledge-base/304-vs-316-stainless-steel" },
    { name: "304 vs 304L vs 304H", href: "/knowledge-base/304-vs-304l-vs-304h" },
    { name: "316 / 316L Datasheet", href: "/datasheets/316-316l" },
  ],
  "316-316l": [
    { name: "304 vs 316 Stainless Steel", href: "/knowledge-base/304-vs-316-stainless-steel" },
    { name: "Duplex vs Austenitic Stainless", href: "/knowledge-base/duplex-vs-austenitic-stainless-steel" },
    { name: "2205 Duplex Datasheet", href: "/datasheets/2205-duplex" },
  ],
  "430": [
    { name: "304 or 430 for Mirror Panels?", href: "/knowledge-base/304-vs-430-mirror-panels" },
    { name: "304 vs 430 Kitchen Equipment", href: "/knowledge-base/304-vs-430-kitchen-equipment" },
    { name: "304 / 304L Datasheet", href: "/datasheets/304-304l" },
  ],
  "2205-duplex": [
    { name: "Duplex vs Austenitic Stainless", href: "/knowledge-base/duplex-vs-austenitic-stainless-steel" },
    { name: "2205 Duplex Chemical Composition", href: "/knowledge-base/2205-duplex-chemical-composition" },
    { name: "316 / 316L Datasheet", href: "/datasheets/316-316l" },
  ],
  "8k-mirror-finish": [
    { name: "Mirror Acceptance: Haze, Gloss, Pinhole", href: "/knowledge-base/mirror-finish-acceptance-haze-gloss-pinhole" },
    { name: "Mirror Packaging and Scratch Prevention", href: "/knowledge-base/mirror-finish-packaging-scratch-prevention" },
    { name: "AFP Finish Datasheet", href: "/datasheets/afp-finish" },
  ],
  "afp-finish": [
    { name: "AFP Over Mirror: When It Is Worth It", href: "/knowledge-base/afp-over-mirror-when-worth-it" },
    { name: "AFP Lot-to-Lot Colour Consistency", href: "/knowledge-base/delta-e-2-what-afp-lot-to-lot-colour-consistency-means" },
    { name: "8K Mirror Datasheet", href: "/datasheets/8k-mirror-finish" },
  ],
  "no4-brushed-finish": [
    { name: "No.4 vs Hairline Finish", href: "/knowledge-base/no4-vs-hairline-finish" },
    { name: "2B vs No.4 vs AFP for Kitchen Equipment", href: "/knowledge-base/2b-vs-no4-vs-afp-kitchen-equipment" },
    { name: "AFP Finish Datasheet", href: "/datasheets/afp-finish" },
  ],
  "hairline-finish": [
    { name: "No.4 vs Hairline Finish", href: "/knowledge-base/no4-vs-hairline-finish" },
    { name: "Architectural Surface Selection", href: "/knowledge-base/architectural-ss-surface-selection" },
    { name: "No.4 Brushed Datasheet", href: "/datasheets/no4-brushed-finish" },
  ],
  "ba-finish": [
    { name: "2B vs BA Surface Finish", href: "/knowledge-base/2b-vs-ba-surface-finish" },
    { name: "8K Mirror Datasheet", href: "/datasheets/8k-mirror-finish" },
    { name: "AFP Finish Datasheet", href: "/datasheets/afp-finish" },
  ],
};

function DatasheetReleaseCue({ family }: { family: string }) {
  const isSurface = family === "Surface";
  const cues = isSurface
    ? [
        {
          label: "Start with substrate",
          text: "A finish datasheet is useful only after the grade, face side, and service exposure are honest.",
        },
        {
          label: "Lock the sample",
          text: "Gloss, grain, tone, haze, and touch feel should be settled before bulk release.",
        },
        {
          label: "Keep film attached",
          text: "Protective film, packing, and receiving light are part of the finish route.",
        },
      ]
    : [
        {
          label: "Start with service",
          text: "The grade line should follow exposure, welding, cleaning, and corrosion margin.",
        },
        {
          label: "Read the MTC",
          text: "UNS or EN name, heat chemistry, and mechanical line should agree before release.",
        },
        {
          label: "Name the trigger",
          text: "Chloride, wet cleaning, heat, stress, or cost pressure tells you when to move up or down.",
        },
      ];

  return (
    <section className="grid gap-3 rounded-card-md border border-[#d8cbb8] bg-[#fbf8f0] p-3 shadow-[0_18px_44px_rgba(13,20,27,0.055)] sm:grid-cols-3 sm:p-4">
      {cues.map((cue) => (
        <div key={cue.label} className="rounded-card-sm bg-white/78 p-4">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#8a6b32]">
            {cue.label}
          </p>
          <p className="mt-2 text-sm leading-6 text-[#5d554b]">{cue.text}</p>
        </div>
      ))}
    </section>
  );
}

export async function generateStaticParams() {
  return DATASHEET_ENTRIES.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getDatasheetEntry(slug);
  if (!entry) return {};

  const content = await getContent("datasheets", entry.contentSlug);
  if (!content) return {};

  return {
    title: `${entry.label} Datasheet | Jinling Steel`,
    description: content.description,
    alternates: {
      canonical: `/datasheets/${slug}`,
    },
  };
}

export default async function DatasheetDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = getDatasheetEntry(slug);
  if (!entry) notFound();

  const content = await getContent("datasheets", entry.contentSlug);
  if (!content) notFound();

  const relatedItems =
    relatedBySlug[entry.slug] ??
    DATASHEET_ENTRIES.filter((datasheet) => datasheet.slug !== entry.slug)
      .slice(0, 3)
      .map((datasheet) => ({
        name: `${datasheet.label} Datasheet`,
        href: getDatasheetHref(datasheet.slug),
      }));
  const secondaryCtaText =
    entry.family === "Surface" ? "Open finish page" : "Open grade page";

  return (
    <ContentPage
      title={content.title}
      description={content.description}
      htmlContent={content.htmlContent}
      variant="datasheet"
      pageUrl={`/datasheets/${slug}`}
      structuredData={[
        buildArticleSchema({
          title: content.title,
          description: content.description,
          pageUrl: `/datasheets/${slug}`,
          type: "TechArticle",
          author: content.author,
          reviewedBy: content.reviewedBy,
          publishedAt: content.publishedAt,
        }),
      ]}
      heroStats={content.heroStats}
      heroEyebrow={
        <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-[#d8cbb8] bg-white/72 px-4 py-2 text-[0.78rem] font-semibold text-[#5d554b] shadow-[0_12px_28px_rgba(13,20,27,0.055)] backdrop-blur-sm">
          <span className="uppercase tracking-[0.2em] text-[#8a6b32]">
            Jinling datasheet
          </span>
          <span className="h-1 w-1 rounded-full bg-[#c7ad72]" />
          <span>{entry.label}</span>
          <span className="h-1 w-1 rounded-full bg-[#c7ad72]" />
          <span>{entry.family}</span>
        </div>
      }
      breadcrumbs={[
        { label: "Datasheets", href: "/datasheets" },
        { label: `${entry.label} Datasheet` },
      ]}
      relatedItems={relatedItems}
      relatedTitle="Useful Next Checks"
      ctaHeading={`Need to release ${entry.label} into a quote or PO?`}
      ctaText="Ask for Spec Review"
      ctaHref="/contact#technical-review"
      ctaSecondaryText={secondaryCtaText}
      ctaSecondaryHref={entry.referenceHref}
      beforeArticleContent={<DatasheetReleaseCue family={entry.family} />}
      author={content.author}
      reviewedBy={content.reviewedBy}
      publishedAt={content.publishedAt}
    />
  );
}
