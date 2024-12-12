import { getSavedQuestions } from "@/lib/actions/users.action";
import { auth } from "@clerk/nextjs/server";
import React from "react";

const Collection = async () => {
  const { userId } = auth();
  console.log(userId, "user id");
  if (!userId) {
    return <div>Please log in to view saved questions</div>;
  }
  const savedQuestionResult = await getSavedQuestions({ clerkId: userId });
  console.log(savedQuestionResult, "saved questions");
  return (
    <>
      <h1 className="h1-bold text-dark400_light900">Saved Questions</h1>
    </>
  );
};

export default Collection;
