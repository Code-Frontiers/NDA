import React from "react";

function About() {
    return (
        <main className="about-us">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1>About Us</h1>
                    <p>Driving Innovation and Excellence Since 2020</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission">
                <div className="content">
                    <h2>Our Mission</h2>
                    <p>
                        To deliver innovative solutions with a focus on quality, performance, and
                        success. We are committed to excellence and aim to positively impact our
                        customers and communities.
                    </p>
                </div>
            </section>

            {/* Milestones Section */}
            <section className="milestones">
                <h2>Our Journey</h2>
                <div className="milestones-grid">
                    <div className="milestone">
                        <h3>2020</h3>
                        <p>Founded with a vision to innovate and deliver excellence.</p>
                    </div>
                    <div className="milestone">
                        <h3>2021</h3>
                        <p>Launched our flagship product, achieving remarkable success.</p>
                    </div>
                    <div className="milestone">
                        <h3>2022</h3>
                        <p>Expanded globally, partnering with industry leaders.</p>
                    </div>
                    <div className="milestone">
                        <h3>2023</h3>
                        <p>Recognized as a market leader in innovation and performance.</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta">
                <h2>Join Our Journey</h2>
                <p>Be a part of a story that redefines industries and creates a better tomorrow.</p>
                <button className="cta-button">Contact Us</button>
            </section>
        </main>
    );
}

export default About;
