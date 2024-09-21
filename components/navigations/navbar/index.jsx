"use client";

import { usePathname } from "next/navigation";

import clsx from "clsx";

import Container from "@components/layouts/container";
import { Grid, GridItem } from "@components/layouts/grid";

import Left from "@components/navigations/navbar/left";
import Center from "@components/navigations/navbar/center";
import Right from "@components/navigations/navbar/right";

import Topbar from "@components/navigations/topbar";

export default function Navbar() {
  const router = usePathname();

  const noNavRoutes = ["/auth/login", "/auth/register"];

  const hideNavbar = noNavRoutes.includes(router);

  if (hideNavbar) return null;

  return (
    <>
      <Topbar />

      <nav
        className={clsx(
          "flex items-center justify-between",
          "h-16 xl:h-20 py-2 2xl:py-4",
          "text-foreground",
          "bg-background"
        )}
      >
        <Container>
          <Grid
            className={clsx(
              "flex items-center justify-between",
              "gap-8 2xl:gap-12",
            )}
          >
            <GridItem className="flex-shrink-0">
              <Left />
            </GridItem>

            <GridItem className="flex-grow">
              <Center />
            </GridItem>

            <GridItem className="flex-shrink-0">
              <Right />
            </GridItem>
          </Grid>
        </Container>
      </nav>
    </>
  );
}
