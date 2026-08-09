/**
 * HeroStatsCard — 首屏判断锚点 / 特色证据卡
 *
 * 用于文章、产品、表面、等级页顶部，替代冗长的介绍文字。
 * 每格应回答一个快速问题：读者先看什么、页面证明什么、
 * 或这条供应/技术路线有什么不同。不要把它变成参数海报。
 *
 * 示例用法：
 * <HeroStatsCard stats={[
 *   { value: "Slow polish", label: "Time for each pass" },
 *   { value: "Reference panel", label: "Lot-to-lot control" },
 *   { value: "MTC plus PMI", label: "Proof needs both" },
 * ]} />
 */

export interface HeroStat {
  value: string;
  unit?: string;
  label: string;
}

interface HeroStatsCardProps {
  stats: HeroStat[];
  className?: string;
  variant?: "default" | "compact" | "route";
}

export function HeroStatsCard({
  stats,
  className = "",
  variant = "default",
}: HeroStatsCardProps) {
  const isRoute = variant === "route";
  const isCompact = variant === "compact" || isRoute;
  // Odd counts ≥3 leave an orphan cell in a 2-col mobile grid; stack them
  // single-column instead. Even counts (2, 4) tile cleanly at 2-col.
  const mobileColumns = isCompact
    ? stats.length === 1
      ? "grid-cols-1"
      : stats.length === 4
        ? "grid-cols-2"
        : "grid-cols-3"
    : stats.length === 1 || (stats.length >= 3 && stats.length % 2 === 1)
      ? "grid-cols-1"
      : "grid-cols-2";
  const desktopColumns =
    stats.length === 1
      ? "md:grid-cols-1"
      : stats.length === 2
        ? "md:grid-cols-2"
        : stats.length === 3
          ? "md:grid-cols-3"
          : "md:grid-cols-4";

  return (
    <div
      className={`grid ${mobileColumns} ${desktopColumns} ${
        isCompact
          ? isRoute
            ? "gap-1.5 rounded-card-md p-2 sm:gap-2.5 sm:p-3"
            : "gap-1.5 rounded-card-md p-2.5 sm:gap-3 sm:p-4"
          : "gap-4 rounded-lg bg-bg-light p-6"
      } ${className}`}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className={
            isCompact
              ? isRoute
                ? "rounded-card-sm bg-white/70 px-2 py-2 text-left sm:px-3 sm:py-2.5"
                : "rounded-card-sm bg-white/70 px-2 py-2.5 text-left sm:px-3 sm:py-3"
              : "text-center"
          }
        >
          <div
            className={
              isCompact
                ? isRoute
                  ? "break-words text-[0.86rem] font-semibold leading-tight text-brand-dark sm:text-lg"
                  : "break-words text-[0.94rem] font-semibold leading-tight text-brand-dark sm:text-xl"
                : "break-words text-3xl font-bold leading-tight text-brand-dark sm:text-3xl md:text-4xl"
            }
          >
            {stat.value}
            {stat.unit && (
              <span className="ml-1 text-sm md:text-base font-medium text-text-secondary">
                {stat.unit}
              </span>
            )}
          </div>
          <div
            className={
              isCompact
                ? isRoute
                  ? "mt-1 text-xs font-semibold uppercase leading-snug tracking-[0.06em] text-text-light sm:mt-1.5"
                  : "mt-1.5 text-xs font-semibold uppercase leading-snug tracking-[0.07em] text-text-light sm:mt-2"
                : "mt-2 text-xs uppercase tracking-[0.14em] text-text-light"
            }
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
