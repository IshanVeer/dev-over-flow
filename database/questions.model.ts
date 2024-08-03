import { Schema, model, models, Document } from "mongoose";

export interface IQuestion extends Document {
  title: string;
  content: string;
  author: Schema.Types.ObjectId;
  upvotes: Schema.Types.ObjectId[];
  downvotes: Schema.Types.ObjectId[];
  tags: Schema.Types.ObjectId[];
  answers: Schema.Types.ObjectId[];
  views: number;
  createdAt: Date;
}

const questionSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, required: true },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  tags: [{ type: Schema.Types.ObjectId, ref: "User" }],
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
  views: [{ type: Number, default: 0 }],
  createdAt: { type: Date, default: Date.now },
});

const Question = models.Question || model("Question", questionSchema);

export default Question;
