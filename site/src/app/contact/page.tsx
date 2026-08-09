import Image from "next/image";
import type { Metadata } from "next";
import { CopyEmailButton } from "./CopyEmailButton";

const EMAIL = "info@jinlingsteel.com";
const PHONE_DISPLAY = "+86-757-81637153";
const PHONE_HREF = "tel:+8675781637153";
const ADDRESS =
  "Rooms 301-302, Block 1, Wenhuahui, No. 223 Wenhua North Road, Chancheng District, Foshan, Guangdong, China";
const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

const mailSubject = "Stainless Steel Inquiry - Jinling Metals";
const mailBody = [
  "Hello Jinling Metals team,",
  "",
  "I would like to discuss a stainless steel inquiry.",
  "",
  "Product form:",
  "Grade / finish:",
  "Size:",
  "Quantity:",
  "Destination port or country:",
  "Application:",
  "Required documents or packing notes:",
  "",
  "Message:",
].join("\n");

const createEmailHref = (subject: string, body: string) =>
  `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const emailHref = createEmailHref(mailSubject, mailBody);

const contactMethods = [
  {
    title: "Email",
    detail: EMAIL,
    href: emailHref,
    note: "Send RFQs, drawings, documents, and order notes.",
    image: "/images/contact/contact-card-email.jpg",
    imageAlt: "Jinling Metals printed inquiry document for stainless steel email contact",
  },
  {
    title: "Call",
    detail: PHONE_DISPLAY,
    href: PHONE_HREF,
    note: "For urgent timing, shipment, or order release checks.",
    image: "/images/contact/contact-card-call.jpg",
    imageAlt: "Desk with phone and business tools for Jinling Metals call support",
  },
  {
    title: "Office",
    detail: "Foshan, Guangdong, China",
    href: MAPS_HREF,
    external: true,
    note: ADDRESS,
    image: "/images/contact/contact-card-visit.jpg",
    imageAlt: "Modern glass building exterior for Jinling Metals office visit contact",
  },
] as const;

const requestRoutes = [
  {
    id: "pricing-request",
    eyebrow: "Price & Availability",
    title: "Request a Quote",
    description:
      "For stainless steel price, stock, lead time, packing, and shipment basis.",
    cta: "Submit Quote Template",
    image: "/images/contact/template-card-quote.jpg",
    imageAlt: "Jinling Metals team preparing stainless steel inquiry and project notes",
    href: createEmailHref(
      "Price & Availability Inquiry - Jinling Metals",
      [
        "Hello Jinling Metals team,",
        "",
        "Request type: Price & Availability",
        "",
        "I would like to check price, availability, or lead time for the following stainless steel requirement.",
        "",
        "Product form:",
        "Grade:",
        "Finish:",
        "Size:",
        "Quantity:",
        "Destination port or country:",
        "Expected delivery timing:",
        "Packing requirement:",
        "Required documents:",
        "",
        "Additional notes:",
      ].join("\n"),
    ),
  },
  {
    id: "technical-review",
    eyebrow: "Grade & Finish Review",
    title: "Ask a Technical Question",
    description:
      "For grade selection, surface finish, corrosion risk, processing, or specification review.",
    cta: "Submit Technical Template",
    image: "/images/contact/template-card-technical.jpg",
    imageAlt: "Jinling Metals branded envelope for stainless steel specification communication",
    href: createEmailHref(
      "Grade & Finish Review - Jinling Metals",
      [
        "Hello Jinling Metals team,",
        "",
        "Request type: Grade & Finish Review",
        "",
        "I would like your help reviewing the stainless steel grade, finish, or specification for the following application.",
        "",
        "Application:",
        "Service environment:",
        "Current grade or finish:",
        "Target grade or finish:",
        "Product form:",
        "Size:",
        "Quantity:",
        "Drawing, photo, or standard requirement:",
        "Main concern:",
        "",
        "Additional notes:",
      ].join("\n"),
    ),
  },
  {
    id: "project-application-support",
    eyebrow: "Project & Application Support",
    title: "Discuss a Project Need",
    description:
      "For application-based material, finish, processing, and supply route questions.",
    cta: "Submit Project Template",
    image: "/images/contact/template-card-project.jpg",
    imageAlt: "Stainless steel spiral staircase project concept for application support",
    href: createEmailHref(
      "Project & Application Support - Jinling Metals",
      [
        "Hello Jinling Metals team,",
        "",
        "Request type: Project & Application Support",
        "",
        "I would like to discuss stainless steel material, finish, processing, or supply options for a project or application.",
        "",
        "Application or project type:",
        "End-use environment:",
        "Product form:",
        "Preferred grade or finish:",
        "Size or drawing requirement:",
        "Estimated quantity:",
        "Destination country:",
        "Key performance or appearance requirement:",
        "Project stage:",
        "",
        "Additional notes:",
      ].join("\n"),
    ),
  },
] as const;

const teamGalleryImages = [
  {
    src: "/images/contact/team-gallery-00.jpg",
    alt: "Jinling Metals Foshan team meeting for stainless steel buyer support and project discussion",
    className: "col-span-4 row-span-2",
  },
  {
    src: "/images/contact/team-gallery-01.jpg",
    alt: "Jinling Metals Foshan stainless steel team planning 2026 customer support",
    className: "col-span-4 row-span-2",
  },
  {
    src: "/images/contact/team-gallery-02.jpg",
    alt: "Jinling Metals team meeting for stainless steel export support",
    className: "col-span-2 row-span-1",
  },
  {
    src: "/images/contact/team-gallery-04.jpg",
    alt: "Jinling Metals team culture and office communication in Foshan",
    className: "col-span-2 row-span-1",
  },
  {
    src: "/images/contact/team-gallery-03.jpg",
    alt: "Jinling Metals team group photo at Foshan office",
    className: "col-span-3 row-span-1",
  },
  {
    src: "/images/contact/team-gallery-06.jpg",
    alt: "Jinling Metals staff reviewing stainless steel inquiry notes",
    className: "col-span-3 row-span-1",
  },
  {
    src: "/images/contact/team-gallery-07.jpg",
    alt: "Jinling Metals team celebration and customer service culture",
    className: "col-span-2 row-span-1",
  },
  {
    src: "/images/contact/team-gallery-08.jpg",
    alt: "Jinling Metals export support team during company activity",
    className: "col-span-2 row-span-1",
  },
  {
    src: "/images/contact/team-gallery-09.png",
    alt: "Jinling Metals customer feedback and supplier evaluation proof",
    className: "col-span-2 row-span-1",
  },
] as const;

function ContactMethodIcon({ title }: { title: string }) {
  const commonClass = "h-16 w-16";

  if (title === "Email") {
    return (
      <svg className={commonClass} viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M5.25 8.5h17.5v11H5.25v-11Z"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinejoin="round"
        />
        <path
          d="m6 9 8 6.2L22 9"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (title === "Call") {
    return (
      <svg className={commonClass} viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path
          d="M9.1 5.8 6.7 8.2c-.8.8-.9 2.1-.2 3.3 2.2 4 5.9 7.7 10 10 .6.3 1.2.5 1.8.5s1.1-.2 1.5-.7l2.4-2.4-4-4-2.1 2.1c-2.2-1.1-4-2.9-5.1-5.1l2.1-2.1-4-4Z"
          stroke="currentColor"
          strokeWidth="2.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg className={commonClass} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 24s7-6.4 7-12.2A7 7 0 0 0 7 11.8C7 17.6 14 24 14 24Z"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M14 14.4a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z"
        stroke="currentColor"
        strokeWidth="2.1"
      />
    </svg>
  );
}

function getContactAction(title: string) {
  if (title === "Email") {
    return "GET QUOTE";
  }

  if (title === "Office") {
    return "VISIT US";
  }

  return "CALL US";
}

function ContactTeamSlideshow() {
  return (
    <div className="relative overflow-hidden border border-[#d9cbb8] bg-white shadow-[0_22px_58px_rgba(13,20,27,0.12)]">
      <style>{`
        .contact-team-slide { opacity: 0; pointer-events: none; transform: scale(1.015); }
        .contact-team-control-set { display: none; }
        #contact-team-slide-0:checked ~ .contact-team-viewport .contact-team-slides .contact-team-slide-0,
        #contact-team-slide-1:checked ~ .contact-team-viewport .contact-team-slides .contact-team-slide-1,
        #contact-team-slide-2:checked ~ .contact-team-viewport .contact-team-slides .contact-team-slide-2,
        #contact-team-slide-3:checked ~ .contact-team-viewport .contact-team-slides .contact-team-slide-3,
        #contact-team-slide-4:checked ~ .contact-team-viewport .contact-team-slides .contact-team-slide-4,
        #contact-team-slide-5:checked ~ .contact-team-viewport .contact-team-slides .contact-team-slide-5,
        #contact-team-slide-6:checked ~ .contact-team-viewport .contact-team-slides .contact-team-slide-6,
        #contact-team-slide-7:checked ~ .contact-team-viewport .contact-team-slides .contact-team-slide-7,
        #contact-team-slide-8:checked ~ .contact-team-viewport .contact-team-slides .contact-team-slide-8 { opacity: 1; pointer-events: auto; transform: scale(1); }
        #contact-team-slide-0:checked ~ .contact-team-viewport .contact-team-controls .contact-team-control-set-0,
        #contact-team-slide-1:checked ~ .contact-team-viewport .contact-team-controls .contact-team-control-set-1,
        #contact-team-slide-2:checked ~ .contact-team-viewport .contact-team-controls .contact-team-control-set-2,
        #contact-team-slide-3:checked ~ .contact-team-viewport .contact-team-controls .contact-team-control-set-3,
        #contact-team-slide-4:checked ~ .contact-team-viewport .contact-team-controls .contact-team-control-set-4,
        #contact-team-slide-5:checked ~ .contact-team-viewport .contact-team-controls .contact-team-control-set-5,
        #contact-team-slide-6:checked ~ .contact-team-viewport .contact-team-controls .contact-team-control-set-6,
        #contact-team-slide-7:checked ~ .contact-team-viewport .contact-team-controls .contact-team-control-set-7,
        #contact-team-slide-8:checked ~ .contact-team-viewport .contact-team-controls .contact-team-control-set-8 { display: flex; }
        #contact-team-slide-0:checked ~ .contact-team-footer .contact-team-dots label[for="contact-team-slide-0"],
        #contact-team-slide-1:checked ~ .contact-team-footer .contact-team-dots label[for="contact-team-slide-1"],
        #contact-team-slide-2:checked ~ .contact-team-footer .contact-team-dots label[for="contact-team-slide-2"],
        #contact-team-slide-3:checked ~ .contact-team-footer .contact-team-dots label[for="contact-team-slide-3"],
        #contact-team-slide-4:checked ~ .contact-team-footer .contact-team-dots label[for="contact-team-slide-4"],
        #contact-team-slide-5:checked ~ .contact-team-footer .contact-team-dots label[for="contact-team-slide-5"],
        #contact-team-slide-6:checked ~ .contact-team-footer .contact-team-dots label[for="contact-team-slide-6"],
        #contact-team-slide-7:checked ~ .contact-team-footer .contact-team-dots label[for="contact-team-slide-7"],
        #contact-team-slide-8:checked ~ .contact-team-footer .contact-team-dots label[for="contact-team-slide-8"] { width: 1.25rem; background: #f6d044; }
      `}</style>
      {teamGalleryImages.map((photo, index) => (
        <input
          key={`contact-team-input-${photo.src}`}
          id={`contact-team-slide-${index}`}
          type="radio"
          name="contact-team-slideshow"
          className="sr-only"
          defaultChecked={index === 0}
        />
      ))}

      <div className="contact-team-viewport relative aspect-[16/10] bg-[#071018]">
        <div className="contact-team-slides absolute inset-0">
          {teamGalleryImages.map((photo, index) => (
            <div
              key={photo.src}
              className={`contact-team-slide contact-team-slide-${index} absolute inset-0 transition duration-500`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgba(7,16,24,0.78),rgba(7,16,24,0))] px-5 pb-5 pt-16">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[#f6d044]">
                  Jinling Metals Team
                </p>
                <p className="mt-1 text-sm font-semibold leading-5 text-white/92">
                  Foshan stainless steel support for RFQ, samples, documents,
                  packing, and export communication.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-team-controls absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-3" aria-label="Jinling Metals team photo slideshow controls">
          {teamGalleryImages.map((photo, index) => {
            const previous = (index - 1 + teamGalleryImages.length) % teamGalleryImages.length;
            const next = (index + 1) % teamGalleryImages.length;
            return (
              <div
                key={`contact-team-controls-${photo.src}`}
                className={`contact-team-control-set contact-team-control-set-${index} w-full items-center justify-between`}
              >
                <label
                  htmlFor={`contact-team-slide-${previous}`}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center bg-[#071018]/80 text-xl font-semibold leading-none text-[#f6d044] transition hover:bg-[#071018]"
                  aria-label="Previous Jinling Metals team photo"
                >
                  {"<"}
                </label>
                <label
                  htmlFor={`contact-team-slide-${next}`}
                  className="flex h-10 w-10 cursor-pointer items-center justify-center bg-[#071018]/80 text-xl font-semibold leading-none text-[#f6d044] transition hover:bg-[#071018]"
                  aria-label="Next Jinling Metals team photo"
                >
                  {">"}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="contact-team-footer flex items-center justify-between border-t border-[#e2d5c3] bg-[#fffaf1] px-5 py-3">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#111820]">
          Team support
        </p>
        <div className="contact-team-dots flex gap-1.5">
          {teamGalleryImages.map((photo, index) => (
            <label
              key={`contact-team-dot-${photo.src}`}
              htmlFor={`contact-team-slide-${index}`}
              className="h-1.5 w-1.5 cursor-pointer bg-[#c8bba8] transition-all"
              aria-label={`Show Jinling Metals team photo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Contact Jinling Metals | Stainless Steel Supplier in Foshan",
  description:
    "Contact Jinling Metals for stainless steel coil, sheet, plate, tube, pipe, bar, surface finish, packing, document, and export inquiry support from Foshan, China.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-cream-200">
      <section className="relative isolate overflow-hidden bg-[#0d141b] px-4 py-10 text-white sm:px-6 lg:min-h-[50vh] lg:px-8 lg:py-12">
        <div className="absolute inset-0">
          <Image
            src="/images/contact/contact-hero-glass-stairs.jpg"
            alt=""
            fill
            className="object-cover object-center opacity-[0.96] brightness-[0.9] contrast-[1.04]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.78)_0%,rgba(13,20,27,0.56)_42%,rgba(13,20,27,0.2)_100%)]" />
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-[#f6d044]/45" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.06)_0,rgba(255,255,255,0)_32%),linear-gradient(90deg,rgba(246,208,68,0.08)_0,rgba(246,208,68,0)_30%)]"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[calc(50vh-6rem)] w-full max-w-7xl flex-col items-start justify-center px-4 text-left sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#f6d044]">
              Contact Jinling Metals
              <span className="h-px w-10 bg-[#f6d044]/70" aria-hidden="true" />
            </p>
            <h1 className="mt-6 max-w-[66rem] text-[2.4rem] font-semibold leading-[1.04] text-white sm:text-[3.3rem] lg:text-[4.26rem]">
              Jinling Metals Is Ready to Support Your Next Step
            </h1>
            <p className="mt-6 max-w-[54rem] text-[1.1rem] leading-8 text-white/82 sm:text-[1.2rem]">
              From stainless steel RFQs to grade, finish, sample, document,
              packing, and shipment questions, the Jinling Metals team in
              Foshan stays close to your next step. Share what you have, and we
              will help turn it into a clearer material, processing, and
              export-ready basis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0e5] px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto max-w-4xl">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#b99418]">
            Direct Contact Details
          </p>
          <h2 className="mt-5 text-[1.9rem] font-semibold leading-[1.08] text-[#111820] sm:text-[2.35rem] lg:text-[2.85rem]">
            Start with email when details matter.
          </h2>
          <p className="mt-5 max-w-[54rem] text-sm leading-7 text-[#53606b] sm:text-[0.98rem]">
            Send RFQs, drawings, grade questions, surface finish requirements,
            document notes, and shipment details directly to our Foshan team.
            If your email app does not open, copy the address and send from
            your own mailbox.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-7xl items-stretch gap-5 lg:grid-cols-3">
          {contactMethods.map((method) => {
            const action = getContactAction(method.title);
            const isEmail = method.title === "Email";
            const isOffice = method.title === "Office";

            if (isEmail) {
              return (
                <article
                  key={method.title}
                  className="group relative isolate flex min-h-[14.5rem] flex-col overflow-hidden border border-white/16 bg-[#111820] p-6 shadow-[0_22px_60px_rgba(13,20,27,0.12)] transition duration-300 hover:-translate-y-1 hover:border-[#f6d044]/70 hover:shadow-[0_30px_75px_rgba(13,20,27,0.18)] sm:min-h-[15.5rem]"
                >
                  <Image
                    src={method.image}
                    alt={method.imageAlt}
                    fill
                    className="object-cover object-center opacity-80 brightness-[0.58] contrast-[1.06] transition duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.35)_0%,rgba(13,20,27,0.72)_100%)]" />
                  <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center text-[#f6d044] transition duration-300 lg:group-hover:-translate-y-8">
                    <ContactMethodIcon title={method.title} />
                    <h3 className="mt-6 text-[1.95rem] font-black uppercase leading-none tracking-[0.08em] text-[#f6d044]">
                      {action}
                    </h3>
                  </div>

                  <div className="relative z-20 mt-auto space-y-3 border-t border-[#f6d044]/45 pt-4 text-left opacity-100 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:translate-y-full lg:border-t-0 lg:bg-[#0d141b]/94 lg:px-6 lg:py-5 lg:text-white lg:opacity-100 lg:shadow-[0_-16px_35px_rgba(13,20,27,0.24)] lg:backdrop-blur-sm lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0">
                    <a
                      href={method.href}
                      className="block break-words text-sm font-semibold text-white transition hover:text-[#f6d044]"
                    >
                      {method.detail}
                    </a>
                    <p className="text-sm leading-6 text-white/74">
                      {method.note}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={method.href}
                        className="bg-brand-accent px-4 py-2.5 text-sm font-semibold text-brand-dark transition hover:bg-brand-accent-hover"
                      >
                        Email Jinling Metals
                      </a>
                      <CopyEmailButton email={EMAIL} />
                    </div>
                  </div>
                </article>
              );
            }

            return (
              <a
                key={method.title}
                href={method.href}
                target={isOffice ? "_blank" : undefined}
                rel={isOffice ? "noreferrer" : undefined}
                className="group relative isolate flex min-h-[14.5rem] flex-col overflow-hidden border border-white/16 bg-[#111820] p-6 shadow-[0_22px_60px_rgba(13,20,27,0.12)] transition duration-300 hover:-translate-y-1 hover:border-[#f6d044]/70 hover:shadow-[0_30px_75px_rgba(13,20,27,0.18)] sm:min-h-[15.5rem]"
              >
                <Image
                  src={method.image}
                  alt={method.imageAlt}
                  fill
                  className="object-cover object-center opacity-80 brightness-[0.58] contrast-[1.06] transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.35)_0%,rgba(13,20,27,0.72)_100%)]" />
                <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center text-[#f6d044] transition duration-300 lg:group-hover:-translate-y-8">
                  <ContactMethodIcon title={method.title} />
                  <h3 className="mt-6 text-[1.95rem] font-black uppercase leading-none tracking-[0.08em] text-[#f6d044]">
                    {action}
                  </h3>
                </div>

                <div className="relative z-20 mt-auto space-y-3 border-t border-[#f6d044]/45 pt-4 text-left opacity-100 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:translate-y-full lg:border-t-0 lg:bg-[#0d141b]/94 lg:px-6 lg:py-5 lg:text-white lg:opacity-100 lg:shadow-[0_-16px_35px_rgba(13,20,27,0.24)] lg:backdrop-blur-sm lg:transition-transform lg:duration-300 lg:group-hover:translate-y-0">
                  <p className="whitespace-nowrap text-sm font-semibold text-white">
                    {method.detail}
                  </p>
                  <p className="text-sm leading-6 text-white/74">
                    {method.note}
                  </p>
                  <span className="inline-flex bg-brand-accent px-4 py-2.5 text-sm font-semibold text-brand-dark transition group-hover:bg-brand-accent-hover">
                    {isOffice ? "Open Google Maps" : "Call Jinling Metals"}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="bg-[#111820] text-white">
        <div className="px-4 py-12 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-4xl">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#b99418]">
              Email Templates
            </p>
            <h2 className="mt-5 text-[1.9rem] font-semibold leading-[1.08] text-white sm:text-[2.35rem] lg:text-[2.85rem]">
              Choose the request that fits you.
            </h2>
            <p className="mt-5 max-w-[54rem] text-sm leading-7 text-white/72 sm:text-[0.98rem]">
              Click one option to open a prepared email template. Add your size,
              grade, finish, quantity, destination, drawings, or notes, then
              send it to Jinling Metals.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-7xl gap-5 lg:grid-cols-3">
            {requestRoutes.map((route) => (
              <a
                key={route.id}
                id={route.id}
                href={route.href}
                className="group relative isolate flex min-h-[14.5rem] scroll-mt-28 flex-col justify-between overflow-hidden border border-white/16 bg-[#111820] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-[#f6d044]/70 hover:shadow-[0_30px_75px_rgba(0,0,0,0.32)] sm:min-h-[15.5rem]"
              >
                <Image
                  src={route.image}
                  alt={route.imageAlt}
                  fill
                  className="object-cover object-center opacity-82 brightness-[0.5] contrast-[1.08] transition duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.2)_0%,rgba(13,20,27,0.82)_100%)]" />
                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#b99418]">
                    {route.eyebrow}
                  </p>
                  <h3 className="mt-4 text-[1.65rem] font-semibold leading-[1.08] text-white">
                    {route.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/74">
                    {route.description}
                  </p>
                </div>
                <span className="relative z-10 mt-8 inline-flex w-fit bg-brand-accent px-4 py-2.5 text-sm font-semibold text-brand-dark transition group-hover:bg-brand-accent-hover">
                  {route.cta}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6f0e5] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-4xl">
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#b99418]">
              Team Support
            </p>
            <h2 className="mt-5 text-[1.9rem] font-semibold leading-[1.08] text-[#111820] sm:text-[2.35rem] lg:text-[2.85rem]">
              Your Trusted Stainless Steel Support Team
            </h2>
            <p className="mt-5 max-w-[54rem] text-sm leading-7 text-[#53606b] sm:text-[0.98rem]">
              Jinling Metals supports stainless steel buyers from Foshan with
              RFQ review, grade and finish advice, sample coordination,
              document checking, packing notes, and export communication.
            </p>
        </div>

        <div className="mx-auto mt-9 max-w-4xl">
          <ContactTeamSlideshow />
        </div>
      </section>

    </div>
  );
}
