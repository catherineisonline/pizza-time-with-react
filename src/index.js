import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

//Componnets
import HeaderNav from "./components/HeaderNav.tsx";
import FooterNav from "./components/FooterNav.tsx";
import MenuRoot from "./components/MenuRoot";
import RootSection from "./components/RootSection";
import ContactRoot from "./components/ContactRoot";
import SushiRoot from "./components/SushiRoot";
import SaleRoot from "./components/SaleRoot";
import PastaRoot from "./components/PastaRoot";
import DrinksRoot from "./components/DrinksRoot";
import AboutUs from "./components/AboutUs";
import Blog from "./components/Blog";
import Cart from "./components/Cart";
import PasswordRecovery from "./components/PasswordRecovery.js";
import Register from "./components/Register";

// CSS
import "./assets/App.css";
import "./assets/Responsive.css";
import "./assets/leaflet.css";
import "./assets/MenuStyles.css";
import "./assets/Contact.css";
import "./assets/AboutUs.css";
import "./assets/Blog.css";
import "./assets/Cart.css";
import "./assets/Register.css";
import "./assets/PasswordRecovery.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <HeaderNav />
      <Routes>
        <Route path="/pizza-time-with-react" element={<RootSection />} />
        <Route path="/pizza" element={<MenuRoot />} />
        <Route path="/contact" element={<ContactRoot />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/sushi" element={<SushiRoot />} />
        <Route path="/sale" element={<SaleRoot />} />
        <Route path="/pasta" element={<PastaRoot />} />
        <Route path="/drinks" element={<DrinksRoot />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
      </Routes>
      <FooterNav />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
