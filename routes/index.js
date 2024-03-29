const express = require('express');
const forgotPasswordController = require('../controller/forgotPasswordController')
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
const helpController = require('../controller/admin/Help&Support/helpController');
const helpTabController = require('../controller/admin/Help&Support/helpTabController');
const tipsController = require('../controller/admin/appTipsController');
const videoMediaController = require('../controller/videoMediaController');
const cartController = require('../controller/cartController');
const orderController = require('../controller/orderController');
const customerController = require('../controller/customerController');
const reviewController = require('../controller/reviewController');
const zipController = require('../controller/zipController');
const galleryController = require('../controller/galleryController');
const teamController = require('../controller/admin/teamController');
const uploader = require('express-fileupload');
const favoriteController = require('../controller/favoriteController');
const newsLetterController = require('../controller/newsLetterController');
const adminCartController = require('../controller/adminCart');
const refundController = require('../controller/refundController');
const dashboardController = require('../controller/dashboardController');
const couponController = require('../controller/couponController');

const router = express.Router();

router.use(uploader())
router.get('/api/admin/logout',authController.logout);
router.get('/api/logout',authController.logout);

// User Related Routes
router.post('/api/register', authController.register);
router.post('/api/login', authController.login);
router.post('/api/user/forgot-password',forgotPasswordController.createPasswordToken);
router.post('/api/user/reset-password',forgotPasswordController.resetPassword);
router.post('/api/user/validate-reset-password-token',forgotPasswordController.validatePasswordToken);

router.get('/api/user/refresh', authController.refresh);
router.post('/api/user/get-profile',auth,userProfileController.getUserProfile);
router.post('/api/user/update-profile',auth,userProfileController.UpdateProfile);
router.post('/api/user/get-shipping-addresses',auth,userProfileController.getShippingAddresses);
router.post('/api/user/get-shipping-addr-by-id',auth,userProfileController.getShippingAddrById);
router.post('/api/user/create-shipping-address',auth,userProfileController.createShippingAddresses);
router.post('/api/user/update-shipping-address',auth,userProfileController.updateShippingAddresses);
router.post('/api/user/delete-shipping-address',auth,userProfileController.deleteShippingAddresses);
router.post('/api/user/get-billing-address',auth,userProfileController.getBillingAddresses);
router.post('/api/user/update-billing-address',auth,userProfileController.updateBillingAddresses);
router.post('/api/user/change-password',auth,userProfileController.changePassword);
router.post('/api/user/get-prefrences',auth,userProfileController.getPreferences);
router.post('/api/user/change-prefrences',auth,userProfileController.updateNewsLetter);

