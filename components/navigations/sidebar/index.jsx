"use client";

import { usePathname } from "next/navigation";

import { twMerge } from "tailwind-merge";

import clsx from "clsx";

import { navigations } from "@utils/objects";

import { useToggleSidebar } from "@contexts/SidebarContext";

import Link from "@components/ui/link";
import Typography from "@components/ui/typography";
import Icon from "@components/ui/icon";
import CustomIcon from "@components/ui/custom-icon";
import Button from "@components/ui/button";
import Image from "@components/ui/image";
import {
  List,
  ListItem
} from "@components/ui/list";

import Box from "@components/layouts/box";

// import Backdrop from "@components/overlays/backdrop";

function Header() {
  return (
    <Box
      className={clsx(
        "flex flex-shrink-0 gap-x-6 items-center",
        "h-16",
        "py-4 px-4",
      )}
    >
      <CustomIcon
        name="brand"
        className="w-8 h-8"
      />

      <Typography
        type="h6"
        className="leading-[17px]"
      >
        Bnagladeshi HandiCrafts
      </Typography>
    </Box>
  );
}

function Body() {
  const router = usePathname();

  return (
    <Box
      className={clsx(
        "flex flex-col flex-1",
        "overflow-y-hidden",
      )}
    >
      <Box
        className={clsx(
          "flex flex-col flex-1 gap-6 justify-center",
          "py-6 px-3",
          "overflow-y-auto",
        )}
      >
        <List type="ul" className="flex flex-col gap-2">
          {navigations?.map((navigation) => (
            <ListItem key={navigation?.id}>
              <Link
                href={`${navigation?.path}`}
                className={clsx(
                  "relative flex items-center",
                  "h-10 py-2 px-4",
                  "font-sans text-sm leading-[17px] font-medium",
                  "uppercase",
                  router !== navigation?.path ?
                    "text-foreground" : "text-accent",
                  "bg-transparent",
                  "hover:text-accent",
                )}
              >
                {navigation?.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
}

function Footer({ userData }) {
  return (
    <Box className="flex-shrink-0 py-4 px-4">
      {!userData?.username
        ?
        <Button
          size="lg"
          asChild
          className="w-full"
        >
          <Link href="/auth/login">
            Login
          </Link>
        </Button>
        :
        <Link href="/account" className="flex gap-4 items-center">
          {!userData?.profileImage ? (
            <Image
              src={userData?.profileImage}
              alt={userData?.username}
              className="w-12 h-12 rounded-full"
            />
          ) : (
            <Box
              className={clsx(
                "flex-shrink-0",
                "flex items-center justify-center",
                "w-12 h-12", "bg-muted",
                "rounded-full"
              )}
            >
              <Icon name="User" />
            </Box>
          )}

          <Box className="text-start">
            <Typography type="h6" className="-mb-1.5">
              {userData?.username}
            </Typography>

            <Typography type="small" className="!text-xs text-muted-foreground">
              {userData?.email}
            </Typography>
          </Box>
        </Link>
      }
    </Box>
  )
}

export default function Sidebar({ currentUserData }) {
  const { sidebarRef, showSidebar, showBackdrop } = useToggleSidebar();

  const sidebarClasses = twMerge(clsx(
    "z-50 fixed top-0 bottom-0 left-0",
    "-translate-x-full",
    { "translate-x-0": showSidebar },
    "flex flex-col",
    "w-80 h-full",
    "min-h-screen",
    "bg-background",
    "border-r-2",
    "transition-transform duration-300 ease-in-out",
  ));

  return (
    <>
      {/* {showBackdrop && <Backdrop />} */}

      <aside ref={sidebarRef} className={sidebarClasses}>
        <Header />

        <Body />

        <Footer userData={currentUserData} />
      </aside>
    </>
  );
}
