import { Suspense } from "react";

import Main from "@components/layouts/main";

import FilterProducts from "./_components/filter-products";

import BannerSection from "./_sections/banner-section";
import ProductsSection from "./_sections/products-section";
import HistorySection from "./_sections/history-section";
import VendorsSection from "./_sections/vendors-section";
import PopularProductsSection from "./_sections/popular-products-section";

import ProductsSectionSkeleton
  from "@components/custom/Skeleton/ProductsSectionSkeleton";
import VendorsSectionSkeleton
  from "@components/custom/Skeleton/VendorsSectionSkeleton";

export default function Home() {
  return (
    <>
      <FilterProducts />

      <Main>
        <BannerSection />

        <Suspense fallback={<ProductsSectionSkeleton />}>
          <ProductsSection />
        </Suspense>

        <HistorySection />

        <Suspense fallback={<VendorsSectionSkeleton />}>
          <VendorsSection />
        </Suspense>

        <PopularProductsSection />
      </Main>
    </>
  );
}
