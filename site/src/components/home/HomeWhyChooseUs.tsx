import Image from "next/image";

const whyChooseItems = [
  {
    icon: "surface",
    labelLines: ["Premium 8K & AFP", "Surface Experience"],
    title: "Premium 8K & AFP Surface Experience",
    description:
      "Mid-to-high-end 8K mirror, AFP anti-fingerprint, hairline, No.4, embossed, and decorative stainless steel sheet for visible applications.",
    image: "/images/surfaces/no8-mirror/slideshow/8k-mirror-object-reflection.jpeg",
    imageAlt:
      "8K mirror stainless steel reflection showing premium decorative surface processing",
    imagePosition: "object-[center_50%]",
  },
  {
    icon: "sourcing",
    labelLines: ["Multi-Origin Raw", "Material Sourcing"],
    title: "Multi-Origin Raw Material Sourcing",
    description:
      "We compare stainless steel routes from China, Indonesia, Vietnam, and Asian supply channels by grade, surface quality, lead time, and cost.",
    image: "/images/about/company-overview/20-coil-warehouse.jpg",
    imageAlt:
      "Stainless steel coil warehouse for multi-origin raw material sourcing",
    imagePosition: "object-[center_50%]",
  },
  {
    icon: "insight",
    labelLines: ["Weekly Market Reports", "for 8 Years"],
    title: "Weekly Market Reports for 8 Years",
    description:
      "Weekly China stainless steel market reports help buyers follow nickel trends, price movement, supply changes, and sourcing timing.",
    image: "/images/about/company-overview/25-news-board-planning.jpg",
    imageAlt:
      "Jinling News planning board for weekly stainless steel market reports",
    imagePosition: "object-[center_42%]",
  },
  {
    icon: "quality",
    labelLines: ["Quality Control", "Before Shipment"],
    title: "Strict Quality Control Before Shipment",
    description:
      "Thickness, surface condition, protective film, packing details, batch information, and shipment preparation are checked before delivery.",
    image: "/images/about/company-overview/35-thickness-measurement.jpg",
    imageAlt:
      "Thickness measurement quality control for stainless steel before shipment",
    imagePosition: "object-[center_50%]",
  },
  {
    icon: "support",
    labelLines: ["Long-Term", "After-Sales Support"],
    title: "After-Sales Support for Long-Term Cooperation",
    description:
      "Responsive communication, order follow-up, problem solving, and repeat-order consistency support long-term stainless steel sourcing.",
    image: "/images/about/company-overview/26-team-meeting.jpg",
    imageAlt:
      "Jinling team meeting for customer communication and after-sales support",
    imagePosition: "object-[center_50%]",
  },
] as const;

type WhyChooseIcon = (typeof whyChooseItems)[number]["icon"];

