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
  process.env.DATABASE_URI

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
    <p>This API allows you to manage a collection of books, explore recommendations, and perform CRUD operations based on authentication and roles.</p>
    <ul>
      <li>Manage books with CRUD operations:</li>
      <ul>
        <li>GET /books/all - Retrieve all books (Admin only)</li>
        <li>POST /books - Add a new book (User only)</li>
        <li>GET /books/:id - Retrieve a specific book by ID (User only)</li>
        <li>PUT /books/:id - Update a book by ID</li>
        <li>DELETE /books/:id - Delete a book by ID (Admin only)</li>
      </ul>
      <li><a href="/books/recommendation">Get book recommendations (GET /books/recommendations)</a></li>
      <li>Mark books as favorite:</li>
      <ul>
        <li>PATCH /books/:id/markFavorite - Mark a book as favorite (User only)</li>
        <li><a href="/books/favorites">GET /books/favorites - View favorite books (User only)</a></li>
      </ul>
      <li>Sign Up (POST /auth/signup)</li>
      <li>Login (POST /auth/login)</li>
    </ul>
    <p>To use the API, authenticate with the login credentials and perform authorized actions based on your role (user/admin).</p>
  `);
});

app.use("/auth", authRoutes);
app.use("/books", bookRoutes);
