import Home from "./pages/home/home";
import Navbar from "./components/ui/navbar";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Foods from "./pages/foods/foods";
import { useNavigate } from "react-router-dom";
import Cart from "./pages/cart/cart";
import Summary from "./pages/summary/summary";
import AboutContact from "./pages/about/about";
import Protected from "./pages/protectRoute/Protected";
export default function App() {
  return (
    <>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/foods"
              element={<Protected>
                <Foods/>
              </Protected>}>
            </Route>
            <Route path="/cart"
            element={
            <Protected>
              <Cart/>
            </Protected>
            }>

            </Route>
            <Route path="/summary" element={
            <Protected>
              <Summary/>
            </Protected>
            }>
            </Route>
            <Route path="/about"
            element={<AboutContact/>}>
            </Route>
          </Routes>
    </>
  );
}
