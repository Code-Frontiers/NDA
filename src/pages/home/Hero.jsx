import React from "react";
import { Link } from "react-router-dom";
import dark_arrow from "/assets/dark-arrow.png";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>We deliver innovative dispensing solutions for a better tomorrow</h1>
                <p>
                    Our cutting-edge dispensing solutions empower industries with efficiency,
                    reliability, and unmatched quality
                </p>
                <Link to="/products" className="btn">
                    Explore more <img src={dark_arrow} alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Hero;
