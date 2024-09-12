import PropTypes from "prop-types";

import { typographyTypes } from "@utils/types";

import getTypographyClasses from "@styles/ui/typographyClasses";

export default function Typography({
  type = "p",
  className = "",
  ...props
}) {
  const Component = type;

  const typographyClasses = getTypographyClasses(type, className);

  const hasValidType = typographyTypes?.types?.[type];

  const isValid = hasValidType;

  if (!isValid) return null;

  return <Component className={typographyClasses}  {...props} />;
}

Typography.displayName = "Typography";

Typography.propTypes = {
  type: PropTypes.oneOf(Object.keys(typographyTypes?.types)),
  className: PropTypes.string
};
