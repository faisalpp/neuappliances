const express = require('express');
const authController = require('../controller/authController')
const auth = require('../middleware/auth')

const router = express.Router();


router.post('/api/register', authController.register);
router.post('/api/login', authController.login);
router.post('/api/logout', auth ,authController.logout);

module.exports = router;