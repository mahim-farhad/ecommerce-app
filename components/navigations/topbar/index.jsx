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
  DropdownMenu, DropdownMenuTrigger,
  DropdownMenuContent, DropdownMenuGroup,
  DropdownMenuCheckboxItem,
} from "@components/ui/dropdown-menu";

import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

export default function Topbar() {
  const [position, setPosition] = useState("bottom");

  return (
    <Box
      className={clsx(
        "hidden lg:block",
        "text-white bg-black"
      )}
    >
      <Container>
        <Box
          className={clsx(
            "flex gap-20 items-center justify-between",
            "h-12 py-2",
          )}
        >
          <Box
            className={clsx(
              "flex",
              "gap-2",
              "items-center"
            )}
          >
            <Icon name="Truck" />

            <Typography type="p" className="!text-sm text-white">
              Free shipping worldwide above 300$
            </Typography>
          </Box>

          <List className={clsx("flex-row items-center md:mr-auto")}>
            {navigations2?.map((navigation) => (
              <ListItem key={navigation?.id}>
                <Link
                  href={`${navigation?.path}`}
                  className={clsx(
                    "relative items-center hidden md:inline-flex",
                    "h-12 py-2 px-4",
                    "font-sans text-xs font-medium",
                    "uppercase",
                    "text-white",
                    "bg-transparent",
                    "hover:text-accent"
                  )}
                >
                  {navigation?.name}
                </Link>
              </ListItem>
            ))}
          </List>

          <List className={clsx("flex-row items-center md:ml-auto")}>
            {navRight?.map((navigation) => (
              <ListItem key={navigation?.id}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="xs" variant="text" className="text-sm text-white">
                      {/* <Icon name="Globe" size="sm" /> */}

                      {navigation?.name}

                      <Icon name="ChevronDown" />
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="min-w-48">
                    <DropdownMenuGroup
                      value={position}
                      onValueChange={setPosition}
                    >
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

          <List className={clsx("flex-row flex-wrap gap-4 flex-shrink-0")}>
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
