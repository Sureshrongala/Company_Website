import React, { Component } from 'react'
import Claims_management from './Images/Claims_management.jpg';
import mainImage from './Images/mainimage.avif';
import {Link,useLocation} from 'react-router-dom'
const Claims_Management_File = () => {
  const location = useLocation();


  const getBackgroundStyle = () => {
    const blueBgRoutes = [
      '/medical_Coding_File',
      '/claims_Managmenet_File',
      '/member_Management_File',
      '/network_Management_File',
      '/valuesServices_File',
      
    ];
    return blueBgRoutes.includes(location.pathname) ? { backgroundColor: 'orangered',color:'white' } : {};
  };
    return (
      <div>
        <div className="service-list">
      <div className="image-container">
        <img src={mainImage} alt="main image" className="main-image" />
        <div className="mainservicecontent">
          <h1>Claims Management</h1>
          <p>
            HOME - <span className="course-content">Claims Management</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - Claims Management
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={Claims_management} alt="Java" />
          </div>
          <div className="serv-content-item">
  <h1>Claims Management</h1>
  <p>
  Accend Systems Private Limited specializes in process improvement to enhance revenue and streamline operations. For payers, our claims BPM and KPM services lead to significant reductions in cost and TAT (turnaround time) through integrated process redesign and technological innovations. Our paper to EDI conversion, combined with repricing and our rule-based auto adjudication support services, help payer clients further cut down on costs.
  </p>
  <p>
  Maximizing accuracy at every point in the claims payment process is essential if payers are to compete. Our deep understanding and evaluation methodology of medical claims and contracts enable payers to save money through the identification of overpaid claims. By utilizing our payer assistance services, Accend Systems Private Limited is able to enhance accuracy and drive revenue for our clients.
  </p>
  
  <ul>
        <li>Claims Conversion</li>
        <li>Claims Adjudication Support</li>
        <li>Pre-Adjudication Support</li>
        <li>Claims Repricing</li>
        <li>EDI 5010</li>
  </ul>
  </div>

        </div>
        <div className="service-list-items">
          <div className="servicesname">
            <h3>Healthcare Payer</h3>
          </div>
          <Link to="/medical_Coding_File" className='link'><p>Medical Coding Services</p></Link>
          <Link to="/claims_Managmenet_File" className='link'><p style={getBackgroundStyle()}>Claims Management</p></Link>
          <Link to="/member_Management_File" className='link'><p>Member Management</p></Link>
          <Link to="/network_Management_File" className='link'><p>Provider Network Data Management</p></Link>
          <Link to="/valuesServices_File" className='link'><p>Value Added Services</p></Link>
                   

        </div>
      </div>
    </div>
      </div>
    )
  }
export default Claims_Management_File
