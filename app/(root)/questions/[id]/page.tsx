import RenderTag from "@/components/shared/RenderTag";
import UserMetrics from "@/components/shared/UserMetrics";
import { getQuestionById } from "@/lib/actions/questions.action";
import { formatAndDivide, getTimestamp } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const QuestionDetail = async ({ params }: any) => {
  const { id } = params;

  const question = await getQuestionById({ questionId: id });
  console.log(question, "question detail");
  return (
    <div>
      <div className="mb-4">
        <div className="flex gap-2">
          <Image
            src="/assets/icons/avatar.svg"
            alt="user"
            height={20}
            width={20}
            className="invert-colors"
          />
          <p className="paragraph-semibold text-dark400_light700">
            {question.author.name}
          </p>
        </div>
      </div>
      <h3 className="h2-semibold text-dark200_light900 capitalize">
        {question.title}
      </h3>

      {/* stats */}
      <div className="my-4 flex items-center gap-2">
        <UserMetrics
          imgURL="/assets/icons/clock-2.svg"
          alt="voted "
          label={` asked ${getTimestamp(question.createdAt)}`}
        />
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
      {/* content */}
      <div className="">
        <p className="body-regular text-dark400_light700">{question.content}</p>
      </div>

      {/* tags */}
      <div className="my-6 flex flex-wrap gap-3">
        {question.tags.map((tag: any) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>
    </div>
  );
};

export default QuestionDetail;
