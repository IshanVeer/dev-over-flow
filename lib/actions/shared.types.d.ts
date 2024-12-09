import { IUser } from "@/database/users.model";
import { Schema } from "mongoose";

// user params
export interface CreateUserParams {
  clerkId: String;
  name: String;
  username: String;
  email: String;
  picture: String;
}

export interface UpdateUserParams {
  clerkId: string;
  updateData: Partial<IUser>;
  path: string;
}

export interface DeleteUserParams {
  clerkId: string;
}
export interface SaveQuestionparams {
  user: string;
  questionId: string;
  path: string;
  hasSaved: boolean;
}

// Question Params
export interface CreateQuestionsParams {
  title: string;
  content: string;
  tags: string[];
  author: Schema.Types.ObjectId | IUser;
  path: string;
}
export interface GetAllUsersParams {}

export interface GetInteractedTagsParams {
  userId: string;
}
export interface GetAllTagsParams {}

export interface GetQuestionById {
  questionId: string;
}

export interface VoteQuestionParams {
  userId: string;
  question: string;
  hasDownVoted?: boolean;
  hasUpVoted?: boolean;
  path: string;
}

// answer params
export interface CreateAnswersParams {
  content: string;
  question: string;
  author: Schema.Types.ObjectId | IUser;
  path: string;
}

export interface GetAnswersParams {
  questionId: string;
}
