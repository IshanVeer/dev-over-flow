import QuestionForm from "@/components/forms/QuestionForm";
import { getUserById } from "@/lib/actions/users.action";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const AskQuestion = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const mongoUser = await getUserById({ userId });
  console.log(mongoUser, "mongo user");

  if (!mongoUser) {
    console.log("User not found in mongoDb");
    return <div>404 User Not Found</div>;
  }
  console.log("user");
  console.log(mongoUser, "mongoUser");
  return (
    <>
      <h1 className="h1-bold text-dark400_light900 mb-8 ">
        Ask a public question
      </h1>
      <QuestionForm mongoUserId={JSON.stringify(mongoUser._id)} />
    </>
  );
};

export default AskQuestion;
