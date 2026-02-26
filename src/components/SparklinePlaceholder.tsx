import { cx } from "../lib/designTokens";

interface SparklinePlaceholderProps {
  seed: number;
  positive?: boolean;
  className?: string;
}

function buildSparkline(seed: number) {
  const points = Array.from({ length: 14 }, (_, index) => {
    const x = (index / 13) * 100;
    const wave = Math.sin((index + seed) * 0.8) * 10;
    const drift = ((seed % 5) - 2) * 1.2;
    const zig = (index % 2 === 0 ? 4 : -3) + (seed % 3);
    const y = 24 - wave - drift - zig;
    return `${x},${Math.max(4, Math.min(44, y)).toFixed(1)}`;
  });

  return points.join(" ");
}

export function SparklinePlaceholder({
  seed,
  positive = true,
  className
}: SparklinePlaceholderProps) {
  return (
    <div className={cx("h-10 w-24", className)} aria-hidden="true">
      <svg viewBox="0 0 100 48" className="h-full w-full">
        <path
          d="M0 36 H100"
          stroke="currentColor"
          className="text-slate-200 dark:text-slate-700"
          strokeWidth="1"
          fill="none"
          strokeDasharray="2 4"
        />
        <polyline
          points={buildSparkline(seed)}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={positive ? "text-emerald-500 dark:text-emerald-400" : "text-rose-500 dark:text-rose-400"}
        />
      </svg>
    </div>
  );
}
