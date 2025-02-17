import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import About from "./pages/About";
import SuccessStory from "./pages/SuccessStory";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Subsidiary from "./pages/Subsidiary";
import Products from "./pages/products/Products";
import CategoryPage from "./pages/products/CategoryPage";

import "./styles/index.css";

const App = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <>
            <Navbar isHome={isHome} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route path="/products" element={<Products />} />
                <Route path="/products/*" element={<CategoryPage />} />

                <Route path="/success-stories" element={<SuccessStory />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/subsidiary" element={<Subsidiary />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
            <Footer />
        </>
    );
};

const RootApp = () => (
    <Router>
        <App />
    </Router>
);

export default RootApp;
