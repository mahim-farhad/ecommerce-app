"use client";

import { useState, useEffect, useTransition } from "react";

import { useFormState } from "react-dom";

import { toast } from "sonner";


import { zodResolver } from "@hookform/resolvers/zod";

import { useForm, FormProvider } from "react-hook-form";

import { updateUserZodSchema } from "@libs/zodValidations";

import { updateUserAction } from "@utils/actions/users";
import { logoutAction } from "@utils/actions/auth";

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
import clsx from "clsx";
import Icon from "@components/ui/icon";
import { GridItem } from "@components/layouts/grid";

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
      phone: userData.phone || "",
      profileImage: userData.profileImage || "",
      currentPassword: userData.password || "",
    },
  });

  const { trigger, handleSubmit, setError, } = form;

  const [formState, formAction] = useFormState(updateUserAction, INITIAL_STATE);

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
        position: "top-center",
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

  const handleLogout = async (event) => {
    event.preventDefault();

    await logoutAction();
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={clsx(
          "grid sm:grid-cols-2 lg:grid-cols-3",
          "gap-4",
        )}
      >
        <GridItem className="col-span-1">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>

                <FormControl
                  type="text"
                  placeholder="Username" {...field}
                  onBlur={() => trigger("username")}
                />

                <FormIcon name="User" />

                <FormMessage />
              </FormItem>
            )}
          />
        </GridItem>

        <GridItem className="col-span-1">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>

                <FormControl
                  type="email"
                  placeholder="Email" {...field}
                  onBlur={() => trigger("email")}
                />

                <FormIcon name="Mail" />

                <FormMessage />
              </FormItem>
            )}
          />
        </GridItem>

        <GridItem className="col-span-1">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>

                <FormControl
                  type="tel"
                  placeholder="+8801X XX XXX XXX" {...field}
                  onBlur={() => trigger("phone")}
                />

                <FormIcon name="Phone" />

                <FormMessage />
              </FormItem>
            )}
          />
        </GridItem>

        <GridItem className="col-span-1">
          <FormField
            control={form.control}
            name="profileImage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profile URL</FormLabel>

                <FormControl
                  type="url"
                  placeholder="Profile Image URL" {...field}
                  onBlur={() => trigger("profileImage")}
                />

                <FormIcon name="Link" />

                <FormMessage />
              </FormItem>
            )}
          />
        </GridItem>

        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Current Password</FormLabel>

              <FormControl
                type="password"
                placeholder="Current Password" {...field}
                onBlur={() => trigger("currentPassword")}
              />

              <FormIcon name="Lock" />

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>New Password</FormLabel>

              <FormControl
                type="password"
                placeholder="New Password"
                {...field}
                onBlur={() => trigger("newPassword")}
              />

              <FormIcon name="Lock" />

              <FormMessage />
            </FormItem>
          )}
        />

        <GridItem className="col-span-full">
          <Box className="flex items-center justify-end gap-4 pt-3">
            <Button
              variant="outlined"
              size="lg"
              onClick={handleLogout}
            >
              Logout
            </Button>

            <Button
              type="submit"
              size="lg"
              disabled={isPending}
            >
              {isPending ? (
                <Icon name="LoaderCircle" />
              ) : (
                "Update"
              )}
            </Button>
          </Box>
        </GridItem>
      </form>
    </FormProvider>
  );
}
