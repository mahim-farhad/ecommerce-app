import clsx from "clsx";

import Icon from "@components/ui/icon";

import Main from "@components/layouts/main";
import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

export default function Loading() {
  return (
    <Main>
      <Section>
        <Container>
          <Box
            className={clsx(
              "z-50 fixed top-0 right-0 bottom-0 left-0",
              "flex items-center justify-center",
              "w-full h-full",
              "bg-background"
            )}
          >
            <Icon
              name="LoaderCircle"
              className="w-8 h-8 text-primary animate-spin"
            />
          </Box>
        </Container>
      </Section>
    </Main>
  );
}
