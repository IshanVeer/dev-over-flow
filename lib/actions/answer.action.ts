"use server";
import Answer from "@/database/answers.model";
import { connectToDatabase } from "../mongoose";
import { CreateAnswersParams } from "./shared.types";
import Question from "@/database/questions.model";
import { revalidatePath } from "next/cache";

// Create Answers
export const createAnswer = async (params: CreateAnswersParams) => {
  try {
    connectToDatabase();
    // get params
    const { author, question, content, path } = params;
    // crete new answer
    const newAnswer = await Answer.create({ author, question, content });

    // add the new answer to questions model
    await Question.findByIdAndUpdate(question, {
      $push: { answers: newAnswer._id },
    });

    // revalidate path
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
