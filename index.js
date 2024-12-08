import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";
import authRoutes from "./routes/authRoutes.js";  

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
const DB =
  process.env.DATABASE_URI ??
  "mongodb+srv://ephremhabtamu2013:ephrem2013@cluster0.dtuaz.mongodb.net/book-api?retryWrites=true&w=majority";

app.use(express.json({ limit: "10mb" }));
app.use(cors());

mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`
    <h1>Welcome to the Book API</h1>
    <p>This API allows you to manage a collection of books and explore recommendations. Below are the available routes:</p>
    <ul>
      <li><a href="/books">View all books (GET /books)</a></li>
      <li>Manage books with CRUD operations:</li>
      <ul>
        <li>GET /books - Retrieve all books</li>
        <li>POST /books - Add a new book</li>
        <li>GET /books/:id - Retrieve a specific book by ID</li>
        <li>PUT /books/:id - Update a book by ID</li>
        <li>DELETE /books/:id - Delete a book by ID</li>
      </ul>
      <li><a href="/books/recommendation">Get book recommendations (GET /books/recommendations)</a></li>
      <li>Mark books as favorite:</li>
      <ul>
        <li>PATCH /books/:id/favorite - Mark a book as favorite</li>
        <li><a href="/books/favorites">GET /books/favorites - View favorite books</a></li>
      </ul>
    </ul>
    <p>To use the API, send requests to the appropriate endpoints.</p>
  `);
});

app.use("/auth", authRoutes);
app.use("/books", bookRoutes);
