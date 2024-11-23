import Book from "../models/book";

const createBook = async (req, res) => {
  const book = req.body;
  const newBook = new Book(book);

  try {
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getBook = async (req, res) => {
  const { id } = req.params;

  try {
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const updateBook = async (req, res) => {
  const { id: _id } = req.params;
  const book = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No book with that id");

  const updatedBook = await Book.findByIdAndUpdate(
    _id,
    { ...book, _id },
    { new: true }
  );

  res.json(updatedBook);
};

const getRecommendation = async (req, res) => {
  try {
    const books = await Book.find();
    if (books.length === 0)
      return res.status(404).json({ message: "No books available" });
    const randomBook = books[Math.floor(Math.random() * books.length)];
    res.status(200).json(randomBook);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recommendations", error });
  }
};

// mark a book as favorite
const markFavorite = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No book with that id");
  const book = await Book.findById(id);
  const updatedBook = await Book.findByIdAndUpdate(
    id,
    { isFavorite: !book.isFavorite },
    { new: true }
  );
  res.json(updatedBook);
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No book with that id");

  await Book.findByIdAndRemove(id);

  res.json({ message: "Book deleted successfully" });
};

export {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
  getRecommendation,
  markFavorite,
};
