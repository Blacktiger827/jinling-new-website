import { getContent, getContentSlugs } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { VideoEmbed } from "@/components/blocks/VideoEmbed";
import { SHOW_COMMERCIAL_RELATED_ARTICLES } from "@/lib/commercial-related-articles";

interface Props {
  params: Promise<{ slug: string }>;
}

function StaticOrLinkedCard({
  href,
  disabled,
  className,
  style,
  children,
}: {
  href: string;
  disabled?: boolean;
  className: string;
  style: CSSProperties;
  children: ReactNode;
}) {
  if (disabled) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <Link href={href} className={className} style={style}>
      {children}
    </Link>
  );
}

const SURFACE_FINISHING_SLUG = "surface-finish-capability";

const CAPABILITY_HERO_COPY: Record<
  string,
  {
    breadcrumb: string;
    title: string;
    description: string;
  }
> = {
  "cut-to-length": {
    breadcrumb: "Cut-to-Length",
    title: "Stainless Steel Cut-to-Length Capability",
    description:
      "Jinling Steel provides precision stainless steel cut-to-length processing for coil, sheet, plate, and custom processed materials. From standard sheet sizes to project-specific panel lengths, we help buyers match flatness control, length tolerance, surface protection, edge condition, and export-ready packing for laser cutting, bending, appliance panels, elevator interiors, architectural cladding, and industrial fabrication.",
  },
  "slitting-edging": {
    breadcrumb: "Slitting & Edging",
    title: "Stainless Steel Slitting & Edge Trimming for Coil and Strip",
    description:
      "For buyers who need narrow stainless steel strip, Jinling offers coil slitting and edging services with controlled width tolerance, smooth edges, and stable coil winding. Our slitting route supports stainless steel coil, precision strip, decorative materials, and fabrication-ready narrow widths used in stamping, appliance parts, hardware, profiles, and downstream processing.",
  },
  "protective-coating": {
    breadcrumb: "Protective Coating",
    title: "Stainless Steel Protective Coating for Surface Durability and Handling Safety",
    description:
      "Jinling applies protective coating solutions to improve stainless steel surface resistance during fabrication, transport, storage, and daily use. Whether the order requires anti-fingerprint coating, moisture resistance, stain reduction, or extra surface protection, our coating process helps buyers reduce scratches, fingerprints, oxidation risk, and quality claims after delivery.",
  },
  "protective-film": {
    breadcrumb: "Protective Film",
    title: "Protective Film Application for Stainless Steel Sheet, Coil & Finished Surfaces",
    description:
      "Different stainless steel finishes need different film protection. Jinling matches PE film, PVC film, laser film, black-and-white film, and finish-compatible protective films according to surface type, cutting method, bending route, and export packing requirements. This helps protect 8K mirror, AFP, No.4 brushed, hairline, 2B, and BA stainless steel surfaces before final installation.",
  },
  "packaging-logistics": {
    breadcrumb: "Packaging & Logistics",
    title: "Export Packaging & Logistics for Stainless Steel Coil, Sheet and Processed Materials",
    description:
      "Jinling prepares stainless steel products for safe export delivery with coil packing, sheet pallet packing, edge protection, waterproof wrapping, container loading support, and mixed-container shipment planning. Our packaging and logistics process helps international buyers reduce transport damage, simplify receiving inspection, and keep stainless steel materials protected from factory to destination.",
  },
};

const PROTECTIVE_FILM_SELECTION_LOGIC = [
  {
    title: "Surface Finish",
    detail:
      "2B, BA, No.4, hairline, mirror, AFP, and coated stainless steel surfaces need different film adhesion and cleanliness requirements.",
  },
  {
    title: "Fabrication Route",
    detail:
      "Laser cutting, bending, slitting, cut-to-length, and installation handling change film thickness, heat behavior, stretch, and peel requirements.",
  },
  {
    title: "Adhesive Tack",
    detail:
      "Film tack should hold during processing and shipment, but still peel cleanly without residue, imprint, or coating damage.",
  },
  {
    title: "Storage & Removal Time",
    detail:
      "Long storage, warm containers, sunlight exposure, and delayed installation can change peel behavior and increase adhesive residue risk.",
  },
  {
    title: "Packing & Shipment",
    detail:
      "Face direction, pallet support, interleaving, edge protection, and container loading should protect the filmed surface until the buyer removes it.",
  },
];

const PROTECTIVE_FILM_MATCHING_GUIDE = [
  {
    surface: "2B / BA",
    requirement: "General PE/PVC protection",
    risk: "Handling scratches",
  },
  {
    surface: "No.4 / Hairline",
    requirement: "Grain-safe film",
    risk: "Grain marks, adhesive residue",
  },
  {
    surface: "8K Mirror",
    requirement: "Full-face clean film",
    risk: "Visible scratches, imprint",
  },
  {
    surface: "AFP / Coated",
    requirement: "Coating-compatible film",
    risk: "Coating damage, peel marks",
  },
  {
    surface: "Laser Cutting",
    requirement: "Laser film / route review",
    risk: "Burn marks, poor peel",
  },
];

const PROTECTIVE_FILM_APPLICATIONS = [
  {
    title: "Mirror & Decorative Sheet",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
    image: "/images/capabilities/protective-film/applications/mirror-decorative-sheet-no-logo.jpg",
    description:
      "8K mirror and decorative stainless steel sheets need clean full-face protective film to reduce visible scratches, imprint, dust marks, and packing damage before installation.",
  },
  {
    title: "Hairline / No.4 Panels",
    href: "/surfaces/stainless-steel-hairline-finish",
    image: "/images/blog/no4-hairline-hero.jpg",
    description:
      "Directional brushed and hairline stainless steel panels need grain-safe film, controlled peel, and careful handling so the surface direction stays clean and consistent.",
  },
  {
    title: "AFP / Coated Stainless",
    href: "/surfaces/stainless-steel-afp-finish",
    image: "/images/capabilities/protective-film/applications/afp-coated-stainless-no-logo.jpg",
    description:
      "AFP and coated stainless steel surfaces need coating-compatible protective film to avoid peel marks, coating damage, adhesive transfer, and visible release defects.",
  },
  {
    title: "Cut-to-Length Sheets",
    href: "/solutions/capabilities/cut-to-length",
    image: "/images/capabilities/protective-film/applications/cut-to-length-sheets-no-logo.jpg",
    description:
      "Cut-to-length sheets often need film matched with leveling, stacking direction, pallet packing, and later laser cutting or bending requirements.",
  },
  {
    title: "Laser Cutting / Fabrication",
    href: "/solutions/capabilities/surface-finish-capability",
    image: "/images/blog/laser-cut-edge-route-hero.jpg",
    description:
      "Laser cutting and fabrication routes may require laser film, route testing, and removal review to reduce burn marks, residue, poor peel, and cleaning work.",
  },
];

const PROTECTIVE_FILM_ADVANTAGES = [
  {
    icon: "surface",
    title: "Finish-Specific Film Matching",
    text: "Match PE film, PVC film, laser film, or clean protective film to 2B, BA, No.4, hairline, 8K mirror, AFP, and coated stainless steel surfaces.",
  },
  {
    icon: "readiness",
    title: "Laser & Bending Route Review",
    text: "Review laser cutting, bending, slitting, cut-to-length, and installation routes before selecting film tack, thickness, heat behavior, and peel performance.",
  },
  {
    icon: "mixed",
    title: "Coated Surface Compatibility",
    text: "Check film compatibility with AFP coating, PVD colored stainless steel, and decorative coated panels to reduce peel marks, residue, and coating damage.",
  },
  {
    icon: "export",
    title: "Export Packing Protection",
    text: "Coordinate protective film with face direction, pallet support, interleaving, edge protection, moisture control, and container-ready stainless steel packing.",
  },
  {
    icon: "processing",
    title: "Surface Claim Reduction",
    text: "Use film selection, sample review, removal timing, and packing checks to help buyers reduce scratches, adhesive residue, imprint, and visible-surface claims.",
  },
];

const PACKAGING_LOGISTICS_RANGE = [
  {
    item: "Product Forms",
    range: "Stainless steel coil / sheet / plate / strip / tube / pipe / bar",
  },
  {
    item: "Packing Methods",
    range: "Wooden pallet, wooden crate, coil eye-to-wall or eye-to-sky packing, bundled packing",
  },
  {
    item: "Protection",
    range: "PE/PVC film, paper interleaving, edge guard, corner protection, face separation",
  },
  {
    item: "Moisture Control",
    range: "Waterproof wrap, VCI protection, desiccant, barrier layer, container sweat risk review",
  },
  {
    item: "Loading Support",
    range: "Container loading plan, bracing, lot separation, loading photos, mixed-container support",
  },
  {
    item: "Documents",
    range: "Packing list, heat number, MTC, labels, shipping marks, loading evidence",
  },
];

const PACKAGING_LOGISTICS_ROUTES = [
  {
    title: "Stainless Steel Coil",
    href: "/products/stainless-steel-coil",
    image: "/images/products/coil/gallery-2.jpg",
    description:
      "Coils need stable eye-to-wall or eye-to-sky packing, inner and outer edge protection, waterproof wrapping, straps, and clear coil labels for export handling.",
  },
  {
    title: "Stainless Steel Sheet & Plate",
    href: "/products/stainless-steel-sheet",
    image: "/images/products/sheet/processing-capabilities/packaging-logistics.jpg",
    description:
      "Sheets and plates need pallet support, face separation, edge guards, protective film, waterproof wrapping, and stacking direction control to reduce scratches and bending damage.",
  },
  {
    title: "Mirror / Decorative Panels",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
    image: "/images/blog/mirror-packaging-hero.jpg",
    description:
      "Mirror, AFP, hairline, and decorative panels need stronger face protection, interleaving, corner protection, film checks, and careful loading to avoid visible surface claims.",
  },
  {
    title: "Tube & Pipe",
    href: "/products/stainless-steel-tube-pipe",
    image: "/images/products/tube/gallery-1.jpg",
    description:
      "Tube and pipe shipments need bundle packing, end protection, strap control, label clarity, and loading separation so round and polished surfaces arrive clean.",
  },
  {
    title: "Mixed Container Orders",
    href: "/solutions/capabilities",
    image: "/images/capabilities/packaging-logistics/hero.jpg",
    description:
      "Mixed orders need a loading plan that separates coils, sheets, tubes, and finished surfaces, with shipping marks and loading photos kept readable for buyer inspection.",
  },
];

const PACKAGING_LOGISTICS_ADVANTAGES = [
  {
    icon: "processing",
    title: "Product-Form Packing Logic",
    text: "Match packing route to stainless steel coil, sheet, plate, strip, tube, pipe, bar, and mixed product forms instead of using one generic export pack.",
  },
  {
    icon: "surface",
    title: "Surface Protection Experience",
    text: "Use protective film, paper interleaving, face separation, edge guards, and corner protection for mirror, brushed, AFP, coated, and finish-visible stainless steel.",
  },
  {
    icon: "readiness",
    title: "Moisture & Rust Risk Control",
    text: "Review waterproof wrapping, VCI, desiccant, barrier layers, container sweat risk, and destination storage conditions before shipment.",
  },
  {
    icon: "mixed",
    title: "Mixed Container Loading Support",
    text: "Plan container loading for mixed stainless steel orders so coils, sheet pallets, tube bundles, and finished surfaces stay separated and readable.",
  },
  {
    icon: "export",
    title: "Documented Export Release",
    text: "Keep packing list, heat number, MTC, labels, shipping marks, and loading photos aligned so buyer-side receiving inspection is easier.",
  },
];

const PACKAGING_LOGISTICS_RELATED_ARTICLES = [
  {
    title: "What Should Be Proven Before a Stainless Container Leaves?",
    href: "/knowledge-base/stainless-steel-export-packaging-container-loading",
    image: "/images/blog/export-packaging-hero.jpg",
    excerpt:
      "Review export packaging proof for stainless steel shipments, including moisture control, edge protection, container loading, labels, and unloading evidence.",
  },
  {
    title: "Which Five-Second Packing Step Saves Stainless Sheet Claims?",
    href: "/knowledge-base/the-one-step-most-export-sheet-packaging-skips",
    image: "/images/capabilities/cut-to-length/gallery-1.jpg",
    excerpt:
      "See why the first and last sheet face direction, stacking sequence, and packing photos can reduce stainless steel sheet export claims.",
  },
  {
    title: "Why Does an Export Order Need Its Own Line?",
    href: "/knowledge-base/why-we-run-a-separate-export-team-and-line",
    image: "/images/capabilities/packaging-logistics/hero.jpg",
    excerpt:
      "Understand how export QC, packing photos, MTC timing, labels, and documentation discipline protect stainless steel orders before shipment.",
  },
];


