"use server";
import { connectToDatabase } from "../mongoose";
import Question from "@/database/questions.model";
import {
  CreateQuestionsParams,
  GetQuestionById,
  VoteQuestionParams,
} from "./shared.types";
import Tag from "@/database/tags.model";
import { revalidatePath } from "next/cache";
import User from "@/database/users.model";

// get questions
export const getQuestions = async () => {
  connectToDatabase();
  try {
    const questions = await Question.find({})
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });

    return { questions };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// create question
export const createQuestions = async (params: CreateQuestionsParams) => {
  try {
    console.log("connecting to database");
    connectToDatabase();
    const { title, content, tags, author, path } = params;

    const question = await Question.create({
      title,
      content,
      author,
    });

    console.log(tags, "tag value");
    // initialize empty tags array, we will push the new tags in this
    const tagsDocument = [];

    // find existing tags or create new tags and populate the tags array
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } }, // find the tag, regular expression is used to match the name of the tag
        { $setOnInsert: { name: tag }, $push: { question: question._id } }, // sets name field only if a new document is created
        { upsert: true, new: true } // of no document matcheds the query, new document is created
      );
      tagsDocument.push(existingTag._id);
    }
    // push the tags to questions document
    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagsDocument } },
    });

    revalidatePath(path);
  } catch (error) {
    console.log(error);
  }
};

// Get question by Id

export const getQuestionById = async (params: GetQuestionById) => {
  try {
    connectToDatabase();
    const { questionId } = params;
    const question = await Question.findById(questionId)
      .populate({ path: "tags", model: Tag, select: "_id name" })
      .populate({
        path: "author",
        model: User,
        select: "_id name clerkId picture",
      });
    return question;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// upvote questions
/* we create a function that takes user Id as params and then we find the question by id and push the userId as
an object to the question model in the upvote field. We need to get the user Id of the user who is clicking the the upvote button,
hence the user should be authenticated.
 */

export const upvoteQuestion = async (params: VoteQuestionParams) => {
  try {
    connectToDatabase();
    const { userId, question, hasUpVoted, path } = params;
    let updateQuery = {};

    if (hasUpVoted) {
      updateQuery = { $pull: { upvotes: userId } };
    } else {
      updateQuery = { $addToSet: { upvotes: userId } };
    }
    await Question.findByIdAndUpdate(question, updateQuery, { new: true });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const downvoteQuestion = async (params: VoteQuestionParams) => {
  try {
    connectToDatabase();
    const { userId, question, hasDownVoted, path } = params;
    let updateQuery = {};

    if (hasDownVoted) {
      updateQuery = { $pull: { downvotes: userId } };
    } else {
      updateQuery = { $addToSet: { downvotes: userId } };
    }
    await Question.findByIdAndUpdate(question, updateQuery, { new: true });
    revalidatePath(path);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
