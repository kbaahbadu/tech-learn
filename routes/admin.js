const express = require('express');
const router = express.Router();
const { createCourse } = require('../controllers/adminController');
const { authenticateToken } = require('../middleware/auth');

router.post('/courses', authenticateToken, createCourse);

module.exports = router;
