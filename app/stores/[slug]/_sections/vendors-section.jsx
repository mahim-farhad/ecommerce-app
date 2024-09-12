import businessesData from "@data/vendors.json";

import Typography from "@components/ui/typography";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import {
  Grid, GridItem
} from "@components/layouts/grid";

import VendorCard from "@components/cards/vendor-card";

export default function VendorsSection() {
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
          {businessesData?.businesses?.map((business) => (
            <GridItem key={business?.id} className="col-span-1">
              <VendorCard
                id={business?.id}
                // image={"https://woocommerce.com/wp-content/uploads/2020/07/blog-fb-Multivendor@2x.jpg"}
                image={"https://yevgenysim-turkey.github.io/shopper/assets/img/brands/black/river-island.svg"}
                name={business.name}
                slug={business?.name}
                brand={business?.vendor}
                yop={business?.yearsOfOperation}
                nop={business?.numberOfProducts}
                likes={business?.likes}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
