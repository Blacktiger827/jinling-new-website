import {
  allStainlessSteelGuidesCategory,
  stainlessSteelGuideCategorySections,
} from "@/lib/stainless-steel-guide-groups";
import Link from "next/link";

export function GuideCategoryNav({
  activeId,
}: {
  activeId?: string;
}) {
  const navigation = [
    ...stainlessSteelGuideCategorySections.map((category) => ({
      id: category.id,
      label: category.navLabel,
      href: category.href,
    })),
    {
      id: allStainlessSteelGuidesCategory.id,
      label: allStainlessSteelGuidesCategory.navLabel,
      href: allStainlessSteelGuidesCategory.href,
    },
  ];

  return (
    <aside className="xl:sticky xl:top-24 xl:col-start-1 xl:justify-self-end xl:self-start">
      <div className="w-full border border-cream-border bg-white p-3 shadow-[0_12px_32px_rgba(13,20,27,0.045)] sm:w-[15.5rem]">
        <Link
          href="/resources/stainless-steel-guides"
          className="mb-3 block px-2 py-1 text-center text-xs font-semibold uppercase tracking-[0.16em] text-brand-dark transition hover:text-brand-accent"
        >
          Guide Categories
        </Link>
        <nav className="grid gap-2">
          {navigation.map((item, index) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={item.id === activeId ? "page" : undefined}
              className={`block w-full whitespace-nowrap border border-transparent px-3 py-3 text-sm font-semibold leading-none transition ${
                index % 2 === 0
                  ? "bg-brand-dark text-white hover:border-brand-accent hover:text-brand-accent"
                  : "bg-brand-accent text-brand-dark hover:bg-brand-accent-hover"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
