import type { HTMLAttributes } from "react";
import { cx, ui } from "../lib/designTokens";

type CardProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return <div className={cx(ui.card, ui.hover, className)} {...props} />;
}