// Admin Related Routes
router.get('/api/admin/register', adminController.register);
router.post('/api/admin/login', adminController.login);
router.get('/api/admin/logout',adminAuth, adminController.logout);
router.get('/api/admin/refresh', adminController.refresh);
router.post('/api/admin/change-password', adminAuth,adminController.changePassword);
// Categories Related Routes
router.get('/api/admin/get-all-categories',categoryController.GetAllCategories);
router.get('/api/admin/get-categories',categoryController.GetCategories);
router.post('/api/admin/get-blog-with-categories',adminAuth,categoryController.GetBlogBySlugWithCategories);
router.post('/api/admin/category-by-id',adminAuth,categoryController.GetCategoryById);
router.post('/api/admin/create-category',adminAuth,categoryController.CreateCategory);
router.post('/api/admin/update-category',adminAuth,categoryController.UpdateCategory);
router.post('/api/admin/delete-category',adminAuth,categoryController.DeleteCategory);
router.post('/api/admin/update-categories-index',adminAuth,categoryController.updateCategoriesPosition);
// Sections Related Routes
router.post('/api/admin/create-section',adminAuth,categorySection.CreateSection);
router.post('/api/admin/update-section',adminAuth,categorySection.UpdateSection);
router.post('/api/admin/update-section-index',adminAuth,categorySection.UpdateSectionsIndex);
router.post('/api/admin/delete-section',adminAuth,categorySection.DeleteSection);
router.post('/api/admin/section-by-id',adminAuth,categorySection.GetCategorySectionById);
router.post('/api/admin/sections',adminAuth,categorySection.GetCategorySections);
// Section Item Related Routes
router.post('/api/admin/create-section-item',adminAuth,categorySection.CreateSectionItem);
router.post('/api/admin/update-section-item',adminAuth,categorySection.UpdateSectionItem);
router.post('/api/admin/update-section-item-index',adminAuth,categorySection.UpdateSectionItems);
router.post('/api/admin/delete-section-item',adminAuth,categorySection.DeleteSectionItem);
router.post('/api/admin/section-item-by-id',adminAuth,categorySection.GetSectionItemById);
router.post('/api/admin/section-items',adminAuth,categorySection.GetSectionItems);
// Product Api's
router.post('/api/admin/create-product',adminAuth,productController.CreateProduct);
router.post('/api/admin/update-product',adminAuth,productController.UpdateProduct);
router.post('/api/admin/delete-product',adminAuth,productController.DeleteProduct);
router.post('/api/admin/duplicate-product',adminAuth,productController.DuplicateProduct);
router.post('/api/admin/get-products',adminAuth,productController.GetProducts);
router.post('/api/admin/get-category-data',adminAuth,productController.GetCategoryData);
router.post('/api/admin/get-model-nos',adminAuth,productController.GetParentModelNumbers);
router.post('/api/admin/get-all-model-nos',adminAuth,productController.GetAllModelNumbers);
router.post('/api/admin/get-washer-or-dryer',adminAuth,productController.GetLaundaryProducts);
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
router.post('/api/admin/upload-media',adminAuth,uploadController.uploadImage);
router.post('/api/admin/delete-media',adminAuth,uploadController.deleteMedia);
router.post('/api/user/upload-media',uploadController.uploadUserMedia);
router.post('/api/user/delete-media',uploadController.deleteUserMedia);
// Blog Admin Api's
router.post('/api/admin/create-blog',adminAuth,blogController.createBlog);
router.post('/api/admin/delete-blog',adminAuth,blogController.DeleteBlog);
router.post('/api/admin/duplicate-blog',adminAuth,blogController.duplicateBlog);
router.post('/api/admin/search-blog',adminAuth,blogController.GetBlogBySearch);
router.post('/api/admin/update-blog',adminAuth,blogController.updateBlog);
// Team Member Admin Api's
router.post('/api/admin/create-team-member',adminAuth,teamController.createMember);
router.post('/api/admin/update-team-member',adminAuth,teamController.updateMember);
router.post('/api/admin/delete-team-member',adminAuth,teamController.deleteMember);
router.get('/api/get-team-member',teamController.getMembers);
router.post('/api/update-member-index',teamController.updateMembersPosition);

// Blog User Api's
router.get('/api/get-recent-blogs',blogController.GetRecentBlogs);
router.post('/api/get-blog-by-slug',blogController.GetBlogBySlug);
router.post('/api/get-blog-by-cateogry',blogController.GetBlogByCategory);

// Help & Support Admin Api's
 router.post('/api/admin/create-help',adminAuth,helpController.createHelp);
 router.post('/api/admin/update-help',adminAuth,helpController.updateHelp);
 router.post('/api/admin/duplicate-help',adminAuth,helpController.duplicateHelp);
 router.post('/api/admin/delete-help',adminAuth,helpController.deleteHelp);
 router.post('/api/admin/search-help',adminAuth,helpController.getHelpBySearch);
 router.post('/api/search-help',helpController.getHelpBySearch);
 router.post('/api/get-help-by-category',helpController.getHelpByCategory);
 router.post('/api/get-help-by-slug',helpController.getHelpBySlug);
