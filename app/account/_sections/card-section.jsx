"use client";

import { useCart } from "@contexts/CartContext";

import Typography from "@components/ui/typography";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import { Grid, GridItem } from "@components/layouts/grid";

import CartCard from "@components/cards/cart-card";

export default function CartSection() {
  const {
    items,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItemFromCart
  } = useCart();

  return (
    <Section id="cart">
      <Container>
        <Box className="mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <Typography type="h2">Shopping Cart</Typography>
        </Box>

        <Grid className="md:grid-cols-2 gap-4 sm:gap-8">
          {items <= 0 &&
            <GridItem>
              <Typography type="h6" className="text-muted-foreground">
                There is no products in the cart
              </Typography>
            </GridItem>
          }

          {items?.map((item) => (
            <GridItem key={item?.id} className="col-span-1">
              <CartCard
                id={item?.id}
                image={item?.image}
                name={item?.name}
                price={item?.price}
                quantity={item?.quantity}
                incrementQuantity={incrementItemQuantity}
                decrementQuantity={decrementItemQuantity}
                removeFromCart={removeItemFromCart}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
