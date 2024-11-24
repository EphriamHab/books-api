import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoutes from "./routes/bookRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
const DB =
  process.env.MONGO_URI ??
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

app.use("/books", bookRoutes);
