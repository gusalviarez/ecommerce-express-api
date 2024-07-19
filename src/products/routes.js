import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProducts,
  updateProduct,
} from "./controller.js";

const router = Router();

router.get("/products", getProducts);

router.get("/products/:id", getProductById);

router.delete("/products/:id", deleteProduct);

router.post("/products", createProduct);

router.patch("/products/:id", updateProduct);

export default router;
