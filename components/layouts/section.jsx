import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

export default function Section({
  className = "",
  ...props
}) {
  const sectionClasses = twMerge(
    "relative",
    "py-8 md:py-12 lg:py-16 xl:py-20",
    className
  );

  return (
    <section
      className={sectionClasses}
      {...props}
    />
  );
}

Section.displayName = "Section";

Section.propTypes = {
  className: PropTypes.string
};
