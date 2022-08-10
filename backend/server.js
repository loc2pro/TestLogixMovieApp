dotenv.config();
import dotenv from "dotenv";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import movieRouter from "./routers/movieRouter.js";
import userRouter from "./routers/userRouter.js";

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/testapp", {
  useUnifiedTopology: true,
});
console.log("Connect mongoose success");

app.use("/api/users", userRouter);
app.use("/api/movies", movieRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(` Server at http://localhost:${port}`);
});
