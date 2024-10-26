import Main from "@components/layouts/main";
import Section from "@components/layouts/section";
import Container from "@components/layouts/container";

export default async function FindCourses({ params }) {
  const { courseSlug, studyLevel, destination } = params;

  // Construct the API query based on the URL parameters
  let query = `${process.env.NEXT_PUBLIC_BACKEND_URL}/courses?populate=*`;
  // http://localhost:1337/api/slugify/slugs/university/university-of-oxford

  if (courseSlug && courseSlug !== 'all') {
    query += `&filters[lower_name][$eq]=${courseSlug}`;
  }

  if (studyLevel && studyLevel !== 'all') {
    query += `&filters[study_levels][slug][$eq]=${studyLevel}`;
  }

  if (destination && destination !== 'all-destinations') {
    query += `&filters[universities][country][shortForm][$eq]=${destination}`;
  }

  // Fetch courses based on the filters
  const res = await fetch(query, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API}`,
    },
    next: { revalidate: 3600 },
  });

  const data = await res.json();

  const courses = data.data || [];

  return (
    <Main>
      <Section>
        <Container>
          <div>
            <h1>
              Courses for {courseSlug !== "all" ? courseSlug : "all courses"} (
              {studyLevel !== "all" ? studyLevel : "all levels"}) in{" "}
              {destination !== "all-destinations"
                ? destination
                : "all destinations"}
            </h1>

            {courses.length === 0 ? (
              <p>No courses found.</p>
            ) : (
              <ul>
                {courses.map((course) => (
                  <li key={course.id}>
                    <h2>{course.attributes.courseName}</h2>
                    <p>
                      {
                        course.attributes.universities.data[0]?.attributes
                          .university
                      }
                    </p>
                    <p>
                      Study Mode: {course.attributes.studyMode.join(", ")}
                    </p>
                    <a href={`/courses/${course.attributes.slug}`}>
                      View Course
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </Section>
    </Main>
  );
}
