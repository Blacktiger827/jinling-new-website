export const STAINLESS_STEEL_GUIDES_PER_PAGE = 5;

export const stainlessSteelGuideCategorySections = [
  {
    id: "grade-application",
    href: "/resources/stainless-steel-guides/grade-application",
    navLabel: "Grade & Application Guides",
    buttonLabel: "Grade Guides",
    label: "Stainless Steel Grade & Application Guides",
    eyebrow: "Grade and application decisions",
    title: "Stainless Steel Grade & Application Guides",
    description:
      "Start here when the decision depends on grade family, service environment, corrosion exposure, or where the stainless steel will be used.",
    articleSlugs: [
      "304-vs-316-stainless-steel",
      "201-vs-304-stainless-steel",
    ],
  },
  {
    id: "surface-fabrication",
    href: "/resources/stainless-steel-guides/surface-fabrication",
    navLabel: "Finish & Fabrication Guides",
    buttonLabel: "Finish Guides",
    label: "Surface Finish & Fabrication Guides",
    eyebrow: "Finish and processing routes",
    title: "Surface Finish & Fabrication Guides",
    description:
      "Use these guides when surface appearance, protective film, welding, bending, cutting, forming, or post-processing risk matters.",
    articleSlugs: [
      "2b-vs-ba-surface-finish",
      "no4-vs-hairline-finish",
    ],
  },
  {
    id: "standards-buying",
    href: "/resources/stainless-steel-guides/standards-buying",
    navLabel: "Standards & Buying Guides",
    buttonLabel: "Buying Guides",
    label: "Standards, Inspection & Buying Guides",
    eyebrow: "Proof before purchase and release",
    title: "Standards, Inspection & Buying Guides",
    description:
      "Review standards, tolerances, MTCs, inspection routes, export documents, supplier checks, and buying controls before an order is released.",
    articleSlugs: [
      "how-to-read-mill-test-certificate",
      "stainless-steel-samples-mtc-certificate-of-origin",
    ],
  },
] as const;

export const featuredGuideSlugs = stainlessSteelGuideCategorySections.flatMap(
  (section) => section.articleSlugs
);

export const allStainlessSteelGuidesCategory = {
  id: "all-guides",
  href: "/resources/stainless-steel-guides/all-guides",
  navLabel: "Browse All Guides",
  buttonLabel: "Guides",
  label: "Browse All Guides",
  eyebrow: "Browse All Guides",
  title: "Featured Stainless Steel Guide Articles",
  description:
    "Browse practical stainless steel guide articles for grade comparison, surface finish selection, fabrication questions, MTC review, sample checks, certificate of origin support, and export buying decisions.",
  articleSlugs: featuredGuideSlugs,
} as const;

export type StainlessSteelGuideCategoryId =
  (typeof stainlessSteelGuideCategorySections)[number]["id"];

export function getStainlessSteelGuideCategoryById(categoryId: string) {
  return stainlessSteelGuideCategorySections.find(
    (category) => category.id === categoryId
  );
}

export function getStainlessSteelGuidePageCategoryById(categoryId: string) {
  if (categoryId === allStainlessSteelGuidesCategory.id) {
    return allStainlessSteelGuidesCategory;
  }

  return getStainlessSteelGuideCategoryById(categoryId);
}
