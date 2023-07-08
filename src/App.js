import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './pages/Home';
import Landing from './pages/Landing';
import Register from './pages/Register';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './pages/Login';
import AdminLogin from './pages/Admin/login';
import ForgotPassword from './pages/ForgotPassword';
import Appliances from './pages/Appliances';
import ApplianceTypes from './pages/ApplianceTypes';
import GeneralFaqs from './pages/GeneralFaqs';
import OurStory from './pages/OurStory';
import OurShowroom from './pages/OurShowroom';
import OurCompanies from './pages/OurCompanies';
import ApplianceRepair from './pages/ApplianceRepair';
import MeasuringGuide from './pages/MeasuringGuide';
import HelpfulApliancesTips from './pages/HelpfulApliancesTips';
import AppliancesTipsDetail from './pages/AppliancesTipsDetail';
import Profile from './pages/MyAccount/Profile';
import OrderHistory from './pages/MyAccount/OrderHistory';
import MyFavourite from './pages/MyAccount/MyFavourite';
import SavedAddress from './pages/MyAccount/SavedAddress';
import BillingInformation from './pages/MyAccount/BillingInformation';
import ChangePassword from './pages/MyAccount/ChangePassword';
import EmailPreferences from './pages/MyAccount/EmailPreferences';
import Blogs from './pages/Blogs/Index';
import BlogArticle from './pages/Blogs/BlogArticle';
import Financing from './pages/Financing';
import MyCart from './pages/Cart/MyCart';
import HelpAndSupport from './pages/HelpAndSupport/HelpAndSupport';
import HelpCardPage from './pages/HelpAndSupport/HelpCardPage';
import Test from './pages/Test'
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/AdminAccount/Dashboard";
import ManageProducts from "./pages/AdminAccount/ManageProducts";
import ManageCategories from "./pages/AdminAccount/ManageCategories";
import useAutoLoginAdmin from './hooks/useAutoLoginAdmin'
import useAutoLoginUser from './hooks/useAutoLoginUser'
import StayInLoop from "./pages/StayInLoop";
import Loader from './components/Loader/Loader'
import CreateCategory from "./pages/AdminAccount/CreateCategory";
import CreateProduct from "./pages/AdminAccount/CreateProduct";
import ViewSections from "./pages/AdminAccount/ViewSections";
import CreateSection from "./pages/AdminAccount/CreateSection";
import CreateSectionItem from "./pages/AdminAccount/CreateSectionItem";
import CheckoutInformation from "./pages/Checkout/Information";
import CheckoutShipping from "./pages/Checkout/Shipping";
import CheckoutPayment from "./pages/Checkout/Payment";
import ViewSectionItems from "./pages/AdminAccount/ViewSectionItems";
import ManageFaq from "./pages/AdminAccount/ManageFaq"
import { useSelector } from "react-redux";
import UpdateSection from "./pages/AdminAccount/UpdateSection";
import UpdateCategory from "./pages/AdminAccount/UpdateCategory";
import UpdateSectionItem from "./pages/AdminAccount/UpdateSectionItem";
import WhatWeSell from './components/HowItworks/WhatWeSell';
import Ratings from './components/HowItworks/Ratings'
import Tested from './components/HowItworks/Tested';
import Photos from './components/HowItworks/Photos';
import Delivered from './components/HowItworks/Delivered';
import HassleFree from './components/HowItworks/HassleFree';
import DoIHaveElectricGas from './pages/DoIHaveElectricGas';
import Email from './pages/Email/Email';
import Isr from "./pages/InternalError";
import UpdateProduct from "./pages/AdminAccount/UpdateProduct";
import CreateFaq from "./pages/AdminAccount/CreateFaq";

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
    <Routes>
      <Route path="/" element={<Home />} />
      {/* landing Page */}
      <Route path="/landing-page" element={<Landing />} />
      {/* ===== */}
      <Route path="/login" element={<AuthRoute><Login /></AuthRoute>} />
      <Route path="/register" element={<AuthRoute><Register /></AuthRoute>} />
      <Route path="/forgot-password" element={<AuthRoute><ForgotPassword /></AuthRoute>} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:slug" element={<Product />} />
      <Route path="/appliances/:categorySlug/:categoryId" element={<Appliances />} />
      {/* Appliances Filters */}
      <Route path="/appliances/:category/:type/:value" element={<Products />} />

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
      <Route path="/blog-article" element={<BlogArticle />} />

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
      <Route path="/help-card-page" element={<HelpCardPage />} />
      <Route path="/email" element={<Email />} />
      <Route path="/do-i-have-electric-or-gas" element={<DoIHaveElectricGas />} />

      {/* Admin Related Routes */}
      <Route path="/nu-admin" element={<AuthRoute><AdminLogin /></AuthRoute>} />
      <Route path="/admin/dashboard" element={<ProtectedAdmin><Dashboard /></ProtectedAdmin>} />
      {/* Categories Related Routes */}
      {/* Category Section Related Routes */}
      <Route path="/admin/create-section/:categoryTitle/:id" element={<ProtectedAdmin><CreateSection /></ProtectedAdmin>} />
      <Route path="/admin/update-section/:slug/:id" element={<ProtectedAdmin><UpdateSection /></ProtectedAdmin>} />
      {/* Category Section Item Related Routes */}
      <Route path="/admin/create-section-item/:style/:id" element={<ProtectedAdmin><CreateSectionItem /></ProtectedAdmin>} />
      {/* Categories Related Routes */}
      <Route path="/admin/categories" element={<ProtectedAdmin><ManageCategories /></ProtectedAdmin>} />
      <Route path="/admin/create-category" element={<ProtectedAdmin><CreateCategory /></ProtectedAdmin>} />
      <Route path="/admin/update-category/:id" element={<ProtectedAdmin><UpdateCategory /></ProtectedAdmin>} />
      <Route path="/admin/view-category-sections/:title/:categoryId" element={<ProtectedAdmin><ViewSections /></ProtectedAdmin>} />
      {/* Section Items */}

      <Route path="/admin/view-section-items/:sectionId" element={<ProtectedAdmin><ViewSectionItems /></ProtectedAdmin>} />
      <Route path="/admin/update-section-item/:id" element={<ProtectedAdmin><UpdateSectionItem /></ProtectedAdmin>} />
      {/* Product Update */}
      <Route path="/admin/create-product" element={<ProtectedAdmin><CreateProduct /></ProtectedAdmin>} />
      <Route path="/admin/manage-products" element={<ProtectedAdmin><ManageProducts /></ProtectedAdmin>} />
      <Route path="/admin/update-product/:id" element={<ProtectedAdmin><UpdateProduct /></ProtectedAdmin>} />

      <Route path="/test" element={<Test />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/isr" element={<Isr />} />
      {/* {FAQ Routes} */}
      <Route path="/admin/faq" element={<ProtectedAdmin><ManageFaq /></ProtectedAdmin>} />
      <Route path="/admin/create-faq/:slug" element={<ProtectedAdmin><CreateFaq /></ProtectedAdmin>} />
    </Routes>
  );
}

export default App;
