import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AboutCompanyGallery } from "@/components/sections/AboutCompanyGallery";
import { AboutCultureWall } from "@/components/sections/AboutCultureWall";
import { AboutFounderLetter } from "@/components/sections/AboutFounderLetter";

export const metadata: Metadata = {
  title: "About Jinling Metals | Stainless Steel Supplier Since 1997",
  description:
    "Founded in Foshan, China in 1997, Jinling Metals is a stainless steel supplier and processing partner for sheet, coil, tube, surface finishing, and export-ready material solutions.",
  alternates: {
    canonical: "/about",
  },
};

function AboutBreadcrumbBar() {
  return (
    <div className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
        <nav className="flex min-w-0 items-center gap-2 overflow-hidden whitespace-nowrap text-[0.82rem] text-slate-500">
          <Link href="/" className="shrink-0 transition-colors hover:text-text-primary">
            Home
          </Link>
          <span className="flex min-w-0 flex-1 items-center gap-2">
            <span className="shrink-0">/</span>
            <span className="min-w-0 truncate text-text-primary">About</span>
          </span>
        </nav>
      </div>
    </div>
  );
}

const companyOverviewGroups = [
  {
    title: "Company & Communication",
    items: [
      {
        src: "/images/about/company-overview/19-company-reception.jpg",
        alt: "Jinling Metals company reception space in Foshan China",
        label: "Company space",
      },
      {
        src: "/images/about/company-overview/21-material-discussion-notes.jpg",
        alt: "Jinling Metals material discussion and order notes",
        label: "Order discussion",
      },
      {
        src: "/images/about/company-overview/23-laptop-sample-discussion.jpg",
        alt: "Jinling Metals stainless steel samples and laptop communication",
        label: "Sample communication",
      },
      {
        src: "/images/about/company-overview/24-pack-magazine-sample.jpg",
        alt: "Jinling Metals packing material story and embossed stainless steel sample",
        label: "Packing story",
      },
      {
        src: "/images/about/company-overview/25-news-board-planning.jpg",
        alt: "Jinling Metals team planning stainless steel market news content",
        label: "News planning",
      },
      {
        src: "/images/about/company-overview/26-team-meeting.jpg",
        alt: "Jinling Metals team meeting for customer communication and market review",
        label: "Team meeting",
      },
      {
        src: "/images/about/company-overview/27-brand-envelope.jpg",
        alt: "Jinling Metals branded stainless steel document envelope and company materials",
        label: "Brand materials",
      },
      {
        src: "/images/about/company-overview/28-christmas-news-layout.jpg",
        alt: "Jinling Metals newsletter layout for stainless steel market communication",
        label: "Market newsletter",
      },
    ],
  },
  {
    title: "Manufacturing Base",
    items: [
      {
        src: "/images/about/company-overview/01-manufacturing-base.jpg",
        alt: "Jinling Metals stainless steel manufacturing base",
        label: "Processing floor",
      },
      {
        src: "/images/about/company-overview/06-coil-processing-line.jpg",
        alt: "Jinling Metals stainless steel coil processing line",
        label: "Coil processing",
      },
      {
        src: "/images/about/company-overview/22-cold-rolled-coil-processing.jpg",
        alt: "Jinling Metals stainless steel cold rolled coil processing",
        label: "Cold rolled route",
      },
      {
        src: "/images/about/company-overview/20-coil-warehouse.jpg",
        alt: "Jinling Metals stainless steel coil warehouse",
        label: "Coil warehouse",
      },
      {
        src: "/images/about/company-overview/29-coil-packing-workshop.jpg",
        alt: "Jinling Metals stainless steel coil packing workshop",
        label: "Coil packing",
      },
      {
        src: "/images/about/company-overview/30-factory-processing-control.jpg",
        alt: "Jinling Metals factory processing control station",
        label: "Processing control",
      },
      {
        src: "/images/about/company-overview/31-tube-factory-line.jpg",
        alt: "Jinling Metals stainless steel tube factory production line",
        label: "Tube line",
      },
      {
        src: "/images/about/company-overview/32-tube-factory-packing.jpg",
        alt: "Jinling Metals stainless steel tube packing and handling",
        label: "Tube packing",
      },
    ],
  },
  {
    title: "Surface Innovation",
    items: [
      {
        src: "/images/about/company-overview/02-brushed-surface-sample.jpg",
        alt: "Jinling Metals brushed stainless steel surface sample",
        label: "Brushed surface",
      },
      {
        src: "/images/about/company-overview/10-brushed-color-finish-comparison.jpg",
        alt: "Jinling Metals brushed and colored stainless steel finish comparison",
        label: "Color finish",
      },
      {
        src: "/images/about/company-overview/11-brushed-sheet-comparison.jpg",
        alt: "Jinling Metals brushed stainless steel sheet comparison",
        label: "Grain comparison",
      },
      {
        src: "/images/about/company-overview/14-material-sample-closeup.jpg",
        alt: "Jinling Metals stainless steel material sample closeup",
        label: "Material sample",
      },
      {
        src: "/images/about/company-overview/15-mirror-finish-comparison.jpg",
        alt: "Jinling Metals stainless steel mirror finish comparison",
        label: "Mirror finish",
      },
      {
        src: "/images/about/company-overview/18-colored-stainless-samples.jpg",
        alt: "Jinling Metals colored stainless steel samples",
        label: "Colored samples",
      },
      {
        src: "/images/about/company-overview/33-afp-blue-structure.jpg",
        alt: "Jinling Metals blue anti-fingerprint stainless steel structure diagram",
        label: "AFP blue structure",
      },
      {
        src: "/images/about/company-overview/34-afp-gold-structure.jpg",
        alt: "Jinling Metals gold anti-fingerprint stainless steel processing structure",
        label: "AFP gold structure",
      },
    ],
  },
  {
    title: "Inspection & Proof",
    items: [
      {
        src: "/images/about/company-overview/03-surface-measurement.jpg",
        alt: "Jinling Metals stainless steel surface measurement",
        label: "Measurement",
      },
      {
        src: "/images/about/company-overview/07-surface-sample-check.jpg",
        alt: "Jinling Metals stainless steel surface sample check",
        label: "Sample check",
      },
      {
        src: "/images/about/company-overview/08-mirror-reflection-check.jpg",
        alt: "Jinling Metals mirror stainless steel reflection check",
        label: "Reflection check",
      },
      {
        src: "/images/about/company-overview/12-surface-check-gauge.jpg",
        alt: "Jinling Metals surface check with gauge",
        label: "Surface gauge",
      },
      {
        src: "/images/about/company-overview/16-light-inspection.jpg",
        alt: "Jinling Metals stainless steel light inspection",
        label: "Light inspection",
      },
      {
        src: "/images/about/company-overview/17-worker-inspection.jpg",
        alt: "Jinling Metals worker inspecting stainless steel surface",
        label: "Worker inspection",
      },
      {
        src: "/images/about/company-overview/35-thickness-measurement.jpg",
        alt: "Jinling Metals stainless steel thickness measurement with micrometer",
        label: "Thickness check",
      },
      {
        src: "/images/about/company-overview/36-mirror-sheet-inspection.jpg",
        alt: "Jinling Metals worker inspecting mirror stainless steel sheet",
        label: "Mirror inspection",
      },
    ],
  },
  {
    title: "Packing & Application Support",
    items: [
      {
        src: "/images/about/company-overview/37-finished-coil-package.jpg",
        alt: "Jinling Metals finished stainless steel coil package design",
        label: "Finished coil pack",
      },
      {
        src: "/images/about/company-overview/38-coil-fixture-structure.jpg",
        alt: "Jinling Metals stainless steel coil fixture structure for export packing",
        label: "Coil fixture",
      },
      {
        src: "/images/about/company-overview/09-coil-package-composition.jpg",
        alt: "Jinling Metals stainless steel coil package composition",
        label: "Coil packing",
      },
      {
        src: "/images/about/company-overview/40-tube-wrapping-line.jpg",
        alt: "Jinling Metals stainless steel tube wrapping and packing line",
        label: "Tube wrapping",
      },
      {
        src: "/images/about/company-overview/41-pallet-lifting-support.jpg",
        alt: "Jinling Metals packed stainless steel sheets lifted with pallet support",
        label: "Pallet support",
      },
      {
        src: "/images/about/company-overview/42-tube-stock-warehouse.jpg",
        alt: "Jinling Metals stainless steel tube stock with protective packing",
        label: "Tube stock",
      },
      {
        src: "/images/about/company-overview/43-container-coil-securing.jpg",
        alt: "Jinling Metals stainless steel coil secured inside export container",
        label: "Coil securing",
      },
      {
        src: "/images/about/company-overview/39-container-wooden-packing.jpg",
        alt: "Jinling Metals stainless steel coils secured with wooden packing inside container",
        label: "Container packing",
      },
    ],
  },
] as const;

