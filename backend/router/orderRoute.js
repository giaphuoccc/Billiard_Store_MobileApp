const express = require("express");
const Order = require('../model/order');

const app = express();
//create order
app.post('/createOrder', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

//get all orders
app.get('/orders', async (req, res) => {
    try {
      const orders = await Order.find();
      res.status(200).json({message: "get all orders success", orders: orders});
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

//get order by id
app.get('/orders:orderId', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

  module.exports = app;