export interface DatasheetEntry {
  slug: string;
  contentSlug: string;
  label: string;
  family: string;
  summary: string;
  referenceHref: string;
}

export const DATASHEET_ENTRIES: readonly DatasheetEntry[] = [
  {
    slug: "8k-mirror-finish",
    contentSlug: "datasheet-8k-mirror-finish",
    label: "8K Mirror Finish",
    family: "Surface",
    summary:
      "Mirror release reference for Ra and gloss targets, substrate choice, film, and visual acceptance.",
    referenceHref: "/surfaces/stainless-steel-8k-mirror-finish",
  },
  {
    slug: "afp-finish",
    contentSlug: "datasheet-afp-finish",
    label: "AFP Finish",
    family: "Surface",
    summary:
      "Anti-fingerprint reference for coating stack, base finish, touch zones, and sample approval.",
    referenceHref: "/surfaces/stainless-steel-afp-finish",
  },
  {
    slug: "no4-brushed-finish",
    contentSlug: "datasheet-no4-brushed-finish",
    label: "No.4 Brushed Finish",
    family: "Surface",
    summary:
      "Practical satin reference for roughness window, grain direction, film, and equipment-facing use.",
    referenceHref: "/surfaces/stainless-steel-no4-brushed-finish",
  },
  {
    slug: "hairline-finish",
    contentSlug: "datasheet-hairline-finish",
    label: "Hairline Finish",
    family: "Surface",
    summary:
      "Long-grain reference for direction, lot continuity, substrate choice, and installation handling.",
    referenceHref: "/surfaces/stainless-steel-hairline-finish",
  },
  {
    slug: "ba-finish",
    contentSlug: "datasheet-ba-finish",
    label: "BA Finish",
    family: "Surface",
    summary:
      "Bright-annealed reference for mill reflectivity, handling limits, and when BA should become mirror.",
    referenceHref: "/surfaces/stainless-steel-ba-finish",
  },
  {
    slug: "304-304l",
    contentSlug: "datasheet-304-304L",
    label: "304 / 304L",
    family: "Austenitic",
    summary: "Baseline austenitic reference for mild service, welding choice, and the first chloride warning.",
    referenceHref: "/grades/304-stainless-steel",
  },
  {
    slug: "316-316l",
    contentSlug: "datasheet-316-316L",
    label: "316 / 316L",
    family: "Austenitic",
    summary: "Mo-bearing upgrade reference for coastal, hygienic, and mild chemical service.",
    referenceHref: "/grades/316l-stainless-steel",
  },
  {
    slug: "2205-duplex",
    contentSlug: "datasheet-2205-duplex",
    label: "2205 Duplex",
    family: "Duplex",
    summary: "Duplex reference for chloride plus stress, strength, and controlled weld release.",
    referenceHref: "/grades/2205-duplex-stainless-steel",
  },
  {
    slug: "430",
    contentSlug: "datasheet-430",
    label: "430",
    family: "Ferritic",
    summary: "Ferritic indoor reference for magnetic value work, appliances, and dry panels.",
    referenceHref: "/grades/430-stainless-steel",
  },
  {
    slug: "201",
    contentSlug: "datasheet-201",
    label: "201",
    family: "Austenitic",
    summary: "Cost-sensitive indoor reference for decorative work that stays dry and controlled.",
    referenceHref: "/grades/201-stainless-steel",
  },
] as const;

export const DATASHEET_ROUTE_BY_GRADE_SLUG: Record<string, string> = {
  "304-stainless-steel": "304-304l",
  "316l-stainless-steel": "316-316l",
  "430-stainless-steel": "430",
  "201-stainless-steel": "201",
  "2205-duplex-stainless-steel": "2205-duplex",
};

export function getDatasheetHref(slug: string) {
  return `/datasheets/${slug}`;
}

export function getDatasheetEntry(slug: string) {
  return DATASHEET_ENTRIES.find((entry) => entry.slug === slug);
}

export function getDatasheetEntryByGradeSlug(gradeSlug: string) {
  const datasheetSlug = DATASHEET_ROUTE_BY_GRADE_SLUG[gradeSlug];
  return datasheetSlug ? getDatasheetEntry(datasheetSlug) : undefined;
}
