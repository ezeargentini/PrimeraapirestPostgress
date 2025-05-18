import express from "express";
import {
  deleteUser,
  register,
  updateUser,
  user,
  users,
} from "../controllers/userController";

export const userRoutes = express.Router();

userRoutes.get("/", users);
userRoutes.get("/:id", user);
userRoutes.post("/register", register);
userRoutes.put("/:id", updateUser);
userRoutes.delete("/:id", deleteUser);