const coreValues = [
  {
    title: "People First",
    text: "We value the people behind every project: customers, team members, factory partners, and long-term collaborators. Clear communication, mutual respect, and responsible follow-up shape how we work every day.",
    image: "/images/about/company-overview/26-team-meeting.jpg",
    imageAlt: "Jinling Metals team meeting and people-first communication",
  },
  {
    title: "Just-Right Material",
    text: "We believe the best stainless steel is the material that fits the real application. Instead of pushing one standard answer, we help buyers choose the right grade, finish, size, processing route, and packing method for their actual use.",
    image: "/images/about/company-overview/23-laptop-sample-discussion.jpg",
    imageAlt: "Jinling Metals material discussion with stainless steel samples",
  },
  {
    title: "Consistent Market Insight",
    text: "For more than 8 years, we have shared weekly stainless steel market reports with our customers, regardless of market ups and downs. These updates help buyers understand price movement, supply changes, production trends, and China stainless steel market conditions before making sourcing decisions.",
    image: "/images/about/company-overview/28-christmas-news-layout.jpg",
    imageAlt: "Jinling Metals weekly stainless steel market report and newsletter",
  },
  {
    title: "Surface-Driven Expertise",
    text: "We see stainless steel as more than a commodity. From 8K mirror and hairline to embossed, colored, and anti-fingerprint finishes, we help customers turn stainless steel into a functional and design-ready material.",
    image: "/images/about/company-overview/18-colored-stainless-samples.jpg",
    imageAlt: "Jinling Metals colored stainless steel and surface finish samples",
  },
  {
    title: "Responsible Long-Term Growth",
    text: "We support sustainable material choices, reliable quality control, and long-term cooperation. Stainless steel is durable and recyclable, and we aim to reduce waste, avoid wrong material decisions, and build trust through steady execution.",
    image: "/images/about/company-overview/41-pallet-lifting-support.jpg",
    imageAlt: "Jinling Metals packed stainless steel sheets with pallet support for responsible delivery",
  },
] as const;

