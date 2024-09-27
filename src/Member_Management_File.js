import React, { Component } from 'react'
import member_Management_img from './Images/member_Management_img.webp';
import mainImage from './Images/mainimage.avif';
import {Link,useLocation} from 'react-router-dom'
const Member_Management_File = () => {
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
          <h1>Member Management</h1>
          <p>
            HOME - <span className="course-content">Member Management</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - Member Management
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={member_Management_img} alt="Java" />
          </div>
          <div className="serv-content-item">
  <h1>Member Management</h1>
  <p>
  Accend Systems Private Limited ' skilled team of subject matter experts manages the eligibility and enrollment process for our clients, including the verification and determination of each member's coverage specificity. Delegating this task to Accend Systems Private Limited allows your organization to free up resources and concentrate on core business functions that optimize internal operations
  </p>
  
  <ul>
         <li>If the member or dependents are covered by an active policy or plan</li>
         <li>If the member or dependents needs to be enrolled</li>
         <li>If the member and dependents’ opted coverage has a valid coverage period to enroll</li>
         <li>Switching over plans from the previous year and initiating the coverage under new plans</li>
         <li>Ensuring the correct PPO coverage is linked to each member in the case of commercial payers for small groups</li>
         <li>Making sure the defined stop loss coverages are linked to correct groups</li>
         <li>Capturing and checking the patient information against the eligibility database</li>
  </ul>
  </div>

        </div>
        <div className="service-list-items">
          <div className="servicesname">
            <h3>Healthcare Payer</h3>
          </div>
          <Link to="/medical_Coding_File" className='link'><p>Medical Coding Services</p></Link>
          <Link to="/claims_Managmenet_File" className='link'><p>Claims Management</p></Link>
          <Link to="/member_Management_File" className='link'><p style={getBackgroundStyle()}>Member Management</p></Link>
          <Link to="/network_Management_File" className='link'><p>Provider Network Data Management</p></Link>
          <Link to="/valuesServices_File" className='link'><p>Value Added Services</p></Link>
                   

        </div>
      </div>
    </div>
      </div>
    )
  }
export default Member_Management_File
