import { AIAgentWidget } from "../components/AIAgentWidget";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";
import { Panel } from "../components/Panel";
import { Pill } from "../components/Pill";
import { SparklinePlaceholder } from "../components/SparklinePlaceholder";
import { StatCard } from "../components/StatCard";
import { StoriesCard } from "../components/StoriesCard";
import { TickerRibbon } from "../components/TickerRibbon";
import type { ThemeMode } from "../components/ThemeToggle";
import {
  aiSuggestions,
  mostSearchedStocks,
  portfolioHeadlineStats,
  portfolioScore,
  portfolioStories,
  tickerRibbonItems,
  upcomingDividends,
  welcomeStats
} from "../data/mockData";
import { changeBgClass, changeTextClass, cx, formatSignedPercent, ui } from "../lib/designTokens";

interface PortfolioProps {
  theme: ThemeMode;
  onToggleTheme: () => void;
}

const timeRanges = ["1W", "1M", "3M", "1Y"] as const;

function WelcomeCard() {
  return (
    <Card className={`overflow-hidden p-5 ${ui.brandGlow}`}>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            Portfolio dashboard
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-3xl">
            Welcome back Jack
          </h1>
          <div className="mt-3 flex items-center gap-2 text-sm">
            <span className="text-slate-600 dark:text-slate-300">{portfolioHeadlineStats.totalValue}</span>
            <span className={cx("font-semibold", changeTextClass(portfolioHeadlineStats.dayChange))}>
              {portfolioHeadlineStats.pnl}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {welcomeStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200/80 bg-white/90 px-3 py-2 dark:border-slate-700/70 dark:bg-slate-950/60"
            >
              <p className="text-[11px] uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
              <p className="mt-1 text-sm font-semibold text-slate-900 dark:text-slate-100">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function PortfolioChartPlaceholder() {
  const linePoints =
    "0,130 45,122 85,118 130,98 175,106 220,92 265,80 310,88 355,62 400,72 445,54 490,60 535,38 580,44";

  return (
    <div className="relative h-52 overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-4 sm:h-56 lg:h-60 dark:border-slate-800 dark:bg-slate-950/40">
      <div className="chart-grid absolute inset-0 opacity-70 dark:opacity-40" />
      <div className="absolute inset-x-4 top-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">Total value</p>
          <p className="mt-1 text-2xl font-semibold text-slate-900 dark:text-slate-100">
            {portfolioHeadlineStats.totalValue}
          </p>
        </div>
        <Pill className={`ring-1 ${changeBgClass(portfolioHeadlineStats.dayChange)}`} size="md">
          {formatSignedPercent(portfolioHeadlineStats.dayChange)}
        </Pill>
      </div>

      <svg viewBox="0 0 600 180" className="absolute inset-x-4 bottom-4 h-32 w-[calc(100%-2rem)] sm:h-36 lg:h-40">
        <defs>
          <linearGradient id="chartGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="60%" stopColor="#1f7dff" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
          <linearGradient id="chartFill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(31,125,255,0.24)" />
            <stop offset="100%" stopColor="rgba(31,125,255,0)" />
          </linearGradient>
        </defs>

        <path d={`M ${linePoints} L 580,180 L 0,180 Z`} fill="url(#chartFill)" opacity="0.9" />
        <polyline
          points={linePoints}
          fill="none"
          stroke="url(#chartGlow)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]"
        />
        <circle cx="535" cy="38" r="5.5" fill="#ffffff" stroke="#34d399" strokeWidth="3" />
      </svg>
    </div>
  );
}

function PortfolioOverviewPanel() {
  return (
    <Panel
      title="Portfolio overview"
      subtitle="Visual chart placeholder for holdings performance"
      headerRight={
        <div className="flex items-center gap-1 rounded-xl border border-slate-200/80 bg-white/70 p-1 dark:border-slate-700/70 dark:bg-slate-900/60">
          {timeRanges.map((range) => (
            <button
              key={range}
              type="button"
              className={cx(
                "rounded-lg px-3 py-1.5 text-xs font-medium transition",
                range === "1M"
                  ? "bg-brand-600 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white",
              )}
            >
              {range}
            </button>
          ))}
        </div>
      }
      className="h-full min-h-0"
    >
      <PortfolioChartPlaceholder />
    </Panel>
  );
}

function MostSearchedPanel() {
  return (
    <Panel
      title="Most searched UK stocks on Reddit/Stocktwits"
      subtitle="Visual sentiment leaderboard (mock mentions)"
      bodyClassName="p-0"
      className="h-full min-h-0"
    >
      <div className="h-full divide-y divide-slate-200/80 overflow-y-auto overscroll-contain pr-1 dark:divide-slate-800/90">
        {mostSearchedStocks.map((item) => (
          <div
            key={item.ticker}
            className="grid grid-cols-[36px_minmax(0,1fr)_auto_auto] items-center gap-3 px-4 py-3 transition hover:bg-slate-50/80 dark:hover:bg-slate-800/30"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {item.rank}
            </div>

            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.ticker}</p>
              <p className="truncate text-xs text-slate-500 dark:text-slate-400">{item.name}</p>
            </div>

            <SparklinePlaceholder seed={item.rank} positive={item.mentionsDelta >= 0} />

            <div className="text-right">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{item.mentions}</p>
              <p
                className={cx(
                  "text-xs font-medium",
                  item.mentionsDelta >= 0
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-rose-600 dark:text-rose-400",
                )}
              >
                mentions {item.mentionsDelta >= 0 ? "up" : "down"} {Math.abs(item.mentionsDelta)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function UpcomingDividendsPanel() {
  return (
    <Panel
      title="Upcoming dividends"
      subtitle="UK holdings dividend calendar (mock)"
      bodyClassName="p-0"
      className="h-full min-h-0"
    >
      <div className="h-full overflow-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="sticky top-0 z-10 border-b border-slate-200/80 bg-slate-50/90 text-[11px] uppercase tracking-[0.14em] text-slate-500 backdrop-blur dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400">
              <th className="px-4 py-3 font-medium">Ticker</th>
              <th className="px-4 py-3 font-medium">Ex-div date</th>
              <th className="px-4 py-3 font-medium">Pay date</th>
              <th className="px-4 py-3 font-medium">Yield</th>
              <th className="px-4 py-3 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {upcomingDividends.map((row) => (
              <tr
                key={`${row.ticker}-${row.exDivDate}`}
                className="border-b border-slate-100/90 text-sm transition hover:bg-slate-50/80 dark:border-slate-800/60 dark:hover:bg-slate-800/30"
              >
                <td className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100">{row.ticker}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{row.exDivDate}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{row.payDate}</td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-500/12 dark:text-emerald-300 dark:ring-emerald-500/20">
                    {row.yieldPct.toFixed(1)}%
                  </span>
                </td>
                <td className="px-4 py-3 font-medium text-slate-700 dark:text-slate-200">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

export function Portfolio({ theme, onToggleTheme }: PortfolioProps) {
  return (
    <div className="h-[100dvh] overflow-hidden bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div className="app-shell relative flex h-full min-h-0 flex-col overflow-hidden">
        <div className="shrink-0">
          <Navbar theme={theme} onToggleTheme={onToggleTheme} />
        </div>
        <div className="shrink-0">
          <TickerRibbon items={tickerRibbonItems} />
        </div>

        <main className="flex-1 min-h-0 overflow-hidden px-4 pb-4 pt-4 sm:px-6 lg:px-8">
          <div className="flex h-full min-h-0 flex-col gap-4 overflow-y-auto xl:grid xl:grid-rows-[minmax(0,1fr)_minmax(0,18rem)] xl:overflow-hidden">
            <div className="grid min-h-0 items-stretch gap-4 xl:grid-cols-[340px_minmax(0,1fr)]">
              <aside className="grid min-h-0 gap-4 xl:grid-rows-[auto_minmax(0,1fr)]">
                <StatCard
                  title="Portfolio Score"
                  value={portfolioScore.score}
                  change24h={portfolioScore.change24h}
                  subtitle={portfolioScore.label}
                />
                <StoriesCard stories={portfolioStories} />
              </aside>

              <section className="grid min-h-0 gap-4 xl:grid-rows-[auto_minmax(0,1fr)_auto]">
                <WelcomeCard />
                <div className="min-h-0">
                  <PortfolioOverviewPanel />
                </div>
                <div className="min-h-0">
                  <AIAgentWidget suggestions={aiSuggestions} />
                </div>
              </section>
            </div>

            <div className="grid min-h-0 gap-4 xl:grid-cols-2">
              <MostSearchedPanel />
              <UpcomingDividendsPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