const teamMembers = [
  {
    name: "Kary Guo",
    role: "CMO",
    type: "lead",
    src: "/images/about/team/01-kary-gou-cmo.jpg",
    alt: "Kary Guo CMO of Jinling Metals stainless steel supplier team",
    focus: "Market insight, brand direction, and customer communication strategy.",
  },
  {
    name: "Kim Zhao",
    role: "Production Manager",
    type: "lead",
    src: "/images/about/team/02-kim-zhao-production-manager.jpg",
    alt: "Kim Zhao production manager of Jinling Metals stainless steel processing team",
    focus: "Production coordination, processing route control, and factory delivery follow-up.",
  },
  {
    name: "Ellin Chan",
    role: "Senior Account Executive",
    type: "member",
    src: "/images/about/team/03-ellin-chan-senior-account-executive.jpg",
    alt: "Ellin Chan senior account executive at Jinling Metals",
    focus: "Customer orders, stainless steel sourcing details, and export communication.",
  },
  {
    name: "Miki Lin",
    role: "Business Development Manager",
    type: "member",
    src: "/images/about/team/04-miki-heic-engineering-representative.jpg",
    alt: "Miki Lin business development manager at Jinling Metals",
    focus: "Business development, stainless steel sourcing communication, and customer project follow-up.",
  },
  {
    name: "Amy Zhang",
    role: "Representative & Host",
    type: "member",
    src: "/images/about/team/05-amy-zhang-representative-host.jpg",
    alt: "Amy Zhang representative and host at Jinling Metals",
    focus: "Customer reception, product communication, and project presentation.",
  },
  {
    name: "Mercia Lyu",
    role: "Branding & Marketing",
    type: "member",
    src: "/images/about/team/06-mercia-lyu-branding-marketing.jpg",
    alt: "Mercia Lyu branding and marketing team member at Jinling Metals",
    focus: "Brand content, stainless steel market updates, and digital communication.",
  },
  {
    name: "Felins Guo",
    role: "Quality Manager",
    type: "member",
    src: "/images/about/team/07-felins-guo-quality-manager.jpg",
    alt: "Felins Guo quality manager at Jinling Metals stainless steel inspection team",
    focus: "Quality inspection, material proof, and production detail checking.",
  },
] as const;

