import productsData from "@data/products.json";

import Typography from "@components/ui/typography";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import {
  Grid, GridItem
} from "@components/layouts/grid";

import ProductCard from "@components/cards/product-card";

export default function ProductsSection() {
  return (
    <Section>
      <Container>
        <Grid className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {productsData?.products?.map((product) => (
            <GridItem key={product?.id} className="col-span-1">
              <ProductCard
                id={product?.id}
                // image={"https://i.ibb.co.com/rxrf3sZ/file.png"}
                image={"https://www.thebengalstore.com/uploads/product/image/134334334466934661722066280.jpg"}
                title={product.description}
                slug={product?.name}
                brand={product?.vendor}
                category={product?.category}
                price={product?.price}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
