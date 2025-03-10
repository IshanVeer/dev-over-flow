import { getUserQuestions } from "@/lib/actions/users.action";
import React from "react";
import QuestionCard from "./cards/QuestionCard";
import NoResult from "./NoResult";

interface Props {
  userId: string;
  userLoggedIn: boolean;
}

const UserQuestions = async ({ userId, userLoggedIn }: Props) => {
  const questionsResult = await getUserQuestions({ userId, page: 1 });

  return (
    <div>
      {questionsResult.questions.length > 0 ? (
        questionsResult.questions.map((question) => (
          <QuestionCard
            userLoggedIn={userLoggedIn}
            showUpdateButton={true}
            key={question._id}
            question={question}
          />
        ))
      ) : (
        <NoResult
          title="There’s no question to show"
          description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
          btnText="Ask a Question"
        />
      )}
    </div>
  );
};

export default UserQuestions;