const CUT_TO_LENGTH_RANGE = [
  {
    item: "Material Forms",
    range: "Stainless steel coil to sheet / plate",
  },
  {
    item: "Common Grades",
    range: "201, 304, 304L, 316L, 430, 2205 duplex",
  },
  {
    item: "Thickness Range",
    range: "0.3 mm - 6.0 mm, depending on material and surface",
  },
  {
    item: "Width Range",
    range: "1000 mm, 1219 mm, 1250 mm, 1500 mm, 1524 mm",
  },
  {
    item: "Length Range",
    range: "2000 mm, 2438 mm, 3000 mm, 3048 mm, customized length",
  },
  {
    item: "Surface Finish",
    range: "2B, BA, No.4, hairline, 8K mirror, AFP, protective film",
  },
  {
    item: "Packing",
    range: "Wooden pallet, paper interleaving, PVC/PE film, edge protection",
  },
];
const SLITTING_EDGING_RANGE = [
  {
    item: "Material Forms",
    range: "Stainless steel master coil to slit coil / precision strip",
  },
  {
    item: "Common Grades",
    range: "201, 304, 304L, 316L, 430; other grades by coil availability and route review",
  },
  {
    item: "Thickness Range",
    range: "0.3 mm - 6.0 mm, depending on grade, slit width, and edge route",
  },
  {
    item: "Slit Width Range",
    range: "10 mm - 1,500 mm; narrow strip below 10 mm by special review",
  },
  {
    item: "Coil ID / OD",
    range: "Master coil ID 508 / 610 mm; master OD up to 1,800 mm; slit coil OD up to 1,200 mm",
  },
  {
    item: "Edge Options",
    range: "Slit / sheared edge, deburred edge, and rounded edge when specified and technically available",
  },
  {
    item: "Surface Finish",
    range: "2B, BA, No.4, hairline, mirror, and AFP with finish-compatible protective film",
  },
  {
    item: "Packing",
    range: "Narrow coil packing, eye-to-sky or eye-to-wall orientation, pallet support, straps, edge protection",
  },
];
const SLITTING_EDGING_APPLICATIONS = [
  {
    title: "Appliance Parts",
    href: "/solutions/applications/kitchen-equipment",
    image: "/images/capabilities/slitting-edging/applications/appliance-parts.jpg",
    description:
      "Slit stainless steel strip supports appliance trims, brackets, hinges, cooker hood parts, panel edges, and visible components where width repeatability and clean edges matter.",
  },
  {
    title: "Decorative Trim & Profiles",
    href: "/solutions/applications/architecture",
    image: "/images/capabilities/slitting-edging/applications/decorative-trim-profiles.jpg",
    description:
      "Controlled strip width helps decorative profiles, edging strips, cladding details, channels, and architectural trim run with cleaner forming and consistent surface direction.",
  },
  {
    title: "Elevator & Interiors",
    href: "/solutions/applications/elevator-decoration",
    image: "/images/capabilities/slitting-edging/applications/elevator-interiors.jpg",
    description:
      "Elevator cabins, interior trims, ceilings, wall edges, and door details often need narrow stainless strip with stable finish, film protection, and edge control.",
  },
  {
    title: "Tube & Pipe Production",
    href: "/products/stainless-steel-tube-pipe",
    image: "/images/capabilities/slitting-edging/applications/tube-pipe-production.jpg",
    description:
      "Welded tube and pipe lines depend on slit coil feedstock with agreed width, burr direction, edge condition, and stable rewind before forming and welding.",
  },
  {
    title: "Precision Strip / Hardware",
    href: "/products/stainless-steel-coil",
    image: "/images/capabilities/slitting-edging/applications/precision-strip-hardware.jpg",
    description:
      "Hardware, clips, spacers, small brackets, and stamped parts benefit from narrow stainless strip with controlled width, deburred edges, and packing for smooth feeding.",
  },
];
const SLITTING_EDGING_CONTROL_POINTS = [
  {
    controlPoint: "Width tolerance",
    jinlingChecks: "Slit width and tolerance tier",
    buyerBenefit: "Stable stamping / forming",
  },
  {
    controlPoint: "Burr direction",
    jinlingChecks: "Burr side confirmed before winding",
    buyerBenefit: "Fewer assembly scratches",
  },
  {
    controlPoint: "Edge condition",
    jinlingChecks: "Edge smoothness, camber, wave",
    buyerBenefit: "Safer downstream feeding",
  },
  {
    controlPoint: "Coil winding",
    jinlingChecks: "Tension, telescoping, coil shape",
    buyerBenefit: "Easier uncoiling",
  },
  {
    controlPoint: "Surface protection",
    jinlingChecks: "Film/interleaving by finish",
    buyerBenefit: "Fewer surface claims",
  },
];
const SLITTING_EDGING_ADVANTAGES = [
  {
    icon: "processing",
    title: "Flexible Coil Slitting",
    text: "Process stainless steel master coils into narrow slit coil or strip for tube making, stamping, roll forming, trim, and hardware production.",
  },
  {
    icon: "readiness",
    title: "Width Tolerance Control",
    text: "Confirm slit width, tolerance tier, and route feasibility before production so downstream dies, formers, and feeding lines run more steadily.",
  },
  {
    icon: "mixed",
    title: "Edge Condition Review",
    text: "Check burr direction, edge smoothness, camber, wave, and coil build to reduce feeding problems and handling scratches.",
  },
  {
    icon: "surface",
    title: "Surface Finish Protection",
    text: "Match film, interleaving, and handling method to 2B, BA, No.4, hairline, mirror, and AFP slit coil requirements.",
  },
  {
    icon: "export",
    title: "Export Coil Packing",
    text: "Prepare slit coils with eye-to-sky or eye-to-wall packing, pallets, straps, edge protection, and container-ready loading support.",
  },
];
const PROTECTIVE_COATING_DECISIONS = [
  {
    title: "Fingerprints and cleaning marks are the problem",
    route: "Choose AFP",
    href: "/surfaces/stainless-steel-afp-finish",
    image: "/images/capabilities/protective-coating/decisions/afp-cleaning-marks.jpg",
    description:
      "AFP anti-fingerprint coating helps high-touch stainless steel panels resist visible fingerprints, oil marks, water marks, and daily wiping traces.",
  },
  {
    title: "Color / brand effect is required",
    route: "Choose PVD",
    href: "",
    disabled: true,
    image: "/images/capabilities/protective-coating/decisions/pvd-color-brand-effect.jpg",
    description:
      "PVD colored stainless steel is useful for gold, black, bronze, champagne, and other decorative surfaces where tone, sample approval, and brand effect matter.",
  },
  {
    title: "Coated panels still need fabrication",
    route: "Confirm film and bending route",
    href: "/solutions/capabilities/protective-film",
    image: "/images/capabilities/protective-coating/decisions/film-bending-route.jpg",
    description:
      "Protective film adhesive, peel behavior, bend direction, cutting route, and handling method should be confirmed before coated stainless steel sheets move downstream.",
  },
];
const PROTECTIVE_COATING_ROUTE_COMPARISON = [
  {
    buyerNeed: "Fingerprint control",
    afp: "Strong fit",
    pvd: "Optional with AFP top layer",
  },
  {
    buyerNeed: "Color effect",
    afp: "Not the main purpose",
    pvd: "Strong fit",
  },
  {
    buyerNeed: "High-touch interiors",
    afp: "Good fit",
    pvd: "Needs AFP or careful cleaning plan",
  },
  {
    buyerNeed: "Outdoor / coastal",
    afp: "Depends on grade first",
    pvd: "Not a shortcut for corrosion",
  },
  {
    buyerNeed: "Fabrication after coating",
    afp: "Needs review",
    pvd: "Usually risky",
  },
];
const PROTECTIVE_COATING_APPLICATIONS = [
  {
    title: "Elevator & Interiors",
    href: "/solutions/applications/elevator-decoration",
    image: "/images/capabilities/cut-to-length/applications/elevator-interiors.jpg",
    description:
      "AFP and PVD coated stainless steel help elevator cabins, door trims, ceilings, lobby panels, and high-touch interiors control fingerprints, color tone, and daily cleaning marks.",
  },
  {
    title: "Appliance Panels",
    href: "/solutions/applications/kitchen-equipment",
    image: "/images/capabilities/cut-to-length/applications/appliance-manufacturing.jpg",
    description:
      "Appliance fronts, cooker hood panels, refrigerator doors, oven trims, and kitchen surfaces can use AFP coating for easier cleaning or PVD color for a stronger brand look.",
  },
  {
    title: "Architecture & Decorative Panels",
    href: "/solutions/applications/architecture",
    image: "/images/capabilities/cut-to-length/applications/architecture.jpg",
    description:
      "Decorative wall panels, feature metal, retail surfaces, signage, and interior cladding often need controlled PVD color, approved samples, and coating-safe handling.",
  },
  {
    title: "AFP Anti-Fingerprint Finish",
    href: "/surfaces/stainless-steel-afp-finish",
    image: "/images/capabilities/protective-coating/decisions/afp-cleaning-marks.jpg",
    description:
      "AFP anti-fingerprint stainless steel is a practical route for high-touch surfaces where oil marks, fingerprints, wipe marks, and maintenance appearance matter.",
  },
  {
    title: "PVD Colored Stainless Steel",
    href: "",
    disabled: true,
    image: "/images/capabilities/protective-coating/decisions/pvd-color-brand-effect.jpg",
    description:
      "PVD colored stainless steel supports gold, bronze, black, champagne, and custom decorative effects when color approval and batch consistency are confirmed early.",
  },
];
const PROTECTIVE_COATING_ADVANTAGES = [
  {
    icon: "readiness",
    title: "Coating Stack Review",
    text: "Review base grade, base finish, coating type, service environment, and visible-surface requirement before stainless steel protective coating production.",
  },
  {
    icon: "mixed",
    title: "AFP & PVD Route Matching",
    text: "Match AFP anti-fingerprint coating or PVD colored stainless steel to the buyer's cleaning, color, touch-zone, and decorative panel requirements.",
  },
  {
    icon: "processing",
    title: "Sample-Based Production",
    text: "Use approved samples to control gloss, color tone, touch feel, and batch consistency for coated stainless steel sheet and coil orders.",
  },
  {
    icon: "surface",
    title: "Film Compatibility Control",
    text: "Confirm protective film adhesive, peel behavior, bending route, and cutting route so coated stainless steel surfaces stay protected during fabrication.",
  },
  {
    icon: "export",
    title: "Export Surface Protection",
    text: "Prepare coated stainless steel panels with face protection, interleaving, pallet support, edge protection, and export packing for container shipment.",
  },
];
const CUT_TO_LENGTH_RELEASE_CONTROLS = [
  {
    controlPoint: "Length tolerance",
    jinlingChecks: "Standard or precision cutting tolerance is confirmed before coil release.",
    buyerBenefit: "Less re-cutting before laser cutting, bending, or panel fabrication.",
  },
  {
    controlPoint: "Flatness after leveling",
    jinlingChecks: "Leveling result and coil memory are checked before sheets move to stacking.",
    buyerBenefit: "Better stability for laser cutting, press brake work, and visible panels.",
  },
  {
    controlPoint: "Burr / edge condition",
    jinlingChecks: "Cut edges are reviewed for burr, squareness, and handling safety.",
    buyerBenefit: "Cleaner downstream processing with less secondary trimming or deburring.",
  },
  {
    controlPoint: "Surface protection",
    jinlingChecks: "Protective film, paper interleaving, and face handling are matched to the finish.",
    buyerBenefit: "Fewer scratches on 2B, BA, No.4, hairline, mirror, and AFP sheets.",
  },
  {
    controlPoint: "Stacking & export packing",
    jinlingChecks: "Stack direction, face orientation, pallet support, and edge protection are set.",
    buyerBenefit: "Lower shipping damage risk during container loading and unloading.",
  },
];
const CUT_TO_LENGTH_ADVANTAGES = [
  {
    icon: "processing",
    title: "Flexible Coil-to-Sheet Processing",
    text: "Cut stainless steel coils into standard or customized sheet lengths for fabrication, decoration, and industrial use.",
  },
  {
    icon: "surface",
    title: "Surface Finish Protection",
    text: "Support 2B, BA, No.4, hairline, 8K mirror, and AFP finishes with suitable film or interleaving protection.",
  },
  {
    icon: "readiness",
    title: "Better Fabrication Readiness",
    text: "Flatness, length control, and packing protection help reduce cutting, bending, welding, and installation problems.",
  },
  {
    icon: "mixed",
    title: "Mixed Grade & Finish Supply",
    text: "Combine different grades, finishes, and sheet sizes in one order to simplify stainless steel sourcing.",
  },
  {
    icon: "export",
    title: "Export Packing Experience",
    text: "Sheets are packed with pallets, edge protection, moisture control, and container-ready loading support.",
  },
];
const CUT_TO_LENGTH_APPLICATIONS = [
  {
    title: "Sheet & Plate",
    href: "/products/stainless-steel-sheet",
    image: "/images/capabilities/cut-to-length/applications/sheet-plate.jpg",
    description:
      "For buyers who need stainless steel coil processed into standard or custom sheet sizes before delivery. Suitable for 1000 mm, 1219 mm, 1500 mm, and 1524 mm width requirements.",
  },
  {
    title: "Kitchen Equipment",
    href: "/solutions/applications/kitchen-equipment",
    image: "/images/capabilities/cut-to-length/applications/kitchen-equipment.jpg",
    description:
      "Cut-to-length stainless steel sheets are useful for worktops, cabinets, sinks, splashbacks, and commercial kitchen panels where accurate size and protective film are important.",
  },
  {
    title: "Architecture",
    href: "/solutions/applications/architecture",
    image: "/images/capabilities/cut-to-length/applications/architecture.jpg",
    description:
      "Fixed-size stainless steel panels help facade, ceiling, wall cladding, column cover, and decorative metal projects reduce on-site cutting and improve installation efficiency.",
  },
  {
    title: "Elevator & Interiors",
    href: "/solutions/applications/elevator-decoration",
    image: "/images/capabilities/cut-to-length/applications/elevator-interiors.jpg",
    description:
      "Elevator cabins, interior wall panels, ceilings, and decorative trims often require flat stainless steel sheets with consistent surface direction and film protection before fabrication.",
  },
  {
    title: "Appliance Manufacturing",
    href: "/solutions/applications/kitchen-equipment",
    image: "/images/capabilities/cut-to-length/applications/appliance-manufacturing.jpg",
    description:
      "Appliance buyers need stable sheet dimensions, clean surfaces, and protective packing for refrigerator panels, microwave panels, cooker hoods, and other stainless steel parts.",
  },
];
const FINISH_OPTIONS = [
  {
    name: "8K Mirror Finish",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
    description:
      "High-reflectivity polished stainless steel surface for elevators, luxury interiors, signage, and decorative panels.",
  },
  {
    name: "AFP Anti-Fingerprint Finish",
    href: "/surfaces/stainless-steel-afp-finish",
    description:
      "Nano anti-fingerprint coating for easier cleaning, reduced marks, and better protection on high-touch stainless steel surfaces.",
  },
  {
    name: "No.4 Brushed Finish",
    href: "/surfaces/stainless-steel-no4-brushed-finish",
    description:
      "Uniform directional satin finish for kitchen equipment, appliances, wall panels, and architectural decoration.",
  },
  {
    name: "Hairline Finish",
    href: "/surfaces/stainless-steel-hairline-finish",
    description:
      "Continuous long-grain stainless steel finish for premium elevator cabins, facades, and interior design projects.",
  },
  {
    name: "2B Finish",
    href: "/surfaces/stainless-steel-2b-finish",
    description:
      "Smooth cold-rolled stainless steel surface for laser cutting, bending, welding, polishing, and further coating.",
  },
  {
    name: "BA Finish",
    href: "/surfaces/stainless-steel-ba-finish",
    description:
      "Bright annealed stainless steel finish with clean reflectivity for appliances, kitchenware, trim, and decorative components.",
  },
];

