import clsx from "clsx";

import Typography from "@components/ui/typography";
import Link from "@components/ui/link";
import Button from "@components/ui/button";

import Main from "@components/layouts/main";
import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

export default function NotFound() {
  return (
    <Main>
      <Section>
        <Container>
          <Box
            className={clsx(
              "flex flex-col items-start md:items-center justify-center",
              "h-96"
            )}
          >
            <Typography type="h2">404. Page Not Found</Typography>

            <Typography
              className={clsx(
                "sm:w-3/4 md:w-2/4",
                "pr-4 sm:pr-0 my-4 sm:my-8",
                "md:text-center",
                "text-muted-foreground"
              )}
            >
              Sorry, we couldn't find the page you where looking for. We suggest
              that you return to home page.
            </Typography>

            <Button size="sm" asChild>
              <Link href="/">Go to Home</Link>
            </Button>
          </Box>
        </Container>
      </Section>
    </Main>
  );
}
