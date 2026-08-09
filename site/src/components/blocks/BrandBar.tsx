/**
 * BrandBar — 贯穿式 4 格信任条
 *
 * 横向 4 格，展示品牌核心硬指标。
 * 用于 Overview 页或任何需要一眼传达品牌差异化的位置。
 *
 * 默认展示金凌更有辨识度的 4 条品牌优势，
 * 也可以传入 items 自定义。
 */

interface BrandBarItem {
  headline: string;
  sub?: string;
}

interface BrandBarProps {
  items?: readonly BrandBarItem[];
  variant?: "dark" | "light" | "accent";
  className?: string;
}

const defaultItems: readonly BrandBarItem[] = [
  {
    headline: "Surface Processing Specialist",
    sub: "Built around mirror, AFP, hairline, No.4, and Super Finish",
  },
  {
    headline: "430 Mirror Substrate Guidance",
    sub: "When ferritic 430 is suitable for controlled indoor mirror panels",
  },
  {
    headline: "In-house AFP Formula",
    sub: "10–20 µm anti-fingerprint coating tuned against client samples",
  },
  {
    headline: "Export-grade Finish Protection",
    sub: "Film, de-waxing, deburring, and final visual release before shipment",
  },
];

export function BrandBar({
  items = defaultItems,
  variant = "dark",
  className = "",
}: BrandBarProps) {
  const variantClass = {
    dark: "bg-brand-dark text-white",
    light: "bg-bg-light text-brand-dark",
    accent: "bg-brand-accent text-brand-dark",
  }[variant];

  return (
    <div className={`${variantClass} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {items.map((item, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="text-sm sm:text-base font-semibold">
                {item.headline}
              </div>
              {item.sub ? (
                <div className="mt-0.5 text-xs opacity-75">{item.sub}</div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
