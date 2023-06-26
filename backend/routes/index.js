const express = require('express');
const authController = require('../controller/authController')
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');
const userProfileController = require('../controller/userProfileController');
const adminController = require('../controller/adminController');
const categoryController = require('../controller/categoryController');
const applianceController = require('../controller/applianceController');
const categorySection = require('../controller/sectionController');

const router = express.Router();


router.get('/api/admin/logout', adminAuth ,authController.logout);
router.get('/api/logout', auth ,authController.logout);

// User Related Routes
router.post('/api/register', authController.register);
router.post('/api/login', authController.login);
router.get('/api/refresh', authController.refresh);
router.post('/api/user/profile',auth,userProfileController.getUserProfile);
router.post('/api/user/update-profile',auth,userProfileController.UpdateProfile);

// Admin Related Routes
router.get('/api/admin/register', adminController.register);
router.post('/api/admin/login', adminController.login);
router.get('/api/admin/refresh', adminController.refresh);
// Categories Related Routes
router.get('/api/admin/get-categories',categoryController.GetCategories);
router.post('/api/admin/create-category',adminAuth,categoryController.CreateCategory);
// Sections Related Routes
router.post('/api/admin/create-section',adminAuth,categorySection.CreateSection);
router.get('/api/admin/sections',categorySection.GetCategorySections);
// Section Item Related Routes
router.post('/api/admin/create-section-item',adminAuth,categorySection.CreateSectionItem);
router.post('/api/admin/section-items',adminAuth,categorySection.GetSectionItems);
 
 router.get('/api/get-appliances',applianceController.GetAppliance);

module.exports = router;