import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [390, 640, 768, 1024, 1280, 1600, 1920],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async redirects() {
    return [
      // ===== High-value legacy URLs supplied in the final SEO mapping =====
      { source: "/product/cold-rolled-stainless-steel-coil.html", destination: "/products/stainless-steel-coil", permanent: true },
      { source: "/page/about-us.html", destination: "/about", permanent: true },
      { source: "/page/contact-us.html", destination: "/contact", permanent: true },
      { source: "/article/outbreak-all-stainless-steel-products-exports-are-required-export-license-in-china-jan-2026.html", destination: "/insights/outbreak-all-stainless-steel-products-exports-are-required-export-license-in-china-jan-2026", permanent: true },
      { source: "/article/stainless-steel-prices-inventory-insights-in-china-from-may-11th-to-may-15th-2026.html", destination: "/insights/china-stainless-steel-prices-inventory-update-may-11-15-2026", permanent: true },
      { source: "/article/stainless-steel-prices-inventory-insights-in-china-from-apr-20th-to-apr-24th-2026.html", destination: "/insights/china-stainless-steel-prices-inventory-update-apr-20-24-2026", permanent: true },
      { source: "/articles/insights.html", destination: "/resources/market-insights", permanent: true },
      { source: "/article/stainless-steel-prices-inventory-insights-in-china-2025-market-review-2026-outlook.html", destination: "/insights/stainless-steel-prices-inventory-insights-in-china-2025-market-review-2026-outlook", permanent: true },
      { source: "/article/stainless-insights-in-china-rising-raw-material-costs-drive-up-stainless-steel-prices.html", destination: "/insights/stainless-steel-prices-inventory-insights-in-china-from-25-to-29-aug-2025", permanent: true },
      { source: "/article/stainless-steel-prices-inventory-insights-in-china-from-june-15th-to-18th-2026.html", destination: "/insights/china-stainless-steel-prices-inventory-update-june-15-18-2026", permanent: true },
      { source: "/articles/weekly.html", destination: "/resources/market-insights/latest-market-updates", permanent: true },
      { source: "/article/stainless-steel-prices-inventory-insights-in-china-from-15th-to-28th-sep-2025.html", destination: "/insights/stainless-steel-prices-inventory-insights-in-china-from-15th-to-28th-sep-2025", permanent: true },
      { source: "/article/stainless-steel-prices-inventory-insights-in-china-from-mar-9th-to-mar-22nd-2026.html", destination: "/insights/stainless-steel-prices-inventory-insights-in-china-from-mar-9th-to-mar-22nd-2026", permanent: true },
      { source: "/article/stainless-steel-prices-inventory--insights-in-china-from-jan-26th-to-feb-6th-2026.html", destination: "/insights/stainless-steel-prices-inventory-insights-in-china-from-jan-26th-to-feb-6th-2026", permanent: true },
      { source: "/article/stainless-insights-in-china-mid-year-review-of-the-stainless-steel-market-in-2025.html", destination: "/insights/stainless-insights-in-china-mid-year-review-of-the-stainless-steel-market-in-2025", permanent: true },
      { source: "/article/stainless-steel-prices-inventory-insights-in-china-from-may-25th-to-may-29th-2026.html", destination: "/insights/china-stainless-steel-prices-inventory-update-may-25-29-2026", permanent: true },
      { source: "/article/stainless-steel-prices-inventory-insights-in-china-from-nov-24th-to-dec-7th-2025.html", destination: "/insights/stainless-steel-prices-inventory-insights-in-china-from-nov-24th-to-dec-7th-2025", permanent: true },
      { source: "/article/stainless-steel-prices-inventory-insights-in-china-from-sep-29th-to-oct-12th-2025.html", destination: "/insights/stainless-steel-prices-inventory-insights-in-china-from-sep-29th-to-oct-12th-2025", permanent: true },
      { source: "/article/stainless-steel-prices-inventory-insights-in-china-from-jan-12th-to-jan-25th-2026.html", destination: "/insights/stainless-steel-prices-inventory-insights-in-china-from-jan-12th-to-jan-25th-2026", permanent: true },

      // ===== Existing structural redirects =====
      { source: "/products/industrial-pipe", destination: "/products/stainless-steel-industrial-pipe", permanent: true },
      { source: "/products/sheet", destination: "/products/stainless-steel-sheet", permanent: true },
      { source: "/products/coil", destination: "/products/stainless-steel-coil", permanent: true },
      { source: "/products/sanitary-tube", destination: "/products/stainless-steel-sanitary-tube", permanent: true },
      { source: "/products/strip", destination: "/solutions/capabilities/slitting-edging", permanent: true },
      { source: "/products/stainless-steel-strip", destination: "/solutions/capabilities/slitting-edging", permanent: true },
      { source: "/products/precision-foil", destination: "/solutions/capabilities/slitting-edging", permanent: true },

      { source: "/applications/marine", destination: "/knowledge-base/stainless-steel-for-marine-offshore", permanent: true },
      { source: "/applications/medical-devices", destination: "/solutions/applications/medical-pharmaceutical", permanent: true },
      { source: "/application/:slug", destination: "/solutions/applications/:slug", permanent: true },
      { source: "/applications/:slug", destination: "/solutions/applications/:slug", permanent: true },

      { source: "/capabilities/:slug", destination: "/solutions/capabilities/:slug", permanent: true },

      { source: "/finishes/no4-brushed", destination: "/surfaces/stainless-steel-no4-brushed-finish", permanent: true },
      { source: "/finishes/2b-finish", destination: "/surfaces/stainless-steel-2b-finish", permanent: true },
      { source: "/finishes/2b", destination: "/surfaces/stainless-steel-2b-finish", permanent: true },
      { source: "/finishes/afp", destination: "/surfaces/stainless-steel-afp-finish", permanent: true },
      { source: "/finishes/ba-bright-annealed", destination: "/knowledge-base/2b-vs-ba-surface-finish", permanent: true },
      { source: "/surfaces/anti-fingerprint-finish", destination: "/surfaces/stainless-steel-afp-finish", permanent: true },
      { source: "/surfaces/stainless-steel-mirror-finish", destination: "/surfaces/stainless-steel-8k-mirror-finish", permanent: true },
      { source: "/surfaces/stainless-steel-pvd-coating", destination: "/knowledge-base/pvd-colored-stainless-steel", permanent: true },
      { source: "/surfaces/ba-2b-finish", destination: "/knowledge-base/2b-vs-ba-surface-finish", permanent: true },
      { source: "/surfaces/surface-finish-guide", destination: "/surfaces", permanent: true },

      { source: "/blog/:slug", destination: "/knowledge-base/:slug", permanent: true },
      { source: "/knowledge-base", destination: "/resources/stainless-steel-guides", permanent: true },
      { source: "/knowledge-base/how-to-read-mtc", destination: "/knowledge-base/how-to-read-mill-test-certificate", permanent: true },
      // duplex-stainless-steel-welding previously pointed to duplex-welding-phase-balance (now retired); rerouted:
      { source: "/knowledge-base/duplex-stainless-steel-welding", destination: "/knowledge-base/duplex-vs-austenitic-stainless-steel", permanent: true },
      { source: "/knowledge-base/thickness-tolerance-stainless-steel", destination: "/knowledge-base/stainless-steel-thickness-tolerance-standards", permanent: true },
      { source: "/knowledge-base/quality-complaint-stainless-steel", destination: "/knowledge-base/how-to-file-quality-complaint-stainless-steel", permanent: true },
      { source: "/knowledge-base/chloride-scc-stainless-steel", destination: "/knowledge-base/stress-corrosion-cracking-scc", permanent: true },
      { source: "/knowledge-base/304-vs-316l-stainless-steel", destination: "/knowledge-base/304-vs-316-stainless-steel", permanent: true },
      { source: "/knowledge-base/8k-mirror-finish-guide", destination: "/surfaces/stainless-steel-8k-mirror-finish", permanent: true },
      // welding-304l previously pointed to heat-input-control-austenitic-welding (now retired); rerouted:
      { source: "/knowledge-base/welding-304l-stainless-steel", destination: "/knowledge-base/how-to-weld-stainless-steel", permanent: true },
      { source: "/knowledge-base/passivation-stainless-steel", destination: "/knowledge-base/stainless-steel-passivation-guide", permanent: true },
      { source: "/knowledge-base/grade-comparison-table", destination: "/knowledge-base/stainless-steel-grade-comparison", permanent: true },
      { source: "/knowledge-base/430-vs-304-appliance-panels", destination: "/knowledge-base/austenitic-vs-ferritic-stainless-steel", permanent: true },

      { source: "/datasheets/datasheet-201", destination: "/datasheets/201", permanent: true },
      { source: "/datasheets/datasheet-2205-duplex", destination: "/datasheets/2205-duplex", permanent: true },
      { source: "/datasheets/datasheet-304-304L", destination: "/datasheets/304-304l", permanent: true },
      { source: "/datasheets/datasheet-316-316L", destination: "/datasheets/316-316l", permanent: true },
      { source: "/datasheets/datasheet-430", destination: "/datasheets/430", permanent: true },

      // ===== KB consolidation 2026-04-25 — 4 merges + 40 retires =====
      // Merges: content folded into destination, source 301 to destination
      { source: "/knowledge-base/duplex-vs-austenitic-when-extra-cost-worth-it", destination: "/knowledge-base/duplex-vs-austenitic-stainless-steel", permanent: true },
      { source: "/knowledge-base/duplex-2205-mechanical-advantages", destination: "/knowledge-base/duplex-vs-austenitic-stainless-steel", permanent: true },
      { source: "/knowledge-base/en-10204-31-mill-test-certificate", destination: "/knowledge-base/how-to-read-mill-test-certificate", permanent: true },
      { source: "/knowledge-base/stainless-steel-weld-discoloration", destination: "/knowledge-base/heat-tint-oxide-scale-stainless-steel", permanent: true },

      // Retires: specialty alloys / niche
      { source: "/knowledge-base/17-4ph-stainless-steel", destination: "/knowledge-base/5-types-of-stainless-steel", permanent: true },
      { source: "/knowledge-base/904l-vs-254smo-stainless-steel", destination: "/knowledge-base/duplex-vs-austenitic-stainless-steel", permanent: true },
      { source: "/knowledge-base/321-vs-347-stainless-steel", destination: "/knowledge-base/high-temperature-stainless-steel", permanent: true },
      { source: "/knowledge-base/martensitic-stainless-steel-hardness", destination: "/knowledge-base/5-types-of-stainless-steel", permanent: true },
      { source: "/knowledge-base/high-hardness-stainless-steel", destination: "/knowledge-base/stainless-steel-hardness-by-grade", permanent: true },
      { source: "/knowledge-base/duplex-2205-welding-guide", destination: "/knowledge-base/duplex-vs-austenitic-stainless-steel", permanent: true },
      { source: "/knowledge-base/duplex-hot-working-window", destination: "/knowledge-base/2205-duplex-chemical-composition", permanent: true },
      { source: "/knowledge-base/duplex-stainless-steel-machining", destination: "/knowledge-base/stainless-steel-machining-parameters", permanent: true },
      { source: "/knowledge-base/duplex-welding-phase-balance", destination: "/knowledge-base/2205-duplex-chemical-composition", permanent: true },
      { source: "/knowledge-base/duplex-welding-challenges-buyer", destination: "/knowledge-base/duplex-vs-austenitic-stainless-steel", permanent: true },
      { source: "/knowledge-base/ferrite-content-measurement-duplex", destination: "/knowledge-base/2205-duplex-chemical-composition", permanent: true },
      { source: "/knowledge-base/nace-mr0175-material-selection", destination: "/knowledge-base/stainless-steel-for-pressure-vessels", permanent: true },
      { source: "/knowledge-base/norsok-m650-m630-offshore-inspection", destination: "/knowledge-base/stainless-steel-for-marine-offshore", permanent: true },
      { source: "/knowledge-base/downhole-tubulars-nace-mr0175", destination: "/knowledge-base/stainless-steel-for-marine-offshore", permanent: true },

      // Retires: deep metallurgy / academic
      { source: "/knowledge-base/475-embrittlement-sigma-phase", destination: "/knowledge-base/stress-corrosion-cracking-scc", permanent: true },
      { source: "/knowledge-base/creep-stress-relaxation-stainless-steel", destination: "/knowledge-base/high-temperature-stainless-steel", permanent: true },
      { source: "/knowledge-base/fatigue-strength-stainless-steel", destination: "/knowledge-base/stainless-steel-strength", permanent: true },
      { source: "/knowledge-base/low-temperature-toughness-austenitic-stainless-steel", destination: "/knowledge-base/stainless-steel-strength", permanent: true },
      { source: "/knowledge-base/tensile-strength-stainless-steel", destination: "/knowledge-base/stainless-steel-strength", permanent: true },
      { source: "/knowledge-base/residual-stress-flatness-stainless-steel", destination: "/knowledge-base/stainless-steel-flatness-requirements", permanent: true },
      { source: "/knowledge-base/springback-compensation-stainless-steel", destination: "/knowledge-base/stainless-steel-bending-guide", permanent: true },
      { source: "/knowledge-base/stainless-steel-temper-conditions", destination: "/knowledge-base/stainless-steel-strength", permanent: true },
      { source: "/knowledge-base/stainless-steel-solution-annealing", destination: "/knowledge-base/stainless-steel-passivation-guide", permanent: true },
      { source: "/knowledge-base/structural-stainless-steel-design", destination: "/knowledge-base/stainless-steel-for-pressure-vessels", permanent: true },
      { source: "/knowledge-base/work-hardening-annealing-fld", destination: "/knowledge-base/stainless-steel-bending-guide", permanent: true },
      { source: "/knowledge-base/work-hardening-stainless-steel", destination: "/knowledge-base/stainless-steel-bending-guide", permanent: true },
      { source: "/knowledge-base/cold-rolling-work-hardening-curves", destination: "/knowledge-base/what-is-cold-rolling-stainless-steel", permanent: true },

      // Retires: welding / NDT specialty
      { source: "/knowledge-base/dissimilar-metal-welding-stainless-carbon", destination: "/knowledge-base/how-to-weld-stainless-steel", permanent: true },
      { source: "/knowledge-base/heat-input-control-austenitic-welding", destination: "/knowledge-base/how-to-weld-stainless-steel", permanent: true },
      { source: "/knowledge-base/multi-pass-welding-thick-ss-plate", destination: "/knowledge-base/how-to-weld-stainless-steel", permanent: true },
      { source: "/knowledge-base/preheat-pwht-stainless-steel", destination: "/knowledge-base/post-weld-treatment-stainless-steel", permanent: true },
      { source: "/knowledge-base/welding-consumables-316l", destination: "/knowledge-base/how-to-weld-stainless-steel", permanent: true },
      { source: "/knowledge-base/welding-filler-wire-304-stainless", destination: "/knowledge-base/how-to-weld-stainless-steel", permanent: true },
      { source: "/knowledge-base/igc-testing-methods-gb4334-astm-a262", destination: "/knowledge-base/intergranular-corrosion-sensitization", permanent: true },
      { source: "/knowledge-base/cpt-testing-material-selection", destination: "/knowledge-base/crevice-corrosion-stainless-steel", permanent: true },

      // Retires: niche applications
      { source: "/knowledge-base/stainless-steel-fgd-flue-gas-desulfurization", destination: "/knowledge-base/stainless-steel-chemical-environments", permanent: true },
      { source: "/knowledge-base/stainless-steel-lgn-tanks-cryogenic", destination: "/knowledge-base/stainless-steel-for-pressure-vessels", permanent: true },
      { source: "/knowledge-base/nuclear-power-stainless-steel", destination: "/knowledge-base/stainless-steel-for-pressure-vessels", permanent: true },
      { source: "/knowledge-base/deep-drawing-stainless-steel", destination: "/knowledge-base/stainless-steel-bending-guide", permanent: true },

      // Retires: redundant mirror duplicate (canonical is /surfaces/8k)
      { source: "/knowledge-base/mirror-polished-stainless-steel", destination: "/surfaces/stainless-steel-8k-mirror-finish", permanent: true },
    ];
  },
};

export default nextConfig;

