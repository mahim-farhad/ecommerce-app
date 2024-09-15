"use client";

import { useState, useEffect, useTransition } from "react";

import { useFormState } from "react-dom";

import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";

import { loginZodSchema } from "@libs/zodValidations";

import { loginAction } from "@utils/actions/auth";

import { convertToFormData } from "@utils/functions";

import Icon from "@components/ui/icon";
import Button from "@components/ui/button";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormIcon,
  FormMessage,
} from "@components/forms/form";
import Input from "@components/forms/input";

import Box from "@components/layouts/box";
import Typography from "@components/ui/typography";
import Link from "@components/ui/link";
import clsx from "clsx";

const defaultValues = {
  identifier: "",
  password: "",
};

const INITIAL_STATE = {
  data: null,
  message: null,
  errors: null,
};

export default function LoginForm() {
  const form = useForm({
    mode: "onBlur",
    resolver: zodResolver(loginZodSchema),
    defaultValues,
  });

  const { trigger, handleSubmit, setError } = form;

  const [formState, formAction] = useFormState(loginAction, INITIAL_STATE);

  const [isPending, startTransition] = useTransition();

  const [toastMessage, setToastMessage] = useState("");

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
    const formData = convertToFormData(data);

    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="identifier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email / Username</FormLabel>

              <FormControl
                type="identifier"
                placeholder="Identifier"
                onBlur={() => trigger("identifier")}
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
                onBlur={() => trigger("password")}
                {...field}
              />

              <FormIcon name="Lock" />

              <FormMessage />
            </FormItem>
          )}
        />

        <Box className="flex items-center gap-4 pt-3">
          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={isPending}
          >
            {isPending ? (
              <Icon name="LoaderCircle" />
            ) : (
              "Submit"
            )}
          </Button>
        </Box>

        <Typography>
          Don't Have an Account Yet?
          <Link
            href="/auth/register"
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
            Register
          </Link>
        </Typography>
      </form>
    </FormProvider>
  );
}
