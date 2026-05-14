import Home from "./pages/home/home";
import Navbar from "./components/ui/navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
