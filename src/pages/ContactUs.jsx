import React from "react"
import { motion } from "framer-motion"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
// import "./ContactUs.css"

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <header className="header-section">
        <div className="header-container">
          <h1>Contact Us</h1>
          <p>Home &gt; Contact Us</p>
        </div>
      </header>

      {/* Main Section */}
      <main className="main-container">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-info"
        >
          <h2>Get in touch</h2>
          <div className="contact-details">
            <div>
              <h3>Corporate Office</h3>
              <p>
                Reliance Industries Limited Maker Chambers IV, Nariman Point
                Mumbai 400 021, India
              </p>
              <p>Email: info@ril.com</p>
              <p>Phone: +91-22-3555-5000</p>
            </div>

            {/* Social Media */}
            <div className="social-links">
              <h3>Socialize with us</h3>
              <div className="social-icons">
                <FaFacebook size={24} />
                <FaTwitter size={24} />
                <FaInstagram size={24} />
                <FaLinkedin size={24} />
                <FaYoutube size={24} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="contact-form"
        >
          <h2>Send us a message</h2>
          <form>
            <div className="form-row">
              <div>
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div>
                <label>Last Name</label>
                <input type="text" placeholder="Doe" />
              </div>
            </div>
            <div className="form-row">
              <div>
                <label>Email</label>
                <input type="email" placeholder="example@mail.com" />
              </div>
              <div>
                <label>Phone</label>
                <input type="tel" placeholder="+91-1234567890" />
              </div>
            </div>
            <div>
              <label>Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </motion.div>
      </main>

      {/* Map Section */}
      <section className="map-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="map-container"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8698314987333!2d72.82318871512491!3d19.041497087103235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9924c2c7b3d%3A0xdf1a1b45644b7d39!2sReliance%20Industries%20Ltd.!5e0!3m2!1sen!2sin!4v1618818253606!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </section>
    </div>
  )
}

export default ContactUs
