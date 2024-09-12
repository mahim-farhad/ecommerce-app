import { forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";

import PropTypes from "prop-types";

import { buttonTypes } from "@utils/types";

import getButtonClasses from "@styles/ui/buttonClasses";

const Button = forwardRef(function Button({
  type = "button",
  asChild = false,
  size = "base",
  iconOnly = false,
  variant = "filled",
  color = "primary",
  rounded = false,
  className = "",
  ...props
}, ref) {
  const Component = asChild ? Slot : "button";

  const buttonClasses = getButtonClasses(
    size, iconOnly, variant, color,
    rounded, className
  );

  const hasValidType = buttonTypes?.types?.[type];
  const hasValidSize = buttonTypes?.sizes?.[size];
  const hasValidVariant =
    buttonTypes?.variants?.[variant] &&
    buttonTypes?.colors?.[color];

  const isValid =
    hasValidType && hasValidSize && hasValidVariant;

  if (!isValid) return null;

  return (
    <Component
      ref={ref}
      type={type}
      className={buttonClasses}
      {...props}
    />
  );
});

Button.displayName = "Button";

Button.propTypes = {
  type: PropTypes.oneOf(Object.keys(buttonTypes?.types)),
  asChild: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(buttonTypes?.sizes)),
  iconOnly: PropTypes.bool,
  variant: PropTypes.oneOf(Object.keys(buttonTypes?.variants)),
  color: PropTypes.oneOf(Object.keys(buttonTypes?.colors)),
  rounded: PropTypes.bool,
  className: PropTypes.string
};

export default Button;
