import { getAnswers } from "@/lib/actions/answer.action";
import React from "react";
import HTMLParser from "./HTMLParser";
import UserMetrics from "./UserMetrics";
import { getTimestamp } from "@/lib/utils";
import Votes from "./Votes";

interface Props {
  questionId: string;
}

const AllAnswers = async ({ questionId }: Props) => {
  const answerResult = await getAnswers({ questionId });

  return (
    <div className=" light-border my-8 border-b">
      {answerResult.answers.map((answer) => (
        <div key={answer._id} className="my-4">
          <div className="flex items-center justify-between">
            {/* profile */}
            <UserMetrics
              imgURL={answer.author.picture}
              alt="user"
              value={answer.author.name}
              label={` - answered ${getTimestamp(answer.createdAt)}`}
              isAuthor
              href={`/profile/${answer.author.clerkId}`}
              customStyles="body-medium"
            />
            {/* votes */}
            <Votes showSaveButton={false} />
          </div>
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
