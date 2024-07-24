import { tryCatch } from "../utils/middleware.js"
import { ProductModel } from "./model.js"

export const getProducts = tryCatch(async (req, res) => {
  const products = await ProductModel.getProducts()
  res.json(products)
});

export const getProductById = tryCatch( async (req, res) => {
  const { id } = req.params;
  const product = await ProductModel.getProductById({ id })
  // send error if product not found 
  res.json(product[0]);
});

export const deleteProduct = tryCatch( async (req, res) => {
  const { id } = req.params;
  const rows = await ProductModel.delete({ id })
  // send an error if the it wasnt deleted
  res.sendStatus(204);
});

export const createProduct = tryCatch( async (req, res) => {
  const { name, price } = req.body;
  const rows = await ProductModel.create({name, price})
  res.status(201).json({ id: rows.insertId, name, price });
});

export const updateProduct = tryCatch( async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const result = await ProductModel.update({ id,name,price })
  const rows = await ProductModel.getProductById({id})
  res.json(rows[0]);
});
