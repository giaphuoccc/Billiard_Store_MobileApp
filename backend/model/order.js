const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    orderId: {
        type: Number,
        require
    },
    customerName: {
        type: String,
        ref: "customer",
    },
    date: {
        type: Date,
        require: true
    },
    totalPrice: {
        type: Number,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    status: {
        type: Number,
        require: true
    }
})

const Order = mongoose.model('Order', userSchema);

module.exports = Order;