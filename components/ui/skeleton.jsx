import clsx from "clsx";

import Box from "@components/layouts/box";

export function Skeleton({
  className,
  ...props
}) {
  return (
    <Box
      className={clsx(
        "bg-gray-100 dark:bg-gray-800",
        "rounded-md",
        "animate-pulse",
        className
      )}
      {...props}
    />
  );
}
