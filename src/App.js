import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './pages/Login';
import AdminLogin from './pages/Admin/login';
import ForgotPassword from './pages/ForgotPassword';
import UserAccount from './pages/UserAccount';
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
import Test from './pages/Test'
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/AdminAccount/Dashboard";
import ManageProducts from "./pages/AdminAccount/ManageProducts";
import ManageBrands from "./pages/AdminAccount/ManageBrands";
import ManageCategories from "./pages/AdminAccount/ManageCategories";
import CreateBrand from "./pages/AdminAccount/CreateBrand";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/useraccount" element={<UserAccount />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product" element={<Product />} />
      <Route path="/appliances" element={<Appliances />} />
      <Route path="/appliancetypes" element={<ApplianceTypes />} />
      <Route path="/faqs" element={<GeneralFaqs />} />
      <Route path="/our-story" element={<OurStory />} />
      <Route path="/our-showroom" element={<OurShowroom />} />
      <Route path="/our-companies" element={<OurCompanies />} />
      <Route path="/appliance-repair" element={<ApplianceRepair />} />
      <Route path="/measuring-guide" element={<MeasuringGuide />} />
      <Route path="/helpful-appliances-tips" element={<HelpfulApliancesTips />} />
      <Route path="/tips-forregerators-and-freezers" element={<AppliancesTipsDetail />} />
      <Route path="/my-account/profile" element={<Profile />} />
      <Route path="/my-account/order-history" element={<OrderHistory />} />
      <Route path="/my-account/my-favourites" element={<MyFavourite />} />
      <Route path="/my-account/saved-addresses" element={<SavedAddress />} />
      <Route path="/my-account/billing-information" element={<BillingInformation />} />
      <Route path="/my-account/change-password" element={<ChangePassword />} />
      <Route path="/my-account/email-preferences" element={<EmailPreferences />} />
      {/* Blogs */}
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blog-article" element={<BlogArticle />} />

      {/* Admin Related Routes */}
      <Route path="/nu-admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
      <Route path="/admin/manage-products" element={<ManageProducts />} />
      {/* Brand Management */}
      <Route path="/admin/manage-brands" element={<ManageBrands />} />
      <Route path="/admin/manage-brands/create" element={<CreateBrand />} />


      <Route path="/admin/manage-categories" element={<ManageCategories />} />

      <Route path="/test" element={<Test />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
