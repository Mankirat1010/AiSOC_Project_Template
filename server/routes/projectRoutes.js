const express = require('express');
const router = express.Router();
const { createProject } = require('../controllers/project'); // make sure this path is correct

router.post('/create', createProject);

module.exports = router;
