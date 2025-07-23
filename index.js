const express = require("express");
const cors = require("cors"); // <-- add this
const { connectToMongoDB } = require("./connect");
const cookieParser = require("cookie-parser");

const userRoutes = require('./server/routes/userRoutes');
const projectRoutes = require('./server/routes/projectRoutes');
const applicationRoutes = require('./server/routes/applicationRoutes');

const app = express();
const PORT = 5000; // You can change this if you want

// Connect to MongoDB
connectToMongoDB("mongodb://127.0.0.1:27017/dic-project")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// Middleware
app.use(cors({
  origin: 'http://localhost:5173', // React frontend URL
  credentials: true,               // Allow sending/receiving cookies
}));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/applications', applicationRoutes);

// Health check endpoint
app.get('/', (req, res) => {
    res.send('✅ DIC Backend is running...');
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server started at http://localhost:${PORT}`);
});
