const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: Schema.ObjectId,
        ref: 'Author',
        required: true
    },
    isbn: {
        type: String,
        required: true
    },
    url :{
        type: String,
        required: true
    },
    
   
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;