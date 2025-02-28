import { Router } from "express";
import usersRouter from "./users.route.mjs";
import captchaRouter from "./captcha.route.mjs";
import shortenerRouter from "./shortener.route.mjs";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("Server Deployed 🥳");
});
indexRouter.use("/users", usersRouter);

indexRouter.use("/verify-recaptcha", captchaRouter);

indexRouter.use("/shortener", shortenerRouter);

export default indexRouter;