const FINISH_SELECTION_GUIDE = [
  {
    requirement: "High mirror reflection",
    finish: "8K Mirror Finish",
    applications: "Elevators, signage, luxury interiors",
  },
  {
    requirement: "Fingerprint resistance",
    finish: "AFP Anti-Fingerprint",
    applications: "Kitchen panels, appliances, high-touch surfaces",
  },
  {
    requirement: "Uniform satin grain",
    finish: "No.4 Brushed Finish",
    applications: "Kitchen equipment, wall cladding, appliances",
  },
  {
    requirement: "Long decorative grain",
    finish: "Hairline Finish",
    applications: "Elevator cabins, facades, interior panels",
  },
  {
    requirement: "General fabrication",
    finish: "2B Finish",
    applications: "Cutting, bending, welding, polishing",
  },
  {
    requirement: "Bright clean surface",
    finish: "BA Finish",
    applications: "Appliances, trims, kitchenware",
  },
];

const QUALITY_INSPECTION_POINTS = [
  {
    title: "Surface Appearance Check",
    description:
      "Inspect scratches, dents, stains, polishing marks, color tone, and batch-to-batch finish consistency.",
  },
  {
    title: "Gloss & Roughness Control",
    description:
      "Check gloss level and Ra value according to finish type, especially for 8K mirror, No.4 brushed, and hairline stainless steel.",
  },
  {
    title: "Grain Direction Control",
    description:
      "Confirm directional consistency for brushed and hairline finishes to support visual alignment during installation.",
  },
  {
    title: "Film Compatibility Check",
    description:
      "Match PE, PVC, laser film, or AFP-compatible protective film according to surface finish and fabrication route.",
  },
  {
    title: "Export Packing Protection",
    description:
      "Use pallet packing, edge protection, moisture control, and surface separation to reduce shipping damage and quality claims.",
  },
];

const SURFACE_FINISH_APPLICATIONS = [
  {
    title: "Elevator & Interiors",
    href: "/solutions/applications/elevator-decoration",
    image:
      "/images/capabilities/surface-finishing/applications/elevator-interiors.jpg",
    description:
      "Use 8K mirror, AFP, hairline, and brushed stainless steel for elevator cabins, lobby walls, ceilings, trims, and decorative interior panels.",
  },
  {
    title: "Architecture",
    href: "/solutions/applications/architecture",
    image: "/images/capabilities/surface-finishing/applications/architecture.jpg",
    description:
      "Durable stainless steel finishes for facades, columns, cladding, sculptures, and commercial interiors requiring stable appearance and long service life.",
  },
  {
    title: "Kitchen Equipment",
    href: "/solutions/applications/kitchen-equipment",
    image:
      "/images/capabilities/surface-finishing/applications/kitchen-equipment.jpg",
    description:
      "No.4 brushed, AFP, 2B, and BA finishes for worktops, cabinets, sinks, splashbacks, and commercial kitchen equipment.",
  },
  {
    title: "Food & Beverage",
    href: "/solutions/applications/food-beverage",
    image:
      "/images/capabilities/surface-finishing/applications/food-beverage.jpg",
    description:
      "Cleanable 2B, BA, and brushed stainless steel surfaces for food processing, preparation areas, sanitary equipment, and visible machine housings.",
  },
  {
    title: "Retail Display & Signage",
    href: "/solutions/applications/architecture",
    image:
      "/images/capabilities/surface-finishing/applications/retail-display-signage.jpg",
    description:
      "Mirror, colored, and AFP stainless steel finishes for display shelves, signage, counters, feature walls, and branded retail spaces.",
  },
  {
    title: "Appliance Manufacturing",
    href: "/solutions/applications/kitchen-equipment",
    image:
      "/images/capabilities/surface-finishing/applications/appliance-manufacturing.jpg",
    description:
      "BA, No.4, AFP, and 2B stainless steel for refrigerator panels, microwave panels, cooker hoods, trims, and appliance parts.",
  },
];

const SURFACE_FINISH_RELATED_ARTICLES = [
  {
    title: "How to Choose Stainless Steel Surface Finishes",
    href: "/knowledge-base/architectural-ss-surface-selection",
    image:
      "/images/capabilities/surface-finishing/applications/architecture.jpg",
    excerpt:
      "A buyer-focused guide to matching stainless steel finishes with architecture, elevator interiors, appliances, fabrication, and maintenance requirements.",
  },
  {
    title: "No.4 vs Hairline Finish",
    href: "/knowledge-base/no4-vs-hairline-finish",
    image:
      "/images/capabilities/surface-finishing/applications/elevator-interiors.jpg",
    excerpt:
      "Compare brushed No.4 and hairline stainless steel finishes by grain direction, visual consistency, application fit, and inspection points.",
  },
  {
    title: "2B vs BA Surface Finish",
    href: "/knowledge-base/2b-vs-ba-surface-finish",
    image:
      "/images/capabilities/surface-finishing/applications/appliance-manufacturing.jpg",
    excerpt:
      "Understand when to choose 2B or BA stainless steel for forming, polishing, appliance panels, bright surfaces, and downstream processing.",
  },
];

const CUT_TO_LENGTH_RELATED_ARTICLES = [
  {
    title: "What Stainless Steel Sheet Sizes and Thicknesses Are Actually Stocked?",
    href: "/knowledge-base/stainless-steel-sheet-sizes",
    image: "/images/capabilities/cut-to-length/applications/sheet-plate.jpg",
    excerpt:
      "Review stocked stainless steel sheet sizes, common widths, thickness ranges, and planning notes before confirming cut-to-length orders.",
  },
  {
    title: "Which Tolerance Wording Actually Protects a Stainless Steel PO?",
    href: "/knowledge-base/stainless-steel-tolerance-contract-terms",
    image: "/images/capabilities/cut-to-length/hero.webp",
    excerpt:
      "Learn how to write tolerance, flatness, measurement method, and remedy terms clearly before stainless sheet production starts.",
  },
  {
    title: "Which Five-Second Packing Step Saves Stainless Sheet Claims?",
    href: "/knowledge-base/the-one-step-most-export-sheet-packaging-skips",
    image: "/images/capabilities/cut-to-length/gallery-1.webp",
    excerpt:
      "See why face direction, top and bottom sheet protection, and packing checks matter for cut-to-length stainless sheet export orders.",
  },
];

const SLITTING_EDGING_RELATED_ARTICLES = [
  {
    title: "Which Thickness Tolerance Standard Does My Application Need?",
    href: "/knowledge-base/stainless-steel-thickness-tolerance-standards",
    image: "/images/capabilities/slitting-edging/applications/precision-strip-hardware.jpg",
    excerpt:
      "Compare ASTM A480, EN 10088-2, GB/T 3280, and ISO 9445 when stainless steel strip, slit coil, and precision tolerance requirements need to be written clearly.",
  },
  {
    title: "What Is Cold-Rolled Stainless Steel?",
    href: "/knowledge-base/what-is-cold-rolling-stainless-steel",
    image: "/images/capabilities/slitting-edging/applications/appliance-parts.jpg",
    excerpt:
      "Understand how cold rolling affects gauge control, surface finish, temper, slit strip behavior, and downstream fabrication choices.",
  },
  {
    title: "How Do I Spec a Stainless Steel Tube Correctly?",
    href: "/knowledge-base/stainless-steel-tube-specifications",
    image: "/images/capabilities/slitting-edging/applications/tube-pipe-production.jpg",
    excerpt:
      "Review tube and pipe order language before using slit coil feedstock for welded tube production, OD control, wall thickness, and inspection requirements.",
  },
];

const PROTECTIVE_COATING_RELATED_ARTICLES = [
  {
    title: "When Is AFP Over Mirror Worth It?",
    href: "/knowledge-base/afp-over-mirror-when-worth-it",
    image: "/images/blog/afp-over-mirror-hero.jpg",
    excerpt:
      "A buyer-focused guide to deciding when AFP anti-fingerprint coating adds real value over mirror stainless steel in high-touch surfaces.",
  },
  {
    title: "How Should Buyers Specify PVD Colored Stainless Steel?",
    href: "/solutions/capabilities/protective-coating",
    image: "/images/blog/pvd-colored-hero.jpg",
    excerpt:
      "Learn why PVD colored stainless steel should be ordered as a full stack: substrate, base finish, color sample, fabrication route, and protective film.",
  },
  {
    title: "What Does Delta E Mean for Coated Stainless Steel?",
    href: "/knowledge-base/delta-e-2-what-afp-lot-to-lot-colour-consistency-means",
    image: "/images/capabilities/protective-coating/decisions/pvd-color-brand-effect.jpg",
    excerpt:
      "Understand Delta E, lot-to-lot color consistency, approved samples, and visual acceptance for AFP and coated stainless steel panels.",
  },
];

