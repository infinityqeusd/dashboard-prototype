import type { StoryCategory, StoryItem } from "../data/mockData";
import { cx } from "../lib/designTokens";
import { Panel } from "./Panel";
import { Pill } from "./Pill";

interface StoriesCardProps {
  stories: StoryItem[];
}

const tagClassByCategory: Record<StoryCategory, string> = {
  Earnings:
    "bg-blue-50 text-blue-700 ring-blue-200 dark:bg-blue-500/12 dark:text-blue-300 dark:ring-blue-500/20",
  Macro:
    "bg-violet-50 text-violet-700 ring-violet-200 dark:bg-violet-500/12 dark:text-violet-300 dark:ring-violet-500/20",
  Analyst:
    "bg-cyan-50 text-cyan-700 ring-cyan-200 dark:bg-cyan-500/12 dark:text-cyan-300 dark:ring-cyan-500/20",
  Dividend:
    "bg-emerald-50 text-emerald-700 ring-emerald-200 dark:bg-emerald-500/12 dark:text-emerald-300 dark:ring-emerald-500/20",
  Risk:
    "bg-rose-50 text-rose-700 ring-rose-200 dark:bg-rose-500/12 dark:text-rose-300 dark:ring-rose-500/20"
};

export function StoriesCard({ stories }: StoriesCardProps) {
  return (
    <Panel
      title="YOUR PORTFOLIO TOP STORIES"
      subtitle="Visual-only curated headlines for UK holdings"
      bodyClassName="p-0"
      className="lg:h-full lg:min-h-0"
    >
      <ul className="divide-y divide-slate-200/80 dark:divide-slate-800/90 lg:h-full lg:overflow-y-auto lg:overscroll-contain lg:pr-1">
        {stories.map((story) => (
          <li
            key={story.id}
            className="group cursor-default px-4 py-3 transition hover:bg-slate-50/90 dark:hover:bg-slate-800/30"
          >
            <div className="mb-1.5 flex items-center justify-between gap-3">
              <Pill className={cx("ring-1", tagClassByCategory[story.category])}>{story.category}</Pill>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                {story.source}
              </span>
            </div>
            <p className="text-sm leading-[1.25rem] text-slate-700 transition group-hover:text-slate-900 dark:text-slate-200 dark:group-hover:text-white">
              {story.headline}
            </p>
          </li>
        ))}
      </ul>
    </Panel>
  );
}
