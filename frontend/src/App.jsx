import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Pizzas from "./pages/Pizza/Pizza";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Cart from "./pages/Cart/Cart";
import Profile from "./components/Profile";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/p001" element={<Pizzas />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="404" element={<NotFound />} />
      </Routes>
      {/* <Home /> */}
      {/* <RegisterPage /> */}
      {/* <LoginPage /> */}
      {/* <Cart /> */}
      {/* <Pizzas />
       */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
