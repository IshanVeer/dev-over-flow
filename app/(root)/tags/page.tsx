import NoResult from "@/components/shared/NoResult";
import RenderFilters from "@/components/shared/RenderFilters";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { TagFilters } from "@/constants/filters";
import { getAllTags } from "@/lib/actions/tags.action";

import React from "react";

const Tags = async () => {
  const result = await getAllTags();
  console.log(result.tags, "tags");
  return (
    <>
      <h1 className="h1-bold text-dark400_light900">All Users</h1>
      <div className="mt-8 flex items-center gap-8 max-sm:flex-col">
        <LocalSearch placeholder="Search amazing minds here..." />
        <div className="max-sm:w-full ">
          <RenderFilters filters={TagFilters} />
        </div>
      </div>
      <section className="my-16 ">
        {result.tags.length > 0 ? (
          <div className="grid grid-cols-3 gap-2">
            {result.tags.map((tag) => (
              <div key={tag.name}>{tag.name}</div>
            ))}
          </div>
        ) : (
          <NoResult
            title="There are no tags to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            btnText="Ask a Question"
          />
        )}
      </section>
    </>
  );
};

export default Tags;
