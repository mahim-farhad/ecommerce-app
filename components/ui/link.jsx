"use client";

import { forwardRef } from "react";

import NextLink from "next/link";
import { useRouter } from "next/navigation";

import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

const Link = forwardRef(function Link({
  href = "/",
  transition = false,
  className = "",
  ...props
}, ref) {
  const router = useRouter();

  const linkClasses = twMerge(
    "block",
    "font-sans text-base leading-[17px] font-normal",
    "transition-all duration-200 ease-in-out",
    className
  );

  function handleClick(event) {
    event.preventDefault();

    if (!transition && !document.startViewTransition) {
      return null;
    } else {
      document.startViewTransition(() => {
        router.push(href);
      });
    }
  }

  return (
    <NextLink
      ref={ref}
      href={href}
      className={linkClasses}
      onClick={transition ? handleClick : undefined}
      {...props}
    />
  );
});

Link.displayName = "Link";

Link.propTypes = {
  href: PropTypes.string,
  transition: PropTypes.bool,
  className: PropTypes.string
};

export default Link;
