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
const helpController = require('../controller/admin/helpController');
const videoMediaController = require('../controller/videoMediaController');
const cartController = require('../controller/cartController');
const orderController = require('../controller/orderController');
const reviewController = require('../controller/reviewController');
const galleryController = require('../controller/galleryController');
const teamController = require('../controller/admin/teamController');
const uploader = require('express-fileupload');

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
// Blog Admin Api's
router.post('/api/admin/create-blog',adminAuth,blogController.createBlog);
router.post('/api/admin/delete-blog',adminAuth,blogController.DeleteBlog);
router.post('/api/admin/duplicate-blog',adminAuth,blogController.duplicateBlog);
router.post('/api/admin/search-blog',adminAuth,blogController.GetBlogBySearch);
router.post('/api/admin/update-blog',adminAuth,blogController.updateBlog);
// Team Member Admin Api's
router.post('/api/admin/create-team-member',adminAuth,teamController.createMember);
router.post('/api/admin/update-team-member',adminAuth,teamController.updateMember);
router.get('/api/get-team-member',teamController.getMembers);
router.post('/api/update-member-index',teamController.updateMembersPosition);

// Blog User Api's
router.get('/api/get-recent-blogs',blogController.GetRecentBlogs);
router.post('/api/get-blog-by-slug',blogController.GetBlogBySlug);
router.post('/api/get-blog-by-cateogry',blogController.GetBlogByCategory);

// Help & Support Admin Api's
router.post('/api/admin/create-help',adminAuth,helpController.createHelp);
router.post('/api/admin/update-help',adminAuth,helpController.updateHelp);
router.post('/api/admin/delete-help',adminAuth,helpController.deleteHelp);
router.post('/api/admin/search-help',adminAuth,helpController.getHelpBySearch);
router.post('/api/admin/get-help-by-category',adminAuth,helpController.getHelpByCategory);

// Loop Media Api's
router.post('/api/admin/upload-video-media',adminAuth,videoMediaController.uploadVideoMedia);
router.post('/api/admin/get-video-media',videoMediaController.getVideoMedia);
router.post('/api/admin/get-single-video-media',videoMediaController.getSingleVideoMedia);
// Gallery Api's
router.post('/api/admin/upload-gallery-image',adminAuth,galleryController.uploadGalleryImage);
router.get('/api/admin/get-gallery-image',galleryController.getGalleryImage);
router.get('/api/admin/delete-gallery-image',adminAuth,galleryController.deleteGalleryImage);


// User Cart Api's
router.post('/api/user/add-to-cart',auth,cartController.addToCart);
router.post('/api/user/get-cart',auth,cartController.getCart);
router.post('/api/user/update-cart',auth,cartController.updateCart);
router.post('/api/user/remove-cart-item',auth,cartController.removeFromCart);

// User Order Processing Api's
router.post('/api/user/save-order-address',auth,orderController.saveOrderAddress);

// Admin Reviews Api
router.post('/api/admin/create-review',auth,reviewController.createReview);
router.get('/api/get-google-reviews',reviewController.getGoogleReviews);

// Front-End Api's
router.post('/api/get-product-by-filter',applianceController.GetApplianceBySectionType);
router.post('/api/get-product-by-slug',applianceController.GetApplianceBySlug);
router.get('/api/get-appliances',applianceController.GetAppliances);
router.post('/api/appliance-sections',applianceController.GetApplianceSections);
// Get All Filters Information for Products Page
router.get('/api/get-appliances-filters',applianceController.GetAppliancesFilters);




module.exports = router;