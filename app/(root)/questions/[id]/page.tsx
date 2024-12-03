import AnswerForm from "@/components/forms/AnswerForm";
import HTMLParser from "@/components/shared/HTMLParser";
import RenderFilters from "@/components/shared/RenderFilters";
import RenderTag from "@/components/shared/RenderTag";
import UserMetrics from "@/components/shared/UserMetrics";
import { AnswerFilters } from "@/constants/filters";
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
            src={question.author.picture}
            alt="user"
            height={20}
            width={20}
            className="invert-colors rounded-[50%]"
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
      <div className="text-dark500_light700 body-regular">
        <HTMLParser data={question.content} />
      </div>

      {/* tags */}
      <div className="my-6 flex flex-wrap gap-3">
        {question.tags.map((tag: any) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>
      {/* Answers Tab */}
      <div className="flex items-center justify-between">
        <p className="text-primary-gradient paragraph-medium ">{`${10} Answers`}</p>
        <div className="max-sm:w-full ">
          <RenderFilters filters={AnswerFilters} />
        </div>
      </div>
      <div>
        <HTMLParser data="demo data" />
      </div>
      <AnswerForm />
    </div>
  );
};

export default QuestionDetail;
