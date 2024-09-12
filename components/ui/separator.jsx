"use client";

import { forwardRef } from "react";

import * as SeparatorPrimitive from "@radix-ui/react-separator";

import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

const Separator = forwardRef(function Separator({
  orientation = "horizontal",
  decorative = true,
  className,
  ...props
}, ref) {
  const separatorClasses = twMerge(
    "shrink-0",
    orientation === "horizontal"
      ? "h-[1px] w-full"
      : "h-full w-[1px]",
    "bg-gray-200 dark:bg-gray-800",
    className
  );

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={separatorClasses}
      {...props}
    />
  )
});

Separator.displayName = SeparatorPrimitive.Root.displayName;

Separator.propTypes = {
  className: PropTypes.string
};

export default Separator;
