import Link from "next/link";

export type CapabilityRouteSlug =
  | "surface-finish-capability"
  | "cut-to-length"
  | "slitting-edging"
  | "protective-coating"
  | "protective-film"
  | "packaging-logistics";

interface CapabilityZone {
  title: string;
  description: string;
  recommendation: string;
}

interface CapabilityShelfItem {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

interface CapabilityTool {
  title: string;
  description: string;
  href: string;
  cta: string;
}

export interface CapabilitySidebarConfig {
  relatedTitle: string;
  items: Array<{ name: string; href: string }>;
  ctaHeading: string;
  ctaText: string;
  ctaHref: string;
  ctaSecondaryText: string;
  ctaSecondaryHref: string;
}

interface CapabilityDeskConfig {
  eyebrow: string;
  title: string;
  description: string;
  zoneLabel: string;
  shelfTitle: string;
  shelfDescription: string;
  zones: readonly CapabilityZone[];
  shelf: readonly CapabilityShelfItem[];
  tools: readonly CapabilityTool[];
  sidebar: CapabilitySidebarConfig;
}

const CAPABILITY_DESK_CONFIG: Record<CapabilityRouteSlug, CapabilityDeskConfig> = {
  "surface-finish-capability": {
    eyebrow: "Finish-System Decisions",
    title: "Use Surface Finishing as the Lead Capability When the Face Itself Is the Product",
    description:
      "This matters when mirror, hairline, No.4, BA, AFP, or corrosion-life polishing is what the customer will actually inspect, maintain, and complain about later.",
    zoneLabel: "Finish Case",
    shelfTitle: "Keep the proof close to the finish decision.",
    shelfDescription:
      "Keep the first click close to mirror, AFP, and bright-base logic before widening into the full finish library.",
    zones: [
      {
        title: "Mirror Feature Surfaces",
        description:
          "Use this when reflection, haze control, packaging, and field repair limits matter more than generic decorative language.",
        recommendation: "Mirror + acceptance check",
      },
      {
        title: "Brushed and Hairline Architecture",
        description:
          "Use this when directionality, lot consistency, and long-panel maintenance decide whether the finish still looks intentional after installation.",
        recommendation: "No.4 / HL + panel control",
      },
      {
        title: "High-Touch AFP Programs",
        description:
          "Use this when the buyer really needs touch tolerance, fingerprint control, and lot-matched appearance rather than bare polished stainless.",
        recommendation: "AFP + touch control",
      },
      {
        title: "Corrosion-Life Surface Upgrades",
        description:
          "Use this when polishing is being used to widen the service window rather than only change sheet appearance.",
        recommendation: "Super finish + service margin",
      },
    ],
    shelf: [
      {
        eyebrow: "Flagship finish",
        title: "8K Mirror Finish",
        description:
          "The fastest reference when the project is really about mirror consistency, defect control, and how the finish is released.",
        href: "/surfaces/stainless-steel-8k-mirror-finish",
        cta: "Open finish page",
      },
      {
        eyebrow: "Touch control",
        title: "AFP Finish",
        description:
          "Use this when the face still needs anti-fingerprint logic, easier cleaning, or a layered finish stack for high-touch areas.",
        href: "/surfaces/stainless-steel-afp-finish",
        cta: "Open finish page",
      },
      {
        eyebrow: "Mill-bright base",
        title: "BA Finish",
        description:
          "Best when the project depends on bright annealed feedstock, appliance-facing brightness, or a clean base for later polishing.",
        href: "/surfaces/stainless-steel-ba-finish",
        cta: "Open finish page",
      },
      {
        eyebrow: "Specifier view",
        title: "Architecture Application",
        description:
          "Use this when exposure zone, maintenance burden, and finish-selection discipline are what will actually govern the finish choice.",
        href: "/solutions/applications/architecture",
        cta: "Open application",
      },
      {
        eyebrow: "Project fit",
        title: "Elevator Application",
        description:
          "The right next stop when touch zone, scratch visibility, and lot consistency matter more than finish labels alone.",
        href: "/solutions/applications/elevator-decoration",
        cta: "Open application",
      },
      {
        eyebrow: "Inspection check",
        title: "Mirror Acceptance: Haze, Gloss, and Pinhole",
        description:
          "Use this when the finish can no longer be judged by showroom impression and needs acceptance language that can survive inspection.",
        href: "/knowledge-base/mirror-finish-acceptance-haze-gloss-pinhole",
        cta: "Open article",
      },
    ],
    tools: [
      {
        title: "Compare Finishes",
        description:
          "Move into the wider finish library when the project still needs 2B, BA, No.4, hairline, mirror, AFP, or PVD narrowed down.",
        href: "/surfaces",
        cta: "Browse finishes",
      },
      {
        title: "Open Finish Guides",
        description:
          "Use stainless steel guide content when the finish is mostly decided and the proof route still needs context.",
        href: "/resources/stainless-steel-guides#processing",
        cta: "Browse guides",
      },
      {
        title: "Ask for Finish Review",
        description:
          "Use this when substrate, finish, AFP, acceptance, or packaging logic still needs to be tightened before the quote is trusted.",
        href: "/contact#technical-review",
        cta: "Ask for review",
      },
    ],
    sidebar: {
      relatedTitle: "Finish-System Links",
      items: [
        { name: "8K Mirror Finish", href: "/surfaces/stainless-steel-8k-mirror-finish" },
        { name: "AFP Finish", href: "/surfaces/stainless-steel-afp-finish" },
        { name: "Protective Coating", href: "/solutions/capabilities/protective-coating" },
        { name: "Protective Film", href: "/solutions/capabilities/protective-film" },
        { name: "Architecture Application", href: "/solutions/applications/architecture" },
      ],
      ctaHeading: "Need finish, substrate, film, or acceptance guidance?",
      ctaText: "Ask Finish Review",
      ctaHref: "/contact#technical-review",
      ctaSecondaryText: "Request Pricing",
      ctaSecondaryHref: "/contact#pricing-request",
    },
  },
  "cut-to-length": {
    eyebrow: "Panel-Release Decisions",
    title: "Use Cut-to-Length When the Panel Has to Arrive Already Flat, Sized, and Release-Ready",
    description:
      "This matters when the real failure would be warped blanks, visible handling damage, or panel sizes that stop downstream nesting and fabrication from running cleanly.",
    zoneLabel: "Panel Case",
    shelfTitle: "Check the panel proof before release.",
    shelfDescription:
      "Flatness, tolerance language, and stock size usually settle the first panel disagreement.",
    zones: [
      {
        title: "Finish-Critical Panels",
        description:
          "Use this when mirror, No.4, or hairline panels are already finished faces and cannot be treated like generic cut blanks.",
        recommendation: "Panel + finish control",
      },
      {
        title: "Laser and Press-Brake Blanks",
        description:
          "Use this when flatness, length tolerance, and predictable cut condition drive the job more than coil availability alone.",
        recommendation: "Blank + flatness control",
      },
      {
        title: "Appliance and Kitchen Panels",
        description:
          "Use this when the panel still depends on protective film, handling sequence, and cleaner release language before it can be trusted.",
        recommendation: "Panel + protection plan",
      },
      {
        title: "Heavy Plate and Structural Panels",
        description:
          "Use this when plate thickness, bevel prep, or pressure/structural handling changes the job beyond normal cut sheet logic.",
        recommendation: "Plate + release check",
      },
    ],
    shelf: [
      {
        eyebrow: "Flatness check",
        title: "Flatness Requirements",
        description:
          "Use this when the release decision depends on measured flatness and not on visual disagreement about whether the panel looks straight enough.",
        href: "/knowledge-base/stainless-steel-flatness-requirements",
        cta: "Open article",
      },
      {
        eyebrow: "Tolerance check",
        title: "Thickness Tolerance Standards",
        description:
          "The faster reference when the panel still needs ASTM, EN, or PO wording tightened before the release basis is clear.",
        href: "/knowledge-base/stainless-steel-thickness-tolerance-standards",
        cta: "Open article",
      },
      {
        eyebrow: "Size format",
        title: "Sheet Sizes",
        description:
          "Best when the order still needs a clean stock-format decision before cut size, yield, and panel planning can be locked.",
        href: "/knowledge-base/stainless-steel-sheet-sizes",
        cta: "Open article",
      },
      {
        eyebrow: "Finish choice",
        title: "Surface Finish Options",
        description:
          "Use this when the panel still depends on 2B, BA, No.4, hairline, mirror, AFP, or protective logic rather than on size alone.",
        href: "/surfaces",
        cta: "Browse finishes",
      },
      {
        eyebrow: "Specifier view",
        title: "Architecture Application",
        description:
          "Use this when the panel is really part of a facade, lobby, or interior package that needs specifier-style release logic.",
        href: "/solutions/applications/architecture",
        cta: "Open application",
      },
      {
        eyebrow: "Kitchen fit",
        title: "Kitchen Equipment Application",
        description:
          "The right next stop when the panel belongs in kitchen or food equipment and cleanability plus handling become part of the cut plan.",
        href: "/solutions/applications/kitchen-equipment",
        cta: "Open application",
      },
    ],
    tools: [
      {
        title: "Open Sheet & Plate",
        description:
          "Move into the sheet and plate product family when the cut plan is clear but the stock form still is not.",
        href: "/products/stainless-steel-sheet",
        cta: "Browse sheet page",
      },
      {
        title: "Compare Finishes",
        description:
          "Use this when the panel still depends on finish direction rather than only on sheet size and flatness.",
        href: "/surfaces",
        cta: "Browse finishes",
      },
      {
        title: "Ask for Panel Review",
        description:
          "Use this when size, flatness tier, finish, or film choice still needs to be clarified before the panel order is released.",
        href: "/contact#technical-review",
        cta: "Ask for review",
      },
    ],
    sidebar: {
      relatedTitle: "Panel Release Links",
      items: [
        { name: "Stainless Steel Sheet", href: "/products/stainless-steel-sheet" },
        {
          name: "Flatness Requirements",
          href: "/knowledge-base/stainless-steel-flatness-requirements",
        },
        { name: "Protective Film", href: "/solutions/capabilities/protective-film" },
        { name: "Surface Finishing", href: "/solutions/capabilities/surface-finish-capability" },
        { name: "Architecture Application", href: "/solutions/applications/architecture" },
      ],
      ctaHeading: "Need size, flatness, finish, or panel-handling guidance?",
      ctaText: "Ask Panel Review",
      ctaHref: "/contact#technical-review",
      ctaSecondaryText: "Request Pricing",
      ctaSecondaryHref: "/contact#pricing-request",
    },
  },
  "slitting-edging": {
    eyebrow: "Strip-Control Decisions",
    title: "Use Slitting and Edging When Width, Burr, and Coil Consistency Drive the Downstream Process",
    description:
      "This matters when the strip is really feedstock for tube, roll forming, stamping, or trim work and cannot tolerate width drift or rough edge condition.",
    zoneLabel: "Strip Case",
    shelfTitle: "Set the strip language before the line runs.",
    shelfDescription:
      "Edge condition, tolerance class, and downstream tube fit are the checks that keep strip from becoming a surprise at the mill.",
    zones: [
      {
        title: "Tube-Mill Feed",
        description:
          "Use this when strip width directly controls welded tube geometry and the coil is being bought for a line, not as a stock commodity.",
        recommendation: "Strip + tube feed",
      },
      {
        title: "Roll-Form and Stamping Feed",
        description:
          "Use this when burr, slit width, and edge cleanliness determine whether dies and forming rolls stay predictable.",
        recommendation: "Strip + forming control",
      },
      {
        title: "Architectural Trim Widths",
        description:
          "Use this when narrow-width strip becomes a visible part and the slit edge can no longer be treated like a hidden manufacturing artifact.",
        recommendation: "Trim + visual edge",
      },
      {
        title: "Precision Narrow Strip",
        description:
          "Use this when ISO 9445 classes, coil-to-coil repeatability, and supplier control matter more than raw tonnage.",
        recommendation: "Precision strip control",
      },
    ],
    shelf: [
      {
        eyebrow: "Edge check",
        title: "Mill Edge or Slit Edge?",
        description:
          "Use this when the order still needs a clear edge decision because downstream burr risk and receiving language are not yet aligned.",
        href: "/knowledge-base/mill-edge-vs-slit-edge-delivery-standards",
        cta: "Open article",
      },
      {
        eyebrow: "Precision check",
        title: "Precision Strip Tolerance Grades",
        description:
          "Best when the order still depends on Class N, P, or tighter strip expectations rather than on generic coil language.",
        href: "/knowledge-base/precision-ss-strip-tolerance-grades",
        cta: "Open article",
      },
      {
        eyebrow: "Tube feed",
        title: "Tube & Pipe Product Page",
        description:
          "The right next stop when the slit strip only makes sense because it is feeding industrial, sanitary, or decorative tube.",
        href: "/products/stainless-steel-tube-pipe",
        cta: "Open product page",
      },
      {
        eyebrow: "Stock form",
        title: "Coil Product Page",
        description:
          "Use this when the order still needs to be framed as feedstock coil with width, edge, and lead-time discipline rather than finished strip alone.",
        href: "/products/stainless-steel-coil",
        cta: "Open product page",
      },
      {
        eyebrow: "Protection check",
        title: "Protective Film",
        description:
          "Use this when the slit strip also needs the right film for laser cutting, bending, export, or high-finish handling.",
        href: "/solutions/capabilities/protective-film",
        cta: "Open capability",
      },
      {
        eyebrow: "Lead-time check",
        title: "Lead Time by Product Form",
        description:
          "Useful when the coil specification is technically clear but delivery still depends on whether strip processing changes the schedule.",
        href: "/knowledge-base/stainless-steel-lead-time-by-product-form",
        cta: "Open article",
      },
    ],
    tools: [
      {
        title: "Open Grade Pages",
        description:
          "Move into 304, 316L, 430, or 2205 when width control is clear but corrosion margin or forming behavior still is not.",
        href: "/grades",
        cta: "Browse grades",
      },
      {
        title: "Browse Capabilities",
        description:
          "Use this when the job still spans slitting, film, panel release, or export packaging rather than strip width alone.",
        href: "/solutions/capabilities",
        cta: "Browse capabilities",
      },
      {
        title: "Ask for Strip Review",
        description:
          "Use this when width stack, burr limit, edge type, or precision class still needs to be tightened before the strip quote is usable.",
        href: "/contact#technical-review",
        cta: "Ask for review",
      },
    ],
    sidebar: {
      relatedTitle: "Strip-Control Links",
      items: [
        { name: "Stainless Steel Coil", href: "/products/stainless-steel-coil" },
        {
          name: "Mill Edge vs Slit Edge",
          href: "/knowledge-base/mill-edge-vs-slit-edge-delivery-standards",
        },
        {
          name: "Precision Strip Tolerance Grades",
          href: "/knowledge-base/precision-ss-strip-tolerance-grades",
        },
        { name: "Protective Film", href: "/solutions/capabilities/protective-film" },
        { name: "Tube & Pipe Product Page", href: "/products/stainless-steel-tube-pipe" },
      ],
      ctaHeading: "Need width class, edge type, or burr guidance?",
      ctaText: "Ask Strip Review",
      ctaHref: "/contact#technical-review",
      ctaSecondaryText: "Request Pricing",
      ctaSecondaryHref: "/contact#pricing-request",
    },
  },
  "protective-coating": {
    eyebrow: "Coating-Stack Decisions",
    title: "Use Protective Coating When Bare Stainless Is No Longer the Final Surface",
    description:
      "This matters when AFP, PVD color, layered finish logic, and touch-zone performance decide the project rather than base stainless alone.",
    zoneLabel: "Coating Case",
    shelfTitle: "Settle the stack before the sample becomes the promise.",
    shelfDescription:
      "Set AFP, mirror layering, and PVD color before the coated route is quoted too broadly.",
    zones: [
      {
        title: "AFP over Brushed Surfaces",
        description:
          "Use this when the project needs a maintained brushed appearance with better touch tolerance, especially on appliance and kitchen fronts.",
        recommendation: "AFP + brushed surface",
      },
      {
        title: "AFP over Mirror",
        description:
          "Use this when the reflective look must stay but the surface also has to survive fingerprints, high touch, and repeated cleaning.",
        recommendation: "Mirror + AFP stack",
      },
      {
        title: "PVD Indoor Decorative Work",
        description:
          "Use this when the value is in controlled color appearance and not in pretending that decorative PVD is a universal outdoor answer.",
        recommendation: "PVD + indoor use",
      },
      {
        title: "Lot-Matched Appliance Programs",
        description:
          "Use this when color, gloss, and repeatability need to hold across repeat orders after the first development sample.",
        recommendation: "Sample-matched control",
      },
    ],
    shelf: [
      {
        eyebrow: "Touch control",
        title: "AFP Finish",
        description:
          "The faster reference when the project really needs anti-fingerprint logic and a cleaner proof layer than a generic coated-surface description.",
        href: "/surfaces/stainless-steel-afp-finish",
        cta: "Open finish page",
      },
      {
        eyebrow: "Layering check",
        title: "AFP over Mirror: When Is It Worth It?",
        description:
          "Use this when the team is still deciding whether the extra stack cost is actually justified by touch zones and cleaning burden.",
        href: "/knowledge-base/afp-over-mirror-when-worth-it",
        cta: "Open article",
      },
      {
        eyebrow: "Color control",
        title: "PVD Colored Stainless Steel",
        description:
          "Best when decorative color is the real requirement and the use case still needs to be framed honestly around indoor use, appearance, and handling.",
        href: "/knowledge-base/pvd-colored-stainless-steel",
        cta: "Open article",
      },
      {
        eyebrow: "Project fit",
        title: "Elevator Application",
        description:
          "Use this when the finish stack belongs in a high-touch project and lot consistency plus maintenance burden matter together.",
        href: "/solutions/applications/elevator-decoration",
        cta: "Open application",
      },
      {
        eyebrow: "Kitchen fit",
        title: "Kitchen Equipment Application",
        description:
          "The right next stop when AFP or decorative coating is being considered for fronts, facings, and appliance-adjacent surfaces.",
        href: "/solutions/applications/kitchen-equipment",
        cta: "Open application",
      },
      {
        eyebrow: "Protection check",
        title: "Protective Film",
        description:
          "Use this when the coating stack is settled but transport and handling can still damage the finished face.",
        href: "/solutions/capabilities/protective-film",
        cta: "Open capability",
      },
    ],
    tools: [
      {
        title: "Compare Finishes",
        description:
          "Move into the wider finish system when the base finish still is not settled before coating is layered on top.",
        href: "/surfaces",
        cta: "Browse finishes",
      },
      {
        title: "Open Finish Guides",
        description:
          "Use finish guidance when the AFP stack is mostly decided and the buyer still needs proof context.",
        href: "/resources/stainless-steel-guides#processing",
        cta: "Open guides",
      },
      {
        title: "Ask for Stack Review",
        description:
          "Use this when coating, base finish, film, or lot-match logic still needs to be confirmed before sample release.",
        href: "/contact#technical-review",
        cta: "Ask for review",
      },
    ],
    sidebar: {
      relatedTitle: "Coating-Stack Links",
      items: [
        { name: "AFP Finish", href: "/surfaces/stainless-steel-afp-finish" },
        { name: "Protective Film", href: "/solutions/capabilities/protective-film" },
        { name: "Surface Finishing", href: "/solutions/capabilities/surface-finish-capability" },
        {
          name: "AFP over Mirror",
          href: "/knowledge-base/afp-over-mirror-when-worth-it",
        },
        { name: "Elevator Application", href: "/solutions/applications/elevator-decoration" },
      ],
      ctaHeading: "Need AFP, PVD, stack order, or lot-match guidance?",
      ctaText: "Ask Stack Review",
      ctaHref: "/contact#technical-review",
      ctaSecondaryText: "Request Pricing",
      ctaSecondaryHref: "/contact#pricing-request",
    },
  },
  "protective-film": {
    eyebrow: "Finish-Preservation Decisions",
    title: "Use Protective Film as Part of the Process, Not as a Packaging Afterthought",
    description:
      "This matters when mirror, AFP, laser-cut faces, bent parts, or export panels can still be damaged by the wrong film even after the stainless itself is correct.",
    zoneLabel: "Preservation Case",
    shelfTitle: "Choose the film from the risk that touches the face.",
    shelfDescription:
      "Packaging, repair limits, and laser work usually decide whether the film is safe enough.",
    zones: [
      {
        title: "Mirror Export Protection",
        description:
          "Use this when the real risk is haze, pressure marks, or scratch transfer during storage, loading, and peel-off.",
        recommendation: "Mirror + export protection",
      },
      {
        title: "Laser-Cut Protected Faces",
        description:
          "Use this when the film has to survive laser processing without residue, burn, or a second cleaning step.",
        recommendation: "Laser-compatible film",
      },
      {
        title: "Bending and Stamping Work",
        description:
          "Use this when the film must stay stable through forming and the wrong tack level would fracture or shift during fabrication.",
        recommendation: "Forming + tack control",
      },
      {
        title: "Coated and AFP Surfaces",
        description:
          "Use this when the finish stack already exists and the film now has to preserve it without undermining the coating logic.",
        recommendation: "Stack-preservation film",
      },
    ],
    shelf: [
      {
        eyebrow: "Damage prevention",
        title: "Mirror Packaging and Scratch Prevention",
        description:
          "Use this when the mirror finish is already correct but transport, loading, and pallet contact still threaten the finish.",
        href: "/knowledge-base/mirror-finish-packaging-scratch-prevention",
        cta: "Open article",
      },
      {
        eyebrow: "Repair limit",
        title: "Scratch Repair Limits",
        description:
          "Best when the real question is whether local repair is still possible or the finish is already commercially compromised.",
        href: "/knowledge-base/stainless-steel-scratch-repair",
        cta: "Open article",
      },
      {
        eyebrow: "Laser fit",
        title: "Laser Cutting Stainless Steel",
        description:
          "Use this when the film has to survive cutting, stay clean at the kerf, and avoid becoming a post-process contamination problem.",
        href: "/knowledge-base/laser-cutting-stainless-steel",
        cta: "Open article",
      },
      {
        eyebrow: "Forming fit",
        title: "Bending Guide",
        description:
          "The right next stop when film choice is tied to bend severity, forming direction, and what the surface must still look like afterward.",
        href: "/knowledge-base/stainless-steel-bending-guide",
        cta: "Open article",
      },
      {
        eyebrow: "Release check",
        title: "Packaging & Logistics",
        description:
          "Use this when the finish-preservation problem extends beyond the shop and into pallets, loading evidence, and transit control.",
        href: "/solutions/capabilities/packaging-logistics",
        cta: "Open capability",
      },
      {
        eyebrow: "Flagship finish",
        title: "8K Mirror Finish",
        description:
          "Use this when film choice only makes sense because the finished face is a mirror system with strict appearance limits.",
        href: "/surfaces/stainless-steel-8k-mirror-finish",
        cta: "Open finish page",
      },
    ],
    tools: [
      {
        title: "Compare Finishes",
        description:
          "Move into the finish line when film choice still depends on whether the base finish is mirror, AFP, No.4, hairline, or BA.",
        href: "/surfaces",
        cta: "Browse finishes",
      },
      {
        title: "Open Buying & Release",
        description:
          "Use this when film choice is tied to export packaging, receiving checks, and what must still be proven on arrival.",
        href: "/resources/stainless-steel-guides",
        cta: "Browse knowledge base",
      },
      {
        title: "Ask for Film Review",
        description:
          "Use this when tack level, film brand, laser compatibility, or removal window still needs to be confirmed before release.",
        href: "/contact#technical-review",
        cta: "Ask for review",
      },
    ],
    sidebar: {
      relatedTitle: "Finish-Preservation Links",
      items: [
        { name: "8K Mirror Finish", href: "/surfaces/stainless-steel-8k-mirror-finish" },
        { name: "Packaging & Logistics", href: "/solutions/capabilities/packaging-logistics" },
        { name: "Laser Cutting", href: "/knowledge-base/laser-cutting-stainless-steel" },
        { name: "Scratch Repair Limits", href: "/knowledge-base/stainless-steel-scratch-repair" },
        { name: "Surface Finishing", href: "/solutions/capabilities/surface-finish-capability" },
      ],
      ctaHeading: "Need film brand, tack level, or removal-window guidance?",
      ctaText: "Ask Film Review",
      ctaHref: "/contact#technical-review",
      ctaSecondaryText: "Request Pricing",
      ctaSecondaryHref: "/contact#pricing-request",
    },
  },
  "packaging-logistics": {
    eyebrow: "Export-Release Decisions",
    title: "Use Packaging and Logistics as Part of Release Control, Not as the Final Admin Step",
    description:
      "This matters when surface condition, humidity, transit proof, and arrival evidence can still decide whether the shipment is accepted after the material is already correct.",
    zoneLabel: "Release Case",
    shelfTitle: "Keep the arrival proof close to the shipment.",
    shelfDescription:
      "Transit method, receiving check, and MTC reading are where a dispute either calms down or grows.",
    zones: [
      {
        title: "Finish-Critical Export Orders",
        description:
          "Use this when mirror, AFP, or bright-finish material can lose commercial value from packaging mistakes alone.",
        recommendation: "Finish + export protection",
      },
      {
        title: "Mixed-Container and Trial Orders",
        description:
          "Use this when small-batch or mixed-form shipments need clearer pallet, label, and release discipline than large routine loads.",
        recommendation: "Mixed-load control",
      },
      {
        title: "Sanitary and Clean Components",
        description:
          "Use this when tube ends, clean bores, wrapped faces, and document integrity matter as much as transit survival.",
        recommendation: "Clean release check",
      },
      {
        title: "Claim-Sensitive Shipments",
        description:
          "Use this when the order is large enough, visible enough, or politically sensitive enough that arrival evidence must already be planned before dispatch.",
        recommendation: "Evidence-chain plan",
      },
    ],
    shelf: [
      {
        eyebrow: "Transit control",
        title: "Export Packaging and Container Loading",
        description:
          "The faster reference when the shipment logic, moisture control, and loading method still need to be made explicit before dispatch.",
        href: "/knowledge-base/stainless-steel-export-packaging-container-loading",
        cta: "Open article",
      },
      {
        eyebrow: "Arrival check",
        title: "Delivery Inspection",
        description:
          "Use this when the buyer still needs a truckside or dockside release sequence before the arrival becomes a claim problem.",
        href: "/knowledge-base/how-to-inspect-stainless-steel-delivery",
        cta: "Open article",
      },
      {
        eyebrow: "Document proof",
        title: "How to Read the MTC",
        description:
          "Best when the shipment is physically present but the release decision still depends on what the paperwork actually proves.",
        href: "/knowledge-base/how-to-read-mill-test-certificate",
        cta: "Open article",
      },
      {
        eyebrow: "Document timing",
        title: "Samples, MTC, and Certificate of Origin",
        description:
          "Use this when the real release question is which document should exist at which stage of the order.",
        href: "/knowledge-base/stainless-steel-samples-mtc-certificate-of-origin",
        cta: "Open article",
      },
      {
        eyebrow: "Claim evidence",
        title: "How to File a Quality Complaint",
        description:
          "The right next stop when the receiving evidence suggests the shipment has already failed and the claim now needs structure.",
        href: "/knowledge-base/how-to-file-quality-complaint-stainless-steel",
        cta: "Open article",
      },
      {
        eyebrow: "Protection check",
        title: "Protective Film",
        description:
          "Use this when export protection is only as strong as the film that preserved the finish before the pallet was built.",
        href: "/solutions/capabilities/protective-film",
        cta: "Open capability",
      },
    ],
    tools: [
      {
        title: "Open Buying & Release",
        description:
          "Move into buying and release when the shipment still depends on packaging clauses, docs, lead time, or claim-prevention language.",
        href: "/resources/stainless-steel-guides",
        cta: "Browse knowledge base",
      },
      {
        title: "Compare Finishes",
        description:
          "Use this when export handling is really being driven by mirror, AFP, BA, or other finish-sensitive requirements.",
        href: "/surfaces",
        cta: "Browse finishes",
      },
      {
        title: "Ask for Release Review",
        description:
          "Use this when packaging spec, pallet logic, loading photos, or arrival-proof expectations still need to be tightened before shipment.",
        href: "/contact#documentation-samples",
        cta: "Ask for review",
      },
    ],
    sidebar: {
      relatedTitle: "Export-Release Links",
      items: [
        {
          name: "Export Packaging Article",
          href: "/knowledge-base/stainless-steel-export-packaging-container-loading",
        },
        {
          name: "Delivery Inspection",
          href: "/knowledge-base/how-to-inspect-stainless-steel-delivery",
        },
        {
          name: "How to Read the MTC",
          href: "/knowledge-base/how-to-read-mill-test-certificate",
        },
        { name: "Protective Film", href: "/solutions/capabilities/protective-film" },
        { name: "8K Mirror Finish", href: "/surfaces/stainless-steel-8k-mirror-finish" },
      ],
      ctaHeading: "Need packaging specs, docs, or arrival-proof guidance?",
      ctaText: "Ask Release Review",
      ctaHref: "/contact#documentation-samples",
      ctaSecondaryText: "Request Pricing",
      ctaSecondaryHref: "/contact#pricing-request",
    },
  },
};

export function isCapabilityRouteSlug(slug: string): slug is CapabilityRouteSlug {
  return slug in CAPABILITY_DESK_CONFIG;
}

export function getCapabilitySidebarConfig(
  slug: string
): CapabilitySidebarConfig | null {
  if (!isCapabilityRouteSlug(slug)) return null;
  return CAPABILITY_DESK_CONFIG[slug].sidebar;
}

export function CapabilityRouteDesk({ slug }: { slug: CapabilityRouteSlug }) {
  const config = CAPABILITY_DESK_CONFIG[slug];

  return (
    <section className="relative overflow-hidden rounded-[1.5rem] border border-[#d8cbb8] bg-[linear-gradient(145deg,#fbf8f0_0%,#f3eadb_100%)] p-5 shadow-[0_18px_54px_rgba(13,20,27,0.07)] sm:p-7">
      <div
        aria-hidden
        className="absolute right-[-5rem] top-[-5rem] h-44 w-44 rounded-full border border-white/70"
      />
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

      <div className="mt-8 grid gap-3 md:grid-cols-2">
        {config.zones.map((zone) => (
          <article
            key={zone.title}
            className="flex h-full flex-col rounded-card-md border border-white/80 bg-white/82 p-5 shadow-[0_10px_28px_rgba(13,20,27,0.04)] backdrop-blur-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-text-light">
              {config.zoneLabel}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-brand-dark">
              {zone.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">
              {zone.description}
            </p>
            <div className="mt-4 inline-flex w-fit rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-dark">
              {zone.recommendation}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-card-md border border-[#d8cbb8] bg-white/82 p-5 shadow-[0_10px_30px_rgba(13,20,27,0.04)]">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-text-light">
              Related reads
            </p>
            <h3 className="mt-2 text-lg font-semibold text-brand-dark">
              {config.shelfTitle}
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-text-secondary">
              {config.shelfDescription}
            </p>
          </div>
          <Link
            href="/resources/stainless-steel-guides"
            className="text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent-hover"
          >
            More Stainless Steel Guides
          </Link>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          {config.shelf.slice(0, 3).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex h-full flex-col rounded-card-sm border border-cream-border-soft bg-cream-50 px-4 py-3 transition hover:border-brand-accent/50 hover:bg-white"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-light">
                {item.eyebrow}
              </p>
              <h4 className="mt-2 flex-1 text-sm font-semibold leading-6 text-brand-dark">
                {item.title}
              </h4>
              <p className="mt-2 flex-1 text-xs leading-5 text-text-secondary">
                {item.description}
              </p>
              <span className="mt-3 text-xs font-semibold text-brand-accent">
                {item.cta}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {config.tools.map((tool) => (
          <article
            key={tool.href}
            className="flex h-full flex-col rounded-card-md border border-[#d8cbb8] bg-white/88 p-5"
          >
            <h3 className="text-lg font-semibold text-brand-dark">{tool.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-6 text-text-secondary">
              {tool.description}
            </p>
            <Link
              href={tool.href}
              className="mt-5 inline-flex items-center text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent-hover"
            >
              {tool.cta}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}


