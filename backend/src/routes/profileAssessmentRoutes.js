import express from "express";
import { submitProfileAssessment } from "../controllers/profileAssessmentController.js";

const router = express.Router();

router.post("/submit", submitProfileAssessment);

export default router;
