import React from "react";
import about_img from "/assets/about.jpg";

const AboutSection = () => {
    return (
        <section className="container">
            <div className="about-section">
                <div className="about-section-left">
                    <img src={about_img} alt="about-image" className="about-section-img" />
                </div>
                <div className="about-section-right">
                    <h2>New Dispensing Automation Private Limited</h2>
                    <p>
                        Started on November 2020 based in New Delhi, India. Having a vast experience in
                        Liquid handling such as, Single part Dispensing, Two-part Meter Mix Dispensing,
                        UV Adhesive Dispensing & Curing, Hotmelt Dispensing and relevant Dispensing
                        Equipment’s Automations. We provide complete solutions for all types of
                        Adhesives, Sealants, Chemicals, Lubricants Dispensing under one roof to various
                        industries like Automotive, Electronics, Healthcare, Aerospace, Defense
                        Industries and Research Organizations.
                    </p>
                    <p>
                        New Dispensing Automation, believes in Quality, Innovation & Sustainability are
                        the key principles of our long-term success. Our organization attract and retain
                        high quality employees that are motivated to contribute to the growth of our
                        business. Our extensive experience, puts us in an ideal position to help
                        customers to achieve the industrial efficiency they are seeking, minimizing
                        costs while respecting the quality of the products.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
