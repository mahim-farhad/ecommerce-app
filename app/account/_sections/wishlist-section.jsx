"use client";

import { useWishlist } from "@contexts/WishlistContext";

import Typography from "@components/ui/typography";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

export default async function WishlistSection() {
  const { items } = useWishlist();

  return (
    <Section>
      <Container>
        <Box className="mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <Typography className="text-gray-400">Secure Conn</Typography>

          <Typography type="h2">Wishlist</Typography>

          {items.map((item) => (
            <Typography>{item.name}</Typography>
          ))}
        </Box>
      </Container>
    </Section>
  );
}