const PROTECTIVE_FILM_RELATED_ARTICLES = [
  {
    title: "How to Pack Mirror Stainless Steel So It Survives Shipment",
    href: "/knowledge-base/mirror-finish-packaging-scratch-prevention",
    image: "/images/blog/mirror-packaging-hero.jpg",
    excerpt:
      "Review protective film, face direction, stacking, pallet support, and export packing details that help mirror stainless steel survive shipment.",
  },
  {
    title: "No.4 vs Hairline Finish",
    href: "/knowledge-base/no4-vs-hairline-finish",
    image: "/images/blog/no4-hairline-hero.jpg",
    excerpt:
      "Compare brushed No.4 and hairline stainless steel finishes by grain direction, visual consistency, handling risk, and protective film needs.",
  },
  {
    title: "Laser Cutting Stainless Steel",
    href: "/solutions/capabilities/surface-finish-capability",
    image: "/images/blog/laser-cut-edge-route-hero.jpg",
    excerpt:
      "Understand how laser cutting route, edge expectation, assist gas, film behavior, and downstream fabrication affect stainless steel sheet orders.",
  },
];

function CapabilityBreadcrumbBar({ title }: { title: string }) {
  return (
    <div className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <nav className="flex min-w-0 items-center gap-2 overflow-hidden whitespace-nowrap text-[0.82rem] text-slate-500">
          <Link href="/" className="shrink-0 transition-colors hover:text-text-primary">
            Home
          </Link>
          <span className="flex shrink-0 items-center gap-2">
            <span className="shrink-0">/</span>
            <Link
              href="/solutions"
              className="shrink-0 transition-colors hover:text-text-primary"
            >
              Solutions
            </Link>
          </span>
          <span className="flex shrink-0 items-center gap-2">
            <span className="shrink-0">/</span>
            <Link
              href="/solutions/capabilities"
              className="shrink-0 transition-colors hover:text-text-primary"
            >
              Capabilities
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

function QualityInspectionPoints() {
  return (
    <section className="bg-[#f5efe3] px-4 py-14 sm:px-6 lg:px-8 lg:py-[4.5rem]">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.66fr)_minmax(18rem,0.34fr)] lg:items-center">
        <ol className="grid gap-2.5">
          {QUALITY_INSPECTION_POINTS.map((point, index) => (
            <li
              key={point.title}
              tabIndex={0}
              className="group grid min-h-[3.65rem] grid-cols-[3.75rem_1fr] overflow-hidden border border-[#e0b72b] bg-[#f6d044] shadow-[0_12px_32px_rgba(13,20,27,0.045)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(13,20,27,0.1)] focus:-translate-y-0.5 focus:outline-none focus:shadow-[0_16px_38px_rgba(13,20,27,0.1)]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <span className="text-[0.76rem] font-semibold uppercase tracking-[0.12em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="px-4 py-3">
                <h3 className="text-[0.9rem] font-semibold leading-5 text-[#111820]">
                  {point.title}
                </h3>
                <p className="max-h-0 overflow-hidden text-sm leading-6 text-[#5f6872] opacity-0 transition-all duration-200 group-hover:mt-1 group-hover:max-h-24 group-hover:opacity-100 group-focus:mt-1 group-focus:max-h-24 group-focus:opacity-100">
                  {point.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div>
          <h2 className="whitespace-nowrap text-[1.82rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111820] sm:text-[2.2rem] lg:text-[2.28rem]">
            Quality Inspection Points
          </h2>
          <p className="mt-5 text-[0.98rem] leading-8 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820]">
            Surface finishing quality depends on consistency, not only appearance. Jinling checks stainless steel surface finish uniformity, gloss level, roughness, grain direction, protective film adhesion, and packing protection before shipment.
          </p>
        </div>
      </div>
    </section>
  );
}

function SurfaceFinishingRelatedArticles() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-6rem)] gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
          <div>
            <h2 className="max-w-[8.5em] text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
            Related articles
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {SURFACE_FINISH_RELATED_ARTICLES.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={article.image}
                  alt={`${article.title} stainless steel surface finish article`}
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
                  {article.title}
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

function CutToLengthRelatedArticles() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-6rem)] gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
          <div>
            <h2 className="max-w-[8.5em] text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
              Related articles
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {CUT_TO_LENGTH_RELATED_ARTICLES.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={article.image}
                  alt={`${article.title} cut-to-length stainless steel article`}
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
                    {article.title}
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

function SlittingEdgingRelatedArticles() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-6rem)] gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
          <div>
            <h2 className="max-w-[8.5em] text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
              Related articles
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {SLITTING_EDGING_RELATED_ARTICLES.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={article.image}
                  alt={`${article.title} stainless steel slitting and edging article`}
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
                    {article.title}
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

function ProtectiveCoatingRelatedArticles() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-6rem)] gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
          <div>
            <h2 className="max-w-[8.5em] text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
              Related articles
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {PROTECTIVE_COATING_RELATED_ARTICLES.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={article.image}
                  alt={`${article.title} stainless steel protective coating article`}
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
                    {article.title}
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
function ProtectiveFilmRelatedArticles() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-6rem)] gap-8 lg:grid-cols-[0.34fr_0.66fr] lg:items-center">
          <div>
            <h2 className="max-w-[8.5em] text-[2.05rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.8rem]">
              Related articles
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {PROTECTIVE_FILM_RELATED_ARTICLES.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={article.image}
                  alt={`${article.title} stainless steel protective film article`}
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
                    {article.title}
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

function ProtectiveCoatingDecisionSection() {
  return (
    <section className="bg-[#f5efe4] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:min-h-[calc(50vh-6rem)] lg:grid-cols-[minmax(0,0.66fr)_minmax(18rem,0.34fr)] lg:items-center">
        <div className="grid gap-3 sm:grid-cols-3">
          {PROTECTIVE_COATING_DECISIONS.map((decision) => (
            <StaticOrLinkedCard
              key={decision.title}
              href={decision.href}
              disabled={"disabled" in decision && decision.disabled}
              className="group relative isolate block w-full overflow-hidden border border-[#d8b94a] bg-[#101820] shadow-[0_16px_34px_rgba(13,20,27,0.12)] outline-none transition duration-300 hover:z-10 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(13,20,27,0.18)] focus-visible:z-10 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src={decision.image}
                alt={`${decision.route} stainless steel protective coating decision`}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 90vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.12] group-focus-visible:scale-[1.12]"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.76)_0%,rgba(13,20,27,0.08)_34%,rgba(13,20,27,0.78)_100%)]"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 top-0 z-10 p-3 text-center">
                <p className="text-[0.68rem] font-semibold uppercase leading-4 tracking-[0.12em] text-[#f6d044]">
                  {decision.route}
                </p>
                <h3 className="mt-1 text-[0.76rem] font-semibold leading-4 text-white sm:text-[0.82rem] lg:text-[0.68rem] xl:text-[0.78rem]">
                  {decision.title}
                </h3>
              </div>
              <div className="absolute inset-0 z-20 flex translate-y-3 items-center justify-center bg-[#101820]/90 px-3 text-left opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:px-3.5">
                <div className="w-full max-w-[9.4rem]">
                  <p className="text-[0.66rem] font-semibold uppercase leading-4 tracking-[0.12em] text-[#f6d044]">
                    {decision.route}
                  </p>
                  <h3 className="mt-1 text-[0.78rem] font-semibold leading-4 text-white sm:text-[0.84rem] lg:text-[0.68rem] xl:text-[0.78rem]">
                    {decision.title}
                  </h3>
                  <p className="mt-2 text-[0.62rem] font-medium leading-[1.42] text-white/78 sm:text-[0.66rem] lg:text-[0.56rem] xl:text-[0.64rem]">
                    {decision.description}
                  </p>
                  {"disabled" in decision && decision.disabled ? null : (
                    <span className="mt-3 inline-flex min-h-8 items-center bg-[#f6d044] px-3 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#101820] transition group-hover:bg-[#f2c820]">
                      Read More
                    </span>
                  )}
                </div>
              </div>
            </StaticOrLinkedCard>
          ))}
        </div>
        <div>
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.35rem]">
            When Does Protective Coating Make Sense?
          </h2>
          <p className="mt-5 text-[0.96rem] leading-8 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.05rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820]">
            Protective coating makes sense when stainless steel sheet or coil needs anti-fingerprint performance, PVD color effect, coating-safe protective film, or a confirmed fabrication route. Jinling helps buyers match AFP anti-fingerprint coating, PVD colored stainless steel, base finish, sample approval, bending route, cutting route, and export packing so coated stainless steel panels are easier to clean, handle, fabricate, and install.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProtectiveCoatingRouteComparisonSection() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 lg:min-h-[calc(50vh-6rem)] lg:grid-cols-[minmax(18rem,0.34fr)_minmax(0,0.66fr)] lg:items-center">
        <div>
          <h2 className="text-[1.72rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111820] sm:text-[2rem] lg:text-[2.08rem]">
            AFP vs PVD: Which Route Fits Your Project?
          </h2>
          <p className="mt-5 text-[0.95rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.05rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820]">
            AFP anti-fingerprint coating and PVD colored stainless steel solve different surface problems. AFP is usually selected for fingerprint control, easier cleaning, and high-touch stainless steel panels, while PVD is chosen for decorative color, brand effect, and interior design impact. Jinling helps buyers compare AFP coating, PVD coating, base finish, grade selection, protective film, fabrication route, and service environment before confirming coated stainless steel sheet or coil orders.
          </p>
        </div>
        <div className="overflow-hidden border border-[#d8cbb8] bg-[#101820] shadow-[0_18px_44px_rgba(13,20,27,0.08)]">
          <div className="border-b border-[#2a3137] px-5 py-4 text-center">
            <div className="flex items-center justify-center gap-3 text-[#f6d044]">
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
              <p className="text-[0.95rem] font-semibold uppercase tracking-[0.16em]">
                Route comparison
              </p>
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1 text-[0.72rem] text-white/68">
              Protective coating route selection for stainless steel surfaces
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[35rem] border-collapse text-left text-[0.78rem]">
              <thead>
                <tr className="bg-[#f6d044] text-[#111820]">
                  <th className="w-[34%] whitespace-nowrap border-r border-[#c9a916] px-4 py-3 text-center font-semibold uppercase tracking-[0.06em]">
                    Buyer Need
                  </th>
                  <th className="w-[28%] whitespace-nowrap border-r border-[#c9a916] px-4 py-3 text-center font-semibold uppercase tracking-[0.06em]">
                    AFP
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-center font-semibold uppercase tracking-[0.06em]">
                    PVD
                  </th>
                </tr>
              </thead>
              <tbody>
                {PROTECTIVE_COATING_ROUTE_COMPARISON.map((row) => (
                  <tr key={row.buyerNeed} className="border-t border-[#2b3137] text-white">
                    <td className="border-r border-[#2b3137] px-4 py-2.5 font-semibold text-white">
                      {row.buyerNeed}
                    </td>
                    <td className="border-r border-[#2b3137] px-4 py-2.5 text-white/86">
                      {row.afp}
                    </td>
                    <td className="px-4 py-2.5 text-white/78">
                      {row.pvd}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProtectiveCoatingApplicationsSection() {
  return (
    <section className="bg-[#f5efe4] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-7 lg:grid-cols-[minmax(0,1.16fr)_minmax(18rem,18rem)] lg:items-center">
        <div className="order-2 grid min-w-0 grid-cols-2 gap-2.5 sm:grid-cols-5 lg:order-1 lg:gap-3">
          {PROTECTIVE_COATING_APPLICATIONS.map((application) => (
            <StaticOrLinkedCard
              key={application.title}
              href={application.href}
              disabled={"disabled" in application && application.disabled}
              className="group relative isolate block w-full overflow-hidden border border-[#d8b94a] bg-[#101820] shadow-[0_16px_34px_rgba(13,20,27,0.12)] outline-none transition duration-300 hover:z-10 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(13,20,27,0.18)] focus-visible:z-10 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src={application.image}
                alt={`${application.title} protective coating stainless steel application`}
                fill
                sizes="(min-width: 1024px) 14vw, (min-width: 640px) 18vw, 45vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.12] group-focus-visible:scale-[1.12]"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.74)_0%,rgba(13,20,27,0.1)_34%,rgba(13,20,27,0.78)_100%)]"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 top-0 z-10 p-2.5 text-center sm:p-3">
                <h3 className="text-[0.7rem] font-semibold leading-4 tracking-[0.01em] text-white sm:text-[0.76rem] lg:text-[0.64rem] xl:text-[0.74rem]">
                  {application.title}
                </h3>
              </div>
              <div className="absolute inset-0 z-20 flex translate-y-3 items-center justify-center bg-[#101820]/90 px-3 text-left opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:px-3.5">
                <div className="w-full max-w-[9.5rem]">
                  <h3 className="text-[0.76rem] font-semibold leading-4 text-white sm:text-[0.82rem] lg:text-[0.66rem] xl:text-[0.76rem]">
                    {application.title}
                  </h3>
                  <p className="mt-2 text-[0.62rem] font-medium leading-[1.42] text-white/78 sm:text-[0.66rem] lg:text-[0.56rem] xl:text-[0.64rem]">
                    {application.description}
                  </p>
                  {"disabled" in application && application.disabled ? null : (
                    <span className="mt-3 inline-flex min-h-8 items-center bg-[#f6d044] px-3 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#101820] transition group-hover:bg-[#f2c820]">
                      Read More
                    </span>
                  )}
                </div>
              </div>
            </StaticOrLinkedCard>
          ))}
        </div>
        <div className="order-1 flex min-w-0 flex-col justify-center lg:order-2 lg:pl-4">
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.35rem]">
            Where Protective Coating Works Best
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] sm:text-[0.96rem]">
            Protective coating works best on stainless steel panels where appearance, fingerprints, color consistency, cleaning frequency, and handling protection decide the buyer&apos;s final acceptance. Jinling supports AFP anti-fingerprint stainless steel, PVD colored stainless steel, decorative coated panels, appliance panels, elevator interiors, architectural surfaces, protective film matching, and export packing for visible stainless steel projects.
          </p>
        </div>
      </div>
    </section>
  );
}

