import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUserByEmail,
  getUsers,
  updateUser,
  loginUsers,
} from "../controllers/users.controller.mjs";

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/email/:email", getUserByEmail);
usersRouter.get("/login", loginUsers);
usersRouter.get("/:id", getUser);
usersRouter.post("/", createUser);
usersRouter.put("/:id", updateUser);
usersRouter.delete("/:id", deleteUser);

export default usersRouter;
