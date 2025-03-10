import Card from "@/components/ui/Card";
import { getTimestamp, formatAndDivide } from "@/lib/utils";
import Link from "next/link";
import React from "react";

import UserMetrics from "../UserMetrics";

interface author {
  _id: string;
  clerkId: string;
  name: string;
  picture: string;
}
interface question {
  title: string;
  _id: string;
}
interface answer {
  author: author;
  question: question;
  createdAt: Date;
  upvotes: string;
}
interface AnswerProps {
  answer: answer;
}

const AnswerCard = ({ answer }: AnswerProps) => {
  console.log(answer.question, "answer card values");
  console.log(answer.question.title, "answer titles");
  return (
    <Card padding="px-12 py-8 light-border border" margin="mb-6">
      <p className="small-regular text-dark200_light800 mb-3 sm:hidden">
        {getTimestamp(answer.createdAt)}
      </p>

      <Link href={`/questions/${answer.question._id}`}>
        <h3 className="h3-semibold text-dark400_light900 mb-4 line-clamp-1 ">
          {answer.question.title}
        </h3>
      </Link>

      <div className=" flex flex-wrap items-center justify-between ">
        {/* profile */}
        <UserMetrics
          imgURL={answer.author.picture}
          alt="user"
          value={answer.author.name}
          label={` - asked ${getTimestamp(answer.createdAt)}`}
          isAuthor
          href={`/profile/${answer.author.clerkId}`}
          customStyles="body-medium"
        />
        {/* stats */}

        <UserMetrics
          imgURL="/assets/icons/like.svg"
          alt="upvote"
          value={formatAndDivide(answer.upvotes.length)}
          label=" Votes"
        />
      </div>
    </Card>
  );
};

export default AnswerCard;
