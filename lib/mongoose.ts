import mongoose, { Mongoose } from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL as string;

// if mongoDB url doesn't exist send an error message
if (!MONGODB_URL) {
  throw new Error("MongoDB URL is missing");
}

// defining cache interface
interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// setting up global variable

declare global {
  var mongoose: MongooseCache;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectToDatabase = async (): Promise<Mongoose> => {
  // if connection already exists
  if (cached.conn) {
    console.log("MongoDB already connected");
    return cached.conn;
  }
  //   if promise doesn't exist store the promise
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URL, {
        dbName: "dev-overflow",
      })
      .then((result) => {
        console.log("Connected to MongoDb");
        return result;
      })
      .catch((error) => {
        console.error("Error connecting to MongoDB", error);
        throw error;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default connectToDatabase;
