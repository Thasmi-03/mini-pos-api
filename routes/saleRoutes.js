import express from "express";
import {
  createSale,
  getAllSales,
  getSaleById,
  updateSale,
  deleteSale,
} from "../controllers/salesController.js";

const router = express.Router();

// Routes for Sales
router.post("/", createSale);       // Create  new sale
router.get("/", getAllSales);      // Get all sales
router.get("/:id", getSaleById);   // Get  single sale by ID
router.put("/:id", updateSale);    // Update  sale
router.delete("/:id", deleteSale); // Delete  sale

export default router;
