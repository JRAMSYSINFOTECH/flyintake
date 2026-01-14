import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import counsellingRoutes from "./routes/counsellingRoutes.js";
import FavoriteRoutes from "./routes/FavoriteRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import profileAssessmentRoutes from "./routes/profileAssessmentRoutes.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/counselling", counsellingRoutes);
app.use("/api/Favorite", FavoriteRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/profile-assessment", profileAssessmentRoutes);

export default app;
