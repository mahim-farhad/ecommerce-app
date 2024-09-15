import { Suspense } from "react";

import Main from "@components/layouts/main";

import FilterProducts from "@app/_components/filter-products";

import ProductsSection from "@app/_sections/products-section";
import PopularProductsSection
  from "@app/_sections/popular-products-section";

import ProductsSectionSkeleton
  from "@components/custom/Skeleton/ProductsSectionSkeleton";

export default function Shop() {
  return (
    <>
      <FilterProducts />

      <Main>
        <Suspense fallback={<ProductsSectionSkeleton />}>
          <ProductsSection />
        </Suspense>

        <PopularProductsSection />
      </Main>
    </>
  );
}
