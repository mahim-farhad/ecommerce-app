import { getVendor } from "@api/vendors";

import Main from "@components/layouts/main";

import BannerSection from "./_sections/banner-section";
import ProductsSection from "./_sections/products-section";
import FilterProducts from "@app/_components/filter-products";

export default async function BrandShowcase({ params }) {
  const vendorData = await getVendor(params?.slug);

  return (
    <Main>
      <BannerSection vendorData={vendorData?.data[0]?.attributes} />

      <FilterProducts />

      <ProductsSection
        productsData={vendorData?.data[0]?.attributes?.products}
      />
    </Main>
  );
}
