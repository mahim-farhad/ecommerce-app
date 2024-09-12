import { forwardRef } from "react";

import PropTypes from "prop-types";

import { inputTypes } from "@utils/types";

import getInputClasses from "@styles/inputs/inputClasses";

const Input = forwardRef(function Input({
  type = "text",
  size = "base",
  rounded = false,
  className = "",
  ...props
}, ref) {
  const inputClasses = getInputClasses(
    size, rounded, className
  );

  const hasValidType = inputTypes?.types?.[type];
  const hasValidSize = inputTypes?.sizes?.[size];

  const isValid = hasValidType && hasValidSize;

  if (!isValid) return null;

  return (
    <input
      ref={ref}
      type={type}
      className={inputClasses}
      {...props}
    />
  );
});

Input.displayName = "Input";

Input.propTypes = {
  type: PropTypes.oneOf(Object.keys(inputTypes?.types)).isRequired,
  size: PropTypes.oneOf(Object.keys(inputTypes?.sizes)),
  rounded: PropTypes.bool,
  className: PropTypes.string
};

export default Input;
