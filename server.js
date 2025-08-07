import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Test Route
app.get('/', (req, res) => {
  res.send({ status: "Backend is working!" });
});

// MongoDB Connection (Add your URI later)

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;