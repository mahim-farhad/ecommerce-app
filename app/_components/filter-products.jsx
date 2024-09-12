"use client";

import clsx from "clsx";

import Icon from "@components/ui/icon";
import Button from "@components/ui/button";

import Input from "@components/forms/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@components/forms/select";

import Container from "@components/layouts/container";
import Box from "@components/layouts/box";

export default function FilterProducts() {
  return (
    <Box>
      <Container>
        <form
          className={clsx(
            "flex flex-wrap lg:flex-nowrap gap-1 items-center"
          )}
        >
          <Select>
            <SelectTrigger
              size="lg"
              placeholder="All Categories"
              className={clsx(
                "shrink-0",
                "order-1",
                "lg:w-60 uppercase",
              )}
            />

            <SelectContent>
              <SelectGroup>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Input
            type="search"
            size="lg"
            placeholder="Search for items and brands"
            className={clsx(
              "flex-1",
              "order-3 lg:order-2",
            )}
          />

          <Select>
            <SelectTrigger
              size="lg"
              placeholder="All Dealers"
              className={clsx(
                "shrink-0",
                "order-1 lg:order-3",
                "lg:w-60",
              )}
            />

            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <Button
            size="lg"
            className={clsx(
              "shrink-0",
              "order-4",
              "border-border"
            )}
          >
            <span className="hidden sm:inline-block">
              Brouse Products
            </span>

            <Icon
              name="Search"
            />
          </Button>
        </form>
      </Container>
    </Box>
  );
}
