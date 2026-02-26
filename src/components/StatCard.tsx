import { changeBgClass, formatSignedPercent, ui } from "../lib/designTokens";
import { Card } from "./Card";
import { Pill } from "./Pill";

interface StatCardProps {
  title: string;
  value: string | number;
  change24h: number;
  subtitle?: string;
}

export function StatCard({ title, value, change24h, subtitle }: StatCardProps) {
  return (
    <Card className={`p-5 ${ui.brandGlow}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
            {title}
          </p>
          <p className="mt-3 text-4xl font-semibold leading-none text-slate-900 dark:text-slate-100">
            {value}
          </p>
          {subtitle ? <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{subtitle}</p> : null}
        </div>
        <Pill className={`ring-1 ${changeBgClass(change24h)}`} size="md">
          {formatSignedPercent(change24h)} 24h
        </Pill>
      </div>
    </Card>
  );
}
