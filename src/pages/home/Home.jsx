import React, { useState } from "react";
import Hero from "./Hero";
import AboutSection from "./AboutSection";
import OfferingSection from "./OfferingSection";
import Contact from "./Contact";
import VideoPlayer from "../../Components/VideoPlayer/VideoPlayer";
import Title from "../../Components/Title/Title";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
    const [playState, setPlayState] = useState(false);

    return (
        <>
            <Hero />
            <VideoPlayer playState={playState} setPlayState={setPlayState} />
            <div className="container">
                <AboutSection setPlayState={setPlayState} />
                <Title subTitle="Our PRODUCTS" title="What We Offer" />
                <OfferingSection />
                <Services />
                <Title subTitle="" title="Our Distributership" />
                <Testimonials />
                <Title subTitle="Contact Us" title="Get in Touch" />
                <Contact />
            </div>
        </>
    );
};

export default Home;
