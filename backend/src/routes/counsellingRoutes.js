import express from "express";
import { createCounselling } from "../controllers/counsellingController.js";

const router = express.Router();

router.post("/submit", createCounselling);

export default router;
