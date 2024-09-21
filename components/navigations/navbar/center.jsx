'use client';

import { useState, useEffect } from 'react';

import { usePathname } from "next/navigation";

import clsx from "clsx";

import { navigations } from "@utils/objects";

import Link from "@components/ui/link";
import Icon from "@components/ui/icon";
import Button from "@components/ui/button";

import { List, ListItem } from "@components/ui/list";
import {
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuGroup, DropdownMenuItem,
} from "@components/ui/dropdown-menu";

export default function Center() {
  const router = usePathname();

  const [visibleItems, setVisibleItems] = useState(navigations);
  const [dropdownItems, setDropdownItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      const breakpoint = 1560;

      if (window.innerWidth >= breakpoint) {
        setVisibleItems(navigations);

        setDropdownItems([]);
      } else {
        const visibleCount = Math.floor((window.innerWidth - 1560) / 100);

        console.log(window.innerWidth, visibleCount);

        setVisibleItems(navigations.slice(0, visibleCount));

        setDropdownItems(navigations.slice(visibleCount));
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <List className={clsx("flex-row items-center")}>
        {visibleItems?.map((navigation) => (
          <ListItem key={navigation?.id}>
            <Link
              href={`${navigation?.path}`}
              className={clsx(
                "relative inline-flex items-center",
                "h-12 py-2 px-4",
                "font-sans text-sm leading-[17px] font-medium",
                "uppercase",
                router !== navigation?.path ?
                  "text-foreground" : "text-accent",
                "bg-transparent",
                "hover:text-primary",
              )}
            >
              {navigation?.name}
            </Link>
          </ListItem>
        ))}

        {dropdownItems.length > 0 && (
          <ListItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="xs" variant="text">
                  <Icon name="ChevronDown" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="min-w-48">
                <DropdownMenuGroup>
                  {dropdownItems?.map((item) => (
                    <DropdownMenuItem key={item.id}>
                      {item?.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </ListItem>
        )}
      </List>
    </>
  );
}
