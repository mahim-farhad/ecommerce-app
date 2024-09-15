export default function getTypographyVariants(type) {
  const typeVariants = {
    h1: [
      "font-serif",
      "text-4xl lg:text-7xl leading-[1.1]",
      "font-bold uppercase tracking-wide",
      "text-foreground"
    ],
    h2: [
      "font-serif",
      "text-3xl lg:text-5xl leading-[1.25]",
      "font-bold uppercase tracking-wide",
      "text-foreground"
    ],
    h3: [
      "font-serif",
      "text-2xl lg:text-4xl leading-[1.5]",
      "font-bold uppercase tracking-wide",
      "text-foreground"
    ],
    h4: [
      "font-serif",
      "text-xl lg:text-3xl leading-[1.75]",
      "font-semibold tracking-wide",
      "text-foreground"
    ],
    h5: [
      "font-serif",
      "text-lg lg:text-2xl leading-[1.75]",
      "font-bold uppercase tracking-wide",
      "text-foreground"
    ],
    h6: [
      "font-serif",
      "text-base lg:text-xl leading-[1.75]",
      "font-bold uppercase tracking-wide",
      "text-foreground"
    ],
    p: [
      "font-sans",
      "text-sm sm:text-base leading-[1.5]",
      "font-medium tracking-normal",
      "text-muted-foreground",
    ],
    small: [
      "font-sans",
      "text-sm leading-[1.5]",
      "font-medium uppercase tracking-normal",
      "text-foreground"
    ],
    blockquote: [
      "p-4 font-sans",
      "text-base leading-[1.75] font-medium",
      "text-gray-400 bg-surface-light",
      "border-l-2 border-primary"
    ]
  };

  const typeVariant = typeVariants?.[type];

  const isValid = typeVariant;

  if (!isValid) return null;

  const typographyVariants = {
    type: typeVariant
  };

  return typographyVariants;
}
