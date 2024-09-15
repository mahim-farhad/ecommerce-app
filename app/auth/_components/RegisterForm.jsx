"use client";

import { useState, useEffect, useTransition } from "react";

import { useFormState } from "react-dom";

import clsx from "clsx";

import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";

import { registerZodSchema } from "@libs/zodValidations";

import { registerAction } from "@utils/actions/auth";

import Typography from "@components/ui/typography";
import Link from "@components/ui/link";
import Icon from "@components/ui/icon";
import Button from "@components/ui/button";

import {
  FormField, FormItem,
  FormLabel, FormControl, FormIcon,
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
  errors: null
};

const convertToFormData = (data) => {
  const formData = new FormData();

  Object.keys(data).forEach(key => formData.append(
    key, data[key]
  ));

  return formData;
};

function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(registerZodSchema),
    defaultValues,
  });

  const { handleSubmit, setError, reset } = form;

  const [formState, formAction] = useFormState(
    registerAction,
    INITIAL_STATE
  );

  const [isPending, startTransition] = useTransition();

  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (formState?.errors) {
      Object.entries(formState.errors).forEach(([key, value]) => {
        setError(key, {
          type: "server",
          message: value
        });
      });
    }

    if (formState?.message) {
      setToastMessage(formState.message);
    }
  }, [formState, setError]);

  useEffect(() => {
    if (toastMessage) {
      toast.success(toastMessage, {
        position: 'top-center',
      });

      setToastMessage("");
    }
  }, [toastMessage]);

  const onSubmit = async (data) => {
    const formData =
      convertToFormData(data);

    startTransition(() => {
      formAction(formData);
    });
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

              <FormControl
                type="text"
                placeholder="Username"
                {...field}
              />

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

              <FormControl
                type="email"
                placeholder="Email"
                {...field}
              />

              <FormIcon name="Mail" />

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>

              <FormControl
                type="password"
                placeholder="Password"
                {...field}
              />

              <FormIcon name="Lock" />

              <FormMessage />
            </FormItem>
          )}
        />

        <Box className="flex items-center gap-4 pt-3">
          <Button
            type="button"
            size="lg"
            variant="outlined"
            onClick={() => reset({ defaultValues })}
            className="w-full"
          >
            Reset
          </Button>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? (
              <Icon name="LoaderCircle" />
            ) : (
              "Register"
            )}
          </Button>
        </Box>

        <Typography>
          Already Have an Account?
          <Link
            href="/auth/login"
            className={clsx(
              "relative inline-block py-2 ml-1",
              "font-medium text-primary",
              "after:content-['']",
              "after:absolute after:left-0 after:bottom-1",
              "after:w-0 after:h-[1px]",
              "after:bg-primary",
              "hover:after:w-full",
              "after:transition-all after:duration-200"
            )}
          >
            Login
          </Link>
        </Typography>
      </form>
    </FormProvider>
  );
};

export default RegisterForm;
