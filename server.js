import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './Router/Router.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

try{
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("Connected to MongoDB");  
  app.get('/', (req, res) => {
  res.send({ status: "Connected to MongoDB" });
});
})
}catch (error) {
  console.error("Database connection error:", error);
}

// Test Route
app.use('/api',router)

// Example DB Route


// Export for Vercel
export default app;