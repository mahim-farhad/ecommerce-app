import clsx from "clsx";

import { twMerge } from "tailwind-merge";

export default function getLabelClasses(className) {
  const labelClasses = twMerge(clsx(
    "text-sm leading-none font-medium",
    "peer-disabled:cursor-not-allowed",
    "peer-disabled:opacity-70"
  ), className);

  return { labelClasses };
}
