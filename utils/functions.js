import clsx from "clsx";

import { twMerge } from "tailwind-merge";

export const cn = (...cn) => {
  return twMerge(clsx(cn)) || undefined;
};

export async function delayExecute(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const convertToFormData = (data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });

  return formData;
};

export const formatNumber = (num) => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "k";
  } else {
    return num.toString();
  }
};
