import mongoose from "mongoose";

const profileAssessmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    studyLevel: {
      type: String,
      required: true,
    },
    intake: {
      type: String,
      required: true,
    },
    fundingSource: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("ProfileAssessment", profileAssessmentSchema);
