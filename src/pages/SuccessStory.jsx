import React from "react"
import "./SuccessStory.css"

const SuccessStory = () => {
  const stories = [
    {
      title: "Empowering Manufacturing Excellence",
      description:
        "How TechCorp boosted production efficiency by 40% with cutting-edge automation solutions.",
      image: "https://via.placeholder.com/500x300",
    },
    {
      title: "Sustainable Innovation in Action",
      description:
        "Discover how GreenIndustries reduced waste by 25% through advanced dispensing technologies.",
      image: "https://via.placeholder.com/500x300",
    },
    {
      title: "Revolutionizing Robotics",
      description:
        "Explore how RoboSystems implemented AI-driven robotics for unmatched precision.",
      image: "https://via.placeholder.com/500x300",
    },
    {
      title: "Seamless Integration of Automation",
      description:
        "How AutoFlow streamlined complex workflows and reduced operational costs.",
      image: "https://via.placeholder.com/500x300",
    },
  ]

  return (
    <div className="success-page">
      {/* Hero Section */}
      <section className="success-hero">
        <div className="hero-content">
          <h1 className="hero-title">Our Success Stories</h1>
          <p className="hero-description">
            Witness how we empower businesses worldwide with innovative
            solutions that deliver tangible results.
          </p>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="success-stories">
        {stories.map((story, index) => (
          <div key={index} className="story-card">
            <img src={story.image} alt={story.title} className="story-image" />
            <div className="story-content">
              <h3 className="story-title">{story.title}</h3>
              <p className="story-description">{story.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Call-to-Action */}
      <section className="success-cta">
        <h2 className="cta-title">Ready to Start Your Success Story?</h2>
        <p className="cta-description">
          Contact us today to learn how we can help transform your business.
        </p>
        <button className="cta-button">Get in Touch</button>
      </section>
    </div>
  )
}

export default SuccessStory
