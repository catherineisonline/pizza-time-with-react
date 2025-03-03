import express, { json } from "express";
import cors from "cors";
import indexRouter from "../routes/index.route.mjs";

const app = express();
const port = 3000;

app.use(cors());
app.use(json());

app.use("/", indexRouter);
app.use("*", (req, res) => {
  res.status(404).json({ success: false, message: "404 - Not Found!" });
});

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
