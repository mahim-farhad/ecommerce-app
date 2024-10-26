import { getVendors } from "@api/vendors";

import Typography from "@components/ui/typography";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import { Grid, GridItem } from "@components/layouts/grid";

import VendorCard from "@components/cards/vendor-card";

export default async function VendorsSection() {
  const vendorsData = await getVendors();

  return (
    <Section>
      <Container>
        <Box className="mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <Typography className="text-gray-400">Top Sellers</Typography>

          <Typography type="h2" className="font-block">Featured Vendors</Typography>
        </Box>

        <Grid className="grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {vendorsData?.data?.map((vendor) => (
            <GridItem key={vendor?.id} className="col-span-1">
              <VendorCard
                id={vendor?.attributes?.vendorId}
                image={vendor?.attributes?.vendorBanner}
                name={vendor?.attributes?.vendorName}
                slug={vendor?.attributes?.vendorSlug}
                logo={vendor?.attributes?.vendorLogo}
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
