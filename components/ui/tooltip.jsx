"use client";

import { forwardRef } from "react";

import TooltipPrimitive from "@radix-ui/react-tooltip";

import PropTypes from "prop-types";

import getTooltipClasses from "@styles/ui/tooltipClasses";

export const Tooltip = TooltipPrimitive.Root;

export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = forwardRef(({
  sideOffset = 4,
  className = "",
  ...props
}, ref) => {
  const tooltipClasses = getTooltipClasses(className);

  return (
    <TooltipPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={tooltipClasses}
      {...props}
    />
  );
});

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

TooltipContent.propTypes = {
  sideOffset: PropTypes.number,
  className: PropTypes.string
};
