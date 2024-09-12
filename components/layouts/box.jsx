import { forwardRef } from "react";

import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

const Box = forwardRef(function Box({
  uniqueKey,
  className = "",
  ...props
}, ref) {
  const boxClasses = twMerge(className) || undefined;

  return (
    <div
      ref={ref}
      key={uniqueKey}
      className={boxClasses}
      {...props}
    />
  );
});

Box.displayName = "Box";

Box.propTypes = {
  uniqueKey: PropTypes.any,
  className: PropTypes.string
};

export default Box;
