"use client";

import clsx from "clsx";

import Autoplay from "embla-carousel-autoplay";

import Typography from "@components/ui/typography";
import Icon from "@components/ui/icon";
import Link from "@components/ui/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@components/ui/carousel";
import {
  Card,
  CardHeader,
  CardContent
} from "@components/ui/card";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import { Grid, GridItem } from "@components/layouts/grid";
import Button from "@components/ui/button";

export default function BannerSection() {
  const carouselOptions = {
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps',
    draggable: true,
    speed: 10,
    dragThreshold: 1,
    slidesToScroll: 1
  }

  return (
    <Section className="xl:py-8">
      <Container>
        <Grid
          className={clsx(
            "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
            "gap-4 lg:gap-8",
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
                  <Card
                    className={clsx(
                      "overflow-hidden",
                      "group"
                    )}
                  >
                    <CardHeader>
                      <Link
                        className={clsx(
                          "w-full h-full",
                          "min-h-[390px] md:min-h-[490px] lg:min-h-[590px]",
                          "overflow-hidden",
                        )}
                        style={{
                          backgroundImage:
                            "url(https://cdn.kaykraft.com/wp-content/uploads/2024/05/homepage-slider-1-resized.jpg)",
                          backgroundPosition: "42% top",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat"
                        }}
                      />
                    </CardHeader>

                    <CardContent
                      className={clsx(
                        "z-10 absolute bottom-0",
                      )}
                    >
                      <Box
                        className={clsx(
                          "w-full sm:w-auto",
                          "py-4 md:py-8 px-6 md:px-10",
                          "m-4 lg:m-8",
                          "bg-black bg-opacity-75",
                        )}
                      >
                        <Typography
                          type="h5"
                          className={clsx(
                            "mb-1",
                            "font-semibold uppercase",
                            "text-white"
                          )}
                        >
                          Puja 2k24 collection
                        </Typography>

                        <Button
                          size="sm"
                          variant="text"
                          asChild
                        >
                          <Link
                            href="/shop"
                            className={clsx(
                              "inline-flex items-center",
                              "h-auto p-0",
                              "uppercase",
                              "overflow-visible",
                              "text-gray-200",
                            )}
                          >
                            Shop Now

                            <Icon
                              name="ArrowRight"
                              size="sm"
                              className={clsx(
                                "group-hover:translate-x-1",
                                "transition-all duration-500 ease-in-out"
                              )}
                            />
                          </Link>
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem>
                  <Card
                    className={clsx(
                      "overflow-hidden",
                      "group"
                    )}
                  >
                    <CardHeader>
                      <Link
                        className={clsx(
                          "w-full h-full",
                          "min-h-[390px] md:min-h-[490px] lg:min-h-[590px]",
                          "overflow-hidden",
                        )}
                        style={{
                          backgroundImage:
                            "url(https://cdn.kaykraft.com/wp-content/uploads/2024/05/homepage-slider-1-resized.jpg)",
                          backgroundPosition: "42% top",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat"
                        }}
                      />
                    </CardHeader>

                    <CardContent
                      className={clsx(
                        "z-10 absolute bottom-0",
                      )}
                    >
                      <Box
                        className={clsx(
                          "w-full sm:w-auto",
                          "py-4 md:py-8 px-6 md:px-10",
                          "m-4 lg:m-8",
                          "bg-black bg-opacity-75",
                        )}
                      >
                        <Typography
                          type="h5"
                          className={clsx(
                            "mb-1",
                            "font-semibold uppercase",
                            "text-white"
                          )}
                        >
                          Puja 2k24 collection
                        </Typography>

                        <Button
                          size="sm"
                          variant="text"
                          asChild
                        >
                          <Link
                            href="/shop"
                            className={clsx(
                              "inline-flex items-center",
                              "h-auto p-0",
                              "uppercase",
                              "overflow-visible",
                              "text-gray-200",
                            )}
                          >
                            Shop Now

                            <Icon
                              name="ArrowRight"
                              size="sm"
                              className={clsx(
                                "group-hover:translate-x-1",
                                "transition-all duration-500 ease-in-out"
                              )}
                            />
                          </Link>
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem>
                  <Card
                    className={clsx(
                      "overflow-hidden",
                      "group"
                    )}
                  >
                    <CardHeader>
                      <Link
                        className={clsx(
                          "w-full h-full",
                          "min-h-[390px] md:min-h-[490px] lg:min-h-[590px]",
                          "overflow-hidden",
                        )}
                        style={{
                          backgroundImage:
                            "url(https://cdn.kaykraft.com/wp-content/uploads/2024/05/homepage-slider-1-resized.jpg)",
                          backgroundPosition: "42% top",
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat"
                        }}
                      />
                    </CardHeader>

                    <CardContent
                      className={clsx(
                        "z-10 absolute bottom-0",
                      )}
                    >
                      <Box
                        className={clsx(
                          "w-full sm:w-auto",
                          "py-4 md:py-8 px-6 md:px-10",
                          "m-4 lg:m-8",
                          "bg-black bg-opacity-75",
                        )}
                      >
                        <Typography
                          type="h5"
                          className={clsx(
                            "mb-1",
                            "font-semibold uppercase",
                            "text-white"
                          )}
                        >
                          Puja 2k24 collection
                        </Typography>

                        <Button
                          size="sm"
                          variant="text"
                          asChild
                        >
                          <Link
                            href="/shop"
                            className={clsx(
                              "inline-flex items-center",
                              "h-auto p-0",
                              "uppercase",
                              "overflow-visible",
                              "text-gray-200",
                            )}
                          >
                            Shop Now

                            <Icon
                              name="ArrowRight"
                              size="sm"
                              className={clsx(
                                "group-hover:translate-x-1",
                                "transition-all duration-500 ease-in-out"
                              )}
                            />
                          </Link>
                        </Button>
                      </Box>
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
                  <img
                    src="https://www.thebengalstore.com/uploads/blog/133675404342430351724740478.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </Link>
              </CardHeader>
            </Card>
          </GridItem>

          <GridItem className="col-span-1">
            <Card>
              <CardHeader>
                <Link>
                  <img
                    src="https://www.thebengalstore.com/uploads/blog/102223845091051101724220891.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </Link>
              </CardHeader>
            </Card>
          </GridItem>

          <GridItem className="col-span-1">
            <Card>
              <CardHeader>
                <Link>
                  <img
                    src="https://www.thebengalstore.com/uploads/blog/217779815599986091720681809.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
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
