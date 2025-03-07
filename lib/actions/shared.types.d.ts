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
  hasSaved?: boolean;
}
export interface GetSavedQuestionsParms {
  clerkId?: string;
}

export interface GetUserInfoParams {
  userId?: string;
}
export interface GetUserQuestionsParams {
  userId?: string;
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

// tag params
export interface GetMatchingTagsQuestionParams {
  name: string;
}
// Shared
export interface VoteParams {
  userId: string;
  question?: string;
  answer?: string;
  hasDownVoted?: boolean;
  hasUpVoted?: boolean;
  path: string;
  hasSaved?: boolean;
}
