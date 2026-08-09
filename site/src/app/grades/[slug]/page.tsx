import { getContent, getContentSlugs, getContentList } from "@/lib/content";
import { ContentPage } from "@/components/content/ContentPage";
import Image from "next/image";
import Link from "next/link";
import { SHOW_COMMERCIAL_RELATED_ARTICLES } from "@/lib/commercial-related-articles";
import {
  GradeRouteDesk,
  getGradeSidebarConfig,
  isGradeRouteSlug,
} from "@/components/content/GradeRouteDesk";
import { buildArticleSchema } from "@/lib/structured-data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

const clearedCoreGradeSlugs = new Set([
  "304-stainless-steel",
  "316l-stainless-steel",
  "430-stainless-steel",
  "201-stainless-steel",
  "2205-duplex-stainless-steel",
]);

const coreGradeHeroImage =
  "/images/grades/316l-stainless-steel/hero-316l-rebuild.jpg";

const gradeAvailableOptionGroups = [
  {
    title: "Forms selection",
    items: [
      { label: "Coil", href: "/products/stainless-steel-coil" },
      { label: "Sheet & Plate", href: "/products/stainless-steel-sheet" },
      { label: "Bar Forms", href: "/products/stainless-steel-bar" },
      { label: "Tube & Pipe", href: "/products/stainless-steel-tube-pipe" },
    ],
  },
  {
    title: "Surface finish",
    items: [
      { label: "8K Mirror Finish", href: "/surfaces/stainless-steel-8k-mirror-finish" },
      { label: "AFP (Anti-Fingerprint)", href: "/surfaces/stainless-steel-afp-finish" },
      { label: "No.4 Brushed", href: "/surfaces/stainless-steel-no4-brushed-finish" },
      { label: "Hairline", href: "/surfaces/stainless-steel-hairline-finish" },
      { label: "2B Finish", href: "/surfaces/stainless-steel-2b-finish" },
      { label: "BA Finish", href: "/surfaces/stainless-steel-ba-finish" },
    ],
  },
];

const gradeSpecificationData: Record<
  string,
  {
    title: string;
    subtitle: string;
    description: string;
    rows: Array<{ item: string; details: string }>;
  }
