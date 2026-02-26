import { cx } from "../lib/designTokens";
import { Pill } from "./Pill";
import { ThemeToggle, type ThemeMode } from "./ThemeToggle";

interface NavbarProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

type NavItem = {
  label: string;
  locked?: boolean;
  active?: boolean;
};

const navItems: NavItem[] = [
  { label: "News", locked: true },
  { label: "Competition", locked: true },
  { label: "Stock Screener" },
  { label: "Portfolio", active: true },
  { label: "Learn" },
  { label: "Account" }
];

function LockIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
      <path
        d="M6.75 8V6.75a3.25 3.25 0 1 1 6.5 0V8m-7.5 0h8.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.75.75h-8.5a.75.75 0 0 1-.75-.75v-5.5A.75.75 0 0 1 5.75 8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavButton({ item }: { item: NavItem }) {
  return (
    <button
      type="button"
      className={cx(
        "inline-flex shrink-0 snap-start items-center gap-1 rounded-xl px-2.5 py-1.5 text-sm font-medium transition xl:px-2.5 xl:py-1.5",
        item.active
          ? "bg-brand-50 text-brand-700 ring-1 ring-brand-200 dark:bg-brand-500/12 dark:text-brand-300 dark:ring-brand-500/20"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white",
      )}
    >
      {item.locked ? <LockIcon /> : null}
      <span>{item.label}</span>
      {item.active ? <Pill variant="accent">Active</Pill> : null}
    </button>
  );
}

export function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const leftItems = navItems.slice(0, 3);
  const rightItems = navItems.slice(3);

  const logo = (
    <div className="mx-1 shrink-0">
      <div className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-400 px-3 py-1.5 text-white shadow-md">
        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/20 text-xs font-bold">
          OB
        </div>
        <div className="leading-tight">
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/80">OpenBook</p>
          <p className="text-xs font-semibold">Analytics</p>
        </div>
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-30 px-4 pt-3 sm:px-6 lg:px-8">
      <div className="rounded-2xl border border-slate-200/80 bg-white/85 px-3 py-2 shadow-panel backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/75 dark:shadow-panel-dark">
        <div className="flex items-center justify-between gap-3 xl:hidden">
          <div className="relative min-w-0 flex-1">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-5 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-slate-950 dark:via-slate-950/70" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-5 bg-gradient-to-l from-white via-white/70 to-transparent dark:from-slate-950 dark:via-slate-950/70" />
            <div className="flex min-w-0 flex-1 items-center gap-2 overflow-x-auto pb-1 pt-1 pl-1 pr-4 [scrollbar-width:none] snap-x snap-mandatory touch-pan-x [&::-webkit-scrollbar]:hidden">
            {leftItems.map((item) => (
              <NavButton key={item.label} item={item} />
            ))}

            {logo}

            {rightItems.map((item) => (
              <NavButton key={item.label} item={item} />
            ))}
            </div>
          </div>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <div className="hidden xl:flex xl:items-center xl:gap-3">
          <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-2">
              {leftItems.map((item) => (
                <NavButton key={item.label} item={item} />
              ))}
            </div>

            <div className="shrink-0">{logo}</div>

            <div className="flex min-w-0 items-center gap-2">
              {rightItems.map((item) => (
                <NavButton key={item.label} item={item} />
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      </div>
    </header>
  );
}
