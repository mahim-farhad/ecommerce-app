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
import { Grid, GridItem } from "@components/layouts/grid";
import Box from "@components/layouts/box";

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
    <Box>
      <Container className="!w-full !px-0 xl:px-0">
        <Grid
          className={clsx(
            "grid-cols-2 md:grid-cols-3 xl:grid-cols-5",
            "gap-2 sm:gap-4"
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
                          <source media="(max-width: 480px)" srcset="https://fabrilife.com/image-gallery/663c8117d9b40.jpg" />
                          <source media="(max-width: 900px)" srcset="https://fabrilife.com/image-gallery/663c8117d340a.jpg" />
                          <source media="(max-width: 1200px)" srcset="https://fabrilife.com/image-gallery/663c8117d80f7.jpg" />
                          <img src="https://fabrilife.com/image-gallery/663c8117d711e.jpg" alt="Fabrilife Home Top" />
                        </picture>
                      </Link>
                    </CardHeader>

                    <CardContent className={clsx("z-10 absolute bottom-0")}>

                    </CardContent>
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
                          <source media="(max-width: 640px)" srcset="https://fabrilife.com/image-gallery/646fda602304c.jpg" />
                          <source media="(max-width: 1024px)" srcset="https://fabrilife.com/image-gallery/646fda60213f3.jpg" />
                          <source media="(max-width: 1280px)" srcset="https://fabrilife.com/image-gallery/646fda60213f3.jpg" />
                          <img src="https://fabrilife.com/image-gallery/646fda60251a3.jpg" alt="Fabrilife Home Top" loading="lazy" class="w-full object-cover" />
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
                    src="https://fabrilife.com/image-gallery/638a77dd0caa8-square.jpg"
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
                    src="https://fabrilife.com/image-gallery/6389374585bcd-square.jpg"
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
                    src="https://fabrilife.com/image-gallery/638a77dd192d3-square.jpg"
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
                    src="https://fabrilife.com/image-gallery/638a77dd011dc-square.jpg"
                    alt=""
                  />
                </Link>
              </CardHeader>
            </Card>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
}
