"use client";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@components/ui/carousel";

import ProductCard from "@components/cards/product-card";

export default function ProductsCarousel({ productsData }) {
  const carouselOptions = {
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: false,
    containScroll: "trimSnaps",
    draggable: true,
    speed: 10,
    dragThreshold: 1,
    slidesToScroll: 1,
  };

  return (
    <Carousel
      opts={carouselOptions}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {productsData?.data?.map((product) => (
          <CarouselItem
            key={product?.id}
            className="basis-1/2 lg:basis-1/3 xl:basis-1/4"
          >
            <ProductCard
              id={product?.attributes?.productId}
              image={
                product?.attributes?.productImage ||
                "https://www.thebengalstore.com/uploads/product/image/134334334466934661722066280.jpg"
              }
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
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
