import Typography from "@components/ui/typography";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import {
  Grid, GridItem
} from "@components/layouts/grid";

import ProductCard from "@components/cards/product-card";

export default function ProductsSection({ productsData }) {
  console.log(productsData.data)
  return (
    <Section>
      <Container>
        <Grid className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {productsData?.data?.map((product) => (
            <GridItem key={product?.id} className="col-span-1">
              <ProductCard
                id={product?.attributes?.productId}
                image={product?.attributes?.productImage}
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
