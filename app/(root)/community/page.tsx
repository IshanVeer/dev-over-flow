import UserCard from "@/components/shared/cards/UserCard";
import NoResult from "@/components/shared/NoResult";
import RenderFilters from "@/components/shared/RenderFilters";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { UserFilters } from "@/constants/filters";
import { getAllUsers } from "@/lib/actions/users.action";

import React from "react";

const Community = async () => {
  const result = await getAllUsers({});

  return (
    <>
      <h1 className="h1-bold text-dark400_light900">All Users</h1>
      <div className="mt-8 flex items-center gap-8 max-sm:flex-col">
        <LocalSearch placeholder="Search amazing minds here..." />
        <div className="max-sm:w-full ">
          <RenderFilters filters={UserFilters} />
        </div>
      </div>
      <section className="my-16 ">
        {result.users.length > 0 ? (
          <div className="  grid-cols-2 gap-2 md:grid lg:grid-cols-3 ">
            {result.users.map((user) => (
              <UserCard key={user._id} user={user} />
            ))}
          </div>
        ) : (
          <NoResult
            title="There are no users to show"
            description="Unlock the door to endless possibilities! 🚀 Sign in and join the conversation and be part of a vibrant community. Your journey of growth starts here! 💡"
            btnText="Sign In"
          />
        )}
      </section>
    </>
  );
};

export default Community;
