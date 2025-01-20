import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero"
import Home from "./pages/Home"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Testimonials from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"
import AboutUs from "./pages/AboutUs"
import SuccessStory from "./pages/SuccessStory"
import ContactUs from "./pages/ContactUs"
import Gallery from "./pages/Gallery"
import OurSubsidiary from "./pages/OurSubsidiary"
import Products from "./pages/Products"
import Title from "./Components/Title/Title"
import ServiceSection from "./Components/Service/ServiceSection" // Fixed import

const App = () => {
  const [playState, setPlayState] = useState(false)

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <div className="container">
                <Title subTitle="Our PRODUCTS" title="What We Offer" />
                <Campus />
                <About setPlayState={setPlayState} />
                <ServiceSection /> {/* Fixed usage */}
                <Title subTitle="" title="Our Distributership" />
                <Testimonials />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
              </div>
              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </>
          }
        />
        {/* Other Pages */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/success-stories" element={<SuccessStory />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/our-subsidiary" element={<OurSubsidiary />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
