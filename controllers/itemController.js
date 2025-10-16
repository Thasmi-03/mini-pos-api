// controllers/itemController.js
import Item from "../models/Item.js"; // import model

// Get item by ID
export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id); // find by ID
    if (!item) return res.status(404).json({ message: "Not Found" }); // check
    res.status(200).json(item); // send data
  } catch (error) {
    if (error.name === "CastError")
      return res.status(400).json({ message: "Invalid ID" }); // invalid ID
    res.status(500).json({ message: error.message });
  }
};



//  Get all items
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find(); // get all items
    res.status(200).json(items); // send data
  } catch (error) {
    res.status(500).json({ message: error.message }); // error
  }
};



//  Create new item
export const createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body); // create new item
    const saved = await newItem.save(); // save to DB
    res.status(201).json({ message: "Created", item: saved }); // response
  } catch (error) {
    res.status(500).json({ message: error.message }); // error
  }
};
