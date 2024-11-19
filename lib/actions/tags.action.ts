"use server";

import User from "@/database/users.model";
import { connectToDatabase } from "../mongoose";
import { GetInteractedTagsParams } from "./shared.types";

export const getInteractedTags = async (params: GetInteractedTagsParams) => {
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