// Help & Support Tab Admin Api's
 router.post('/api/admin/create-help-tab',adminAuth,helpTabController.createHelpTab);
 router.post('/api/admin/update-help-tab',adminAuth,helpTabController.updateHelpTab);
 router.get('/api/get-help-tab',helpTabController.getHelpTabs);
 // Appliance Tips Admin Api's
 router.post('/api/admin/create-tip',adminAuth,tipsController.createTip);
 router.post('/api/admin/update-tip',adminAuth,tipsController.updateTip);
 router.post('/api/admin/duplicate-tip',adminAuth,tipsController.duplicateTip);
 router.post('/api/admin/delete-tip',adminAuth,tipsController.deleteTip);
 router.post('/api/admin/search-tip',tipsController.getTipBySearch);
 router.post('/api/get-tip-by-category',tipsController.getTipByCategory);
 router.post('/api/get-tip-by-slug',tipsController.getTipBySlug);
 router.get('/api/get-four-tips',tipsController.getFourTips);
 router.post('/api/get-tip-by-slug-with-cateogries',tipsController.GetTipBySlugWithCategories);

// Loop Media Api's
router.post('/api/admin/upload-video-media',adminAuth,videoMediaController.uploadVideoMedia);
router.post('/api/admin/delete-video-media',adminAuth,videoMediaController.deleteVideoMedia);
router.post('/api/admin/get-video-media',videoMediaController.getVideoMedia);
router.post('/api/admin/get-single-video-media',videoMediaController.getSingleVideoMedia);
// Admin Gallery Api's
router.post('/api/admin/upload-gallery-image',adminAuth,galleryController.uploadGalleryImage);
router.get('/api/admin/get-gallery-image',galleryController.getGalleryImage);
router.post('/api/admin/delete-gallery-image',adminAuth,galleryController.deleteGalleryImage);

// Admin Reviews Api
router.post('/api/admin/create-review',adminAuth,reviewController.createReview);
router.post('/api/admin/update-review',adminAuth,reviewController.updateReview);
router.post('/api/admin/delete-review',adminAuth,reviewController.deleteReview);
router.post('/api/admin/duplicate-review',adminAuth,reviewController.duplicateReview);
router.post('/api/admin/get-reviews',reviewController.getReviews);
router.post('/api/get-reviews',reviewController.getUserReviews);
router.get('/api/get-google-reviews',reviewController.getGoogleReviews);
router.get('/api/get-yelp-reviews',reviewController.getYelpReviews);

// Shipping Api's
router.get('/api/get-zip-cords',zipController.getZipCords);
router.get('/api/get-single-zip-cords',zipController.getSingleZipCords);
router.get('/api/admin/get-all-zip-cords',zipController.getAllZipCords);
router.post('/api/admin/create-zip-cords',adminAuth,zipController.createZipCords);
router.get('/api/admin/delete-zip-cords',adminAuth,zipController.deleteZipCords);
router.post('/api/admin/update-zip-cords',adminAuth,zipController.updateZipCords);
router.post('/api/check-zip',zipController.checkZip);
router.post('/api/user/get-zip-with-slots',zipController.getZipSlots);
router.get('/api/user/get-zip-meta',zipController.getCheckoutMetaData);

// User Cart Api's
router.post('/api/user/add-to-cart',cartController.addToCart);
router.post('/api/user/remove-cart-item',cartController.removeFromCart);
router.post('/api/user/update-cart',cartController.updateCart);
router.post('/api/user/change-cart-item-type',cartController.changeCartProductType);
router.post('/api/user/change-time-slot',cartController.updateDeliveryTimeSlot);
router.post('/api/user/change-pickup-location',cartController.updatePickupLocation);
router.post('/api/user/change-delivery-info',cartController.updateDeliveryInfo);
router.post('/api/user/change-cart-finance',cartController.updateCartFinance);
router.post('/api/user/get-cart',cartController.getCart);
router.post('/api/user/apply-coupon',couponController.applyCoupon);
router.post('/api/user/remove-coupon',couponController.removeCoupon);
router.post('/api/admin/check-coupon',adminAuth,couponController.CheckCoupon);
// Usr Favorite
router.post('/api/user/add-favorite',favoriteController.AddToFavorite);
router.post('/api/user/get-favorite',favoriteController.GetFavorites);
router.post('/api/user/remove-favorite',favoriteController.RemoveFromFavorite);
router.post('/api/user/check-favorite',favoriteController.CheckFavorite);

