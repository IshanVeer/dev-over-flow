import NoResult from "@/components/shared/NoResult";
import RenderFilters from "@/components/shared/RenderFilters";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Badge } from "@/components/ui/badge";
import { TagFilters } from "@/constants/filters";
import { getAllTags } from "@/lib/actions/tags.action";
import Link from "next/link";

import React from "react";

const Tags = async () => {
  const result = await getAllTags();

  return (
    <>
      <h1 className="h1-bold text-dark400_light900">Tags</h1>
      <div className="mt-8 flex items-center gap-8 max-sm:flex-col">
        <LocalSearch placeholder="Search amazing minds here..." />
        <div className="max-sm:w-full ">
          <RenderFilters filters={TagFilters} />
        </div>
      </div>
      <section className="my-16 ">
        {result.tags.length > 0 ? (
          <div className="grid-cols-2 gap-4 md:grid lg:grid-cols-3">
            {result.tags.map((tag) => (
              <div
                key={tag._id}
                className="background-light900_dark200 light-border shadow-light100_dark100 rounded-lg border px-6  py-8 max-md:mb-6"
              >
                <Link href={`/tags/${tag.name}`}>
                  <Badge className="background-light800_dark400 paragraph-semibold text-dark500_light700 rounded-md px-4 py-2">
                    {tag.name}
                  </Badge>
                </Link>
                <p className="small-regular text-dark500_light700 my-5">
                  JavaScript, often abbreviated as JS, is a programming language
                  that is one of the core technologies of the World Wide Web,
                  alongside HTML and CSS
                </p>
                <p className="small-semibold text-dark400_light500 ">
                  <span className="body-semibold text-primary-gradient">
                    {tag.questions.length}+
                  </span>{" "}
                  Questions{" "}
                </p>
              </div>
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
