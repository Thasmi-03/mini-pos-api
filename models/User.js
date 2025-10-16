// models/User.js
import mongoose from "mongoose"; // import mongoose
import bcrypt from "bcryptjs"; // for password hashing

//  User schema
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, trim: true }, // username
    email: { type: String, required: true, unique: true, lowercase: true, trim: true }, // email
    password: { type: String, required: true }, // password (hashed)
    role: { type: String, enum: ["admin", "cashier"], default: "cashier" }, // user role
    createdAt: { type: Date, default: Date.now }, // account creation date
  },
  { versionKey: false } // remove __v
);
//  Create model
const User = mongoose.model("User", userSchema);

//  Export model
export default User;