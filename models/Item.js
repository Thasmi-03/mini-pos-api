// models/Item.js
import mongoose from "mongoose"; // import mongoose

//  Item schema (data structure)
const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true }, // item name
    sku: { type: String, unique: true, trim: true }, // unique SKU
    description: { type: String, default: "" }, // optional description
    price: { type: Number, required: true, min: 0 }, // price >= 0
    stock: { type: Number, default: 0 }, // stock quantity
    category: { type: String, default: "" }, // optional category
    createdAt: { type: Date, default: Date.now }, // creation date
  },
  { versionKey: false } // remove __v
);

//  Create model
const Item = mongoose.model("Item", itemSchema);

//  Export model
export default Item;