function SurfaceFinishApplications() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-[4.5rem]">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(18rem,0.82fr)] lg:items-center">
        <div className="grid gap-3 sm:grid-cols-3">
          {SURFACE_FINISH_APPLICATIONS.map((application) => (
            <Link
              key={application.title}
              href={application.href}
              className="group relative isolate block w-full overflow-hidden border border-[#d8b94a] bg-[#101820] shadow-[0_16px_34px_rgba(13,20,27,0.12)] outline-none transition duration-300 hover:z-10 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(13,20,27,0.18)] focus-visible:z-10 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src={application.image}
                alt={`${application.title} stainless steel surface finish application`}
                fill
                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 30vw, 90vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.12] group-focus-visible:scale-[1.12]"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.74)_0%,rgba(13,20,27,0.12)_34%,rgba(13,20,27,0.72)_100%)]"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 top-0 z-10 p-2.5 text-center sm:p-3">
                <h3 className="whitespace-nowrap text-[0.7rem] font-semibold leading-4 tracking-[0.01em] text-white sm:text-[0.78rem] lg:text-[0.66rem] xl:text-[0.76rem]">
                  {application.title}
                </h3>
              </div>
              <div className="absolute inset-0 z-20 flex translate-y-3 items-center justify-center bg-[#101820]/90 px-3 text-left opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:px-3.5">
                <div className="w-full max-w-[9.25rem]">
                  <h3 className="whitespace-nowrap text-[0.76rem] font-semibold leading-4 text-white sm:text-[0.84rem] lg:text-[0.68rem] xl:text-[0.78rem]">
                    {application.title}
                  </h3>
                  <p className="mt-2 text-[0.62rem] font-medium leading-[1.42] text-white/78 sm:text-[0.66rem] lg:text-[0.58rem] xl:text-[0.64rem]">
                    {application.description}
                  </p>
                  <span className="mt-3 inline-flex min-h-8 items-center bg-[#f6d044] px-3 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#101820] transition group-hover:bg-[#f2c820]">
                    Read more
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <h2 className="max-w-md text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111820] sm:text-[2.4rem]">
            Surface Finish Applications
          </h2>
          <p className="mt-5 text-[0.98rem] leading-8 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820]">
            Jinling stainless steel surface finishes are used in decorative, architectural, appliance, kitchen, food equipment, and fabrication projects where surface appearance and long-term performance matter.
          </p>
        </div>
      </div>
    </section>
  );
}

