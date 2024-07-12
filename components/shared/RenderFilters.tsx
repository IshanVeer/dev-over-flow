import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter } from "@/types";

interface Props {
  filters: Filter[];
}

const RenderFilters = ({ filters }: Props) => {
  return (
    <Select>
      <SelectTrigger className="background-light800_darkgradient no-focus text-dark500_light700  flex w-[180px] justify-between  px-4 py-7 shadow-sm  ">
        <SelectValue placeholder="Select a Filter" />
      </SelectTrigger>
      <SelectContent className="text-dark400_light800 background-light900_dark300 light-border-2 border">
        {filters.map((filter) => (
          <SelectItem
            className="hover:background-light800_dark400 cursor-pointer"
            value={filter.value}
            key={filter.value}
          >
            {filter.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default RenderFilters;