const cultureGroups = [
  {
    title: "Meetings",
    eyebrow: "Communication",
    description:
      "Internal reviews, market sharing, planning sessions, and customer follow-up discussions.",
    items: [
      {
        src: "/images/about/culture/meeting-01-office-presentation.jpg",
        alt: "Jinling Metals team presentation for stainless steel market communication and company culture",
        label: "Office presentation",
      },
      {
        src: "/images/about/company-overview/27-brand-envelope.jpg",
        alt: "Jinling Metals branded envelope and stainless steel company communication materials",
        label: "Brand materials",
      },
      {
        src: "/images/about/culture/meeting-03-quarterly-review.jpg",
        alt: "Jinling Metals quarterly review meeting for stainless steel market and customer service",
        label: "Quarterly review",
      },
      {
        src: "/images/about/culture/meeting-04-annual-review.jpg",
        alt: "Jinling Metals annual review meeting for company planning and stainless steel service",
        label: "Annual review",
      },
      {
        src: "/images/about/culture/meeting-05-team-planning.jpg",
        alt: "Jinling Metals team planning meeting for stainless steel order follow-up",
        label: "Team planning",
      },
      {
        src: "/images/about/culture/meeting-06-team-discussion.jpg",
        alt: "Jinling Metals team discussion for customer communication and stainless steel sourcing",
        label: "Team discussion",
      },
      {
        src: "/images/about/culture/meeting-07-presentation-session.jpg",
        alt: "Jinling Metals presentation session for team communication and company culture",
        label: "Presentation session",
      },
      {
        src: "/images/about/culture/meeting-08-market-review.jpg",
        alt: "Jinling Metals team meeting for stainless steel market sharing and customer communication",
        label: "Market review",
      },
      {
        src: "/images/about/culture/meeting-09-news-planning-board.jpg",
        alt: "Jinling Metals team planning stainless steel market news and customer updates",
        label: "News planning",
      },
    ],
  },
  {
    title: "Activities",
    eyebrow: "Culture",
    description:
      "Festival moments, team games, gift exchanges, and shared activities that keep the team connected.",
    items: [
      {
        src: "/images/about/culture/activity-01-holiday-culture.jpg",
        alt: "Jinling Metals holiday activity for team culture and employee engagement",
        label: "Holiday culture",
      },
      {
        src: "/images/about/culture/activity-02-holiday-game.jpg",
        alt: "Jinling Metals holiday team game for company culture",
        label: "Holiday game",
      },
      {
        src: "/images/about/culture/activity-03-holiday-celebration.jpg",
        alt: "Jinling Metals holiday celebration and employee activity",
        label: "Holiday celebration",
      },
      {
        src: "/images/about/culture/activity-04-festival-team-moment.jpg",
        alt: "Jinling Metals festival team moment and company culture",
        label: "Festival moment",
      },
      {
        src: "/images/about/culture/activity-05-office-activity.jpg",
        alt: "Jinling Metals office activity for team connection",
        label: "Office activity",
      },
      {
        src: "/images/about/culture/activity-06-holiday-gathering.jpg",
        alt: "Jinling Metals holiday gathering for employee culture",
        label: "Holiday gathering",
      },
      {
        src: "/images/about/culture/activity-07-holiday-gathering-alt.jpg",
        alt: "Jinling Metals team holiday gathering and activity",
        label: "Team gathering",
      },
      {
        src: "/images/about/culture/activity-08-team-celebration-cover.jpg",
        alt: "Jinling Metals team celebration cover for company activity",
        label: "Celebration cover",
      },
      {
        src: "/images/about/culture/activity-09-festival-gift-bags.jpg",
        alt: "Jinling Metals festival gift preparation for employee activity",
        label: "Festival gifts",
      },
      {
        src: "/images/about/culture/activity-10-festival-gifts.jpg",
        alt: "Jinling Metals holiday gifts for company culture activity",
        label: "Holiday gifts",
      },
      {
        src: "/images/about/culture/activity-11-party-setup.jpg",
        alt: "Jinling Metals party setup for employee culture activity",
        label: "Party setup",
      },
      {
        src: "/images/about/culture/activity-12-team-snack-moment.jpg",
        alt: "Jinling Metals team sharing moment during office activity",
        label: "Sharing moment",
      },
      {
        src: "/images/about/culture/activity-13-team-snack-share.jpg",
        alt: "Jinling Metals employee sharing activity and team culture",
        label: "Team sharing",
      },
      {
        src: "/images/about/culture/activity-14-team-activity-hands.jpg",
        alt: "Jinling Metals team activity showing employee teamwork",
        label: "Team activity",
      },
      {
        src: "/images/about/culture/activity-15-office-festival.jpg",
        alt: "Jinling Metals office festival activity and employee culture",
        label: "Office festival",
      },
      {
        src: "/images/about/culture/activity-16-office-festival-alt.jpg",
        alt: "Jinling Metals festival office activity and company culture",
        label: "Festival activity",
      },
      {
        src: "/images/about/culture/activity-17-office-decoration.jpg",
        alt: "Jinling Metals office decoration for team activity",
        label: "Office decoration",
      },
      {
        src: "/images/about/culture/activity-18-new-year-celebration.jpg",
        alt: "Jinling Metals New Year celebration and team activity",
        label: "New Year celebration",
      },
      {
        src: "/images/about/culture/activity-19-workshop-activity.jpg",
        alt: "Jinling Metals workshop activity and employee culture",
        label: "Workshop activity",
      },
      {
        src: "/images/about/culture/activity-20-gift-exchange-collage.jpg",
        alt: "Jinling Metals gift exchange collage for team culture",
        label: "Gift exchange",
      },
      {
        src: "/images/about/culture/activity-21-team-building-collage.jpg",
        alt: "Jinling Metals team building activity collage",
        label: "Team building",
      },
    ],
  },
  {
    title: "Group Photos",
    eyebrow: "People",
    description:
      "Team photos from office moments, customer visits, factory days, and outdoor activities.",
    items: [
      {
        src: "/images/about/culture/group-01-team-outing.jpg",
        alt: "Jinling Metals team outing group photo",
        label: "Team outing",
      },
      {
        src: "/images/about/culture/group-02-office-group.jpg",
        alt: "Jinling Metals office team group photo",
        label: "Office group",
      },
      {
        src: "/images/about/culture/group-03-office-group-wall.jpg",
        alt: "Jinling Metals team group photo at office wall",
        label: "Office wall",
      },
      {
        src: "/images/about/culture/group-04-outdoor-group-selfie.jpg",
        alt: "Jinling Metals outdoor group photo during team building",
        label: "Outdoor group",
      },
      {
        src: "/images/about/culture/group-05-team-dinner.jpg",
        alt: "Jinling Metals team dinner group photo",
        label: "Team dinner",
      },
      {
        src: "/images/about/culture/group-06-outdoor-team-photo.jpg",
        alt: "Jinling Metals outdoor team photo",
        label: "Outdoor team",
      },
      {
        src: "/images/about/culture/group-07-travel-team-photo.jpg",
        alt: "Jinling Metals travel team group photo",
        label: "Travel team",
      },
      {
        src: "/images/about/culture/group-08-scenic-team-photo.jpg",
        alt: "Jinling Metals scenic team photo",
        label: "Scenic team",
      },
      {
        src: "/images/about/culture/group-09-sunset-team-photo.jpg",
        alt: "Jinling Metals sunset team group photo",
        label: "Sunset group",
      },
      {
        src: "/images/about/culture/group-11-office-team-photo.jpg",
        alt: "Jinling Metals office team photo for company culture",
        label: "Office team",
      },
      {
        src: "/images/about/culture/group-12-visitor-team-photo.jpg",
        alt: "Jinling Metals visitor team photo at company reception",
        label: "Visitor moment",
      },
      {
        src: "/images/about/culture/group-13-team-anniversary-photo.jpg",
        alt: "Jinling Metals team anniversary group photo",
        label: "Anniversary",
      },
      {
        src: "/images/about/culture/group-14-sunset-group-photo.jpg",
        alt: "Jinling Metals sunset group photo during team activity",
        label: "Sunset activity",
      },
      {
        src: "/images/about/culture/group-15-seaside-group-photo.jpg",
        alt: "Jinling Metals team group photo during outdoor activity",
        label: "Outdoor activity",
      },
      {
        src: "/images/about/culture/group-16-port-group-photo.jpg",
        alt: "Jinling Metals group photo during company trip",
        label: "Company trip",
      },
      {
        src: "/images/about/culture/group-17-train-team-photo.jpg",
        alt: "Jinling Metals team travel group photo",
        label: "Team travel",
      },
    ],
  },
  {
    title: "Daily Moments",
    eyebrow: "Daily Work",
    description:
      "Newsletter work, brand details, office preparation, and everyday communication inside the team.",
    items: [
      {
        src: "/images/about/culture/daily-01-culture-newsletter.jpg",
        alt: "Jinling Metals company culture newsletter for stainless steel market communication",
        label: "Culture newsletter",
      },
      {
        src: "/images/about/culture/daily-02-weekly-market-report.jpg",
        alt: "Jinling Metals weekly stainless steel market report prepared by the team",
        label: "Market report",
      },
      {
        src: "/images/about/culture/daily-03-newsletter-layout.jpg",
        alt: "Jinling Metals newsletter layout for stainless steel industry updates",
        label: "Newsletter layout",
      },
      {
        src: "/images/about/culture/daily-04-gift-preparation.jpg",
        alt: "Jinling Metals office preparation and team communication detail",
        label: "Preparation",
      },
      {
        src: "/images/about/culture/daily-05-product-culture-detail.jpg",
        alt: "Jinling Metals stainless steel brand detail and company culture",
        label: "Brand detail",
      },
      {
        src: "/images/about/culture/daily-06-team-photo-booth.jpg",
        alt: "Jinling Metals team photo booth and daily office culture",
        label: "Team booth",
      },
    ],
  },
] as const;

