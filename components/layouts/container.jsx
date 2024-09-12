import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

export default function Container({
  className = "",
  ...props
}) {
  const containerClasses = twMerge(
    "container",
    "px-4 sm:px-4",
    "mx-auto",
    className
  );

  return (
    <div
      className={containerClasses}
      {...props}
    />
  );
}

Container.displayName = "Container";

Container.propTypes = {
  className: PropTypes.string
};
