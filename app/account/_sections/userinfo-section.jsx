import { getCurrentUser } from "@api/users";

import Typography from "@components/ui/typography";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

import UpdateForm from "../_components/UpdateForm";
import LoginForm from "@app/auth/_components/LoginForm";

export default async function UserInfoSection() {
  const userData = await getCurrentUser();

  return (
    <Section>
      <Container>
        <Box className="mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <Typography className="text-gray-400">Privacy Protected</Typography>

          <Typography type="h2">Update Informations</Typography>
        </Box>

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
          {userData?.confirmed ? <UpdateForm userData={userData} /> : <LoginForm />}
        </Box>
      </Container>
    </Section>
  );
}
