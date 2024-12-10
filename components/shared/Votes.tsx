"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  downvoteQuestion,
  upvoteQuestion,
} from "@/lib/actions/questions.action";

interface Props {
  showSaveButton?: boolean;
  userId: string;
  questionId: string;
  upvotes: string;
  downvotes: string;
  hasDownVoted: boolean;
  hasUpVoted: boolean;
}

const Votes = ({
  showSaveButton,
  userId,
  questionId,
  upvotes,
  downvotes,
  hasDownVoted,
  hasUpVoted,
}: Props) => {
  const upvoteButtonhandler = () => {
    upvoteQuestion({ userId, question: JSON.parse(questionId) });
  };
  const downvoteButtonHandler = () => {
    console.log("clicking down vote");
    downvoteQuestion({ userId, question: JSON.parse(questionId) });
  };

  return (
    <div className="flex gap-1.5">
      {/* upvote */}
      <div className="flex items-center">
        <Button className="p-2" onClick={upvoteButtonhandler}>
          <Image
            src={
              hasUpVoted
                ? "/assets/icons/upvoted.svg"
                : "/assets/icons/upvote.svg"
            }
            width={18}
            height={18}
            alt="upvote"
          />
        </Button>
        <div className="subtle-medium background-light700_dark300 text-dark100_light900 rounded-sm px-1.5 py-1 ">
          {upvotes}
        </div>
      </div>
      {/* downvote */}
      <div className="flex items-center">
        <Button className="p-2" onClick={downvoteButtonHandler}>
          <Image
            src={
              hasDownVoted
                ? "/assets/icons/downvoted.svg"
                : "/assets/icons/downvote.svg"
            }
            width={18}
            height={18}
            alt="downvote"
          />
        </Button>
        <div className="subtle-medium background-light700_dark300 text-dark100_light900 rounded-sm px-1.5 py-1 ">
          {downvotes}
        </div>
      </div>
      {/* Save */}
      {showSaveButton && (
        <Button className="p-2">
          <Image
            src="/assets/icons/star-red.svg"
            width={20}
            height={20}
            alt="save"
          />
        </Button>
      )}
    </div>
  );
};

export default Votes;
