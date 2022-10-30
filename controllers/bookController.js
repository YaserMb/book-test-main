const Books = require('../models/bookModel');

exports.Books = async (req, res) => {
    let books = await Books.find();
    if (books.length > 0) {
        return res.json({ success: true, data: books, message: "Book data is avilable" });
    } else {
        return res.json({ success: false, data: books, message: "Book data is empty" });
    }
}

exports.createBooks = async (req, res) => {
    let data = req.body;
    let books = await new Books({ book_name: data.book_name, book_description: data.book_description, book_ifsc: data.book_ifsc, book_price: data.book_price, created_at: data.created_at });
    books = await books.save();
    if (Object.keys(books).length > 0) {
        return res.json({ success: true, data: books, message: "Book created successfully" });
    } else {
        return res.json({ success: false, data: books, message: "Oops somethinge went wronge" });
    }
}

exports.deleteBooks = async (req, res) => {
    let { id } = req.body;
    let deletedRecod = await Books.deleteOne({ _id: id });
    if (deletedRecod.acknowledged == true) {
        return res.json({ success: true, message: 'Book deleted successfully' });
    } else {
        return res.json({ success: false, message: "Oops somethinge went wronge" });
    }
}