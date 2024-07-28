import { Schema, model, models, Document } from "mongoose";

// Define types
export interface IUser extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture: string;
  location?: string;
  portfolioWebsite?: string;
  reputations?: number;
  saved: Schema.Types.ObjectId[];
  joinedAt: Date;
}

// Define document Schema

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  bio: { type: String },
  picture: { type: String, required: true },
  location: { type: String },
  portfolioWebsite: { type: String },
  reputations: { type: Number, default: 0 },
  saved: [{ type: Schema.Types.ObjectId, ref: "Questions" }],
  joinedAt: { type: Date, default: Date.now },
});

// Define Model, check if model already exist if not then create a new one

const User = models.User || model("User", UserSchema);

export default User;
