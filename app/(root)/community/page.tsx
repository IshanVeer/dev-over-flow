import UserCard from "@/components/shared/cards/UserCard";
import RenderFilters from "@/components/shared/RenderFilters";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { UserFilters } from "@/constants/filters";
import { getAllUsers } from "@/lib/actions/users.action";
import Link from "next/link";

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
      <section className="my-16 grid grid-cols-3 gap-2">
        {result.users.length > 0 ? (
          result.users.map((user) => <UserCard key={user._id} user={user} />)
        ) : (
          <div className="paragraph-regular mx-auto my-12 max-w-4xl text-center">
            <h3>No Users yet</h3>
            <Link className="mt-2 font-bold text-accent-blue" href="/sign-up">
              Join to be the first!
            </Link>
          </div>
        )}
      </section>
    </>
  );
};

export default Community;