function ServiceIcon({ name }: { name: WhyChooseIcon }) {
  const baseClass = "h-9 w-9";

  if (name === "surface") {
    return (
      <svg
        aria-hidden="true"
        className={baseClass}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M12 3 9.8 8.2 4.5 10.5l5.3 2.2L12 18l2.2-5.3 5.3-2.2-5.3-2.3L12 3Z" />
        <path d="m18.5 16.5-.8 1.9-1.9.8 1.9.8.8 1.9.8-1.9 1.9-.8-1.9-.8-.8-1.9Z" />
      </svg>
    );
  }

  if (name === "sourcing") {
    return (
      <svg
        aria-hidden="true"
        className={baseClass}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.5 12h17" />
        <path d="M12 3.5c2.1 2.3 3.1 5.1 3.1 8.5S14.1 18.2 12 20.5" />
        <path d="M12 3.5C9.9 5.8 8.9 8.6 8.9 12s1 6.2 3.1 8.5" />
      </svg>
    );
  }

  if (name === "insight") {
    return (
      <svg
        aria-hidden="true"
        className={baseClass}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M4 19h16" />
        <path d="M6.5 16V9" />
        <path d="M12 16V5" />
        <path d="M17.5 16v-4" />
        <path d="m5 10 5-4 4 3 5-5" />
      </svg>
    );
  }

  if (name === "quality") {
    return (
      <svg
        aria-hidden="true"
        className={baseClass}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        viewBox="0 0 24 24"
      >
        <path d="M12 3.5 19 6v5.4c0 4.2-2.7 7.6-7 9.1-4.3-1.5-7-4.9-7-9.1V6l7-2.5Z" />
        <path d="m8.8 12.2 2.1 2.1 4.6-5" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={baseClass}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      <path d="m11.2 14.8 1.2 1.2a2 2 0 0 0 2.8 0l4.4-4.4a2.5 2.5 0 0 0 0-3.5l-.9-.9a2.5 2.5 0 0 0-3.5 0l-1.1 1.1" />
      <path d="m12.8 14.8-1.2 1.2a2 2 0 0 1-2.8 0l-4.4-4.4a2.5 2.5 0 0 1 0-3.5l.9-.9a2.5 2.5 0 0 1 3.5 0l1.1 1.1" />
      <path d="m8.8 11.4 2-2a2.4 2.4 0 0 1 3.4 0l1 1" />
      <path d="m7.2 14.4 2.1-2.1" />
      <path d="m16.8 14.4-2.1-2.1" />
      <path d="M9.7 17.1 8.4 19" />
      <path d="m14.3 17.1 1.3 1.9" />
    </svg>
  );
}

export default function HomeWhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0d141b] text-white">
      <Image
        src="/images/hero/home-why-choose-bg.jpg"
        alt="Warm architectural interior background for Jinling quality services"
        fill
        sizes="100vw"
        className="object-cover object-[center_50%] opacity-100"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,20,27,0.72)_0%,rgba(13,20,27,0.52)_42%,rgba(13,20,27,0.34)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.74)_0%,rgba(13,20,27,0.36)_44%,rgba(13,20,27,0.82)_100%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-[3.5rem] sm:px-6 sm:py-[4.2rem] lg:px-8">
        <div className="mx-auto max-w-4xl text-left">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[#f6d044]">
            Why Choose Us
          </p>
          <h2 className="mt-5 text-[2.2rem] font-semibold leading-[1.08] sm:text-[3rem] lg:text-[3.35rem]">
            We Provide Quality Services
          </h2>
          <p className="mt-6 text-[1.03rem] leading-8 text-white/80 sm:text-[1.1rem]">
            Jinling Metals supports global stainless steel buyers with
            surface-focused experience, multi-origin sourcing, weekly market
            insight, careful quality control, and after-sales responsibility
            for long-term cooperation.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {whyChooseItems.map((item) => (
            <article
              key={item.title}
              tabIndex={0}
              className="group relative min-h-[16.2rem] cursor-pointer overflow-hidden bg-[#111820] p-5 outline-none ring-1 ring-white/14 transition duration-300 hover:-translate-y-1 hover:ring-[#f6d044]/70 focus:-translate-y-1 focus:ring-[#f6d044]/70 focus-visible:ring-2 focus-visible:ring-[#f6d044]"
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw"
                className={`object-cover opacity-[0.66] transition duration-500 group-hover:scale-[1.04] group-hover:opacity-[0.82] group-focus:scale-[1.04] group-focus:opacity-[0.82] ${item.imagePosition}`}
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.92)_0%,rgba(13,20,27,0.72)_52%,rgba(13,20,27,0.46)_100%)]"
                aria-hidden="true"
              />
              <div
                className="absolute inset-0 bg-[linear-gradient(135deg,rgba(246,208,68,0.16)_0%,rgba(246,208,68,0)_46%)]"
                aria-hidden="true"
              />
              <div className="relative z-10 flex min-h-[13.5rem] flex-col justify-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center text-[#f6d044] drop-shadow-[0_10px_18px_rgba(0,0,0,0.3)] transition duration-300 group-hover:-translate-y-1 group-hover:text-white group-focus:-translate-y-1 group-focus:text-white">
                  <ServiceIcon name={item.icon} />
                </div>
                <h3 className="mx-auto mt-5 max-w-[13rem] text-center text-[1.26rem] font-semibold leading-[1.12] text-[#f6d044] transition duration-300 group-hover:-translate-y-1 group-focus:-translate-y-1 sm:text-[1.38rem] lg:text-[1.08rem] xl:text-[1.22rem]">
                  {item.labelLines.map((line) => (
                    <span key={line} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="mt-0 max-h-0 overflow-hidden text-left text-[0.78rem] leading-5 text-white/82 opacity-0 transition-all duration-300 group-hover:mt-4 group-hover:max-h-32 group-hover:opacity-100 group-focus:mt-4 group-focus:max-h-32 group-focus:opacity-100 xl:text-[0.82rem]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
