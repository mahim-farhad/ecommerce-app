import clsx from "clsx";

import { twMerge } from "tailwind-merge";

export default function getTooltipClasses(className) {
  const contentClasses = twMerge(clsx(
    "z-50",
    "py-1.5 px-3",
    "overflow-hidden",
    "font-sans text-sm",
    "text-slate-950 dark:text-slate-50",
    "bg-white dark:bg-slate-950",
    "border",
    "border-slate-200 dark:border-slate-800",
    "rounded-none",
    "shadow-md",
    "animate-in fade-in-0 zoom-in-95",
    "data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-0",
    "data-[state=closed]:zoom-out-95",
    "data-[side=top]:slide-in-from-bottom-2",
    "data-[side=right]:slide-in-from-left-2",
    "data-[side=left]:slide-in-from-right-2",
    "data-[side=bottom]:slide-in-from-top-2"
  ), className);

  return contentClasses;
}
