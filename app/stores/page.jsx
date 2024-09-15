import { Suspense } from "react";

import Main from "@components/layouts/main";

import FilterProducts from "@app/_components/filter-products";

import VendorsSection from "@app/_sections/vendors-section";

import VendorsSectionSkeleton
  from "@components/custom/Skeleton/VendorsSectionSkeleton";

export default function vendors() {
  return (
    <>
      <FilterProducts />

      <Main>
        <Suspense fallback={<VendorsSectionSkeleton />}>
          <VendorsSection />
        </Suspense>
      </Main>
    </>
  );
}
