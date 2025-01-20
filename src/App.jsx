import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./pages/AboutUs";
import SuccessStory from "./pages/SuccessStory";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import OurSubsidiary from "./pages/Oursubsidiary";
import Products from "./pages/products/Products";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/products" element={<Products />} />
                <Route path="/success-stories" element={<SuccessStory />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/our-subsidiary" element={<OurSubsidiary />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
