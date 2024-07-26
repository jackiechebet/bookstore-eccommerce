const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    price: Number,
    stock: Number,
});

module.exports = mongoose.model('Book', bookSchema);