import { getContent, getContentSlugs } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SHOW_COMMERCIAL_RELATED_ARTICLES } from "@/lib/commercial-related-articles";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getContentSlugs("applications").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const content = await getContent("applications", slug);
  if (!content) return {};
  return {
    title: content.seoTitle || content.title,
    description: content.description,
    alternates: {
      canonical: `/solutions/applications/${slug}`,
    },
  };
}

export default async function ApplicationPage({ params }: Props) {
  const { slug } = await params;
  const content = await getContent("applications", slug);
  if (!content) notFound();
  if (slug === "kitchen-equipment") {
    return (
      <>
        <ApplicationBreadcrumbBar title="Kitchen Equipment" />
        <KitchenEquipmentHero />
        <KitchenEquipmentUseCases />
        <KitchenEquipmentSelectionGuide />
        <KitchenEquipmentMaterialLogic />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <KitchenEquipmentRelatedLinks /> : null}
      </>
    );
  }
  if (slug === "elevator-decoration") {
    return (
      <>
        <ApplicationBreadcrumbBar title="Elevator & Interiors" />
        <ElevatorInteriorsHero />
        <ElevatorInteriorsUseCases />
        <ElevatorInteriorsSelectionGuide />
        <ElevatorInteriorsMaterialLogic />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <ElevatorInteriorsRelatedLinks /> : null}
      </>
    );
  }
  if (slug === "architecture") {
    return (
      <>
        <ApplicationBreadcrumbBar title="Architecture" />
        <ArchitectureHero />
        <ArchitectureUseCases />
        <ArchitectureSelectionGuide />
        <ArchitectureMaterialLogic />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <ArchitectureRelatedLinks /> : null}
      </>
    );
  }
  if (slug === "food-beverage") {
    return (
      <>
        <ApplicationBreadcrumbBar title="Food & Beverage" />
        <FoodBeverageHero />
        <FoodBeverageRiskMap />
        <FoodBeverageRequirementMatrix />
        <FoodBeverageDecisionPath />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <FoodBeverageRelatedLinks /> : null}
      </>
    );
  }
  if (slug === "medical-pharmaceutical") {
    return (
      <>
        <ApplicationBreadcrumbBar title="Medical & Pharma" />
        <MedicalPharmaHero />
        <MedicalPharmaRiskMap />
        <MedicalPharmaRequirementMatrix />
        <MedicalPharmaDecisionPath />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <MedicalPharmaRelatedLinks /> : null}
      </>
    );
  }
  if (slug === "oil-gas") {
    return (
      <>
        <ApplicationBreadcrumbBar title="Oil & Gas" />
        <OilGasHero />
        <OilGasOperatingConditions />
        <OilGasCorrosionRoute />
        <OilGasSpecificationChecklist />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <OilGasRelatedLinks /> : null}
      </>
    );
  }
  if (slug === "chemical-petrochemical") {
    return (
      <>
        <ApplicationBreadcrumbBar title="Chemical Process" />
        <ChemicalProcessHero />
        <ChemicalProcessOperatingConditions />
        <ChemicalProcessMaterialRoute />
        <ChemicalProcessSpecificationChecklist />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <ChemicalProcessRelatedLinks /> : null}
      </>
    );
  }
  if (slug === "water-treatment-desalination") {
    return (
      <>
        <ApplicationBreadcrumbBar title="Water Treatment" />
        <WaterTreatmentHero />
        <WaterTreatmentOperatingConditions />
        <WaterTreatmentMaterialRoute />
        <WaterTreatmentSpecificationChecklist />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <WaterTreatmentRelatedLinks /> : null}
      </>
    );
  }
  if (slug === "automotive-exhaust") {
    return (
      <>
        <ApplicationBreadcrumbBar title="Automotive Exhaust" />
        <AutomotiveExhaustHero />
        <AutomotiveExhaustOperatingConditions />
        <AutomotiveExhaustMaterialRoute />
        <AutomotiveExhaustSpecificationChecklist />
        {SHOW_COMMERCIAL_RELATED_ARTICLES ? <AutomotiveExhaustRelatedLinks /> : null}
      </>
    );
  }
  return null;
}

function ApplicationBreadcrumbBar({ title }: { title: string }) {
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
              href="/solutions/applications"
              className="shrink-0 transition-colors hover:text-text-primary"
            >
              Applications
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

function KitchenEquipmentHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <Image
        src="/images/applications/kitchen-equipment/hero-kitchen-equipment.jpg"
        alt="Modern kitchen with stainless steel worktop, range hood, backsplash, and appliance panels"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-[0.68] brightness-[0.86] saturate-[1.04] contrast-[1.08]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.64)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Application Lines
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[2.9rem]">
            Stainless Steel for Kitchen Equipment
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Jinling Steel supplies stainless steel for kitchen equipment
            manufacturers, commercial kitchen projects, appliance panels,
            worktops, sinks, cabinets, splashbacks, and food-service areas. We
            help buyers choose the right stainless steel grade, surface finish,
            protective film, and sheet processing route based on hygiene,
            corrosion resistance, cleanability, fabrication needs, and visible
            surface quality.
          </p>
        </div>
      </div>
    </section>
  );
}

function ElevatorInteriorsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <Image
        src="/images/applications/elevator-decoration/hero-elevator-interiors.jpg"
        alt="Stainless steel elevator cabin with decorative wall panels, handrails, and illuminated interior surfaces"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-[0.68] brightness-[0.86] saturate-[1.04] contrast-[1.08]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.64)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Application Lines
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[2.9rem]">
            Stainless Steel for Elevator &amp; Interiors
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Jinling Steel supplies decorative stainless steel sheet for
            elevator cabin panels, doors, ceilings, handrails, trims, wall
            panels, and interior metalwork. For elevator and interior projects,
            buyers need more than a beautiful finish. They need consistent
            surface direction, scratch protection, flat sheet processing,
            reliable packing, and batch control from production to
            installation.
          </p>
        </div>
      </div>
    </section>
  );
}

function ArchitectureHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <Image
        src="/images/applications/architecture/hero-architecture.jpg"
        alt="Architectural stainless steel and glass facade with structural metal details"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-[0.68] brightness-[0.86] saturate-[1.04] contrast-[1.08]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.64)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Application Lines
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[2.9rem]">
            Stainless Steel for Architecture
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Jinling Steel supplies stainless steel for architectural projects
            where visual consistency, corrosion resistance, panel flatness, and
            installation efficiency matter. From facade cladding and wall
            panels to ceilings, column covers, decorative trims, and
            public-space metalwork, we help buyers match the right stainless
            steel grade, surface finish, protective film, and processing route
            before shipment.
          </p>
        </div>
      </div>
    </section>
  );
}

function FoodBeverageHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <Image
        src="/images/applications/food-beverage/hero-food-beverage.jpg"
        alt="Stainless steel food and beverage processing equipment with hygienic metal surfaces"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-[0.68] brightness-[0.86] saturate-[1.04] contrast-[1.08]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.64)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Application Lines
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[2.9rem]">
            Stainless Steel for Food &amp; Beverage Processing
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Jinling Steel supplies stainless steel for food and beverage
            processing equipment where hygiene, cleanability, corrosion
            resistance, weld quality, and surface consistency are critical.
            From food-contact tables and processing tanks to conveyors,
            washdown areas, sanitary piping, and filling equipment, we help
            buyers choose the right stainless steel grade, surface finish,
            sheet or tube route, protective film, and packing method before
            production.
          </p>
        </div>
      </div>
    </section>
  );
}

function MedicalPharmaHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <Image
        src="/images/applications/medical-pharmaceutical/hero-medical-pharma.jpg"
        alt="Stainless steel medical trays and instruments for medical and pharmaceutical equipment"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.68] brightness-[0.86] saturate-[1.04] contrast-[1.08] scale-x-[-1]"
        style={{ objectPosition: "center 78%" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.64)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Application Lines
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[2.9rem]">
            Stainless Steel for Medical &amp; Pharma Equipment
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Jinling Steel supplies stainless steel for medical and
            pharmaceutical equipment where cleanability, corrosion resistance,
            contamination control, weld quality, and surface consistency are
            critical. From cleanroom panels and sterile worktables to process
            piping, equipment frames, cabinets, wash areas, and controlled
            production environments, we help buyers choose the right stainless
            steel grade, surface finish, sheet or tube route, protective film,
            and packing method before production.
          </p>
        </div>
      </div>
    </section>
  );
}

function OilGasHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <Image
        src="/images/applications/oil-gas/hero-oil-gas.jpg"
        alt="Industrial port vessel and offshore logistics environment for oil and gas stainless steel applications"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.68] brightness-[0.86] saturate-[1.04] contrast-[1.08]"
        style={{ objectPosition: "55% 68%" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.64)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Application Lines
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[2.9rem]">
            Stainless Steel for Oil &amp; Gas Applications
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Jinling Steel supplies stainless steel for oil and gas
            applications where corrosion resistance, pressure-related
            fabrication, welding performance, project documentation, and
            export-ready packing are critical. From process piping and
            structural supports to tanks, equipment skids, offshore components,
            covers, and fabricated parts, we help buyers select the right
            stainless steel grade, product form, processing route, and delivery
            control before production.
          </p>
        </div>
      </div>
    </section>
  );
}

const OIL_GAS_CONDITION_ITEMS = [
  {
    title: "Media Exposure",
    description:
      "Oil, gas, water, condensate, chemicals, and mixed process media may require different stainless steel grades and corrosion review.",
    marker: "Media",
  },
  {
    title: "Chloride & Offshore Risk",
    description:
      "Marine air, produced water, salt spray, and chloride-bearing environments often push buyers toward higher corrosion-resistant stainless steel routes.",
    marker: "Chloride",
    linkLabel: "316L stainless steel",
    href: "/grades/316l-stainless-steel",
  },
  {
    title: "Pressure & Welding Route",
    description:
      "Pipes, tanks, skids, and pressure-related fabrication require attention to weldability, wall thickness, tolerance, and project specification requirements.",
    marker: "Welding",
    linkLabel: "Industrial Pipe",
    href: "/products/stainless-steel-tube-pipe",
  },
  {
    title: "Project Delivery Control",
    description:
      "Oil and gas projects often require controlled packing, marking, documentation, batch consistency, and export logistics before shipment.",
    marker: "Delivery",
    linkLabel: "Packaging & Logistics",
    href: "/solutions/capabilities/packaging-logistics",
  },
] as const;

const OIL_GAS_CORROSION_ROUTES = [
  {
    title: "General Equipment & Support Structures",
    route: "304 stainless steel",
    description:
      "Choose 304 stainless steel for moderate indoor oil and gas equipment parts, covers, frames, and non-critical support structures where corrosion exposure is limited.",
  },
  {
    title: "Wet Process Areas & Chemical Cleaning",
    route: "316L stainless steel",
    description:
      "Choose 316L stainless steel for wet areas, process equipment, tanks, pipe systems, and components exposed to cleaning chemicals, moisture, or higher corrosion risk.",
  },
  {
    title: "Chloride / Marine / Offshore Exposure",
    route: "316L / 2205 duplex review",
    description:
      "Review 316L or 2205 duplex stainless steel when equipment is exposed to chloride, marine air, produced water, offshore environments, or stronger corrosion conditions.",
  },
  {
    title: "Pipe & Process Line Requirements",
    route: "Industrial pipe or tube route",
    description:
      "Use stainless steel industrial pipe or tube routes when the project involves process lines, transfer systems, structural pipe, or fabricated pipe assemblies.",
  },
] as const;

const OIL_GAS_SPEC_CHECKLIST = [
  {
    question: "What media will the stainless steel contact?",
    answer:
      "Confirm whether the material will contact oil, gas, water, chemicals, condensate, salt, cleaning agents, or mixed process media.",
  },
  {
    question: "Is chloride or marine exposure present?",
    answer:
      "For chloride-bearing water, offshore air, coastal sites, or salt spray exposure, review 316L or duplex stainless steel instead of selecting by price alone.",
    links: [{ label: "2205 Duplex", href: "/grades/2205-duplex-stainless-steel" }],
  },
  {
    question: "Is the material used for piping or pressure-related fabrication?",
    answer:
      "Confirm pipe size, wall thickness, end requirements, welding route, tolerance, and project specification before production.",
    links: [
      { label: "Stainless Steel Tube & Pipe", href: "/products/stainless-steel-tube-pipe" },
    ],
  },
  {
    question: "Will the material be welded, bent, cut, or formed?",
    answer:
      "Fabrication route affects grade selection, surface protection, cutting size, edge quality, and packing method.",
    links: [{ label: "Cut-to-Length", href: "/solutions/capabilities/cut-to-length" }],
  },
  {
    question: "Does the project require corrosion-resistant grade review?",
    answer:
      "For aggressive service, wet process areas, chloride exposure, or offshore environments, compare 316L and 2205 duplex stainless steel based on project conditions.",
  },
  {
    question: "Is surface protection required before fabrication or export?",
    answer:
      "Protective film, paper interleaving, pallet packing, and controlled handling help reduce scratches and transport damage.",
    links: [{ label: "Protective Film", href: "/solutions/capabilities/protective-film" }],
  },
  {
    question: "Are documents, marking, and batch control required?",
    answer:
      "Oil and gas project orders often need clear material identification, batch separation, packing lists, and export delivery control.",
    links: [
      { label: "Packaging & Logistics", href: "/solutions/capabilities/packaging-logistics" },
    ],
  },
] as const;

const OIL_GAS_RELATED_LINKS = [
  {
    title: "316L Stainless Steel",
    href: "/grades/316l-stainless-steel",
    image: "/images/grades/316l-stainless-steel/hero.jpg",
    excerpt:
      "Review 316L stainless steel for wet process areas, chemical cleaning exposure, tanks, pipe systems, and higher corrosion-risk oil and gas components.",
  },
  {
    title: "2205 Duplex Stainless Steel",
    href: "/grades/2205-duplex-stainless-steel",
    image: "/images/grades/2205-duplex-stainless-steel/hero.jpg",
    excerpt:
      "Compare 2205 duplex stainless steel for chloride exposure, marine air, produced water, offshore conditions, and stronger corrosion environments.",
  },
  {
    title: "Stainless Steel Tube & Pipe",
    href: "/products/stainless-steel-tube-pipe",
    image: "/images/products/tube/hero.jpg",
    excerpt:
      "Explore stainless steel tube and pipe routes for oil and gas process lines, transfer systems, structural pipe, and fabricated pipe assemblies.",
  },
] as const;

