import Home from "./pages/home/home";
import Navbar from "./components/ui/navbar";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import Cart from "./pages/cart/cart";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
      </Routes>
    </>
  );
}
