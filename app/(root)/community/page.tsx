import RenderFilters from "@/components/shared/RenderFilters";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { UserFilters } from "@/constants/filters";
import React from "react";

const Community = () => {
  return (
    <>
      <h1 className="h1-bold text-dark400_light900">All Users</h1>
      <div className="mt-8 flex items-center gap-8 max-sm:flex-col">
        <LocalSearch placeholder="Search amazing minds here..." />
        <div className="max-sm:w-full ">
          <RenderFilters filters={UserFilters} />
        </div>
      </div>
    </>
  );
};

export default Community;
