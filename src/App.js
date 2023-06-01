import { Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Register from './pages/Register';
import Products from './pages/Products';
import Product from './pages/Product';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import UserAccount from './pages/UserAccount';
import Protected from './components/Protected/Protected';
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/login" element= {<Login/>} />
     <Route path="/register" element={<Register/>}/>
     <Route path="/forgot-password" element= {<ForgotPassword/>}/>
     <Route path= "/useraccount" element={<UserAccount/>}/>
     <Route path="/products" element={<Products/>}/>
     <Route path= "/product" element= {<Product/>}/>
     <Route path= "*" element= {<NotFound/>}/>
    </Routes>
  );
}

export default App;
