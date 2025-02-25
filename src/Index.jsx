import React from "react";
import { createRoot } from "react-dom/client";
// CSS
import "./core-ui/app.css";
import "./core-ui/leaflet.css";
//Components
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
