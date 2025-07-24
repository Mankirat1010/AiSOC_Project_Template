const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); 

const { createApplication, 
        getApplicationsByUserOrProject,
        updateApplicationStatus } = require('../controllers/application');

router.post('/create', upload.single('resume'), createApplication);
router.get('/', getApplicationsByUserOrProject);
router.patch('/:id/status', updateApplicationStatus);


module.exports = router;