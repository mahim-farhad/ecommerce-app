const getSizeVariant = (size, iconOnly) => {
  const sizeVariants = {
    xs: "h-8 py-1.5 px-3 text-sm leading-[13px]",
    sm: "h-10 py-2 px-3 text-sm leading-[15px]",
    base: "h-12 py-3 px-4 text-sm leading-[17px]",
    lg: "h-14 py-4 px-5 text-base leading-[17px]",
    xl: "h-16 py-5 px-6 text-lg leading-[21px]",
    iconOnly: {
      xs: "w-8 h-8",
      sm: "w-10 h-10",
      base: "w-12 h-12",
      lg: "w-14 h-14",
      xl: "w-16 h-16"
    }
  };

  const sizeVariant =
    iconOnly
      ? sizeVariants?.iconOnly?.[size]
      : sizeVariants?.[size];

  return sizeVariant;
};

function getColorVariant(variant, color) {
  const colorVariants = {
    filled: {
      white: [
        "text-black",
        "bg-white",
        "border-transparent",
        "shadow-none",
      ],
      black: [
        "text-white",
        "bg-black",
        "border-transparent",
        "shadow-none",
      ],
      primary: [
        "text-primary-foreground",
        "bg-primary",
        "border-transparent",
        "shadow-none",
      ],
      secondary: [
        "text-secondary-foreground",
        "bg-secondary",
        "border-transparent",
        "shadow-none",
      ],
      muted: [
        "text-muted-foreground",
        "bg-muted",
        "border-transparent",
        "shadow-none",
      ],
    },
    toned: {
      primary: [
        "text-primary-foreground",
        "bg-primary",
        "border-transparent",
        "shadow-none",
      ],
      secondary: [
        "text-secondary-foreground",
        "bg-secondary",
        "border-transparent",
        "shadow-none",
      ],
      muted: [
        "text-muted-foreground",
        "bg-muted",
        "border-transparent",
        "shadow-none",
      ],
    },
    outlined: {
      black: [
        "text-black",
        "bg-transparent",
        "border-black",
        "shadow-none",
        "hover:text-white",
        "hover:bg-black",
      ],
      primary: [
        "text-primary",
        "bg-transparent",
        "border-primary",
        "shadow-none",
        "hover:text-primary-foreground",
        "hover:bg-primary",
      ],
      secondary: [
        "text-secondary",
        "bg-transparent",
        "border-secondary",
        "shadow-none",
        "hover:text-secondary-foreground",
        "hover:bg-secondary",
      ],
      muted: [
        "text-muted",
        "bg-transparent",
        "border-muted",
        "shadow-none",
        "hover:text-muted-foreground",
        "hover:bg-muted",
      ],
    },
    text: {
      black: [
        "text-black",
        "bg-transparent",
        "border-transparent",
        "shadow-none",
        "hover:text-white",
        "hover:bg-black",
      ],
      primary: [
        "text-primary",
        "bg-transparent",
        "border-transparent",
        "shadow-none",
      ],
      secondary: [
        "text-secondary",
        "bg-transparent",
        "border-transparent",
        "shadow-none",
        "hover:text-secondary-foreground",
        "hover:bg-secondary",
      ],
      muted: [
        "text-muted",
        "bg-transparent",
        "border-transparent",
        "shadow-none",
        "hover:text-white",
        "hover:bg-muted",
      ],
    }
  };

  const colorVariant =
    colorVariants?.[variant]?.[color];

  return colorVariant;
}

export default function getButtonVariants(
  size, iconOnly, variant, color
) {
  const sizeVariant =
    getSizeVariant(size, iconOnly);

  const colorVariant =
    getColorVariant(variant, color);

  if (!sizeVariant || !colorVariant) return null;

  const buttonVariants = {
    size: sizeVariant, color: colorVariant
  };

  return buttonVariants;
}
