import clsx from "clsx";

import Badge from "@components/ui/badge";
import Typography from "@components/ui/typography";
import Icon from "@components/ui/icon";
import Image from "@components/ui/image";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

export default function BannerSection({ vendorData }) {
  const brand = {
    name: vendorData?.vendorName,
    description: "Sustainable fashion for the modern world",
    image: "https://www.expertmarketresearch.com/files/images/top-handicrafts-companies-globally.png",
    products: vendorData?.products?.data?.length,
    yearsOfOperation: vendorData?.yearsOfOperation,
    likes: vendorData?.likes,
  }

  return (
    <Section className="!pt-0">
      <Container>
        <Box className="relative overflow-hidden">
          <Image
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

            <Box
              className={clsx(
                "inline-flex flex-wrap gap-2 items-center",
              )}
            >
              <Badge
                variant="secondary"
                className={clsx(
                  "py-1.5 sm:pt-2 px-4",
                  "font-serif text-sm leading-none font-semibold",
                  "text-gray-400 dark:!text-black",
                  "bg-white dark:bg-white",
                )}
              >
                {brand.likes.toLocaleString()}
                <Icon
                  name="Heart"
                  size="xs"
                  className="text-primary dark:text-black"
                />
              </Badge>

              <Badge
                variant="secondary"
                className={clsx(
                  "py-1.5 sm:pt-2 px-4",
                  "font-serif text-sm leading-none font-semibold",
                  "text-gray-400 dark:!text-black",
                  "bg-white dark:bg-white",
                )}
              >
                {brand.products} Products
                <Icon
                  name="Package"
                  size="xs"
                  className="text-primary dark:text-black"
                />
              </Badge>

              <Badge
                variant="secondary"
                className={clsx(
                  "py-1.5 sm:pt-2 px-4",
                  "font-serif text-sm leading-none font-semibold",
                  "text-gray-400 dark:!text-black",
                  "bg-white dark:bg-white",
                )}
              >
                {brand.yearsOfOperation}{" "}
                Years in Business
              </Badge>
            </Box>
          </div>
        </Box>
      </Container>
    </Section>
  );
}
