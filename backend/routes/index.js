const express = require('express');
const authController = require('../controller/authController')

const router = express.Router();


router.post('/api/register', authController.register);
router.post('/api/login', authController.login);

module.exports = router;