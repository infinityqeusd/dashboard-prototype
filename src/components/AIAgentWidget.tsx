import { useEffect, useState } from "react";
import { ui } from "../lib/designTokens";
import { Panel } from "./Panel";
import { Pill } from "./Pill";

interface AIAgentWidgetProps {
  suggestions: string[];
}

type TypingPhase = "typing" | "pause" | "deleting";

const randomBetween = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function getNextPromptIndex(currentIndex: number, total: number) {
  if (total <= 1) {
    return 0;
  }

  let nextIndex = currentIndex;
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * total);
  }
  return nextIndex;
}

export function AIAgentWidget({ suggestions }: AIAgentWidgetProps) {
  const [index, setIndex] = useState(() =>
    suggestions.length > 0 ? Math.floor(Math.random() * suggestions.length) : 0,
  );
  const [typedText, setTypedText] = useState("");
  const [phase, setPhase] = useState<TypingPhase>("typing");
  const [promptTrayDismissed, setPromptTrayDismissed] = useState(false);

  useEffect(() => {
    if (suggestions.length === 0) {
      return;
    }

    const currentPrompt = suggestions[index] ?? "";
    let timeoutId = 0;

    if (phase === "typing") {
      if (typedText.length < currentPrompt.length) {
        timeoutId = window.setTimeout(() => {
          setTypedText(currentPrompt.slice(0, typedText.length + 1));
        }, randomBetween(35, 85));
      } else {
        timeoutId = window.setTimeout(() => {
          setPhase("pause");
        }, randomBetween(900, 1500));
      }
    } else if (phase === "pause") {
      timeoutId = window.setTimeout(() => {
        setPhase("deleting");
      }, randomBetween(320, 650));
    } else if (typedText.length > 0) {
      timeoutId = window.setTimeout(() => {
        setTypedText((prev) => prev.slice(0, -1));
      }, randomBetween(18, 45));
    } else {
      timeoutId = window.setTimeout(() => {
        setIndex((prev) => getNextPromptIndex(prev, suggestions.length));
        setPhase("typing");
      }, randomBetween(180, 320));
    }

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [index, phase, suggestions, typedText]);

  return (
    <Panel
      title="Where to now?"
      subtitle="OpenBook AI agent prompt bar (visual-only)"
      className={`ai-widget-root w-full ${ui.brandGlow}`}
    >
      <div className="space-y-2.5 xl:space-y-2">
        <div className="ai-widget-chips flex flex-wrap items-center gap-2">
          <Pill variant="accent" size="md">
            OpenBook AI
          </Pill>
          <Pill variant="outline" size="md">
            UK equities focus
          </Pill>
        </div>

        <div className="ai-widget-shell rounded-2xl border border-slate-200/90 bg-white p-1.5 xl:p-1.5 shadow-inner shadow-slate-100/70 dark:border-slate-700/90 dark:bg-slate-950 dark:shadow-black/20">
          <div className="ai-widget-input-row flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-2.5 dark:border-slate-800 dark:bg-slate-900">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-brand-50 text-brand-600 ring-1 ring-brand-200 dark:bg-brand-500/12 dark:text-brand-300 dark:ring-brand-500/20">
              AI
            </span>
            <input
              type="text"
              value=""
              readOnly
              placeholder="Ask OpenBook AI about your UK portfolio..."
              className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200 dark:placeholder:text-slate-500"
            />
            <button
              type="button"
              className="rounded-lg bg-brand-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-brand-500"
            >
              Send
            </button>
          </div>

          {!promptTrayDismissed ? (
            <button
              type="button"
              onClick={() => setPromptTrayDismissed(true)}
              className="ai-widget-tray mt-2.5 block w-full rounded-xl border border-slate-200/80 bg-gradient-to-b from-white/90 to-slate-50/90 px-3 py-2 text-left transition hover:border-brand-200 hover:shadow-sm dark:border-slate-800 dark:from-slate-900/85 dark:to-slate-950/85 dark:hover:border-brand-500/20"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                Suggested prompt
              </p>
              <div className="mt-1 flex min-h-5 items-center text-sm text-slate-700 dark:text-slate-200">
                <span className="break-all">{typedText}</span>
                <span
                  className="caret-blink ml-0.5 inline-block h-4 w-[2px] rounded bg-brand-500 align-middle dark:bg-brand-300"
                  aria-hidden="true"
                />
              </div>
              <p className="ai-widget-tray-helper mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                Click to type your own prompt
              </p>
            </button>
          ) : null}
        </div>
      </div>
    </Panel>
  );
}
