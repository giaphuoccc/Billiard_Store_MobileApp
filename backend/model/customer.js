const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
    address: {
        type: String,
        require: true
    },
    gender: {
        type: Number,
        require: true
    },
})

const Customer = mongoose.model('Customer', userSchema);

module.exports = Customer;