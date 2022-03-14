import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import MenuRoot from "./components/MenuRoot";

import "./index.css";
import "./App.css";
import "./Responsive.css";
import "./leaflet.css";

import reportWebVitals from "./reportWebVitals";

//component file
import RootSection from "./components/RootSection";




ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<RootSection />} />
        <Route path="/menu" element={<MenuRoot />} />
      </Routes>
    </Router>
    {/* <RootSection /> */}
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
