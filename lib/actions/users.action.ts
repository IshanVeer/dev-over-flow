"use server";
import User from "@/database/users.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  GetAllUsersParams,
  GetSavedQuestionsParms,
  GetUserInfoParams,
  GetUserQuestionsParams,
  SaveQuestionparams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";

import Tag from "@/database/tags.model";
import Question from "@/database/questions.model";
import Answer from "@/database/answers.model";

// Template action
/* 
export const getAllUsers = async () => {
  try {
    connectToDatabase();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
 */

// Get user by ID

export const getUserById = async (params: any) => {
  try {
    connectToDatabase();
    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Create User

export const createUser = async (userData: CreateUserParams) => {
  try {
    connectToDatabase();

    const newuser = User.create(userData);
    return newuser;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Update User
export const updateUser = async (params: UpdateUserParams) => {
  try {
    connectToDatabase();
    const { clerkId, updateData, path } = params;
    await User.findOneAndUpdate({ clerkId }, updateData, { new: true });
    revalidatePath(path); // ensuring that any cached or statically generated pages are updated to reflect the changes made to the user data.
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// Delete User

export const deleteUser = async (params: DeleteUserParams) => {
  try {
    connectToDatabase();
    const { clerkId } = params;
    const user = await User.findOneAndDelete({ clerkId });

    if (!user) {
      return;
    }
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Get All users
export const getAllUsers = async (params: GetAllUsersParams) => {
  try {
    connectToDatabase();
    const users = await User.find({}).sort({ createdAt: -1 });

    return { users };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// Get user info
/* We need to get all the data of the user, which includes, name, picture, joining date, number of questions,
 number of answers, top tags - let's keep it top 10 tags interacted with, questions - questions with most interaction,
 answers, gold/silver/bronze badges. */

export const getUserInfo = async (params: GetUserInfoParams) => {
  try {
    connectToDatabase();
    const { userId } = params;
    console.log(userId, "profile action");
    const user = await User.findOne({ clerkId: userId });
    const totalQuestions = await Question.countDocuments({ author: user._id });
    const totalAnswers = await Answer.countDocuments({ author: user._id });

    return { user, totalAnswers, totalQuestions };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Save question in user document
/* We need question id from params and take that and push that to user document. We check if the user
has already saved the question or not, if he has already saved the question and re clicks on the button the ques
is unsaved and vis-a-vis. We check isSaved value and either $pull the value for saved or addToSet  */

export const saveQuestionsInUser = async (params: SaveQuestionparams) => {
  try {
    connectToDatabase();
    let updateQuery = {};
    const { questionId, path, hasSaved, user } = params;

    if (hasSaved) {
      updateQuery = { $pull: { saved: questionId } };
    } else {
      updateQuery = { $addToSet: { saved: questionId } };
    }

    await User.findByIdAndUpdate(user, updateQuery);

    revalidatePath(path);
  } catch (error) {}
};

// Get Saved questions

export const getSavedQuestions = async (params: GetSavedQuestionsParms) => {
  try {
    connectToDatabase();
    const { clerkId } = params;

    const user = await User.findOne({ clerkId }).populate({
      path: "saved",
      options: { sort: { createdAt: -1 } },
      populate: [
        { path: "tags", model: Tag },
        { path: "author", model: User },
      ],
    });

    const savedQuestions = user.saved;

    return { questions: savedQuestions };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
// Get all questions by user
/* We get the user id from the route, we get the user id and then we pull author from question doc. We match 
question author of that question with the user id and then populate that question in the query and that question
will be returned.  */

export const getUserQuestions = async ({ userId }: GetUserQuestionsParams) => {
  try {
    connectToDatabase();
    console.log(userId, "questions author");
    const user = await User.findOne({ clerkId: userId });
    console.log(user, "user to get questions");
    const questions = await Question.find({ author: user._id })
      .populate({ path: "tags", model: Tag })
      .populate({ path: "author", model: User })
      .sort({ createdAt: -1 });
    console.log(questions, " user questions");
    return { questions };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
