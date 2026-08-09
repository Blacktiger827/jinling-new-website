import Link from "next/link";
import type { Metadata } from "next";
import { ResourceProofRail } from "@/components/content/ResourceProofRail";
import {
  DATASHEET_ENTRIES,
  getDatasheetHref,
  type DatasheetEntry,
} from "@/lib/datasheets";

export const metadata: Metadata = {
  title: "Stainless Steel Datasheets | Grades and Finishes",
  description:
    "Compact stainless steel grade and finish datasheets for PO review, MTC checks, finish release, and technical approval.",
  alternates: {
    canonical: "/datasheets",
  },
};

const finishEntries = DATASHEET_ENTRIES.filter((entry) => entry.family === "Surface");
const gradeEntries = DATASHEET_ENTRIES.filter((entry) => entry.family !== "Surface");

const featuredGradeSlugs = new Set(["304-304l", "316-316l", "2205-duplex"]);
const featuredFinishSlugs = new Set(["8k-mirror-finish", "afp-finish"]);

const featuredGrades = gradeEntries.filter((entry) => featuredGradeSlugs.has(entry.slug));
const valueGrades = gradeEntries.filter((entry) => !featuredGradeSlugs.has(entry.slug));
const featuredFinishes = finishEntries.filter((entry) => featuredFinishSlugs.has(entry.slug));
const supportingFinishes = finishEntries.filter((entry) => !featuredFinishSlugs.has(entry.slug));

const datasheetProofSignals = [
  {
    label: "Release proof",
    text: "Chemistry, finish, film, certificate, and packing words.",
  },
  {
    label: "Use after choice",
    text: "Best when the grade or finish family is mostly settled.",
  },
  {
    label: "Stop point",
    text: "Ask review when service condition and datasheet disagree.",
  },
] as const;

