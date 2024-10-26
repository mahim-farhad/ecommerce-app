import clsx from "clsx";

import { getProducts } from "@api/products";

import Typography from "@components/ui/typography";
import Link from "@components/ui/link";
import Icon from "@components/ui/icon";
import Button from "@components/ui/button";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import { Grid, GridItem } from "@components/layouts/grid";

import ProductCard from "@components/cards/product-card";

function SectionTitle({
  title,
  subTitle
}) {
  return (
    <Box
      className={clsx(
        "relative",
        "mb-8 sm:mb-12 lg:mb-16",
      )}
    >
      {
        title &&
        <Typography
          type="h2"
          className={clsx(
            "mb-0 lg:mb-4",
            "ml-0 lg:-ml-[3px]",
            "font-block",
            "text-lg lg:text-4xl",
          )}
        >
          {title}
        </Typography>
      }

      {
        subTitle &&
        <Typography
          className={clsx(
            "relative",
            "p-1 lg:p-1.5",
            "inline-block",
            "before:content-['']",
            "before:absolute",
            "before:inset-0",
            "before:block",
            "before:-skew-y-2",
            "before:bg-accent",
          )}
        >
          <Typography
            type="p"
            className={clsx(
              "-rotate-2",
              "px-2",
              "text-xs lg:text-base",
              "font-medium",
              "text-white",
            )}
          >
            {subTitle}
          </Typography>
        </Typography>
      }

      <Box
        className={clsx(
          "absolute",
          "right-0",
          "bottom-0",
          "inline-flex",
          "justify-center",
          "items-center",
          "p-0.5",
          "border-2",
          "border-dashed",
          "border-secondary-300",
          "rounded-full",
        )}
      >
        <Link
          href="/"
          className={clsx(
            "inline-flex",
            "gap-2",
            "justify-center",
            "items-center",
            "w-8 sm:w-auto",
            "h-8 lg:h-10",
            "sm:py-2",
            "sm:px-4",
            "text-sm",
            "font-medium",
            "uppercase",
            "text-white dark:text-black",
            "bg-primary",
            "rounded-full",
          )}
        >
          <span
            className={clsx(
              "hidden sm:block",
            )}
          >
            Explore More
          </span>

          <Icon
            name="ArrowRight"
          />
        </Link>
      </Box>
    </Box>
  );
}

export default async function Products() {
  const productsData = await getProducts();

  return (
    <Section>
      <Container>
        <Box className="mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <SectionTitle
            title="Featured Products"
            subTitle="Top Sellling eSports Jerseys"
          />
        </Box>

        <Grid className="grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {productsData?.data?.map((product) => (
            <GridItem key={product?.id} className="col-span-1">
              <ProductCard
                id={product?.attributes?.productId}
                image={product?.attributes?.productImage}
                name={product?.attributes?.productName}
                slug={product?.attributes?.productSlug}
                description={product?.attributes?.productDescription}
                category={
                  product?.attributes?.categories?.data?.[0]?.attributes
                    ?.categoryName
                }
                vendor={product?.attributes?.vendor?.data}
                price={product?.attributes?.productPrice}
              />
            </GridItem>
          ))}

          {/* <GridItem className="col-span-full">
            <div className="flex flex-col items-center gap-y-4 sm:gap-y-8">
              <Typography className="text-sm uppercase text-muted-foreground">
                Showing 20 of 25 products
              </Typography>

              <Box className="w-60 h-0.5 bg-gray-200">
                <Box className="w-full h-0.5 max-w-40 bg-primary" />
              </Box>

              <Button>
                Load more
              </Button>
            </div>
          </GridItem> */}
        </Grid>
      </Container>
    </Section>
  );
}
