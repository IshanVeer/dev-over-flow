import { Schema, model, models, Document } from "mongoose";

export interface Itags extends Document {
  title: string;
  description: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdOn: Date;
}

const tagSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: "Question" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdOn: { type: Date, default: Date.now },
});

const Tag = models.Tag || model("Tags", tagSchema);

export default Tag;
