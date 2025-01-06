import QuestionCard from "@/components/shared/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";
import { getSavedQuestions } from "@/lib/actions/users.action";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const Collection = async () => {
  const { userId } = auth();

  if (!userId) {
    return <div>Please log in to view saved questions</div>;
  }
  const savedQuestionResult = await getSavedQuestions({ clerkId: userId });

  return (
    <>
      <h1 className="h1-bold text-dark400_light900">Saved Questions</h1>

      {/* questions */}
      <div className="mt-8">
        {savedQuestionResult.questions.length > 0 ? (
          savedQuestionResult.questions.map((question: any) => (
            <QuestionCard key={question._id} question={question} />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            btnText="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Collection;
