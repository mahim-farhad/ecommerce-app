"use client";

import { useState, useEffect } from "react";

import { usePathname } from "next/navigation";

import clsx from "clsx";

import { navigations } from "@utils/objects";

import Link from "@components/ui/link";
import Icon from "@components/ui/icon";
import Button from "@components/ui/button";

import { List, ListItem } from "@components/ui/list";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
} from "@components/ui/dropdown-menu";

export default function Center() {
  const router = usePathname();

  const [visibleItems, setVisibleItems] = useState([]);
  const [dropdownItems, setDropdownItems] = useState([]);

  const updateVisibility = () => {
    const width = window.innerWidth;

    let visibleCount = navigations.length;

    if (width >= 1460) {
      visibleCount = navigations.length - 0;
    } else if (width >= 1064) {
      visibleCount = navigations.length - 2;
    } else if (width >= 768) {
      visibleCount = navigations.length - 3;
    }

    setVisibleItems(navigations.slice(0, visibleCount));

    setDropdownItems(navigations.slice(visibleCount));
  };

  useEffect(() => {
    updateVisibility();

    window.addEventListener("resize", updateVisibility);

    return () => window.removeEventListener("resize", updateVisibility);
  }, []);

  return (
    <List className={clsx("flex-row items-center")}>
      {visibleItems?.map((navigation) => (
        <ListItem key={navigation?.id}>
          <Link
            href={navigation?.path}
            className={clsx(
              "relative",
              "inline-flex items-center",
              "h-12 py-2 px-4",
              "font-sans text-sm leading-[17px] font-medium",
              "uppercase",
              router !== navigation?.path ? "text-foreground" : "text-accent",
              "bg-transparent",
              "hover:text-accent"
            )}
          >
            {navigation?.name}
          </Link>
        </ListItem>
      ))}

      {dropdownItems?.length > 0 && (
        <ListItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="text" size="sm">
                <Icon name="Ellipsis" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="min-w-full">
              <DropdownMenuGroup className="flex items-center">
                {dropdownItems?.map((item) => (
                  <Link
                    key={item?.id}
                    href={item?.path}
                    className={clsx(
                      "relative",
                      "inline-flex items-center",
                      "h-12 py-2 px-4",
                      "font-sans text-sm leading-[17px] font-medium",
                      "uppercase",
                      router !== item?.path ? "text-foreground" : "text-accent",
                      "bg-transparent",
                      "hover:text-accent"
                    )}
                  >
                    {item?.name}
                  </Link>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </ListItem>
      )}
    </List>
  );
}
