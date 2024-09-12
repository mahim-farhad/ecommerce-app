"use client";

import { usePathname } from "next/navigation";

import clsx from "clsx";

import {
  customerCare, legalServices, socials, paymentMethods
} from "@utils/objects";

import CustomIcon from "@components/ui/custom-icon";
import Typography from "@components/ui/typography";
import Link from "@components/ui/link";
import { List, ListItem } from "@components/ui/list";

import Container from "@components/layouts/container";
import { Grid, GridItem } from "@components/layouts/grid";
import Box from "@components/layouts/box";

function Brand() {
  return (
    <Box
      className={clsx(
        "flex gap-4 items-center",
      )}
    >
      <CustomIcon
        name="brand"
        className={clsx(
          "w-12 md:w-16",
          "h-12 md:h-16",
        )}
      />

      <Box>
        <Typography
          type="h5"
          className={clsx(
            "font-semibold uppercase",
            "leading-none",
            "text-gray-100"
          )}
        >
          Bangladeshi
        </Typography>

        <Typography
          type="h5"
          className={clsx(
            "lg:-mt-2 ml-8",
            "font-semibold uppercase",
            "leading-none",
            "text-gray-100"
          )}
        >
          Handicrafts
        </Typography>
      </Box>
    </Box>
  )
}

function CustomerCare() {
  return (
    <Box className="text-start">
      <Typography
        type="h6"
        className={clsx(
          "mt-1.5 mb-3",
          "!text-base font-medium",
          "text-gray-100"
        )}
      >
        Customer Care
      </Typography>

      <Box
        className={clsx(
          "flex",
          "gap-x-8"
        )}
      >
        <List>
          {customerCare?.map((customerCare) => (
            <ListItem key={customerCare?.id}>
              <Link
                href={`/${customerCare?.path}`}
                className={clsx(
                  "relative inline-block py-1",
                  "text-sm font-medium",
                  "after:content-['']",
                  "after:absolute after:left-0 after:bottom-1",
                  "after:w-0 after:h-[1px]",
                  "after:bg-white",
                  "hover:after:w-full",
                  "after:transition-all after:duration-200",
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
                  "after:content-['']",
                  "after:absolute after:left-0 after:bottom-1",
                  "after:w-0 after:h-[1px]",
                  "after:bg-white",
                  "hover:after:w-full",
                  "after:transition-all after:duration-200",
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
          "!text-base font-medium",
          "text-gray-100"
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
                "after:content-['']",
                "after:absolute after:right-0 after:bottom-1",
                "after:w-0 after:h-[1px]",
                "after:bg-white",
                "hover:after:w-full",
                "after:transition-all after:duration-200",
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

function Socials() {
  return (
    <Box className="mb-2">
      <List
        className={clsx(
          "flex-row flex-wrap",
          "gap-4",
        )}
      >
        {socials?.map((social) => (
          <ListItem key={social?.id}>
            <Link href={social?.path}>
              <CustomIcon
                name={social?.iconName}
                className={clsx(
                  "text-gray-100"
                )}
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
          "justify-start xl:justify-end",
        )}
      >
        {paymentMethods?.map((paymentMethod) => (
          <ListItem key={paymentMethod?.id}>
            <CustomIcon
              name={paymentMethod?.iconName}
              className={clsx(
                "w-10 h-auto"
              )}
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

  if (hideFooter) return null;

  return (
    <footer>
      <Container>
        <Grid
          className={clsx(
            "grid-cols-1 xl:grid-cols-5",
            "gap-y-8 xl:gap-y-20",
            "py-8 md:py-12 lg:py-16 xl:py-20",
            "px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20",
            "text-gray-100",
            "bg-gray-800 dark:bg-gray-900"
          )}
          style={{
            backgroundImage:
              "url(https://yevgenysim-turkey.github.io/shopper/assets/img/patterns/pattern-2.svg)",
            backgroundPosition: "50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <GridItem
            className={clsx(
              "col-span-full xl:col-span-2",
            )}
          >
            <Box
              className={clsx(
                "flex flex-col",
                "gap-y-4 xl:gap-y-2",
                "xl:justify-between",
                "h-full"
              )}
            >
              <Brand />

              <Typography
                className={clsx(
                  "w-full md:w-3/5 xl:w-full",
                  "pr-8 mb-2",
                  "text-sm",
                  "text-gray-100"
                )}
              >
                An Independent Platform to Encourage Individual Businesses
                in Bangladeshi Handicrafts to Enpower
                Handicrafts all over the Country
              </Typography>

              <Socials />
            </Box>
          </GridItem>

          <GridItem
            className={clsx(
              "col-span-full xl:col-span-3",
            )}
          >
            <Box
              className={clsx(
                "flex flex-col md:flex-row",
                "gap-y-8 xl:gap-x-20",
                "justify-start sm:justify-between xl:justify-end",
              )}
            >
              <CustomerCare />

              <LegalServices />
            </Box>
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
                "text-sm font-medium",
                "uppercase"
              )}
            >
              Copyright © {new Date().getFullYear()},
              Designed by
              {" <Mahim Farhad/>"}
            </Typography>
          </Box>

          <Box><Payments /></Box>
        </Box>
      </Container>
    </footer>
  );
}
