import React, { Component } from 'react'
import mainImage from './Images/mainimage.avif';
import {Link} from 'react-router-dom'
export default class Contact_Us extends Component {
  render() {
    return (
      <div>
        <div className="service-list">
      <div className="image-container">
        <img src={mainImage} alt="main image" className="main-image" />
        <div className="mainservicecontent">
          <h1>Contact Us</h1>
          <p>
            HOME - <span className="course-content">Contact Us</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - Contact Us
          </p>
        </div>
      </div>
      <div className="map-container">
   <form className="contact-form">
    <h1>Get In Touch</h1>
  <label htmlFor="name">Name:</label>
  <input type="text" id="name" name="name" placeholder="Enter your name" required />

  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="Enter your email" required />

  <label htmlFor="message">Message:</label>
  <textarea id="message" name="message" placeholder="Enter your message" required></textarea>

  <button type="submit">Send Message</button>
</form>

    <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4955379986337!2d77.6367088153322!3d12.926496420880067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badf4d1a2e84c9f%3A0x42998b5e75b95f76!2sSPY%20D%20TECHNOLOGY%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1633736358444!5m2!1sen!2sin"
    width="600" 
    height="450" 
    allowFullScreen="" 
    style={{ border: 0 }}
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    title="Spy D Technology"
  ></iframe>
</div>

      
    </div>
      </div>
    )
  }
}
