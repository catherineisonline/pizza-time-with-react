import React from "react";
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

// import ReactDOM from "react-dom/client";



import reportWebVitals from "./reportWebVitals";
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
//Components
import App from "./App.js";

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <HeaderNav />
//       <Routes>
//         <Route path="/pizza-time-with-react" element={<RootSection />} />
//         <Route path="/pizza" element={<MenuRoot />} />
//         <Route path="/contact" element={<ContactRoot />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/sushi" element={<SushiRoot />} />
//         <Route path="/sale" element={<SaleRoot />} />
//         <Route path="/pasta" element={<PastaRoot />} />
//         <Route path="/drinks" element={<DrinksRoot />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/password-recovery" element={<PasswordRecovery />} />
//       </Routes>
//       <FooterNav />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// reportWebVitals();

// //Extras
// import reportWebVitals from "./reportWebVitals";
// import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// export const client = new ApolloClient({
//   uri: "http://localhost:4000/graphql",
//   cache: new InMemoryCache({
//     dataIdFromObject: (o) => (o._id ? `${o.__typename}:${o._id}` : undefined),
//   }),
// });

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
