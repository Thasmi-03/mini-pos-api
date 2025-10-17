import dotenv from "dotenv";

import express from "express";
import mongoose from "mongoose";



dotenv.config();

const app = express();
app.use(express.json());
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


app.get("/", (req, res) => {
  res.send("Express");
});

app.listen(PORT, () =>
  console.log(`Server is running in http://localhost:${PORT}`)
);
