import React from "react";
import RenderTag from "../RenderTag";
import Card from "@/components/ui/Card";
import Link from "next/link";
import UserMetrics from "../UserMetrics";
import { formatAndDivide, getTimestamp } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface tag {
  _id: string;
  name: string;
}
interface author {
  _id: string;
  clerkId: string;
  name: string;
  picture: string;
}
interface question {
  _id: string;
  title: string;
  tags: tag[];
  author: author;
  upvotes: string;
  views: number;
  answers: any[];
  createdAt: Date;
}

interface QuestionProps {
  question: question;
  userLoggedIn: boolean;
  showUpdateButton: boolean;
}

const QuestionCard = ({
  question,
  userLoggedIn,
  showUpdateButton,
}: QuestionProps) => {
  return (
    <Card padding="px-12 py-8 light-border border" margin="mb-6">
      <p className="small-regular text-dark200_light800 mb-3 sm:hidden">
        {getTimestamp(question.createdAt)}
      </p>
      <div className="flex items-center justify-between">
        <Link href={`/questions/${question._id}`}>
          <h3 className="h3-semibold text-dark400_light900 mb-4 line-clamp-1 ">
            {question.title}
          </h3>
        </Link>
        {userLoggedIn && showUpdateButton ? (
          <div className="flex items-center">
            <Button className="p-2">
              <Image
                src="/assets/icons/edit.svg"
                width={20}
                height={20}
                alt="edit"
              />
            </Button>
            <Button className="p-2">
              <Image
                src="/assets/icons/trash.svg"
                width={20}
                height={20}
                alt="delete"
              />
            </Button>
          </div>
        ) : null}
      </div>

      {/* tags */}
      <div className="mb-4 flex flex-wrap gap-3">
        {question.tags.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>
      <div className=" flex flex-wrap items-center justify-between ">
        {/* profile */}
        <UserMetrics
          imgURL={question.author.picture}
          alt="user"
          value={question.author.name}
          label={` - asked ${getTimestamp(question.createdAt)}`}
          isAuthor
          href={`/profile/${question.author.clerkId}`}
          customStyles="body-medium"
        />
        {/* stats */}
        <div className="flex items-center gap-2">
          <UserMetrics
            imgURL="/assets/icons/like.svg"
            alt="upvote"
            value={formatAndDivide(question.upvotes.length)}
            label=" Votes"
          />
          <UserMetrics
            imgURL="/assets/icons/message.svg"
            alt="answers"
            value={formatAndDivide(question.answers.length)}
            label=" Answers"
          />
          <UserMetrics
            imgURL="/assets/icons/eye.svg"
            alt="views"
            value={formatAndDivide(question.views)}
            label=" Views"
          />
        </div>
      </div>

      {/* If signed in add edit/delete card */}
    </Card>
  );
};

export default QuestionCard;
