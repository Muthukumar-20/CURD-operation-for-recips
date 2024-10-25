import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./Database/dbConfig.js";
import Rescipe from "./Router/Rescipe.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/rescipe", Rescipe);
connectDB();

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Api");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("server started");
});
