import React from "react";

interface UserInfo {
  totalQuestions: number;
  totalAnswers: number;
}
interface Props {
  userInfo: UserInfo;
}

const Stats = ({ userInfo }: Props) => {
  return (
    <div className="light-border  flex items-center justify-between gap-4 max-[880px]:grid max-[880px]:grid-cols-2  max-xs:grid-cols-1 ">
      {/* Questions / Answers */}
      <div className="flex  items-center justify-between gap-8 rounded-lg bg-white px-10 py-7 shadow-sm max-xl:flex-col max-[880px]:flex-row ">
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
      <div className="flex  items-center justify-between gap-8 rounded-lg bg-white px-10 py-7 shadow-sm max-xl:flex-col max-[880px]:flex-row ">
        <div className="flex flex-col items-center">
          <p className="body-semibold">{userInfo.totalQuestions}</p>{" "}
          <p>Questions</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="body-semibold">{userInfo.totalAnswers}</p>{" "}
          <p>Answers</p>
        </div>
      </div>
      {/* Silver Badges */}
      <div className="flex  items-center justify-between gap-8 rounded-lg bg-white px-10 py-7 shadow-sm max-xl:flex-col max-[880px]:flex-row ">
        <div className="flex flex-col items-center">
          <p className="body-semibold">{userInfo.totalQuestions}</p>{" "}
          <p>Questions</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="body-semibold">{userInfo.totalAnswers}</p>{" "}
          <p>Answers</p>
        </div>
      </div>
      {/* Bronze Badges */}
      <div className="flex  items-center justify-between gap-8 rounded-lg bg-white px-10 py-7 shadow-sm max-xl:flex-col max-[880px]:flex-row ">
        <div className="flex flex-col items-center">
          <p className="body-semibold">{userInfo.totalQuestions}</p>{" "}
          <p>Questions</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="body-semibold">{userInfo.totalAnswers}</p>{" "}
          <p>Answers</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
