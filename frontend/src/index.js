import React from "react";
import ReactDOM from "react-dom/client";

// Global CSS import
import "./index.css";

// Component Imports
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

// Page Routes
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/account/Signup";
import Signin from "./landing_page/account/Signin";
import Reset from "./landing_page/account/Reset";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Root render using React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    {/* Persistent Navbar and Footer */}
    <Navbar />

    {/* Route Definitions */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />

      {/* Catch-all route for 404 pages */}
      <Route path="*" element={<NotFound />} />
    </Routes>

    <Footer />
  </BrowserRouter>
);
