"use client";

import PropTypes from "prop-types";

import clsx from "clsx";

// import { useWishlist } from "@contexts/WishlistContext";

import Icon from "@components/ui/icon";
import CustomIcon from "@components/ui/custom-icon";
import Link from "@components/ui/link";
import Typography from "@components/ui/typography";
import Image from "@components/ui/image";
import Button from "@components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@components/ui/card";

import Box from "@components/layouts/box";
import { formatNumber } from "@utils/functions";

export default function VendorCard({ id, image, name, slug, yop, nop, likes }) {
  // const { addToWishlist, items } = useWishlist();

  // const isItemExist = items.find((item) => item.id === business?.id);

  return (
    <Card
      className={clsx(
        "relative",
        "flex flex-col",
        "min-w-0",
        "overflow-hidden",
        "group"
      )}
    >
      <CardHeader className={clsx("relative", "flex flex-col flex-grow")}>
        <Box
          className={clsx(
            "z-10 absolute",
            "top-4 sm:top-4 left-4 sm:left-4",
            "flex gap-2 items-center",
            "py-1.5  px-3",
            "font-serif text-sm leading-none font-bold",
            "text-muted-foreground",
            "bg-white dark:bg-black"
          )}
        >
          <span>Upto</span>
          <span className="text-primary">50% Discounts</span>
        </Box>

        <Link
          href={`/stores/${slug}`}
          className={clsx(
            "flex items-center justify-center",
            "h-52",
            "overflow-hidden",
            "bg-gray-100 dark:bg-white/5"
          )}
        >
          {image ? (
            <Image
              src={image}
              alt={slug}
              className={clsx(
                "object-center",
                "group-hover:scale-110",
                "transition-all duration-500 ease-in-out"
              )}
            />
          ) : (
            <CustomIcon
              name="brand"
              className="w-16 h-16 text-muted-foreground"
            />
          )}
        </Link>
      </CardHeader>

      <CardContent className={clsx("relative", "py-3", "px-2 sm:px-4")}>
        <Box className={clsx("z-10 absolute -top-4", "right-4 sm:right-4")}>
          <Button
            size="sm"
            color="white"
            iconOnly
            rounded
          // onClick={() => addToWishlist({ id, title, price })}
          >
            <Icon
              name="Heart"
              className={
                clsx()
                // Boolean(isItemExist) &&
                // "text-primary fill-primary"
              }
            />
          </Button>
        </Box>

        <Box
          className={clsx("flex", "gap-4", "items-center", "justify-between")}
        >
          <Box
            className={clsx(
              "flex items-center justify-center",
              "w-10 h-10",
              "bg-gray-100 dark:bg-white/5",
              "rounded-full"
            )}
          >
            <CustomIcon name="brand" />
          </Box>

          <Box className={clsx("flex-1", "-pt-[3px] -mb-[3px]")}>
            <CardTitle>
              <Link
                href={`/stores/${slug}`}
                className={clsx(
                  "mb-1.5",
                  "text-sm leading-none font-semibold",
                  "uppercase",
                  "text-primary"
                )}
              >
                {name}
              </Link>
            </CardTitle>

            <Box
              className={clsx(
                "flex gap-2 items-center",
                "font-serif text-sm leading-none font-semibold",
                "text-muted-foreground"
              )}
            >
              <span>{formatNumber(nop)} Items</span> {"|"}{" "}
              <span>{formatNumber(likes)} Likes</span>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

VendorCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.string,
  yop: PropTypes.number,
  nop: PropTypes.number,
  likes: PropTypes.number,
};
