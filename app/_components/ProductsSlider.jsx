"use client";

import { useState } from "react";

import classNames from "classnames";

import {
  Swiper,
  SwiperSlide
} from "swiper/react";

import {
  Scrollbar,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/scrollbar";

import { products } from "@utils/data";

import ProductCard from "@components/cards/ProductCard";

function ProductsSlider() {
  const [swiper, setSwiper] = useState(false);

  return (
    <Swiper
      onSwiper={(swiper) => setSwiper(swiper)}
      slidesPerView={2}
      spaceBetween={4}
      scrollbar={true}
      grabCursor={true}
      speed={300}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 8,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1280: {
          slidesPerView: 3,
        },
        1560: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      }}
      modules={[
        Scrollbar,
      ]}
      className={
        classNames(
          "swiper--product",
          // "!-mx-4 sm:!-mx-0",
          "!overflow-visible",
        )
      }
    >
      {
        products?.map((product) => (
          <SwiperSlide
            key={product.id}
          >
            <ProductCard
              // image={product.image}
              image={"https://fabrilife.com/products/651d273a8e82b-square.jpg?v=20"}
              name={product.name}
              slug={product.slug}
              category={product.category}
              price={product.price}
            />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
}

export default ProductsSlider;
