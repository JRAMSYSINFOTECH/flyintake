import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/* ================= SIGN UP ================= */
export const signup = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    // check user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // store data in DB
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone
    });

    res.status(201).json({
      message: "Signup successful",
      userId: user._id
    });
  } catch (error) {
    res.status(500).json({ message: "Signup failed" });
  }
};

/* ================= SIGN IN ================= */
export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // generate token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.status(200).json({
      message: "Signin successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Signin failed" });
  }
};

/* ================= GET PROFILE ================= */
export const getProfile = async (req, res) => {
  try {
    const user = req.user;
    res.status(200).json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        image: user.image
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to get profile" });
  }
};

/* ================= UPDATE PROFILE ================= */
export const updateProfile = async (req, res) => {
  try {
    const { name, phone, image } = req.body;
    const user = req.user;

    user.name = name || user.name;
    user.phone = phone || user.phone;
    if (image) user.image = image;

    await user.save();

    res.status(200).json({
      message: "Profile updated successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        image: user.image
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to update profile" });
  }
};
