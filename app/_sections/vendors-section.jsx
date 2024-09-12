import { getVendors } from "@api/vendors";

import Typography from "@components/ui/typography";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import {
  Grid, GridItem
} from "@components/layouts/grid";

import VendorCard from "@components/cards/vendor-card";

export default async function VendorsSection() {
  const vendorsData = await getVendors(1, 20);

  return (
    <Section>
      <Container>
        <Box className="mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <Typography className="text-gray-400">
            Top Sellers
          </Typography>

          <Typography type="h2">
            Featured Vendors
          </Typography>
        </Box>

        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {vendorsData?.data?.map((vendor) => (
            <GridItem key={vendor?.id} className="col-span-1">
              {console.log(vendor?.attributes)}
              <VendorCard
                id={vendor?.attributes?.vendorId}
                // image={"https://woocommerce.com/wp-content/uploads/2020/07/blog-fb-Multivendor@2x.jpg"}
                image={"https://yevgenysim-turkey.github.io/shopper/assets/img/brands/black/river-island.svg"}
                name={vendor?.attributes?.vendorName}
                slug={vendor?.attributes?.vendorSlug}
                yop={vendor?.attributes?.yearsOfOperation}
                nop={vendor?.attributes?.products?.data?.length}
                likes={vendor?.attributes?.likes}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
