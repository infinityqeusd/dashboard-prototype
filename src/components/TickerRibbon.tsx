import type { TickerItem } from "../data/mockData";
import { changeTextClass, cx, formatSignedPercent } from "../lib/designTokens";

interface TickerRibbonProps {
  items: TickerItem[];
}

export function TickerRibbon({ items }: TickerRibbonProps) {
  const loopItems = [...items, ...items];

  return (
    <section className="px-4 pt-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 py-3 shadow-panel backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-950/60 dark:shadow-panel-dark">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-slate-950 dark:via-slate-950/60" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white via-white/70 to-transparent dark:from-slate-950 dark:via-slate-950/60" />

        <div className="ticker-track flex w-max items-center gap-2 px-2 py-1 hover:[animation-play-state:paused]">
          {loopItems.map((item, index) => (
            <div
              key={`${item.ticker}-${index}`}
              className="relative z-0 flex shrink-0 items-center gap-2 rounded-xl border border-slate-200/70 bg-white/90 px-3 py-2 text-sm shadow-sm transition duration-200 hover:z-20 hover:scale-[1.015] hover:shadow-md dark:border-slate-700/80 dark:bg-slate-900/90"
            >
              <span className="font-semibold text-slate-900 dark:text-slate-100">{item.ticker}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">{item.name}</span>
              <span className={cx("text-xs font-semibold", changeTextClass(item.change24h))}>
                {formatSignedPercent(item.change24h)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
