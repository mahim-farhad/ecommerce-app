import axiosInstance from "@libs/axios/axiosInstance";

// import axiosSecure from "@libs/axios/axiosSecure";

const noCacheHeaders = {
  headers: { cache: "no-store" }
};

// export async function createProduct(productData) {
//   const res = await axiosSecure.post("/products", {
//     data: { ...productData }
//   });

//   return res.data;
// };

// export async function updateUser(vendorId, productData) {
//   const res = await axiosSecure.put(
//     `/users/${vendorId}`, {
//     data: { ...productData }
//   });

//   return res.data;
// };

export async function getVendor(vendorId) {
  const res = await axiosInstance.get(
    `/vendors/${vendorId}?populate=*`,
    noCacheHeaders
  );

  return res.data;
};

export async function getVendors(page = 1, pageSize = 25) {
  try {
    const res = await axiosInstance.get("/vendors?populate=*", {
      noCacheHeaders
    });

    return res.data;
  } catch (error) {
    Error(`Error fetching vendors with products:${error}`);

    return null;
  }
};
