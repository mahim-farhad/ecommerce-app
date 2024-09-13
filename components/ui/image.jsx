import NextImage from "next/image";

import PropTypes from "prop-types";

import { twMerge } from "tailwind-merge";

export default function Image({
  src,
  alt,
  className = "",
  ...props
}) {
  const imgClasses = twMerge("w-full", className);

  if (!src) return null;

  return (
    <NextImage
      src={src}
      alt={alt}
      loading="lazy"
      width={400}
      height={400}
      className={imgClasses}
      {...props}
    />
  );
}

Image.displayName = "Image";

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string
};