> = {
  "304-stainless-steel": {
    title: "304 / 304L specification",
    subtitle: "Core data for general-purpose stainless steel supply",
    description:
      "Review 304 and 304L stainless steel specification data for coil, sheet, plate, bar, tube, and pipe purchasing. This grade is widely selected for food equipment, kitchenware, architectural panels, decorative fabrication, and surface finishing where corrosion resistance, formability, and stable supply are key.",
    rows: [
      {
        item: "Grade / Standard",
        details: "ASTM A240 S30400 / S30403; EN 1.4301 / 1.4307; JIS SUS304 / SUS304L",
      },
      {
        item: "Chemical Composition",
        details: "Cr 18.0-20.0%; Ni 8.0-10.5%; C <=0.08% / <=0.03% for 304L; Mn <=2.0%",
      },
      {
        item: "Mechanical Properties",
        details: "Yield >=205 MPa / >=170 MPa for 304L; Tensile >=515 MPa / >=485 MPa for 304L; Elongation >=40%",
      },
      {
        item: "Corrosion Resistance",
        details: "Excellent for general atmosphere, food equipment, indoor architecture, and mild chemical environments",
      },
      {
        item: "Available Forms",
        details: "Coil, sheet & plate, bar forms, tube & pipe",
      },
      {
        item: "Available Finishes",
        details: "2B, BA, No.4 brushed, hairline, 8K mirror, AFP, PVD color options",
      },
      {
        item: "Typical Applications",
        details: "Kitchen equipment, food processing, elevator panels, architecture, tanks, fabrication parts",
      },
      {
        item: "Buyer Note",
        details: "Choose 304L when welding resistance to intergranular corrosion is more important than higher carbon strength",
      },
    ],
  },
  "316l-stainless-steel": {
    title: "316 / 316L specification",
    subtitle: "Marine-grade stainless steel for chloride resistance",
    description:
      "Compare 316 and 316L stainless steel specification data for marine, coastal, pharmaceutical, chemical, and welded fabrication projects. Molybdenum alloying improves pitting resistance in chloride service, while 316L supports welded parts requiring better resistance to sensitization.",
    rows: [
      {
        item: "Grade / Standard",
        details: "ASTM A240 S31600 / S31603; EN 1.4401 / 1.4404; JIS SUS316 / SUS316L",
      },
      {
        item: "Chemical Composition",
        details: "Cr 16.0-18.0%; Ni 10.0-14.0%; Mo 2.0-3.0%; C <=0.08% / <=0.03% for 316L",
      },
      {
        item: "Mechanical Properties",
        details: "Yield >=205 MPa / >=170 MPa for 316L; Tensile >=515 MPa / >=485 MPa for 316L; Elongation >=40%",
      },
      {
        item: "Corrosion Resistance",
        details: "Better chloride and pitting resistance than 304; suitable for coastal, marine, and chemical exposure",
      },
      {
        item: "Available Forms",
        details: "Coil, sheet & plate, bar forms, tube & pipe",
      },
      {
        item: "Available Finishes",
        details: "2B, BA, No.4 brushed, hairline, 8K mirror, AFP, polished and passivated options",
      },
      {
        item: "Typical Applications",
        details: "Marine equipment, pharma lines, chemical tanks, food processing, coastal architecture, welded components",
      },
      {
        item: "Buyer Note",
        details: "Choose 316L for welded chloride-service parts where long-term pitting and intergranular corrosion control matter",
      },
    ],
  },
  "430-stainless-steel": {
    title: "430 specification",
    subtitle: "Ferritic stainless steel for magnetic and cost-sensitive applications",
    description:
      "Review 430 stainless steel specification data for appliance panels, automotive trim, kitchen equipment, and decorative ferritic stainless steel projects. 430 offers chromium-based corrosion resistance, magnetic behavior, good oxidation resistance, and a more economical alternative where nickel-free supply is preferred.",
    rows: [
      {
        item: "Grade / Standard",
        details: "ASTM A240 S43000; EN 1.4016; JIS SUS430",
      },
      {
        item: "Chemical Composition",
        details: "Cr 16.0-18.0%; C <=0.12%; Mn <=1.0%; Si <=1.0%; Ni typically low / not intentionally added",
      },
      {
        item: "Mechanical Properties",
        details: "Yield >=205 MPa; Tensile >=450 MPa; Elongation >=22% for annealed sheet and strip",
      },
      {
        item: "Corrosion Resistance",
        details: "Good indoor and mildly corrosive service; less resistant than 304/316 in chloride or aggressive outdoor exposure",
      },
      {
        item: "Available Forms",
        details: "Coil, sheet & plate, selected bar forms and tube options",
      },
      {
        item: "Available Finishes",
        details: "2B, BA, No.4 brushed, hairline, 8K mirror, AFP and selected decorative finishes",
      },
      {
        item: "Typical Applications",
        details: "Home appliances, kitchen backsplashes, automotive trim, elevator decoration, interior wall panels",
      },
      {
        item: "Buyer Note",
        details: "Choose 430 when magnetic behavior, BA brightness, and lower nickel cost are more important than marine resistance",
      },
    ],
  },
  "201-stainless-steel": {
    title: "201 specification",
    subtitle: "Economical austenitic stainless steel for indoor decorative use",
    description:
      "Review 201 stainless steel specification data for cost-sensitive decorative sheet, coil, tube, and fabrication projects. 201 stainless steel uses manganese and nitrogen to reduce nickel content, offering higher yield strength and useful work hardening for indoor panels, furniture, appliance trim, and light forming.",
    rows: [
      {
        item: "Grade / Standard",
        details: "ASTM A240 S20100; EN/JIS equivalents vary by mill and purchase specification",
      },
      {
        item: "Chemical Composition",
        details: "Cr 16.0-18.0%; Ni 3.5-5.5%; Mn 5.5-7.5%; N <=0.25%; C <=0.15%",
      },
      {
        item: "Mechanical Properties",
        details: "Yield >=260 MPa; Tensile >=515 MPa; Elongation >=40% for annealed sheet and strip",
      },
      {
        item: "Corrosion Resistance",
        details: "Best for dry indoor decorative service; not recommended for marine, chloride, or strong chemical environments",
      },
      {
        item: "Available Forms",
        details: "Coil, sheet & plate, decorative tube, selected bar forms",
      },
      {
        item: "Available Finishes",
        details: "2B, BA, No.4 brushed, hairline, mirror polish, AFP and selected color finishes",
      },
      {
        item: "Typical Applications",
        details: "Indoor decoration, furniture tube, display frames, appliance trim, light fabrication, budget panels",
      },
      {
        item: "Buyer Note",
        details: "Choose 201 for indoor cost control, but specify 304/316 when corrosion exposure or export acceptance is stricter",
      },
    ],
  },
  "2205-duplex-stainless-steel": {
    title: "2205 duplex specification",
    subtitle: "High-strength duplex stainless steel for chloride service",
    description:
      "Review 2205 duplex stainless steel specification data for high-strength, chloride-resistant sheet, plate, tube, pipe, and bar supply. 2205 combines ferritic and austenitic structures, offering much higher yield strength than 304/316 and strong resistance to stress corrosion cracking in marine, chemical, oil and gas, and water-treatment applications.",
    rows: [
      {
        item: "Grade / Standard",
        details: "ASTM A240 S32205 / S31803; EN 1.4462; UNS Duplex 2205",
      },
      {
        item: "Chemical Composition",
        details: "Cr 22.0-23.0%; Ni 4.5-6.5%; Mo 3.0-3.5%; N 0.14-0.20%; C <=0.03%",
      },
      {
        item: "Mechanical Properties",
        details: "Yield >=450 MPa; Tensile >=655 MPa; Elongation >=25% for solution-annealed plate/sheet",
      },
      {
        item: "Corrosion Resistance",
        details: "Excellent resistance to chloride stress corrosion cracking, pitting, crevice corrosion, and marine service",
      },
      {
        item: "Available Forms",
        details: "Sheet & plate, coil, tube & pipe, bar forms and project-driven cut sizes",
      },
      {
        item: "Available Finishes",
        details: "2B, No.1 / HRAP, pickled, passivated, No.4, hairline and project-specific surface preparation",
      },
      {
        item: "Typical Applications",
        details: "Chemical processing, desalination, marine structures, pressure vessels, pulp & paper, oil and gas equipment",
      },
      {
        item: "Buyer Note",
        details: "Choose 2205 when chloride resistance and strength must reduce thickness, weight, or lifecycle replacement risk",
      },
    ],
  },
};

