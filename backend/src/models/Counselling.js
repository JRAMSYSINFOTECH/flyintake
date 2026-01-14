import mongoose from "mongoose";

const counsellingSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    destination: { type: String, required: true },
    startTime: { type: String, required: true },
    office: { type: String, required: true },
    counsellingMode: { type: String, required: true },
    studyLevel: { type: String, required: true },
    funding: { type: String, required: true },
    agreeTerms: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Counselling", counsellingSchema);
