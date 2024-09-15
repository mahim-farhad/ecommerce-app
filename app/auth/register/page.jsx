import clsx from "clsx";

import Main from "@components/layouts/main";
import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

import SAFormWithRHF from "../_components/RegisterForm";

export default function Register() {
  return (
    <Main>
      <Section
        className={clsx(
          "flex",
          "flex-col",
          "justify-center",
          "min-h-screen",
          "p-4 sm:p-16",
        )}
      >
        <Container>
          <Box
            className={clsx(
              "flex flex-col gap-y-4 justify-center",
              "sm:max-w-[500px] lg:max-w-[500px]",
              "p-6 sm:p-12 lg:p-16",
              "my-8 mx-auto",
              "bg-white",
              "border",
              "rounded-none"
            )}
          >
            <SAFormWithRHF />
          </Box>
        </Container>
      </Section>
    </Main>
  );
}
