"use client";

import { useEffect, useState } from "react";

import Icon from "@components/ui/icon";

import Box from "@components/layouts/box";
import Main from "@components/layouts/main";
import Section from "@components/layouts/section";
import Container from "@components/layouts/container";

export default function FilteredResultsPage({ params }) {
  const {
    course,
    university,
    destination
  } = params;

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    let query = `${process.env.NEXT_PUBLIC_BACKEND_URL}/course-intakes?populate=*`;

    if (course && course !== "all-courses") {
      query += `&filters[course][slug][$eq]=${course}`;
    }

    if (university && university !== "all-universities") {
      query += `&filters[university][slug][$eq]=${university}`;
    }

    if (destination && destination !== "all") {
      query += `&filters[university][destination][slug][$eq]=${destination}`;
    }

    fetch(query, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFilteredData(data.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setFilteredData([]); // Reset data on error
      });
  }, [course, university, destination]);

  return (
    <Main>
      <Section>
        <Container>
          <Box className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {filteredData.length === 0 ? (
              <p>No Data Found!</p>
            ) : (filteredData.map((data) => (
              <div key={data.id} className="col-span-1 min-h-[425px] interactive-card border border-gray-300 h-full bg-white px-5 lg:px-6 py-5 flex flex-col gap-2 rounded-lg group hover:border-primary transition-all">
                <div>
                  <a
                    href={`/universities-and-colleges/${data?.attributes?.course?.data?.attributes?.slug}/`}
                    className="block mt-1 mb-1 text-lg font-semibold text-gray-800 truncate transition-colors hover:text-primary group-hover:text-primary"
                  >
                    {data?.attributes?.course?.data?.attributes?.name}
                  </a>

                  <a
                    href={`/universities-and-colleges/${data?.attributes?.university?.data?.attributes?.slug}/`}
                    className="transition-colors hover:text-primary"
                  >
                    {data?.attributes?.university?.data?.attributes?.name}
                  </a>
                </div>

                <div className="mt-3 mb-3 border-t border-gray-200"></div>

                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-2">
                    <Icon name="ChartNoAxesCombined" />

                    <span className="text-sm">
                      THE World Ranking: {" "}
                      {data?.attributes?.university?.data?.attributes?.rank}
                    </span>
                  </li>

                  <li className="flex items-center gap-2">
                    <Icon name="GraduationCap" />

                    <span className="text-sm capitalize">
                      {data?.attributes?.level?.data?.attributes?.name}
                    </span>
                  </li>

                  <li className="flex items-center gap-2">
                    <Icon name="MapPin" />

                    <span className="text-sm">
                      {data?.attributes?.university?.data?.attributes?.location}
                    </span>
                  </li>

                  <li className="flex items-center gap-2">
                    <Icon name="Calendar" />

                    <span className="text-sm">
                      Next intake: {" "}
                      {data?.attributes?.intake_date}
                    </span>
                  </li>

                  <li className="flex items-center gap-2">
                    <Icon name="BookCheck" />

                    <span className="text-sm">
                      Entry Score: {" "}
                      IELTS {data?.attributes?.entry_score}
                    </span>
                  </li>

                  <li className="flex items-center gap-2">
                    <Icon name="DollarSign" />

                    <span className="text-sm">
                      Entry Score: {" "}
                      IELTS {data?.attributes?.tuition_fee} (2024)
                    </span>
                  </li>
                </ul>

                <a className="btn-primary px-6 py-2.5 mt-auto text-center text-white rounded-lg bg-primary transition-colors hover:bg-primary-dark focus:ring-2 focus:ring-primary-dark focus:ring-offset-2 focus:outline-none">
                  View course
                </a>
              </div>
            )))}
          </Box>
        </Container>
      </Section>
    </Main>
  );
}
