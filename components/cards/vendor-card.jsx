"use client";

import PropTypes from "prop-types";

import clsx from "clsx";

import { Heart, Eye } from "lucide-react";

// import { useWishlist } from "@contexts/WishlistContext";

import Icon from "@components/ui/icon";
import Link from "@components/ui/link";
import Typography from "@components/ui/typography";
import Image from "@components/ui/image";
import Button from "@components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@components/ui/card";

import Box from "@components/layouts/box";
import CustomIcon from "@components/ui/custom-icon";

export default function VendorCard({
  id,
  image,
  name,
  slug,
  brand,
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
            {/* <Icon
              name="Heart"
              className={clsx(
                Boolean(isItemExist) &&
                "text-primary fill-primary"
              )}
            /> */}
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
                  "text-sm leading-none font-semibold",
                  "uppercase",
                  "text-primary",
                )}
              >
                {name}
              </Link>
            </CardTitle>

            <Typography
              type="small"
              className={clsx(
                "font-medium",
                "text-gray-400",
              )}
            >
              {nop || 0} Items
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

// VendorCard.propTypes = {
//   id: PropTypes.string.isRequired,
//   image: PropTypes.string,
//   name: PropTypes.string,
//   slug: PropTypes.string,
//   category: PropTypes.string,
//   price: PropTypes.number
// };