function CompanyOverviewSection() {
  return (
    <section className="bg-[#f5efe3] px-4 pb-10 sm:px-6 lg:min-h-[50vh] lg:px-8 lg:pb-12">
      <div
        className="mx-auto flex min-h-14 w-full max-w-[42rem] items-center justify-center bg-[#f6d044] px-6 py-3.5 text-center text-[1.4rem] font-extrabold uppercase tracking-[0.08em] text-[#111820] shadow-[0_14px_30px_rgba(13,20,27,0.11)] sm:min-h-16 sm:px-8 sm:py-4 sm:text-[1.75rem] lg:w-1/2 lg:text-[2rem]"
        style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 8% 100%)" }}
      >
        Company Overview
      </div>

      <div className="mx-auto max-w-5xl pt-8">
        <div className="mx-auto max-w-4xl space-y-4 text-left text-[0.95rem] leading-7 text-[#4f5863]">
          <p className="first-letter:float-left first-letter:mr-3 first-letter:text-[3.35rem] first-letter:font-extrabold first-letter:leading-[0.88] first-letter:text-[#111820]">
              Founded in Foshan, China in 1997, Jinling Metals has grown with
              the stainless steel industry for more than two decades. We supply
              and process{" "}
              <Link href="/products/stainless-steel-sheet" className="font-semibold text-[#111820] underline decoration-[#d8b43d] underline-offset-4 transition hover:text-[#9a6b00]">
                stainless steel sheet
              </Link>
              ,{" "}
              <Link href="/products/stainless-steel-coil" className="font-semibold text-[#111820] underline decoration-[#d8b43d] underline-offset-4 transition hover:text-[#9a6b00]">
                coil
              </Link>
              ,{" "}
              <Link href="/products/stainless-steel-tube-pipe" className="font-semibold text-[#111820] underline decoration-[#d8b43d] underline-offset-4 transition hover:text-[#9a6b00]">
                tube, and pipe
              </Link>{" "}
              for buyers in home appliances, kitchenware, architecture,
              interior decoration, machinery, distribution, and industrial
              applications.
            </p>
            <p>
              Our work is guided by a simple philosophy: the just-right material
              is the best material for the customer. Instead of recommending
              stainless steel only by price or standard grade, we look at each
              project&apos;s application, surface expectation, fabrication route,
              packing requirement, and delivery schedule before suggesting a
              suitable stainless steel grade, finish, and{" "}
              <Link href="/solutions/capabilities/cut-to-length" className="font-semibold text-[#111820] underline decoration-[#d8b43d] underline-offset-4 transition hover:text-[#9a6b00]">
                processing solution
              </Link>
              .
            </p>
            <p>
              From 200 series, 300 series, and 400 series stainless steel to{" "}
              <Link href="/surfaces/stainless-steel-8k-mirror-finish" className="font-semibold text-[#111820] underline decoration-[#d8b43d] underline-offset-4 transition hover:text-[#9a6b00]">
                No.8 mirror
              </Link>
              ,{" "}
              <Link href="/surfaces/stainless-steel-hairline-finish" className="font-semibold text-[#111820] underline decoration-[#d8b43d] underline-offset-4 transition hover:text-[#9a6b00]">
                hairline
              </Link>
              , colored, and{" "}
              <Link href="/surfaces/stainless-steel-afp-finish" className="font-semibold text-[#111820] underline decoration-[#d8b43d] underline-offset-4 transition hover:text-[#9a6b00]">
                anti-fingerprint finishes
              </Link>
              , Jinling Metals helps global buyers turn stainless steel from a
              commodity into a material that fits real product, design, and
              project needs.
            </p>
        </div>

        <AboutCompanyGallery groups={companyOverviewGroups} />
      </div>
    </section>
  );
}

