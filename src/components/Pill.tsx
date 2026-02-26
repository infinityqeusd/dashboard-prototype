import type { HTMLAttributes } from "react";
import { cx } from "../lib/designTokens";

type PillVariant = "neutral" | "accent" | "success" | "danger" | "outline";
type PillSize = "sm" | "md";

interface PillProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: PillVariant;
  size?: PillSize;
}

const variantClasses: Record<PillVariant, string> = {
  neutral:
    "bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700",
  accent:
    "bg-brand-50 text-brand-700 ring-1 ring-brand-200 dark:bg-brand-500/15 dark:text-brand-300 dark:ring-brand-500/25",
  success:
    "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/12 dark:text-emerald-300 dark:ring-emerald-500/20",
  danger:
    "bg-rose-50 text-rose-700 ring-1 ring-rose-200 dark:bg-rose-500/12 dark:text-rose-300 dark:ring-rose-500/20",
  outline:
    "bg-white/75 text-slate-600 ring-1 ring-slate-300 dark:bg-slate-900/50 dark:text-slate-300 dark:ring-slate-600"
};

const sizeClasses: Record<PillSize, string> = {
  sm: "px-2 py-1 text-[11px]",
  md: "px-2.5 py-1.5 text-xs"
};

export function Pill({
  className,
  variant = "neutral",
  size = "sm",
  ...props
}: PillProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1 rounded-full font-medium tracking-wide",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
