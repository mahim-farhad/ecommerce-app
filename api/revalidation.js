import axiosInstance from "@libs/axios/axiosInstance";

export async function revalidatePage(path) {
  const res = await axiosInstance.post(
    "/revalidate", {
    path
  });

  return res.data;
};

export async function revalidatePages(paths) {
  const promises = paths.map((path) => {
    revalidatePage(path)
  });

  const results =
    await Promise.all(promises);

  return results;
};
