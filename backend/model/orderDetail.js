const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order"
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        require: true
    },
    totalPrice: {
        type: String,
        require: true
    }
})

const OrderDetail = mongoose.model('OrderDetail', userSchema);

module.exports = OrderDetail;