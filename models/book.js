import mongoose from "mongoose";

// Create a new schema for our book data with title, author, isbn, published year and isFavorite fields with validation
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title'],
        unique: true,
        trim: true,
        maxlength: [50, 'Title cannot be more than 50 characters']},
    author: {
        type: String,
        required: [true, 'Please provide an author'],
        trim: true,
        maxlength: [50, 'Author cannot be more than 50 characters']
    },
    isbn: {
        type: String,
        required: [true, 'Please provide an ISBN'],
        unique: true,
        trim: true,
        maxlength: [50, 'ISBN cannot be more than 50 characters']
    },
    publishedYear: {
        type: Number,
        required: [true, 'Please provide a published year'],
        trim: true,
        maxlength: [4, 'Published year cannot be more than 4 characters']
    },
    isFavorite: {
        type: Boolean,
        default: false
    }

});

// Create a model from the schema
const Book = mongoose.model('Book', bookSchema);
export default Book;
