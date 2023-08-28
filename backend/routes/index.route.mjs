import { Router } from "express";
import usersRouter from "./users.route.mjs";
import captchaRouter from "./captcha.route.mjs";

const indexRouter = Router();


indexRouter.get('/', (req, res) => {
    res.send('Server Deployed 🥳');
})
indexRouter.use('/users', usersRouter);

indexRouter.use('/verify-recaptcha', captchaRouter);



export default indexRouter;