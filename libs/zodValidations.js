import { z } from "zod";

export const registerZodSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters long.",
    })
    .trim(),
  email: z
    .string()
    .email({
      message: "Please enter a valid email.",
    })
    .trim(),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter.",
    })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter.",
    })
    .regex(/\d/, {
      message: "Password must contain at least one number.",
    })
    .regex(/[@$!%*?&]/, {
      message: "Password must contain at least one special character.",
    }),
});

export const loginZodSchema = z.object({
  identifier: z
    .string()
    .min(3, {
      message: "Identifier must have at least 3 or more characters",
    })
    .max(200, {
      message: "Please enter a valid username or email address",
    })
    .trim(),
  password: z
    .string()
    .min(6, {
      message: "Password must have at least 6 or more characters",
    })
    .max(100, {
      message: "Password must be between 6 and 100 characters",
    })
    .trim(),
});

export const updateUserZodSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters long.",
    }).max(50, {
      message: "Username must be less than 50 characters"
    })
    .trim(),
  email: z
    .string()
    .email({
      message: "Please enter a valid email.",
    })
    .trim(),
  phone: z
    .union([z.string().regex(/^\+8801[0-9]{9}$/, {
      message: "Phone number must be in the format +8801X XX XXX XXX"
    }), z.literal('')])
    .optional(),
  profileImage: z
    .string()
    .url({ message: "Invalid URL" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .optional(),
  newPassword: z
    .string()
    .min(6, { message: "New password must be at least 6 characters" })
    .optional(),
});

export const ProductZodSchema = z.object({
  productTitle: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters long.",
    })
    .trim(),
  // slug: z.string().trim(),
  // productPrice: z.number().min(0, "Price must be greater than or equal to 0")
  //   .positive("Price must be a positive number")
  //   .finite("Price must be a finite number"),
});

export const filterZodSchema = z.object({
  course: z
    .string()
    .min(3, {
      message: "Identifier must have at least 3 or more characters",
    })
    .max(200, {
      message: "Please enter a valid username or email address",
    })
    .trim(),
  university: z
    .string()
    .min(6, {
      message: "Password must have at least 6 or more characters",
    })
    .max(100, {
      message: "Password must be between 6 and 100 characters",
    })
    .trim(),
});
