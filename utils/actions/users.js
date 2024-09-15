"use server";

import { revalidatePath } from "next/cache";

// import bcrypt from 'bcrypt';

import { getCurrentUser, updateUser } from "@api/users";

import { updateUserZodSchema } from "@libs/zodValidations";

export async function updateUserAction(prevState, formData) {
  const user = await getCurrentUser();

  const data = Object.fromEntries(formData.entries());

  const validatedFields = updateUserZodSchema.safeParse(data);

  if (!validatedFields.success) {
    return {
      ...prevState,
      message: "Required fileds must be filled!",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // const { password } = validatedFields.data;

  // const hashedPassword = await bcrypt.hash(password, 10);

  // console.log(hashedPassword)

  try {
    const res = await updateUser(user.id, validatedFields.data);
  } catch (error) {
    let errorMessage = "";

    const fieldErrors = {
      username: "",
      email: "",
      phone: "",
      profileImage: "",
      currentPassword: "",
      newPassword: "",
    };

    if (error.response) {
      const { status, data } = error.response;

      if (status === 400 || status === 429) {
        const serverErrorMessage = data?.error?.message || errorMessage;

        errorMessage = serverErrorMessage;

        if (errorMessage.includes("Username", "Email")) {
          fieldErrors.username = errorMessage;

          fieldErrors.email = errorMessage;
        } else if (errorMessage.includes("Username")) {
          fieldErrors.username = errorMessage;
        } else if (errorMessage.includes("Phone")) {
          fieldErrors.phone = errorMessage;
        } else if (errorMessage.includes("Profile Image")) {
          fieldErrors.profileImage = errorMessage;
        } else if (errorMessage.includes("Password")) {
          fieldErrors.currentPassword = errorMessage;
        }
      } else {
        errorMessage = data;
      }
    } else {
      errorMessage = error.message || "Something went wrong. Please try again.";
    }

    return {
      ...prevState,
      message: errorMessage,
      errors: fieldErrors,
    };
  }

  // revalidatePath("/account?success=user-info-updated-successfully!");
}
