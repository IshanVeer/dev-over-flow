"use server";
import Answer from "@/database/answers.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateAnswersParams,
  GetAnswersParams,
  VoteParams,
} from "./shared.types";
import Question from "@/database/questions.model";
import { revalidatePath } from "next/cache";
import User from "@/database/users.model";

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

// Get Answers
export const getAnswers = async (params: GetAnswersParams) => {
  try {
    connectToDatabase();
    const { questionId } = params;
    const answers = await Answer.find({ question: questionId })
      .populate({
        path: "author",
        model: User,
        select: "_id clerkId name picture",
      })
      .sort({ createdAt: -1 });

    return { answers };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Upvote answers
export const upvoteAnswer = async (params: VoteParams) => {
  try {
    connectToDatabase();
    const { userId, answer, hasUpVoted, path } = params;
    let updateQuery = {};

    if (hasUpVoted) {
      updateQuery = { $pull: { upvotes: userId } };
    } else {
      updateQuery = { $addToSet: { upvotes: userId } };
    }
    await Answer.findByIdAndUpdate(answer, updateQuery, { new: true });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// Downvote Answers
export const downvoteAnswer = async (params: VoteParams) => {
  try {
    connectToDatabase();
    const { userId, answer, hasDownVoted, path } = params;
    let updateQuery = {};

    if (hasDownVoted) {
      updateQuery = { $pull: { downvotes: userId } };
    } else {
      updateQuery = { $addToSet: { downvotes: userId } };
    }
    await Answer.findByIdAndUpdate(answer, updateQuery, { new: true });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
