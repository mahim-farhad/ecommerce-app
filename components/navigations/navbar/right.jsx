"use client";

import clsx from "clsx";

import { useCart } from "@contexts/CartContext";
import { useWishlist } from "@contexts/WishlistContext";

import { useToggleSidebar } from "@contexts/SidebarContext";

import Icon from "@components/ui/icon";
import Link from "@components/ui/link";
import Button from "@components/ui/button";

import { List, ListItem } from "@components/ui/list";

import Box from "@components/layouts/box";
import ThemeToggle from "@components/ui/theme-toggle";

export default function Right() {
  const { totalWishlistItems } = useWishlist();
  const { totalCartItems } = useCart();

  const { openSidebar } = useToggleSidebar();

  return (
    <List className="flex-row items-center justify-end">
      <ListItem>
        <ThemeToggle />
      </ListItem>

      <ListItem className="hidden sm:block">
        <Button size="sm" variant="text" asChild>
          <Link
            href="/account"
            className={clsx("px-[9px]", "overflow-visible", "text-sm")}
          >
            <Box className="relative">
              <Icon name="User" />

              {totalWishlistItems > 0 && (
                <span
                  className={clsx(
                    "absolute -right-4 -top-4",
                    "flex items-center justify-center",
                    "w-6 h-6 pl-px",
                    "text-xs font-medium",
                    "text-white bg-accent",
                    "border-2",
                    "border-white",
                    "rounded-full"
                  )}
                >
                  {totalWishlistItems}
                </span>
              )}
            </Box>

            <span className="hidden xl:block">Account</span>
          </Link>
        </Button>
      </ListItem>

      <ListItem className="hidden sm:block">
        <Button size="sm" variant="text" asChild>
          <Link
            href="/wishlist"
            className={clsx("px-[9px]", "overflow-visible", "text-sm")}
          >
            <Box className="relative">
              <Icon name="Heart" />

              {totalWishlistItems > 0 && (
                <span
                  className={clsx(
                    "absolute -right-4 -top-4",
                    "flex items-center justify-center",
                    "w-6 h-6 pl-px",
                    "text-xs font-medium",
                    "text-white bg-accent",
                    "border-2",
                    "border-white",
                    "rounded-full"
                  )}
                >
                  {totalWishlistItems}
                </span>
              )}
            </Box>

            <span className="hidden xl:block">Wishlist</span>
          </Link>
        </Button>
      </ListItem>

      <ListItem className="hidden sm:block">
        <Button size="sm" variant="text" asChild>
          <Link
            href="/cart"
            className={clsx("px-[9px] md:pr-0", "overflow-visible", "text-sm")}
          >
            <Box className="relative">
              <Icon name="ShoppingBag" />

              {totalWishlistItems > 0 && (
                <span
                  className={clsx(
                    "absolute -right-4 -top-4",
                    "flex items-center justify-center",
                    "w-6 h-6 pl-px",
                    "text-xs font-medium",
                    "text-white bg-accent",
                    "border-2",
                    "border-white",
                    "rounded-full"
                  )}
                >
                  {totalCartItems}
                </span>
              )}
            </Box>

            <span className="hidden xl:block">Cart</span>
          </Link>
        </Button>
      </ListItem>

      <ListItem className="md:hidden">
        <Button size="sm" variant="text" iconOnly onClick={openSidebar}>
          <Icon size="lg" name="Menu" className="text-foreground-muted" />

          <span className="sr-only">Toggle Sidebar Menu</span>
        </Button>
      </ListItem>
    </List>
  );
}
