import { forwardRef } from "react";

import { Slot } from "@radix-ui/react-slot";

import { ChevronRight, MoreHorizontal } from "lucide-react";

import clsx from "clsx";

export const Breadcrumb = forwardRef(function Breadcrumb({
  ...props
}, ref) {
  return (
    <nav
      ref={ref}
      aria-label="breadcrumb"
      {...props}
    />
  );
});

Breadcrumb.displayName = "Breadcrumb";

export const BreadcrumbList = forwardRef(function BreadcrumbList({
  className = "",
  ...props
}, ref) {
  return (
    <ol
      ref={ref}
      className={clsx(
        "flex flex-wrap items-center",
        "gap-1.5 sm:gap-2.5",
        "text-sm break-words",
        "text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  );
});

BreadcrumbList.displayName = "BreadcrumbList";

export const BreadcrumbItem = forwardRef(function BreadcrumbItem({
  className = "",
  ...props
}, ref) {
  return (
    <li
      ref={ref}
      className={clsx(
        "inline-flex items-center gap-1.5",
        className
      )}
      {...props}
    />
  );
});

BreadcrumbItem.displayName = "BreadcrumbItem";

export const BreadcrumbLink = forwardRef(function BreadcrumbLink({
  asChild = false,
  className = "",
  ...props
}, ref) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      ref={ref}
      className={clsx(
        "transition-colors",
        "hover:text-gray-950 dark:hover:text-gray-50",
        className
      )}
      {...props}
    />
  );
});

BreadcrumbLink.displayName = "BreadcrumbLink";

export const BreadcrumbPage = forwardRef(function BreadcrumbPage({
  className = "",
  ...props
}, ref) {
  return (
    <span
      ref={ref}
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={clsx(
        "font-normal",
        "text-gray-950 dark:text-gray-50",
        className
      )}
      {...props}
    />
  );
});

BreadcrumbPage.displayName = "BreadcrumbPage";

export function BreadcrumbSeparator({
  children,
  className = "",
  ...props
}) {
  return (
    <li
      role="presentation"
      aria-hidden="true"
      className={clsx("[&>svg]:size-3.5", className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
};

BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export function BreadcrumbEllipsis({
  className = "",
  ...props
}) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={clsx(
        "flex h-9 w-9 items-center justify-center",
        "w-9 h-9",
        className
      )}
      {...props}
    >

      <MoreHorizontal className="h-4 w-4" />

      <span className="sr-only">More</span>
    </span>
  );
};

BreadcrumbEllipsis.displayName = "BreadcrumbElipssis";
