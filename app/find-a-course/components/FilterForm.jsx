"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Button from "@components/ui/button";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@components/forms/select";

import Box from "@components/layouts/box";

export default function FilterForm({
  courseData,
  levelData,
  universityData,
  destinationData,
}) {
  const router = useRouter();
  const [filters, setFilters] = useState({
    course: "",
    level: "",
    university: "",
    destination: "",
  });

  const handleValueChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Use "all" as a default value if a filter is not selected
    const course = filters.course || "all-courses";
    const university = filters.university || "all-universities";
    const destination = filters.destination || "all";

    // Construct the URL path based on selected filters
    const urlPath = `/find-a-course/${course}/${university}/${destination}`;

    // Navigate to the dynamically constructed path
    router.push(urlPath);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box className="flex flex-col items-center gap-4 mb-8 md:flex-row">
        {/* Course Selection */}
        <Select
          name="course"
          onValueChange={handleValueChange}
        >
          <SelectTrigger placeholder="Choose a Course" />
          <SelectContent>
            <SelectGroup>
              {courseData?.data?.map((course) => (
                <SelectItem
                  key={course?.attributes?.uuid}
                  value={course?.attributes?.slug}
                >
                  {course?.attributes?.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Level Selection */}
        <Select
          name="level"
          onValueChange={handleValueChange}
        >
          <SelectTrigger placeholder="Select a Level" />
          <SelectContent>
            <SelectGroup>
              {levelData?.data?.map((level) => (
                <SelectItem
                  key={level?.attributes?.uuid}
                  value={level?.attributes?.slug}
                >
                  {level?.attributes?.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* University Selection */}
        <Select
          name="university"
          onValueChange={handleValueChange}
        >
          <SelectTrigger placeholder="Select a University" />
          <SelectContent>
            <SelectGroup>
              {universityData?.data?.map((uni) => (
                <SelectItem
                  key={uni?.attributes?.uuid}
                  value={uni?.attributes?.slug}
                >
                  {uni?.attributes?.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Destination Selection */}
        <Select
          name="destination"
          onValueChange={handleValueChange}
        >
          <SelectTrigger placeholder="Select a Destination" />
          <SelectContent>
            <SelectGroup>
              {destinationData?.data?.map((dest) => (
                <SelectItem
                  key={dest?.attributes?.uuid}
                  value={dest?.attributes?.slug}
                >
                  {dest?.attributes?.country}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Submit Button */}
        <Box className="flex items-center gap-4">
          <Button type="submit" className="px-8">
            Search
          </Button>
        </Box>
      </Box>
    </form>
  );
}