function OilGasOperatingConditions() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-5rem)] gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <h2 className="max-w-[11.7em] text-[1.9rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.3rem]">
              Operating Conditions That Define Oil &amp; Gas Stainless Steel
              Selection
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              Oil and gas stainless steel is not selected only by product name.
              The right route depends on media, chloride exposure, temperature,
              welding, pressure-related fabrication, and whether the material
              will be used for piping, plate fabrication, structural support,
              or equipment protection.
            </p>
          </div>
          <div>
            <div className="overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_18px_46px_rgba(17,24,32,0.07)]">
              <div className="bg-[#111820] px-5 py-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                  Project route pre-check
                </p>
              </div>
              <div className="divide-y divide-[#e3d7c8]">
                {OIL_GAS_CONDITION_ITEMS.map((item, index) => (
                  <article
                    key={item.title}
                    className={`group grid gap-3 px-5 py-4 transition sm:grid-cols-[6.6rem_1fr] ${
                      index % 2 === 0
                        ? "bg-[#111820] text-white [&_a]:text-[#f6d044] [&_h3]:text-white [&_p]:text-white/78"
                        : "bg-[#f6d044] text-[#111820] [&_a]:text-[#111820] [&_h3]:text-[#111820] [&_p]:text-[#111820]/78"
                    }`}
                  >
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#8a6b32]">
                        {item.marker}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-semibold leading-6 text-[#111820]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#56606a]">
                        {item.description}{" "}
                        {"href" in item ? (
                          <Link
                            href={item.href}
                            className="font-semibold text-[#8a6b32] underline underline-offset-4 transition group-hover:text-[#111820]"
                          >
                            {item.linkLabel}
                          </Link>
                        ) : null}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OilGasRelatedLinks() {
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
            {OIL_GAS_RELATED_LINKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} related stainless steel page`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.2)_0%,rgba(13,20,27,0.78)_54%,rgba(13,20,27,0.95)_100%)]" aria-hidden="true" />
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(4.75rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/76">
                    {item.excerpt}
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

function OilGasSpecificationChecklist() {
  return (
    <section className="bg-[#f5efe3] px-4 py-8 sm:px-6 lg:min-h-[46vh] lg:px-8 lg:py-9">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(46vh-4.5rem)] gap-7 lg:grid-cols-[0.4fr_0.6fr] lg:items-center">
          <div>
            <h2 className="max-w-[10.4em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
              Oil &amp; Gas Stainless Steel Specification Checklist
            </h2>
            <p className="mt-5 text-[0.96rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.05rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              Before ordering stainless steel for oil and gas projects, buyers
              should confirm the operating environment, corrosion risk,
              fabrication method, documentation needs, and delivery control.
              These details help avoid wrong grade selection, surface damage,
              welding issues, and project delays.
            </p>
          </div>
          <div className="grid gap-1.5">
            {OIL_GAS_SPEC_CHECKLIST.map((item, index) => (
              <article
                key={item.question}
                className={`group grid gap-2.5 border border-[#d8cbb8] px-3.5 py-2 shadow-[0_8px_18px_rgba(17,24,32,0.04)] transition hover:border-[#b8845a] hover:shadow-[0_12px_26px_rgba(17,24,32,0.075)] sm:grid-cols-[2.35rem_1fr] ${
                  index % 2 === 0
                    ? "bg-[#111820] text-white [&_a]:text-[#f6d044] [&_h3]:text-white [&_p]:text-white/78"
                    : "bg-[#f6d044] text-[#111820] [&_a]:text-[#111820] [&_h3]:text-[#111820] [&_p]:text-[#111820]/78"
                }`}
              >
                <div className="flex h-7 w-7 items-center justify-center bg-[#111820] text-[0.62rem] font-semibold tracking-[0.1em] text-[#f6d044]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-[0.84rem] font-semibold leading-[1.22] text-[#111820]">
                    {item.question}
                  </h3>
                  <p className="mt-0.5 text-[0.74rem] leading-[1.38] text-[#56606a]">
                    {item.answer}
                  </p>
                  {"links" in item && item.links.length ? (
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-[0.74rem] font-semibold text-[#8a6b32] underline underline-offset-4 transition hover:text-[#111820]"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function OilGasCorrosionRoute() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:min-h-[44vh] lg:px-8 lg:py-9">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(44vh-4.5rem)] gap-7 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
          <div className="grid gap-2.5">
            {OIL_GAS_CORROSION_ROUTES.map((item, index) => (
              <article
                key={item.title}
                className={`group border border-[#d8cbb8] px-4 py-3 shadow-[0_10px_24px_rgba(17,24,32,0.045)] transition hover:border-[#b8845a] hover:shadow-[0_14px_30px_rgba(17,24,32,0.08)] ${
                  index % 2 === 0
                    ? "bg-[#f6d044] [&_h3]:text-[#111820] [&_p]:text-[#111820]/78"
                    : "bg-[#fbf7ef]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center bg-[#111820] text-[0.68rem] font-semibold tracking-[0.1em] text-[#f6d044]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#8a6b32]">
                      {item.route}
                    </p>
                    <h3 className="mt-1 text-[0.95rem] font-semibold leading-5 text-[#111820]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[0.82rem] leading-5 text-[#56606a]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="lg:pl-2">
            <h2 className="max-w-[9.8em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.55rem]">
              Material Route by Corrosion and Exposure Level
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              For oil and gas stainless steel, the main decision is the
              exposure environment. Buyers should confirm whether the material
              is used in general indoor equipment, wet process areas, chloride
              exposure, offshore conditions, or more aggressive corrosion
              environments before choosing the grade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChemicalProcessHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <Image
        src="/images/applications/chemical-petrochemical/scene-1.jpg"
        alt="Stainless steel process piping for chemical process equipment and corrosion-resistant systems"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.68] brightness-[0.86] saturate-[1.04] contrast-[1.08]"
        style={{ objectPosition: "center" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.64)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Application Lines
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[2.9rem]">
            Stainless Steel for Chemical Process Equipment
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Jinling Steel supplies stainless steel for chemical process
            equipment where corrosion resistance, media compatibility, welding
            performance, fabrication accuracy, and export-ready delivery
            control are critical. From chemical tanks and process piping to
            reactors, heat exchangers, equipment frames, covers, and fabricated
            parts, we help buyers select the right stainless steel grade,
            product form, processing route, and packing method before
            production.
          </p>
        </div>
      </div>
    </section>
  );
}

const CHEMICAL_PROCESS_CONDITION_ITEMS = [
  {
    title: "Chemical Media",
    description:
      "Acids, alkalis, solvents, water, cleaning agents, and mixed process media can change stainless steel grade selection and corrosion review.",
    marker: "Media",
  },
  {
    title: "Chloride & Contaminant Risk",
    description:
      "Chloride, dissolved salts, carryover contamination, and cleaning chemicals can move a project from 316L review toward duplex stainless steel.",
    marker: "Chloride",
    linkLabel: "2205 Duplex",
    href: "/grades/2205-duplex-stainless-steel",
  },
  {
    title: "Temperature & Concentration",
    description:
      "Chemical concentration and operating temperature should be confirmed together because corrosion risk often rises quickly when both increase.",
    marker: "Temperature",
    linkLabel: "316L stainless steel",
    href: "/grades/316l-stainless-steel",
  },
  {
    title: "Fabrication & Export Control",
    description:
      "Tanks, pipe spools, formed parts, and process equipment panels require cutting, welding, surface protection, packing, marking, and delivery control.",
    marker: "Fabrication",
    linkLabel: "Packaging & Logistics",
    href: "/solutions/capabilities/packaging-logistics",
  },
] as const;

const CHEMICAL_PROCESS_MATERIAL_ROUTES = [
  {
    title: "Mild Indoor Chemical Equipment",
    route: "304 / 316L screening",
    description:
      "Use 304 or 316L stainless steel for mild indoor chemical equipment, covers, frames, and support parts where contaminants and corrosion exposure are controlled.",
  },
  {
    title: "Wet Process Areas & Dilute Chemicals",
    route: "316L stainless steel",
    description:
      "Choose 316L stainless steel for tanks, process piping, wet areas, and components exposed to dilute chemicals, moisture, cleaning agents, or moderate corrosion risk.",
  },
  {
    title: "Chloride-Bearing Process Streams",
    route: "2205 duplex review",
    description:
      "Review 2205 duplex stainless steel when chloride, temperature, pressure, crevice risk, or stronger corrosion conditions push beyond standard 316L margins.",
  },
  {
    title: "Sheet, Plate, Pipe & Fabricated Parts",
    route: "Product form route",
    description:
      "Confirm whether the project needs stainless steel sheet, plate, tube, pipe, coil, cut-to-length material, or fabricated parts before production.",
  },
] as const;

const CHEMICAL_PROCESS_SPEC_CHECKLIST = [
  {
    question: "What chemical media will the stainless steel contact?",
    answer:
      "Confirm whether the material will contact acids, alkalis, solvents, water, cleaning agents, chloride, or mixed process media.",
  },
  {
    question: "Are chloride, salts, or contaminants present?",
    answer:
      "If chloride or salt contamination is present, compare 316L and 2205 duplex stainless steel based on the actual process environment.",
    links: [{ label: "2205 Duplex", href: "/grades/2205-duplex-stainless-steel" }],
  },
  {
    question: "What are the temperature and concentration conditions?",
    answer:
      "Chemical concentration and temperature should be reviewed together before choosing stainless steel grade, wall thickness, or product form.",
  },
  {
    question: "Is the material used for tanks, piping, or heat exchangers?",
    answer:
      "Confirm whether the project requires sheet, plate, tube, pipe, or fabricated assemblies before production planning.",
    links: [
      { label: "Stainless Steel Tube & Pipe", href: "/products/stainless-steel-tube-pipe" },
    ],
  },
  {
    question: "Will the material be welded, cut, bent, or formed?",
    answer:
      "Fabrication route affects grade selection, cutting size, surface protection, edge quality, welding route, and packing method.",
    links: [{ label: "Cut-to-Length", href: "/solutions/capabilities/cut-to-length" }],
  },
  {
    question: "Is surface protection needed before fabrication or shipping?",
    answer:
      "Protective film, paper interleaving, pallet packing, and controlled handling help reduce scratches before chemical equipment fabrication.",
    links: [{ label: "Protective Film", href: "/solutions/capabilities/protective-film" }],
  },
  {
    question: "Are documents, marking, and batch control required?",
    answer:
      "Chemical process orders often need clear material identification, batch separation, packing lists, and export delivery control.",
    links: [
      { label: "Packaging & Logistics", href: "/solutions/capabilities/packaging-logistics" },
    ],
  },
] as const;

const CHEMICAL_PROCESS_RELATED_LINKS = [
  {
    title: "316L Stainless Steel",
    href: "/grades/316l-stainless-steel",
    image: "/images/grades/316l-stainless-steel/hero.jpg",
    excerpt:
      "Review 316L stainless steel for wet process areas, dilute chemicals, tanks, piping, and moderate corrosion-risk chemical equipment.",
  },
  {
    title: "2205 Duplex Stainless Steel",
    href: "/grades/2205-duplex-stainless-steel",
    image: "/images/grades/2205-duplex-stainless-steel/hero.jpg",
    excerpt:
      "Compare 2205 duplex stainless steel for chloride-bearing process streams, higher corrosion risk, and stronger chemical processing environments.",
  },
  {
    title: "Stainless Steel Tube & Pipe",
    href: "/products/stainless-steel-tube-pipe",
    image: "/images/products/tube/hero.jpg",
    excerpt:
      "Explore stainless steel tube and pipe routes for chemical process piping, transfer systems, equipment frames, and fabricated pipe assemblies.",
  },
] as const;

function ChemicalProcessOperatingConditions() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-5rem)] gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <h2 className="max-w-[11.7em] text-[1.9rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.3rem]">
              Operating Conditions That Define Chemical Process Stainless Steel
              Selection
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              Chemical process stainless steel is selected by actual media,
              contaminants, temperature, concentration, fabrication route, and
              whether the material will be used for tanks, process piping, heat
              exchangers, structural support, or equipment protection.
            </p>
          </div>
          <div>
            <div className="overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_18px_46px_rgba(17,24,32,0.07)]">
              <div className="bg-[#111820] px-5 py-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                  Chemical route pre-check
                </p>
              </div>
              <div className="divide-y divide-[#e3d7c8]">
                {CHEMICAL_PROCESS_CONDITION_ITEMS.map((item, index) => (
                  <article
                    key={item.title}
                    className={`group grid gap-3 px-5 py-4 transition sm:grid-cols-[6.6rem_1fr] ${
                      index % 2 === 0
                        ? "bg-[#111820] text-white [&_a]:text-[#f6d044] [&_h3]:text-white [&_p]:text-white/78"
                        : "bg-[#f6d044] text-[#111820] [&_a]:text-[#111820] [&_h3]:text-[#111820] [&_p]:text-[#111820]/78"
                    }`}
                  >
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#8a6b32]">
                        {item.marker}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-semibold leading-6 text-[#111820]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#56606a]">
                        {item.description}{" "}
                        {"href" in item ? (
                          <Link
                            href={item.href}
                            className="font-semibold text-[#8a6b32] underline underline-offset-4 transition group-hover:text-[#111820]"
                          >
                            {item.linkLabel}
                          </Link>
                        ) : null}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChemicalProcessMaterialRoute() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:min-h-[44vh] lg:px-8 lg:py-9">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(44vh-4.5rem)] gap-7 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
          <div className="grid gap-1.5">
            {CHEMICAL_PROCESS_MATERIAL_ROUTES.map((item, index) => (
              <article
                key={item.title}
                className={`group border border-[#d8cbb8] px-3.5 py-2 shadow-[0_8px_18px_rgba(17,24,32,0.04)] transition hover:border-[#b8845a] hover:bg-white hover:shadow-[0_12px_26px_rgba(17,24,32,0.075)] ${
                  index % 2 === 0
                    ? "bg-[#f6d044] [&_h3]:text-[#111820] [&_p]:text-[#111820]/78"
                    : "bg-[#fbf7ef]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-[#111820] text-[0.62rem] font-semibold tracking-[0.1em] text-[#f6d044]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#8a6b32]">
                      {item.route}
                    </p>
                    <h3 className="mt-1 text-[0.95rem] font-semibold leading-5 text-[#111820]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[0.82rem] leading-5 text-[#56606a]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="lg:pl-2">
            <h2 className="max-w-[9.8em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
              Material Route by Chemical Exposure Level
            </h2>
            <p className="mt-5 text-[0.96rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.05rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              For chemical process stainless steel, the main decision is the
              real service chemistry. Buyers should confirm chemical media,
              contaminants, chloride content, temperature, concentration, and
              fabrication route before choosing 304, 316L, 2205 duplex, or a
              product form.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChemicalProcessSpecificationChecklist() {
  return (
    <section className="bg-[#f5efe3] px-4 py-8 sm:px-6 lg:min-h-[46vh] lg:px-8 lg:py-9">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(46vh-4.5rem)] gap-7 lg:grid-cols-[0.4fr_0.6fr] lg:items-center">
          <div>
            <h2 className="max-w-[10.4em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
              Chemical Process Stainless Steel Specification Checklist
            </h2>
            <p className="mt-5 text-[0.96rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.05rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              Before ordering stainless steel for chemical process equipment,
              buyers should confirm the media, corrosion risk, temperature,
              concentration, fabrication method, documentation needs, and
              delivery control. These details help avoid wrong grade selection,
              surface damage, welding issues, and project delays.
            </p>
          </div>
          <div className="grid gap-1.5">
            {CHEMICAL_PROCESS_SPEC_CHECKLIST.map((item, index) => (
              <article
                key={item.question}
                className={`group grid gap-2.5 border border-[#d8cbb8] px-3.5 py-2 shadow-[0_8px_18px_rgba(17,24,32,0.04)] transition hover:border-[#b8845a] hover:shadow-[0_12px_26px_rgba(17,24,32,0.075)] sm:grid-cols-[2.35rem_1fr] ${
                  index % 2 === 0
                    ? "bg-[#111820] text-white [&_a]:text-[#f6d044] [&_h3]:text-white [&_p]:text-white/78"
                    : "bg-[#f6d044] text-[#111820] [&_a]:text-[#111820] [&_h3]:text-[#111820] [&_p]:text-[#111820]/78"
                }`}
              >
                <div className="flex h-7 w-7 items-center justify-center bg-[#111820] text-[0.62rem] font-semibold tracking-[0.1em] text-[#f6d044]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-[0.84rem] font-semibold leading-[1.22] text-[#111820]">
                    {item.question}
                  </h3>
                  <p className="mt-0.5 text-[0.74rem] leading-[1.38] text-[#56606a]">
                    {item.answer}
                  </p>
                  {"links" in item && item.links.length ? (
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-[0.74rem] font-semibold text-[#8a6b32] underline underline-offset-4 transition hover:text-[#111820]"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChemicalProcessRelatedLinks() {
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
            {CHEMICAL_PROCESS_RELATED_LINKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} related stainless steel page`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.2)_0%,rgba(13,20,27,0.78)_54%,rgba(13,20,27,0.95)_100%)]" aria-hidden="true" />
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(4.75rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/76">
                    {item.excerpt}
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

function WaterTreatmentHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <Image
        src="/images/applications/water-treatment-desalination/hero.jpg"
        alt="Stainless steel tanks and piping for water treatment and desalination equipment"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.68] brightness-[0.86] saturate-[1.04] contrast-[1.08]"
        style={{ objectPosition: "center" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.64)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Application Lines
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[2.9rem]">
            Stainless Steel for Water Treatment &amp; Desalination
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Jinling Steel supplies stainless steel for water treatment and
            desalination equipment where wet exposure, chloride content,
            corrosion resistance, welding performance, fabrication accuracy, and
            export-ready packing are critical. From tanks, filters, pumps,
            piping, and skids to desalination systems, wastewater equipment,
            covers, frames, and fabricated parts, we help buyers select the
            right stainless steel grade, product form, processing route, and
            delivery control before production.
          </p>
        </div>
      </div>
    </section>
  );
}

const WATER_TREATMENT_CONDITION_ITEMS = [
  {
    title: "Water Chemistry",
    description:
      "Fresh water, wastewater, process water, brackish water, seawater, and treated water can require different stainless steel grades and corrosion review.",
    marker: "Chemistry",
  },
  {
    title: "Chloride & Salt Exposure",
    description:
      "Chloride-bearing water, seawater, brine, salt spray, and desalination environments often require higher corrosion-resistant stainless steel routes.",
    marker: "Chloride",
    linkLabel: "316L stainless steel",
    href: "/grades/316l-stainless-steel",
  },
  {
    title: "Wet Zone & Cleaning Risk",
    description:
      "Repeated wet exposure, standing water, chemical cleaning, and disinfection cycles can increase corrosion risk around welds, crevices, and fabricated joints.",
    marker: "Wet zones",
    linkLabel: "2205 Duplex",
    href: "/grades/2205-duplex-stainless-steel",
  },
  {
    title: "Fabrication & Delivery Control",
    description:
      "Water treatment projects often require controlled cutting, welding, surface protection, packing, marking, and export logistics before shipment.",
    marker: "Delivery",
    linkLabel: "Packaging & Logistics",
    href: "/solutions/capabilities/packaging-logistics",
  },
] as const;

const WATER_TREATMENT_MATERIAL_ROUTES = [
  {
    title: "Fresh Water & Indoor Equipment",
    route: "304 stainless steel",
    description:
      "Choose 304 stainless steel for moderate indoor water treatment equipment, covers, frames, guards, and support structures where chloride exposure is low.",
  },
  {
    title: "Wastewater & Wet Process Areas",
    route: "316L stainless steel",
    description:
      "Choose 316L stainless steel for tanks, filters, pumps, piping, wet zones, and components exposed to moisture, cleaning chemicals, or moderate corrosion risk.",
  },
  {
    title: "Brackish Water / Seawater / Desalination",
    route: "316L / 2205 duplex review",
    description:
      "Review 316L or 2205 duplex stainless steel when equipment is exposed to chloride-bearing water, salt spray, brine, seawater, or desalination environments.",
  },
  {
    title: "Pipe, Sheet & Fabricated Parts",
    route: "Product form route",
    description:
      "Confirm whether the project needs stainless steel pipe, tube, sheet, plate, coil, cut-to-length material, or fabricated parts before production.",
  },
] as const;

const WATER_TREATMENT_SPEC_CHECKLIST = [
  {
    question: "What type of water will the stainless steel contact?",
    answer:
      "Confirm whether the material will contact fresh water, wastewater, process water, brackish water, seawater, brine, or treated water.",
  },
  {
    question: "Is chloride or salt exposure present?",
    answer:
      "For chloride-bearing water, seawater, brine, desalination, or salt spray exposure, review 316L or duplex stainless steel instead of selecting by price alone.",
    links: [{ label: "2205 Duplex", href: "/grades/2205-duplex-stainless-steel" }],
  },
  {
    question: "Is the material used for piping, tanks, filters, or pumps?",
    answer:
      "Confirm product form, wall thickness, sheet size, welding route, tolerance, and project specification before production.",
    links: [
      { label: "Stainless Steel Tube & Pipe", href: "/products/stainless-steel-tube-pipe" },
    ],
  },
  {
    question: "Will the material be welded, cut, bent, or formed?",
    answer:
      "Fabrication route affects grade selection, surface protection, cutting size, edge quality, and packing method.",
    links: [{ label: "Cut-to-Length", href: "/solutions/capabilities/cut-to-length" }],
  },
  {
    question: "Does the project require corrosion-resistant grade review?",
    answer:
      "For aggressive wet service, standing water, chloride exposure, brackish water, seawater, or desalination environments, compare 316L and 2205 duplex stainless steel based on project conditions.",
  },
  {
    question: "Is surface protection required before fabrication or export?",
    answer:
      "Protective film, paper interleaving, pallet packing, and controlled handling help reduce scratches and transport damage before assembly or installation.",
    links: [{ label: "Protective Film", href: "/solutions/capabilities/protective-film" }],
  },
  {
    question: "Are documents, marking, and batch control required?",
    answer:
      "Water treatment project orders often need clear material identification, batch separation, packing lists, and export delivery control.",
    links: [
      { label: "Packaging & Logistics", href: "/solutions/capabilities/packaging-logistics" },
    ],
  },
] as const;

const WATER_TREATMENT_RELATED_LINKS = [
  {
    title: "316L Stainless Steel",
    href: "/grades/316l-stainless-steel",
    image: "/images/grades/316l-stainless-steel/hero.jpg",
    excerpt:
      "Review 316L stainless steel for wet zones, tanks, filters, piping, wastewater equipment, and moderate chloride exposure in water treatment systems.",
  },
  {
    title: "2205 Duplex Stainless Steel",
    href: "/grades/2205-duplex-stainless-steel",
    image: "/images/grades/2205-duplex-stainless-steel/hero.jpg",
    excerpt:
      "Compare 2205 duplex stainless steel for chloride-bearing water, brackish water, seawater, brine, desalination, and stronger corrosion environments.",
  },
  {
    title: "Stainless Steel Tube & Pipe",
    href: "/products/stainless-steel-tube-pipe",
    image: "/images/products/tube/hero.jpg",
    excerpt:
      "Explore stainless steel tube and pipe routes for water treatment piping, pump systems, filtration equipment, skids, and fabricated assemblies.",
  },
] as const;

function WaterTreatmentOperatingConditions() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-5rem)] gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <h2 className="max-w-[11.7em] text-[1.9rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.3rem]">
              Operating Conditions That Define Water Treatment Stainless Steel
              Selection
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              Water treatment stainless steel is selected by water chemistry,
              chloride level, wet exposure, cleaning method, fabrication route,
              and whether the material will be used for tanks, piping, filters,
              pumps, skids, or structural support.
            </p>
          </div>
          <div>
            <div className="overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_18px_46px_rgba(17,24,32,0.07)]">
              <div className="bg-[#111820] px-5 py-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                  Water route pre-check
                </p>
              </div>
              <div className="divide-y divide-[#e3d7c8]">
                {WATER_TREATMENT_CONDITION_ITEMS.map((item, index) => (
                  <article
                    key={item.title}
                    className={`group grid gap-3 px-5 py-4 transition sm:grid-cols-[6.6rem_1fr] ${
                      index % 2 === 0
                        ? "bg-[#111820] text-white [&_a]:text-[#f6d044] [&_h3]:text-white [&_p]:text-white/78"
                        : "bg-[#f6d044] text-[#111820] [&_a]:text-[#111820] [&_h3]:text-[#111820] [&_p]:text-[#111820]/78"
                    }`}
                  >
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-[#8a6b32]">
                        {item.marker}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-semibold leading-6 text-[#111820]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#56606a]">
                        {item.description}{" "}
                        {"href" in item ? (
                          <Link
                            href={item.href}
                            className="font-semibold text-[#8a6b32] underline underline-offset-4 transition group-hover:text-[#111820]"
                          >
                            {item.linkLabel}
                          </Link>
                        ) : null}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WaterTreatmentMaterialRoute() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:min-h-[44vh] lg:px-8 lg:py-9">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(44vh-4.5rem)] gap-7 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
          <div className="grid gap-1.5">
            {WATER_TREATMENT_MATERIAL_ROUTES.map((item, index) => (
              <article
                key={item.title}
                className={`group border border-[#d8cbb8] px-3.5 py-2 shadow-[0_8px_18px_rgba(17,24,32,0.04)] transition hover:border-[#b8845a] hover:bg-white hover:shadow-[0_12px_26px_rgba(17,24,32,0.075)] ${
                  index % 2 === 0
                    ? "bg-[#f6d044] [&_h3]:text-[#111820] [&_p]:text-[#111820]/78"
                    : "bg-[#fbf7ef]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-[#111820] text-[0.62rem] font-semibold tracking-[0.1em] text-[#f6d044]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#8a6b32]">
                      {item.route}
                    </p>
                    <h3 className="mt-1 text-[0.95rem] font-semibold leading-5 text-[#111820]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[0.82rem] leading-5 text-[#56606a]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="lg:pl-2">
            <h2 className="max-w-[9.8em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
              Material Route by Water Chemistry and Chloride Level
            </h2>
            <p className="mt-5 text-[0.96rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.05rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              For water treatment stainless steel, the main decision is the
              water chemistry and chloride level. Buyers should confirm whether
              the material is used in fresh water, wastewater, brackish water,
              seawater, desalination, or more aggressive wet environments
              before choosing the grade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WaterTreatmentSpecificationChecklist() {
  return (
    <section className="bg-[#f5efe3] px-4 py-8 sm:px-6 lg:min-h-[46vh] lg:px-8 lg:py-9">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(46vh-4.5rem)] gap-7 lg:grid-cols-[0.4fr_0.6fr] lg:items-center">
          <div>
            <h2 className="max-w-[10.4em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
              Water Treatment Stainless Steel Specification Checklist
            </h2>
            <p className="mt-5 text-[0.96rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.05rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              Before ordering stainless steel for water treatment projects,
              buyers should confirm water chemistry, chloride level, wet
              exposure, fabrication method, documentation needs, and delivery
              control. These details help avoid wrong grade selection, surface
              damage, welding issues, corrosion problems, and project delays.
            </p>
          </div>
          <div className="grid gap-1.5">
            {WATER_TREATMENT_SPEC_CHECKLIST.map((item, index) => (
              <article
                key={item.question}
                className={`group grid gap-2.5 border border-[#d8cbb8] px-3.5 py-2 shadow-[0_8px_18px_rgba(17,24,32,0.04)] transition hover:border-[#b8845a] hover:shadow-[0_12px_26px_rgba(17,24,32,0.075)] sm:grid-cols-[2.35rem_1fr] ${
                  index % 2 === 0
                    ? "bg-[#111820] text-white [&_a]:text-[#f6d044] [&_h3]:text-white [&_p]:text-white/78"
                    : "bg-[#f6d044] text-[#111820] [&_a]:text-[#111820] [&_h3]:text-[#111820] [&_p]:text-[#111820]/78"
                }`}
              >
                <div className="flex h-7 w-7 items-center justify-center bg-[#111820] text-[0.62rem] font-semibold tracking-[0.1em] text-[#f6d044]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-[0.84rem] font-semibold leading-[1.22] text-[#111820]">
                    {item.question}
                  </h3>
                  <p className="mt-0.5 text-[0.74rem] leading-[1.38] text-[#56606a]">
                    {item.answer}
                  </p>
                  {"links" in item && item.links.length ? (
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-[0.74rem] font-semibold text-[#8a6b32] underline underline-offset-4 transition hover:text-[#111820]"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WaterTreatmentRelatedLinks() {
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
            {WATER_TREATMENT_RELATED_LINKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} related stainless steel page`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.2)_0%,rgba(13,20,27,0.78)_54%,rgba(13,20,27,0.95)_100%)]" aria-hidden="true" />
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(4.75rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/76">
                    {item.excerpt}
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

function AutomotiveExhaustHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <Image
        src="/images/applications/automotive-exhaust/hero-automotive-exhaust-rear-system-v3.jpg"
        alt="Automotive exhaust rear system and performance exhaust components"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-[0.68] brightness-[0.86] saturate-[1.04] contrast-[1.08]"
        style={{ objectPosition: "center" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_48%,rgba(13,20,27,0.64)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-5xl flex-col items-start justify-center text-left">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
            Application Lines
            <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
          </p>
          <h1 className="mt-4 max-w-4xl text-[1.85rem] font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-[2.45rem] lg:text-[2.9rem]">
            Stainless Steel for Automotive Exhaust Systems
          </h1>
          <p className="mt-4 max-w-2xl text-[0.9rem] leading-6 text-white/78 sm:text-[0.95rem]">
            Jinling Steel supplies stainless steel for automotive exhaust
            systems where heat resistance, oxidation resistance, thermal
            cycling, weldability, thin-gauge forming, and stable coil or tube
            supply are critical. From exhaust pipes, mufflers, catalytic
            converter shells, flexible sections, brackets, shields, and formed
            parts, we help buyers select the right stainless steel grade,
            product form, thickness range, surface condition, and processing
            route before production.
          </p>
        </div>
      </div>
    </section>
  );
}

const AUTOMOTIVE_EXHAUST_CONDITION_ITEMS = [
  {
    title: "Temperature Zone",
    description:
      "Front sections, catalytic converter areas, mufflers, and tailpipes face different temperature ranges and thermal cycling conditions.",
    marker: "Temperature",
  },
  {
    title: "Oxidation & Heat Cycling",
    description:
      "Repeated heating and cooling can affect surface stability, weld performance, and long-term exhaust component durability.",
    marker: "Heat cycle",
  },
  {
    title: "Condensate & Road Salt Exposure",
    description:
      "Condensate, moisture, road salt, and external corrosion exposure influence whether buyers choose 409, 439, 441, 304, or another stainless route.",
    marker: "Corrosion",
    linkLabel: "304 Stainless Steel",
    href: "/grades/304-stainless-steel",
  },
  {
    title: "Forming & Welding Route",
    description:
      "Exhaust components require stable thin-gauge coil, strip, tube, bending, forming, welding, and consistent edge quality before assembly.",
    marker: "Forming",
    linkLabel: "Stainless Steel Coil",
    href: "/products/stainless-steel-coil",
  },
] as const;

const AUTOMOTIVE_EXHAUST_MATERIAL_ROUTES = [
  {
    title: "Standard Exhaust Pipes & Mufflers",
    route: "409 stainless steel",
    description:
      "Choose 409 stainless steel for cost-sensitive exhaust pipes, mufflers, and general exhaust components where practical oxidation resistance and formability are required.",
  },
  {
    title: "Higher Temperature Exhaust Components",
    route: "439 / 441 stainless steel",
    description:
      "Choose 439 or 441 stainless steel when higher oxidation resistance, thermal fatigue resistance, and improved high-temperature stability are required.",
  },
  {
    title: "Visible or Premium Exhaust Parts",
    route: "304 stainless steel",
    description:
      "Choose 304 stainless steel for premium exhaust tips, visible exterior exhaust parts, aftermarket exhaust systems, or applications requiring better appearance and corrosion resistance.",
  },
  {
    title: "Coil, Strip, Tube & Formed Parts",
    route: "Product form route",
    description:
      "Confirm whether the project needs stainless steel coil, narrow strip, tube, cut-to-length sheet, or formed exhaust components before production.",
  },
] as const;

const AUTOMOTIVE_EXHAUST_SPEC_CHECKLIST = [
  {
    question: "Which exhaust component will the material be used for?",
    answer:
      "Confirm whether the material is used for exhaust pipe, muffler, catalytic converter shell, flexible section, heat shield, bracket, tip, or formed part.",
  },
  {
    question: "What temperature zone does the component face?",
    answer:
      "Front exhaust sections and catalytic converter areas may require higher heat and oxidation resistance than rear mufflers or tailpipes.",
  },
  {
    question: "Is condensate, road salt, or external corrosion exposure present?",
    answer:
      "Moisture, condensate, road salt, and external exposure affect grade choice, especially for underbody exhaust components.",
  },
  {
    question: "Will the material be formed, bent, stamped, or welded?",
    answer:
      "Thin-gauge forming and welding requirements should be confirmed before choosing grade, thickness, surface condition, and coil route.",
    links: [{ label: "Slitting & Edging", href: "/solutions/capabilities/slitting-edging" }],
  },
  {
    question: "Is the project supplied as coil, strip, tube, or cut parts?",
    answer:
      "Confirm whether production requires stainless steel coil, slit strip, tube, cut-to-length sheet, or formed exhaust parts.",
    links: [
      { label: "Stainless Steel Coil", href: "/products/stainless-steel-coil" },
      { label: "Tube & Pipe", href: "/products/stainless-steel-tube-pipe" },
    ],
  },
  {
    question: "What thickness range and tolerance are required?",
    answer:
      "Automotive exhaust production often needs stable thin-gauge material, controlled width, consistent edge quality, and repeatable forming performance.",
  },
  {
    question: "Is packing and batch control required for production runs?",
    answer:
      "Coil protection, pallet packing, marking, batch separation, and export delivery control help reduce production risk and material handling damage.",
    links: [
      { label: "Packaging & Logistics", href: "/solutions/capabilities/packaging-logistics" },
    ],
  },
] as const;

const AUTOMOTIVE_EXHAUST_RELATED_LINKS = [
  {
    title: "Stainless Steel Coil",
    href: "/products/stainless-steel-coil",
    image: "/images/products/coil/hero.jpg",
    excerpt:
      "Explore stainless steel coil routes for automotive exhaust pipes, mufflers, catalytic converter shells, heat shields, and formed exhaust components.",
  },
  {
    title: "Stainless Steel Tube & Pipe",
    href: "/products/stainless-steel-tube-pipe",
    image: "/images/products/tube/hero.jpg",
    excerpt:
      "Review stainless steel tube and pipe options for exhaust pipes, formed tube sections, transfer routes, and fabricated exhaust assemblies.",
  },
  {
    title: "304 Stainless Steel",
    href: "/grades/304-stainless-steel",
    image: "/images/grades/304-stainless-steel/hero.jpg",
    excerpt:
      "Use 304 stainless steel for premium exhaust tips, visible exhaust parts, aftermarket systems, and applications needing better appearance and corrosion resistance.",
  },
] as const;

function AutomotiveExhaustOperatingConditions() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-5rem)] gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <h2 className="max-w-[11.7em] text-[1.9rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.3rem]">
              Operating Conditions That Define Automotive Exhaust Stainless
              Steel Selection
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              Automotive exhaust stainless steel is selected by temperature
              zone, oxidation exposure, condensate corrosion, forming method,
              welding route, thickness range, and whether the material will be
              supplied as coil, strip, tube, or fabricated parts.
            </p>
          </div>
          <div>
            <div className="overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_18px_46px_rgba(17,24,32,0.07)]">
              <div className="bg-[#111820] px-5 py-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                  Exhaust route pre-check
                </p>
              </div>
              <div className="divide-y divide-[#e3d7c8]">
                {AUTOMOTIVE_EXHAUST_CONDITION_ITEMS.map((item, index) => (
                  <article
                    key={item.title}
                    className={`group grid gap-3 px-5 py-4 transition sm:grid-cols-[6.6rem_1fr] ${
                      index % 2 === 0
                        ? "bg-[#111820] text-white [&_a]:text-[#f6d044] [&_h3]:text-white [&_p]:text-white/78"
                        : "bg-[#f6d044] text-[#111820] [&_a]:text-[#111820] [&_h3]:text-[#111820] [&_p]:text-[#111820]/78"
                    }`}
                  >
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em]">
                        {item.marker}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[1rem] font-semibold leading-6">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6">
                        {item.description}{" "}
                        {"href" in item ? (
                          <Link
                            href={item.href}
                            className="font-semibold underline underline-offset-4 transition"
                          >
                            {item.linkLabel}
                          </Link>
                        ) : null}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AutomotiveExhaustMaterialRoute() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:min-h-[44vh] lg:px-8 lg:py-9">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(44vh-4.5rem)] gap-7 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
          <div className="grid gap-1.5">
            {AUTOMOTIVE_EXHAUST_MATERIAL_ROUTES.map((item, index) => (
              <article
                key={item.title}
                className={`group border border-[#d8cbb8] px-3.5 py-2 shadow-[0_8px_18px_rgba(17,24,32,0.04)] transition hover:border-[#b8845a] hover:bg-white hover:shadow-[0_12px_26px_rgba(17,24,32,0.075)] ${
                  index % 2 === 0
                    ? "bg-[#f6d044] [&_h3]:text-[#111820] [&_p]:text-[#111820]/78"
                    : "bg-[#fbf7ef]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center bg-[#111820] text-[0.62rem] font-semibold tracking-[0.1em] text-[#f6d044]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#8a6b32]">
                      {item.route}
                    </p>
                    <h3 className="mt-1 text-[0.95rem] font-semibold leading-5 text-[#111820]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-[0.82rem] leading-5 text-[#56606a]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="lg:pl-2">
            <h2 className="max-w-[9.8em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
              Material Route by Exhaust Temperature and Forming Need
            </h2>
            <p className="mt-5 text-[0.96rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.05rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              For automotive exhaust stainless steel, the main decision is not
              only corrosion resistance. Buyers should confirm temperature
              zone, oxidation exposure, forming method, welding route,
              thickness range, and whether the part is produced from coil,
              strip, tube, or formed stainless steel components.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AutomotiveExhaustSpecificationChecklist() {
  return (
    <section className="bg-[#f5efe3] px-4 py-8 sm:px-6 lg:min-h-[46vh] lg:px-8 lg:py-9">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(46vh-4.5rem)] gap-7 lg:grid-cols-[0.4fr_0.6fr] lg:items-center">
          <div>
            <h2 className="max-w-[10.4em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.45rem]">
              Automotive Exhaust Stainless Steel Specification Checklist
            </h2>
            <p className="mt-5 text-[0.96rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.05rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              Before ordering stainless steel for automotive exhaust systems,
              buyers should confirm temperature zone, corrosion exposure,
              forming route, welding method, thickness range, coil or tube
              requirements, and delivery control. These details help avoid
              wrong grade selection, forming issues, weld problems, surface
              defects, and production delays.
            </p>
          </div>
          <div className="grid gap-1.5">
            {AUTOMOTIVE_EXHAUST_SPEC_CHECKLIST.map((item, index) => (
              <article
                key={item.question}
                className={`group grid gap-2.5 border border-[#d8cbb8] px-3.5 py-2 shadow-[0_8px_18px_rgba(17,24,32,0.04)] transition hover:border-[#b8845a] hover:shadow-[0_12px_26px_rgba(17,24,32,0.075)] sm:grid-cols-[2.35rem_1fr] ${
                  index % 2 === 0
                    ? "bg-[#111820] text-white [&_a]:text-[#f6d044] [&_h3]:text-white [&_p]:text-white/78"
                    : "bg-[#f6d044] text-[#111820] [&_a]:text-[#111820] [&_h3]:text-[#111820] [&_p]:text-[#111820]/78"
                }`}
              >
                <div className="flex h-7 w-7 items-center justify-center bg-[#111820] text-[0.62rem] font-semibold tracking-[0.1em] text-[#f6d044]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-[0.84rem] font-semibold leading-[1.22]">
                    {item.question}
                  </h3>
                  <p className="mt-0.5 text-[0.74rem] leading-[1.38]">
                    {item.answer}
                  </p>
                  {"links" in item && item.links.length ? (
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1">
                      {item.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-[0.74rem] font-semibold underline underline-offset-4 transition"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AutomotiveExhaustRelatedLinks() {
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
            {AUTOMOTIVE_EXHAUST_RELATED_LINKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} related stainless steel page`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.2)_0%,rgba(13,20,27,0.78)_54%,rgba(13,20,27,0.95)_100%)]" aria-hidden="true" />
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(4.75rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/76">
                    {item.excerpt}
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

const MEDICAL_PHARMA_RISK_CARDS = [
  {
    title: "Cleanroom Wall Panels",
    description:
      "Stainless steel cleanroom wall panels require smooth surfaces, controlled appearance, cleanability, and protection from scratches before installation.",
    linkLabel: "Sheet",
    href: "/products/stainless-steel-sheet",
    image: "/images/products/sheet/hero.jpg",
    alt: "Stainless steel sheet for cleanroom wall panels and controlled medical interiors",
    objectPosition: "center",
  },
  {
    title: "Sterile Worktables",
    description:
      "Medical and pharma worktables need stainless steel surfaces that support regular cleaning, stable corrosion resistance, and low residue risk.",
    image: "/images/applications/medical-pharmaceutical/hero-medical-pharma.jpg",
    alt: "Stainless steel sterile worktable surfaces and medical trays",
    objectPosition: "center 78%",
  },
  {
    title: "Process Piping",
    description:
      "Pharmaceutical process piping requires hygienic tube routes, controlled weld treatment, and internal surface quality for clean product transfer.",
    linkLabel: "Tube & Pipe",
    href: "/products/stainless-steel-tube-pipe",
    image: "/images/applications/medical-pharmaceutical/hero.jpg",
    alt: "Stainless steel pharmaceutical process piping and hygienic production lines",
    objectPosition: "center",
  },
  {
    title: "Equipment Frames",
    description:
      "Stainless steel equipment frames and supports need fabrication stability, cleanable geometry, and durability in controlled production areas.",
    image: "/images/applications/medical-pharmaceutical/scene-1.jpg",
    alt: "Stainless steel tube and frame materials for controlled medical production areas",
    objectPosition: "center",
  },
  {
    title: "Medical Cabinets",
    description:
      "Stainless steel cabinets, doors, drawers, and storage units require clean surfaces, scratch protection, and consistent visible finish.",
    linkLabel: "Protective Film",
    href: "/solutions/capabilities/protective-film",
    image: "/images/capabilities/protective-film/hero.jpg",
    alt: "Protective film for stainless steel medical cabinets and visible panels",
    objectPosition: "center",
  },
  {
    title: "Wash & Sterilization Areas",
    description:
      "Wet cleaning and sterilization zones often require stronger corrosion resistance where chemicals, moisture, and repeated cleaning cycles are present.",
    linkLabel: "316L stainless steel",
    href: "/grades/316l-stainless-steel",
    image: "/images/grades/316l-stainless-steel/hero.jpg",
    alt: "316L stainless steel for wash and sterilization areas in medical and pharmaceutical equipment",
    objectPosition: "center",
  },
] as const;

const MEDICAL_PHARMA_REQUIREMENT_ROWS = [
  {
    zone: "Cleanroom wall panels",
    contact: "Non-product cleanroom surface",
    risk: "Scratch control, clean appearance, contamination prevention",
    route: "304 / 316L sheet, 2B or brushed finish, protective film",
    linkLabel: "Sheet",
    href: "/products/stainless-steel-sheet",
  },
  {
    zone: "Sterile worktables",
    contact: "Direct or near-product surface",
    risk: "Frequent cleaning, residue control, surface damage risk",
    route: "304 / 316L sheet, 2B / No.4 / polished finish",
    linkLabel: "316L",
    href: "/grades/316l-stainless-steel",
  },
  {
    zone: "Process piping",
    contact: "Internal transfer",
    risk: "Internal cleanliness, weld quality, cleaning chemistry",
    route: "Hygienic tube or pipe route with controlled surface quality",
    linkLabel: "Tube & Pipe",
    href: "/products/stainless-steel-tube-pipe",
  },
  {
    zone: "Equipment frames",
    contact: "Support structure",
    risk: "Cleaning access, fabrication durability, crevice risk",
    route: "304 / 316L tube, sheet, or formed parts",
    linkLabel: "Tube",
    href: "/products/stainless-steel-tube-pipe",
  },
  {
    zone: "Medical cabinets",
    contact: "Visible and functional surface",
    risk: "Scratches, fingerprints, cleaning frequency",
    route: "304 sheet, No.4 / hairline / AFP, protective film",
    linkLabel: "AFP",
    href: "/surfaces/stainless-steel-afp-finish",
  },
  {
    zone: "Wash and sterilization areas",
    contact: "Wet exposure",
    risk: "Chemicals, moisture, corrosion risk",
    route: "316L review for aggressive cleaning or sterilization environments",
    linkLabel: "316L",
    href: "/grades/316l-stainless-steel",
  },
] as const;

const MEDICAL_PHARMA_DECISION_STEPS = [
  {
    title: "Start with contamination risk.",
    text: "Choose 304 stainless steel for general medical cabinets, equipment frames, cleanroom panels, and controlled indoor support structures where corrosion exposure is moderate.",
  },
  {
    title: "Check cleaning chemicals and sterilization exposure.",
    text: "Choose 316L stainless steel when equipment is exposed to stronger cleaning chemicals, sterilization cycles, humid environments, chloride exposure, or higher corrosion-risk pharmaceutical processing conditions.",
    links: [{ label: "316L stainless steel", href: "/grades/316l-stainless-steel" }],
  },
  {
    title: "Select sheet, tube, or hygienic piping route.",
    text: "Use stainless steel sheet for cleanroom panels, cabinets, worktables, covers, and equipment skins. Use tube or pipe routes where support frames, transfer lines, or hygienic process piping are required.",
    links: [
      { label: "Sheet", href: "/products/stainless-steel-sheet" },
      { label: "Tube & Pipe", href: "/products/stainless-steel-tube-pipe" },
    ],
  },
  {
    title: "Match surface finish to cleaning and contamination control.",
    text: "Choose 2B, No.4, hairline, polished, or AFP stainless steel finish based on cleanability, touch frequency, visible surface needs, and residue risk.",
    links: [
      {
        label: "Surface Finishing",
        href: "/solutions/capabilities/surface-finish-capability",
      },
    ],
  },
  {
    title: "Confirm fabrication before production.",
    text: "Cut-to-length, bending, welding, forming, and edge finishing should be planned before protective film and packing are finalized.",
    links: [{ label: "Cut-to-Length", href: "/solutions/capabilities/cut-to-length" }],
  },
  {
    title: "Protect cleanroom and visible surfaces.",
    text: "Choose protective film and suitable export packing when stainless steel sheets, panels, cabinets, or frames will be fabricated, assembled, or shipped long distances.",
    links: [
      { label: "Protective Film", href: "/solutions/capabilities/protective-film" },
    ],
  },
] as const;

const MEDICAL_PHARMA_RELATED_LINKS = [
  {
    title: "316L Stainless Steel",
    href: "/grades/316l-stainless-steel",
    image: "/images/grades/316l-stainless-steel/hero.jpg",
    excerpt:
      "Review 316L stainless steel for medical and pharmaceutical equipment exposed to cleaning chemicals, wet areas, sterilization cycles, and higher corrosion-risk environments.",
  },
  {
    title: "Stainless Steel Tube & Pipe",
    href: "/products/stainless-steel-tube-pipe",
    image: "/images/products/sanitary-tube/hero.jpg",
    excerpt:
      "Compare stainless steel tube and pipe routes for process piping, equipment frames, hygienic transfer lines, and controlled production environments.",
  },
  {
    title: "Surface Finishing Capability",
    href: "/solutions/capabilities/surface-finish-capability",
    image: "/images/capabilities/surface-finishing/hero.jpg",
    excerpt:
      "Match 2B, No.4, hairline, polished, and controlled surface finishes to cleanability, contamination control, and visible medical equipment surfaces.",
  },
] as const;

function MedicalPharmaRiskMap() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-5rem)] gap-8 lg:grid-cols-[0.43fr_0.57fr] lg:items-center">
          <div>
            <h2 className="max-w-[11.2em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.55rem]">
              Cleanroom &amp; Contamination Risk Map for Medical &amp; Pharma Equipment
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              Medical and pharmaceutical stainless steel is selected by
              contamination risk, cleaning method, exposure to chemicals,
              fabrication route, and whether the surface is used in a cleanroom,
              product-contact, or support-equipment area.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {MEDICAL_PHARMA_RISK_CARDS.map((item, index) => (
              <article
                key={item.title}
                className="group relative isolate overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-4 shadow-[0_14px_34px_rgba(13,20,27,0.06)] transition hover:border-[#b8845a] hover:shadow-[0_18px_42px_rgba(13,20,27,0.12)]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 230px"
                  className="-z-20 object-cover opacity-[0.47] transition duration-500 group-hover:scale-105 group-hover:opacity-[0.57]"
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(13,20,27,0.78)_0%,rgba(13,20,27,0.66)_56%,rgba(13,20,27,0.54)_100%)]" aria-hidden="true" />
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/58">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-[1rem] font-semibold leading-6 text-[#f6d044]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white">
                    {item.description}{" "}
                    {"href" in item ? (
                      <Link
                        href={item.href}
                        className="font-semibold text-[#f6d044] underline underline-offset-4 transition hover:text-white"
                      >
                        {item.linkLabel}
                      </Link>
                    ) : null}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MedicalPharmaRelatedLinks() {
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
            {MEDICAL_PHARMA_RELATED_LINKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} related stainless steel page`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.2)_0%,rgba(13,20,27,0.78)_54%,rgba(13,20,27,0.95)_100%)]" aria-hidden="true" />
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(4.75rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/76">
                    {item.excerpt}
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

function MedicalPharmaDecisionPath() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-5rem)] gap-8 lg:grid-cols-[0.43fr_0.57fr] lg:items-center">
          <div>
            <h2 className="max-w-[10.8em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.55rem]">
              How to Choose Stainless Steel for Medical &amp; Pharma Equipment
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              The best stainless steel route depends on cleanroom class
              expectations, product contact, cleaning chemicals, wet exposure,
              fabrication method, and whether the equipment requires sheet,
              tube, or hygienic process piping.
            </p>
          </div>
          <ol className="grid gap-2">
            {MEDICAL_PHARMA_DECISION_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="group grid grid-cols-[3rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_30px_rgba(17,24,32,0.055)] transition hover:border-[#b8845a] hover:shadow-[0_16px_38px_rgba(17,24,32,0.09)] focus-within:border-[#b8845a]"
              >
                <div className="flex items-center justify-center border-r border-[#e2d5c3] bg-[#111820] text-[0.72rem] font-semibold tracking-[0.12em] text-[#f6d044]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="px-4 py-2.5">
                  <h3 className="text-[0.88rem] font-semibold leading-5 text-[#111820]">
                    {step.title}
                  </h3>
                  <p className="max-h-0 overflow-hidden text-[0.82rem] leading-5 text-[#4f5864] opacity-0 transition-all duration-300 group-hover:mt-1 group-hover:max-h-28 group-hover:opacity-100 group-focus-within:mt-1 group-focus-within:max-h-28 group-focus-within:opacity-100">
                    {step.text}
                  </p>
                  {"links" in step && step.links.length ? (
                    <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-1.5 group-hover:max-h-10 group-hover:opacity-100 group-focus-within:mt-1.5 group-focus-within:max-h-10 group-focus-within:opacity-100">
                      <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {step.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="font-semibold text-[#8a6b32] underline underline-offset-4 transition hover:text-[#111820]"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function MedicalPharmaRequirementMatrix() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] max-w-5xl gap-7 lg:grid-cols-[0.66fr_0.34fr] lg:items-center">
        <div className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
          <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2.5 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                Contamination Control
              </h3>
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
              Medical and pharmaceutical stainless steel route by controlled zone, contact type, and cleaning risk
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-[0.58rem] sm:text-[0.68rem]">
            <thead>
              <tr className="bg-[#f6d044] text-[#101820]">
                <th className="w-[20%] border-r border-[#111820]/24 px-2 py-2.5 text-center text-[0.56rem] font-semibold uppercase tracking-[0.07em] sm:px-2.5 sm:text-[0.6rem]">
                  Controlled Zone
                </th>
                <th className="w-[17%] border-r border-[#111820]/24 px-2 py-2.5 text-center text-[0.56rem] font-semibold uppercase tracking-[0.07em] sm:px-2.5 sm:text-[0.6rem]">
                  Decision Link
                </th>
                <th className="w-[18%] border-r border-[#111820]/24 px-2 py-2.5 text-center text-[0.56rem] font-semibold uppercase tracking-[0.07em] sm:px-2.5 sm:text-[0.6rem]">
                  Contact Type
                </th>
                <th className="w-[22%] border-r border-[#111820]/24 px-2 py-2.5 text-center text-[0.56rem] font-semibold uppercase tracking-[0.07em] sm:px-2.5 sm:text-[0.6rem]">
                  Cleaning Risk
                </th>
                <th className="px-2 py-2.5 text-center text-[0.56rem] font-semibold uppercase tracking-[0.07em] sm:px-2.5 sm:text-[0.6rem]">
                  Recommended Route
                </th>
              </tr>
            </thead>
            <tbody>
              {MEDICAL_PHARMA_REQUIREMENT_ROWS.map((row) => (
                <tr key={row.zone} className="bg-[#111111] align-middle">
                  <th className="border-r border-t border-white/14 px-2 py-2 text-left align-middle font-semibold leading-[1.28] text-white sm:px-2.5">
                    {row.zone}
                  </th>
                  <td className="border-r border-t border-white/14 px-2 py-2 text-center leading-[1.28] sm:px-2.5">
                    <Link
                      href={row.href}
                      className="inline-block origin-center whitespace-nowrap font-semibold text-[#f6d044] transition duration-200 hover:scale-150 hover:text-white focus-visible:scale-150 focus-visible:text-white"
                    >
                      {row.linkLabel}
                    </Link>
                  </td>
                  <td className="border-r border-t border-white/14 px-2 py-2 leading-[1.28] text-white/78 sm:px-2.5">
                    {row.contact}
                  </td>
                  <td className="border-r border-t border-white/14 px-2 py-2 leading-[1.28] text-white/78 sm:px-2.5">
                    {row.risk}
                  </td>
                  <td className="border-t border-white/14 px-2 py-2 leading-[1.28] text-white/78 sm:px-2.5">
                    {row.route}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.45rem]">
            Medical &amp; Pharma Stainless Steel Requirement
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] first-letter:uppercase sm:text-[0.96rem]">
            Medical and pharmaceutical stainless steel selection should
            consider cleanroom use, product contact, cleaning chemicals, weld
            treatment, surface finish, contamination control, and whether the
            material will be supplied as sheet, tube, or fabricated parts.
          </p>
        </div>
      </div>
    </section>
  );
}

const FOOD_BEVERAGE_RISK_CARDS = [
  {
    title: "Food-Contact Surfaces",
    description:
      "Direct food-contact stainless steel surfaces require cleanability, smooth finishing, and stable corrosion resistance for daily production use.",
    image: "/images/applications/food-beverage/hero-food-beverage.jpg",
    alt: "Food-contact stainless steel surfaces in beverage and kitchen processing equipment",
    objectPosition: "center",
  },
  {
    title: "Processing Tanks",
    description:
      "Stainless steel tanks and vessels need corrosion resistance, weld quality, and surface control for food, beverage, and ingredient processing.",
    image: "/images/applications/food-beverage/scene-1.jpg",
    alt: "Stainless steel food and beverage processing tanks and vessels",
    objectPosition: "center",
  },
  {
    title: "Conveyor Systems",
    description:
      "Food conveyor frames, guards, and contact parts require durable stainless steel with easy cleaning and stable fabrication performance.",
    image: "/images/products/sheet/processing-capabilities/slitting-edging.jpg",
    alt: "Stainless steel components for food conveyor systems and equipment frames",
    objectPosition: "center",
  },
  {
    title: "Washdown Areas",
    description:
      "Wet cleaning zones need stainless steel that can handle water, cleaning chemicals, and repeated sanitation cycles.",
    linkLabel: "316L stainless steel",
    href: "/grades/316l-stainless-steel",
    image: "/images/grades/316l-stainless-steel/hero.jpg",
    alt: "316L stainless steel for wet cleaning and food processing washdown areas",
    objectPosition: "center",
  },
  {
    title: "Sanitary Piping",
    description:
      "Food and beverage process piping requires hygienic tube routes, clean weld treatment, and controlled internal surface quality.",
    linkLabel: "Sanitary Tube",
    href: "/products/stainless-steel-tube-pipe",
    image: "/images/products/sanitary-tube/hero.jpg",
    alt: "Stainless steel sanitary tube for hygienic food and beverage process piping",
    objectPosition: "center",
  },
  {
    title: "Filling & Packaging Equipment",
    description:
      "Filling machines, packaging lines, and equipment panels need stainless steel that supports clean handling, scratch protection, and reliable assembly.",
    image: "/images/products/sheet/processing-capabilities/packaging-logistics.jpg",
    alt: "Stainless steel panels for food filling and packaging equipment",
    objectPosition: "center",
  },
] as const;

const FOOD_BEVERAGE_REQUIREMENT_ROWS = [
  {
    zone: "Food-contact tables",
    contact: "Direct food contact",
    risk: "Frequent wipe-down and residue removal",
    route: "304 sheet, 2B or No.4 finish, cut-to-length",
    linkLabel: "Sheet",
    href: "/products/stainless-steel-sheet",
  },
  {
    zone: "Processing tanks",
    contact: "Product contact",
    risk: "Acidic ingredients, weld zones, cleaning cycles",
    route: "304 / 316L sheet or plate depending on media",
    linkLabel: "316L",
    href: "/grades/316l-stainless-steel",
  },
  {
    zone: "Sanitary piping",
    contact: "Internal product transfer",
    risk: "Internal cleanliness and weld quality",
    route: "Sanitary tube with controlled ID / OD finish",
    linkLabel: "Sanitary Tube",
    href: "/products/stainless-steel-tube-pipe",
  },
  {
    zone: "Washdown zones",
    contact: "Wet exposure",
    risk: "Chloride cleaners, standing water, corrosion risk",
    route: "316L review for aggressive cleaning environments",
    linkLabel: "316L",
    href: "/grades/316l-stainless-steel",
  },
  {
    zone: "Conveyor frames",
    contact: "Indirect contact",
    risk: "Cleaning access and fabrication durability",
    route: "304 tube, sheet, or formed parts",
    linkLabel: "Tube",
    href: "/products/stainless-steel-tube-pipe",
  },
  {
    zone: "Equipment panels",
    contact: "Visible and functional surface",
    risk: "Scratches before assembly or export",
    route: "304 sheet, No.4 / 2B, protective film",
    linkLabel: "Protective Film",
    href: "/solutions/capabilities/protective-film",
  },
] as const;

const FOOD_BEVERAGE_DECISION_STEPS = [
  {
    title: "Start with food-contact risk.",
    text: "Choose 304 stainless steel for most general food-contact tables, equipment panels, frames, conveyors, and controlled indoor processing areas.",
  },
  {
    title: "Check wet exposure and cleaning chemicals.",
    text: "Choose 316L stainless steel when the equipment is exposed to chloride cleaners, acidic food ingredients, standing water, salt, or stronger sanitation cycles.",
    links: [{ label: "316L stainless steel", href: "/grades/316l-stainless-steel" }],
  },
  {
    title: "Select the right product form.",
    text: "Use stainless steel sheet for worktables, panels, guards, splash areas, and equipment skins. Use sanitary tube where internal product transfer, hygienic welding, and clean flow paths are required.",
    links: [
      { label: "Sheet", href: "/products/stainless-steel-sheet" },
      { label: "Sanitary Tube", href: "/products/stainless-steel-tube-pipe" },
    ],
  },
  {
    title: "Match surface finish to cleanability.",
    text: "Choose 2B, No.4, or polished stainless steel finish based on cleaning method, visible surface needs, and residue risk.",
    links: [
      {
        label: "Surface Finishing",
        href: "/solutions/capabilities/surface-finish-capability",
      },
    ],
  },
  {
    title: "Confirm fabrication before production.",
    text: "Cut-to-length, bending, welding, and formed parts should be planned before surface protection and packing are finalized.",
    links: [{ label: "Cut-to-Length", href: "/solutions/capabilities/cut-to-length" }],
  },
  {
    title: "Protect hygienic and visible surfaces.",
    text: "Choose protective film and suitable export packing when stainless steel sheets or panels will be cut, bent, welded, assembled, or shipped long distances.",
    links: [
      { label: "Protective Film", href: "/solutions/capabilities/protective-film" },
    ],
  },
] as const;

const FOOD_BEVERAGE_RELATED_LINKS = [
  {
    title: "Stainless Steel Tube & Pipe",
    href: "/products/stainless-steel-tube-pipe",
    image: "/images/products/sanitary-tube/hero.jpg",
    excerpt:
      "Review stainless steel tube and pipe routes for food and beverage process piping, hygienic transfer lines, and equipment frames.",
  },
  {
    title: "316L Stainless Steel",
    href: "/grades/316l-stainless-steel",
    image: "/images/grades/316l-stainless-steel/hero.jpg",
    excerpt:
      "Use 316L stainless steel when washdown zones, chloride cleaners, acidic ingredients, or stronger sanitation cycles require higher corrosion resistance.",
  },
  {
    title: "Stainless Steel Sheet",
    href: "/products/stainless-steel-sheet",
    image: "/images/products/sheet/hero.jpg",
    excerpt:
      "Choose stainless steel sheet for food-contact tables, equipment panels, guards, splash areas, worktops, and fabricated food equipment parts.",
  },
] as const;

function FoodBeverageRiskMap() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-5rem)] gap-8 lg:grid-cols-[0.43fr_0.57fr] lg:items-center">
          <div>
            <h2 className="max-w-[9.2em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.55rem]">
              Hygiene Risk Map for Food &amp; Beverage Equipment
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              Food and beverage stainless steel is selected by contact risk,
              cleaning method, moisture exposure, and fabrication route. Each
              zone has different hygiene, corrosion, and surface finish
              requirements.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {FOOD_BEVERAGE_RISK_CARDS.map((item, index) => (
              <article
                key={item.title}
                className="group relative isolate overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-4 shadow-[0_14px_34px_rgba(13,20,27,0.06)] transition hover:border-[#b8845a] hover:shadow-[0_18px_42px_rgba(13,20,27,0.12)]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 230px"
                  className="-z-20 object-cover opacity-[0.47] transition duration-500 group-hover:scale-105 group-hover:opacity-[0.57]"
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(13,20,27,0.78)_0%,rgba(13,20,27,0.66)_56%,rgba(13,20,27,0.54)_100%)]" aria-hidden="true" />
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/58">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-[1rem] font-semibold leading-6 text-[#f6d044]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white">
                    {item.description}{" "}
                    {"href" in item ? (
                      <Link
                        href={item.href}
                        className="font-semibold text-[#f6d044] underline underline-offset-4 transition hover:text-white"
                      >
                        {item.linkLabel}
                      </Link>
                    ) : null}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FoodBeverageRequirementMatrix() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] max-w-5xl gap-7 lg:grid-cols-[0.66fr_0.34fr] lg:items-center">
        <div className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
          <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2.5 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                Cleanability &amp; Contact
              </h3>
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
              Food-grade stainless steel route by hygiene zone, contact type, and cleaning risk
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-[0.58rem] sm:text-[0.68rem]">
            <thead>
              <tr className="bg-[#f6d044] text-[#101820]">
                <th className="w-[20%] border-r border-[#111820]/24 px-2 py-2.5 text-center text-[0.56rem] font-semibold uppercase tracking-[0.07em] sm:px-2.5 sm:text-[0.6rem]">
                  Hygiene Zone
                </th>
                <th className="w-[17%] border-r border-[#111820]/24 px-2 py-2.5 text-center text-[0.56rem] font-semibold uppercase tracking-[0.07em] sm:px-2.5 sm:text-[0.6rem]">
                  Decision Link
                </th>
                <th className="w-[18%] border-r border-[#111820]/24 px-2 py-2.5 text-center text-[0.56rem] font-semibold uppercase tracking-[0.07em] sm:px-2.5 sm:text-[0.6rem]">
                  Contact Type
                </th>
                <th className="w-[22%] border-r border-[#111820]/24 px-2 py-2.5 text-center text-[0.56rem] font-semibold uppercase tracking-[0.07em] sm:px-2.5 sm:text-[0.6rem]">
                  Cleaning Risk
                </th>
                <th className="px-2 py-2.5 text-center text-[0.56rem] font-semibold uppercase tracking-[0.07em] sm:px-2.5 sm:text-[0.6rem]">
                  Recommended Route
                </th>
              </tr>
            </thead>
            <tbody>
              {FOOD_BEVERAGE_REQUIREMENT_ROWS.map((row) => (
                <tr key={row.zone} className="bg-[#111111] align-middle">
                  <th className="border-r border-t border-white/14 px-2 py-2 text-left align-middle font-semibold leading-[1.28] text-white sm:px-2.5">
                    {row.zone}
                  </th>
                  <td className="border-r border-t border-white/14 px-2 py-2 text-center leading-[1.28] sm:px-2.5">
                    <Link
                      href={row.href}
                      className="inline-block origin-center whitespace-nowrap font-semibold text-[#f6d044] transition duration-200 hover:scale-150 hover:text-white focus-visible:scale-150 focus-visible:text-white"
                    >
                      {row.linkLabel}
                    </Link>
                  </td>
                  <td className="border-r border-t border-white/14 px-2 py-2 leading-[1.28] text-white/78 sm:px-2.5">
                    {row.contact}
                  </td>
                  <td className="border-r border-t border-white/14 px-2 py-2 leading-[1.28] text-white/78 sm:px-2.5">
                    {row.risk}
                  </td>
                  <td className="border-t border-white/14 px-2 py-2 leading-[1.28] text-white/78 sm:px-2.5">
                    {row.route}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.45rem]">
            Food Processing Stainless Steel Requirement
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] first-letter:uppercase sm:text-[0.96rem]">
            Food-grade stainless steel selection should consider direct
            contact, wet cleaning, cleaning chemicals, weld treatment, surface
            finish, and whether the material will be supplied as sheet, tube,
            or fabricated parts.
          </p>
        </div>
      </div>
    </section>
  );
}

function FoodBeverageDecisionPath() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-5rem)] gap-8 lg:grid-cols-[0.43fr_0.57fr] lg:items-center">
          <div>
            <h2 className="max-w-[9.5em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.55rem]">
              How to Choose Stainless Steel for Food &amp; Beverage Equipment
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              The best stainless steel route depends on product contact,
              cleaning frequency, wet exposure, fabrication method, and whether
              the equipment requires sheet, tube, or sanitary tube.
            </p>
          </div>
          <ol className="grid gap-2">
            {FOOD_BEVERAGE_DECISION_STEPS.map((step, index) => (
              <li
                key={step.title}
                className="group grid grid-cols-[3rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_30px_rgba(17,24,32,0.055)] transition hover:border-[#b8845a] hover:shadow-[0_16px_38px_rgba(17,24,32,0.09)] focus-within:border-[#b8845a]"
              >
                <div className="flex items-center justify-center border-r border-[#e2d5c3] bg-[#111820] text-[0.72rem] font-semibold tracking-[0.12em] text-[#f6d044]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="px-4 py-2.5">
                  <h3 className="text-[0.88rem] font-semibold leading-5 text-[#111820]">
                    {step.title}
                  </h3>
                  <p className="max-h-0 overflow-hidden text-[0.82rem] leading-5 text-[#4f5864] opacity-0 transition-all duration-300 group-hover:mt-1 group-hover:max-h-28 group-hover:opacity-100 group-focus-within:mt-1 group-focus-within:max-h-28 group-focus-within:opacity-100">
                    {step.text}
                  </p>
                  {"links" in step && step.links.length ? (
                    <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:mt-1.5 group-hover:max-h-10 group-hover:opacity-100 group-focus-within:mt-1.5 group-focus-within:max-h-10 group-focus-within:opacity-100">
                      <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {step.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="font-semibold text-[#8a6b32] underline underline-offset-4 transition hover:text-[#111820]"
                        >
                          {link.label}
                        </Link>
                      ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function FoodBeverageRelatedLinks() {
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
            {FOOD_BEVERAGE_RELATED_LINKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} related stainless steel page`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.2)_0%,rgba(13,20,27,0.78)_54%,rgba(13,20,27,0.95)_100%)]" aria-hidden="true" />
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(4.75rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/76">
                    {item.excerpt}
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

const ARCHITECTURE_USE_CASES = [
  {
    title: "Facade Cladding",
    description:
      "Stainless steel facade panels for commercial buildings, public spaces, transportation hubs, and premium exterior walls.",
    image: "/images/applications/architecture/hero-architecture.jpg",
    alt: "Architectural stainless steel facade cladding on a modern building",
    objectPosition: "center",
  },
  {
    title: "Wall Panels",
    description:
      "Decorative stainless steel wall panels for lobbies, corridors, retail interiors, and high-traffic indoor areas.",
    image: "/images/applications/architecture/scene-1.jpg",
    alt: "Decorative stainless steel architectural wall panels",
    objectPosition: "center",
  },
  {
    title: "Ceiling Systems",
    description:
      "Brushed or mirror stainless steel ceiling panels where flatness, reflection, and surface direction need to remain consistent.",
    image: "/images/surfaces/no8-mirror/applications/architecture.jpg",
    alt: "Reflective stainless steel ceiling and architectural interior panels",
    objectPosition: "center",
  },
  {
    title: "Column Covers",
    description:
      "Formed stainless steel column covers requiring good bendability, surface protection, and clean edge finishing.",
    image: "/images/surfaces/afp/applications/architecture.jpg",
    alt: "Stainless steel architectural column covers and formed panels",
    objectPosition: "center",
  },
  {
    title: "Decorative Trims",
    description:
      "Hairline, No.4, mirror, or PVD stainless steel trims for architectural detailing.",
    image: "/images/surfaces/hairline/hero.jpg",
    alt: "Hairline stainless steel decorative trim for architecture",
    objectPosition: "center",
  },
  {
    title: "Coastal Projects",
    description:
      "Stainless steel used in humid or chloride-exposed environments where grade selection is critical.",
    image: "/images/blog/coastal-304-review-hero.jpg",
    alt: "Coastal architectural stainless steel project environment",
    objectPosition: "center",
  },
] as const;

const ARCHITECTURE_SELECTION_ROWS = [
  {
    area: "Exterior facade panels",
    requirement: "Weather resistance, visual consistency",
    route: "304 / 316L sheet, No.4, hairline, bead blast, PVD",
    linkLabel: "Sheet",
    href: "/products/stainless-steel-sheet",
  },
  {
    area: "Coastal architecture",
    requirement: "Chloride corrosion resistance",
    route: "316L or duplex stainless steel depending on exposure",
    linkLabel: "316L",
    href: "/grades/316l-stainless-steel",
  },
  {
    area: "Interior wall cladding",
    requirement: "Clean finish, scratch protection",
    route: "304 sheet, hairline / No.4 / AFP, protective film",
    linkLabel: "Protective Film",
    href: "/solutions/capabilities/protective-film",
  },
  {
    area: "Ceiling panels",
    requirement: "Flatness and directional finish",
    route: "Cut-to-length sheet, consistent grain direction",
    linkLabel: "Cut-to-Length",
    href: "/solutions/capabilities/cut-to-length",
  },
  {
    area: "Column covers",
    requirement: "Formability and surface protection",
    route: "Sheet with film, controlled bending route",
    linkLabel: "Surface Finishing",
    href: "/solutions/capabilities/surface-finish-capability",
  },
  {
    area: "Decorative trims",
    requirement: "Edge quality and narrow-width consistency",
    route: "Slitting and edging route",
    linkLabel: "Slitting & Edging",
    href: "/solutions/capabilities/slitting-edging",
  },
] as const;

const ARCHITECTURE_MATERIAL_LOGIC = [
  {
    text: "Choose 304 stainless steel for general indoor architectural panels, wall cladding, ceilings, and decorative trims where corrosion exposure is moderate.",
  },
  {
    text: "Choose 316L stainless steel for exterior architecture, coastal buildings, humid environments, and projects exposed to chloride or cleaning chemicals.",
    linkLabel: "316L stainless steel",
    href: "/grades/316l-stainless-steel",
  },
  {
    text: "Choose hairline or No.4 finish when the project needs a refined brushed appearance with reduced fingerprint visibility.",
    linkLabel: "Hairline finish",
    href: "/surfaces/stainless-steel-hairline-finish",
  },
  {
    text: "Choose 8K mirror finish for premium decorative panels, reflective ceilings, elevator lobbies, and luxury interiors.",
    linkLabel: "8K mirror finish",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
  },
  {
    text: "Choose AFP coating when high-touch architectural surfaces need easier cleaning and better fingerprint resistance.",
    linkLabel: "AFP finish",
    href: "/surfaces/stainless-steel-afp-finish",
  },
  {
    text: "Choose protective film and export packing when panels will be cut, bent, installed, or shipped across long distances.",
    linkLabel: "Packaging logistics",
    href: "/solutions/capabilities/packaging-logistics",
  },
] as const;

const ARCHITECTURE_RELATED_LINKS = [
  {
    title: "316L Stainless Steel",
    href: "/grades/316l-stainless-steel",
    image: "/images/grades/316l-stainless-steel/hero.jpg",
    excerpt:
      "Review 316L stainless steel selection for coastal architecture, humid buildings, exterior cladding, and chloride-exposed projects.",
  },
  {
    title: "Hairline Stainless Steel Finish",
    href: "/surfaces/stainless-steel-hairline-finish",
    image: "/images/surfaces/hairline/hero.jpg",
    excerpt:
      "Explore hairline stainless steel finish for architectural wall panels, facade trims, elevator lobbies, and visible interior metalwork.",
  },
  {
    title: "8K Mirror Finish Stainless Steel",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
    image: "/images/surfaces/no8-mirror/applications/architecture.jpg",
    excerpt:
      "Use 8K mirror stainless steel for premium decorative panels, reflective ceilings, landmark interiors, and architectural feature surfaces.",
  },
] as const;

function ArchitectureUseCases() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-5rem)] gap-8 lg:grid-cols-[0.43fr_0.57fr] lg:items-center">
          <div>
            <h2 className="max-w-[9.2em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.55rem]">
              <span className="block">Where Stainless</span>
              <span className="block">Steel Is Used in</span>
              <span className="block whitespace-nowrap">Architecture</span>
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              Architectural stainless steel is selected for projects that need
              long service life, clean appearance, weather resistance, and low
              maintenance. The final material choice depends on whether the
              steel is used outdoors, indoors, near coastal environments, or as
              a decorative visible surface.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {ARCHITECTURE_USE_CASES.map((item, index) => (
              <article
                key={item.title}
                className="group relative isolate overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-4 shadow-[0_14px_34px_rgba(13,20,27,0.06)] transition hover:border-[#b8845a] hover:shadow-[0_18px_42px_rgba(13,20,27,0.12)]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 230px"
                  className="-z-20 object-cover opacity-[0.47] transition duration-500 group-hover:scale-105 group-hover:opacity-[0.57]"
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(13,20,27,0.78)_0%,rgba(13,20,27,0.66)_56%,rgba(13,20,27,0.54)_100%)]" aria-hidden="true" />
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/58">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-[1rem] font-semibold leading-6 text-[#f6d044]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArchitectureSelectionGuide() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] max-w-5xl gap-7 lg:grid-cols-[0.64fr_0.36fr] lg:items-center">
        <div className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
          <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2.5 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                Application Requirements Matrix
              </h3>
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
              Architectural stainless steel route by exposure, finish, and processing need
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-[0.68rem] sm:text-[0.76rem]">
            <thead>
              <tr className="bg-[#f6d044] text-[#101820]">
                <th className="w-[23%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.64rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Application Area
                </th>
                <th className="w-[21%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.64rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Decision Link
                </th>
                <th className="w-[25%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.64rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Key Requirement
                </th>
                <th className="px-2.5 py-2.5 text-center text-[0.64rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Recommended Route
                </th>
              </tr>
            </thead>
            <tbody>
              {ARCHITECTURE_SELECTION_ROWS.map((row) => (
                <tr key={row.area} className="bg-[#111111] align-middle">
                  <th className="border-r border-t border-white/14 px-2.5 py-2.5 text-left align-middle font-semibold leading-[1.35] text-white sm:px-3">
                    {row.area}
                  </th>
                  <td className="border-r border-t border-white/14 px-2.5 py-2.5 text-center leading-[1.35] sm:px-3">
                    <Link
                      href={row.href}
                      className="inline-block origin-center whitespace-nowrap font-semibold text-[#f6d044] transition duration-200 hover:scale-150 hover:text-white focus-visible:scale-150 focus-visible:text-white"
                    >
                      {row.linkLabel}
                    </Link>
                  </td>
                  <td className="border-r border-t border-white/14 px-2.5 py-2.5 leading-[1.35] text-white/78 sm:px-3">
                    {row.requirement}
                  </td>
                  <td className="border-t border-white/14 px-2.5 py-2.5 leading-[1.35] text-white/78 sm:px-3">
                    {row.route}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.45rem]">
            Architecture Material Selection Guide
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] first-letter:uppercase sm:text-[0.96rem]">
            For architectural stainless steel projects, the key decision is not
            only the material grade. Buyers also need to confirm surface
            appearance, flatness, protective film, cutting route, packing
            method, and batch consistency before production.
          </p>
        </div>
      </div>
    </section>
  );
}

function ArchitectureMaterialLogic() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-5rem)] gap-8 lg:grid-cols-[0.43fr_0.57fr] lg:items-center">
          <div>
            <h2 className="max-w-[9.5em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.55rem]">
              How to Choose Stainless Steel for Architectural Projects
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              Selecting stainless steel for architectural projects means
              balancing grade, surface finish, panel processing, protective
              film, and packing with the project environment, maintenance
              plan, and visible design requirements.
            </p>
          </div>
          <ol className="grid gap-3">
            {ARCHITECTURE_MATERIAL_LOGIC.map((item, index) => (
              <li
                key={item.text}
                className="grid grid-cols-[3.25rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_30px_rgba(17,24,32,0.055)]"
              >
                <div className="flex items-center justify-center border-r border-[#e2d5c3] bg-[#111820] text-[0.72rem] font-semibold tracking-[0.12em] text-[#f6d044]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="px-4 py-3.5">
                  <p className="text-sm leading-6 text-[#4f5864]">
                    {item.text}{" "}
                    {"href" in item ? (
                      <Link
                        href={item.href}
                        className="font-semibold text-[#8a6b32] underline underline-offset-4 transition hover:text-[#111820]"
                      >
                        {item.linkLabel}
                      </Link>
                    ) : null}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ArchitectureRelatedLinks() {
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
            {ARCHITECTURE_RELATED_LINKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} related stainless steel page`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.2)_0%,rgba(13,20,27,0.78)_54%,rgba(13,20,27,0.95)_100%)]" aria-hidden="true" />
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(4.75rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/76">
                    {item.excerpt}
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

const ELEVATOR_INTERIORS_USE_CASES = [
  {
    title: "Elevator Cabin Panels",
    description:
      "Decorative stainless steel panels for cabin walls and visible interior surfaces.",
    image: "/images/applications/elevator-decoration/hero-elevator-interiors.jpg",
    alt: "Decorative stainless steel elevator cabin wall panels",
    objectPosition: "center",
  },
  {
    title: "Elevator Doors",
    description:
      "Brushed, hairline, No.4, PVD, or mirror stainless steel door panels requiring scratch protection.",
    image: "/images/applications/elevator-decoration/hero.jpg",
    alt: "Stainless steel elevator door panels with decorative finish",
    objectPosition: "center",
  },
  {
    title: "Ceiling Panels",
    description:
      "Reflective or brushed ceiling panels where flatness and surface direction are important.",
    image: "/images/surfaces/no8-mirror/applications/elevator-decoration.jpg",
    alt: "Reflective stainless steel elevator ceiling and interior panels",
    objectPosition: "center",
  },
  {
    title: "Handrails & Trims",
    description: "Stainless steel profiles and trims for high-touch areas.",
    image: "/images/applications/elevator-decoration/scene-1.jpg",
    alt: "Stainless steel elevator handrails and trim details",
    objectPosition: "center",
  },
  {
    title: "Lobby Wall Panels",
    description:
      "Decorative stainless steel sheets for hotel, office, commercial, and public-space interiors.",
    image: "/images/surfaces/afp/applications/elevator-interiors.jpg",
    alt: "Decorative stainless steel wall panels for interior lobby spaces",
    objectPosition: "center",
  },
  {
    title: "Interior Decorative Metalwork",
    description:
      "Custom panels, column covers, signage backgrounds, and premium fit-out details.",
    image: "/images/surfaces/no8-mirror/applications/architecture.jpg",
    alt: "Interior decorative stainless steel metalwork and wall cladding",
    objectPosition: "center",
  },
] as const;

const ELEVATOR_INTERIORS_SELECTION_ROWS = [
  {
    area: "Cabin wall panels",
    requirement: "Decorative consistency",
    route: "304 sheet, hairline / No.4 / PVD / 8K",
    linkLabel: "Sheet",
    href: "/products/stainless-steel-sheet",
  },
  {
    area: "Elevator doors",
    requirement: "Scratch resistance and clean finish",
    route: "Brushed sheet with protective film",
    linkLabel: "Protective Film",
    href: "/solutions/capabilities/protective-film",
  },
  {
    area: "Ceiling panels",
    requirement: "Reflection and flatness",
    route: "8K mirror or hairline, cut-to-length",
    linkLabel: "8K Mirror",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
  },
  {
    area: "Handrails and trims",
    requirement: "Touch durability, edge quality",
    route: "Slitting, edging, formed parts",
    linkLabel: "Slitting & Edging",
    href: "/solutions/capabilities/slitting-edging",
  },
  {
    area: "Lobby interiors",
    requirement: "Premium decorative appearance",
    route: "Hairline, AFP, PVD, mirror finish",
    linkLabel: "Surface Finishing",
    href: "/solutions/capabilities/surface-finish-capability",
  },
  {
    area: "Export panel orders",
    requirement: "Damage prevention",
    route: "Film, paper interleaving, pallet packing",
    linkLabel: "Packaging",
    href: "/solutions/capabilities/packaging-logistics",
  },
] as const;

const ELEVATOR_INTERIORS_MATERIAL_LOGIC = [
  {
    text: "Choose 304 stainless steel for most elevator cabin panels, doors, ceilings, trims, and interior decorative applications.",
  },
  {
    text: "Choose 316L stainless steel for humid buildings, coastal cities, luxury projects, or interiors exposed to stronger cleaning chemicals.",
    linkLabel: "316L stainless steel",
    href: "/grades/316l-stainless-steel",
  },
  {
    text: "Choose 8K mirror finish for premium elevator ceilings, reflective panels, lobby features, and decorative highlights.",
    linkLabel: "8K mirror finish",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
  },
  {
    text: "Choose hairline or No.4 finish for elevator doors and cabin panels where a refined brushed direction is preferred.",
    linkLabel: "Hairline finish",
    href: "/surfaces/stainless-steel-hairline-finish",
  },
  {
    text: "Choose AFP finish for high-touch interior panels where fingerprints and cleaning frequency are major concerns.",
    linkLabel: "AFP finish",
    href: "/surfaces/stainless-steel-afp-finish",
  },
  {
    text: "Choose protective film and careful packing for decorative stainless steel panels to reduce scratches during bending, transport, and installation.",
    linkLabel: "Protective film",
    href: "/solutions/capabilities/protective-film",
  },
] as const;

const ELEVATOR_INTERIORS_RELATED_LINKS = [
  {
    title: "8K Mirror Finish Stainless Steel",
    href: "/surfaces/stainless-steel-8k-mirror-finish",
    image: "/images/surfaces/no8-mirror/applications/elevator-decoration.jpg",
    excerpt:
      "Review 8K mirror stainless steel for reflective elevator ceilings, feature panels, lobby walls, and premium decorative interiors.",
  },
  {
    title: "AFP Stainless Steel Finish",
    href: "/surfaces/stainless-steel-afp-finish",
    image: "/images/surfaces/afp/applications/elevator-interiors.jpg",
    excerpt:
      "Explore anti-fingerprint stainless steel for high-touch elevator panels, cabin walls, door skins, trims, and interior surfaces.",
  },
  {
    title: "Hairline Stainless Steel Finish",
    href: "/surfaces/stainless-steel-hairline-finish",
    image: "/images/surfaces/hairline/hero.jpg",
    excerpt:
      "Use hairline stainless steel when elevator doors, cabin panels, and interior metalwork need a refined brushed direction.",
  },
] as const;

function ElevatorInteriorsUseCases() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-5rem)] gap-8 lg:grid-cols-[0.43fr_0.57fr] lg:items-center">
          <div>
            <h2 className="max-w-[9.2em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.55rem]">
              <span className="block">Where Stainless</span>
              <span className="block">Steel Is Used in</span>
              <span className="block">Elevator &amp; Interior Projects</span>
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820]">
              Elevator and interior stainless steel is usually selected for
              high-touch, highly visible spaces. The surface must look
              consistent after cutting, bending, packing, transportation, and
              installation.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {ELEVATOR_INTERIORS_USE_CASES.map((item, index) => (
              <article
                key={item.title}
                className="group relative isolate overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-4 shadow-[0_14px_34px_rgba(13,20,27,0.06)] transition hover:border-[#b8845a] hover:shadow-[0_18px_42px_rgba(13,20,27,0.12)]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 230px"
                  className="-z-20 object-cover opacity-[0.47] transition duration-500 group-hover:scale-105 group-hover:opacity-[0.57]"
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(13,20,27,0.78)_0%,rgba(13,20,27,0.66)_56%,rgba(13,20,27,0.54)_100%)]" aria-hidden="true" />
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/58">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-[1rem] font-semibold leading-6 text-[#f6d044]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ElevatorInteriorsSelectionGuide() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] max-w-5xl gap-7 lg:grid-cols-[0.64fr_0.36fr] lg:items-center">
        <div className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
          <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2.5 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                Application Requirements Matrix
              </h3>
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
              Stainless steel finish, protection, and processing route by elevator interior area
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-[0.68rem] sm:text-[0.76rem]">
            <thead>
              <tr className="bg-[#f6d044] text-[#101820]">
                <th className="w-[23%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.64rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Application Area
                </th>
                <th className="w-[21%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.64rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Decision Link
                </th>
                <th className="w-[25%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.64rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Key Requirement
                </th>
                <th className="px-2.5 py-2.5 text-center text-[0.64rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Recommended Route
                </th>
              </tr>
            </thead>
            <tbody>
              {ELEVATOR_INTERIORS_SELECTION_ROWS.map((row) => (
                <tr key={row.area} className="bg-[#111111] align-middle">
                  <th className="border-r border-t border-white/14 px-2.5 py-2.5 text-left align-middle font-semibold leading-[1.35] text-white sm:px-3">
                    {row.area}
                  </th>
                  <td className="border-r border-t border-white/14 px-2.5 py-2.5 text-center leading-[1.35] sm:px-3">
                    <Link
                      href={row.href}
                      className="inline-block origin-center whitespace-nowrap font-semibold text-[#f6d044] transition duration-200 hover:scale-150 hover:text-white focus-visible:scale-150 focus-visible:text-white"
                    >
                      {row.linkLabel}
                    </Link>
                  </td>
                  <td className="border-r border-t border-white/14 px-2.5 py-2.5 leading-[1.35] text-white/78 sm:px-3">
                    {row.requirement}
                  </td>
                  <td className="border-t border-white/14 px-2.5 py-2.5 leading-[1.35] text-white/78 sm:px-3">
                    {row.route}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.45rem]">
            Elevator &amp; Interior Material Selection Guide
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] first-letter:uppercase sm:text-[0.96rem]">
            For elevator stainless steel panels, surface finish and protection
            are often more important than basic material form. Buyers should
            confirm finish direction, panel size, protective film, packing
            method, and installation environment before ordering.
          </p>
        </div>
      </div>
    </section>
  );
}

function ElevatorInteriorsMaterialLogic() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-5rem)] gap-8 lg:grid-cols-[0.43fr_0.57fr] lg:items-center">
          <div>
            <h2 className="max-w-[9.5em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.55rem]">
              How to Choose Stainless Steel for Elevator Panels
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              Selecting stainless steel for elevator panels means matching the
              grade, decorative finish, protective film, and packing route to
              traffic level, cleaning frequency, building environment, and
              visible surface expectations.
            </p>
          </div>
          <ol className="grid gap-3">
            {ELEVATOR_INTERIORS_MATERIAL_LOGIC.map((item, index) => (
              <li
                key={item.text}
                className="grid grid-cols-[3.25rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_30px_rgba(17,24,32,0.055)]"
              >
                <div className="flex items-center justify-center border-r border-[#e2d5c3] bg-[#111820] text-[0.72rem] font-semibold tracking-[0.12em] text-[#f6d044]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="px-4 py-3.5">
                  <p className="text-sm leading-6 text-[#4f5864]">
                    {item.text}{" "}
                    {"href" in item ? (
                      <Link
                        href={item.href}
                        className="font-semibold text-[#8a6b32] underline underline-offset-4 transition hover:text-[#111820]"
                      >
                        {item.linkLabel}
                      </Link>
                    ) : null}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ElevatorInteriorsRelatedLinks() {
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
            {ELEVATOR_INTERIORS_RELATED_LINKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} related stainless steel page`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.2)_0%,rgba(13,20,27,0.78)_54%,rgba(13,20,27,0.95)_100%)]" aria-hidden="true" />
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(4.75rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/76">
                    {item.excerpt}
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

const KITCHEN_EQUIPMENT_USE_CASES = [
  {
    title: "Worktops",
    description:
      "Stainless steel worktops for commercial kitchens, preparation tables, and food-service counters.",
    image: "/images/applications/kitchen-equipment/scene-1.jpg",
    alt: "Commercial kitchen stainless steel worktops and preparation counters",
    objectPosition: "center",
  },
  {
    title: "Sinks & Wash Zones",
    description:
      "Wet-area stainless steel requiring better corrosion resistance and clean weld treatment.",
    image: "/images/applications/kitchen-equipment/scene-1.jpg",
    alt: "Stainless steel wet zone with sinks and wash areas in a commercial kitchen",
    objectPosition: "right center",
  },
  {
    title: "Cabinets & Storage",
    description:
      "Stainless steel cabinets, doors, drawers, and shelves requiring durability and cleanability.",
    image: "/images/surfaces/afp/slideshow/afp-kitchen-wall-panel.jpg",
    alt: "Brushed stainless steel kitchen cabinets and storage panels",
    objectPosition: "center",
  },
  {
    title: "Splashbacks & Wall Panels",
    description:
      "Easy-clean stainless steel panels for food preparation and high-splash areas.",
    image: "/images/surfaces/afp/slideshow/afp-kitchen-wall-panel.jpg",
    alt: "Brushed stainless steel splashback and wall panel in a kitchen area",
    objectPosition: "center",
  },
  {
    title: "Appliance Panels",
    description:
      "Brushed or AFP stainless steel panels for ovens, refrigerators, dishwashers, and equipment skins.",
    image: "/images/surfaces/afp/slideshow/afp-appliance-refrigerator.jpg",
    alt: "Brushed stainless steel refrigerator appliance panel",
    objectPosition: "center",
  },
  {
    title: "Fabricated Parts",
    description:
      "Cut, bent, welded, and polished stainless steel parts for kitchen equipment manufacturing.",
    image: "/images/applications/kitchen-equipment/hero-kitchen-equipment.jpg",
    alt: "Fabricated stainless steel kitchen equipment panels and fittings",
    objectPosition: "center",
  },
] as const;

const KITCHEN_EQUIPMENT_SELECTION_ROWS = [
  {
    area: "Worktops and prep tables",
    requirement: "Hygiene, cleanability, flatness",
    route: "304 sheet, No.4 or 2B, cut-to-length",
    linkLabel: "Sheet",
    href: "/products/stainless-steel-sheet",
  },
  {
    area: "Sinks and wash zones",
    requirement: "Corrosion resistance in wet areas",
    route: "304 / 316L depending on cleaning chemicals",
    linkLabel: "316L",
    href: "/grades/316l-stainless-steel",
  },
  {
    area: "Cabinet doors and panels",
    requirement: "Visible surface consistency",
    route: "No.4, hairline, AFP, protective film",
    linkLabel: "AFP",
    href: "/surfaces/stainless-steel-afp-finish",
  },
  {
    area: "Splashbacks",
    requirement: "Easy cleaning, scratch resistance",
    route: "304 sheet, brushed finish, protective film",
    linkLabel: "Protective Film",
    href: "/solutions/capabilities/protective-film",
  },
  {
    area: "Appliance panels",
    requirement: "Decorative finish and fingerprint control",
    route: "Hairline / No.4 / AFP stainless sheet",
    linkLabel: "Hairline",
    href: "/surfaces/stainless-steel-hairline-finish",
  },
  {
    area: "Fabricated kitchen parts",
    requirement: "Accurate size before bending or welding",
    route: "Cut-to-length and slitting route",
    linkLabel: "Cut-to-Length",
    href: "/solutions/capabilities/cut-to-length",
  },
] as const;

const KITCHEN_EQUIPMENT_MATERIAL_LOGIC = [
  {
    text: "Choose 304 stainless steel for most commercial kitchen equipment, including worktops, cabinets, splashbacks, shelves, and appliance panels.",
  },
  {
    text: "Choose 316L stainless steel for wet zones, sink areas, chloride exposure, stronger cleaning chemicals, or premium food-service environments.",
    linkLabel: "316L stainless steel",
    href: "/grades/316l-stainless-steel",
  },
  {
    text: "Choose 430 stainless steel for cost-sensitive decorative appliance panels where corrosion exposure is limited.",
  },
  {
    text: "Choose No.4 or hairline finish for visible kitchen panels that need a clean brushed appearance and practical scratch hiding.",
    linkLabel: "Hairline finish",
    href: "/surfaces/stainless-steel-hairline-finish",
  },
  {
    text: "Choose AFP finish for high-touch panels, appliance skins, cabinet doors, and surfaces where fingerprints are a buyer concern.",
    linkLabel: "AFP finish",
    href: "/surfaces/stainless-steel-afp-finish",
  },
  {
    text: "Choose protective film before cutting, bending, welding, or export packing to reduce surface scratches.",
    linkLabel: "Protective film",
    href: "/solutions/capabilities/protective-film",
  },
] as const;

const KITCHEN_EQUIPMENT_RELATED_LINKS = [
  {
    title: "Stainless Steel Sheet",
    href: "/products/stainless-steel-sheet",
    image: "/images/products/sheet/hero.jpg",
    excerpt:
      "Review stainless steel sheet options for worktops, splashbacks, appliance panels, cabinets, and fabricated kitchen equipment parts.",
  },
  {
    title: "316L Stainless Steel",
    href: "/grades/316l-stainless-steel",
    image: "/images/grades/316l-stainless-steel/hero.jpg",
    excerpt:
      "Use 316L stainless steel when wet zones, chloride exposure, stronger cleaning chemicals, or premium food-service conditions require higher corrosion resistance.",
  },
  {
    title: "AFP Stainless Steel Finish",
    href: "/surfaces/stainless-steel-afp-finish",
    image: "/images/surfaces/afp/hero.jpg",
    excerpt:
      "Explore anti-fingerprint stainless steel finish for high-touch appliance panels, cabinet doors, and visible kitchen equipment skins.",
  },
] as const;

function KitchenEquipmentUseCases() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-5rem)] gap-8 lg:grid-cols-[0.43fr_0.57fr] lg:items-center">
          <div>
            <h2 className="max-w-[9.2em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.55rem]">
              <span className="block">Where Stainless</span>
              <span className="block">Steel Is Used in</span>
              <span className="block whitespace-nowrap">Kitchen Equipment</span>
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820]">
              Kitchen equipment uses stainless steel in both visible and
              functional areas. Wet zones, food-contact surfaces, high-touch
              panels, and fabricated parts all require different material
              decisions.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {KITCHEN_EQUIPMENT_USE_CASES.map((item, index) => (
              <article
                key={item.title}
                className="group relative isolate overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-4 shadow-[0_14px_34px_rgba(13,20,27,0.06)] transition hover:border-[#b8845a] hover:shadow-[0_18px_42px_rgba(13,20,27,0.12)]"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 230px"
                  className="-z-20 object-cover opacity-[0.47] transition duration-500 group-hover:scale-105 group-hover:opacity-[0.57]"
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(13,20,27,0.78)_0%,rgba(13,20,27,0.66)_56%,rgba(13,20,27,0.54)_100%)]" aria-hidden="true" />
                <div>
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/58">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-[1rem] font-semibold leading-6 text-[#f6d044]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function KitchenEquipmentSelectionGuide() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(50vh-5rem)] max-w-5xl gap-7 lg:grid-cols-[0.64fr_0.36fr] lg:items-center">
        <div className="overflow-hidden border border-white/16 bg-[#111111] shadow-[0_18px_48px_rgba(0,0,0,0.24)]">
          <div className="border-b border-[#f6d044]/30 bg-[#0b0b0b] px-4 py-2.5 text-center">
            <div className="flex items-center justify-center gap-3">
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
              <h3 className="text-[0.86rem] font-semibold uppercase leading-none tracking-[0.12em] text-[#f6d044] sm:text-[0.98rem]">
                Application Requirements Matrix
              </h3>
              <span className="h-1 w-10 skew-x-[-28deg] bg-[#f6d044]" aria-hidden="true" />
            </div>
            <p className="mt-1.5 text-[0.68rem] font-medium leading-4 text-white/70">
              Stainless steel route by kitchen equipment area and service condition
            </p>
          </div>
          <table className="w-full table-fixed border-collapse text-left text-[0.68rem] sm:text-[0.76rem]">
            <thead>
              <tr className="bg-[#f6d044] text-[#101820]">
                <th className="w-[23%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.64rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Application Area
                </th>
                <th className="w-[21%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.64rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Decision Link
                </th>
                <th className="w-[25%] border-r border-[#111820]/24 px-2.5 py-2.5 text-center text-[0.64rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Key Requirement
                </th>
                <th className="px-2.5 py-2.5 text-center text-[0.64rem] font-semibold uppercase tracking-[0.08em] sm:px-3">
                  Recommended Route
                </th>
              </tr>
            </thead>
            <tbody>
              {KITCHEN_EQUIPMENT_SELECTION_ROWS.map((row) => (
                <tr key={row.area} className="bg-[#111111] align-middle">
                  <th className="border-r border-t border-white/14 px-2.5 py-2.5 text-left align-middle font-semibold leading-[1.35] text-white sm:px-3">
                    {row.area}
                  </th>
                  <td className="border-r border-t border-white/14 px-2.5 py-2.5 text-center leading-[1.35] sm:px-3">
                    <Link
                      href={row.href}
                      className="inline-block origin-center whitespace-nowrap font-semibold text-[#f6d044] transition duration-200 hover:scale-150 hover:text-white focus-visible:scale-150 focus-visible:text-white"
                    >
                      {row.linkLabel}
                    </Link>
                  </td>
                  <td className="border-r border-t border-white/14 px-2.5 py-2.5 leading-[1.35] text-white/78 sm:px-3">
                    {row.requirement}
                  </td>
                  <td className="border-t border-white/14 px-2.5 py-2.5 leading-[1.35] text-white/78 sm:px-3">
                    {row.route}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-[1.85rem] font-semibold leading-[1.04] text-[#111820] sm:text-[2.45rem]">
            Kitchen Equipment Material Selection Guide
          </h2>
          <p className="mt-4 text-sm leading-6 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:text-[2.7rem] first-letter:font-semibold first-letter:leading-[0.9] first-letter:text-[#111820] first-letter:uppercase sm:text-[0.96rem]">
            For commercial kitchen stainless steel, buyers should not choose
            only by price. The right material depends on food contact, wet
            exposure, cleaning frequency, welding, surface appearance, and
            fabrication process.
          </p>
        </div>
      </div>
    </section>
  );
}

function KitchenEquipmentMaterialLogic() {
  return (
    <section className="bg-[#f5efe3] px-4 py-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
      <div className="mx-auto max-w-5xl">
        <div className="grid min-h-[calc(50vh-5rem)] gap-8 lg:grid-cols-[0.43fr_0.57fr] lg:items-center">
          <div>
            <h2 className="max-w-[9.5em] text-[2rem] font-semibold leading-[1.06] tracking-[-0.01em] text-[#111820] sm:text-[2.55rem]">
              How to Choose Stainless Steel for Kitchen Equipment
            </h2>
            <p className="mt-5 text-[0.98rem] leading-7 text-[#5d554b] first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-[3.15rem] first-letter:font-semibold first-letter:leading-[0.86] first-letter:text-[#111820] first-letter:uppercase">
              Selecting stainless steel for commercial kitchen equipment means
              matching the right grade, surface finish, and protective film to
              hygiene, wet exposure, cleaning chemicals, fabrication, and
              visible panel quality.
            </p>
          </div>
          <ol className="grid gap-3">
            {KITCHEN_EQUIPMENT_MATERIAL_LOGIC.map((item, index) => (
              <li
                key={item.text}
                className="grid grid-cols-[3.25rem_1fr] overflow-hidden border border-[#d8cbb8] bg-white shadow-[0_12px_30px_rgba(17,24,32,0.055)]"
              >
                <div className="flex items-center justify-center border-r border-[#e2d5c3] bg-[#111820] text-[0.72rem] font-semibold tracking-[0.12em] text-[#f6d044]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="px-4 py-3.5">
                  <p className="text-sm leading-6 text-[#4f5864]">
                    {item.text}{" "}
                    {"href" in item ? (
                      <Link
                        href={item.href}
                        className="font-semibold text-[#8a6b32] underline underline-offset-4 transition hover:text-[#111820]"
                      >
                        {item.linkLabel}
                      </Link>
                    ) : null}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function KitchenEquipmentRelatedLinks() {
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
            {KITCHEN_EQUIPMENT_RELATED_LINKS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative flex min-h-72 overflow-hidden border border-[#d8cbb8] bg-[#0d141b] p-5 text-white shadow-[0_18px_42px_rgba(13,20,27,0.08)] transition hover:border-[#b8845a] hover:shadow-[0_22px_54px_rgba(13,20,27,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f6d044]"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} related stainless steel page`}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.2)_0%,rgba(13,20,27,0.78)_54%,rgba(13,20,27,0.95)_100%)]" aria-hidden="true" />
                <div className="relative z-10 grid h-full min-h-60 content-end grid-rows-[auto_minmax(4.75rem,auto)_auto] pb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                    Read next
                  </p>
                  <h3 className="mt-3 text-[1.02rem] font-semibold leading-6 text-white">
                    {item.title}
                  </h3>
                  <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/76">
                    {item.excerpt}
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
