import type { HTMLAttributes, ReactNode } from "react";
import { cx, ui } from "../lib/designTokens";
import { Card } from "./Card";

interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  headerRight?: ReactNode;
  bodyClassName?: string;
}

export function Panel({
  title,
  subtitle,
  headerRight,
  className,
  bodyClassName,
  children,
  ...props
}: PanelProps) {
  return (
    <Card className={cx("flex min-h-0 flex-col overflow-hidden", className)} {...props}>
      <div className={cx("flex items-start justify-between gap-3 px-4 py-3 xl:px-4 xl:py-3", ui.panelHeaderBorder)}>
        <div>
          <h2 className={cx("text-sm font-semibold tracking-wide", ui.strongText)}>{title}</h2>
          {subtitle ? <p className={cx("panel-subtitle mt-0.5 text-xs", ui.mutedText)}>{subtitle}</p> : null}
        </div>
        {headerRight ? <div className="shrink-0">{headerRight}</div> : null}
      </div>
      <div className={cx("min-h-0 flex-1 px-4 py-3 xl:px-4 xl:py-3", bodyClassName)}>{children}</div>
    </Card>
  );
}
