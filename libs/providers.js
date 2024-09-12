"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// import { createTooltipScope } from "@radix-ui/react-tooltip";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { SessionProvider } from "next-auth/react";

export default SessionProvider;

export function ThemeProvider({ ...props }) {
  return (
    <NextThemesProvider  {...props} />
  );
}

export const TooltipProvider = TooltipPrimitive.Provider;
