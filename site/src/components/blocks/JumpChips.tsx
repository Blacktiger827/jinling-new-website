/**
 * JumpChips — sticky 横条跳转（替代 ToC）
 *
 * 长页面用，5–6 个锚点按钮，横向排列，滚动时吸附在顶部（可选）。
 * 比传统 ToC 更简洁、移动端友好。
 *
 * 示例用法：
 * <JumpChips chips={[
 *   { label: "Specs", href: "#specs" },
 *   { label: "Grades", href: "#grades" },
 *   { label: "Applications", href: "#applications" },
 *   { label: "FAQ", href: "#faq" },
 * ]} sticky />
 */

interface Chip {
  label: string;
  href: string;
}

interface JumpChipsProps {
  chips: Chip[];
  sticky?: boolean;
  className?: string;
}

export function JumpChips({ chips, sticky = false, className = "" }: JumpChipsProps) {
  return (
    <nav
      aria-label="Page sections"
      className={`${
        sticky ? "sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-200" : ""
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
          {chips.map((chip) => (
            <li key={chip.href} className="shrink-0">
              <a
                href={chip.href}
                className="inline-flex items-center rounded-full border border-gray-300 px-4 py-1.5 text-xs font-medium text-text-secondary hover:border-brand-accent hover:text-brand-accent transition-colors"
              >
                {chip.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
