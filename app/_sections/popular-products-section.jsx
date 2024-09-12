"use client";

import Autoplay from "embla-carousel-autoplay";

import productsData from "@data/products.json";

import Typography from "@components/ui/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

import ProductCard from "@components/cards/product-card";

export default function PopularProducts() {
  const carouselOptions = {
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps',
    draggable: true,
    speed: 10,
    dragThreshold: 1,
    slidesToScroll: 1
  }

  return (
    <Section>
      <Container>
        <Box className="mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <Typography className="text-gray-400">
            Top Rated
          </Typography>

          <Typography type="h2" className="font-extrabold">
            Popular Products
          </Typography>
        </Box>

        <Carousel
          opts={carouselOptions}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent>
            {productsData?.products?.map((product) => (
              <CarouselItem
                key={product?.id}
                className="basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <ProductCard
                  id={product?.id}
                  image={"https://i.ibb.co.com/rxrf3sZ/file.png"}
                  title={product.description}
                  slug={product?.name}
                  brand={product?.vendor}
                  category={product?.category}
                  price={product?.price}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </Section>
  );
}
