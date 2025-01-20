import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/home/Home";
import About from "./pages/About";
import SuccessStory from "./pages/SuccessStory";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import Subsidiary from "./pages/Subsidiary";
import Products from "./pages/products/Products";
import "./styles/index.css";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/success-stories" element={<SuccessStory />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/subsidiary" element={<Subsidiary />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
