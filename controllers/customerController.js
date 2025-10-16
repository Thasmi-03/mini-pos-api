// import Customer from "../models/Customer.js"

//  Get customer by ID
export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id); // find one
    if (!customer) return res.status(404).json({ message: "Not Found" });
    res.status(200).json(customer); // send customer data
  } catch (error) {
    if (error.name === "CastError")
      return res.status(400).json({ message: "Invalid ID" });
    res.status(500).json({ message: error.message });
  }
};

// Get all customers
export const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find(); // find all
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Create new customer
export const createCustomer = async (req, res) => {
  try {
    const newCustomer = new Customer(req.body); // make new customer
    const saved = await newCustomer.save(); // save in DB
    res.status(201).json({ message: "Created", customer: saved });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
