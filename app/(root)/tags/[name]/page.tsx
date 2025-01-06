import QuestionCard from "@/components/shared/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { getMatchingTagsQuestions } from "@/lib/actions/tags.action";
import React from "react";

const TagDetail = async ({ params }: any) => {
  /* we get name from params, but to find the tags and render the respective question I need to 
  get the id to find the specific tags and populate it */

  const { name } = params;
  if (!name) {
    return <div>This tag does not exist</div>;
  }
  const savedQuestionsInTagsResult = await getMatchingTagsQuestions({ name });

  return (
    <>
      <h1 className="h1-bold text-dark400_light900 uppercase">{name}</h1>
      <div className="mt-8 flex items-center gap-8 max-sm:flex-col">
        <LocalSearch placeholder="Search tag questions..." />
      </div>

      {/* questions */}
      <div className="mt-8">
        {savedQuestionsInTagsResult.questions.length > 0 ? (
          savedQuestionsInTagsResult.questions.map((question: any) => (
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

export default TagDetail;
