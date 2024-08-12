import QuestionForm from "@/components/forms/QuestionForm";
import { getUserById } from "@/lib/actions/users.action";
import { auth } from "@clerk/nextjs/server";
import React from "react";

function AskQuestion() {
  const { userId } = auth();
  const mongoUser = getUserById({ userId });
  console.log(mongoUser, "mongoUser");
  return (
    <div>
      <h1 className="h1-bold text-dark400_light900 mb-8 ">
        Ask a public question
      </h1>
      <QuestionForm />
    </div>
  );
}

export default AskQuestion;
