import React, { useState } from "react"
import Hero from "./Hero"
import AboutSection from "./AboutSection"
import OfferingSection from "./OfferingSection"
import Contact from "./Contact"
import VideoPlayer from "./VideoPlayer"
import Title from "../../components/title/Title"
import Services from "./Services"
import Testimonials from "./Testimonials"
import PortfolioSection from "./PortfolioSection"
const Home = () => {
  const [playState, setPlayState] = useState(false)

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
        <PortfolioSection />
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
      </div>
    </>
  )
}

export default Home
