import { IUser } from "@/database/users.model";
import { Schema } from "mongoose";
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

export interface CreateQuestionsParams {
  title: string;
  content: string;
  tags: string[];
  author: Schema.Types.ObjectId | IUser;
  path: string;
}
