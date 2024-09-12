import PropTypes from "prop-types";

import { listTypes } from "@utils/types";

import {
  getListClasses, getListItemClasses
} from "@styles/ui/listClasses";

export function List({
  type = "ul",
  className = "",
  ...props
}) {
  const Component = type;

  const listClasses = getListClasses(type, className);

  const isValid = listTypes?.types?.[type];

  if (!isValid) return null;

  return (
    <Component
      className={listClasses}
      {...props}
    />
  );
}

List.displayName = "List";

List.propTypes = {
  type: PropTypes.oneOf(Object.keys(listTypes?.types)),
  className: PropTypes.string
};

export function ListItem({
  className = "",
  ...props
}) {
  const listItemClasses = getListItemClasses(className);

  return (
    <li
      className={listItemClasses}
      {...props}
    />
  );
}

ListItem.displayName = "ListItem";

ListItem.propTypes = {
  className: PropTypes.string,
};
