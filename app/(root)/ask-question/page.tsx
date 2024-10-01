import QuestionForm from "@/components/forms/QuestionForm";
import { getUserById } from "@/lib/actions/users.action";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function AskQuestion() {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const mongoUser = await getUserById({ userId });
  console.log("user");
  console.log(mongoUser, "mongoUser");
  return (
    <div>
      <h1 className="h1-bold text-dark400_light900 mb-8 ">
        Ask a public question
      </h1>
      <QuestionForm mongoUserId={JSON.stringify(mongoUser._id)} />
    </div>
  );
}

export default AskQuestion;
