import { pool } from "../config/db.js";

export class CategoryModel {
  static async getAll() {
    const [rows] = await pool.query("SELECT * FROM categories")
    return rows
  }

  static async getByName({ name }) {
    const [rows] = await pool.query("SELECT * FROM categories WHERE name = ?", [name])
    return rows
  }

  static async create({ name }) {
    const [rows] = await pool.query(
      "INSERT INTO categories (name) VALUES (?)",
      [name]
    );
    return rows
  }

  static async delete({ name }) {
    const [rows] = await pool.query("DELETE FROM categories WHERE name = ?", [name]);
    return rows
  }

  static async update({ name, newName }) {
    const [result] = await pool.query(
      "UPDATE categories SET name = ? WHERE name = ?",
      [newName, name],
    );
    return result
  }
}

