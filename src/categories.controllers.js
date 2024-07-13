import { pool } from "./db.js";

export const getCategories = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM categories");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getCategoryByName = async (req, res) => {
  try {
    const { name } = req.params;
    const [rows] = await pool.query("SELECT * FROM categories WHERE name = ?", [
      name,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "something when wrong" });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO categories (name) VALUES (?)",
      [name],
    );
    res.status(201).json({ id: rows.insertId, name });
  } catch (error) {
    return res.status(500).json({ message: "something when wrong" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { name } = req.params;
    const [rows] = await pool.query("DELETE FROM categories WHERE name = ?", [
      name,
    ]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { name } = req.params;
    const { newName } = req.body;

    const [result] = await pool.query(
      "UPDATE categories SET name = ? WHERE name = ?",
      [newName, name],
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    const [rows] = await pool.query("SELECT * FROM products WHERE name = ?", [
      newName,
    ]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
