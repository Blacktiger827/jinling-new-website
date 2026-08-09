"use client";

import Link from "next/link";
import { useState } from "react";
import {
  productsByForm,
  productsByGrade,
  productsBySurface,
  resourcesInsights,
  resourcesKnowledgeBase,
  solutionsByCapability,
  solutionsByIndustry,
} from "@/lib/site-navigation";

const mobileNavSections = [
  {
    id: "products",
    label: "Products",
    overviewHref: "/products",
    groups: [
      { label: "Core Forms", href: "/products", items: productsByForm },
      { label: "Finish Options", href: "/surfaces", items: productsBySurface },
      { label: "Core Grades", href: "/grades", items: productsByGrade },
    ],
  },
  {
    id: "solutions",
    label: "Solutions",
    overviewHref: "/solutions",
    groups: [
      { label: "Application Lines", href: "/solutions/applications", items: solutionsByIndustry },
      { label: "Process Capabilities", href: "/solutions/capabilities", items: solutionsByCapability },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    overviewHref: "/resources",
    groups: [
      { label: "Market Insights", href: "/resources/market-insights", items: resourcesInsights },
      { label: "Stainless Steel Guides", href: "/resources/stainless-steel-guides", items: resourcesKnowledgeBase },
    ],
  },
];

function ChevronDownIcon() {
  return (
    <svg
      className="h-3 w-3 text-white/55"
      viewBox="0 0 12 12"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 4.5 6 7.5l3-3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

/* ── Component ── */

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileSection(null);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((open) => {
      if (open) {
        setMobileSection(null);
      }

      return !open;
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-wider">JINLING</span>
            <span className="text-xs text-text-light tracking-widest uppercase">Steel</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-5 text-[0.95rem] font-medium hover:text-brand-accent transition-colors"
            >
              Home
            </Link>

            {/* Products */}
            <div className="group relative">
              <Link
                href="/products"
                className="inline-flex items-center gap-1 px-4 py-5 text-[0.95rem] font-medium transition-colors hover:text-brand-accent group-hover:text-brand-accent"
                aria-haspopup="true"
              >
                Products
                <ChevronDownIcon />
              </Link>
              <div className="absolute top-full left-1/2 z-50 hidden w-[720px] -translate-x-1/2 grid-cols-3 gap-8 rounded-b-lg bg-white p-8 text-text-primary shadow-xl group-hover:grid group-focus-within:grid">
                  <div>
                    <Link href="/products" className="block text-xs font-semibold uppercase tracking-wider text-text-light hover:text-brand-accent transition-colors mb-3">
                      Core Forms →
                    </Link>
                    <ul className="space-y-2">
                      {productsByForm.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="text-sm hover:text-brand-accent transition-colors">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Link href="/surfaces" className="block text-xs font-semibold uppercase tracking-wider text-text-light hover:text-brand-accent transition-colors mb-3">
                      Finish Options →
                    </Link>
                    <ul className="space-y-2">
                      {productsBySurface.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="text-sm hover:text-brand-accent transition-colors">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Link href="/grades" className="block text-xs font-semibold uppercase tracking-wider text-text-light hover:text-brand-accent transition-colors mb-3">
                      Core Grades →
                    </Link>
                    <ul className="space-y-2">
                      {productsByGrade.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="text-sm hover:text-brand-accent transition-colors">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="group relative">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-1 px-4 py-5 text-[0.95rem] font-medium transition-colors hover:text-brand-accent group-hover:text-brand-accent"
                aria-haspopup="true"
              >
                Solutions
                <ChevronDownIcon />
              </Link>
              <div className="absolute top-full left-1/2 z-50 hidden w-[600px] -translate-x-1/2 grid-cols-2 gap-8 rounded-b-lg bg-white p-8 text-text-primary shadow-xl group-hover:grid group-focus-within:grid">
                  <div>
                    <Link href="/solutions/applications" className="block text-xs font-semibold uppercase tracking-wider text-text-light hover:text-brand-accent transition-colors mb-3">
                      Application Lines →
                    </Link>
                    <ul className="space-y-2">
                      {solutionsByIndustry.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="text-sm hover:text-brand-accent transition-colors">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <Link href="/solutions/capabilities" className="block text-xs font-semibold uppercase tracking-wider text-text-light hover:text-brand-accent transition-colors mb-3">
                      Process Capabilities →
                    </Link>
                    <ul className="space-y-2">
                      {solutionsByCapability.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href} className="text-sm hover:text-brand-accent transition-colors">
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>
            </div>

            {/* Resources */}
            <div className="group relative">
              <Link
                href="/resources"
                className="inline-flex items-center gap-1 px-4 py-5 text-[0.95rem] font-medium transition-colors hover:text-brand-accent group-hover:text-brand-accent"
                aria-haspopup="true"
              >
                Resources
                <ChevronDownIcon />
              </Link>
              <div className="absolute top-full left-1/2 z-50 hidden w-[640px] -translate-x-1/2 grid-cols-2 gap-8 rounded-b-lg bg-white p-8 text-text-primary shadow-xl group-hover:grid group-focus-within:grid">
                <div>
                  <Link href="/resources/market-insights" className="mb-3 block text-xs font-semibold uppercase tracking-wider text-text-light transition-colors hover:text-brand-accent">
                    Market Insights {"->"}
                  </Link>
                  <ul className="space-y-2">
                    {resourcesInsights.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="text-sm transition-colors hover:text-brand-accent">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Link href="/resources/stainless-steel-guides" className="mb-3 block text-xs font-semibold uppercase tracking-wider text-text-light transition-colors hover:text-brand-accent">
                    Stainless Steel Guides {"->"}
                  </Link>
                  <ul className="space-y-2">
                    {resourcesKnowledgeBase.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className="text-sm transition-colors hover:text-brand-accent">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* About */}
            <Link
              href="/about"
              className="px-4 py-5 text-[0.95rem] font-medium hover:text-brand-accent transition-colors"
            >
              About
            </Link>

            {/* CTA */}
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center bg-brand-accent px-5 py-2 text-[0.95rem] font-semibold text-brand-dark transition-colors hover:bg-brand-accent-hover"
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center bg-brand-accent px-4 text-[0.8125rem] font-semibold text-brand-dark shadow-[0_8px_20px_rgba(246,208,68,0.22)] transition-colors hover:bg-brand-accent-hover"
            >
              Contact
            </Link>
            <button
              className="p-2.5"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-white/10 bg-brand-dark px-4 pb-6 pt-2">
          <Link href="/" className="block border-b border-white/10 py-3 text-sm font-medium" onClick={closeMobileMenu}>
            Home
          </Link>

          {mobileNavSections.map((section) => {
            const isOpen = mobileSection === section.id;

            return (
              <div key={section.id} className="border-b border-white/10 py-1">
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-3 text-left text-sm font-medium"
                  onClick={() => setMobileSection(isOpen ? null : section.id)}
                  aria-expanded={isOpen}
                  aria-controls={`mobile-${section.id}-menu`}
                >
                  <span>{section.label}</span>
                  <span className="text-white/55" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div id={`mobile-${section.id}-menu`} className="pb-4">
                    <Link
                      href={section.overviewHref}
                      className="mb-4 inline-flex rounded-md bg-white/8 px-3 py-2 text-xs font-semibold text-brand-accent"
                      onClick={closeMobileMenu}
                    >
                      View {section.label}
                    </Link>

                    <div className="grid gap-5">
                      {section.groups.map((group) => (
                        <div key={group.label}>
                          <Link
                            href={group.href}
                            className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/45"
                            onClick={closeMobileMenu}
                          >
                            {group.label} →
                          </Link>
                          <ul className="mt-2 grid gap-2">
                            {group.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  className="block py-1 text-sm text-white/82 transition-colors hover:text-brand-accent"
                                  onClick={closeMobileMenu}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          <Link href="/about" className="block border-b border-white/10 py-3 text-sm font-medium" onClick={closeMobileMenu}>
            About
          </Link>
          <Link
            href="/contact"
            className="mt-5 block w-full bg-brand-accent px-5 py-2.5 text-center text-sm font-semibold text-brand-dark transition-colors hover:bg-brand-accent-hover"
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}




