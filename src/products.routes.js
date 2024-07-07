import { Router } from "express";

const router = Router();

// get products
export const getProducts = async (req, res) => {
  res.status(200).send("hello");
};

// get a product

export const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  res.send("got product with id: " + id);
};

// create an user

// update product

// delete by id

router.get("/products", getProducts);
router.get("/products/:id", getUserById);

export default router;
