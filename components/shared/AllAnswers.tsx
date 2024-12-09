import { getAnswers } from "@/lib/actions/answer.action";
import React from "react";
import HTMLParser from "./HTMLParser";
import UserMetrics from "./UserMetrics";
import { getTimestamp } from "@/lib/utils";

interface Props {
  questionId: string;
}

const AllAnswers = async ({ questionId }: Props) => {
  const answerResult = await getAnswers(questionId);

  return (
    <div className=" light-border my-8 border-b">
      {answerResult.answers.map((answer) => (
        <div key={answer._id} className="my-4">
          {/* profile */}
          <UserMetrics
            imgURL={answer.author.picture}
            alt="user"
            value={answer.author.name}
            label={` - asked ${getTimestamp(answer.createdAt)}`}
            isAuthor
            href={`/profile/${answer.author._id}`}
            customStyles="body-medium"
          />
          {/* content */}
          <div className="text-dark500_light700 body-regular mt-6">
            <HTMLParser data={answer.content} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllAnswers;
