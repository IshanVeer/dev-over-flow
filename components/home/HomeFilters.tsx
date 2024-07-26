"use client";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import React from "react";

const HomeFilters = () => {
  const active = "frequent";
  return (
    <div className="flex gap-4">
      {HomePageFilters.map((filter) => (
        <Button
          className={`${active === filter.value ? "bg-primary-100 dark:bg-dark-400" : "background-light800_dark300 "} rounded-lg px-6 py-3`}
          key={filter.value}
          onClick={() => {}}
        >
          <span
            className={`${active === filter.value ? "text-primary-gradient" : "text-light-500"}`}
          >
            {filter.name}
          </span>
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
