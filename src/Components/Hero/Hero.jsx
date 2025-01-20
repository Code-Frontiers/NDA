import React from "react"
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>
          We deliver innovative dispensing solutions for a better tomorrow
        </h1>
        <p>
          Our cutting-edge dispensing solutions empower industries with
          efficiency, reliability, and unmatched quality
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Hero

// import React from 'react';
// import './Hero.css';
// import dark_arrow from '../../assets/dark-arrow.png';

// const Hero = () => {
//   return (
//     <div className='hero container'>
//       <video id="background-video" autoPlay loop muted>
//         <source src="../../assets/college-video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       <div className="hero-text">
//         <h1>We Ensure better education for a better world</h1>
//         <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>
//         <button className='btn'>
//           Explore more <img src={dark_arrow} alt="Arrow" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;
