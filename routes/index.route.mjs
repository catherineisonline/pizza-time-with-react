import { Router } from "express";
import usersRouter from "./users.route.mjs";

const indexRouter = Router();


indexRouter.get('/', (req, res) => {
    res.send('Server Deployed 🥳');
})
indexRouter.use('/users', usersRouter);

export default indexRouter;