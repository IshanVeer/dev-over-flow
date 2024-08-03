import { connectToDatabase } from "../mongoose";

export const createQuestions = () => {
  try {
    connectToDatabase();
  } catch (error) {}
};
