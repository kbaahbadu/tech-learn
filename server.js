// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');
require('dotenv').config();
const adminRoutes = require('./routes/admin');
const connectDB = require('./schema/db');
const PORT = process.env.PORT || 5000;
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100
});
app.use(limiter);


//Routes
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);

// Connect to MongoDB
connectDB();

// Start server
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));

// Import routes


