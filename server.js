import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) return cachedDb;
  try {
    const client = await mongoose.connect(process.env.MONGODB_URI);
    cachedDb = client;
    return cachedDb;
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    throw err;
  }
}

// Test Route
app.get('/', (req, res) => {
  res.send({ status: "Backend is working!" });
});

// Example DB Route
app.get('/data', async (req, res) => {
  try {
    const db = await connectToDatabase();
    // Your DB operations here
    res.json({ data: "Sample data" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Export for Vercel
export default app;