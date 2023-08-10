import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
// CSS
import "./core-ui/App.css";
import "./core-ui/Responsive.css";
import "./core-ui/leaflet.css";
import './routes/menu/Menu.css'
import './routes/contact/Contact.css'
import './routes/about/AboutUs.css'
import './routes/blog/Blog.css'
import './routes/cart/Cart.css'
import './routes/registration/Register.css'
import './routes/checkout/checkout.css'
import './routes/payment/payments.css'
//Components
import App from "./App.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
