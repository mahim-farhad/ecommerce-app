import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import getInputVariants from "@styles/variants/inputVariants";

export default function getInputClasses(size, rounded, className) {
  const inputVariants = getInputVariants(size);

  if (!inputVariants) return null;

  const inputClasses = twMerge(clsx(
    "w-full", inputVariants?.size,
    "font-sans text-base font-normal",
    "whitespace-nowrap appearance-none cursor-pointer",
    "text-gray-400 dark:text-gray-400",
    "bg-white dark:bg-white",
    "outline-none",
    "border border-border",
    rounded ? "rounded-full" : "rounded-none",
    "focus:z-10 focus:border-primary focus:dark:border-primary",
    "valid:border-error dark:valid:border-error",
    "invalid:border-error dark:invalid:border-error",
    "disabled:pointer-events-none",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50",
    "transition-all duration-150 ease-in-out"
  ), className);

  return inputClasses;
}
