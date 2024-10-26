"use client";

import { Suspense, useEffect } from "react";

import Main from "@components/layouts/main";

import FilterProducts from "./_components/filter-products";

import BannerSection from "./_sections/banner-section";
import ProductsSection from "./_sections/products-section";
import VendorsSection from "./_sections/vendors-section";
import PopularProductsSection from "./_sections/popular-products-section";

import ProductsSectionSkeleton
  from "@components/custom/Skeleton/ProductsSectionSkeleton";
import VendorsSectionSkeleton
  from "@components/custom/Skeleton/VendorsSectionSkeleton";
import Button from "@components/ui/button";
import Box from "@components/layouts/box";
import HeaderSlider from "./_components/slider";

export default function Home() {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/service-worker.js')
          .then(registration => {
            console.log('Service Worker registered with scope:', registration.scope);
          })
          .catch(error => {
            console.error('Service Worker registration failed:', error);
          });
      });
    }
  }, []);

  return (
    <>
      {/* <FilterProducts /> */}

      <BannerSection />

      <Main>
        {/* <Suspense fallback={<ProductsSectionSkeleton />}>
          <ProductsSection />
        </Suspense> */}

        {/* <Suspense fallback={<VendorsSectionSkeleton />}>
          <VendorsSection />
        </Suspense>

        <PopularProductsSection /> */}
      </Main>
    </>
  );
}
