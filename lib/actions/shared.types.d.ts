import { IUser } from "@/database/users.model";
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
