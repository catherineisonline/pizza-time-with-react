import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
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

usersRouter.get("/:id", getUser);

usersRouter.post("/", limiter, createUser);

usersRouter.put("/:id", updateUser);

usersRouter.delete("/:id", deleteUser);

export default usersRouter;
