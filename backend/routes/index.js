const express = require('express');
const authController = require('../controller/authController')
const auth = require('../middleware/auth');
const userProfileController = require('../controller/userProfileController');

const router = express.Router();


router.post('/api/register', authController.register);
router.post('/api/login', authController.login);
router.get('/api/logout', auth ,authController.logout);

// User Account Routes
router.post('/api/user/profile',auth,userProfileController.getUserProfile);
router.post('/api/user/update-profile',auth,userProfileController.UpdateProfile);

module.exports = router;