import { CategoryModel } from "./model.js";

export const getCategories = async (req, res) => {
    const rows = await CategoryModel.getAll()
    res.json(rows);
};

export const getCategoryByName = async (req, res) => {
    const { name } = req.params;
    const rows = await CategoryModel.getByName({name}) 

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(rows[0]);
};

export const createCategory = async (req, res) => {
    const { name } = req.body;
    console.log(name)
    const rows = await CategoryModel.create({ name });
    console.log(rows)
    res.status(201).json({ id: rows.insertId, name });
};

export const deleteCategory = async (req, res) => {
    const { name } = req.params;
    const rows = await CategoryModel.delete({name}) 

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.sendStatus(204);
};

export const updateCategory = async (req, res) => {
    const { name } = req.params;
    const { newName } = req.body;

    const result = await CategoryModel.update({name, newName})

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    const rows = await CategoryModel.getByName({newName})
    res.json(rows[0]);
};
