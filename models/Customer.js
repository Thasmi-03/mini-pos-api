// models/Customer.js
import mongoose from "mongoose"; // import mongoose

//  Customer data structure
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true }, // customer name
    email: { type: String, unique: true, lowercase: true, trim: true }, // email
    phone: { type: String, required: true, trim: true }, // phone number
    address: { type: String, default: "" }, // address (optional)
    notes: { type: String, default: "" }, // notes (optional)
    createdAt: { type: Date, default: Date.now }, // created date
  },
  { versionKey: false } // no __v field
);

//  Make model from schema
const Customer = mongoose.model("Customer", customerSchema);

//  Export model to use in controller
export default Customer;
