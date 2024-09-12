import { forwardRef } from "react";

import PropTypes from "prop-types";

import { icons } from "lucide-react";

import { iconTypes } from "@utils/types";

import getIconClasses from "@styles/ui/iconClasses";

const Icon = forwardRef(function Icon({
  name,
  size = "base",
  className = "",
  ...props
}, ref) {
  const iconClasses = getIconClasses(size, className);

  const Icon = icons?.[name];

  const hasValidSize = iconTypes?.sizes?.[size];

  const isValid = Icon && hasValidSize;

  if (!isValid) return null;

  return (
    <Icon
      ref={ref}
      className={iconClasses}
      {...props}
    />
  );
});

Icon.displayName = "Icon";

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(iconTypes?.sizes)),
  className: PropTypes.string
};

export default Icon;
