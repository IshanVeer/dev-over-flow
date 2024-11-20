import { getTopInteractedTags } from "@/lib/actions/tags.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "../RenderTag";
import { Badge } from "@/components/ui/badge";

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
  const topInteractedTags = await getTopInteractedTags({ userId: user._id });
  return (
    <article className="background-light900_dark200 light-border shadow-light100_dark100 flex flex-col items-center rounded-lg border  py-8">
      <Link href={`/profile/${user._id}`}></Link>
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
      {topInteractedTags.length > 0 ? (
        <div className="mt-5 flex gap-2">
          {topInteractedTags.map((tag) => (
            <RenderTag key={tag._id} name={tag.name} />
          ))}
        </div>
      ) : (
        <Badge className="background-light800_dark400 subtle-medium text-light400_light500 mt-5  rounded-md px-4 py-2 uppercase">
          No tags yet
        </Badge>
      )}
    </article>
  );
};

export default UserCard;
