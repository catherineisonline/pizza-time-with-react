import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// CSS
import "./assets/app.css";
import "./assets/responsive.css";
import "./assets/leaflet.css";
import "./assets/menu.css";
import "./assets/contact.css";
import "./assets/about.css";
import "./assets/blog.css";
import "./assets/cart.css";
import "./assets/register.css";
import "./assets/passwordRecovery.css";
import "./assets/checkout.css";
//Components
import App from "./App.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
