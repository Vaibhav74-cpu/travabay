import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
// import connectDB from "./config/db.js";

import cookieParser from "cookie-parser";
import tourPackages from "./data/packages.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.get("/", (req, res) => {
  res.send("api is running");
});

app.get("/api/packages", (req, res) => {
  res.json(tourPackages);
});

app.get("/api/package/:id", (req, res) => {
  const pkg = tourPackages.find((pkg) => pkg.id === req.params.id);
  res.json(pkg);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on server localhost:${PORT}`);
});
