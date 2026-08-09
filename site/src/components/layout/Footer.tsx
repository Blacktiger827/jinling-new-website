import Link from "next/link";
import {
  productsByForm,
  productsBySurface,
} from "@/lib/site-navigation";

const resourceLinks = [
  { name: "Resource Hub", href: "/resources" },
  { name: "Market Insights", href: "/resources/market-insights" },
  { name: "Stainless Steel Guides", href: "/resources/stainless-steel-guides" },
];

const trustStats = [
  { value: "Since 1997", label: "29 years export experience" },
  { value: "150+", label: "Clients across 10+ countries" },
  { value: "25,000 sqm", label: "Dual-facility processing" },
  { value: "EN 10204 3.1", label: "MTC route available by order" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/jinling-metals/",
    path: "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.54V9H7.1v11.45ZM22.23 0H1.76C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.76 24h20.47c.97 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0Z",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@jinlingsteelsolutions8708",
    path: "M23.5 6.2a3 3 0 0 0-2.1-2.12C19.55 3.58 12 3.58 12 3.58s-7.55 0-9.4.5A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.85.5 9.4.5 9.4.5s7.55 0 9.4-.5a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/JinLingOfficial",
    path: "M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/jinlingsteel.ltd/",
    path: "M7.2 2.16h9.6A5.04 5.04 0 0 1 21.84 7.2v9.6a5.04 5.04 0 0 1-5.04 5.04H7.2a5.04 5.04 0 0 1-5.04-5.04V7.2A5.04 5.04 0 0 1 7.2 2.16Zm0 2.16A2.88 2.88 0 0 0 4.32 7.2v9.6a2.88 2.88 0 0 0 2.88 2.88h9.6a2.88 2.88 0 0 0 2.88-2.88V7.2a2.88 2.88 0 0 0-2.88-2.88H7.2ZM12 7.68a4.32 4.32 0 1 1 0 8.64 4.32 4.32 0 0 1 0-8.64Zm0 2.16a2.16 2.16 0 1 0 0 4.32 2.16 2.16 0 0 0 0-4.32Zm5.04-2.64a1.08 1.08 0 1 1 0 2.16 1.08 1.08 0 0 1 0-2.16Z",
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* Trust band - standards + reach */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-soft">
                Standards & Documents
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
                ASTM, EN, GB/T, mill certificates, inspection records, and
                order-specific document support are confirmed according to
                product grade, form, and shipment requirements.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-copper-soft">
                Mill-direct from Foshan
              </p>
              <dl className="mt-3 grid grid-cols-2 gap-x-5 gap-y-3">
                {trustStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="text-base font-semibold text-white">
                      {stat.value}
                    </dt>
                    <dd className="mt-1 text-xs leading-5 text-gray-400">
                      {stat.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <Link href="/" className="mb-3 inline-block">
                <span className="text-2xl font-bold tracking-wider">JINLING</span>
                <span className="ml-1 text-xs uppercase tracking-widest text-text-light">Steel</span>
              </Link>
              <p className="mb-4 text-sm leading-6 text-gray-400">
                Foshan stainless steel processor since 1997, supplying stainless
                steel coil, sheet, bar, tube, pipe, and surface-finished products
                with export packing and document support.
              </p>
              <div className="space-y-1.5 text-sm text-gray-400">
                <p>+86-757-81637153</p>
                <p>info@jinlingsteel.com</p>
                <p>Foshan, Guangdong, China</p>
              </div>
              <div className="mt-5 flex items-center gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    aria-label={`Visit Jinling Metals on ${link.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-gray-400 transition-colors hover:border-brand-accent/60 hover:text-brand-accent"
                  >
                    <svg
                      className="h-4.5 w-4.5"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                      fill="currentColor"
                    >
                      <path d={link.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="md:pl-4 lg:pl-6 xl:pl-8">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">Products</h4>
              <ul className="space-y-1.5">
                {productsByForm.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-brand-accent">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 md:gap-x-5">
            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">Surface Finishes</h4>
              <ul className="space-y-1.5">
                {productsBySurface.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-brand-accent">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider">Resources</h4>
              <ul className="space-y-1.5">
                {resourceLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-gray-400 transition-colors hover:text-brand-accent">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center bg-brand-accent px-5 py-2.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-accent-hover"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-5 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Jinling Steel Co., Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <Link href="/contact" className="transition-colors hover:text-gray-300">
              Contact Us
            </Link>
            <Link href="/about" className="transition-colors hover:text-gray-300">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



