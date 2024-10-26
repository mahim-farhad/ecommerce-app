import {
  getCourses,
  getDestinations,
  getUniversities
} from "@api/vendors";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import { Grid, GridItem } from "@components/layouts/grid";

import FilterForm from "../components/FilterForm";

export default async function FilterSection() {
  const courses = await getCourses();
  const universities = await getUniversities();
  const destinations = await getDestinations();

  return (
    <Section>
      <Container>
        <Box className="mb-8 md:mb-12 lg:mb-16 xl:mb-20">
        </Box>

        <Grid className="grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        </Grid>

        <FilterForm
          courseData={courses}
          universityData={universities}
          destinationData={destinations}
        />
      </Container>
    </Section>
  );
}
