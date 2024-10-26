"use client";

import clsx from "clsx";

import {
  Swiper,
  SwiperSlide
} from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/thumbs";

import {
  Pagination,
} from "swiper/modules";

import Box from "@components/layouts/box";

function HeaderSlider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      pagination={true}
      speed={300}
      modules={[
        Pagination
      ]}
      className={clsx(
        "z-10",
        "relative",
        "block",
        "p-0",
        "mx-auto",
        "list-none",
        "!overflow-hidden",
      )}
    >
      <SwiperSlide>
        <Box
          className={clsx(
            "relative",
            "flex",
            "flex-col",
            "justify-between",
            "w-full",
            "overflow-hidden",
            "bg-gray-100",
          )}
        >
          <picture>
            <source media="(max-width: 480px)" srcset="https://fabrilife.com/image-gallery/663c8117d9b40.jpg" />
            <source media="(max-width: 900px)" srcset="https://fabrilife.com/image-gallery/663c8117d340a.jpg" />
            <source media="(max-width: 1200px)" srcset="https://fabrilife.com/image-gallery/663c8117d80f7.jpg" />
            <img src="https://fabrilife.com/image-gallery/663c8117d711e.jpg" alt="Fabrilife Home Top" />
          </picture>
        </Box>
      </SwiperSlide>

      <SwiperSlide>
        <Box
          className={clsx(
            "relative",
            "flex",
            "flex-col",
            "justify-between",
            "w-full",
            "overflow-hidden",
            "bg-gray-100",
          )}
        >
          <picture>
            <source media="(max-width: 640px)" srcset="https://fabrilife.com/image-gallery/646fda602304c.jpg" />
            <source media="(max-width: 1024px)" srcset="https://fabrilife.com/image-gallery/646fda60213f3.jpg" />
            <source media="(max-width: 1280px)" srcset="https://fabrilife.com/image-gallery/646fda60213f3.jpg" />
            <img src="https://fabrilife.com/image-gallery/646fda60251a3.jpg" alt="Fabrilife Home Top" loading="lazy" class="w-full object-cover" />
          </picture>
        </Box>
      </SwiperSlide>
    </Swiper>
  );
}

export default HeaderSlider;
