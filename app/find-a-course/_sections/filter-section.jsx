import {
  getCourses,
  getLevels,
  getUniversities,
  getDestinations,
} from "@api/vendors";

import Section from "@components/layouts/section";
import Container from "@components/layouts/container";
import Box from "@components/layouts/box";
import { Grid, GridItem } from "@components/layouts/grid";

import FilterForm from "../components/FilterForm";

export default async function FilterSection() {
  const courses = await getCourses();
  const levels = await getLevels();
  const universities = await getUniversities();
  const destinations = await getDestinations();

  return (
    <Section>
      <Container>
        <FilterForm
          courseData={courses}
          levelData={levels}
          universityData={universities}
          destinationData={destinations}
        />
      </Container>
    </Section>
  );
}
