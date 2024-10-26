"use client";

import clsx from "clsx";

import { useCart } from "@contexts/CartContext";
import { useWishlist } from "@contexts/WishlistContext";

import { useToggleSidebar } from "@contexts/SidebarContext";

import { navRight } from "@utils/objects";

import Icon from "@components/ui/icon";
import Link from "@components/ui/link";
import Button from "@components/ui/button";

import { List, ListItem } from "@components/ui/list";
import {
  DropdownMenu, DropdownMenuTrigger,
  DropdownMenuContent, DropdownMenuGroup,
  DropdownMenuCheckboxItem,
} from "@components/ui/dropdown-menu";

import Box from "@components/layouts/box";

export default function Right() {
  const { totalWishlistItems } = useWishlist();
  const { totalCartItems } = useCart();

  const { openSidebar } = useToggleSidebar();

  return (
    <List className="flex-row items-center justify-end">
      {navRight?.map((navigation) => (
        <ListItem key={navigation?.id}>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="xs" variant="text">
                <Icon name="Globe" size="sm" />

                {navigation?.name}

                <Icon name="ChevronDown" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="min-w-48">
              <DropdownMenuGroup
              // value={position}
              // onValueChange={setPosition}
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

      <ListItem className="hidden sm:block">
        <Button size="sm" variant="toned" rounded asChild>
          <Link
            href="/account"
            className={clsx(
              "mr-2",
              "overflow-visible",
              "text-sm",
              "text-foreground",
              "bg-gray-100"
            )}
          >
            <Icon name="Search" />

            <span className="hidden xl:block">Search Products</span>
          </Link>
        </Button>
      </ListItem>

      <ListItem className="hidden sm:block">
        <Button size="sm" variant="text" asChild>
          <Link
            href="/account"
            className={clsx("px-[9px]", "overflow-visible", "text-sm")}
          >
            <Icon name="CircleUser" />

            <span className="sr-only">Account</span>
          </Link>
        </Button>
      </ListItem>

      <ListItem className="hidden sm:block">
        <Button size="sm" variant="text" asChild>
          <Link
            href="/cart"
            className={clsx(
              "px-[9px]",
              "overflow-visible",
              "text-sm"
            )}
          >
            <Box className="relative">
              <Icon name="ShoppingBag" />

              {/* {totalCartItems > 0 && ( */}
              <span
                className={clsx(
                  "absolute -right-4 -top-4",
                  "flex items-center justify-center",
                  "w-6 h-6",
                  "text-xs font-medium",
                  "text-white bg-accent",
                  "border-2",
                  "border-white",
                  "rounded-full"
                )}
              >
                {totalCartItems || 0}
              </span>
              {/* )} */}
            </Box>

            <span className="sr-only">Cart</span>
          </Link>
        </Button>
      </ListItem>

      <ListItem className="lg:hidden">
        <Button
          size="sm"
          variant="text"
          iconOnly
          onClick={openSidebar}
        >
          <Icon
            size="lg"
            name="Menu"
          />

          <span className="sr-only">
            Toggle Sidebar Menu
          </span>
        </Button>
      </ListItem>
    </List>
  );
}
