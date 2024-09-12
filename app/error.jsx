"use client";

import Typography from "@components/ui/typography";
import Button from "@components/ui/button";

import Main from "@components/layouts/main";
import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

export default function Error({ error, reset }) {
  return (
    <Main>
      <Section
        className={[
          "flex",
          "flex-col",
          "justify-center",
          "min-h-screen",
          "p-4 sm:p-16",
        ]}
      >
        <Container>
          <Box>
            <Typography type="h4" className="dark:text-black">
              {error.message}
            </Typography>

            <Button onClick={() => reset()}>
              Try again
            </Button>
          </Box>
        </Container>
      </Section>
    </Main>
  );
}
