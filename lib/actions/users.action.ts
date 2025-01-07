"use server";
import User from "@/database/users.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  GetAllUsersParams,
  GetSavedQuestionsParms,
  SaveQuestionparams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";

import Tag from "@/database/tags.model";

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
