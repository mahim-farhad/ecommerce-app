import axiosInstance from "@libs/axios/axiosInstance";

import axiosSecure from "@libs/axios/axiosSecure";

export async function createProduct(productData) {
  const res = await axiosSecure.post("/products", {
    data: { ...productData }
  });

  return res.data;
};

export async function updateUser(productId, productData) {
  const res = await axiosSecure.put(
    `/users/${productId}`, {
    data: { ...productData }
  });

  return res.data;
};

export async function getProduct(productId) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL
      }/products/${productId}?populate=*`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API}`
      },
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch protected data');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Error fetching vendors with products:${error}`);
  }
};

export async function getProducts() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL
      }/products?populate=*`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API}`
      },
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch protected data');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error(`Error fetching vendors with products:${error}`);
  }
};

export async function getProductsAxios() {
  try {
    const res = await axiosInstance.get("/products?populate=*");

    return res.data;
  } catch (error) {
    Error(`Error fetching vendors with products:${error}`);

    return null;
  }
};
