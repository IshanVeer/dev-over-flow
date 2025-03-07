import Image from "next/image";
import React from "react";

interface UserInfo {
  totalQuestions: number;
  totalAnswers: number;
}
interface Props {
  userInfo: UserInfo;
}
interface StatProps {
  imageUrl: string;
  imageAlt: string;
  value: number;
  title: string;
}
const BadgeStatCard = ({ imageUrl, imageAlt, value, title }: StatProps) => {
  return (
    <div className="background-light900_dark300 text-dark200_light900  flex items-center justify-between gap-8 rounded-lg px-10 py-7 shadow-sm max-xl:flex-col max-[880px]:flex-row ">
      <Image src={imageUrl} width={30} height={30} alt={imageAlt} />
      <div className="flex flex-col items-center">
        <p>{value}</p>
        <p>{title}</p>
      </div>
    </div>
  );
};

const Stats = ({ userInfo }: Props) => {
  return (
    <div className="light-border  flex items-center justify-between gap-4 max-[880px]:grid max-[880px]:grid-cols-2  max-xs:grid-cols-1 ">
      {/* Questions / Answers */}
      <div className="background-light900_dark300 text-dark200_light900  flex items-center justify-between gap-8 rounded-lg px-10 py-7 shadow-sm max-xl:flex-col max-[880px]:flex-row ">
        <div className="flex flex-col items-center">
          <p className="body-semibold">{userInfo.totalQuestions}</p>{" "}
          <p>Questions</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="body-semibold">{userInfo.totalAnswers}</p>{" "}
          <p>Answers</p>
        </div>
      </div>
      {/* Gold Badges */}

      <BadgeStatCard
        imageUrl="/assets/icons/gold-medal.svg"
        imageAlt="gold-badge"
        value={0}
        title="gold badges"
      />

      {/* Silver Badges */}

      <BadgeStatCard
        imageUrl="/assets/icons/silver-medal.svg"
        imageAlt="silver-badge"
        value={0}
        title="silver badges"
      />
      {/* Bronze Badges */}
      <BadgeStatCard
        imageUrl="/assets/icons/bronze-medal.svg"
        imageAlt="bronze-badge"
        value={0}
        title="bronze badges"
      />
    </div>
  );
};

export default Stats;
