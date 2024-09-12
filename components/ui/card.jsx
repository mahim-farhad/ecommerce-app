import { forwardRef } from "react";

import clsx from "clsx";

import Typography from "@components/ui/typography";

import Box from "@components/layouts/box";

export const Card = forwardRef(function Card({
  className = "",
  ...props
}, ref) {
  return (
    <div
      ref={ref}
      className={clsx(
        "relative",
        className
      )}
      {...props}
    />
  );
});

Card.displayName = "Card";

export const CardHeader = forwardRef(function CardHeader({
  className = "",
  ...props
}, ref) {
  return (
    <div
      ref={ref}
      className={clsx(
        className
      )}
      {...props}
    />
  );
});

CardHeader.displayName = "CardHeader";

export const CardTitle = forwardRef(function CardTitle({
  className = "",
  ...props
}, ref) {
  return (
    <Typography
      ref={ref}
      type="h6"
      className={clsx(
        "leading-none font-semibold",
        "tracking-tight",
        className
      )}
      {...props}
    />
  );
});

CardTitle.displayName = "CardTitle";

export const CardDescription = forwardRef(function CardDescription({
  className = "",
  ...props
}, ref) {
  return (
    <Typography
      ref={ref}
      className={clsx(
        "text-sm",
        "text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  );
});

CardDescription.displayName = "CardDescription";

export const CardContent = forwardRef(function CardContent({
  className = "",
  ...props
}, ref) {
  return (
    <Box
      ref={ref}
      className={clsx(
        className
      )}
      {...props}
    />
  );
});

CardContent.displayName = "CardContent";

export const CardFooter = forwardRef(function CardFooter({
  className = "",
  ...props
}, ref) {
  return (
    <divBox
      ref={ref}
      className={clsx(
        "flex items-center",
        className
      )}
      {...props}
    />
  );
});

CardFooter.displayName = "CardFooter";