const gradeWhyChooseRows = [
  {
    icon: "material",
    title: "Prime mill material",
    text: "Stable mill channels and MTC support help buyers secure reliable 304, 316L, 430, 201, and duplex stainless steel supply.",
  },
  {
    icon: "selection",
    title: "Grade-matched selection",
    text: "Select stainless steel grade by corrosion resistance, strength, magnetism, welding performance, and project budget.",
  },
  {
    icon: "processing",
    title: "One-stop processing",
    text: "Coil, sheet, plate, bar, tube, slitting, cut-to-length, polishing, film protection, and packing can be coordinated together.",
  },
  {
    icon: "finish",
    title: "Surface finish compatibility",
    text: "2B, BA, No.4 brushed, hairline, 8K mirror, AFP, and PVD finishes are available for fabrication and visible design use.",
  },
  {
    icon: "export",
    title: "Export-ready flexibility",
    text: "Mixed grades, mixed forms, custom dimensions, protective packing, and container loading reduce sourcing complexity and lead time.",
  },
] as const;

const gradeRelatedArticles: Record<
  string,
  Array<{ name: string; href: string; excerpt: string; image?: string }>
> = {
  "304-stainless-steel": [
    {
      name: "304 vs 304L vs 304H: Which Stainless Steel Grade Should You Choose?",
      href: "/knowledge-base/304-vs-304l-vs-304h",
      excerpt:
        "Compare carbon level, welding behavior, heat resistance, and buyer selection logic for 304 stainless steel projects.",
    },
    {
      name: "304 Stainless Steel Mechanical Properties",
      href: "/knowledge-base/304-stainless-steel-mechanical-properties",
      excerpt:
        "Review strength, elongation, formability, and fabrication behavior before selecting 304 stainless steel coil or sheet.",
    },
    {
      name: "EN 1.4301 vs ASTM 304 Stainless Steel",
      href: "/knowledge-base/en-1-4301-vs-astm-304-stainless-steel",
      excerpt:
        "Understand international grade equivalence for export orders, MTC review, and cross-standard stainless steel purchasing.",
    },
  ],
  "316l-stainless-steel": [
    {
      name: "304 vs 316 Stainless Steel: How to Choose",
      href: "/knowledge-base/304-vs-316-stainless-steel",
      excerpt:
        "Compare corrosion resistance, molybdenum content, chloride exposure, and cost before selecting 316 stainless steel.",
    },
    {
      name: "304/316 Coastal Specifier Framework",
      href: "/knowledge-base/304-316-coastal-specifier-framework",
      excerpt:
        "A practical guide for choosing 316L stainless steel in coastal, marine, and chloride-service environments.",
    },
    {
      name: "Molybdenum Content and Corrosion Resistance",
      href: "/knowledge-base/molybdenum-content-corrosion-resistance",
      excerpt:
        "See why molybdenum improves pitting resistance and why 316L is preferred for harsh service conditions.",
    },
  ],
  "430-stainless-steel": [
    {
      name: "304 vs 430 Stainless Steel for Kitchen Equipment",
      href: "/knowledge-base/304-vs-430-kitchen-equipment",
      excerpt:
        "Compare ferritic 430 and austenitic 304 for appliance panels, kitchen equipment, magnetism, and cost control.",
    },
    {
      name: "Is Stainless Steel Magnetic?",
      href: "/knowledge-base/is-stainless-steel-magnetic",
      excerpt:
        "Understand why 430 stainless steel is magnetic and how magnetism affects material identification and applications.",
    },
    {
      name: "Mirror on 430: When the Value Play Is the Right Answer",
      href: "/knowledge-base/mirror-on-430-when-the-value-play-is-the-right-answer",
      excerpt:
        "Learn when 430 stainless steel works for decorative mirror panels and when austenitic grades are safer.",
    },
  ],
  "201-stainless-steel": [
    {
      name: "201 vs 304 Stainless Steel",
      href: "/knowledge-base/201-vs-304-stainless-steel",
      excerpt:
        "Compare nickel content, corrosion resistance, price, and indoor decorative suitability before choosing 201 stainless steel.",
    },
    {
      name: "200 vs 300 vs 400 Series Stainless Steel",
      href: "/knowledge-base/200-vs-300-vs-400-series-stainless-steel",
      excerpt:
        "Understand stainless steel series differences for budget, corrosion resistance, magnetism, and project risk control.",
    },
    {
      name: "How Nickel Content Affects Stainless Steel Price",
      href: "/knowledge-base/how-nickel-content-affects-stainless-steel-price",
      excerpt:
        "See why 201 stainless steel is economical and how nickel volatility changes grade selection decisions.",
    },
  ],
  "2205-duplex-stainless-steel": [
    {
      name: "2205 Duplex Chemical Composition",
      href: "/knowledge-base/2205-duplex-chemical-composition",
      excerpt:
        "Review chromium, molybdenum, nitrogen, and duplex balance before specifying 2205 stainless steel.",
    },
    {
      name: "Duplex vs Austenitic Stainless Steel",
      href: "/knowledge-base/duplex-vs-austenitic-stainless-steel",
      excerpt:
        "Compare 2205 duplex with 304/316 for strength, chloride resistance, and heavy industrial service.",
    },
    {
      name: "Stress Corrosion Cracking in Stainless Steel",
      href: "/knowledge-base/stress-corrosion-cracking-scc",
      excerpt:
        "Learn why duplex stainless steel is often selected for chloride stress corrosion cracking resistance.",
    },
  ],
};

