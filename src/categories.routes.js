import { Router } from "express";
import {
  getCategories,
  getCategoryByName,
  createCategory,
  deleteCategory,
  updateCategory,
} from "./categories.controllers.js";

const router = Router();

router.get("/categories", getCategories);

router.get("/categories/:name", getCategoryByName);

router.post("/categories", createCategory);

router.delete("/categories/:name", deleteCategory);

router.patch("/categories/:name", updateCategory);

export default router;
