"use client";

import clsx from "clsx";

import Autoplay from "embla-carousel-autoplay";

import Typography from "@components/ui/typography";
import Icon from "@components/ui/icon";
import Link from "@components/ui/link";
import Image from "@components/ui/image";
import Button from "@components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@components/ui/carousel";
import { Card, CardHeader, CardContent } from "@components/ui/card";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import { Grid, GridItem } from "@components/layouts/grid";

export default function BannerSection() {
  const carouselOptions = {
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: false,
    containScroll: "trimSnaps",
    draggable: true,
    speed: 10,
    dragThreshold: 1,
    slidesToScroll: 1,
  };

  return (
    <Section className="!py-0">
      <Container>
        <Grid
          className={clsx(
            "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
            "gap-4 lg:gap-8"
          )}
        >
          <GridItem className="col-span-full xl:col-span-full">
            <Carousel
              opts={carouselOptions}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                {/* {productsData?.products?.map((product) => ( */}
                <CarouselItem>
                  <Card className={clsx("overflow-hidden", "group")}>
                    <CardHeader>
                      <Link
                        className={clsx(
                          "w-full h-full",
                          "h-full",
                          "overflow-hidden"
                        )}
                      >
                        <picture>
                          <source media="(min-width: 1024px)" srcset="https://www.fanatics.com/content/ws/all/cce122ce-4f3d-466d-a0ca-31f40593c02f__3200X1200.png" width="3200" height="1200" />
                          <source media="(min-width: 640px)" srcset="https://www.fanatics.com/content/ws/all/32863b17-6909-4044-a279-944414c065fc__3200X1200.png" width="3200" height="1200" />
                          <source media="(min-width: 0px)" srcset="https://www.fanatics.com/content/ws/all/4a018ac3-43d8-4cf1-a3f2-810b98c4c80d__1280X1600.png" width="1280" height="1600" />
                          <img loading="lazy" alt="NFL Nike Football Shop Now" />
                        </picture>
                      </Link>
                    </CardHeader>
                  </Card>
                </CarouselItem>

                <CarouselItem>
                  <Card className={clsx("overflow-hidden", "group")}>
                    <CardHeader>
                      <Link
                        className={clsx(
                          "w-full h-full",
                          "h-full",
                          "overflow-hidden"
                        )}
                      >
                        <picture>
                          <source media="(min-width: 1024px)" srcset="https://www.fanatics.com/content/ws/all/aba33cda-4387-4fdd-93ac-c86196e8f0ae__3200X1200.png" width="3200" height="1200" />
                          <source media="(min-width: 640px)" srcset="https://www.fanatics.com/content/ws/all/af4f5ba3-2953-4ce5-8349-fa08e99085de__3200X1200.png" width="3200" height="1200" />
                          <source media="(min-width: 0px)" srcset="https://www.fanatics.com/content/ws/all/a6690f35-7821-4e8e-b95f-c26fd7ea0f5e__1280X1800.png" width="1280" height="1600" />
                          <img loading="lazy" alt="NFL Nike Football Shop Now" />
                        </picture>
                      </Link>
                    </CardHeader>

                    <CardContent className={clsx("z-10 absolute bottom-0")}>

                    </CardContent>
                  </Card>
                </CarouselItem>
                {/* ))} */}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </GridItem>

          <GridItem className="col-span-1">
            <Card>
              <CardHeader>
                <Link>
                  <Image
                    src="https://www.fanatics.com/content/ws/all/e0e9e29f-e370-43b3-a2c5-a8e4661d6e78__1600X1108.png"
                    alt=""
                  />
                </Link>
              </CardHeader>
            </Card>
          </GridItem>

          <GridItem className="col-span-1">
            <Card>
              <CardHeader>
                <Link>
                  <Image
                    src="https://www.fanatics.com/content/ws/all/799fe510-67da-4655-9360-74d4f2b396a5__1600X1108.png"
                    alt=""
                  />
                </Link>
              </CardHeader>
            </Card>
          </GridItem>

          <GridItem className="col-span-1">
            <Card>
              <CardHeader>
                <Link>
                  <Image
                    src="https://www.fanatics.com/content/ws/all/c7bd4952-d3ca-4602-9fa8-e477d13c2510__1600X1108.png"
                    alt=""
                  />
                </Link>
              </CardHeader>
            </Card>
          </GridItem>
        </Grid>
      </Container>
    </Section>
  );
}
