import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import getInputVariants from "@styles/variants/inputVariants";

export function getTriggerClasses(size, rounded, className) {
  const inputVariants = getInputVariants(size, true);

  if (!inputVariants) return null;

  const triggerClasses = {
    trigger: twMerge(clsx(
      "relative flex flex-nowrap items-center justify-between",
      "w-full", inputVariants?.size,
      "font-sans text-base leading-[20px] font-normal",
      "whitespace-nowrap appearance-none cursor-pointer",
      "text-gray-400 bg-white",
      "outline-none",
      "border border-border",
      rounded ? "rounded-full" : "rounded-none",
      "data-[state=open]:z-10",
      "data-[state=open]:border-primary",
      "data-[disabled]:pointer-events-none",
      "data-[disabled]:cursor-not-allowed",
      "data-[disabled]:opacity-50",
      "transition-all duration-300 ease-in-out",
    ), className),
    valueWrapper: twMerge(clsx(
      "absolute top-0 right-0 bottom-0 left-0",
      "flex items-center py-2.5 px-4",
      "capitalize text-left text-gray-600",
      "outline-none border-px border-transparent",
    )),
    iconWrapper: twMerge(clsx(
      "flex items-center justify-center",
      inputVariants?.size?.iconWrapper,
      "-m-px ml-auto",
      "text-gray-400 rounded-md",
      "transition-al duration-300 ease-in-out"
    )),
  };

  return triggerClasses;
}

export function getContentClasses(position, className) {
  const contentClasses = twMerge(clsx(
    "z-50 relative",
    "min-w-[var(--radix-select-trigger-width)]",
    "p-1 bg-white",
    "border border-gray-200",
    "rounded-none shadow-lg",
    position === "popper" ? [
      "data-[side=top]:-translate-y-1",
      "data-[side=right]:translate-x-1",
      "data-[side=bottom]:translate-y-1",
      "data-[side=left]:-translate-x-1"
    ] : null,
    "data-[state=open]:animate-in",
    "data-[state=open]:fade-in-100",
    "data-[state=open]:duration-300",
    "data-[state=closed]:animate-out",
    "data-[state=closed]:fade-out-0",
    "data-[side=top]:slide-in-from-bottom-2",
    "data-[side=right]:slide-in-from-left-2",
    "data-[side=bottom]:slide-in-from-top-4",
    "data-[side=left]:slide-in-from-right-2",
  ), className);

  return contentClasses;
}

export function getLabelClasses(className) {
  const labelClasses = twMerge(clsx(
    "py-1.5 px-3",
    "font-sans text-sm",
    "font-semibold"
  ), className);

  return labelClasses;
}

export function getItemClasses(className) {
  const itemClasses = {
    item: twMerge(clsx(
      "relative",
      "flex gap-2 items-center justify-between",
      "py-1.5 px-3",
      "select-none outline-none",
      "font-sans text-sm font-medium capitalize",
      "text-gray-400 bg-transparent rounded-md",
      "hover:text-primary hover:bg-primary-100",
      "data-[state=checked]:text-primary",
      "data-[state=checked]:bg-primary-100",
      "data-[disabled]:pointer-events-none",
      "data-[disabled]:opacity-50",
    ), className),
    indicator: twMerge(clsx(
      "absolute right-0",
      "flex items-center justify-center",
      "h-8 px-3"
    ))
  };

  return itemClasses;
}
