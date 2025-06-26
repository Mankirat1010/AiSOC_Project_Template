const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./server/routes/userRoutes');
const projectRoutes = require('./server/routes/projectRouts');

const app = express();
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/projects', projectRoutes);

app.get('/', (req, res) => {
    res.send('DIC Backend is running...');
});

