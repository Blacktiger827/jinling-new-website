import Image from "next/image";

interface VisualProofItem {
  src: string;
  alt: string;
  label: string;
  caption: string;
}

interface VisualProofConfig {
  eyebrow: string;
  title: string;
  description: string;
  images: readonly VisualProofItem[];
}

const productVisualGroups = {
  coil: {
    eyebrow: "Product photos",
    title: "See the coil condition before the spec moves downstream.",
    description:
      "Use these photos as a quick visual check for stock form, surface protection, and release condition before narrowing width, edge, and packing details.",
    images: [
      {
        src: "/images/products/coil/hero.webp",
        alt: "Stainless steel coil ready for handling",
        label: "Coil stock",
        caption: "Set width, edge, ID / OD, and rewind weight before comparing price.",
      },
      {
        src: "/images/products/coil/gallery-2.webp",
        alt: "Protected stainless steel coil after processing",
        label: "Protected face",
        caption: "Film, edge, and packing choices protect the surface after the coil leaves the line.",
      },
      {
        src: "/images/capabilities/slitting-edging/gallery-1.webp",
        alt: "Stainless steel strip moving through slitting equipment",
        label: "Line release",
        caption: "Slitting and downstream feed work best when the release plan is set early.",
      },
    ],
  },
  sheet: {
    eyebrow: "Product photos",
    title: "See the sheet and plate face before choosing the finish route.",
    description:
      "Sheet orders are judged by flatness, visible face, cut route, and handling condition. The photos keep that decision visible while reading the spec.",
    images: [
      {
        src: "/images/products/sheet/gallery-1.webp",
        alt: "Stainless steel sheet processing line",
        label: "Cut route",
        caption: "Cut-to-length, shearing, and laser routes need different release expectations.",
      },
      {
        src: "/images/products/sheet/hero.webp",
        alt: "Stainless steel sheet and plate stock",
        label: "Sheet stock",
        caption: "Panel and blank orders start with size, flatness, and visible-face logic.",
      },
      {
        src: "/images/products/sheet/gallery-2.webp",
        alt: "Finished stainless steel sheet stack",
        label: "Surface release",
        caption: "Mirror, brushed, hairline, BA, and AFP should be specified as surface systems.",
      },
    ],
  },
  bar: {
    eyebrow: "Product photos",
    title: "See the bar form before locking tolerance and machining notes.",
    description:
      "Bar orders need a cleaner distinction between shape, straightness, surface condition, and machining stock than a catalog name can provide.",
    images: [
      {
        src: "/images/products/bar/gallery-1.webp",
        alt: "Stainless steel bars prepared for shipment",
        label: "Release bundle",
        caption: "Bundling and protection matter when bars arrive for machining or fabrication.",
      },
      {
        src: "/images/products/bar/hero.webp",
        alt: "Stainless steel bar stock",
        label: "Bar family",
        caption: "Round, flat, angle, square, and hex bars each carry different tolerance questions.",
      },
      {
        src: "/images/products/bar/gallery-2.webp",
        alt: "Stainless steel bar surface condition",
        label: "Surface condition",
        caption: "Hot-rolled, peeled, bright-drawn, or polished routes should be named early.",
      },
    ],
  },
  roundBar: {
    eyebrow: "Product photos",
    title: "See round bar as machining stock, not generic long product.",
    description:
      "Round bar decisions start with diameter, straightness, end condition, and whether the stock is hot-rolled, bright-drawn, peeled, or ground.",
    images: [
      {
        src: "/images/products/round-bar/gallery-1.webp",
        alt: "Long stainless round bars aligned for handling",
        label: "Straightness cue",
        caption: "Long bar release should name straightness and stock condition early.",
      },
      {
        src: "/images/products/round-bar/hero.webp",
        alt: "Stainless steel round bar bundle with visible circular ends",
        label: "Solid bar ends",
        caption: "Circular cut ends make the product identity clear before tolerance is discussed.",
      },
      {
        src: "/images/products/round-bar/gallery-2.webp",
        alt: "Stainless round bars bundled for fabrication or machining",
        label: "Bundle release",
        caption: "Bundling and end protection matter once bars move into machining feed.",
      },
    ],
  },
  flatBar: {
    eyebrow: "Product photos",
    title: "See flat bar through edge, face, and bundle condition.",
    description:
      "Flat bar looks simple until edge condition, straightness, and rectangular stock tolerance decide whether it fits welding, framing, or machining work.",
    images: [
      {
        src: "/images/products/flat-bar/gallery-1.webp",
        alt: "Stainless flat bars stacked for release",
        label: "Edge condition",
        caption: "Deburred, sheared, or mill edge should be agreed before release.",
      },
      {
        src: "/images/products/flat-bar/hero.webp",
        alt: "Stainless steel flat bar stack with protected edges",
        label: "Flat stock",
        caption: "Use this route when rectangular stock and controlled edges matter more than panel width.",
      },
      {
        src: "/images/products/flat-bar/gallery-2.webp",
        alt: "Stainless flat bar bundle ready for fabrication",
        label: "Bundle route",
        caption: "Packing should protect the long faces and corners, not only hold the bundle together.",
      },
    ],
  },
  angleBar: {
    eyebrow: "Product photos",
    title: "See angle bar as geometry, not just another bar shape.",
    description:
      "Angle bar needs leg ratio, perpendicularity, markings, and bundle protection to stay visible before the grade conversation gets too long.",
    images: [
      {
        src: "/images/products/angle-bar/gallery-1.webp",
        alt: "Stainless steel angle bars bundled for release",
        label: "Bundle release",
        caption: "Perpendicularity, straightness, and edge condition matter during fit-up.",
      },
      {
        src: "/images/products/angle-bar/hero.webp",
        alt: "Stainless steel angle bars stacked with visible equal-leg profile",
        label: "Leg geometry",
        caption: "Equal and unequal leg routes should be separated before the order becomes a generic bar request.",
      },
      {
        src: "/images/products/angle-bar/gallery-2.webp",
        alt: "Stainless angle bar surface and profile detail",
        label: "Face and corner",
        caption: "The useful check is whether the section, corner, and face condition match the frame or bracket.",
      },
    ],
  },
  squareHexBar: {
    eyebrow: "Product photos",
    title: "See square and hex profiles before fixing AF and corner notes.",
    description:
      "Square and hex bar pages need geometry proof: side size, across-flats, corner condition, and release route decide whether the stock fits fastener or frame work.",
    images: [
      {
        src: "/images/products/square-hex-bar/gallery-1.webp",
        alt: "Stainless steel hex bars with red protected ends",
        label: "Hex profile",
        caption: "Hex bar needs across-flats dimension and corner condition stated clearly.",
      },
      {
        src: "/images/products/square-hex-bar/hero.webp",
        alt: "Stainless steel square bars stacked with visible square ends",
        label: "Square profile",
        caption: "Square bar belongs to frame, block, and keyed-stock decisions.",
      },
      {
        src: "/images/products/square-hex-bar/gallery-2.webp",
        alt: "Stainless square bar bundle in factory stock",
        label: "Profile release",
        caption: "Profile-specific photos prevent square, hex, and round bar from collapsing into one generic bar page.",
      },
    ],
  },
  tube: {
    eyebrow: "Product photos",
    title: "See the tube condition before choosing standard, wall, and finish.",
    description:
      "Tube and pipe pages should show bore, wall, end protection, and visible surface because those details decide whether the order releases cleanly.",
    images: [
      {
        src: "/images/products/tube/gallery-1.webp",
        alt: "Stainless steel tube production and inspection",
        label: "Inspection route",
        caption: "Hydrostatic, dimensional, weld, or surface checks should match the final use.",
      },
      {
        src: "/images/products/tube/hero.webp",
        alt: "Stainless steel tube and pipe stock",
        label: "Tube stock",
        caption: "Industrial, sanitary, and decorative tube orders start from different acceptance logic.",
      },
      {
        src: "/images/products/tube/gallery-2.webp",
        alt: "Protected stainless steel tube ends",
        label: "End protection",
        caption: "Tube-end handling and packing are part of the delivery condition, not decoration.",
      },
    ],
  },
  sanitaryTube: {
    eyebrow: "Product photos",
    title: "See sanitary tube through bore, polish, and protected release.",
    description:
      "Sanitary tube should show clean bore logic, polished outside condition, and end protection because hygiene and pressure release are judged together.",
    images: [
      {
        src: "/images/products/sanitary-tube/gallery-1.webp",
        alt: "Long stainless sanitary tubes on a production line",
        label: "Line route",
        caption: "The release route starts before polishing, hydro test, and final cleaning.",
      },
      {
        src: "/images/products/sanitary-tube/hero.webp",
        alt: "Polished stainless sanitary tubes staged in the workshop",
        label: "A270 tube stock",
        caption: "The page promise is hygienic release, so the image should not be a generic pipe bundle.",
      },
      {
        src: "/images/products/sanitary-tube/gallery-2.webp",
        alt: "Wrapped stainless sanitary tube ends prepared for packing",
        label: "Protected ends",
        caption: "End protection keeps the clean release condition intact after inspection.",
      },
    ],
  },
  industrialPipe: {
    eyebrow: "Product photos",
    title: "See industrial pipe through schedule, bore, and pressure-route evidence.",
    description:
      "Industrial pipe should not look like decorative tube. The photos keep the decision tied to wall, bore, bundle, and pressure-service release.",
    images: [
      {
        src: "/images/products/industrial-pipe/gallery-1.webp",
        alt: "Stainless industrial pipe bundles staged in the workshop",
        label: "Pipe stock",
        caption: "Bundle condition and pipe ends help separate pressure pipe from visible decorative tube.",
      },
      {
        src: "/images/products/industrial-pipe/hero.webp",
        alt: "Large stainless industrial pipes with visible bore and wall",
        label: "Pressure route",
        caption: "Schedule, wall tolerance, and code-facing proof decide this family before finish does.",
      },
      {
        src: "/images/products/industrial-pipe/gallery-2.webp",
        alt: "Close-up of stainless pipe wall and bore condition",
        label: "Bore and wall",
        caption: "Wall, weld route, hydro test, NDT, and MTC evidence belong in the same release conversation.",
      },
    ],
  },
  decorativeTube: {
    eyebrow: "Product photos",
    title: "See decorative pipe through finish, handling, and visible-use evidence.",
    description:
      "Decorative pipe is judged more like an exposed surface than a pressure product. The photos keep the release route tied to appearance, protection, and the finish family.",
    images: [
      {
        src: "/images/products/decorative-pipe/gallery-1.webp",
        alt: "Decorative stainless tube profile close-up",
        label: "Profile detail",
        caption: "The product still needs tube evidence: diameter, wall, seam, face, and handling route.",
      },
      {
        src: "/images/products/decorative-pipe/hero.webp",
        alt: "Mirror-finish decorative stainless tube surface under production light",
        label: "Visible finish route",
        caption: "Set diameter, wall, seam route, and the finish that will remain visible after installation.",
      },
      {
        src: "/images/products/decorative-pipe/gallery-2.webp",
        alt: "Decorative stainless tube bundles staged in factory stock",
        label: "Packing check",
        caption: "Decorative tube still needs ordinary handling discipline: bundle, sleeve, edge, and visible face checked together.",
      },
    ],
  },
} as const satisfies Record<string, VisualProofConfig>;

