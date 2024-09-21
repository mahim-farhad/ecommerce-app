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
              "grid-cols-2 md:grid-cols-3 2xl:grid-cols-6",
              "2xl:gap-8 items-center",
            )}
          >
            <GridItem className="col-span-1">
              <Left />
            </GridItem>

            <GridItem
              className={clsx(
                "col-span-1 2xl:col-span-3",
              )}
            >
              <Center />
            </GridItem>

            <GridItem className="2xl:col-span-2">
              <Right />
            </GridItem>
          </Grid>
        </Container>
      </nav>
    </>
  );
}
