import Counselling from "../models/Counselling.js";

export const createCounselling = async (req, res) => {
  try {
    const counselling = await Counselling.create(req.body);
    res.status(201).json({
      success: true,
      message: "Counselling request submitted successfully",
      data: counselling,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
