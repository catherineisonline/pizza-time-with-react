import express, { json } from "express";
import cors from "cors";
import indexRouter from "../routes/index.route.mjs";
import cookieParser from "cookie-parser";

const app = express();
app.set("trust proxy", 1);

const port = 3000;
const allowedOrigins =
  process.env.NODE_ENV === "production" ? ["https://pizza-time-with-react.vercel.app/"] : ["http://localhost:5173"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(json());
app.use(cookieParser());
app.use("/", indexRouter);
app.use("*", (_, res) => {
  res.status(404).json({ success: false, message: "404 - Not Found!" });
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
