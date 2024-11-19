import { getInteractedTags } from "@/lib/actions/tags.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../RenderTag";

interface Props {
  user: {
    _id: string;
    name: string;
    clerkid: string;
    picture: string;
    username: string;
  };
}

const UserCard = async ({ user }: Props) => {
  const topInteractedTags = await getInteractedTags({ userId: user._id });
  return (
    <Link href={`/profile/${user._id}`}>
      <article className="background-light900_dark200 light-border shadow-light100_dark100 flex flex-col items-center rounded-lg border  py-8">
        {/* image */}
        <Image
          src={user.picture}
          height={40}
          width={40}
          alt="profile picture"
          className="mb-4 w-20 rounded-[50%]"
        />{" "}
        {/* content */}
        <div className="text-dark500_light700 text-center">
          <h3 className="h3-bold">{user.name}</h3>
          <p className="body-regular text-dark500_light500">{`@${user.username}`}</p>
        </div>
        {/* tags */}
        <div className="mt-5 flex gap-2">
          {topInteractedTags.map((tag) => (
            <RenderTag key={tag._id} name={tag.name} />
          ))}
        </div>
      </article>
    </Link>
  );
};

export default UserCard;
