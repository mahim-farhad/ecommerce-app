import { getVendor } from "@api/vendors";

import Typography from "@components/ui/typography";

import Main from "@components/layouts/main";

import BannerSection from "./_sections/banner-section";
import FilterProducts from "@app/_components/filter-products";
import ProductsSection from "./_sections/products-section";
import Section from "@components/layouts/section";
import Container from "@components/layouts/container";

export default async function BrandShowcase({ params }) {
  const vendorData = await getVendor(params?.slug);

  return (
    <Main>
      {/* <BannerSection vendorData={vendorData?.data[0]?.attributes} /> */}

      <Section>
        <Container>
          {vendorData?.data?.map((vendor) => (
            <div className="w-2/5 p-8 border">
              <Typography className="text-gray-400">
                {vendor?.attributes?.courseName}
              </Typography>
            </div>
          ))}
        </Container>
      </Section>

      {/* <ProductsSection
        productsData={vendorData?.data[0]?.attributes?.products}
      /> */}
    </Main>
  );
}
