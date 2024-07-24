import { pool } from "../config/db.js";

export class ProductModel {
  static async getProducts() {
    const [rows] = await pool.query("SELECT * FROM products")
    return rows
  }

  static async getProductById({ id }) {
    const [rows] = await pool.query("SELECT * FROM products WHERE id = ?", [id])
    return rows
  }

  static async create({ name, price }) {
    const [rows] = await pool.query(
      "INSERT INTO products (name, price) VALUES (?, ?)",
      [name, price],
    );
    return rows
  }

  static async delete({ id }) {
    const [rows] = await pool.query("DELETE FROM products WHERE id = ?", [id]);
    return rows
  }

  static async update({ id, name, price }) {
    const [result] = await pool.query(
      "UPDATE products SET name = ?, price = ? WHERE id = ?",
      [name, price, id],
    );
    return result
  }
}

