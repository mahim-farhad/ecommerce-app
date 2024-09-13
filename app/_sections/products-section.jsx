// import { getProducts } from "@api/products";

import Typography from "@components/ui/typography";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import {
  Grid, GridItem
} from "@components/layouts/grid";

import ProductCard from "@components/cards/product-card";

export async function getProducts() {
  try {
    const res = await fetch(
      `https://bangladesh-handicrafts-server.onrender.com/api/products?populate=*`,
      {
        next: { revalidate: 10 },
      }
    );
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching products: ${error}`);
    return null;
  }
}

export default async function Products() {
  const productsData = await getProducts(1, 20);

  return (
    <Section>
      <Container>
        <Box className="mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <Typography className="text-gray-400">
            Top Sellling
          </Typography>

          <Typography type="h2">
            Featured Products
          </Typography>
        </Box>

        <Grid className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {productsData?.data?.map((product) => (
            <GridItem key={product?.id} className="col-span-1">
              <ProductCard
                id={product?.attributes?.productId}
                image={product?.attributes?.productImage || "https://www.thebengalstore.com/uploads/product/image/134334334466934661722066280.jpg"}
                name={product?.attributes?.productName}
                slug={product?.attributes?.productSlug}
                description={product?.attributes?.productDescription}
                category={product?.attributes?.categories?.data?.[0]?.attributes?.categoryName}
                vendor={product?.attributes?.vendor?.data}
                price={product?.attributes?.productPrice}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
