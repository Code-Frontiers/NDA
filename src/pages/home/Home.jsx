import React from "react";
import Hero from "./Hero";
import About from "./sections/About";
import Offerings from "./sections/Offerings";
import Contact from "./sections/Contact";
import VideoPlayer from "./VideoPlayer";
import Title from "../../components/title/Title";
import Services from "./sections/Services";
import Distributorship from "./sections/Distributorship";
import Portfolio from "./sections/Portfolio";
const Home = () => {

    return (
        <>
            <Hero />
            <VideoPlayer />
            <div className="container">
                <About />
                <Title title="What We Offer" />
                <Offerings />
                <Title title="Services Offered" />
                <Services />
                <Title title="Our Distributorship" />
                <Distributorship />
                <Portfolio />
                <Title title="Get in Touch" />
                <Contact />
            </div>
        </>
    );
};

export default Home;
