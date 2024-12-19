import AnswerForm from "@/components/forms/AnswerForm";
import AllAnswers from "@/components/shared/AllAnswers";
import HTMLParser from "@/components/shared/HTMLParser";
import RenderFilters from "@/components/shared/RenderFilters";
import RenderTag from "@/components/shared/RenderTag";
import UserMetrics from "@/components/shared/UserMetrics";
import Votes from "@/components/shared/Votes";
import { AnswerFilters } from "@/constants/filters";
import { getQuestionById } from "@/lib/actions/questions.action";
import { getUserById } from "@/lib/actions/users.action";
import { formatAndDivide, getTimestamp } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import React from "react";

const QuestionDetail = async ({ params }: any) => {
  const { id } = params;
  const { userId } = auth();

  const question = await getQuestionById({ questionId: id });
  const mongoUser = await getUserById({ userId });
  const totalAnswers = question.answers.length;
  const upvotes = formatAndDivide(question.upvotes.length);
  const downvotes = formatAndDivide(question.downvotes.length);
  const hasUpVoted = question.upvotes.includes(mongoUser?._id);
  const hasDownVoted = question.downvotes.includes(mongoUser?._id);
  const hasSaved = mongoUser.saved.includes(question._id);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        {/* author info */}
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
        {/* Upvote / downvote / save */}
        <Votes
          showSaveButton={true}
          userId={mongoUser._id}
          itemId={JSON.stringify(question._id)}
          upvotes={upvotes}
          downvotes={downvotes}
          hasUpVoted={hasUpVoted}
          hasDownVoted={hasDownVoted}
          hasSaved={hasSaved}
          type="Question"
        />
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

      {/* Answer Form */}
      <div className="flex items-center justify-between">
        <p className="text-primary-gradient paragraph-medium ">{`${totalAnswers} ${totalAnswers > 1 ? "Answers" : "Answer"}`}</p>
        <div>
          <RenderFilters filters={AnswerFilters} />
        </div>
      </div>
      {/* All Answers */}
      <AllAnswers questionId={question._id} userId={mongoUser._id} />
      <AnswerForm
        author={JSON.stringify(mongoUser?._id)}
        questionId={JSON.stringify(question._id)}
      />
    </div>
  );
};

export default QuestionDetail;
