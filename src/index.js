import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// CSS
import "./assets/App.css";
import "./assets/Responsive.css";
import "./assets/leaflet.css";
import "./assets/Menu.css";
import "./assets/Contact.css";
import "./assets/AboutUs.css";
import "./assets/Blog.css";
import "./assets/Cart.css";
import "./assets/Register.css";
import "./assets/PasswordRecovery.css";
import "./assets/checkout.css";
//Components
import App from "./App.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
