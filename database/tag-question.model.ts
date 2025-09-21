import { model, models, Schema } from "mongoose";

const TagQuestionSchema = new Schema(
  {
    tag: { type: Schema.Types.ObjectId, ref: "Tag", required: true },
    question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
  },
  { timestamps: true }
);

const TagQuestion = models?.Tag || model("Tag", TagQuestionSchema);

export default TagQuestion;
