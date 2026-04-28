import path from "path";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
dotenv.config();
import connectDB from "./config/db.js";
import packageRoute from "./routes/packageRoute.js";
import adminRoutes from './routes/adminRoutes.js'
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();
await connectDB();

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

app.use("/api/admin", adminRoutes);
app.use("/api/packages", packageRoute);
// app.use("/api/enquiry", enquiryRoutes);

//ROUTES

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running on server localhost:${PORT}`);
});
