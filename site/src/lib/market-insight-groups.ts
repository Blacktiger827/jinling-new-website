export const latestMarketReportSlugs = [
  "china-stainless-steel-prices-inventory-update-july-6-10-2026",
  "china-stainless-steel-prices-inventory-update-june-15-18-2026",
  "china-stainless-steel-prices-inventory-update-may-25-29-2026",
  "china-stainless-steel-prices-inventory-update-may-11-15-2026",
  "china-stainless-steel-prices-inventory-update-apr-20-24-2026",
] as const;

export const priceInventoryReportSlugs = [
  "china-stainless-steel-prices-inventory-update-june-15-18-2026",
  "china-stainless-steel-prices-inventory-update-may-25-29-2026",
  "china-stainless-steel-prices-inventory-update-may-11-15-2026",
  "china-stainless-steel-prices-inventory-update-apr-20-24-2026",
  "stainless-steel-prices-inventory-insights-in-china-from-mar-9th-to-mar-22nd-2026",
  "stainless-steel-prices-inventory-insights-in-china-from-jan-26th-to-feb-6th-2026",
  "stainless-steel-prices-inventory-insights-in-china-from-jan-12th-to-jan-25th-2026",
  "stainless-steel-prices-inventory-insights-in-china-from-nov-24th-to-dec-7th-2025",
  "stainless-steel-prices-inventory-insights-in-china-from-sep-29th-to-oct-12th-2025",
  "stainless-steel-prices-inventory-insights-in-china-from-15th-to-28th-sep-2025",
  "stainless-steel-prices-inventory-insights-in-china-from-25-to-29-aug-2025",
] as const;

export const policyExportNewsReportSlugs = [
  "outbreak-all-stainless-steel-products-exports-are-required-export-license-in-china-jan-2026",
] as const;

export const marketReviewOutlookReportSlugs = [
  "stainless-steel-prices-inventory-insights-in-china-2025-market-review-2026-outlook",
  "stainless-insights-in-china-mid-year-review-of-the-stainless-steel-market-in-2025",
] as const;

export const customMarketInsightHeroSlugs = [
  ...latestMarketReportSlugs,
  ...priceInventoryReportSlugs,
  ...policyExportNewsReportSlugs,
  ...marketReviewOutlookReportSlugs,
] as const;