const gradeRelatedArticleImages = [
  coreGradeHeroImage,
  "/images/capabilities/surface-finishing/surface-finishing-hero-machine.jpg",
  "/images/surfaces/no8-mirror/hero-ai-8k-mirror-logical-v2.png",
] as const;

function GradeBreadcrumbBar({ title }: { title: string }) {
  return (
    <div className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <nav className="flex min-w-0 items-center gap-2 overflow-hidden whitespace-nowrap text-[0.82rem] text-slate-500">
          <Link href="/" className="shrink-0 transition-colors hover:text-text-primary">
            Home
          </Link>
          <span className="flex shrink-0 items-center gap-2">
            <span className="shrink-0">/</span>
            <Link href="/grades" className="shrink-0 transition-colors hover:text-text-primary">
              Grades
            </Link>
          </span>
          <span className="flex min-w-0 flex-1 items-center gap-2">
            <span className="shrink-0">/</span>
            <span className="min-w-0 truncate text-text-primary">{title}</span>
          </span>
        </nav>
      </div>
    </div>
  );
}

function GradeAdvantageIcon({ type }: { type: (typeof gradeWhyChooseRows)[number]["icon"] }) {
  const common = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (type === "material") {
    return (
      <svg {...common}>
        <path d="M12 3 4.5 6v5.2c0 4.3 3.1 8.2 7.5 9.8 4.4-1.6 7.5-5.5 7.5-9.8V6L12 3Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    );
  }

  if (type === "selection") {
    return (
      <svg {...common}>
        <path d="M4 6h16" />
        <path d="M4 12h10" />
        <path d="M4 18h7" />
        <path d="m16 15 2 2 3-4" />
      </svg>
    );
  }

  if (type === "processing") {
    return (
      <svg {...common}>
        <path d="M5 18h14" />
        <path d="M7 18V8l5-3 5 3v10" />
        <path d="M9 18v-5h6v5" />
        <path d="M9 9h.01" />
        <path d="M12 9h.01" />
        <path d="M15 9h.01" />
      </svg>
    );
  }

  if (type === "finish") {
    return (
      <svg {...common}>
        <path d="m5 19 9.5-9.5" />
        <path d="m14 5 5 5" />
        <path d="M12.5 6.5 17.5 11.5" />
        <path d="M4 20h5" />
        <path d="M16 4l4 4" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M3 7h11v10H3z" />
      <path d="M14 10h4l3 3v4h-7z" />
      <path d="M7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M18 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
}

function GradeAvailableOptions() {
  return (
    <section className="bg-[#f4efe5] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.92fr)] lg:items-center">
        <div className="border border-[#d8cbb8] bg-[#fffdf8] p-3 shadow-[0_18px_42px_rgba(13,20,27,0.08)]">
          <div className="grid gap-3 sm:grid-cols-2">
            {gradeAvailableOptionGroups.map((group) => (
              <div key={group.title} className="border border-[#e4d8c7] bg-white/86 p-4 shadow-[0_10px_24px_rgba(13,20,27,0.045)]">
                <p className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[#8a6b32]">
                  {group.title}
                </p>
                <div className="mt-4 grid gap-2.5">
                  {group.items.map((item, index) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={
                        index % 2 === 0
                          ? "inline-flex min-h-10 items-center bg-[#f6d044] px-4 text-xs font-semibold text-[#111820] transition hover:bg-[#f2c820]"
                          : "inline-flex min-h-10 items-center bg-[#111820] px-4 text-xs font-semibold text-white transition hover:bg-[#26313d] hover:text-[#f6d044]"
                      }
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:pl-3">
          <h2 className="text-[2rem] font-semibold leading-[1.05] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
            Available options
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.45rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820]">
            Choose stainless steel grade by product form and surface finish, including coil, sheet and plate, bar forms, tube and pipe, plus 8K mirror, AFP anti-fingerprint, No.4 brushed, hairline, 2B, and BA finishes for fabrication, architecture, appliance, marine, and industrial projects.
          </p>
        </div>
      </div>
    </section>
  );
}

function GradeWhyChooseUsSection() {
  return (
    <section className="flex bg-[#f4efe5] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:items-center lg:px-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div>
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Why choose us
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#8a6b32] first-letter:uppercase">
            Jinling helps buyers source stainless steel grades with stable chemistry, reliable MTC documentation, matched product forms, and export-ready processing. From 304 and 316L to 430, 201, and 2205 duplex stainless steel, our grade supply supports coil, sheet, plate, bar, tube, surface finishing, and mixed-container delivery for global fabrication, architecture, appliance, marine, and industrial projects.
          </p>
        </div>
        <ul className="grid gap-2.5">
          {gradeWhyChooseRows.map((point) => (
            <li
              key={point.title}
              className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <GradeAdvantageIcon type={point.icon} />
              </div>
              <div className="px-4 py-3 sm:px-5">
                <p className="text-[0.82rem] font-semibold uppercase tracking-[0.08em] text-[#111820]">
                  {point.title}
                </p>
                <p className="mt-1 text-sm font-semibold leading-6 text-[#34404b]">
                  {point.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function GradeRelatedArticlesSection({ slug }: { slug: string }) {
  const articles = gradeRelatedArticles[slug];

  if (!articles) return null;

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-6rem)] gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
          <div>
            <h2 className="max-w-[8.5em] text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
            Related articles
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {articles.map((article, index) => (
              <Link
                key={article.href}
                href={article.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={article.image ?? gradeRelatedArticleImages[index % gradeRelatedArticleImages.length]}
                  alt={`${article.name} stainless steel grade article`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.2)_0%,rgba(13,20,27,0.78)_54%,rgba(13,20,27,0.95)_100%)]" aria-hidden="true" />
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(6.25rem,auto)_auto] pb-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                  Read next
                </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
                  {article.name}
                  </h3>
                  <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/76">
                  {article.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GradeSpecificationSection({ slug }: { slug: string }) {
  const spec = gradeSpecificationData[slug];

  if (!spec) return null;

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-5xl gap-7 lg:grid-cols-[minmax(0,1.32fr)_minmax(15rem,0.68fr)] lg:items-center">
        <div className="overflow-hidden border border-white/15 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.18)]">
          <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-3 text-center">
            <h3 className="flex items-center justify-center gap-3 text-[1rem] font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
              <span className="h-1 w-9 skew-x-[-22deg] bg-[#f6d044]" />
              Specifications
              <span className="h-1 w-9 skew-x-[-22deg] bg-[#f6d044]" />
            </h3>
            <p className="mt-1 text-[0.72rem] font-medium text-white/72">
              {spec.subtitle}
            </p>
          </div>
          <div>
            <table className="w-full table-fixed border-collapse text-left text-[0.72rem] xl:text-[0.74rem]">
              <thead>
                <tr className="bg-[#f6d044] text-[#101820]">
                  <th className="w-[30%] border-r border-[#101820]/20 px-3 py-3 text-center font-semibold uppercase tracking-[0.08em]">
                    Item
                  </th>
                  <th className="px-3 py-3 text-center font-semibold uppercase tracking-[0.08em]">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {spec.rows.map((row) => (
                  <tr key={row.item} className="border-b border-white/12 last:border-b-0">
                    <td className="border-r border-white/12 px-3 py-3 text-center font-semibold text-white">
                      {row.item}
                    </td>
                    <td className="px-3 py-3 leading-5 text-white/78">{row.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="lg:pl-3">
          <h2 className="text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.01em] text-[#111820] sm:text-[2.25rem]">
            {spec.title}
          </h2>
          <p className="mt-4 text-[0.9rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.35rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820]">
            {spec.description}
          </p>
          <p className="mt-4 border-l-4 border-[#f6d044] pl-4 text-[0.78rem] leading-6 text-[#6f665c]">
            Typical values are for buyer comparison; final supply follows the order standard, mill origin, and MTC.
          </p>
        </div>
      </div>
    </section>
  );
}

function Grade304Hero() {
  return (
    <section className="relative isolate flex min-h-[56vh] items-center overflow-hidden bg-[#0b1218] px-4 py-16 text-white sm:px-6 lg:min-h-[50vh] lg:px-8">
      <Image
        src={coreGradeHeroImage}
        alt="304 and 304L stainless steel coil inventory"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[58%_58%]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,18,24,0.96)_0%,rgba(11,18,24,0.88)_46%,rgba(11,18,24,0.64)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[#0b1218]/38" />

      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f6d044]">
          <span>Core grade</span>
          <span className="h-px w-10 bg-[#f6d044]" />
        </p>
        <h1 className="max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[2.45rem] lg:text-[2.9rem]">
          304/304L Stainless Steel: Properties, Applications & Available Forms
        </h1>
        <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
          As the most versatile grade, 304 stainless steel offers excellent
          corrosion resistance and formability. Its low-carbon variant, 304L,
          prevents carbide precipitation during welding, ensuring structural
          integrity. At Jinling, we provide prime 304/304L with stable nickel
          content, optimized for high-end surface finishing and precision
          fabrication.
        </p>
      </div>
    </section>
  );
}

function Grade316LHero() {
  return (
    <section className="relative isolate flex min-h-[56vh] items-center overflow-hidden bg-[#0b1218] px-4 py-16 text-white sm:px-6 lg:min-h-[50vh] lg:px-8">
      <Image
        src={coreGradeHeroImage}
        alt="316 and 316L stainless steel coil warehouse inventory"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[58%_58%]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,18,24,0.96)_0%,rgba(11,18,24,0.88)_46%,rgba(11,18,24,0.64)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[#0b1218]/38" />

      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f6d044]">
          <span>Core grade</span>
          <span className="h-px w-10 bg-[#f6d044]" />
        </p>
        <h1 className="max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[2.45rem] lg:text-[2.9rem]">
          316/316L Stainless Steel: Properties, Applications & Marine Grade
          Solutions
        </h1>
        <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
          Known as &quot;Marine Grade,&quot; 316 stainless steel contains
          Molybdenum, providing superior resistance to chlorides and pitting.
          316L is the preferred choice for heavy-gauge welded components.
          Jinling specializes in high-purity 316L for pharmaceutical and coastal
          projects where long-term durability in harsh environments is
          non-negotiable.
        </p>
      </div>
    </section>
  );
}

function Grade430Hero() {
  return (
    <section className="relative isolate flex min-h-[56vh] items-center overflow-hidden bg-[#0b1218] px-4 py-16 text-white sm:px-6 lg:min-h-[50vh] lg:px-8">
      <Image
        src={coreGradeHeroImage}
        alt="430 stainless steel coil warehouse inventory"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[58%_58%]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,18,24,0.96)_0%,rgba(11,18,24,0.88)_46%,rgba(11,18,24,0.64)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[#0b1218]/38" />

      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f6d044]">
          <span>Core grade</span>
          <span className="h-px w-10 bg-[#f6d044]" />
        </p>
        <h1 className="max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[2.45rem] lg:text-[2.9rem]">
          430 Stainless Steel: Properties, Ferritic Grade & Magnetic
          Applications
        </h1>
        <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
          430 stainless steel is a non-hardenable ferritic grade known for its
          good corrosion resistance and magnetic properties. It offers excellent
          thermal conductivity and resistance to oxidation at high temperatures.
          Jinling provides BA (Bright Annealed) 430 sheets that are widely used
          in home appliances and automotive trim where a high-gloss finish is
          required at a lower price point.
        </p>
      </div>
    </section>
  );
}

function Grade201Hero() {
  return (
    <section className="relative isolate flex min-h-[56vh] items-center overflow-hidden bg-[#0b1218] px-4 py-16 text-white sm:px-6 lg:min-h-[50vh] lg:px-8">
      <Image
        src={coreGradeHeroImage}
        alt="201 stainless steel coil warehouse inventory"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[58%_58%]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,18,24,0.96)_0%,rgba(11,18,24,0.88)_46%,rgba(11,18,24,0.64)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[#0b1218]/38" />

      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f6d044]">
          <span>Core grade</span>
          <span className="h-px w-10 bg-[#f6d044]" />
        </p>
        <h1 className="max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[2.45rem] lg:text-[2.9rem]">
          201 Stainless Steel Grade: Properties, Costs & Economical
          Applications
        </h1>
        <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
          201 stainless steel is a cost-effective alternative to 304, utilizing
          Manganese and Nitrogen to replace expensive Nickel. While offering
          higher yield strength and excellent work hardening, it is best suited
          for indoor decorative use. Jinling provides high-quality 201 with
          optimized copper content for better ductility during shallow drawing.
        </p>
      </div>
    </section>
  );
}

function Grade2205Hero() {
  return (
    <section className="relative isolate flex min-h-[56vh] items-center overflow-hidden bg-[#0b1218] px-4 py-16 text-white sm:px-6 lg:min-h-[50vh] lg:px-8">
      <Image
        src={coreGradeHeroImage}
        alt="2205 duplex stainless steel coil warehouse inventory"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[58%_58%]"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,18,24,0.96)_0%,rgba(11,18,24,0.88)_46%,rgba(11,18,24,0.64)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[#0b1218]/38" />

      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f6d044]">
          <span>Core grade</span>
          <span className="h-px w-10 bg-[#f6d044]" />
        </p>
        <h1 className="max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[2.45rem] lg:text-[2.9rem]">
          2205 Duplex Stainless Steel: Properties, Strength & Corrosion
          Resistance
        </h1>
        <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
          2205 duplex stainless steel combines austenitic and ferritic
          structures, delivering higher strength than 304/316 and excellent
          resistance to chloride stress corrosion cracking. Jinling supplies
          reliable 2205 duplex stainless steel sheet, coil, and plate for
          chemical processing, marine equipment, pressure vessels, and demanding
          industrial applications.
        </p>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return getContentSlugs("grades").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContent("grades", slug);
  if (!content) return {};
  return {
    title: content.seoTitle || content.title,
    description: content.description,
    alternates: {
      canonical: `/grades/${slug}`,
    },
  };
}

export default async function GradePage({ params }: Props) {
  const { slug } = await params;
  const content = await getContent("grades", slug);
  if (!content) notFound();

  if (slug === "304-stainless-steel") {
    return (
      <>
        <GradeBreadcrumbBar title="304 / 304L Stainless Steel" />
        <Grade304Hero />
        <GradeAvailableOptions />
        <GradeSpecificationSection slug={slug} />
        <GradeWhyChooseUsSection />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <GradeRelatedArticlesSection slug={slug} /> : null}
      </>
    );
  }

  if (slug === "316l-stainless-steel") {
    return (
      <>
        <GradeBreadcrumbBar title="316 / 316L Stainless Steel" />
        <Grade316LHero />
        <GradeAvailableOptions />
        <GradeSpecificationSection slug={slug} />
        <GradeWhyChooseUsSection />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <GradeRelatedArticlesSection slug={slug} /> : null}
      </>
    );
  }

  if (slug === "430-stainless-steel") {
    return (
      <>
        <GradeBreadcrumbBar title="430 Stainless Steel" />
        <Grade430Hero />
        <GradeAvailableOptions />
        <GradeSpecificationSection slug={slug} />
        <GradeWhyChooseUsSection />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <GradeRelatedArticlesSection slug={slug} /> : null}
      </>
    );
  }

  if (slug === "201-stainless-steel") {
    return (
      <>
        <GradeBreadcrumbBar title="201 Stainless Steel" />
        <Grade201Hero />
        <GradeAvailableOptions />
        <GradeSpecificationSection slug={slug} />
        <GradeWhyChooseUsSection />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <GradeRelatedArticlesSection slug={slug} /> : null}
      </>
    );
  }

  if (slug === "2205-duplex-stainless-steel") {
    return (
      <>
        <GradeBreadcrumbBar title="2205 Duplex Stainless Steel" />
        <Grade2205Hero />
        <GradeAvailableOptions />
        <GradeSpecificationSection slug={slug} />
        <GradeWhyChooseUsSection />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <GradeRelatedArticlesSection slug={slug} /> : null}
      </>
    );
  }

  if (clearedCoreGradeSlugs.has(slug)) {
    return (
      <>
        <GradeBreadcrumbBar title={content.title} />
        <GradeAvailableOptions />
        <GradeSpecificationSection slug={slug} />
        <GradeWhyChooseUsSection />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <GradeRelatedArticlesSection slug={slug} /> : null}
      </>
    );
  }

  const related = getContentList("grades")
    .filter((p) => p.slug !== slug)
    .map((p) => ({ name: p.title, href: `/grades/${p.slug}` }));
  const sidebarConfig = getGradeSidebarConfig(slug);
  const afterContent = isGradeRouteSlug(slug) ? (
    <GradeRouteDesk slug={slug} />
  ) : undefined;

  return (
    <ContentPage
      title={content.title}
      description={content.description}
      htmlContent={content.htmlContent}
      pageUrl={`/grades/${slug}`}
      structuredData={[
        buildArticleSchema({
          title: content.title,
          description: content.description,
          pageUrl: `/grades/${slug}`,
          imageUrl: content.heroImage,
          type: "TechArticle",
          articleSection: "Stainless Steel Grade",
          author: content.author,
          reviewedBy: content.reviewedBy,
          publishedAt: content.publishedAt,
        }),
      ]}
      breadcrumbs={[
        { label: "Grades", href: "/grades" },
        { label: content.title },
      ]}
      relatedItems={sidebarConfig?.items ?? related}
      relatedTitle={sidebarConfig?.relatedTitle ?? "Other Grades"}
      ctaHeading={sidebarConfig?.ctaHeading ?? "Need help choosing the right grade?"}
      ctaText={sidebarConfig?.ctaText ?? "Ask a Technical Question"}
      ctaHref={sidebarConfig?.ctaHref ?? "/contact#technical-review"}
      ctaSecondaryText={sidebarConfig?.ctaSecondaryText}
      ctaSecondaryHref={sidebarConfig?.ctaSecondaryHref}
      heroImage={content.heroImage}
      heroStats={content.heroStats}
      author={content.author}
      reviewedBy={content.reviewedBy}
      publishedAt={content.publishedAt}
      afterContent={afterContent}
    />
  );
}
