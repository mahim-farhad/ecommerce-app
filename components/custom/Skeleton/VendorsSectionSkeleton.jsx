import { Skeleton } from "@components/ui/skeleton";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import { Grid, GridItem } from "@components/layouts/grid";

export default function VendorsSectionSkeleton() {
  return (
    <Section>
      <Container>
        <Grid className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {Array.from({ length: 10 }, (_, index) => (
            <GridItem key={index} className="col-span-1">
              <div className="flex flex-col space-y-2 ">
                <Skeleton className="h-[150px] lg:h-[200px]" />

                <Box className="flex items-center gap-2">
                  <Skeleton className="flex-shrink-0 h-10 w-10 rounded-full" />

                  <Box className="space-y-2">
                    <Skeleton className="h-2 w-[150px] lg:w-[200px]" />
                    <Skeleton className="h-2 sm:w-[120px] lg:w-[150px]" />
                  </Box>
                </Box>
              </div>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
