import Home from "./pages/home/home";
import Navbar from "./components/ui/navbar";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Foods from "./pages/foods/foods";
import { useNavigate } from "react-router-dom";
import Cart from "./pages/cart/cart";
import Summary from "./pages/summary/summary";
import AboutContact from "./pages/about/about";

export default function App() {
  return (
    <>
      <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup/>}></Route>
            <Route path="/foods"
            element={<Foods/>}></Route>
            <Route path="/cart"
            element={<Cart/>}></Route>
            <Route path="/summary" element={<Summary/>}>
            </Route>
            <Route path="/about"
            element={<AboutContact/>}>
            </Route>
          </Routes>
    </>
  );
}
