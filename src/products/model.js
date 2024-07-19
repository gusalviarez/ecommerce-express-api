import pool from "../config/db.js";

async function getProducts() {
  try {
    const [rows] = await pool.query("SELECT * FROM products");
    return rows;
  } catch (error) {
    throw error; // Re-throw the error for handling in controller
  }
}

module.exports = {
  getProducts,
};
