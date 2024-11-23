import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv";
import cors from "cors"

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
const DB = process.env.DATABASE_LOCAL ?? 'mongodb://127.0.0.1:27017/cscp-db';

app.use(express.json({limit: '10mb'}));
app.use(cors())

mongoose
  .connect(DB)
  .then(() => console.log("DB connection successful!"))
  .catch((err) => console.log(err));


app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
});

app.use("/books",  bookRoutes);

