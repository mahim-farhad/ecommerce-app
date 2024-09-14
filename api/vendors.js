// import axiosInstance from "@libs/axios/axiosInstance";

// import axiosSecure from "@libs/axios/axiosSecure";

// const noCacheHeaders = { headers: { cache: "no-store" }, };

// export async function createVendor(vendorData) {
//   const res = await axiosSecure.post("/vendors", {
//     data: { ...vendorData },
//   });

//   return res.data;
// }

// export async function updateVendor(vendorId, vendorData) {
//   const res = await axiosSecure.put(`/users/${vendorId}`, {
//     data: { ...vendorData },
//   });

//   return res.data;
// }

export async function getVendor(slug) {
  try {
    const response = await fetch(
      // `${process.env.BACKEND_URL}/vendors/${vendorId}?populate=*`,
      `${process.env.BACKEND_URL}/vendors?populate=*&[filters][vendorSlug]=${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BACKEND_API}`,
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch protected data");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    let errorMessage = "";

    if (error.response) {
      const { status, data } = error.response;

      if (status === 400 || status === 429) {
        const serverErrorMessage = data?.error?.message || errorMessage;

        errorMessage = serverErrorMessage;
      } else {
        errorMessage = data;
      }
    } else {
      errorMessage = error.message || "Something went wrong. Please try again.";
    }

    return errorMessage;
  }
}

export async function getVendors() {
  try {
    const response = await fetch(
      `${process.env.BACKEND_URL}/vendors?populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.BACKEND_API}`,
        },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch protected data");
    }

    const data = await response.json();

    return data;
  } catch (error) {
    let errorMessage = "";

    if (error.response) {
      const { status, data } = error.response;

      if (status === 400 || status === 429) {
        const serverErrorMessage = data?.error?.message || errorMessage;

        errorMessage = serverErrorMessage;
      } else {
        errorMessage = data;
      }
    } else {
      errorMessage = error.message || "Something went wrong. Please try again.";
    }

    return errorMessage;
  }
}

// export async function getVendorsAxios() {
//   try {
//     const res = await axiosInstance.get("/vendors?populate=*", {
//       noCacheHeaders,
//     });

//     return res.data;
//   } catch (error) {
//     let errorMessage = "";

//     if (error.response) {
//       const { status, data } = error.response;

//       if (status === 400 || status === 429) {
//         const serverErrorMessage = data?.error?.message || errorMessage;

//         errorMessage = serverErrorMessage;
//       } else {
//         errorMessage = data;
//       }
//     } else {
//       errorMessage = error.message || "Something went wrong. Please try again.";
//     }

//     return errorMessage;
//   }
// }
