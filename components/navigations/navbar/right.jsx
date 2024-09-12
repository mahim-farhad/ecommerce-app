"use client";

import clsx from "clsx";

import { useCart } from "@contexts/CartContext";
import { useWishlist } from "@contexts/WishlistContext";

import { useToggleSidebar } from "@contexts/SidebarContext";

import Icon from "@components/ui/icon";
import Link from "@components/ui/link";
import Button from "@components/ui/button";
import { List, ListItem } from "@components/ui/list";
import ThemeToggle from "@components/ui/theme-toggle";

export default function Right() {
  const { totalCartItems } = useCart();
  const { totalWishlistItems } = useWishlist();

  const {
    openSidebar
  } = useToggleSidebar();

  return (
    <List
      className={clsx(
        "flex-row items-center justify-end"
      )}
    >
      <ListItem>
        <ThemeToggle />
      </ListItem>

      <ListItem>
        <Button
          size="sm"
          variant="text"
          iconOnly
          asChild
        >
          <Link href="/profile">
            <Icon name="User" />
          </Link>
        </Button>
      </ListItem>

      <ListItem className="hidden md:block">
        <Button
          size="sm"
          variant="text"
          iconOnly
          asChild
        >
          <Link
            href="/wishlists"
            className={clsx(
              "relative",
              "overflow-visible"
            )}
          >
            <span
              className={clsx(
                "absolute -right-1 -top-1",
                "flex items-center justify-center",
                "w-5 h-5 pl-0.5",
                "text-xs font-medium",
                "text-white bg-[#ff6f61]",
                "border",
                "border-white",
                "rounded-full",
              )}
            >
              {totalWishlistItems}
            </span>

            <Icon name="Heart" />
          </Link>
        </Button>
      </ListItem>

      <ListItem>
        <Button
          size="sm"
          variant="text"
          iconOnly
          asChild
        >
          <Link
            href="/cart"
            className={clsx(
              "relative",
              "overflow-visible"
            )}
          >
            <span
              className={clsx(
                "absolute -right-1 -top-1",
                "flex items-center justify-center",
                "w-5 h-5 pl-0.5",
                "text-xs font-medium",
                "text-white bg-[#ff6f61]",
                "border",
                "border-white",
                "rounded-full",
              )}
            >
              {totalCartItems}
            </span>

            <Icon name="ShoppingBag" />
          </Link>
        </Button>
      </ListItem>

      <ListItem className="md:hidden">
        <Button
          size="sm"
          variant="text"
          iconOnly
          onClick={openSidebar}
        >
          <Icon
            size="lg"
            name="Menu"
            className="text-foreground-muted"
          />

          <span className="sr-only">
            Toggle Sidebar Menu
          </span>
        </Button>
      </ListItem>
    </List>
  );
}