function DatasheetCard({
  entry,
  size = "standard",
}: {
  entry: DatasheetEntry;
  size?: "featured" | "standard" | "compact";
}) {
  const isFeatured = size === "featured";
  const isCompact = size === "compact";
  const badgeLabel = isFeatured
    ? "Primary check"
    : isCompact
      ? "Boundary check"
      : "Quick ref";

  return (
    <Link
      href={getDatasheetHref(entry.slug)}
      className={[
        "group flex h-full flex-col rounded-card-md border bg-white transition duration-300 hover:-translate-y-0.5 hover:border-brand-accent/55",
        isFeatured
          ? "border-cream-border p-6 shadow-[0_22px_60px_rgba(15,23,42,0.08)]"
          : "border-cream-border-soft p-5 shadow-[0_16px_42px_rgba(15,23,42,0.045)]",
        isCompact ? "min-h-[13rem]" : "",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-brand-accent">
          {entry.family}
        </p>
        <span className="rounded-full border border-cream-border-soft bg-cream-50 px-3 py-1 text-[0.78rem] font-semibold text-text-light">
          {badgeLabel}
        </span>
      </div>
      <h3
        className={
          isFeatured
            ? "mt-5 text-2xl font-semibold leading-tight text-brand-dark"
            : "mt-4 text-xl font-semibold leading-tight text-brand-dark"
        }
      >
        {entry.label}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-text-secondary">
        {entry.summary}
      </p>
      <span className="mt-6 inline-flex w-fit items-center border-b border-brand-accent/35 pb-1 text-sm font-semibold text-brand-dark transition group-hover:border-brand-accent group-hover:text-brand-accent">
        Open datasheet
      </span>
    </Link>
  );
}

function DatasheetPacketCard() {
  return (
    <div className="rounded-[1.6rem] border border-[#d8cbb8] bg-white/72 p-4 shadow-[0_24px_70px_rgba(13,20,27,0.09)] backdrop-blur-sm">
      <div className="rounded-[1.2rem] border border-[#e5d9c7] bg-[#fbf8f0] p-5">
        <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#8a6b32]">
          Release Packet
        </p>
        <p className="mt-3 text-xl font-semibold leading-tight text-brand-dark">
          A datasheet should close the last doubt, not reopen the whole project.
        </p>
        <div className="mt-6 space-y-3">
          {[
            ["MTC line", "Grade name, UNS / EN, heat chemistry, and mechanical result."],
            ["Visible face", "Finish sample, film, packing, and receiving-light condition."],
            ["PO words", "The few words that must survive from quote to shipment."],
          ].map(([label, text]) => (
            <div
              key={label}
              className="rounded-card-sm border border-[#e2d6c4] bg-white px-4 py-3"
            >
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-[#8a6b32]">
                {label}
              </p>
              <p className="mt-1.5 text-sm leading-6 text-[#5d554b]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function DatasheetsPage() {
  return (
    <div className="bg-cream-200">
      <section className="relative overflow-hidden border-b border-[#d8cbb8] bg-[radial-gradient(circle_at_12%_18%,rgba(246,208,68,0.2),transparent_25%),radial-gradient(circle_at_86%_12%,rgba(13,20,27,0.08),transparent_24%),linear-gradient(180deg,#fbf8f0_0%,#eee4d4_100%)] text-brand-dark">
        <div className="absolute right-[-7rem] top-[-7rem] h-72 w-72 rounded-full border border-brand-accent/20" />
        <div className="absolute left-8 top-12 h-36 w-36 rounded-full border border-[#d8cbb8]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(22rem,0.72fr)] lg:items-end lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#8a6b32]">
              Datasheet Release Desk
            </p>
            <h1
              className="mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl"
              style={{
                fontFamily:
                  '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
              }}
            >
              The short reference before a grade or finish gets released.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#5d554b] sm:text-lg">
              Use these pages when the choice is mostly made, but the order still
              needs the right chemistry, surface, film, sample, and certificate
              language.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#grade-library"
                className="inline-flex items-center rounded-full bg-brand-dark px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#18222d]"
              >
                Grade datasheets
              </Link>
              <Link
                href="#finish-library"
                className="inline-flex items-center rounded-full border border-[#d8cbb8] bg-white/70 px-5 py-3 text-sm font-semibold text-brand-dark transition-colors hover:border-brand-accent hover:text-brand-accent"
              >
                Finish datasheets
              </Link>
            </div>
            <ResourceProofRail signals={datasheetProofSignals} />
          </div>
          <DatasheetPacketCard />
        </div>
      </section>

      <section className="border-b border-cream-border bg-white/72">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <header>
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand-accent">
                How To Use
              </p>
              <h2
                className="mt-3 text-3xl text-brand-dark sm:text-4xl"
                style={{
                  fontFamily:
                    '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
                }}
              >
                Pick the smallest reference that can settle the next question.
              </h2>
            </header>
            <p className="text-base leading-8 text-text-secondary">
              Datasheets should not replace judgement. They should make the last
              judgement cleaner: grade boundary, finish target, inspection note,
              and the few words that belong on the PO.
            </p>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {[
              "Use after the grade or finish family is mostly chosen.",
              "Check ordering words before the PO hardens.",
              "Ask for review when service condition and datasheet disagree.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-card-md border border-cream-border bg-cream-50 px-4 py-3 text-sm font-semibold leading-6 text-brand-dark"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="grade-library"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <header className="max-w-3xl">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand-accent">
            Grade References
          </p>
          <h2
            className="mt-3 text-3xl text-brand-dark sm:text-4xl"
            style={{
              fontFamily:
                '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
            }}
          >
            Use the grade that carries the service risk.
          </h2>
        </header>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredGrades.map((entry) => (
            <DatasheetCard key={entry.slug} entry={entry} size="featured" />
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {valueGrades.map((entry) => (
            <DatasheetCard key={entry.slug} entry={entry} size="compact" />
          ))}
        </div>
      </section>

      <section id="finish-library" className="bg-cream-300">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <header className="max-w-3xl">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-brand-accent">
              Finish References
            </p>
            <h2
              className="mt-3 text-3xl text-brand-dark sm:text-4xl"
              style={{
                fontFamily:
                  '"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, serif',
              }}
            >
              Release the visible face before it becomes a complaint.
            </h2>
          </header>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {featuredFinishes.map((entry) => (
              <DatasheetCard key={entry.slug} entry={entry} size="featured" />
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {supportingFinishes.map((entry) => (
              <DatasheetCard key={entry.slug} entry={entry} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-cream-border-soft bg-cream-100">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-base leading-7 text-text-secondary sm:text-[1.05rem]">
              If the datasheet and the service condition disagree, stop and ask
              before the PO hardens.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              <Link href="/grades" className="text-brand-dark transition-colors hover:text-brand-accent">
                Grades
              </Link>
              <Link href="/surfaces" className="text-brand-dark transition-colors hover:text-brand-accent">
                Surfaces
              </Link>
              <Link href="/resources/stainless-steel-guides?track=quality#archive" className="text-brand-dark transition-colors hover:text-brand-accent">
                Specs &amp; Verification
              </Link>
              <Link href="/contact#technical-review" className="text-brand-dark transition-colors hover:text-brand-accent">
                Technical Review
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