const productVisualGroupBySlug: Record<string, keyof typeof productVisualGroups> = {
  "stainless-steel-coil": "coil",
  "stainless-steel-sheet": "sheet",
  "stainless-steel-plate": "sheet",
  "stainless-steel-bar": "bar",
  "stainless-steel-round-bar": "roundBar",
  "stainless-steel-flat-bar": "flatBar",
  "stainless-steel-angle-bar": "angleBar",
  "stainless-steel-square-hex-bar": "squareHexBar",
  "stainless-steel-tube-pipe": "tube",
  "stainless-steel-industrial-pipe": "industrialPipe",
  "stainless-steel-sanitary-tube": "sanitaryTube",
  "stainless-steel-decorative-pipe": "decorativeTube",
};

const surfaceVisualGalleryBySlug: Record<string, VisualProofConfig> = {
  "stainless-steel-afp-finish": {
    eyebrow: "Finish photos",
    title: "See AFP as a surface system, not a coating label.",
    description:
      "AFP needs the base finish, topcoat, film, bend route, and cleaning expectation to be specified together.",
    images: [
      {
        src: "/images/surfaces/afp/hero.webp",
        alt: "AFP stainless steel sample showing coated brushed base finish",
        label: "Base plus coating",
        caption: "AFP starts with the chosen base finish; the clear top layer changes touch and cleaning, not the visual language.",
      },
      {
        src: "/images/surfaces/afp/gallery-1.webp",
        alt: "Dark AFP stainless steel sample with controlled reflection",
        label: "Touch zone",
        caption: "Use AFP where fingerprints, wipe marks, and daily cleaning become part of acceptance.",
      },
      {
        src: "/images/surfaces/afp/gallery-2.webp",
        alt: "AFP coating line applying finish to stainless sheet",
        label: "Coating line",
        caption: "The coating route has to match gloss, colour, cure, film, and downstream fabrication.",
      },
    ],
  },
  "stainless-steel-no4-brushed-finish": {
    eyebrow: "Finish photos",
    title: "See No.4 as a practical satin face.",
    description:
      "No.4 succeeds when grain, repairability, film, and substrate are aligned with the equipment or panel use.",
    images: [
      {
        src: "/images/surfaces/no4-brushed/hero.webp",
        alt: "No.4 brushed stainless steel sheet",
        label: "Satin grain",
        caption: "No.4 reads as a shorter, practical satin grain. Specify the face side before release.",
      },
      {
        src: "/images/surfaces/no4-brushed/gallery-1.webp",
        alt: "No.4 brushed stainless steel close-up",
        label: "Short grain",
        caption: "The value is not shine; it is a controlled, serviceable face that tolerates real equipment use.",
      },
      {
        src: "/images/products/sheet/gallery-2.webp",
        alt: "Stainless steel sheet stack ready for surface release",
        label: "Spec cue",
        caption: "Use Ra, grit logic, and sample approval instead of relying on the finish name alone.",
      },
    ],
  },
  "stainless-steel-hairline-finish": {
    eyebrow: "Finish photos",
    title: "See hairline as a direction-sensitive architectural finish.",
    description:
      "Hairline needs grain direction, lot continuity, panel orientation, and protective film to stay consistent after installation.",
    images: [
      {
        src: "/images/surfaces/hairline/hero.webp",
        alt: "Hairline stainless steel surface",
        label: "Directional face",
        caption: "Hairline is quieter and longer than No.4; the whole wall changes when direction is not controlled.",
      },
      {
        src: "/images/surfaces/hairline/gallery-1.webp",
        alt: "Hairline stainless steel sheet with long directional grain",
        label: "Grain continuity",
        caption: "Use a sample and orientation note before mixing lots or panel directions.",
      },
      {
        src: "/images/products/sheet/gallery-2.webp",
        alt: "Stainless steel sheet stack prepared for visible surface release",
        label: "Panel sequence",
        caption: "Large hairline jobs need panel order, film, and lot control before the first wall goes up.",
      },
    ],
  },
  "stainless-steel-2b-finish": {
    eyebrow: "Finish photos",
    title: "See 2B as the foundation finish before later processing.",
    description:
      "2B is often the starting face for fabrication, not the final decorative answer. Use the visuals to separate base stock from visible finish.",
    images: [
      {
        src: "/images/surfaces/2b/hero.webp",
        alt: "2B stainless steel mill finish",
        label: "Mill finish",
        caption: "2B is the practical baseline when forming, welding, and later processing matter more than shine.",
      },
      {
        src: "/images/products/sheet/gallery-1.webp",
        alt: "Stainless steel sheet stock before finish processing",
        label: "Base stock",
        caption: "Confirm whether the surface stays 2B or moves to BA, No.4, hairline, mirror, or AFP.",
      },
      {
        src: "/images/products/coil/gallery-1.webp",
        alt: "Stainless steel coil used as base stock for later finishing",
        label: "Supply state",
        caption: "2B usually starts as a stock-form decision: sheet, coil, slit strip, then later finish route.",
      },
    ],
  },
  "stainless-steel-ba-finish": {
    eyebrow: "Finish photos",
    title: "See BA as a bright mill finish, not mirror polish.",
    description:
      "BA can be a final bright face or a better polishing base, but it still needs substrate, film, and handling control.",
    images: [
      {
        src: "/images/surfaces/ba/hero.webp",
        alt: "BA bright annealed stainless steel sample",
        label: "Bright mill face",
        caption: "BA gives a smoother, brighter mill finish without becoming a polished mirror.",
      },
      {
        src: "/images/surfaces/ba/gallery-1.webp",
        alt: "BA stainless steel surface checked as a bright mill finish",
        label: "Bright control",
        caption: "BA should be approved as a bright mill face, not treated as a loose mirror substitute.",
      },
      {
        src: "/images/surfaces/ba/gallery-2.webp",
        alt: "BA stainless steel sheet prepared for downstream polishing or AFP",
        label: "Process base",
        caption: "If BA feeds AFP or mirror polishing later, say that before film and handling are chosen.",
      },
    ],
  },
};