function FinishSelectionGuide() {
  return (
    <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-[4.5rem]">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(18rem,0.78fr)_minmax(0,1.22fr)] lg:items-center">
        <div>
          <h2 className="max-w-md text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111820] sm:text-[2.4rem]">
            Finish Selection Guide
          </h2>
          <p className="mt-5 text-[0.98rem] leading-8 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820]">
            Different stainless steel finishes perform differently in appearance, maintenance, forming, and surface protection. This guide helps buyers select the right finish before confirming grade, thickness, protective film, and packing method.
          </p>
        </div>
        <div className="overflow-hidden border border-[#d8cbb8] bg-[#101820] shadow-[0_18px_44px_rgba(13,20,27,0.08)]">
          <div className="border-b border-[#2a3137] px-5 py-4 text-center">
            <div className="flex items-center justify-center gap-3 text-[#f6d044]">
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
              <p className="text-[0.95rem] font-semibold uppercase tracking-[0.16em]">
                Selection guide
              </p>
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1 text-[0.72rem] text-white/68">
              Stainless steel finish matching for surface appearance and fabrication route
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[35rem] border-collapse text-left text-[0.78rem]">
              <thead>
                <tr className="bg-[#f6d044] text-[#111820]">
                  <th className="w-[30%] whitespace-nowrap border-r border-[#c9a916] px-4 py-3 text-center font-semibold uppercase tracking-[0.06em]">
                    Buyer Requirement
                  </th>
                  <th className="w-[30%] whitespace-nowrap border-r border-[#c9a916] px-4 py-3 text-center font-semibold uppercase tracking-[0.06em]">
                    Recommended Finish
                  </th>
                  <th className="whitespace-nowrap px-4 py-3 text-center font-semibold uppercase tracking-[0.06em]">
                    Typical Applications
                  </th>
                </tr>
              </thead>
              <tbody>
                {FINISH_SELECTION_GUIDE.map((row) => (
                  <tr key={row.requirement} className="border-t border-[#2b3137] text-white">
                    <td className="border-r border-[#2b3137] px-4 py-2.5 font-semibold text-white">
                      {row.requirement}
                    </td>
                    <td className="whitespace-nowrap border-r border-[#2b3137] px-4 py-2.5 text-white/86">
                      {row.finish}
                    </td>
                    <td className="px-4 py-2.5 text-white/78">{row.applications}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function SurfaceFinishOptions() {
  return (
    <section className="bg-[#f5efe3] px-4 py-14 sm:px-6 lg:px-8 lg:py-[4.5rem]">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)] lg:items-center">
        <div className="border border-[#d8cbb8] bg-[#fffaf1] p-4 shadow-[0_18px_44px_rgba(13,20,27,0.055)] sm:p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            {FINISH_OPTIONS.map((finish, index) => (
              <Link
                key={finish.href}
                href={finish.href}
                className={`group flex min-h-[5.35rem] flex-col justify-between border border-[#d8cbb8] px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-[#f6d044] hover:shadow-[0_14px_28px_rgba(13,20,27,0.08)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044] ${
                  [0, 3, 4].includes(index)
                    ? "bg-[#f6d044] text-[#111820]"
                    : "bg-[#101820] text-white"
                }`}
              >
                <span className="text-[0.94rem] font-semibold leading-5">
                  {finish.name}
                </span>
                <span
                  className={`mt-2 max-h-0 overflow-hidden text-[0.78rem] leading-5 opacity-0 transition-all duration-300 group-hover:max-h-28 group-hover:opacity-100 group-focus-visible:max-h-28 group-focus-visible:opacity-100 ${
                    index % 2 === 0 ? "text-[#25313a]" : "text-white/76"
                  }`}
                >
                  {finish.description}
                </span>
                <span
                  className={`mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] opacity-70 ${
                    [0, 3, 4].includes(index) ? "text-[#111820]" : "text-[#f6d044]"
                  }`}
                >
                  Click to view finish
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="max-w-md text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111820] sm:text-[2.45rem]">
            Available surface
            <br />
            finish options
          </h2>
          <p className="mt-5 text-[0.98rem] leading-8 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820]">
            Compare stainless steel surface finishes by reflectivity, grain direction, fingerprint resistance, forming route, and final application. Jinling helps buyers select mirror polished stainless steel, brushed stainless steel, hairline panels, 2B substrate, BA finish, or AFP coated materials before cutting, fabrication, protective film, and export packing.
          </p>
        </div>
      </div>
    </section>
  );
}


function CutToLengthRangeSection() {
  return (
    <section className="bg-[#f5efe4] px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.66fr)_minmax(18rem,0.34fr)] lg:items-center">
        <div className="overflow-hidden border border-[#d8c8ad] bg-[#101010] shadow-[0_18px_44px_rgba(17,24,32,0.11)]">
          <div className="bg-[#101010] px-6 py-4 text-center">
            <div className="flex items-center justify-center gap-3 text-[#f6d044]">
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
                Specifications
              </h3>
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs font-medium text-white/72">
              Stainless steel coil-to-sheet processing range
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#f6d044] text-[#111820]">
                <th className="w-[32%] border-r border-[#cfae2f] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]">
                  Item
                </th>
                <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]">
                  Processing Range
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/88">
              {CUT_TO_LENGTH_RANGE.map((row) => (
                <tr key={row.item}>
                  <th className="border-r border-white/10 px-5 py-3 text-center text-sm font-semibold text-white">
                    {row.item}
                  </th>
                  <td className="px-5 py-3 text-sm leading-6 text-white/84">
                    {row.range}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="whitespace-nowrap text-[1.72rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111820] sm:text-[2rem] lg:text-[2.08rem]">
            Cut-to-Length Range
          </h2>
          <p className="mt-5 text-[0.98rem] leading-8 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820]">
            Our stainless steel cut-to-length line is designed for flexible order requirements, from standard sheet sizes to project-specific panel lengths. Buyers can choose material grade, thickness, width, surface finish, protective film, and packing method before cutting, reducing secondary processing time after delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
function SlittingEdgingRangeSection() {
  return (
    <section className="bg-[#f5efe4] px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.66fr)_minmax(18rem,0.34fr)] lg:items-center">
        <div className="overflow-hidden border border-[#d8c8ad] bg-[#101010] shadow-[0_18px_44px_rgba(17,24,32,0.11)]">
          <div className="bg-[#101010] px-6 py-4 text-center">
            <div className="flex items-center justify-center gap-3 text-[#f6d044]">
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
                Specifications
              </h3>
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs font-medium text-white/72">
              Stainless steel coil slitting and edge finishing range
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#f6d044] text-[#111820]">
                <th className="w-[32%] border-r border-[#cfae2f] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]">
                  Item
                </th>
                <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]">
                  Processing Range
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/88">
              {SLITTING_EDGING_RANGE.map((row) => (
                <tr key={row.item}>
                  <th className="border-r border-white/10 px-5 py-3 text-center text-sm font-semibold text-white">
                    {row.item}
                  </th>
                  <td className="px-5 py-3 text-sm leading-6 text-white/84">
                    {row.range}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="whitespace-nowrap text-[1.72rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111820] sm:text-[2rem] lg:text-[2.08rem]">
            Slitting &amp; Edging Range
          </h2>
          <p className="mt-5 text-[0.98rem] leading-8 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820]">
            Slitting and edging should be confirmed by material form, thickness, slit width, coil ID, edge route, finish protection, and packing method together. Jinling sets the final width control according to thickness, target width, edge condition, and purchase order requirements, so slit stainless steel coils can run more smoothly in tube mills, roll forming, stamping, appliance parts, and narrow-strip fabrication.
          </p>
        </div>
      </div>
    </section>
  );
}
function SlittingEdgingApplicationSection() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-7 lg:grid-cols-[minmax(0,1.16fr)_minmax(18rem,18rem)] lg:items-center">
        <div className="order-2 grid min-w-0 grid-cols-2 gap-2.5 sm:grid-cols-5 lg:order-1 lg:gap-3">
          {SLITTING_EDGING_APPLICATIONS.map((application) => (
            <Link
              key={application.title}
              href={application.href}
              className="group relative isolate block w-full overflow-hidden border border-[#d8b94a] bg-[#101820] shadow-[0_16px_34px_rgba(13,20,27,0.12)] outline-none transition duration-300 hover:z-10 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(13,20,27,0.18)] focus-visible:z-10 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src={application.image}
                alt={`${application.title} stainless steel slitting and edging application`}
                fill
                sizes="(min-width: 1024px) 14vw, (min-width: 640px) 18vw, 45vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.12] group-focus-visible:scale-[1.12]"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.72)_0%,rgba(13,20,27,0.1)_34%,rgba(13,20,27,0.76)_100%)]"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 top-0 z-10 p-2.5 text-center sm:p-3">
                <h3 className="text-[0.72rem] font-semibold leading-4 tracking-[0.01em] text-white sm:text-[0.78rem] lg:text-[0.66rem] xl:text-[0.76rem]">
                  {application.title}
                </h3>
              </div>
              <div className="absolute inset-0 z-20 flex translate-y-3 items-center justify-center bg-[#101820]/90 px-3 text-left opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:px-3.5">
                <div className="w-full max-w-[9.5rem]">
                  <h3 className="text-[0.78rem] font-semibold leading-4 text-white sm:text-[0.84rem] lg:text-[0.68rem] xl:text-[0.78rem]">
                    {application.title}
                  </h3>
                  <p className="mt-2 text-[0.62rem] font-medium leading-[1.42] text-white/78 sm:text-[0.66rem] lg:text-[0.56rem] xl:text-[0.64rem]">
                    {application.description}
                  </p>
                  <span className="mt-3 inline-flex min-h-8 items-center bg-[#f6d044] px-3 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#101820] transition group-hover:bg-[#f2c820]">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="order-1 flex min-w-0 flex-col justify-center lg:order-2 lg:pl-4">
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
            When Do Buyers Need Slitting &amp; Edging?
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] sm:text-[0.96rem]">
            Choose stainless steel slitting and edging when your downstream process needs narrow strip, controlled width, cleaner edges, stable rewind, surface protection, and packing that keeps slit coils ready for appliance parts, decorative profiles, elevator interiors, tube production, precision hardware, and repeated feeding lines.
          </p>
        </div>
      </div>
    </section>
  );
}
function SlittingEdgingControlSection() {
  return (
    <section className="bg-[#f5efe4] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 lg:min-h-[calc(50vh-6rem)] lg:grid-cols-[minmax(18rem,0.34fr)_minmax(0,0.66fr)] lg:items-center">
        <div>
          <h2 className="text-[1.72rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111820] sm:text-[2rem] lg:text-[2.08rem]">
            Width &amp; Edge Control
          </h2>
          <p className="mt-5 text-[0.95rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.05rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820]">
            Slitting quality is decided by more than the target strip width. Jinling checks width tolerance, burr direction, edge smoothness, coil winding, and surface protection together, so stainless steel strip can feed more steadily into stamping, roll forming, tube production, hardware fabrication, and visible trim work.
          </p>
        </div>
        <div className="overflow-hidden border border-[#d8c8ad] bg-[#101010] shadow-[0_18px_44px_rgba(17,24,32,0.11)]">
          <div className="bg-[#101010] px-5 py-3.5 text-center">
            <div className="flex items-center justify-center gap-3 text-[#f6d044]">
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.18em]">
                Release control table
              </h3>
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-[0.68rem] font-medium text-white/72">
              What is checked before slit coils are packed
            </p>
          </div>
          <div className="grid grid-cols-[0.86fr_1.2fr_1.08fr] bg-[#f6d044] text-center text-[0.62rem] font-semibold uppercase leading-4 tracking-[0.08em] text-[#111820] sm:text-[0.68rem]">
            <div className="border-r border-[#cfae2f] px-2 py-2.5">
              Control Point
            </div>
            <div className="border-r border-[#cfae2f] px-2 py-2.5">
              What Jinling Checks
            </div>
            <div className="px-2 py-2.5">
              Buyer Benefit
            </div>
          </div>
          <div className="divide-y divide-white/10 text-[0.7rem] leading-5 text-white/84 sm:text-[0.74rem] lg:text-[0.72rem] xl:text-[0.76rem]">
            {SLITTING_EDGING_CONTROL_POINTS.map((row) => (
              <div
                key={row.controlPoint}
                className="grid grid-cols-[0.86fr_1.2fr_1.08fr]"
              >
                <div className="flex items-center justify-center border-r border-white/10 px-2.5 py-2.5 text-center font-semibold leading-5 text-white">
                  {row.controlPoint}
                </div>
                <div className="border-r border-white/10 px-2.5 py-2.5">
                  {row.jinlingChecks}
                </div>
                <div className="px-2.5 py-2.5 text-white/78">
                  {row.buyerBenefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function CutToLengthToleranceSection() {
  return (
    <section className="bg-[#f5efe4] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 lg:min-h-[calc(50vh-6rem)] lg:grid-cols-[minmax(18rem,0.34fr)_minmax(0,0.66fr)] lg:items-center">
        <div>
          <h2 className="text-[1.72rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111820] sm:text-[2rem] lg:text-[2.08rem]">
            Tolerance &amp; Flatness Control
          </h2>
          <p className="mt-5 text-[0.95rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.05rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820]">
            Cut-to-length quality is not only the final sheet size. Jinling controls length tolerance, flatness after leveling, burr condition, surface protection, stacking direction, and export packing together, so stainless steel sheets arrive ready for laser cutting, bending, panel fabrication, and visible-surface use.
          </p>
        </div>
        <div className="overflow-hidden border border-[#d8c8ad] bg-[#101010] shadow-[0_18px_44px_rgba(17,24,32,0.11)]">
          <div className="bg-[#101010] px-5 py-3.5 text-center">
            <div className="flex items-center justify-center gap-3 text-[#f6d044]">
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-[0.78rem] font-semibold uppercase tracking-[0.18em]">
                Release control table
              </h3>
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-[0.68rem] font-medium text-white/72">
              What is checked before cut sheets are packed
            </p>
          </div>
          <div className="grid grid-cols-[0.86fr_1.2fr_1.08fr] bg-[#f6d044] text-center text-[0.62rem] font-semibold uppercase leading-4 tracking-[0.08em] text-[#111820] sm:text-[0.68rem]">
            <div className="border-r border-[#cfae2f] px-2 py-2.5">
              Control Point
            </div>
            <div className="border-r border-[#cfae2f] px-2 py-2.5">
              What Jinling Checks
            </div>
            <div className="px-2 py-2.5">
              Buyer Benefit
            </div>
          </div>
          <div className="divide-y divide-white/10 text-[0.7rem] leading-5 text-white/84 sm:text-[0.74rem] lg:text-[0.72rem] xl:text-[0.76rem]">
            {CUT_TO_LENGTH_RELEASE_CONTROLS.map((row) => (
              <div
                key={row.controlPoint}
                className="grid grid-cols-[0.86fr_1.2fr_1.08fr]"
              >
                <div className="flex items-center justify-center border-r border-white/10 px-2.5 py-2.5 text-center font-semibold leading-5 text-white">
                  {row.controlPoint}
                </div>
                <div className="border-r border-white/10 px-2.5 py-2.5">
                  {row.jinlingChecks}
                </div>
                <div className="px-2.5 py-2.5 text-white/78">
                  {row.buyerBenefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function CutToLengthWhyChooseJinlingSection() {
  return (
    <section className="flex bg-white px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:items-center lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
        <ul className="grid gap-2.5">
          {CUT_TO_LENGTH_ADVANTAGES.map((point) => (
            <li
              key={point.title}
              className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <CutToLengthAdvantageIcon type={point.icon} />
              </div>
              <div className="px-4 py-3">
                <h3 className="text-[0.78rem] font-semibold uppercase leading-5 tracking-[0.08em] text-[#d9a900]">
                  {point.title}
                </h3>
                <p className="mt-1 text-sm font-semibold leading-6 text-[#111820]">
                  {point.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="min-w-0">
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Why choose us?
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#111820] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] first-letter:uppercase">
            Jinling Steel supports stainless steel cut-to-length orders with stable material sourcing, surface finish matching, flexible processing, and export-ready packing. From standard sheet stock to customized project panels, we help buyers reduce sourcing complexity and receive stainless steel sheets prepared for immediate fabrication.
          </p>
        </div>
      </div>
    </section>
  );
}
function SlittingEdgingWhyChooseJinlingSection() {
  return (
    <section className="flex bg-white px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:items-center lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
        <ul className="grid gap-2.5">
          {SLITTING_EDGING_ADVANTAGES.map((point) => (
            <li
              key={point.title}
              className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <CutToLengthAdvantageIcon type={point.icon} />
              </div>
              <div className="px-4 py-3">
                <h3 className="text-[0.78rem] font-semibold uppercase leading-5 tracking-[0.08em] text-[#d9a900]">
                  {point.title}
                </h3>
                <p className="mt-1 text-sm font-semibold leading-6 text-[#111820]">
                  {point.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="min-w-0">
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Why choose us?
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#111820] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] first-letter:uppercase">
            Jinling Steel provides stainless steel slitting service and edge trimming support for buyers who need controlled slit coil, narrow stainless steel strip, stable width tolerance, clean edge condition, protected surface finish, and export-ready coil packing. From appliance parts and decorative profiles to tube production and precision hardware, we help buyers reduce sourcing complexity and prepare stainless steel coils for smoother downstream processing.
          </p>
        </div>
      </div>
    </section>
  );
}
function ProtectiveCoatingWhyChooseJinlingSection() {
  return (
    <section className="flex bg-white px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:items-center lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
        <ul className="grid gap-2.5">
          {PROTECTIVE_COATING_ADVANTAGES.map((point) => (
            <li
              key={point.title}
              className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <CutToLengthAdvantageIcon type={point.icon} />
              </div>
              <div className="px-4 py-3">
                <h3 className="text-[0.78rem] font-semibold uppercase leading-5 tracking-[0.08em] text-[#d9a900]">
                  {point.title}
                </h3>
                <p className="mt-1 text-sm font-semibold leading-6 text-[#111820]">
                  {point.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="min-w-0">
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Why Choose Jinling?
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#111820] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] first-letter:uppercase">
            Jinling Steel supports stainless steel protective coating projects with coating stack review, AFP anti-fingerprint coating, PVD colored stainless steel route matching, sample-based production, protective film compatibility control, and export surface protection. For coated stainless steel sheet, decorative panels, appliance panels, elevator interiors, and architectural surfaces, we help buyers reduce coating risk before fabrication, packing, and shipment.
          </p>
        </div>
      </div>
    </section>
  );
}
function ProtectiveFilmWhyChooseJinlingSection() {
  return (
    <section className="flex bg-white px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:items-center lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.62fr_0.38fr] lg:items-center">
        <ul className="grid gap-2.5">
          {PROTECTIVE_FILM_ADVANTAGES.map((point) => (
            <li
              key={point.title}
              className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <CutToLengthAdvantageIcon type={point.icon} />
              </div>
              <div className="px-4 py-3">
                <h3 className="text-[0.78rem] font-semibold uppercase leading-5 tracking-[0.08em] text-[#d9a900]">
                  {point.title}
                </h3>
                <p className="mt-1 text-sm font-semibold leading-6 text-[#111820]">
                  {point.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="min-w-0">
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#111820] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] first-letter:uppercase">
            Jinling Steel supports stainless steel protective film selection for sheet, coil, mirror finish, No.4 brushed, hairline, AFP coated stainless steel, laser cutting, bending, cut-to-length processing, and export packing. We help buyers match film type, adhesive tack, removal window, surface finish, and packing route together so stainless steel panels arrive cleaner, safer to fabricate, and easier to release before installation.
          </p>
        </div>
      </div>
    </section>
  );
}

function CutToLengthAdvantageIcon({ type }: { type: string }) {
  const common = "h-5 w-5";

  if (type === "processing") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 10h20M6 16h20M6 22h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 7v18M22 7v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "surface") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M6 22 22 6M10 26 26 10M5 14l9-9M18 27l9-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "readiness") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M7 8h18v16H7z" stroke="currentColor" strokeWidth="2" />
        <path d="m11 17 3 3 7-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "mixed") {
    return (
      <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="6" width="8" height="8" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="6" width="8" height="8" stroke="currentColor" strokeWidth="2" />
        <rect x="6" y="18" width="8" height="8" stroke="currentColor" strokeWidth="2" />
        <rect x="18" y="18" width="8" height="8" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M4 10h15v11H4z" stroke="currentColor" strokeWidth="2" />
      <path d="M19 13h5l4 4v4h-9z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="9" cy="23" r="2.5" stroke="currentColor" strokeWidth="2" />
      <circle cx="23" cy="23" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function CutToLengthApplicationSection() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-7 lg:grid-cols-[minmax(0,1.16fr)_minmax(18rem,18rem)] lg:items-center">
        <div className="order-2 grid min-w-0 grid-cols-2 gap-2.5 sm:grid-cols-5 lg:order-1 lg:gap-3">
          {CUT_TO_LENGTH_APPLICATIONS.map((application) => (
            <Link
              key={application.title}
              href={application.href}
              className="group relative isolate block w-full overflow-hidden border border-[#d8b94a] bg-[#101820] shadow-[0_16px_34px_rgba(13,20,27,0.12)] outline-none transition duration-300 hover:z-10 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(13,20,27,0.18)] focus-visible:z-10 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src={application.image}
                alt={`${application.title} cut-to-length stainless steel application`}
                fill
                sizes="(min-width: 1024px) 14vw, (min-width: 640px) 18vw, 45vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.12] group-focus-visible:scale-[1.12]"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.72)_0%,rgba(13,20,27,0.1)_34%,rgba(13,20,27,0.76)_100%)]"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 top-0 z-10 p-2.5 text-center sm:p-3">
                <h3 className="text-[0.72rem] font-semibold leading-4 tracking-[0.01em] text-white sm:text-[0.78rem] lg:text-[0.66rem] xl:text-[0.76rem]">
                  {application.title}
                </h3>
              </div>
              <div className="absolute inset-0 z-20 flex translate-y-3 items-center justify-center bg-[#101820]/90 px-3 text-left opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:px-3.5">
                <div className="w-full max-w-[9.5rem]">
                  <h3 className="text-[0.78rem] font-semibold leading-4 text-white sm:text-[0.84rem] lg:text-[0.68rem] xl:text-[0.78rem]">
                    {application.title}
                  </h3>
                  <p className="mt-2 text-[0.62rem] font-medium leading-[1.42] text-white/78 sm:text-[0.66rem] lg:text-[0.56rem] xl:text-[0.64rem]">
                    {application.description}
                  </p>
                  <span className="mt-3 inline-flex min-h-8 items-center bg-[#f6d044] px-3 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#101820] transition group-hover:bg-[#f2c820]">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="order-1 flex min-w-0 flex-col justify-center lg:order-2 lg:pl-4">
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
            When Do Buyers Need Cut-to-Length?
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] sm:text-[0.96rem]">
            Choose stainless steel cut-to-length service when your project needs fixed-size sheets, flatter panels, cleaner edges, protective film, or export-ready packing before fabrication. Jinling helps buyers reduce secondary cutting work, improve sheet handling efficiency, and prepare stainless steel sheets for laser cutting, bending, appliance panels, elevator interiors, architectural cladding, and mixed-container shipment.
          </p>
        </div>
      </div>
    </section>
  );
}
function ProtectiveFilmSelectionLogicSection() {
  return (
    <section className="bg-[#f5efe4] px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 lg:min-h-[calc(50vh-6rem)] lg:grid-cols-[minmax(0,0.62fr)_minmax(18rem,0.38fr)] lg:items-center">
        <ol className="grid gap-2.5">
          {PROTECTIVE_FILM_SELECTION_LOGIC.map((point, index) => (
            <li
              key={point.title}
              tabIndex={0}
              className="group grid min-h-[4.2rem] grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_14px_30px_rgba(17,24,32,0.08)] outline-none transition duration-300 hover:-translate-y-1 hover:border-[#d8b94a] hover:shadow-[0_20px_42px_rgba(17,24,32,0.13)] focus-visible:-translate-y-1 focus-visible:border-[#d8b94a] focus-visible:ring-2 focus-visible:ring-[#f6d044]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <span className="text-sm font-semibold tracking-[0.12em]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="min-w-0 px-4 py-3 sm:px-5">
                <h3 className="text-[0.92rem] font-semibold leading-5 text-[#111820] sm:text-base">
                  {point.title}
                </h3>
                <p className="mt-1 max-h-0 overflow-hidden text-[0.78rem] leading-5 text-[#5d554b] opacity-0 transition-all duration-300 group-hover:max-h-28 group-hover:opacity-100 group-focus-visible:max-h-28 group-focus-visible:opacity-100 sm:text-[0.84rem]">
                  {point.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="flex min-w-0 flex-col justify-center lg:pl-4">
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
            Film Selection Logic
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] sm:text-[0.96rem]">
            Protective film should be selected according to the stainless steel surface, fabrication route, adhesive tack, storage time, and removal condition. Jinling matches PE film, PVC film, laser film, and coating-compatible protective film with 2B, BA, No.4, hairline, mirror, AFP, and coated stainless steel surfaces, so sheets and coils stay protected during cutting, bending, handling, packing, shipment, and installation.
          </p>
          <p className="mt-4 border-l-2 border-[#d9a900] pl-4 text-sm font-semibold leading-6 text-[#111820]">
            The right film is chosen by the next process, not only by the surface name.
          </p>
        </div>
      </div>
    </section>
  );
}
function ProtectiveFilmMatchingGuideSection() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-14">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 lg:min-h-[calc(50vh-6rem)] lg:grid-cols-[minmax(18rem,0.34fr)_minmax(0,0.66fr)] lg:items-center">
        <div>
          <h2 className="text-[1.82rem] font-semibold leading-[1.06] tracking-[-0.025em] text-[#111820] sm:text-[2.25rem]">
            Film Matching Guide
          </h2>
          <p className="mt-5 text-[0.96rem] leading-8 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.05rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820]">
            Protective film for stainless steel sheet should match the finish, coating layer, cutting route, and removal condition before production starts. Jinling helps buyers choose PE film, PVC film, laser film, grain-safe film, or coating-compatible film for 2B, BA, No.4, hairline, 8K mirror, AFP coated stainless steel, and laser cutting projects to reduce scratches, adhesive residue, peel marks, and surface claims.
          </p>
        </div>
        <div className="overflow-hidden border border-[#d8c8ad] bg-[#101010] shadow-[0_18px_44px_rgba(17,24,32,0.11)]">
          <div className="bg-[#101010] px-6 py-4 text-center">
            <div className="flex items-center justify-center gap-3 text-[#f6d044]">
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
                Matching guide
              </h3>
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs font-medium text-white/72">
              Protective film route by stainless steel surface and buyer risk
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-[#f6d044] text-[#111820]">
                  <th className="w-[28%] border-r border-[#cfae2f] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.1em]">
                    Stainless Surface
                  </th>
                  <th className="w-[36%] border-r border-[#cfae2f] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.1em]">
                    Film Requirement
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.1em]">
                    Buyer Risk If Wrong
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/88">
                {PROTECTIVE_FILM_MATCHING_GUIDE.map((row) => (
                  <tr key={row.surface}>
                    <th className="border-r border-white/10 px-4 py-3 text-center text-sm font-semibold text-white">
                      {row.surface}
                    </th>
                    <td className="border-r border-white/10 px-4 py-3 text-sm leading-6 text-white/84">
                      {row.requirement}
                    </td>
                    <td className="px-4 py-3 text-sm leading-6 text-white/78">
                      {row.risk}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
function ProtectiveFilmApplicationsSection() {
  return (
    <section className="bg-[#f5efe4] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-7 lg:grid-cols-[minmax(0,1.16fr)_minmax(18rem,18rem)] lg:items-center">
        <div className="order-2 grid min-w-0 grid-cols-2 gap-2.5 sm:grid-cols-5 lg:order-1 lg:gap-3">
          {PROTECTIVE_FILM_APPLICATIONS.map((application) => (
            <Link
              key={application.title}
              href={application.href}
              className="group relative isolate block w-full overflow-hidden border border-[#d8b94a] bg-[#101820] shadow-[0_16px_34px_rgba(13,20,27,0.12)] outline-none transition duration-300 hover:z-10 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(13,20,27,0.18)] focus-visible:z-10 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src={application.image}
                alt={`${application.title} stainless steel protective film application`}
                fill
                sizes="(min-width: 1024px) 14vw, (min-width: 640px) 18vw, 45vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.12] group-focus-visible:scale-[1.12]"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.74)_0%,rgba(13,20,27,0.1)_34%,rgba(13,20,27,0.78)_100%)]"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 top-0 z-10 p-2.5 text-center sm:p-3">
                <h3 className="text-[0.68rem] font-semibold leading-4 tracking-[0.01em] text-white sm:text-[0.74rem] lg:text-[0.62rem] xl:text-[0.72rem]">
                  {application.title}
                </h3>
              </div>
              <div className="absolute inset-0 z-20 flex translate-y-3 items-center justify-center bg-[#101820]/90 px-3 text-left opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:px-3.5">
                <div className="w-full max-w-[9.5rem]">
                  <h3 className="text-[0.74rem] font-semibold leading-4 text-white sm:text-[0.8rem] lg:text-[0.64rem] xl:text-[0.74rem]">
                    {application.title}
                  </h3>
                  <p className="mt-2 text-[0.6rem] font-medium leading-[1.42] text-white/78 sm:text-[0.64rem] lg:text-[0.54rem] xl:text-[0.62rem]">
                    {application.description}
                  </p>
                  <span className="mt-3 inline-flex min-h-8 items-center bg-[#f6d044] px-3 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#101820] transition group-hover:bg-[#f2c820]">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="order-1 flex min-w-0 flex-col justify-center lg:order-2 lg:pl-4">
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.35rem]">
            Where Protective Film Works Best
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] sm:text-[0.96rem]">
            Protective film works best when stainless steel sheet, coil, or finished panels must keep a visible surface clean through polishing, AFP coating, cut-to-length processing, laser cutting, bending, packing, shipment, and installation. Jinling matches stainless steel protective film with mirror finish, No.4 brushed, hairline, AFP coated stainless steel, decorative panels, and fabrication-ready sheets so buyers reduce scratches, residue, peel marks, and surface claims.
          </p>
        </div>
      </div>
    </section>
  );
}
function PackagingLogisticsRangeSection() {
  return (
    <section className="bg-[#f5efe4] px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.66fr)_minmax(18rem,0.34fr)] lg:items-center">
        <div className="overflow-hidden border border-[#d8c8ad] bg-[#101010] shadow-[0_18px_44px_rgba(17,24,32,0.11)]">
          <div className="bg-[#101010] px-6 py-4 text-center">
            <div className="flex items-center justify-center gap-3 text-[#f6d044]">
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">
                Specifications
              </h3>
              <span className="h-px w-10 bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-2 text-xs font-medium text-white/72">
              Stainless steel export packing and logistics support range
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-sm">
            <thead>
              <tr className="bg-[#f6d044] text-[#111820]">
                <th className="w-[32%] border-r border-[#cfae2f] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]">
                  Item
                </th>
                <th className="px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.12em]">
                  Packaging Range
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/88">
              {PACKAGING_LOGISTICS_RANGE.map((row) => (
                <tr key={row.item}>
                  <th className="border-r border-white/10 px-5 py-3 text-center text-sm font-semibold text-white">
                    {row.item}
                  </th>
                  <td className="px-5 py-3 text-sm leading-6 text-white/84">
                    {row.range}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-[1.72rem] font-semibold leading-[1.08] tracking-[-0.035em] text-[#111820] sm:text-[2rem] lg:text-[2.08rem]">
            Packaging &amp; Logistics Range
          </h2>
          <p className="mt-5 text-[0.98rem] leading-8 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820]">
            Jinling prepares stainless steel export packaging for coil, sheet, plate, strip, tube, pipe, and bar shipments with protective film, wooden pallet or crate packing, waterproof wrapping, VCI and desiccant review, edge protection, container loading support, and clear shipping marks. This helps buyers reduce surface damage, moisture risk, label confusion, and receiving inspection problems after long-distance transport.
          </p>
        </div>
      </div>
    </section>
  );
}
function PackagingLogisticsRoutesSection() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-7 lg:grid-cols-[minmax(18rem,18rem)_minmax(0,1.16fr)] lg:items-center">
        <div className="flex min-w-0 flex-col justify-center lg:pr-4">
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] tracking-[-0.01em] text-[#111820] sm:text-[2.35rem]">
            Packaging Routes by Product Form
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] sm:text-[0.96rem]">
            Stainless steel export packing should follow the product form, surface risk, weight, and receiving condition. Jinling matches coil packing, sheet pallet packing, mirror panel face protection, tube bundle protection, and mixed-container loading plans so buyers can reduce transit damage, moisture risk, label confusion, and unloading problems after shipment.
          </p>
        </div>
        <div className="grid min-w-0 grid-cols-2 gap-2.5 sm:grid-cols-5 lg:gap-3">
          {PACKAGING_LOGISTICS_ROUTES.map((route) => (
            <Link
              key={route.title}
              href={route.href}
              className="group relative isolate block w-full overflow-hidden border border-[#d8b94a] bg-[#101820] shadow-[0_16px_34px_rgba(13,20,27,0.12)] outline-none transition duration-300 hover:z-10 hover:-translate-y-1 hover:shadow-[0_22px_46px_rgba(13,20,27,0.18)] focus-visible:z-10 focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              style={{ aspectRatio: "3 / 4" }}
            >
              <Image
                src={route.image}
                alt={`${route.title} stainless steel export packing route`}
                fill
                sizes="(min-width: 1024px) 14vw, (min-width: 640px) 18vw, 45vw"
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.12] group-focus-visible:scale-[1.12]"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.74)_0%,rgba(13,20,27,0.1)_34%,rgba(13,20,27,0.78)_100%)]"
                aria-hidden="true"
              />
              <div className="absolute inset-x-0 top-0 z-10 p-2.5 text-center sm:p-3">
                <h3 className="text-[0.68rem] font-semibold leading-4 tracking-[0.01em] text-white sm:text-[0.74rem] lg:text-[0.62rem] xl:text-[0.72rem]">
                  {route.title}
                </h3>
              </div>
              <div className="absolute inset-0 z-20 flex translate-y-3 items-center justify-center bg-[#101820]/90 px-3 text-left opacity-0 backdrop-blur-[2px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:px-3.5">
                <div className="w-full max-w-[9.5rem]">
                  <h3 className="text-[0.74rem] font-semibold leading-4 text-white sm:text-[0.8rem] lg:text-[0.64rem] xl:text-[0.74rem]">
                    {route.title}
                  </h3>
                  <p className="mt-2 text-[0.6rem] font-medium leading-[1.42] text-white/78 sm:text-[0.64rem] lg:text-[0.54rem] xl:text-[0.62rem]">
                    {route.description}
                  </p>
                  <span className="mt-3 inline-flex min-h-8 items-center bg-[#f6d044] px-3 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-[#101820] transition group-hover:bg-[#f2c820]">
                    Read More
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
function PackagingLogisticsVideoSection() {
  return (
    <section className="bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-8 lg:min-h-[calc(50vh-6rem)] lg:grid-cols-[minmax(0,0.66fr)_minmax(18rem,0.34fr)] lg:items-center">
        <div className="border border-[#2a3137] bg-[#101820] p-3 shadow-[0_22px_56px_rgba(0,0,0,0.32)]">
          <VideoEmbed
            youtubeId="T0H8EuzMdGA"
            title="Stainless steel export packing and loading proof video"
            className="[&_div]:rounded-none"
          />
        </div>
        <div className="min-w-0">
          <h2 className="text-[1.82rem] font-semibold leading-[1.06] tracking-[-0.02em] text-white sm:text-[2.35rem]">
            Stainless Steel Export Packing &amp; Loading Proof
          </h2>
          <p className="mt-5 text-[0.96rem] leading-8 text-white/74 first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.05rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#f6d044]">
            Watch how stainless steel products are prepared for export packaging and logistics before shipment. Jinling uses protective wrapping, pallet packing, edge protection, container loading checks, shipping marks, and loading photos to help buyers protect stainless steel coil, sheet, plate, tube, pipe, and finished surfaces during long-distance transport.
          </p>
        </div>
      </div>
    </section>
  );
}
function PackagingLogisticsWhyChooseUsSection() {
  return (
    <section className="flex bg-[#f5efe4] px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:items-center lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-5xl gap-8 lg:grid-cols-[0.38fr_0.62fr] lg:items-center">
        <div className="min-w-0">
          <h2 className="text-[2rem] font-semibold leading-[1.04] tracking-[-0.02em] text-[#111820] sm:text-[2.55rem]">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-[0.95rem] leading-7 text-[#111820] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] first-letter:uppercase">
            Jinling Steel supports stainless steel packaging and logistics with product-form packing logic, surface protection, moisture control, mixed-container loading, export documents, shipping marks, and loading photos. For stainless steel coil, sheet, plate, tube, pipe, mirror panels, AFP coated surfaces, and cut-to-length orders, we help buyers reduce transit damage, rust risk, receiving confusion, and surface claims after shipment.
          </p>
        </div>
        <ul className="grid gap-2.5">
          {PACKAGING_LOGISTICS_ADVANTAGES.map((point) => (
            <li
              key={point.title}
              className="grid grid-cols-[3.75rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_32px_rgba(13,20,27,0.045)]"
            >
              <div className="flex items-center justify-center bg-[#111820] text-[#f6d044]">
                <CutToLengthAdvantageIcon type={point.icon} />
              </div>
              <div className="px-4 py-3">
                <h3 className="text-[0.78rem] font-semibold uppercase leading-5 tracking-[0.08em] text-[#d9a900]">
                  {point.title}
                </h3>
                <p className="mt-1 text-sm font-semibold leading-6 text-[#111820]">
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
function PackagingLogisticsRelatedArticles() {
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
            {PACKAGING_LOGISTICS_RELATED_ARTICLES.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={article.image}
                  alt={`${article.title} stainless steel packaging and logistics article`}
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
                    {article.title}
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
function CutToLengthCapabilityPage() {
  return (
    <>
      <StandardCapabilityHero {...CAPABILITY_HERO_COPY["cut-to-length"]} />
      <CutToLengthRangeSection />
      <CutToLengthApplicationSection />
      <CutToLengthToleranceSection />
      <CutToLengthWhyChooseJinlingSection />
      {SHOW_COMMERCIAL_RELATED_ARTICLES ? <CutToLengthRelatedArticles /> : null}
    </>
  );
}
function SlittingEdgingCapabilityPage() {
  return (
    <>
      <StandardCapabilityHero {...CAPABILITY_HERO_COPY["slitting-edging"]} />
      <SlittingEdgingRangeSection />
      <SlittingEdgingApplicationSection />
      <SlittingEdgingControlSection />
      <SlittingEdgingWhyChooseJinlingSection />
      {SHOW_COMMERCIAL_RELATED_ARTICLES ? <SlittingEdgingRelatedArticles /> : null}
    </>
  );
}
function ProtectiveCoatingCapabilityPage() {
  return (
    <>
      <StandardCapabilityHero {...CAPABILITY_HERO_COPY["protective-coating"]} />
      <ProtectiveCoatingDecisionSection />
      <ProtectiveCoatingRouteComparisonSection />
      <ProtectiveCoatingApplicationsSection />
      <ProtectiveCoatingWhyChooseJinlingSection />
      {SHOW_COMMERCIAL_RELATED_ARTICLES ? <ProtectiveCoatingRelatedArticles /> : null}
    </>
  );
}
function ProtectiveFilmCapabilityPage() {
  return (
    <>
      <StandardCapabilityHero {...CAPABILITY_HERO_COPY["protective-film"]} />
      <ProtectiveFilmSelectionLogicSection />
      <ProtectiveFilmMatchingGuideSection />
      <ProtectiveFilmApplicationsSection />
      <ProtectiveFilmWhyChooseJinlingSection />
      {SHOW_COMMERCIAL_RELATED_ARTICLES ? <ProtectiveFilmRelatedArticles /> : null}
    </>
  );
}
function PackagingLogisticsCapabilityPage() {
  return (
    <>
      <StandardCapabilityHero {...CAPABILITY_HERO_COPY["packaging-logistics"]} />
      <PackagingLogisticsRangeSection />
      <PackagingLogisticsRoutesSection />
      <PackagingLogisticsVideoSection />
      <PackagingLogisticsWhyChooseUsSection />
      {SHOW_COMMERCIAL_RELATED_ARTICLES ? <PackagingLogisticsRelatedArticles /> : null}
    </>
  );
}
function SurfaceFinishingHero() {
  return (
    <>
      <CapabilityBreadcrumbBar title="Surface Finishing" />
      <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
        <Image
          src="/images/capabilities/surface-finishing/surface-finishing-hero-machine.jpg"
          alt="Stainless steel surface finishing line processing sheet and coil material"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.74] brightness-[0.78] saturate-[0.88] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.54)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Process capability
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[2.9rem]">
            Stainless Steel Surface Finishing Capability
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Jinling Steel provides precision stainless steel surface finishing for sheet, coil, and custom processed materials. From 8K mirror finish, AFP anti-fingerprint coating, No.4 brushed, hairline, 2B, and BA finish, we help buyers match the right surface appearance, protection level, and fabrication route for architecture, elevators, kitchen equipment, appliances, and industrial projects.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact#pricing-request"
              className="inline-flex min-h-11 items-center bg-[#f6d044] px-5 text-sm font-semibold text-[#111820] transition hover:bg-[#f2c820]"
            >
              Request finishing support
            </Link>
          </div>
        </div>
      </section>
      <SurfaceFinishOptions />
      <FinishSelectionGuide />
      <QualityInspectionPoints />
      <SurfaceFinishApplications />
      {SHOW_COMMERCIAL_RELATED_ARTICLES ? <SurfaceFinishingRelatedArticles /> : null}
    </>
  );
}

function StandardCapabilityHero({
  breadcrumb,
  title,
  description,
}: {
  breadcrumb: string;
  title: string;
  description: string;
}) {
  return (
    <>
      <CapabilityBreadcrumbBar title={breadcrumb} />
      <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
        <Image
          src="/images/capabilities/surface-finishing/surface-finishing-hero-machine.jpg"
          alt={`${breadcrumb} stainless steel processing capability`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.74] brightness-[0.78] saturate-[0.88] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.54)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Process capability
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[2.9rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            {description}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/contact#pricing-request"
              className="inline-flex min-h-11 items-center bg-[#f6d044] px-5 text-sm font-semibold text-[#111820] transition hover:bg-[#f2c820]"
            >
              Request processing support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export async function generateStaticParams() {
  return getContentSlugs("capabilities").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContent("capabilities", slug);
  if (!content) return {};
  return {
    title: content.seoTitle || content.title,
    description: content.description,
    alternates: {
      canonical: `/solutions/capabilities/${slug}`,
    },
  };
}

export default async function CapabilityPage({ params }: Props) {
  const { slug } = await params;
  const content = await getContent("capabilities", slug);
  if (!content) notFound();

  if (slug === SURFACE_FINISHING_SLUG) {
    return <SurfaceFinishingHero />;
  }

  if (slug === "cut-to-length") {
    return <CutToLengthCapabilityPage />;
  }

  if (slug === "slitting-edging") {
    return <SlittingEdgingCapabilityPage />;
  }

  if (slug === "protective-coating") {
    return <ProtectiveCoatingCapabilityPage />;
  }

  if (slug === "protective-film") {
    return <ProtectiveFilmCapabilityPage />;
  }

  if (slug === "packaging-logistics") {
    return <PackagingLogisticsCapabilityPage />;
  }

  const hero = CAPABILITY_HERO_COPY[slug];

  if (!hero) {
    return null;
  }

  return <StandardCapabilityHero {...hero} />;
}









