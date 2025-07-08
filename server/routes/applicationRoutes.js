const express = require('express');
const router = express.Router();
const { createApplication } = require('../controllers/application');  // Adjust path if needed

// POST route to create a new application
router.post('/create', createApplication);

module.exports = router;
