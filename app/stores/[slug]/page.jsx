import Main from "@components/layouts/main";

import BannerSection from "./_sections/banner-section";
import ProductsSection from "./_sections/products-section";

export default function BrandShowcase({ params }) {
  return (
    <Main>
      <BannerSection />

      <ProductsSection />
    </Main>
  );
}
