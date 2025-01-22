import React from "react";
import dark_arrow from "/assets/dark-arrow.png";

const Hero = () => {
    return (
        <div className="hero container">
            <div className="hero-text">
                <h1>We deliver innovative dispensing solutions for a better tomorrow</h1>
                <p>
                    Our cutting-edge dispensing solutions empower industries with efficiency,
                    reliability, and unmatched quality
                </p>
                <button className="btn">
                    Explore more <img src={dark_arrow} alt="" />
                </button>
            </div>
        </div>
    );
};

export default Hero;
