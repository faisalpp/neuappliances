import { Routes, Route, NavLink } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import UserAccount from './pages/UserAccount';
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
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
