"use client";

import { usePathname } from "next/navigation";

import clsx from "clsx";

import {
  customerCare, legalServices,
  socials, paymentMethods,
} from "@utils/objects";

import CustomIcon from "@components/ui/custom-icon";
import Typography from "@components/ui/typography";
import Link from "@components/ui/link";
import { List, ListItem } from "@components/ui/list";

import Container from "@components/layouts/container";
import { Grid, GridItem } from "@components/layouts/grid";
import Box from "@components/layouts/box";
import Icon from "@components/ui/icon";
import Separator from "@components/ui/separator";
import Input from "@components/forms/input";
import Button from "@components/ui/button";

function Brand() {
  return (
    <Link
      href="/"
      className={clsx("flex gap-4 items-center")}
    >
      <CustomIcon
        name="brand3"
        className={clsx("w-12 md:w-16", "h-12 md:h-16", "text-white")}
      />

      <Typography
        type="h4"
        className={clsx(
          "font-block !leading-[31px]",
          "uppercase",
          "tracking-[-0.022em]"
        )}
      >
        Raphix.
      </Typography>
    </Link>
  );
}

function CustomerCare() {
  return (
    <Box className="text-start">
      <Typography
        type="h6"
        className={clsx(
          "mt-1.5 mb-3",
          "!text-base font-semibold",
          "text-white"
        )}
      >
        Customer Care
      </Typography>

      <Box className={clsx("flex", "gap-x-8")}>
        <List>
          {customerCare?.map((customerCare) => (
            <ListItem key={customerCare?.id}>
              <Link
                href={`/${customerCare?.path}`}
                className={clsx(
                  "relative inline-block py-1",
                  "text-sm font-medium",
                  "text-muted-foreground hover:text-white",
                  "after:content-['']",
                  "after:absolute after:left-0 after:bottom-1",
                  "after:w-0 after:h-[1px]",
                  "after:bg-white",
                  "hover:after:w-full",
                  "after:transition-all after:duration-200"
                )}
              >
                {customerCare?.name}
              </Link>
            </ListItem>
          ))}
        </List>

        <List>
          {customerCare?.map((customerCare) => (
            <ListItem key={customerCare?.id}>
              <Link
                href={`/${customerCare?.path}`}
                className={clsx(
                  "relative inline-block py-1",
                  "text-sm font-medium",
                  "text-muted-foreground hover:text-white",
                  "after:content-['']",
                  "after:absolute after:left-0 after:bottom-1",
                  "after:w-0 after:h-[1px]",
                  "after:bg-white",
                  "hover:after:w-full",
                  "after:transition-all after:duration-200"
                )}
              >
                {customerCare?.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
}

function LegalServices() {
  return (
    <Box className="md:text-end">
      <Typography
        type="h6"
        className={clsx(
          "mt-1.5 mb-3",
          "!text-base font-semibold",
          "text-white"
        )}
      >
        Legal Services
      </Typography>

      <List>
        {legalServices?.map((legalService) => (
          <ListItem key={legalService?.id}>
            <Link
              href={`/${legalService?.path}`}
              className={clsx(
                "relative inline-block py-1",
                "text-sm font-medium",
                "text-muted-foreground hover:text-white",
                "after:content-['']",
                "after:absolute after:right-0 after:bottom-1",
                "after:w-0 after:h-[1px]",
                "after:bg-white",
                "hover:after:w-full",
                "after:transition-all after:duration-200"
              )}
            >
              {legalService?.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function Newsletter() {
  return (
    <Box
      className={clsx(
        "-my-1.5 xl:my-0",
        "text-start md:text-end",
      )}
    >
      <Typography
        type="h6"
        className={clsx(
          "mt-1",
          "mb-4",
          "font-semibold",
        )}
      >
        RECEIVE OFFERS & DISCOUNTS
      </Typography>

      <Typography
        type="small"
        className={clsx(
          "mb-3.5",
          "md:ml-auto",
          "capitalize",
        )}
      >
        All the lorem ipsum generators on the <br />
        Internet tend making the.
      </Typography>

      <Box
        className={clsx(
          "flex",
          "gap-2",
          "items-center",
          "bg-white",
          "border",
          "rounded-lg",
        )}
      >
        <Input
          className={clsx(
            "flex-1",
            "h-12",
            "border-0",
          )}
          placeholder="Email Address"
        />

        <Button
          size="xs"
          color="secondary"
          className={clsx(
            "px-3",
            "mx-2",
          )}
        >
          Subscribe
        </Button>
      </Box>

      <Typography
        type="small"
        className={clsx(
          "mt-2",
          "text-sm",
          "capitalize",
        )}
      >
        We will never share your email with third parties.
      </Typography>
    </Box>
  );
}

function Socials() {
  return (
    <Box className="mb-2">
      <List className={clsx("flex-row flex-wrap", "gap-4")}>
        {socials?.map((social) => (
          <ListItem key={social?.id}>
            <Link href={social?.path}>
              <CustomIcon
                name={social?.iconName}
                className={clsx("text-gray-100")}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

function Payments() {
  return (
    <Box>
      <List
        className={clsx(
          "flex-row flex-wrap",
          "gap-2",
          "justify-start xl:justify-end"
        )}
      >
        {paymentMethods?.map((paymentMethod) => (
          <ListItem key={paymentMethod?.id}>
            <CustomIcon
              name={paymentMethod?.iconName}
              className={clsx("w-10 h-auto")}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default function Footer() {
  const router = usePathname();

  const noNavRoutes = ["/auth/login", "/auth/register"];

  const hideFooter = noNavRoutes.includes(router);

  // if (hideFooter) return null;

  return (
    <footer>
      <Container>
        <Grid
          className={clsx(
            "grid-cols-1 sm:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8",
            "gap-y-8 sm:gap-y-12 lg:gap-y-16",
            "py-8 md:py-12 lg:py-16 xl:py-20",
            "px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20",
            "-mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 xl:-mx-20",
            // "bg-black dark:bg-white/5",
            "border-y",
          )}
        // style={{
        //   backgroundImage:
        //     "url(https://yevgenysim-turkey.github.io/shopper/assets/img/patterns/pattern-2.svg)",
        //   backgroundPosition: "50%",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
        >
          <GridItem
            className={clsx(
              "col-span-full md:col-span-2 xl:col-span-full 2xl:col-span-2",
            )}
          >
            <Box
              className={clsx(
                "flex",
                "flex-col xl:flex-row 2xl:flex-col",
                "gap-y-4 2xl:gap-y-4",
                "xl:gap-x-16 ",
                "items-start xl:items-center 2xl:items-start",
                "md:justify-between",
                "h-full",
              )}
            >
              <Brand />

              <Typography
                className={clsx(
                  "w-full md:w-3/5 xl:w-full",
                  "pr-8 mb-2",
                  "!text-sm",
                  "text-muted-foreground"
                )}
              >
                An Independent Platform to Encourage Individual Businesses in
                Bangladeshi Handicrafts
              </Typography>

              {/* <Socials /> */}

              <Link
                className={clsx(
                  "flex",
                  "xl:flex-row-reverse 2xl:flex-row",
                  "gap-4",
                  "xl:text-end 2xl:text-start",
                )}
              >
                <Icon
                  name="Headset"
                  className={clsx(
                    "w-12",
                    "h-12",
                  )}
                />

                <Box>
                  <Typography
                    type="small"
                    className={clsx(
                      "uppercase",
                    )}
                  >
                    Hotline Free 24/7
                  </Typography>

                  <Typography
                    type="h5"
                    className={clsx(
                      "font-serif",
                      "font-medium",
                    )}
                  >
                    (+100) 123 456 7890
                  </Typography>
                </Box>
              </Link>
            </Box>
          </GridItem>

          <Box
            className={clsx(
              "2xl:hidden",
              "col-span-full",
            )}
          >
            <Separator />
          </Box>

          <GridItem
            className={clsx(
              "col-span-full lg:col-span-full xl:col-span-4",
            )}
          >
            <Box
              className={clsx(
                "flex",
                "flex-col sm:flex-row",
                "gap-y-8",
                "gap-y-8 xl:gap-x-20",
                "sm:justify-between xl:justify-end 2xl:justify-center",
              )}
            >
              <CustomerCare />

              <Separator className="sm:hidden" />

              <LegalServices />
            </Box>
          </GridItem>

          <Box
            className={clsx(
              "md:hidden",
              "col-span-full",
            )}
          >
            <Separator />
          </Box>

          <GridItem
            className={clsx(
              "md:row-start-1 xl:row-start-3 2xl:row-start-1",
              "md:col-start-3 xl:col-start-5 2xl:col-start-7",
              "col-span-full md:col-span-2",
            )}
          >
            <Newsletter />
          </GridItem>
        </Grid>

        <Box
          className={clsx(
            "flex flex-wrap items-center justify-between",
            "gap-y-4 gap-x-20",
            "lg:h-20",
            "py-8 lg:py-0",
            "bg-background"
          )}
        >
          <Box>
            <Typography
              className={clsx(
                "!text-sm font-medium",
                "uppercase",
                "text-muted-foreground"
              )}
            >
              ©Raphix, LLC., {new Date().getFullYear()}, All Rights Reserved.
            </Typography>
          </Box>

          <Box>
            <Typography
              className={clsx(
                "!text-sm font-medium",
                "uppercase",
                "text-muted-foreground"
              )}
            >
              Designed by {" <Mahim Farhad/>"}
            </Typography>
          </Box>

          <Box>
            <Payments />
          </Box>
        </Box>
      </Container>
    </footer>
  );
}
