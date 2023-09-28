import {lazy,Suspense} from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";

import Home from "./pages/Home"
const Landing = lazy(() => import('./pages/Landing'));
const Register = lazy(() => import('./pages/Register'));
const Products = lazy(() => import('./pages/Products'));
const Product = lazy(() => import('./pages/Product'));
const Login = lazy(() => import('./pages/Login'));
const AdminLogin = lazy(() => import('./pages/Admin/login'));
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'));
const Appliances = lazy(() => import('./pages/Appliances'));
const ApplianceTypes = lazy(() => import('./pages/ApplianceTypes'));
const GeneralFaqs = lazy(() => import('./pages/GeneralFaqs'));
const OurStory = lazy(() => import('./pages/OurStory'));
const OurShowroom = lazy(() => import('./pages/OurShowroom'));
const OurCompanies = lazy(() => import('./pages/OurCompanies'));
const ApplianceRepair = lazy(() => import('./pages/ApplianceRepair'));
const MeasuringGuide = lazy(() => import('./pages/MeasuringGuide'));
const HelpfulApliancesTips = lazy(() => import('./pages/HelpfulApliancesTips'));
const AppliancesTipsDetail = lazy(() => import('./pages/AppliancesTipsDetail'));
const MobileMyAccount = lazy(() => import('./pages/MyAccount/MobileMyAccount'));
const Profile = lazy(() => import('./pages/MyAccount/Profile'));
const OrderHistory = lazy(() => import('./pages/MyAccount/OrderHistory'));
const MyFavourite = lazy(() => import('./pages/MyAccount/MyFavourite'));
const SavedAddress = lazy(() => import('./pages/MyAccount/SavedAddress'));
const BillingInformation = lazy(() => import('./pages/MyAccount/BillingInformation'));
const ChangePassword = lazy(() => import('./pages/MyAccount/ChangePassword'));
const EmailPreferences = lazy(() => import('./pages/MyAccount/EmailPreferences'));
const Blogs = lazy(() => import('./pages/Blogs/Index'));
const BlogArticle = lazy(() => import('./pages/Blogs/BlogArticle'));
const Financing = lazy(() => import('./pages/Financing'));
const MyCart = lazy(() => import('./pages/Cart/MyCart'));
const HelpAndSupport = lazy(() => import('./pages/HelpAndSupport/HelpAndSupport'));
const HelpCardPage = lazy(() => import('./pages/HelpAndSupport/HelpCardPage'));
const Test = lazy(() => import('./pages/Test'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Dashboard = lazy(() => import('./pages/AdminAccount/Dashboard'));
const ManageProducts = lazy(() => import('./pages/AdminAccount/ManageProducts'));
const ManageCategories = lazy(() => import('./pages/AdminAccount/ManageCategories'));
const StayInLoop = lazy(() => import('./pages/StayInLoop'));
const CreateCategory = lazy(() => import('./pages/AdminAccount/CreateCategory'));
const CreateProduct = lazy(() => import('./pages/AdminAccount/CreateProduct'));
const ManageSections = lazy(() => import('./pages/AdminAccount/ManageSections'));
const CreateSection = lazy(() => import('./pages/AdminAccount/CreateSection'));
const CheckoutInformation = lazy(() => import('./pages/Checkout/Information'));
const CheckoutShipping = lazy(() => import('./pages/Checkout/Shipping'));
const CheckoutPayment = lazy(() => import('./pages/Checkout/Payment'));
const ManageSectionItems = lazy(() => import('./pages/AdminAccount/ManageSectionItems'));
const ManageFaq = lazy(() => import('./pages/AdminAccount/ManageFaq'));
const UpdateSection = lazy(() => import('./pages/AdminAccount/UpdateSection'));
const UpdateCategory = lazy(() => import('./pages/AdminAccount/UpdateCategory'));
const UpdateSectionItem = lazy(() => import('./pages/AdminAccount/UpdateSectionItem'));
const WhatWeSell = lazy(() => import('./components/HowItworks/WhatWeSell'));
const Ratings = lazy(() => import('./components/HowItworks/Ratings'));
const Tested = lazy(() => import('./components/HowItworks/Tested'));
const Photos = lazy(() => import('./components/HowItworks/Photos'));
const Delivered = lazy(() => import('./components/HowItworks/Delivered'));
const HassleFree = lazy(() => import('./components/HowItworks/HassleFree'));
const DoIHaveElectricGas = lazy(() => import('./pages/DoIHaveElectricGas'));
const Email = lazy(() => import('./pages/Email/Email'));
const Isr = lazy(() => import('./pages/InternalError'));
const UpdateProduct = lazy(() => import('./pages/AdminAccount/UpdateProduct'));
const CreateFaq = lazy(() => import('./pages/AdminAccount/CreateFaq'));
const ManageBlogs = lazy(() => import('./pages/AdminAccount/ManageBlogs'));
const CreateBlog = lazy(() => import('./pages/AdminAccount/CreateBlog'));
const ManageVideos = lazy(() => import('./pages/AdminAccount/ManageVideos'));
const AdminChangePassword = lazy(() => import('./pages/AdminAccount/AdminChangePassword'));
const ManageReviews = lazy(() => import('./pages/AdminAccount/ManageReviews'));
const ShippingTax = lazy(() => import('./pages/AdminAccount/ShippingTax'));
const ManageGallery = lazy(() => import('./pages/AdminAccount/ManageGallery'));
const ManageOrders = lazy(() => import('./pages/AdminAccount/ManageOrders'));
const ManageCustomers = lazy(() => import('./pages/AdminAccount/ManageCustomers'));
const UpdateCustomer = lazy(() => import('./pages/AdminAccount/UpdateCustomer'));
const ManageHelpSupport = lazy(() => import('./pages/AdminAccount/ManageHelpSupport'));
const ManageApplianceTips = lazy(() => import('./pages/AdminAccount/ManageApplianceTips'));
const CreateHelpSupport = lazy(() => import('./pages/AdminAccount/CreateHelpSupport'));
const CreateApplianceTips = lazy(() => import('./pages/AdminAccount/CreateApplianceTips'));
const UpdateBlog = lazy(() => import('./pages/AdminAccount/UpdateBlog'));
const ManageTeam = lazy(() => import('./pages/AdminAccount/ManageTeam'));
const UpdateHelp = lazy(() => import('./pages/AdminAccount/UpdateHelp'));
const UpdateApplianceTips = lazy(() => import('./pages/AdminAccount/UpdateApplianceTips'));
const BuyingOptionsV1 = lazy(() => import('./pages/BuyingOptionsV1'));

import Loader from "./components/Loader/Loader";
import useAutoLoginAdmin from './hooks/useAutoLoginAdmin'
import useAutoLoginUser from './hooks/useAutoLoginUser'
import { useSelector } from "react-redux";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  
  const ProtectedAdmin = ({ children }) => {
    const loading = useAutoLoginAdmin();
    return loading ? <Loader /> : <>{children}</>;
  }

  const ProtectedUser = ({ children }) => {
    const loading = useAutoLoginUser();
    return loading ? <Loader /> : <>{children}</>;
  }

  const AuthRoute = ({ children }) => {
    const isAuth = useSelector((state) => state.user.isAuth)
    const navigate = useNavigate()
    return isAuth ? navigate(-1) : <>{children}</>;
  }


  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <Suspense fallback={<Loader/>} >
      <Routes>
        <Route path="/" element={<Home />} />
        {/* landing Page */}
        <Route path="/landing-page" element={<Landing />} />


        <Route path="/buying-optionsv1" element={<BuyingOptionsV1 />} />
        {/* ===== */}
        <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
        <Route path="/register" element={<AuthRoute><Register /></AuthRoute>} />
        <Route path="/forgot-password" element={<AuthRoute><ForgotPassword /></AuthRoute>} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/appliances/:categorySlug" element={<Appliances />} />
        {/* Appliances Filters */}
        <Route path="/appliances" element={<Products />} />

        <Route path="/appliancetypes" element={<ApplianceTypes />} />
        <Route path="/faqs" element={<GeneralFaqs />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/our-showroom" element={<OurShowroom />} />
        <Route path="/our-companies" element={<OurCompanies />} />
        <Route path="/appliance-repair" element={<ApplianceRepair />} />
        <Route path="/measuring-guide" element={<MeasuringGuide />} />
        <Route path="/helpful-appliances-tips" element={<HelpfulApliancesTips />} />
        <Route path="/tips-forregerators-and-freezers" element={<AppliancesTipsDetail />} />
        <Route path="/financing" element={<Financing />} />
        {/* Blogs */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        {/* For Mobile My Account*/}
        <Route path="/my-account" element={<ProtectedUser><MobileMyAccount /></ProtectedUser>} />
        {/* For Desktop My Account */}
        <Route path="/my-account/profile" element={<ProtectedUser><Profile /></ProtectedUser>} />
        <Route path="/my-account/order-history" element={<ProtectedUser><OrderHistory /></ProtectedUser>} />
        <Route path="/my-account/my-favourites" element={<ProtectedUser><MyFavourite /></ProtectedUser>} />
        <Route path="/my-account/saved-addresses" element={<ProtectedUser><SavedAddress /></ProtectedUser>} />
        <Route path="/my-account/billing-information" element={<ProtectedUser><BillingInformation /></ProtectedUser>} />
        <Route path="/my-account/change-password" element={<ProtectedUser><ChangePassword /></ProtectedUser>} />
        <Route path="/my-account/email-preferences" element={<ProtectedUser><EmailPreferences /></ProtectedUser>} />

        <Route path="/mycart" element={<MyCart />} />
        <Route path="/mycart/information" element={<CheckoutInformation />} />
        <Route path="/mycart/shipping" element={<CheckoutShipping />} />
        <Route path="/mycart/payment" element={<CheckoutPayment />} />

        <Route path="/stay-in-loop" element={<StayInLoop />} />

        <Route path="/how-it-works/what-we-sell" element={<WhatWeSell />} />
        <Route path="/how-it-works/rating-system" element={<Ratings />} />
        <Route path="/how-it-works/testing-process" element={<Tested />} />
        <Route path="/how-it-works/product-photos" element={<Photos />} />
        <Route path="/how-it-works/delivery" element={<Delivered />} />
        <Route path="/how-it-works/hassle-free" element={<HassleFree />} />

        <Route path="/help-and-support" element={<HelpAndSupport />} />
        <Route path="/help-and-support/:category/:slug" element={<HelpCardPage />} />
        <Route path="/email" element={<Email />} />
        <Route path="/do-i-have-electric-or-gas" element={<DoIHaveElectricGas />} />

        {/* Admin Related Routes */}
        <Route path="/nu-admin" element={<AuthRoute><AdminLogin /></AuthRoute>} />
        <Route path="/admin/dashboard" element={<ProtectedAdmin><Dashboard /></ProtectedAdmin>} />
        {/* Categories Related Routes */}
        {/* Category Section Related Routes */}
        <Route path="/admin/create-section/:slug" element={<ProtectedAdmin><CreateSection /></ProtectedAdmin>} />
        <Route path="/admin/update-section/:slug/:id" element={<ProtectedAdmin><UpdateSection /></ProtectedAdmin>} />
        {/* Category Section Item Related Routes */}
        {/* <Route path="/admin/create-section-item/:style/:id" element={<ProtectedAdmin><CreateSectionItem /></ProtectedAdmin>} /> */}
        {/* Categories Related Routes */}
        <Route path="/admin/categories" element={<ProtectedAdmin><ManageCategories /></ProtectedAdmin>} />
        <Route path="/admin/create-category" element={<ProtectedAdmin><CreateCategory /></ProtectedAdmin>} />
        <Route path="/admin/update-category/:id" element={<ProtectedAdmin><UpdateCategory /></ProtectedAdmin>} />
        <Route path="/admin/manage-category-sections/:slug" element={<ProtectedAdmin><ManageSections /></ProtectedAdmin>} />
        {/* Section Items */}

        <Route path="/admin/manage-section-items/:style/:sectionId" element={<ProtectedAdmin><ManageSectionItems /></ProtectedAdmin>} />
        <Route path="/admin/update-section-item/:id" element={<ProtectedAdmin><UpdateSectionItem /></ProtectedAdmin>} />
        {/* Product Update */}
        <Route path="/admin/create-product" element={<ProtectedAdmin><CreateProduct /></ProtectedAdmin>} />
        {/* <Route path="/admin/create-product" element={<ProtectedAdmin><CreateProduct /></ProtectedAdmin>} /> */}
        <Route path="/admin/manage-products" element={<ProtectedAdmin><ManageProducts /></ProtectedAdmin>} />
        <Route path="/admin/update-product/:slug" element={<ProtectedAdmin><UpdateProduct /></ProtectedAdmin>} />
        {/* {FAQ Routes} */}
        <Route path="/admin/faq" element={<ProtectedAdmin><ManageFaq /></ProtectedAdmin>} />
        <Route path="/admin/create-faq/:slug" element={<ProtectedAdmin><CreateFaq /></ProtectedAdmin>} />
        {/* Admin Blog Routes */}
        <Route path="/admin/manage-blogs" element={<ProtectedAdmin><ManageBlogs /></ProtectedAdmin>} />
        <Route path="/admin/create-blog" element={<ProtectedAdmin><CreateBlog /></ProtectedAdmin>} />
        <Route path="/admin/update-blog/:slug" element={<ProtectedAdmin><UpdateBlog /></ProtectedAdmin>} />
        {/* Admin Manage Team Routes */}
        <Route path="/admin/manage-team" element={<ProtectedAdmin><ManageTeam /></ProtectedAdmin>} />
        {/* Admin Help and Support Routes */}
        <Route path="/admin/manage-help-support" element={<ProtectedAdmin><ManageHelpSupport /></ProtectedAdmin>} />
        <Route path="/admin/create-help-support" element={<ProtectedAdmin><CreateHelpSupport /></ProtectedAdmin>} />
        <Route path="/admin/update-help/:slug" element={<ProtectedAdmin><UpdateHelp /></ProtectedAdmin>} />
        {/* Admin Hellpful Appliance Tips Routes */}
        <Route path="/admin/manage-appliance-tips" element={<ProtectedAdmin><ManageApplianceTips /></ProtectedAdmin>} />
        <Route path="/admin/create-appliance-tips" element={<ProtectedAdmin><CreateApplianceTips /></ProtectedAdmin>} />
        <Route path="/admin/update-appliance-tips/:slug" element={<ProtectedAdmin><UpdateApplianceTips /></ProtectedAdmin>} />

        {/* Admin Media */}
        <Route path="/admin/manage-videos" element={<ProtectedAdmin><ManageVideos /></ProtectedAdmin>} />
        {/* Admin Manage Reviews */}
        <Route path="/admin/manage-reviews" element={<ProtectedAdmin><ManageReviews /></ProtectedAdmin>} />
        {/* Admin Password Change */}
        <Route path="/admin/change-password" element={<ProtectedAdmin><AdminChangePassword /></ProtectedAdmin>} />
        {/* Admin Shipping & Tax */}
        <Route path="/admin/manage-shipping" element={<ProtectedAdmin><ShippingTax /></ProtectedAdmin>} />
        {/* Admin Manage Gallery */}
        <Route path="/admin/manage-gallery" element={<ProtectedAdmin><ManageGallery /></ProtectedAdmin>} />
        {/* Admin Manage Gallery */}
        <Route path="/admin/manage-orders" element={<ProtectedAdmin><ManageOrders /></ProtectedAdmin>} />
        {/* Admin Manage Customers */}
        <Route path="/admin/manage-customers" element={<ProtectedAdmin><ManageCustomers /></ProtectedAdmin>} />
        {/* Admin Update Customer */}
        <Route path="/admin/update-customer" element={<ProtectedAdmin><UpdateCustomer /></ProtectedAdmin>} />

        <Route path="/test/:slug" element={<Test />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/isr" element={<Isr />} />
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