const capabilityVisualGalleryBySlug: Record<string, VisualProofConfig> = {
  "surface-finish-capability": {
    eyebrow: "Process photos",
    title: "Finish release has to be seen on the line.",
    description:
      "Surface work is credible when the polishing route, inspection light, coating route, and film decision stay connected before shipment.",
    images: [
      {
        src: "/images/surfaces/no8-mirror/hero.webp",
        alt: "8K mirror stainless steel sheet with controlled reflection",
        label: "Mirror face",
        caption:
          "Reflective work starts with the face the buyer will inspect, not the finish name alone.",
      },
      {
        src: "/images/capabilities/surface-finishing/gallery-1.webp",
        alt: "Mirror stainless steel surface inspection under controlled light",
        label: "Inspection light",
        caption:
          "Visible faces should be checked under the light condition the buyer will use.",
      },
      {
        src: "/images/surfaces/afp/gallery-3.webp",
        alt: "Surface finishing line for coated stainless steel sheet",
        label: "Stack route",
        caption:
          "AFP and coating routes only work when base finish, film, and inspection rule stay connected.",
      },
    ],
  },
  "cut-to-length": {
    eyebrow: "Process photos",
    title: "Panel release is about flatness, face handling, and stack logic.",
    description:
      "Cut-to-length should look like a controlled panel route, not simply coil cut shorter. Size, surface, and packing stay in the same decision.",
    images: [
      {
        src: "/images/capabilities/cut-to-length/gallery-1.webp",
        alt: "Stainless steel sheet inventory arranged inside the workshop",
        label: "Stack control",
        caption:
          "Stacking and separation decide whether the surface arrives as released.",
      },
      {
        src: "/images/capabilities/cut-to-length/gallery-2.webp",
        alt: "Brushed stainless steel sheet surface close-up",
        label: "Visible face",
        caption:
          "The route should name the face side, film, edge, and flatness target together.",
      },
    ],
  },
  "slitting-edging": {
    eyebrow: "Process photos",
    title: "Strip quality is decided by width, edge, rewind, and protection.",
    description:
      "Slitting looks simple until the next line starts running. The useful proof is whether the strip can feed cleanly after the coil is rewound.",
    images: [
      {
        src: "/images/capabilities/slitting-edging/gallery-1.webp",
        alt: "Stainless coil feeding into a processing line",
        label: "Line feed",
        caption:
          "The feed route should match the downstream tube mill, roll former, or stamping line.",
      },
      {
        src: "/images/capabilities/slitting-edging/gallery-2.webp",
        alt: "Protected stainless steel coils staged after processing",
        label: "Rewind and pack",
        caption:
          "A clean slit edge still needs stable rewind and packing before export.",
      },
    ],
  },
  "protective-coating": {
    eyebrow: "Process photos",
    title: "Coating control starts with the base finish.",
    description:
      "AFP and PVD are stack decisions. The coating should improve the release route without hiding a weak substrate, wrong film, or unapproved sample.",
    images: [
      {
        src: "/images/capabilities/protective-coating/gallery-1.webp",
        alt: "Protective coating sample checked against a stainless steel base finish",
        label: "Base face",
        caption:
          "The substrate has to be approved before AFP or color work can carry the order.",
      },
      {
        src: "/images/capabilities/protective-coating/gallery-2.webp",
        alt: "Dark protective coating sample showing controlled reflection",
        label: "Coating contrast",
        caption:
          "Touch, cleaning, and reflection should be checked on a sample, not guessed from a finish name.",
      },
      {
        src: "/images/surfaces/coloring/gallery-1.webp",
        alt: "PVD color stainless steel samples layered for comparison",
        label: "Color sample",
        caption:
          "PVD work needs a sample-approved tone before fabrication and packing decisions move forward.",
      },
    ],
  },
  "protective-film": {
    eyebrow: "Process photos",
    title: "Film belongs to the next process, not the warehouse default.",
    description:
      "Laser cutting, bending, mirror release, AFP coating, storage, and export all ask different things from the film. The choice has to be made before handling starts.",
    images: [
      {
        src: "/images/capabilities/protective-film/gallery-2.webp",
        alt: "Mirror stainless steel face checked before release",
        label: "Peel check",
        caption:
          "Film should peel cleanly after the real handling route, not only look neat on the line.",
      },
      {
        src: "/images/products/sanitary-tube/gallery-2.webp",
        alt: "Protected stainless tube surfaces wrapped for clean release",
        label: "Wrapped route",
        caption:
          "Protection has to survive handling, storage, and the moment the buyer removes it.",
      },
      {
        src: "/images/capabilities/protective-film/gallery-1.webp",
        alt: "Wrapped stainless steel coils staged after processing",
        label: "Transit hold",
        caption:
          "Film and wrap decisions should still make sense after export handling and storage.",
      },
    ],
  },
  "packaging-logistics": {
    eyebrow: "Release photos",
    title: "Packing should prove how the material stayed protected.",
    description:
      "The final pack is not decoration. It has to protect faces, edges, bores, labels, and moisture condition long enough for the buyer to receive what was released.",
    images: [
      {
        src: "/images/capabilities/packaging-logistics/gallery-1.webp",
        alt: "Stainless steel sheets stacked for controlled release",
        label: "Sheet stack",
        caption:
          "Flat material needs separation and edge logic before it becomes a sea-freight claim.",
      },
      {
        src: "/images/capabilities/packaging-logistics/gallery-2.webp",
        alt: "Wrapped stainless steel tube ends prepared for shipment",
        label: "End protection",
        caption:
          "Tube and sanitary routes need the bore and end condition protected after inspection.",
      },
      {
        src: "/images/products/coil/gallery-2.webp",
        alt: "Protected stainless steel coil after processing",
        label: "Coil hold",
        caption:
          "Coil packing should keep the face, edge, label, and unwind condition readable on arrival.",
      },
    ],
  },
};

