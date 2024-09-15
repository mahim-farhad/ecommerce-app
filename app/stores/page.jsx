import { Suspense } from "react";

import { Skeleton } from "@components/ui/skeleton";

import Main from "@components/layouts/main";

import FilterProducts from "@app/_components/filter-products";

import VendorsSection from "@app/_sections/vendors-section";

export default function vendors() {
  return (
    <>
      <FilterProducts />

      <Main>
        <Suspense fallback={<Skeleton className="w-40 h-60 bg-gray-300" />}>
          <VendorsSection />
        </Suspense>
      </Main>
    </>
  );
}
