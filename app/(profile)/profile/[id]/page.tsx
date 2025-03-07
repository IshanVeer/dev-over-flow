import { Button } from "@/components/ui/button";
import { getUserInfo } from "@/lib/actions/users.action";
import { URLProps } from "@/types";
import { SignedIn } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Stats from "@/components/shared/Stats";

const Profile = async ({ params, searchParams }: URLProps) => {
  const { userId } = auth();

  const { id } = params;

  /* we get the id from the route and then pass the id to our server action to get the 
  user info.
  */
  const result = await getUserInfo({ userId: id });
  console.log(result, "user info result");
  return (
    <>
      {/* user info */}
      <div className="mb-10 flex items-start gap-4 max-lg:flex-col">
        <Image
          src={result.user.picture}
          alt="profile picture"
          height={150}
          width={150}
          className="invert-colors rounded-full"
        />
        <div className="mt-4 flex flex-col">
          <h2 className="h1-bold text-dark400_light900">{result.user.name}</h2>
          <p className="paragraph-regular text-dark400_light900">{`@${result.user.username}`}</p>
          <div className="my-3 flex gap-4 max-sm:flex-col">
            <div className="paragraph-medium flex items-center gap-1">
              <Image
                src="/assets/icons/link.svg"
                alt="link"
                height={20}
                width={20}
              />
              <Link className="text-sky-500" href="/">
                {result.user.email}
              </Link>
            </div>

            <div className="text-dark400_light900 paragraph-medium flex items-center gap-1">
              <Image
                src="/assets/icons/calendar.svg"
                height={20}
                width={20}
                alt="date of joining"
              />
              {`Joined ${new Date(result.user.joinedAt).toLocaleString("default", { month: "long" })} ${result.user.joinedAt.getFullYear()}`}
            </div>
          </div>
          <div>
            <p className="paragraph-regular text-dark400_light900 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium, asperiores vitae cupiditate, voluptatum iusto, quam
              rem itaque ab fugiat autem blanditiis nihil assumenda! Labore
              facere expedita, nam distinctio quia tempora.
            </p>
          </div>
        </div>
        <SignedIn>
          {userId === result.user.clerkId && (
            <Link href="/profile/edit">
              <Button className="background-light700_dark400 text-dark200_light800 ">
                Edit Profile
              </Button>
            </Link>
          )}
        </SignedIn>
      </div>
      {/* user stats */}
      <h2 className="h3-semibold my-5">Stats</h2>
      <Stats userInfo={result} />

      <div>
        <Tabs defaultValue="questions">
          <TabsList className="background-light800_dark400 text-light400_light500">
            <TabsTrigger
              value="questions"
              className="data-[state=active]:background-primary200_dark300 data-[state=active]:text-primary-500 "
            >
              Top Posts
            </TabsTrigger>
            <TabsTrigger
              value="answers"
              className="data-[state=active]:background-primary200_dark300 data-[state=active]:text-primary-500"
            >
              Answers
            </TabsTrigger>
          </TabsList>
          <TabsContent value="questions">Posts</TabsContent>
          <TabsContent value="answers">Answers</TabsContent>
        </Tabs>

        {/* top posts */}
        {/* top tags */}
      </div>
    </>
  );
};

export default Profile;
