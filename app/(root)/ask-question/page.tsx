import QuestionForm from "@/components/forms/QuestionForm";
import React from "react";

function AskQuestion() {
  return (
    <div>
      <h1 className="h1-bold text-dark400_light900 ">Ask a public question</h1>
      <QuestionForm />
    </div>
  );
}

export default AskQuestion;
