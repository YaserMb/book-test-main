const mongoose = require('mongoose');
const BooksSchema = new mongoose.Schema({
    book_name: String,
    book_description: String,
    book_ifsc: String,
    book_price: String,
    created_at: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;