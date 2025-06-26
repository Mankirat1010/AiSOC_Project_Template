const express = require('express');
const router = express.Router();
const projectController = require('../controllers/project');

router.post('/create', createProject);
router.post('/apply', applyToProject);

module.exports = router;