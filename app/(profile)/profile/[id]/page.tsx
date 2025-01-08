import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profile = ({ params }: any) => {
  const { id } = params;
  console.log(id, "user id");
  return (
    <>
      {/* user info */}
      <div className="flex items-start">
        <Image
          src="/assets/icons/avatar.svg"
          alt="profile picture"
          height={140}
          width={140}
          className="invert-colors rounded-full"
        />
        <div className="flex flex-col">
          <h2 className="h1-bold text-dark400_light900">Ishan veer</h2>
          <p className="paragraph-regular text-dark400_light900">@ishanveer</p>
          <div className="my-3 flex gap-4">
            <div className="paragraph-medium flex items-center gap-1">
              <Image
                src="/assets/icons/link.svg"
                alt="link"
                height={20}
                width={20}
              />
              <Link className="text-sky-500" href="/">
                ishanveer.com
              </Link>
            </div>

            <div className="text-dark400_light900 paragraph-medium flex items-center gap-1">
              <Image
                src="/assets/icons/location.svg"
                height={20}
                width={20}
                alt="location"
              />
              Mumbai, India
            </div>
            <div className="text-dark400_light900 paragraph-medium flex items-center gap-1">
              <Image
                src="/assets/icons/calendar.svg"
                height={20}
                width={20}
                alt="date of joining"
              />
              Joined May 13
            </div>
          </div>
          <div className="w-3/4">
            <p className="paragraph-regular text-dark400_light900 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium, asperiores vitae cupiditate, voluptatum iusto, quam
              rem itaque ab fugiat autem blanditiis nihil assumenda! Labore
              facere expedita, nam distinctio quia tempora.
            </p>
          </div>
        </div>
      </div>
      {/* user stats */}
      <div></div>

      <div>
        {/* top posts */}
        {/* top tags */}
      </div>
    </>
  );
};

export default Profile;
