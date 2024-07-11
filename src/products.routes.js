import { Router } from "express";

const router = Router();

export const getProducts = async (req, res) => {
  res.status(200).send("hello");
};

export const getProductById = async (req, res) => {
  const id = parseInt(req.params.id);
  res.send("got product with id: " + id);
};

export const createProduct = async (req, res) => {
  try {
    const { name } = req.body;
    res.status(201).send(name);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  // NOTE: id to find user, name to update user

  return res.send("new name " + name);
};

export const deleteProduct = async (req, res) => {
  const id = parseInt(req.params.id);

  // NOTE: add db interaction

  // NOTE:  check if it find the user
  return res.sendStatus(204);
};

router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
