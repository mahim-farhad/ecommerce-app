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
import {
  Card, CardHeader, CardTitle, CardContent
} from "@components/ui/card";

import Box from "@components/layouts/box";

export default function VendorCard({
  id,
  image,
  name,
  slug,
  yop,
  nop,
  likes
}) {
  // const { addToWishlist, items } = useWishlist();

  // const isItemExist = items.find((item) => item.id === business?.id);

  return (
    <Card
      className={clsx(
        "relative",
        "flex flex-col",
        "min-w-0",
        "overflow-hidden",
        "group",
      )}
    >
      <CardHeader
        className={clsx(
          "relative",
          "flex flex-col flex-grow",
        )}
      >
        <Box
          className={clsx(
            "z-10 absolute",
            "top-2 sm:top-4 left-2 sm:left-4",
            "flex gap-2 items-center",
            "pt-1 pb-0.5 px-2",
            "font-serif text-sm font-semibold",
            "text-gray-400 bg-white dark:bg-white/5"
          )}
        >
          <span>Upto</span>
          <span
            className="text-primary"
          >
            50% Discounts
          </span>
        </Box>

        <Link
          href={`/store/${slug}`}
          className={clsx(
            "flex items-center justify-center",
            "h-48",
            "bg-gray-50",
          )}
        >
          {/* <img
              src={image}
              alt={`${slug} logo`}
              className="object-center"
            /> */}

          <CustomIcon
            name="brand"
            className="w-16 h-16 opacity-50"
          />
        </Link>
      </CardHeader>

      <CardContent
        className={clsx(
          "relative",
          "py-3",
          "px-2 sm:px-4",
        )}
      >
        <Box
          className={clsx(
            "z-10 absolute -top-4",
            "right-2 sm:right-4",
          )}
        >
          <Button
            size="sm"
            color="white"
            iconOnly
            rounded
          // onClick={() => addToWishlist({ id, title, price })}
          >
            <Icon
              name="Heart"
              className={clsx(
                // Boolean(isItemExist) &&
                "text-primary fill-primary"
              )}
            />
          </Button>
        </Box>

        <Box
          className={clsx(
            "flex",
            "gap-4",
            "items-center",
            "justify-between",
          )}
        >
          <Box
            className={clsx(
              "flex items-center justify-center",
              "w-10 h-10",
              "bg-gray-100",
              "rounded-full"
            )}
          >
            <CustomIcon name="brand" />
          </Box>

          <Box
            className={clsx(
              "flex-1",
              "-pt-[3px] -mb-[3px]"
            )}
          >
            <CardTitle>
              <Link
                href={`/store/${slug}`}
                className={clsx(
                  "mb-1.5",
                  "text-sm leading-none font-semibold",
                  "uppercase",
                  "text-primary",
                )}
              >
                {name}
              </Link>
            </CardTitle>

            <Box
              className={clsx(
                "flex gap-2 items-center",
                "font-serif text-sm leading-none font-semibold",
                "text-gray-400 bg-white dark:bg-white/5"
              )}
            >
              <span>{nop} Items</span>
              {" "}{"|"}{" "}
              <span>{likes} Likes</span>
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
  likes: PropTypes.number
};
