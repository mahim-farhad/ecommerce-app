import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

export function Grid({
  className = "",
  ...props
}) {
  const gridClasses = twMerge(
    "grid",
    className
  );

  return (
    <div
      className={gridClasses}
      {...props}
    />
  );
}

Grid.displayName = "Grid";

Grid.propTypes = {
  className: PropTypes.string,
};

export function GridItem({
  uniqueKey,
  className = "",
  ...props
}) {
  const gridItemClasses = twMerge(className) || undefined;

  return (
    <div
      key={uniqueKey}
      className={gridItemClasses}
      {...props}
    />
  );
}

GridItem.displayName = "GridItem";

GridItem.propTypes = {
  uniqueKey: PropTypes.any,
  className: PropTypes.string,
};
