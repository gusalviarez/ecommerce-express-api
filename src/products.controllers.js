import { pool } from "./db.js";

export const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    console.log("got the products");
    console.log(rows);
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [
      id,
    ]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM products WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO products (name, salary) VALUES (?, ?)",
      [name, salary],
    );
    res.status(201).json({ id: rows.insertId, name, salary });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salary } = req.body;

    const [result] = await pool.query(
      "UPDATE products SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
      [name, salary, id],
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Employee not found" });

    const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};
