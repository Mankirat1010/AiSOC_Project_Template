const express = require('express');
const router = express.Router();
const { createProject, getAllProjects, getProjectById } = require('../controllers/project');

router.post('/create', createProject);
router.get('/', getAllProjects); 
router.get('/:id', getProjectById); 

module.exports = router;