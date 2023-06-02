import { Routes,Route, NavLink} from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import UserAccount from './pages/UserAccount';
import NotFound from "./pages/NotFound";
import { useContext } from "react";
import { AppContext } from "./context/GlobalContext";

function App() {
  const globel = useContext(AppContext)
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/login" element= {<Login/>} />
     <Route path="/register" element={<Register/>}/>
     <Route path="/forgot-password" element= {<ForgotPassword/>}/>
     <Route path= "/useraccount" element={globel.token ? <UserAccount/> : <NavLink to="/login" />}/>
     <Route path="/products" element={<Products/>}/>
     <Route path= "/product" element= {<Product/>}/>
     <Route path= "*" element= {<NotFound/>}/>
    </Routes>
  );
}

export default App;
