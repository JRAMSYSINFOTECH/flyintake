import express from "express";
import { createFavorite, getFavorites, deleteFavorite } from "../controllers/Favorite.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/submit", authMiddleware, createFavorite);
router.get("/", authMiddleware, getFavorites);
router.delete("/:name", authMiddleware, deleteFavorite);

export default router;

