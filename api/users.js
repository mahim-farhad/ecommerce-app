import axiosSecure from "@libs/axios/axiosSecure";

// const noCacheHeaders = { headers: { cache: "no-store" } };

// export async function createUser(userData) {
//   const res = await axiosSecure.post("/users", {
//     data: { ...userData },
//   });

//   return res.data;
// }

export async function updateUser(userId, userData) {
  try {
    const res = await axiosSecure.put(`/users/${userId}`, { ...userData });

    return res.data;
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

    console.log(error);

    return errorMessage;
  }
}

export async function getCurrentUser() {
  try {
    const res = await axiosSecure.get("/users/me?populate=*");

    return res.data;
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

// export async function getUser(userId) {
//   const res = await axiosSecure.get(
//     `/users/${userId}?populate=*`,
//     noCacheHeaders
//   );

//   return res.data;
// }

// export async function getUsers() {
//   const res = await axiosSecure.get("/users?populate=*", {
//     noCacheHeaders,
//   });

//   return res.data;
// }

// export async function getUsersAxios() {
//   try {
//     const res = await axiosSecure.get("/users?populate=*", {
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
