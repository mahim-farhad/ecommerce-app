import PropTypes from "prop-types";

import { iconTypes } from "@utils/types";

import getIconClasses from "@styles/ui/iconClasses";

import getSVGIcons from "@utils/icons";

export default function CustomIcon({
  name,
  size = "base",
  className = "",
  ...props
}) {
  const iconClasses = getIconClasses(size, className);

  const svgIcons = getSVGIcons(iconClasses, props);
  const icon = svgIcons?.[name];

  const hasValidSize = iconTypes?.sizes?.[size];

  const isValid = icon && hasValidSize;

  if (!isValid) return null;

  return icon;
};

CustomIcon.displayName = "Icon";

CustomIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(iconTypes?.sizes)),
  className: PropTypes.string
};
