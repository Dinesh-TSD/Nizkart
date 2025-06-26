// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; 
import connectDB from "./db/connectDB.js"
import productRoutes from './routes/productRoutes.js';
  
// Load .env config
dotenv.config();  
 
// Debug: Log MONGO_URL
console.log("MONGO_URL from .env is:", process.env.MONGO_URL); // ✅ Keep this for testing

// Initialize express app 
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);

// Connect DB and start server
 // ✅ This should use MONGO_URL from .env

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    connectDB();
    })
