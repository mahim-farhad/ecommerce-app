import axiosInstance from "@libs/axios/axiosInstance";

export async function registerUser(userData) {
  const res = await axiosInstance.post("/auth/local/register", {
    ...userData,
  });

  return res.data;
}

export async function authenticateUser(userData) {
  try {
    const res = await axiosInstance.post("/auth/local", {
      ...userData,
    });


    return res.data;
  } catch (error) {
    console.log(error);
  }
}
