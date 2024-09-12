import { forwardRef } from "react";

import * as LabelPrimitive from "@radix-ui/react-label";

import getLabelClasses from "@styles/inputs/labelClasses";

const Label = forwardRef(function Label({
  className = "",
  ...props
}, ref) {
  const labelClasses = getLabelClasses(className);

  return (
    <LabelPrimitive.Root
      ref={ref}
      className={labelClasses}
      {...props}
    />
  )
});

Label.displayName = LabelPrimitive.Root.displayName;

export default Label;
