export default function getListVariants(type) {
  const typeVariants = {
    ul: "list-none",
    ol: "list-disc"
  };

  const typeVariant = typeVariants?.[type];

  const isValid = typeVariant;

  if (!isValid) return null;

  const listVariants = {
    type: typeVariant
  };

  return listVariants;
}
