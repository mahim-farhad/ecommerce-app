"use client";

import { usePathname } from "next/navigation";

import clsx from "clsx";

import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

import Left from "@components/navigations/navbar/left";
import Center from "@components/navigations/navbar/center";
import Right from "@components/navigations/navbar/right";

export default function Navbar() {
  const router = usePathname();

  const noNavRoutes = ["/auth/login", "/auth/register"];

  const hideNavbar = noNavRoutes.includes(router);

  if (hideNavbar) return null;

  const navbarClasses = clsx(
    "flex gap-4 items-center justify-between",
    "h-16 xl:h-20 py-3 sm:py-4",
    "text-foreground bg-background",
    "transition-all duration-300 ease-in-out",
  );

  return (
    <nav className={navbarClasses}>
      <Container>
        <Box
          className={clsx(
            "flex gap-4 items-center justify-between",
            "w-full",
          )}
        >
          <Box className="flex-shrink-0">
            <Left />
          </Box>

          <Box
            className={clsx(
              "flex-grow",
              "hidden md:block"
            )}
          >
            <Center />
          </Box>

          <Box className="flex-shrink-0">
            <Right />
          </Box>
        </Box>
      </Container>
    </nav>
  );
}
