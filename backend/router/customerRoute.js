const express = require("express");
const Customers = require('../model/customer');

const app = express();

app.get('/customers', async (req, res) => {
    try {
      const customers = await Customers.find();
      res.status(200).json(customers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  module.exports = app;