function CoreValuesSection() {
  return (
    <section className="bg-white px-4 pb-8 sm:px-6 lg:px-8 lg:pb-10">
      <div
        className="mx-auto flex min-h-14 w-full max-w-[42rem] items-center justify-center bg-[#f6d044] px-6 py-3.5 text-center text-[1.4rem] font-extrabold uppercase tracking-[0.08em] text-[#111820] shadow-[0_14px_30px_rgba(13,20,27,0.11)] sm:min-h-16 sm:px-8 sm:py-4 sm:text-[1.75rem] lg:w-1/2 lg:text-[2rem]"
        style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 8% 100%)" }}
      >
        Core Values
      </div>

      <div className="mx-auto max-w-6xl pt-6 lg:pt-7">
        <div className="mx-auto max-w-4xl text-left">
          <p className="text-[0.95rem] leading-7 text-[#4f5863] first-letter:float-left first-letter:mr-3 first-letter:text-[3.35rem] first-letter:font-extrabold first-letter:leading-[0.88] first-letter:text-[#111820]">
            Our values are simple and practical: respect the people behind every
            order, recommend stainless steel by real application needs, share
            market information consistently, keep improving surface solutions,
            and build trust through responsible execution.
          </p>
        </div>

        <div className="relative mx-auto mt-6 max-w-5xl overflow-hidden py-2 lg:py-4">
          <div className="pointer-events-none absolute inset-x-8 top-1/2 hidden h-px bg-[linear-gradient(90deg,rgba(246,208,68,0),rgba(246,208,68,0.68),rgba(17,24,32,0.2),rgba(246,208,68,0))] lg:block" />
          <div className="grid gap-3 lg:grid-cols-5 lg:gap-0">
            {coreValues.map((value, index) => {
              const isYellow = index % 2 === 1;
              const colorClass = isYellow
                ? "bg-[#f6d044] text-[#111820] hover:bg-[#111820] hover:text-white focus:bg-[#111820] focus:text-white"
                : "bg-[#111820] text-white hover:bg-[#f6d044] hover:text-[#111820] focus:bg-[#f6d044] focus:text-[#111820]";
              const numberClass = isYellow
                ? "bg-[#111820] text-[#f6d044] group-hover:bg-[#f6d044] group-hover:text-[#111820] group-focus:bg-[#f6d044] group-focus:text-[#111820]"
                : "bg-[#f6d044] text-[#111820] group-hover:bg-[#111820] group-hover:text-[#f6d044] group-focus:bg-[#111820] group-focus:text-[#f6d044]";
              const stackClass =
                index % 2 === 0
                  ? "lg:rotate-[-1.2deg] lg:hover:rotate-0 lg:focus:rotate-0"
                  : "lg:rotate-[1.2deg] lg:hover:rotate-0 lg:focus:rotate-0";

              return (
                <article
                  key={value.title}
                  tabIndex={0}
                  className={[
                    "group relative mx-auto min-h-[4.5rem] w-full max-w-3xl overflow-hidden px-5 py-4 shadow-[0_16px_38px_rgba(13,20,27,0.12)] outline-none transition duration-300 hover:z-20 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_24px_58px_rgba(13,20,27,0.2)] focus:z-20 focus:-translate-y-2 focus:scale-[1.03] focus:shadow-[0_24px_58px_rgba(13,20,27,0.2)] focus-visible:ring-2 focus-visible:ring-[#111820] lg:min-h-[11.5rem] lg:w-[calc(100%+1.35rem)] lg:max-w-none lg:px-4 lg:py-4",
                    colorClass,
                    stackClass,
                  ].join(" ")}
                >
                  <span className="pointer-events-none absolute inset-1 border border-white/16" aria-hidden="true" />
                  <Image
                    src={value.image}
                    alt=""
                    fill
                    className="object-cover opacity-[0.58] brightness-[0.74] saturate-[0.82] contrast-[1.08] transition duration-500 group-hover:scale-110 group-hover:opacity-[0.7] group-hover:brightness-[0.82] group-hover:saturate-[0.96] group-focus:scale-110 group-focus:opacity-[0.7] group-focus:brightness-[0.82] group-focus:saturate-[0.96]"
                    sizes="(min-width: 1024px) 240px, 100vw"
                    aria-hidden="true"
                  />
                  <span
                    className={[
                      "pointer-events-none absolute inset-0 transition",
                      isYellow
                        ? "bg-[#f6d044]/58 group-hover:bg-[#111820]/68 group-focus:bg-[#111820]/68"
                        : "bg-[#111820]/62 group-hover:bg-[#f6d044]/58 group-focus:bg-[#f6d044]/58",
                    ].join(" ")}
                    aria-hidden="true"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.12)_0%,rgba(13,20,27,0.34)_100%)]" aria-hidden="true" />
                  <span className="pointer-events-none absolute -left-4 bottom-3 h-12 w-24 bg-white/10 blur-2xl" aria-hidden="true" />
                  <span
                    className={[
                      "absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center text-[0.72rem] font-extrabold tracking-[0.1em] shadow-[0_8px_18px_rgba(13,20,27,0.16)] transition",
                      numberClass,
                    ].join(" ")}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative z-10 flex min-h-[4.2rem] items-center justify-center px-4 text-center lg:min-h-[6.25rem]">
                    <h3 className="max-w-[13rem] text-[1.05rem] font-extrabold uppercase leading-tight tracking-[0.08em] sm:text-[1.16rem] lg:text-[1rem]">
                      {value.title}
                    </h3>
                  </div>
                  <p className="relative z-10 max-h-0 overflow-hidden text-[0.84rem] leading-6 opacity-0 transition-all duration-300 group-hover:mt-3 group-hover:max-h-44 group-hover:opacity-82 group-focus:mt-3 group-focus:max-h-44 group-focus:opacity-82 lg:text-[0.78rem] lg:leading-6">
                    {value.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamImageFrame({
  member,
  priority = false,
  variant = "side",
}: {
  member: (typeof teamMembers)[number];
  priority?: boolean;
  variant?: "lead" | "side";
}) {
  const isLead = variant === "lead";

  return (
    <div
      className={[
        "relative overflow-hidden bg-[#101820] shadow-[0_18px_42px_rgba(13,20,27,0.16)]",
        isLead ? "aspect-[16/6.7]" : "aspect-[16/10]",
      ].join(" ")}
    >
      <Image
        src={member.src}
        alt=""
        fill
        className="scale-110 object-cover opacity-35 blur-md saturate-[0.85]"
        sizes={isLead ? "(min-width: 1024px) 360px, 100vw" : "(min-width: 1024px) 260px, 100vw"}
        aria-hidden="true"
      />
      <Image
        src={member.src}
        alt={member.alt}
        fill
        priority={priority}
        className="object-contain p-2"
        sizes={isLead ? "(min-width: 1024px) 360px, 100vw" : "(min-width: 1024px) 260px, 100vw"}
      />
    </div>
  );
}

function TeamCard({
  member,
  priority = false,
  variant = "side",
  tone = "dark",
}: {
  member: (typeof teamMembers)[number];
  priority?: boolean;
  variant?: "lead" | "side";
  tone?: "dark" | "yellow";
}) {
  const isLead = variant === "lead";
  const isYellow = tone === "yellow";

  return (
    <article
      tabIndex={0}
      className={[
        "group relative bg-white p-2 shadow-[0_14px_34px_rgba(13,20,27,0.11)] outline-none transition duration-300 hover:z-20 hover:-translate-y-1 hover:scale-[1.035] hover:shadow-[0_24px_58px_rgba(13,20,27,0.2)] focus:z-20 focus:-translate-y-1 focus:scale-[1.035] focus:shadow-[0_24px_58px_rgba(13,20,27,0.2)] focus-visible:ring-2 focus-visible:ring-[#111820]",
        isLead ? "lg:hover:scale-[1.055] lg:focus:scale-[1.055]" : "",
      ].join(" ")}
    >
      <TeamImageFrame member={member} priority={priority} variant={variant} />
      <div
        className={[
          "relative overflow-hidden px-3 py-3",
          isLead ? "min-h-[7.15rem]" : "min-h-[6.6rem]",
          isYellow ? "bg-[#f6d044] text-[#111820]" : "bg-[#111820] text-white",
        ].join(" ")}
      >
        <p
          className={[
            "text-[0.62rem] font-extrabold uppercase leading-4 tracking-[0.15em]",
            isYellow ? "text-[#5d4700]" : "text-[#f6d044]",
          ].join(" ")}
        >
          {member.role}
        </p>
        <h3
          className={[
            "mt-1 font-extrabold uppercase leading-tight tracking-[0.04em]",
            isLead ? "text-[1.02rem] sm:text-[1.08rem]" : "text-[0.92rem]",
          ].join(" ")}
        >
          {member.name}
        </h3>
        <p className="mt-2 max-h-0 overflow-hidden text-[0.76rem] leading-5 opacity-0 transition-all duration-300 group-hover:max-h-28 group-hover:opacity-85 group-focus:max-h-28 group-focus:opacity-85">
          {member.focus}
        </p>
      </div>
    </article>
  );
}

function TeamSection() {
  const leadMembers = teamMembers.filter((member) => member.type === "lead");
  const supportMembers = teamMembers.filter((member) => member.type === "member");

  return (
    <section className="bg-[#f5efe3] px-4 pb-9 sm:px-6 lg:px-8 lg:pb-11">
      <div
        className="mx-auto flex min-h-14 w-full max-w-[42rem] items-center justify-center bg-[#f6d044] px-6 py-3.5 text-center text-[1.4rem] font-extrabold uppercase tracking-[0.08em] text-[#111820] shadow-[0_14px_30px_rgba(13,20,27,0.11)] sm:min-h-16 sm:px-8 sm:py-4 sm:text-[1.75rem] lg:w-1/2 lg:text-[2rem]"
        style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 8% 100%)" }}
      >
        Meet Us
      </div>

      <div className="mx-auto max-w-6xl pt-7 lg:pt-8">
        <div className="mx-auto max-w-4xl text-left">
          <p className="text-[0.95rem] leading-7 text-[#4f5863] first-letter:float-left first-letter:mr-3 first-letter:text-[3.35rem] first-letter:font-extrabold first-letter:leading-[0.88] first-letter:text-[#111820]">
            Behind Jinling Metals is a stainless steel team built around clear
            communication, production follow-up, quality inspection, market
            insight, and export support. Our people connect global buyers with
            China&apos;s stainless steel supply chain, helping customers review
            stainless steel sheet, coil, tube, surface finish, processing
            route, packing, and delivery details before each order moves
            forward.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {leadMembers.map((member, index) => {
            const isYellow = index === 0;

            return (
              <article
                key={member.name}
                tabIndex={0}
                className="group bg-white p-2 shadow-[0_18px_44px_rgba(13,20,27,0.12)] outline-none transition duration-300 hover:-translate-y-1 hover:scale-[1.015] hover:shadow-[0_24px_58px_rgba(13,20,27,0.18)] focus:-translate-y-1 focus:scale-[1.015] focus:shadow-[0_24px_58px_rgba(13,20,27,0.18)] focus-visible:ring-2 focus-visible:ring-[#111820]"
              >
                <TeamImageFrame member={member} priority={index === 0} variant="lead" />
                <div
                  className={[
                    "grid gap-3 px-4 py-3 sm:grid-cols-[0.82fr_1.18fr] sm:items-center",
                    isYellow ? "bg-[#f6d044] text-[#111820]" : "bg-[#111820] text-white",
                  ].join(" ")}
                >
                  <div>
                    <p
                      className={[
                        "text-[0.68rem] font-extrabold uppercase tracking-[0.18em]",
                        isYellow ? "text-[#5d4700]" : "text-[#f6d044]",
                      ].join(" ")}
                    >
                      {member.role}
                    </p>
                    <h3 className="mt-1 text-[1.08rem] font-extrabold uppercase tracking-[0.04em]">
                      {member.name}
                    </h3>
                  </div>
                  <p className="text-[0.8rem] leading-5 opacity-85">{member.focus}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {supportMembers.map((member, index) => (
            <TeamCard
              key={member.name}
              member={member}
              tone={index % 2 === 0 ? "dark" : "yellow"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LifeAtJinlingSection() {
  return (
    <section className="bg-white px-4 pb-10 sm:px-6 lg:px-8 lg:pb-12">
      <div
        className="mx-auto flex min-h-14 w-full max-w-[42rem] items-center justify-center bg-[#f6d044] px-6 py-3.5 text-center text-[1.4rem] font-extrabold uppercase tracking-[0.08em] text-[#111820] shadow-[0_14px_30px_rgba(13,20,27,0.11)] sm:min-h-16 sm:px-8 sm:py-4 sm:text-[1.75rem] lg:w-1/2 lg:text-[2rem]"
        style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 8% 100%)" }}
      >
        Life at Jinling
      </div>

      <div className="mx-auto max-w-6xl pt-7 lg:pt-8">
        <div className="mx-auto max-w-4xl text-left">
          <p className="text-[0.95rem] leading-7 text-[#4f5863] first-letter:float-left first-letter:mr-3 first-letter:text-[3.35rem] first-letter:font-extrabold first-letter:leading-[0.88] first-letter:text-[#111820]">
            Behind every stainless steel order is a team that learns,
            communicates, celebrates, and grows together. At Jinling Metals,
            our company culture is built through daily teamwork, stainless
            steel market sharing, customer discussions, production follow-up,
            quality awareness, and employee activities. These moments help us
            stay responsive, collaborative, and reliable as a stainless steel
            supplier serving global buyers from Foshan, China.
          </p>
        </div>

        <AboutCultureWall groups={cultureGroups} />
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <>
      <AboutBreadcrumbBar />
      <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
        <Image
          src="/images/about/hero-jinling-hairline-sample.jpg"
          alt="Jinling Metals hairline stainless steel sample with protective film"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.74] brightness-[0.8] saturate-[0.9] contrast-[1.08]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.96)_0%,rgba(13,20,27,0.84)_46%,rgba(13,20,27,0.56)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-7xl flex-col justify-center">
          <div className="mx-auto w-full max-w-4xl text-left">
            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
              About Jinling Metals
              <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
            </p>
            <h1 className="mt-6 max-w-[66rem] text-[2.4rem] font-semibold leading-[1.04] text-white sm:text-[3.3rem] lg:text-[4.26rem]">
              About Jinling Metals: Stainless Steel Supplier Since 1997
            </h1>
            <p className="mt-6 max-w-[54rem] text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem]">
              Founded in Foshan, China in 1997, Jinling Metals supplies stainless
              steel sheet, coil, tube, surface finishes, and export-ready
              processing support for global buyers. We help match stainless
              steel grades, finishes, specifications, packing, and shipment
              routes to real project needs.
            </p>
          </div>
        </div>
      </section>
      <CompanyOverviewSection />
      <CoreValuesSection />
      <TeamSection />
      <LifeAtJinlingSection />
      <AboutFounderLetter />
    </>
  );
}
