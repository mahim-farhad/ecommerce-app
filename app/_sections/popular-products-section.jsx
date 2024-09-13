import { getProducts } from "@api/products";

import Typography from "@components/ui/typography";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

import ProductsCarousel from "../_components/products-carousel";

export default async function PopularProducts() {
  const productsData = await getProducts();

  return (
    <Section>
      <Container>
        <Box className="mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <Typography className="text-gray-400">Top Rated</Typography>

          <Typography type="h2" className="font-extrabold">
            Popular Products
          </Typography>
        </Box>

        <ProductsCarousel productsData={productsData} />
      </Container>
    </Section>
  );
}
