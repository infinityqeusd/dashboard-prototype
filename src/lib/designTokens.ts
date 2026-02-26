export const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");

export const ui = {
  card:
    "rounded-2xl border border-slate-200/70 bg-white/85 shadow-panel backdrop-blur-xl transition-all duration-300 dark:border-slate-700/70 dark:bg-slate-900/80 dark:shadow-panel-dark",
  hover:
    "hover:border-slate-300/80 hover:shadow-lg dark:hover:border-slate-600/80",
  panelHeaderBorder: "border-b border-slate-200/80 dark:border-slate-800/90",
  mutedText: "text-slate-500 dark:text-slate-400",
  strongText: "text-slate-900 dark:text-slate-100",
  brandGlow:
    "ring-1 ring-brand-200/70 dark:ring-brand-500/20 shadow-[0_0_0_1px_rgba(59,130,246,0.08),0_10px_30px_rgba(59,130,246,0.08)] dark:shadow-[0_0_0_1px_rgba(59,130,246,0.12),0_14px_34px_rgba(30,64,175,0.28)]"
} as const;

export const formatSignedPercent = (value: number) =>
  `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;

export const changeTextClass = (value: number) =>
  value >= 0
    ? "text-emerald-600 dark:text-emerald-400"
    : "text-rose-600 dark:text-rose-400";

export const changeBgClass = (value: number) =>
  value >= 0
    ? "bg-emerald-50 text-emerald-700 ring-emerald-200/70 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/20"
    : "bg-rose-50 text-rose-700 ring-rose-200/70 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-500/20";
