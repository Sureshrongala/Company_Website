import React, { Component } from 'react'
import mainImage from './Images/mainimage.avif';
import {Link} from 'react-router-dom'
export default class About_Us extends Component {
  render() {
    return (
      <div>
        <div className="service-list">
        <div className="image-container">
          <img src={mainImage} alt="main-image" className="main-image" />
          <div className="mainservicecontent">
            <h1>About Us</h1>
            <p>
              HOME - <span className="course-content">About Us</span>
            </p>
          </div>
          <div className="mainserviceimage">
            <p>
            <Link to="/home" className='link homeanchor'>HOME</Link> -  About Us
            </p>
          </div>
        </div>
        <div className="serice-content">
          <div className="service-content-div">
            
            <div className="serv-content-item">
              <h1>Spy D Technology</h1>
              <p>
              Spy D Technology, a leading IT service provider in India is proficient in simplifying the client demands with sustainable and personalized IT solutions globally. Spy D Technology is a global company specializing in software product and technology. Spy D Technology offers customized software product and IT services
              </p>
              <h5>Consult Our Experts</h5>
              <p>
              Discuss your project requirements with Chetu's experts and they will match your software needs with vetted developers selected for their specialized technology and industry experience
              </p>
              <h5>Build Your Team</h5>
              <p>
              Hire one or more of our dedicated developers and receive a full array of benefits including built-in QA and on-time, on-budget project management.
              </p>
              <h5>Own Your Code</h5>
              <p>
              Once we complete your project to your exact specifications we release your proprietary source code and intellectual property with no licensing, no fees, and no hassles.
              </p>
              
              
            </div>
          </div>
         
        </div>
      </div>
      </div>
    )
  }
}
