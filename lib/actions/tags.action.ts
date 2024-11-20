"use server";

import User from "@/database/users.model";
import { connectToDatabase } from "../mongoose";
import Tag from "@/database/tags.model";
import { GetInteractedTagsParams } from "./shared.types";

// Get top interacted tags
export const getTopInteractedTags = async (params: GetInteractedTagsParams) => {
  try {
    connectToDatabase();
    const { userId } = params;

    // find user
    const user = await User.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    return [
      { _id: 1, name: "Tag 1" },
      { _id: 2, name: "Tag 2" },
      { _id: 3, name: "Tag 3" },
    ];

    // check the top interacted tags
  } catch (error) {
    console.log(error);
    throw error;
  }
};

// Get all tags

export const getAllTags = async () => {
  try {
    connectToDatabase();
    const tags = await Tag.find({});
    return { tags };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