export function getProductVisualGallery(slug: string) {
  const group = productVisualGroupBySlug[slug];
  return group ? productVisualGroups[group] : undefined;
}

export function getSurfaceVisualGallery(slug: string) {
  return surfaceVisualGalleryBySlug[slug];
}

export function getCapabilityVisualGallery(slug: string) {
  return capabilityVisualGalleryBySlug[slug];
}

export function VisualProofGallery({
  config,
  variant = "default",
}: {
  config: VisualProofConfig;
  variant?: "default" | "capability" | "product";
}) {
  const [leadImage, ...supportImages] = config.images;
  const isCapability = variant === "capability";
  const isProduct = variant === "product";

  return (
    <section
      className={
        isCapability
          ? "overflow-hidden rounded-[1.45rem] border border-[#d8cbb8] bg-[linear-gradient(145deg,#fbfaf6_0%,#eee3d2_100%)] shadow-[0_20px_58px_rgba(13,20,27,0.08)]"
          : isProduct
          ? "overflow-hidden rounded-[1.45rem] border border-[#d8cbb8] bg-[linear-gradient(145deg,#fbfaf6_0%,#eee3d2_100%)] shadow-[0_20px_58px_rgba(13,20,27,0.08)]"
          : "overflow-hidden rounded-card-lg border border-cream-border bg-[linear-gradient(145deg,#fbfaf6_0%,#efe7d9_100%)] shadow-[0_18px_58px_rgba(13,20,27,0.075)]"
      }
    >
      <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[18rem] bg-[#d8d0c2]">
          <Image
            src={leadImage.src}
            alt={leadImage.alt}
            fill
            className={
              isCapability || isProduct
                ? "object-cover saturate-[0.86] contrast-[1.04]"
                : "object-cover"
            }
            sizes="(min-width: 1024px) 32rem, 100vw"
          />
          <div
            className={
              isCapability
                ? "absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.02)_0%,rgba(13,20,27,0.48)_100%)]"
                : isProduct
                ? "absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.02)_0%,rgba(13,20,27,0.46)_100%)]"
                : "absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.04)_0%,rgba(13,20,27,0.44)_100%)]"
            }
          />
          {(isCapability || isProduct) && (
            <div
              className="absolute left-0 top-0 h-full w-1 bg-brand-accent"
              aria-hidden="true"
            />
          )}
          <div className="absolute bottom-0 left-0 p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent">
              {leadImage.label}
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-white/84">
              {leadImage.caption}
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center p-5 sm:p-6">
          <div className="flex items-center gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-accent">
              {config.eyebrow}
            </p>
            {(isCapability || isProduct) && (
              <span
                className="h-px flex-1 bg-[#d8cbb8]"
                aria-hidden="true"
              />
            )}
          </div>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-brand-dark">
            {config.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-text-secondary">
            {config.description}
          </p>

          {supportImages.length > 0 && (
            <div
              className={`mt-5 grid gap-3 ${
                supportImages.length === 1 ? "" : "sm:grid-cols-2"
              }`}
            >
              {supportImages.map((image) => (
                <figure
                  key={image.src}
                  className={
                    isCapability
                      ? "overflow-hidden rounded-card-sm border border-[#d8cbb8] bg-[#fffdf8]"
                      : isProduct
                      ? "overflow-hidden rounded-card-sm border border-[#d8cbb8] bg-[#fffdf8]"
                      : "overflow-hidden rounded-card-sm border border-cream-border bg-white"
                  }
                >
                  <div className="relative h-28 bg-[#d8d0c2]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className={
                        isCapability || isProduct
                          ? "object-cover saturate-[0.86] contrast-[1.04]"
                          : "object-cover"
                      }
                      sizes="(min-width: 1024px) 12rem, 50vw"
                    />
                  </div>
                  <figcaption className="p-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.13em] text-brand-accent">
                      {image.label}
                    </p>
                    <p className="mt-1 line-clamp-3 text-xs leading-5 text-text-secondary">
                      {image.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
