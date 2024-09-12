import clsx from "clsx";

import { twMerge } from "tailwind-merge";

export default function getSwitchClasses(className) {
  const switchClasses = twMerge(clsx(
    "peer inline-flex items-center shrink-0",
    "w-11 h-6",
    "cursor-pointer",
    "border-2 border-transparent",
    "rounded-full",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-slate-950",
    "focus-visible:ring-offset-2",
    "focus-visible:ring-offset-white",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "data-[state=checked]:bg-slate-900",
    "data-[state=unchecked]:bg-slate-200",
    "dark:focus-visible:ring-slate-300",
    "dark:focus-visible:ring-offset-slate-950",
    "dark:data-[state=checked]:bg-slate-50",
    "dark:data-[state=unchecked]:bg-slate-800",
  ), className);

  const switchThumbClasses = twMerge(clsx(
    "block",
    "w-5 h-5",
    "pointer-events-none",
    "bg-white dark:bg-slate-950",
    "rounded-full",
    "shadow-lg",
    "ring-0",
    "transition-transform",
    "data-[state=checked]:translate-x-5",
    "data-[state=unchecked]:translate-x-0",
  ), className);

  return { switchClasses, switchThumbClasses };
}
