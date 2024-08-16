const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    categoryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
    },
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    price: {
        type: String,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    }
})

const Product = mongoose.model('Product', userSchema);

module.exports = Product;