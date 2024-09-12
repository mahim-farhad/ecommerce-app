"use client";

import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

// import { Slot } from "@radix-ui/react-slot";

import Icon from "./icon";
import Button from "./button";

export default function ThemeToggle({ ...props }) {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      size="sm"
      variant="text"
      iconOnly
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      {...props}
    >
      {theme === "light" ? (
        <Icon name="Sun" />
      ) : (
        <Icon name="Moon" />
      )}
    </Button>
  );
}
