import { cx } from "../lib/designTokens";

export type ThemeMode = "light" | "dark";

interface ThemeToggleProps {
  theme: ThemeMode;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={onToggle}
      className={cx(
        "inline-flex items-center gap-2 rounded-full border px-2 py-1.5 text-xs font-medium transition",
        "border-slate-300/80 bg-white/80 text-slate-700 shadow-sm hover:border-brand-300 hover:text-brand-700",
        "dark:border-slate-600 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-brand-500/50 dark:hover:text-brand-300",
      )}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
    >
      <span className="text-[11px] tracking-wide">{isDark ? "Dark" : "Light"}</span>
      <span
        className={cx(
          "relative inline-flex h-6 w-12 items-center rounded-full border transition",
          isDark ? "border-slate-700 bg-slate-800" : "border-brand-200 bg-brand-100/80",
        )}
      >
        <span
          className={cx(
            "absolute inline-flex h-4.5 w-4.5 items-center justify-center rounded-full text-[9px] font-semibold shadow transition-transform",
            isDark
              ? "translate-x-6 bg-slate-100 text-slate-700"
              : "translate-x-1 bg-white text-brand-600",
          )}
        >
          {isDark ? "D" : "L"}
        </span>
      </span>
    </button>
  );
}
