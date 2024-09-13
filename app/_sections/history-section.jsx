import clsx from "clsx";

import Typography from "@components/ui/typography";
import Link from "@components/ui/link";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import { Grid, GridItem } from "@components/layouts/grid";

export default function HistorySection() {
  return (
    <Section>
      <Container>
        <Grid
          className={clsx(
            "lg:grid-cols-2",
            "gap-8 md:gap-12 lg:gap-16 xl:gap-20",
            "items-center justify-between"
          )}
        >
          <GridItem className="col-span-full lg:col-span-1">
            <Box className="flex flex-col justify-center items-center">
              <img
                src="https://www.empoweryouthforwork.org/assets/2018/04/Webp.net-resizeimage-3-768x536.jpg"
                alt="..."
                className="z-10 h-auto max-w-full w-3/4 -mb-24 mr-auto"
              />

              <img
                src="https://www.empoweryouthforwork.org/assets/2018/04/Optimized-DSC_9417-768x505.jpg"
                alt="..."
                className="h-auto max-w-full w-3/4  ml-auto"
              />
            </Box>
          </GridItem>

          <GridItem className="col-span-full lg:col-span-1">
            <Box className="lg:mr-12">
              <Typography className="text-gray-400">
                Handicrafts History
              </Typography>

              <Typography type="h2" className="mb-8">
                About Bangladesh Handicrafts
              </Typography>

              <Typography className={clsx("text-base", "text-gray-400")}>
                Open created shall two he second moving whose. He face whose two
                upon, fowl behold waters. Fly there their day creepeth. Darkness
                beginning spirit after. Creepeth subdue. Brought may, first.
                Under living that.
              </Typography>

              <Typography
                className={clsx("mt-4 mb-8", "text-base", "text-gray-400")}
              >
                Third. For morning whales saw were had seed can't Boxide it
                light shall moveth, us blessed given wherein.
              </Typography>

              <Link href="/history" className="font-medium underline">
                Discover more
              </Link>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  );
}
