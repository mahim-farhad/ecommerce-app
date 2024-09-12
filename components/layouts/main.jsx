import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

export default function Main({
  className = "",
  ...props
}) {
  const mainClasses = twMerge(className) || undefined;

  return (
    <main
      className={mainClasses}
      {...props}
    />
  );
}

Main.displayName = "Main";

Main.propTypes = {
  className: PropTypes.string
};
