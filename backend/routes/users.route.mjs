import { Router } from "express";
import {
  authToken,
  authUser,
  createUser,
  deleteUser,
  getUser,
  getUsers,
  loginUser,
  logoutUser,
  updateUser,
} from "../controllers/users.controller.mjs";
import rateLimit from "express-rate-limit";
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  ipv6Subnet: 56,
});

const usersRouter = Router();

usersRouter.get("/", getUsers);
usersRouter.get("/auth", authToken, authUser);
usersRouter.post("/login", loginUser);
usersRouter.post("/logout", logoutUser);
usersRouter.put("/update", updateUser);
usersRouter.get("/:id", getUser);
usersRouter.post("/", limiter, createUser);
usersRouter.delete("/:id", deleteUser);

export default usersRouter;
