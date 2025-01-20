import React from "react"
import "./Oursubsidiary.css"

function Oursubsidiary() {
  return (
    <main className="subsidiary-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Our Subsidiary</h1>
          <p>Empowering Industries with Advanced Solutions</p>
        </div>
      </section>

      {/* About Subsidiary */}
      <section className="about-subsidiary">
        <div className="content">
          <h2>About Our Subsidiary</h2>
          <p>
            Our subsidiary specializes in delivering cutting-edge technologies
            and services to a diverse range of industries. With a focus on
            innovation and sustainability, we aim to redefine the way businesses
            operate, ensuring unparalleled quality and reliability in everything
            we do.
          </p>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="achievements">
        <h2>Key Achievements</h2>
        <div className="achievements-grid">
          <div className="achievement">
            <h3>Global Expansion</h3>
            <p>Established a global presence across 10+ countries.</p>
          </div>
          <div className="achievement">
            <h3>Innovative Products</h3>
            <p>
              Launched industry-leading solutions in automation and technology.
            </p>
          </div>
          <div className="achievement">
            <h3>Customer Satisfaction</h3>
            <p>
              Maintained a 98% customer satisfaction rate over the past 3 years.
            </p>
          </div>
          <div className="achievement">
            <h3>Awards & Recognition</h3>
            <p>
              Recipient of multiple awards for excellence and innovation in
              technology.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta">
        <h2>Partner with Us</h2>
        <p>
          Explore how our subsidiary can help transform your business and
          achieve success in your industry.
        </p>
        <button className="cta-button">Contact Us</button>
      </section>
    </main>
  )
}

export default Oursubsidiary
