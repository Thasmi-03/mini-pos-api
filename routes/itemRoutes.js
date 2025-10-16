// routes/itemRoutes.js
import express from "express";
import { getAllItems, getItemById, createItem } from "../controllers/itemController.js";

const router = express.Router(); // create router

//  Get all items
router.get("/", getAllItems);

//  Get item by ID
router.get("/:id", getItemById);

//  Create new item
router.post("/", createItem);

//  Export router
export default router;
