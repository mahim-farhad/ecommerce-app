"use client";

import Icon from "@components/ui/icon";
import CustomIcon from "@components/ui/custom-icon";
import Link from "@components/ui/link";
import Separator from "@components/ui/separator";
import Button from "@components/ui/button";

import Main from "@components/layouts/main";
import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

import LoginRHF from "../_components/LoginForm";

export default function Login() {
  return (
    <Main>
      <Section>
        <Container>
          <Box
            className={[
              "flex flex-col justify-center",
              "sm:max-w-[500px] lg:max-w-[500px]",
              "gap-y-4",
              "p-6 sm:p-12 lg:p-16",
              "mx-auto mb-8",
              "bg-background",
              "border",
            ]}
          >
            <Box className={["space-y-4", "mb-4"]}>
              <Button className="w-full bg-google" size="lg">
                <CustomIcon name="google" />
                Login with Google
              </Button>

              <Button className="w-full bg-github" size="lg" asChild>
                <Link href="#">
                  <Icon name="Github" />
                  Login with Github
                </Link>
              </Button>
            </Box>

            <Box className={["flex", "items-center text-gray-400"]}>
              <Separator className="flex-1" />
              <span className="mx-2 text-sm font-medium">OR</span>
              <Separator className="flex-1" />
            </Box>

            <LoginRHF />
          </Box>
        </Container>
      </Section>
    </Main>
  );
}
