import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "./controller.js";

const router = Router();

router.get("/users", getUsers);

router.get("/users/:id", getUserById);

router.delete("/users/:id", deleteUser);

router.post("/users", createUser);

router.patch("/users/:id", updateUser);

export default router;
