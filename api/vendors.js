// import axiosInstance from "@libs/axios/axiosInstance";

import { delayExecute } from "@utils/functions";

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

export async function getVendor(courseSlug) {
  try {
    const response = await fetch(
      // `${process.env.BACKEND_URL}/vendors/${vendorId}?populate=*`,
      // *& filters[universities][country][shortForm][$eq]=ca & filters[study_levels][slug][$eq]=undergraduate
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/courses?populate=*&[filters][lower_name]=${courseSlug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API}`,
        },
        next: { revalidate: 3600 },
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
    await delayExecute(2000);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/vendors?populate=*`,
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

export async function getCourses() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/courses?populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API}`,
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

export async function getUniversities() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/universities?populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API}`,
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

export async function getDestinations() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/destinations?populate=*`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API}`,
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
