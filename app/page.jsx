"use client";

import { Suspense } from "react";

import { Skeleton } from "@components/ui/skeleton";

import Main from "@components/layouts/main";

import FilterProducts from "./_components/filter-products";

import BannerSection from "./_sections/banner-section";
import ProductsSection from "./_sections/products-section";
import PopularProducts from "./_sections/popular-products-section";
import VendorsSection from "./_sections/vendors-section";
import HistorySection from "./_sections/history-section";

export default function Home() {
  return (
    <>
      <FilterProducts />

      <Main>
        <BannerSection />

        <Suspense fallback={<Skeleton />}>
          <ProductsSection />
        </Suspense>

        <HistorySection />

        <Suspense fallback={<Skeleton />}>
          <VendorsSection />
        </Suspense>

        <Suspense fallback={<Skeleton />}>
          <PopularProducts />
        </Suspense>
      </Main>
    </>
  );
}
