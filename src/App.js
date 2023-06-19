import { Routes, Route, NavLink } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './pages/Login';
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
import Profile from './pages/MyAccount/Profile';
import OtherHistory from './pages/MyAccount/OtherHistory';
import MyFavourite from './pages/MyAccount/MyFavourite';
import SavedAddress from './pages/MyAccount/SavedAddress';
import BillingInformation from './pages/MyAccount/BillingInformation';
import ChangePassword from './pages/MyAccount/ChangePassword';
import EmailPreferences from './pages/MyAccount/EmailPreferences';
import Test from './pages/Test';
import NotFound from "./pages/NotFound";
import { useSelector } from "react-redux";

function App() {

  const auth = useSelector((state) => state.user.auth);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/useraccount" element={auth ? <UserAccount /> : <NavLink to="/login" />} />
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
      <Route path="/my-account/profile" element={<Profile />} />
      <Route path="/my-account/other-history" element={<OtherHistory />} />
      <Route path="/my-account/my-favourites" element={<MyFavourite />} />
      <Route path="/my-account/saved-addresses" element={<SavedAddress />} />
      <Route path="/my-account/billing-information" element={<BillingInformation />} />
      <Route path="/my-account/change-password" element={<ChangePassword />} />
      <Route path="/my-account/email-preferences" element={<EmailPreferences />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