// News Letter Subscribtion
router.post('/api/newsletter-subscribe',newsLetterController.SubscribeToNewLetter);
// Refund Form Api's
router.post('/api/refund-request',refundController.refundRequest);
router.get('/api/get-refund-requests',adminAuth,refundController.getRefundRequests);
router.post('/api/update-refund-request',adminAuth,refundController.updateRefund);
router.post('/api/delete-refund-request',adminAuth,refundController.deleteRefund);
router.post('/api/search-refund-request',adminAuth,refundController.searchRefund);



// Admin Order Api's
router.post('/api/admin/create-order',adminAuth,orderController.creatAdminOrder);
router.post('/api/admin/get-orders',adminAuth,orderController.getOrders);
router.post('/api/admin/search-order',adminAuth,orderController.searchOrder);
router.post('/api/admin/search-order-by-title-model',adminAuth,orderController.searchOrderByTitleOrModel);
router.post('/api/admin/update-order-status',adminAuth,orderController.updateOrderStatus);
router.post('/api/admin/update-order-addresses',adminAuth,orderController.updateOrderAddresses);
router.post('/api/admin/get-customers',adminAuth,customerController.getAllCustomers);
router.post('/api/admin/get-order-by-id',adminAuth,orderController.getOrderById);
router.post('/api/admin/archive-order-by-id',adminAuth,orderController.archiveOrderById);
router.post('/api/admin/unarchive-order-by-id',adminAuth,orderController.unArchiveOrderById);
router.post('/api/admin/search-customer-email',adminAuth,customerController.searchCustomerWithEmail);
// Admin Cart Api's
router.post('/api/admin/add-to-cart',adminAuth,adminCartController.addToCart);
router.post('/api/admin/increment-cart',adminAuth,adminCartController.incCart);
router.post('/api/admin/decrement-cart',adminAuth,adminCartController.decCart);
router.post('/api/admin/get-cart',adminAuth,adminCartController.getCart);
// Coupon Api's
router.get('/api/admin/get-coupons',adminAuth,couponController.getCoupons);
router.post('/api/admin/create-coupon',adminAuth,couponController.createCoupon);
router.post('/api/admin/delete-coupon',adminAuth,couponController.deleteCoupon);




// Admin Customer Api's


// User Order Processing Api's
router.post('/api/user/customer-billing-address',customerController.getCustomerBillingAddress);
router.post('/api/user/customer-shipping-address',customerController.getCustomerShippingAddress);
router.post('/api/user/process-order',orderController.processOrder);
router.post('/api/user/confirm-order',orderController.confirmOrder);
router.get('/api/test',orderController.test);

// Stripe Api's
router.get('/api/stripe/get-publish-key',orderController.getStripePublishableKey);
router.post('/api/stripe/create-checkout-session',orderController.createCheckoutSession);
router.post('/api/stripe/create-payment-intent',orderController.createPaymentIntent);


// Front-End Api's


router.post('/api/get-product-by-section',applianceController.GetApplianceBySectionType);
router.post('/api/get-product-by-filter',applianceController.GetApplianceByFilter);
router.post('/api/get-product-by-slug',applianceController.GetApplianceBySlug);
router.post('/api/admin/get-product-by-slug',adminAuth,applianceController.GetApplianceWithSlug);
router.post('/api/get-product-wiht-buying-options',applianceController.GetApplianceWithBuyingOptions);
router.post('/api/get-product-buying-options',applianceController.GetApplianceBuyingOptions);
router.get('/api/get-appliances',applianceController.GetAppliances);
router.get('/api/get-navbar-appliances',applianceController.GetNavbarAppliances);
router.post('/api/appliance-sections',applianceController.GetApplianceSections);
// Get All Filters Information for Products Page
router.get('/api/get-appliances-filters',applianceController.GetAppliancesFilters);
// Search Product
router.post('/api/search-appliance',applianceController.SearchAppliance);
// Home Page Rating Products
router.post('/api/slider-appliances',applianceController.GetSliderAppliances);
// Washer & Dryer Appliances api
router.post('/api/get-laundary-appliances',applianceController.GetLaundarySetAppliances);


router.get('/affirm',adminController.affirm)


// Admin Dashboard Data Api's
router.get('/admin/dashboard-data',adminAuth,dashboardController.GetDashboardData)


module.exports = router;