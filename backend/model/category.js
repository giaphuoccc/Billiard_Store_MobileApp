const mongoose = require ('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
})

const Category = mongoose.model('Category', userSchema);

module.exports = Category;