import clsx from "clsx";

import { twMerge } from "tailwind-merge";

import getTypographyVariants from
  "@styles/variants/typographyVariants";

export default function getTypographyClasses(
  type, className
) {
  const typographyVariants =
    getTypographyVariants(type);

  if (!typographyVariants) return null;

  const typographyClasses = twMerge(clsx(
    typographyVariants.type,
  ), className);

  return typographyClasses;
}
