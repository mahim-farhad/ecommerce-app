"use client";

import { useState } from "react";

import clsx from "clsx";

import { navigations2, navRight, socials } from "@utils/objects";

import Typography from "@components/ui/typography";
import Link from "@components/ui/link";
import CustomIcon from "@components/ui/custom-icon";
import Icon from "@components/ui/icon";
import Button from "@components/ui/button";
import { List, ListItem } from "@components/ui/list";
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuGroup, DropdownMenuCheckboxItem,
} from "@components/ui/dropdown-menu";

import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

export default function Topbar() {
  const [position, setPosition] = useState("bottom");

  return (
    <Box>
      <Container>
        <Box
          className={clsx(
            "flex gap-8 items-center justify-between",
            "h-12 py-2",
            "border-b"
          )}
        >
          <Box
            className={clsx(
              "flex gap-2 items-center flex-shrink-0",
            )}
          >
            <Icon name="Truck" />

            <Typography type="small" className="text-xs">
              Free shipping worldwide
            </Typography>
          </Box>

          <List className={clsx("flex-row items-center md:mr-auto hidden lg:flex")}>
            {navigations2?.map((navigation) => (
              <ListItem key={navigation?.id}>
                <Link
                  href={`${navigation?.path}`}
                  className={clsx(
                    "relative inline-flex items-center",
                    "h-12 py-2 px-4",
                    "font-sans text-xs font-medium",
                    "uppercase",
                    "text-foreground",
                    "bg-transparent",
                    "hover:text-accent",
                  )}
                >
                  {navigation?.name}
                </Link>
              </ListItem>
            ))}
          </List>

          <List className={clsx("flex-row items-center md:mr-auto lg:mr-0")}>
            {navRight?.map((navigation) => (
              <ListItem key={navigation?.id}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="xs" variant="text" className="text-sm">
                      {/* <Icon name="Globe" size="sm" /> */}

                      {navigation?.name}

                      <Icon name="ChevronDown" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="min-w-48">
                    <DropdownMenuGroup value={position} onValueChange={setPosition}>
                      <DropdownMenuCheckboxItem value="top">
                        Top
                      </DropdownMenuCheckboxItem>

                      <DropdownMenuCheckboxItem value="bottom">
                        Bottom
                      </DropdownMenuCheckboxItem>

                      <DropdownMenuCheckboxItem value="right">
                        Right
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </ListItem>
            ))}
          </List>

          <List
            className={clsx(
              "flex-row flex-wrap gap-4 hidden md:flex flex-shrink-0",
            )}
          >
            {socials?.map((social) => (
              <ListItem key={social?.id}>
                <Link href={social?.path}>
                  <CustomIcon
                    name={social?.iconName}
                    size="sm"
                    className={clsx("text-muted-foreground")}
                  />
                </Link>
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  );
}
