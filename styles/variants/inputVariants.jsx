export default function getInputVariants(size) {
  const sizeVariants = {
    sm: "h-10 px-3.5 text-xs",
    base: "h-12 px-3.5 text-base",
    lg: "h-14 px-4 text-lg",
    xl: "h-16 px-4 text-xl"
  };

  const isValid = sizeVariants?.[size];

  if (!isValid) return null;

  const inputVariants = {
    size: sizeVariants?.[size]
  };

  return inputVariants;
};
