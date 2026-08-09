import type { ReactNode } from "react";

export const guideCoverBySlug: Record<string, string> = {
  "304-vs-316-stainless-steel":
    "/images/resources/guide-cover-grade-application.jpg",
  "201-vs-304-stainless-steel":
    "/images/resources/guide-cover-grade-application.jpg",
  "2b-vs-ba-surface-finish":
    "/images/resources/guide-cover-surface-fabrication.jpg",
  "no4-vs-hairline-finish":
    "/images/resources/guide-cover-surface-fabrication.jpg",
  "how-to-read-mill-test-certificate":
    "/images/resources/guide-cover-standards-buying.jpeg",
  "stainless-steel-samples-mtc-certificate-of-origin":
    "/images/resources/guide-cover-standards-buying.jpeg",
};

export const guideCoverImageClassBySlug: Record<string, string> = {
  "how-to-read-mill-test-certificate":
    "scale-[1.18] object-cover object-[center_38%] transition duration-500 group-hover:scale-[1.21]",
  "stainless-steel-samples-mtc-certificate-of-origin":
    "scale-[1.18] object-cover object-[center_38%] transition duration-500 group-hover:scale-[1.21]",
};

export function getGuidePosterTitle(slug: string, title: string): ReactNode {
  if (slug === "304-vs-316-stainless-steel") {
    return (
      <>
        <span className="block">304 vs 316 Stainless Steel</span>
        <span className="mt-2 block text-[0.78em]">
          Which Grade Should I Use?
        </span>
      </>
    );
  }

  if (slug === "201-vs-304-stainless-steel") {
    return (
      <>
        <span className="block">201 vs 304 Stainless Steel</span>
        <span className="mt-2 block text-[0.78em]">
          Can I Substitute One for the Other?
        </span>
      </>
    );
  }

  if (slug === "2b-vs-ba-surface-finish") {
    return (
      <>
        <span className="block">2B vs BA Stainless Steel Finish</span>
        <span className="mt-2 block text-[0.78em]">
          Which Mill Finish to Choose
        </span>
      </>
    );
  }

  if (slug === "no4-vs-hairline-finish") {
    return (
      <>
        <span className="block">No.4 or Hairline</span>
        <span className="mt-2 block text-[0.78em]">
          Which Brushed Finish Will Age Better?
        </span>
      </>
    );
  }

  if (slug === "how-to-read-mill-test-certificate") {
    return (
      <>
        <span className="block">How to Read</span>
        <span className="mt-2 block text-[0.86em]">
          a Mill Test Certificate (MTC)
        </span>
        <span className="mt-2 block text-[0.72em]">
          Practical Release Guide
        </span>
      </>
    );
  }

  if (slug === "stainless-steel-samples-mtc-certificate-of-origin") {
    return (
      <>
        <span className="block">What Can You Really Check</span>
        <span className="mt-2 block text-[0.78em]">
          Before a Stainless Order?
        </span>
      </>
    );
  }

  return title;
}

export function getGuidePosterSlugFromHref(href: string) {
  return href.split("/").filter(Boolean).pop() || "";
}
