import { Suspense } from "react";

import { Skeleton } from "@components/ui/skeleton";

import Main from "@components/layouts/main";

import FilterProducts from "@app/_components/filter-products";

import ProductsSection from "@app/_sections/products-section";
import PopularProductsSection from "@app/_sections/popular-products-section";

export default function Shop() {
  return (
    <>
      <FilterProducts />

      <Main>
        <Suspense fallback={<Skeleton className="w-40 h-60 bg-gray-300" />}>
          <ProductsSection />
        </Suspense>

        <Suspense fallback={<Skeleton className="w-40 h-60 bg-gray-300" />}>
          <PopularProductsSection />
        </Suspense>
      </Main>
    </>
  );
}
