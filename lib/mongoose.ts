import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  // check for mongoDb url
  if (!process.env.MONGODB_URL) {
    return console.log("MongoDB URL is missing");
  }
  if (isConnected) {
    return console.log("MongoDB is already connected");
  }

  // establishing connection with mongoDB
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "dev-over-flow",
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("MongoDb connection failed", error);
  }
};
