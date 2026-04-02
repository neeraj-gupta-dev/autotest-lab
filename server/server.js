const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
    // Only allow traffic from verified deployments during production to prevent hijack/CSRF
    origin: process.env.NODE_ENV === 'production' 
        ? process.env.FRONTEND_URL 
        : ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true, // Required for secure cookie/token passing if scaling
}));
app.use(express.json()); // Parses incoming JSON requests

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/products', require('./routes/productRoutes'));

// Basic Route for testing
app.get('/api/status', (req, res) => {
    res.json({ message: 'AutoTest Lab API is running' });
});

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

// Server Startup
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
