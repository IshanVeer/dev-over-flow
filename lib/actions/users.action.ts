import User from "@/database/users.model";
import { connectToDatabase } from "../mongoose";
import {
  CreateUserParams,
  DeleteUserParams,
  UpdateUserParams,
} from "./shared.types";
import { revalidatePath } from "next/cache";

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
  console.log(userData, "userData");
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
    const user = await User.findByIdAndDelete({ clerkId });

    if (!user) {
      console.log("user does not exist");
    }
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
