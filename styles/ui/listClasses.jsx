import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import getListVariants from "@styles/variants/listVariants";

export function getListClasses(type, className) {
  const listVariants = getListVariants(type);

  if (!listVariants) return null;

  const listClasses = twMerge(clsx(
    "flex flex-col",
    "p-0 m-0",
    listVariants?.type,
    "list-inside",
  ), className);

  return listClasses;
}

export function getListItemClasses(className) {
  const listItemClasses =
    className ? twMerge(className) : null;

  return listItemClasses;
}
