"use server";
import { connectToDatabase } from "../mongoose";
import Question from "@/database/questions.model";
import { CreateQuestionsParams } from "./shared.types";
import Tag from "@/database/tags.model";
import { revalidatePath } from "next/cache";

export const createQuestions = async (params: CreateQuestionsParams) => {
  try {
    console.log("connecting to database");
    connectToDatabase();
    const { title, content, tags, author, path } = params;

    // create question
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
