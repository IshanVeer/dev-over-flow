import Card from "@/components/ui/Card";
import { getTimestamp, formatAndDivide } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import UserMetrics from "../UserMetrics";

import { Button } from "@/components/ui/button";

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
  userLoggedIn: boolean;
  showUpdateButton: boolean;
}

const AnswerCard = ({
  answer,
  userLoggedIn,
  showUpdateButton,
}: AnswerProps) => {
  return (
    <Card padding="px-12 py-8 light-border border" margin="mb-6">
      <p className="small-regular text-dark200_light800 mb-3 sm:hidden">
        {getTimestamp(answer.createdAt)}
      </p>

      {/* <Link href={`/questions/${answer.question._id}`}>
        <h3 className="h3-semibold text-dark400_light900 mb-4 line-clamp-1 ">
          {answer.question.title}
        </h3>
      </Link> */}
      <div className="flex items-center justify-between">
        <Link href={`/questions/${answer.question._id}`}>
          <h3 className="h3-semibold text-dark400_light900 mb-4 line-clamp-1 ">
            {answer.question.title}
          </h3>
        </Link>
        {userLoggedIn && showUpdateButton ? (
          <div className="flex items-center">
            <Button className="p-2">
              <Image
                src="/assets/icons/trash.svg"
                width={16}
                height={16}
                alt="delete"
              />
            </Button>
          </div>
        ) : null}
      </div>

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
