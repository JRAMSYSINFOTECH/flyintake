import ProfileAssessment from "../models/ProfileAssessment.js";

export const submitProfileAssessment = async (req, res) => {
  try {
    const {
      name,
      email,
      mobile,
      destination,
      studyLevel,
      intake,
      fundingSource,
    } = req.body;

    // Basic validation
    if (
      !name ||
      !email ||
      !mobile ||
      !destination ||
      !studyLevel ||
      !intake ||
      !fundingSource
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const assessment = await ProfileAssessment.create({
      name,
      email,
      mobile,
      destination,
      studyLevel,
      intake,
      fundingSource,
    });

    res.status(201).json({
      success: true,
      message: "Profile assessment submitted successfully",
      data: assessment,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
