import express from "express";
import { createStudentEssentials } from "../controllers/studentController.js";

const router = express.Router();

router.post("/student-essentials", createStudentEssentials);

export default router;