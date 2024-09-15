import { getCurrentUser } from "@api/users";

import Typography from "@components/ui/typography";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

import UpdateForm from "../_components/UpdateForm";

export default async function UserInfoSection() {
  const userData = await getCurrentUser();

  return (
    <Section>
      <Container>
        <Box className="mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <Typography className="text-gray-400">Privacy Ensured</Typography>

          <Typography type="h2">Update Informations</Typography>
        </Box>

        <UpdateForm userData={userData} />
      </Container>
    </Section>
  );
}
