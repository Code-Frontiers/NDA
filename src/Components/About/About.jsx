import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        {/* <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/> */}
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>New Dispensing Automation Private Limited</h2>
        <p>Started on November 2020 based in New Delhi, India. Having a vast experience in Liquid handling such as, Single part Dispensing, Two-part Meter Mix Dispensing, UV Adhesive Dispensing & Curing, Hotmelt Dispensing and relevant Dispensing Equipment’s Automations. We provide complete solutions for all types of Adhesives, Sealants, Chemicals, Lubricants Dispensing under one roof to various industries like Automotive, Electronics, Healthcare, Aerospace, Defense Industries and Research Organizations.</p>
        <p>New Dispensing Automation, believes in Quality, Innovation & Sustainability are the key principles of our long-term success. Our organization attract and retain high quality employees that are motivated to contribute to the growth of our business. Our extensive experience, puts us in an ideal position to help customers to achieve the industrial efficiency they are seeking, minimizing costs while respecting the quality of the products.</p>
      </div>
    </div>
  )
}

export default About
