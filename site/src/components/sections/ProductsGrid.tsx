import Image from "next/image";
import Link from "next/link";
import { productsByForm } from "@/lib/site-navigation";

const productDetails = {
  Coil: {
    description: "Coil routes for stock, slit width, edge condition, coating, and replenishment planning.",
    route: "Stock, slit width, edge, coating",
    image: "/images/products/coil/hero.webp",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="24" cy="24" rx="18" ry="10" />
        <ellipse cx="24" cy="24" rx="10" ry="6" />
        <circle cx="24" cy="24" r="3" />
      </svg>
    ),
  },
  "Sheet & Plate": {
    description: "Sheet and plate where flatness, surface, film, and visible-face packing need to be settled together.",
    route: "Flatness, surface, film, packing",
    image: "/images/products/sheet/hero.webp",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="12" width="36" height="24" rx="1" />
        <line x1="6" y1="18" x2="42" y2="18" />
      </svg>
    ),
  },
  "Bar Forms": {
    description: "Round, flat, angle, square, and hex bars chosen by machining route, load, and certificate need.",
    route: "Profile, machining, load, certificate",
    image: "/images/products/bar/hero.webp",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="20" width="32" height="8" rx="1" />
        <rect x="12" y="14" width="24" height="6" rx="1" />
        <rect x="16" y="28" width="16" height="6" rx="1" />
      </svg>
    ),
  },
  "Tube & Pipe": {
    description: "Industrial, sanitary, and decorative routes split by weld, end condition, Ra, and release proof.",
    route: "Weld, bore, ends, release proof",
    image: "/images/products/tube/hero.webp",
    icon: (
      <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="6" y="16" width="36" height="16" rx="8" />
        <ellipse cx="42" cy="24" rx="1" ry="8" />
        <ellipse cx="6" cy="24" rx="1" ry="8" />
      </svg>
    ),
  },
} as const;

const products = productsByForm.map((product) => ({
  ...product,
  ...productDetails[product.name],
}));

export function ProductsGrid() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-brand-accent mb-2">
            Product route
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-dark">
            Start with the form that controls the risk.
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Coil, sheet, bar, tube, and pipe do not fail in the same way. Start
            with the form, then lock the grade, finish, tolerance, and release
            route around it.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition-all duration-300 hover:border-brand-accent/40 hover:shadow-lg"
            >
              <div className="relative h-44 overflow-hidden bg-brand-dark">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white/85">
                  {product.icon}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-brand-dark group-hover:text-brand-accent transition-colors">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                  {product.description}
                </p>
                <p className="mt-5 rounded-card-sm border border-cream-border bg-cream-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-text-light">
                  {product.route}
                </p>
                <span className="mt-auto inline-flex items-center pt-5 text-sm font-medium text-brand-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Open product route
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
