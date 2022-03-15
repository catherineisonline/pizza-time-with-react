import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import MenuRoot from "./components/MenuRoot";
import reportWebVitals from "./reportWebVitals";
import RootSection from "./components/RootSection";
import ContactRoot from "./components/ContactRoot";
import SushiRoot from "./components/SushiRoot";
import SaleRoot from "./components/SaleRoot";
import PastaRoot from "./components/PastaRoot";
import DrinksRoot from "./components/DrinksRoot";
// CSS
import "./assets/App.css";
import "./assets/Responsive.css";
import "./assets/leaflet.css";
import "./assets/MenuStyles.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<RootSection />} />
        <Route path="/pizza" element={<MenuRoot />} />
        <Route path="/contact" element={<ContactRoot />} />
        <Route path="/sushi" element={<SushiRoot />} />
        <Route path="/sale" element={<SaleRoot />} />
        <Route path="/pasta" element={<PastaRoot />} />
        <Route path="/drinks" element={<DrinksRoot />} />
      </Routes>
    </Router>
    {/* <RootSection /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
