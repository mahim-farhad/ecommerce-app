import clsx from "clsx";

import { Heart, Package } from "lucide-react";

import Badge from "@components/ui/badge";
import Typography from "@components/ui/typography";
import Icon from "@components/ui/icon";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

export default function BannerSection() {
  const brand = {
    name: "Bangladesh Artisans",
    description: "Sustainable fashion for the modern world",
    likes: 15234,
    products: 89,
    yearsOfOperation: 7,
    image: "https://www.expertmarketresearch.com/files/images/top-handicrafts-companies-globally.png"
  }

  return (
    <Box>
      <Container>
        <Box className="relative overflow-hidden">
          <img
            src={brand.image}
            alt={brand.name}
            width={800}
            height={400}
            className="w-full h-[400px] xl:h-[500px] object-cover"
          />

          <div
            className={clsx(
              "absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end",
              "p-4 sm:p-8"
            )}
          >
            <Typography
              type="h3"
              className={clsx(
                "md:text-4xl lg:text-4xl xl:text-5xl ",
                "leading-tight",
                "text-white",
              )}
            >
              {brand.name}
            </Typography>

            <Typography
              className={clsx(
                "w-4/5 mt-2 mb-8",
                "leading-tight",
                "text-white",
              )}
            >
              {brand.description}
            </Typography>

            <div className="flex flex-wrap gap-4">
              <Badge variant="secondary" className="flex items-center gap-1">
                <Heart className="w-4 h-4" /> {brand.likes.toLocaleString()}
              </Badge>

              <Badge variant="secondary" className="flex items-center gap-1">
                <Package className="w-4 h-4" /> {brand.products} Products
              </Badge>

              <Badge variant="secondary">
                {brand.yearsOfOperation} Years in Business
              </Badge>
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
