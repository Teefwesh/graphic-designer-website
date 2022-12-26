import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import Navigation from "./components/Navigation/Navigation";
import "./index.css";
import BottomTab from "./more/BottomTab";
import Footer from "./pages/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <App />
      <Footer />
      <BottomTab />
    </BrowserRouter>
  </React.StrictMode>
);
