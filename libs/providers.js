"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { SessionProvider as NextSessionProvider } from "next-auth/react";

export function SessionProvider({ ...props }) {
  return (
    <NextSessionProvider  {...props} />
  );
}

export function ThemeProvider({ ...props }) {
  return (
    <NextThemesProvider  {...props} />
  );
}

export const TooltipProvider = TooltipPrimitive.Provider;
