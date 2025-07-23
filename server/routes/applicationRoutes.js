const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); 

const { createApplication, getApplicationsByUser } = require('../controllers/application');

router.post('/create', upload.single('resume'), createApplication);
router.get('/', getApplicationsByUser);

module.exports = router;