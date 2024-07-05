import { Router } from "express";

const router = Router();

export const getProducts = async (req, res) => {
  res.status(200).send("hello");
};

router.get("/products", getProducts);

export default router;
