import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Test Route
app.get('/api', (req, res) => {
  res.json({ status: "Backend is working!" });
});

// MongoDB Connection (Add your URI later)
import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB Error:", err));

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app; // For Vercel