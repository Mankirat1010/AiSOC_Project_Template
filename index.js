const express = require("express");
const { connectToMongoDB } = require("./connect");
const cookieParser = require("cookie-parser");

const userRoutes = require('./server/routes/userRoutes');
const projectRoutes = require('./server/routes/projectRoutes');
const applicationRoutes = require('./server/routes/applicationRoutes');

const app = express();
const PORT = 5000; // Or any port you like

// Connect to MongoDB
connectToMongoDB("mongodb://127.0.0.1:27017/dic-project")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/applications', applicationRoutes);

app.get('/', (req, res) => {
    res.send('✅ DIC Backend is running...');
});

app.listen(PORT, () => {
    console.log(`🚀 Server started at http://localhost:${PORT}`);
});
