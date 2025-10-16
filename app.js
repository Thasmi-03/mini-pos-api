import dotenv from "dotenv";

import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/userRoute.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log(" database is Connecting!"));
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};
connectDB();

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Express");
});

app.listen(PORT, () =>
  console.log(`Server is running in http://localhost:${PORT}`)
);
