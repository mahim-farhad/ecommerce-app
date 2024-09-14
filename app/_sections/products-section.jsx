import { getProducts } from "@api/products";

import Typography from "@components/ui/typography";
import Button from "@components/ui/button";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import { Grid, GridItem } from "@components/layouts/grid";

import ProductCard from "@components/cards/product-card";

export default async function Products() {
  const productsData = await getProducts();

  return (
    <Section>
      <Container>
        <Box className="mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <Typography className="text-gray-400">Top Sellling</Typography>

          <Typography type="h2">Featured Products</Typography>
        </Box>

        <Grid className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
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
            <div className="flex flex-col gap-y-4 sm:gap-y-8 items-center">
              <Typography className="text-sm text-muted-foreground uppercase">
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
