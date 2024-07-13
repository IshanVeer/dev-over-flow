import React from "react";
import RenderTag from "../RenderTag";
import Card from "@/components/ui/Card";
import Link from "next/link";
import UserMetrics from "../UserMetrics";
import { formatAndDivide, getTimestamp } from "@/lib/utils";

interface tag {
  _id: string;
  name: string;
}
interface author {
  _id: string;
  name: string;
  picture: string;
}
interface question {
  _id: string;
  title: string;
  tags: tag[];
  author: author;
  upvotes: number;
  views: number;
  answers: any[];
  createdAt: Date;
}

interface QuestionProps {
  question: question;
}

const QuestionCard = ({ question }: QuestionProps) => {
  return (
    <Card padding="px-12 py-8" margin="mb-6">
      <p className="small-regular text-dark200_light800 mb-3 sm:hidden">
        {getTimestamp(question.createdAt)}
      </p>

      <Link href="/">
        <h3 className="h3-semibold text-dark400_light900 mb-4 line-clamp-1 ">
          {question.title}
        </h3>
      </Link>
      {/* tags */}
      <div className="flex flex-wrap gap-3">
        {question.tags.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>
      <div className=" flex flex-wrap items-center justify-between ">
        {/* profile */}
        <UserMetrics
          imgURL="/assets/icons/avatar.svg"
          alt="user"
          value={question.author.name}
          label={` - asked ${getTimestamp(question.createdAt)}`}
          isAuthor
          href={`/profile/${question.author._id}`}
          customStyles="body-medium"
        />
        {/* stats */}
        <div className="flex items-center gap-2">
          <UserMetrics
            imgURL="/assets/icons/like.svg"
            alt="upvote"
            value={formatAndDivide(question.upvotes)}
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
