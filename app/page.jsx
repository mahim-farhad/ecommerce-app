import { Suspense } from "react";

import { Skeleton } from "@components/ui/skeleton";

import Main from "@components/layouts/main";

import FilterProducts from "./_components/filter-products";

import BannerSection from "./_sections/banner-section";
import ProductsSection from "./_sections/products-section";
import HistorySection from "./_sections/history-section";
import VendorsSection from "./_sections/vendors-section";
import PopularProducts from "./_sections/popular-products-section";

export default function Home() {
  return (
    <>
      <FilterProducts />

      <Main>
        <BannerSection />

        <Suspense fallback={<Skeleton className="w-40 h-60 bg-gray-300" />}>
          <ProductsSection />
        </Suspense>

        <HistorySection />

        <Suspense fallback={<Skeleton className="w-40 h-60 bg-gray-300" />}>
          <VendorsSection />
        </Suspense>

        <Suspense fallback={<Skeleton className="w-40 h-60 bg-gray-300" />}>
          <PopularProducts />
        </Suspense>
      </Main>
    </>
  );
}
