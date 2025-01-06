"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import {
  downvoteQuestion,
  upvoteQuestion,
} from "@/lib/actions/questions.action";
import { usePathname } from "next/navigation";
import { saveQuestionsInUser } from "@/lib/actions/users.action";
import { upvoteAnswer, downvoteAnswer } from "@/lib/actions/answer.action";

interface Props {
  showSaveButton?: boolean;
  userId: string;
  itemId: string;
  upvotes: string;
  downvotes: string;
  hasDownVoted: boolean;
  hasUpVoted: boolean;
  hasSaved?: boolean;
  type: string;
}

const Votes = ({
  showSaveButton,
  userId,
  itemId,
  upvotes,
  downvotes,
  hasDownVoted,
  hasUpVoted,
  hasSaved,
  type,
}: Props) => {
  const pathname = usePathname();

  const voteButtonHandler = (action: string) => {
    if (type === "Question") {
      if (action === "upvote") {
        upvoteQuestion({
          userId,
          question: JSON.parse(itemId),
          hasUpVoted,
          path: pathname,
        });
      } else if (action === "downvote") {
        downvoteQuestion({
          userId,
          question: JSON.parse(itemId),
          hasDownVoted,
          path: pathname,
        });
      }
    }
    if (type === "Answer") {
      if (action === "upvote") {
        upvoteAnswer({
          userId,
          answer: JSON.parse(itemId),
          hasUpVoted,
          path: pathname,
        });
      } else if (action === "downvote") {
        downvoteAnswer({
          userId,
          answer: JSON.parse(itemId),
          hasDownVoted,
          path: pathname,
        });
      }
    }
  };
  const saveButtonHandler = () => {
    saveQuestionsInUser({
      user: userId,
      questionId: JSON.parse(itemId),
      path: pathname,
      hasSaved,
    });
  };

  return (
    <div className="flex gap-1.5">
      {/* upvote */}
      <div className="flex items-center">
        <Button className="p-2" onClick={() => voteButtonHandler("upvote")}>
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
        <Button className=" p-2" onClick={() => voteButtonHandler("downvote")}>
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
        <Button className="p-2" onClick={saveButtonHandler}>
          <Image
            src={
              hasSaved
                ? "/assets/icons/star-filled.svg"
                : "/assets/icons/star-red.svg"
            }
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
