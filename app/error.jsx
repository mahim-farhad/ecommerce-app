"use client";

import clsx from "clsx";

import Typography from "@components/ui/typography";
import Button from "@components/ui/button";

import Main from "@components/layouts/main";
import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

export default function Error({ error, reset }) {
  return (
    <Main>
      <Section>
        <Container>
          <Box
            className={clsx(
              "flex flex-col items-start md:items-center justify-center",
              "min-h-96"
            )}
          >
            <Typography type="h2">Error!</Typography>

            <Typography
              className={clsx(
                "lg:w-2/4",
                "pr-12 sm:pr-0 my-4 sm:my-8",
                "md:text-center text-wrap",
                "text-muted-foreground"
              )}
            >
              {error.message}
            </Typography>

            <Button onClick={() => reset()}>Try again</Button>
          </Box>
        </Container>
      </Section>
    </Main>
  );
}
