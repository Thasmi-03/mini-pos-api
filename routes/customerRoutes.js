// routes/customerRoutes.js
import express from "express";
import {
  getAllCustomers,
  getCustomerById,
  createCustomer,
} from "../controllers/customerController.js";

const router = express.Router(); // create router

//  Get all customers
router.get("/", getAllCustomers);

//  Get  customer by ID
router.get("/:id", getCustomerById);

//  Create new customer
router.post("/", createCustomer);

//  Export router
export default router;
