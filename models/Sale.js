import mongoose from "mongoose"; // import mongoose

//  Sale schema
const saleSchema = new mongoose.Schema(
  {
    customer: { 
      type: mongoose.Schema.Types.ObjectId, // link to Customer
      ref: "Customer", // reference model
      required: true 
    },
    items: [
      {
        item: { 
          type: mongoose.Schema.Types.ObjectId, // link to Item
          ref: "Item", // reference model
          required: true 
        },
        quantity: { type: Number, required: true, min: 1 }, // item quantity
        price: { type: Number, required: true, min: 0 } // price per item
      }
    ],})

//  Create Sale model
const Sale = mongoose.model("Sale", saleSchema);

// Export model
export default Sale;