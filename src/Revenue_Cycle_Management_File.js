import React, { Component } from 'react'
import Revenue_cycle_image from './Images/Revenue_cycle_image.jpg';
import mainImage from './Images/mainimage.avif';
import {Link,useLocation} from 'react-router-dom'
const Revenue_Cycle_Management_File = () => {
  const location = useLocation();


  const getBackgroundStyle = () => {
    const blueBgRoutes = [
      '/revenue_Cycle_File',
      '/coding_Health_File',
      
    ];
    return blueBgRoutes.includes(location.pathname) ? { backgroundColor: 'orangered',color:'white' } : {};
  };
    return (
      <div>
        <div className="service-list">
      <div className="image-container">
        <img src={mainImage} alt="main image" className="main-image" />
        <div className="mainservicecontent">
          <h1>Revenue Cycle Management</h1>
          <p>
            HOME - <span className="course-content">Revenue Cycle Management</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - Revenue Cycle Management
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={Revenue_cycle_image} alt="Java" />
          </div>
          <div className="serv-content-item">
  <h1>Revenue Cycle Management</h1>
  <p>
  Accend Systems Private Limited provides a full suite of end-to-end revenue cycle management services for hospitals, professional billing, and ambulatory surgery centers. Utilizing our deep knowledge of best practices in revenue cycle management, we deliver high-quality and cost-effective solutions for our clients. Our highly specialized teams work to streamline operations, decrease insurance claim denials and maximize revenue while maintaining compliance with industry regulations. With turnaround times between 24-48 hours, our clients are assured of accurate, timely, and balanced results
  </p>
  <p>
  With a powerful blend of people, processes, and technology-enabled solutions, combined with an undying commitment to our clients, we provide the necessary tools that give your organization an edge over the competition
  </p>
  <h3>Offering customized revenue cycle solutions tailored to each client</h3>
  <ul>
         <li>Credentialing</li>
         <li>Scheduling & pre-registration</li>
         <li>Eligibility & benefit verification</li>
         <li>Patient demographic entry</li>
         <li>Prior authorization services & automation</li>
         <li>Transcription</li>
         <li>Medical coding</li>
         <li>Charge entry</li>
         <li>Claims edits</li>
         <li>Claims rejection management</li>
         <li>Payment posting</li>
         <li>Credit balance review</li>
         <li>Correspondence & denial management</li>
         <li>Robotic Process Automation (RPA)</li>
         <li>Risk adjustment management</li>
         <li>RAPS to EDPS conversion</li>
         <li>Charge capture optimization</li>
         <li>Coding audits</li>
         <li>Clinical documentation improvement</li>
         <li>Clinical abstraction</li>
         <li>Consulting services</li>
  </ul>
  </div>

        </div>
        <div className="service-list-items">
          <div className="servicesname">
            <h3>Healthcare Provider</h3>
          </div>
          <Link to="/revenue_Cycle_File" className='link'><p style={getBackgroundStyle()}>Revenue Cycle Management</p></Link>
          <Link to="/coding_Health_File" className='link'><p>Coding / Health Information Management (HIM)</p></Link>
                   

        </div>
      </div>
    </div>
      </div>
    )
  }
export default Revenue_Cycle_Management_File
