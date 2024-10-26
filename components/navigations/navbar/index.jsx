"use client";

import { usePathname } from "next/navigation";

import clsx from "clsx";

import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

import Left from "@components/navigations/navbar/left";
import Center from "@components/navigations/navbar/center";
import Right from "@components/navigations/navbar/right";

import Topbar from "../topbar";

export default function Navbar() {
  const router = usePathname();

  const noNavRoutes = ["/auth/login", "/auth/register"];

  const hideNavbar = noNavRoutes.includes(router);

  if (hideNavbar) return null;

  return (
    <>
      {/* <Topbar /> */}

      <nav
        className={clsx(
          "flex items-center justify-between",
          "h-16 lg:h-20 py-3 2xl:py-4",
          "text-foreground",
          "bg-background",
          "border-b"
        )}
      >
        <Container>
          <Box
            className={clsx(
              "flex items-center justify-between",
              "gap-4 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 2xl:gap-x-20"
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
    </>
  );
}
