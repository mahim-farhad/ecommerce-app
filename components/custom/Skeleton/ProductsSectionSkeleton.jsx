import { Skeleton } from "@components/ui/skeleton";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import { Grid, GridItem } from "@components/layouts/grid";

export default function ProductsSectionSkeleton() {
  return (
    <Section>
      <Container>
        <Grid className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
          {Array.from({ length: 20 }, (_, index) => (
            <GridItem key={index} className="col-span-1">
              <div className="flex flex-col space-y-4 ">
                <Skeleton className="h-[175px] lg:h-[225px]" />

                <Box className="space-y-2">
                  <Skeleton className="h-2 w-[150px] lg:w-[250px]" />
                  <Skeleton className="h-2 sm:w-[120px] lg:w-[200px]" />
                </Box>
              </div>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
