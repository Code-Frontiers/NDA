import React, { useState } from "react";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Campus from "../Components/Campus/Campus";
import Testimonials from "../Components/Testimonials/Testimonials";
import Contact from "../Components/Contact/Contact";
import VideoPlayer from "../Components/VideoPlayer/VideoPlayer";
import Title from "../Components/Title/Title";
import ServiceSection from "../Components/Service/ServiceSection";

const Home = () => {
    const [playState, setPlayState] = useState(false);

    return (
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
    );
};

export default Home;
