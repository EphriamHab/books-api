import express from "express";

import {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  getRecommendation,
  markFavorite,
  getFavoriteBooks,
} from "../controllers/bookControllers.js";
import { protect, authorize } from "../middleware/authMiddleware.js";

const router = express.Router();

// User-accessible routes (specific routes first)
router.get("/recommendation", protect, getRecommendation);
router.get("/favorites", protect, getFavoriteBooks);

// General routes (dynamic routes)
router.get("/", protect, authorize("user", "admin"), getBooks);
router.post("/", protect, authorize("user"), createBook);

// Admin-only routes
router.get("/all", protect, authorize("admin"), getBooks);
router.delete("/:id", protect, authorize("admin"), deleteBook);

// Shared routes with appropriate protections
router.get("/:id", protect, getBook);
router.put("/:id", protect, authorize("user", "admin"), updateBook);
router.patch("/:id/markFavorite", protect, markFavorite);

export default router;
