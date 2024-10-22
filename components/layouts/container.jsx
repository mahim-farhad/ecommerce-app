import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

export default function Container({
  fluid = true,
  className = "",
  ...props
}) {
  const containerClasses = twMerge(
    "w-full",
    fluid ? "max-w-full" : "max-w-screen-2xl",
    "px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20",
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
