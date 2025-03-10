import { getUserAnswers } from "@/lib/actions/users.action";
import React from "react";
import AnswerCard from "./cards/AnswerCard";
import NoResult from "./NoResult";

interface Props {
  userId: string;
  userLoggedIn: boolean;
}
const UserAnswers = async ({ userId, userLoggedIn }: Props) => {
  const answersResult = await getUserAnswers({ userId, page: 1 });
  console.log(answersResult, "answers in frontend");
  return (
    <div>
      {answersResult.answers.length > 0 ? (
        answersResult.answers.map((answer) => (
          <AnswerCard
            key={answer._id}
            userLoggedIn={userLoggedIn}
            showUpdateButton={true}
            answer={answer}
          />
        ))
      ) : (
        <NoResult
          title="There’s no answer to show"
          description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
          btnText="Ask a Question"
        />
      )}
    </div>
  );
};

export default UserAnswers;
