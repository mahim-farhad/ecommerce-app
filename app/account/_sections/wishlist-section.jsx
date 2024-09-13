"use client";

import { useWishlist } from "@contexts/WishlistContext";

import Typography from "@components/ui/typography";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import { Grid, GridItem } from "@components/layouts/grid";

import CartCard from "@components/cards/cart-card";

export default function WishlistSection() {
  const { items } = useWishlist();

  return (
    <Section>
      <Container>
        <Box className="mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <Typography type="h2">Wishlist</Typography>
        </Box>

        <Grid className="lg:grid-cols-2">
          {items?.map((item) => (
            <GridItem key={item?.id} className="col-span-1">
              <CartCard
                id={item?.id}
                image={item?.image}
                name={item?.name}
                price={item?.price}
                quantity={item?.quantity}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
