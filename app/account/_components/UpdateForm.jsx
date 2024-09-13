"use client";

import { useState, useEffect, useTransition } from "react";

import { useFormState } from "react-dom";

import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";

import { updateUserZodSchema } from "@libs/zodValidations";

import { updateUserAction } from "@utils/actions/users";

import Button from "@components/ui/button";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormIcon,
  FormMessage,
} from "@components/forms/form";

import Box from "@components/layouts/box";

const defaultValues = {
  username: "",
  email: "",
  password: "",
};

const INITIAL_STATE = {
  data: null,
  message: null,
  errors: null,
};

const convertToFormData = (data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => formData.append(key, data[key]));

  return formData;
};

export default function UpdateForm({ userData }) {
  const form = useForm({
    resolver: zodResolver(updateUserZodSchema),
    defaultValues: {
      username: userData.username || "",
      email: userData.email || "",
    },
  });

  const { handleSubmit, setError, reset } = form;

  const [formState, formAction] = useFormState(updateUserAction, INITIAL_STATE);

  const [isPending, startTransition] = useTransition();

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (formState?.errors) {
      Object.entries(formState.errors).forEach(([key, value]) => {
        setError(key, {
          type: "server",
          message: value,
        });
      });
    }

    if (formState?.message) {
      setSuccessMessage(formState.message);
    }
  }, [formState, setError]);

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage, {
        position: "top-center",
      });

      setSuccessMessage("");
    }
  }, [successMessage]);

  const onSubmit = async (data) => {
    const formData = convertToFormData(data);

    // startTransition(() => {
    formAction(formData);
    // });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>

              <FormControl type="text" placeholder="Username" {...field} />

              <FormIcon name="User" />

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>

              <FormControl type="email" placeholder="Email" {...field} />

              <FormIcon name="Mail" />

              <FormMessage />
            </FormItem>
          )}
        />

        {/* <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>

              <FormControl type="password" placeholder="Password" {...field} />

              <FormIcon name="Lock" />

              <FormMessage />
            </FormItem>
          )}
        /> */}

        <Box className="flex items-center justify-end gap-4 py-4">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Updating..." : "Update"}
          </Button>
        </Box>
      </form>
    </FormProvider>
  );
}
