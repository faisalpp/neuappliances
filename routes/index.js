const express = require('express');
const authController = require('../controller/authController')
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');
const userProfileController = require('../controller/userProfileController');
const adminController = require('../controller/adminController');
const productController = require('../controller/productController');
const categoryController = require('../controller/categoryController');
const applianceController = require('../controller/applianceController');
const categorySection = require('../controller/sectionController');
const faqController = require('../controller/faqController');
const uploadController = require('../controller/uploadController');
const blogController = require('../controller/blogController');
const loopController = require('../controller/loopController');
const cartController = require('../controller/cartController');
const uploader = require('express-fileupload');

const app = express();
const router = express.Router();

router.use(uploader())
router.get('/api/admin/logout', adminAuth ,authController.logout);
router.get('/api/logout', auth,authController.logout);

// User Related Routes
router.post('/api/register', authController.register);
router.post('/api/login', authController.login);
router.get('/api/user/refresh', authController.refresh);
router.post('/api/user/get-profile',auth,userProfileController.getUserProfile);
router.post('/api/user/update-profile',auth,userProfileController.UpdateProfile);

// Admin Related Routes
router.get('/api/admin/register', adminController.register);
router.post('/api/admin/login', adminController.login);
router.get('/api/admin/logout', adminController.logout);
router.get('/api/admin/refresh', adminController.refresh);
router.post('/api/admin/change-password', adminAuth,adminController.changePassword);
// Categories Related Routes
router.get('/api/admin/get-categories',adminAuth,categoryController.GetCategories);
router.post('/api/admin/category-by-id',adminAuth,categoryController.GetCategoryById);
router.post('/api/admin/create-category',adminAuth,categoryController.CreateCategory);
router.post('/api/admin/update-category',adminAuth,categoryController.UpdateCategory);
// Sections Related Routes
router.post('/api/admin/create-section',adminAuth,categorySection.CreateSection);
router.post('/api/admin/update-section',adminAuth,categorySection.UpdateSection);
router.post('/api/admin/section-by-id',adminAuth,categorySection.GetCategorySectionById);
router.post('/api/admin/sections',adminAuth,categorySection.GetCategorySections);
// Section Item Related Routes
router.post('/api/admin/create-section-item',adminAuth,categorySection.CreateSectionItem);
router.post('/api/admin/update-section-item',adminAuth,categorySection.UpdateSectionItem);
router.post('/api/admin/section-item-by-id',adminAuth,categorySection.GetSectionItemById);
router.post('/api/admin/section-items',adminAuth,categorySection.GetSectionItems);
// Product Api's
router.post('/api/admin/create-product',adminAuth,productController.CreateProduct);
router.get('/api/admin/get-products',adminAuth,productController.GetProducts);
router.post('/api/admin/get-product-types',adminAuth,productController.GetProductTypes);
router.post('/api/admin/get-product-features',adminAuth,productController.GetProductFeatures);
router.post('/api/admin/get-category-brands',adminAuth,productController.GetCategoryBrands);
router.post('/api/admin/get-category-colors',adminAuth,productController.GetCategoryColors);
// Faq Tab's Api's
router.post('/api/admin/create-faq-tab',adminAuth,faqController.createFaqTab);
router.get('/api/admin/get-faq-tab',faqController.getFaqTab);
router.post('/api/admin/update-faq-tab',adminAuth,faqController.updateFaqTab);
// Faq's Api's
router.post('/api/admin/create-faq',adminAuth,faqController.createFaq);
router.post('/api/admin/get-faqs',faqController.getFaqs);
router.post('/api/admin/update-faq',faqController.updateFaq);
router.post('/api/admin/delete-faq',faqController.deleteFaq);

// Asset Uploading Api's
router.post('/api/admin/image-upload',adminAuth,uploadController.uploadImage);
router.post('/api/admin/get-uploaded-media',adminAuth,uploadController.getMedia);
router.post('/api/admin/delete-media',adminAuth,uploadController.deleteMedia);
// Blog Api's
router.post('/api/admin/create-blog',adminAuth,blogController.createBlog);
// Loop Media Api's
router.post('/api/admin/upload-loop-media',adminAuth,loopController.uploadLoopMedia);
router.get('/api/admin/get-loop-media',loopController.getLoopMedia);

// User Cart Api's
router.post('/api/user/add-to-cart',auth,cartController.addToCart);
router.post('/api/user/get-cart',auth,cartController.getCart);
router.post('/api/user/update-cart',auth,cartController.updateCart);
router.post('/api/user/remove-cart-item',auth,cartController.removeFromCart);

// Front-End Api's
router.post('/api/get-product-by-filter',applianceController.GetApplianceBySectionType);
router.post('/api/get-product-by-slug',applianceController.GetApplianceBySlug);
router.get('/api/get-appliances',applianceController.GetAppliances);
router.post('/api/appliance-sections',applianceController.GetApplianceSections);

module.exports = router;