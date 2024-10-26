"use client";

import { useState, useTransition } from "react";
import Icon from "@components/ui/icon";
import Button from "@components/ui/button";
import {
  Select, SelectTrigger,
  SelectContent, SelectGroup,
  SelectItem
} from "@components/forms/select";
import Box from "@components/layouts/box";

export default function FilterForm({
  courseData,
  universityData,
  destinationData
}) {
  const [isPending, startTransition] = useTransition();

  // State to store selected filters
  const [filters, setFilters] = useState({
    course: '',
    university: '',
    destination: ''
  });

  // Function to handle changes in the selected value
  const handleValueChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Handle form submission and construct query URL
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { course, university, destination } = filters;

    console.log(filters);

    // Constructing the API query URL based on selected filters
    let query = `${process.env.NEXT_PUBLIC_BACKEND_URL}/course-intakes?populate=*`;

    if (course) {
      query += `&filters[courses][slug][$eq]=${course}`;
    }
    if (university) {
      query += `&filters[universities][slug][$eq]=${university}`;
    }
    if (destination) {
      query += `&filters[universities][destinations][slug][$eq]=${destination}`;
    }

    try {
      startTransition(() => {
        fetch(query, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_BACKEND_API}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Courses found:", data.data);
          })
          .catch((error) => console.error("Error fetching courses:", error));
      });
    } catch (error) {
      console.error("Error constructing query:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 lg:flex-row">
      <Select
        name="course"
        onValueChange={handleValueChange}
      >
        <SelectTrigger placeholder="Choose a Course" />
        <SelectContent>
          <SelectGroup>
            {courseData.data.map((course) => (
              <SelectItem key={course?.attributes?.uuid} value={course?.attributes?.slug}>
                {course?.attributes?.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select name="university" onValueChange={handleValueChange}>
        <SelectTrigger placeholder="Select a University" />
        <SelectContent>
          <SelectGroup>
            {universityData.data.map((uni) => (
              <SelectItem key={uni?.attributes?.uuid} value={uni?.attributes?.slug}>
                {uni?.attributes?.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select name="destination" onValueChange={handleValueChange}>
        <SelectTrigger placeholder="Select a Destination" />
        <SelectContent>
          <SelectGroup>
            {destinationData.data.map((dest) => (
              <SelectItem key={dest?.attributes?.uuid} value={dest?.attributes?.slug}>
                {dest?.attributes?.country}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Box className="flex items-center gap-4">
        <Button
          type="submit"
          className="px-8"
          disabled={isPending}
        >
          {isPending ? (
            <Icon name="LoaderCircle" className="animate-spin" />
          ) : (
            "Search"
          )}
        </Button>
      </Box>
    </form>
  );
}
