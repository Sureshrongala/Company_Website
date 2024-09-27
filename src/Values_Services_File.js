import React, { Component } from 'react'
import Values_added_image from './Images/Values_added_image.png';
import mainImage from './Images/mainimage.avif';
import {Link,useLocation} from 'react-router-dom'
const Values_Services_File = () => {
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
          <h1>Value Added Services</h1>
          <p>
            HOME - <span className="course-content">Value Added Services</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - Value Added Services
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={Values_added_image} alt="Java" />
          </div>
          <div className="serv-content-item">
  <h1>Value Added Services</h1>
  <p>
  The health plan determines how every insurance claim processes. Accend Systems Private Limited supports plan builds and helps clients determine how everything is defined within the plan to ensure smooth a adjudication process
  </p>
  <p>Plan building is a critical function of the claims adjudication process. It tells the system how a claim should be processed and what benefits should be applied. Accend Systems Private Limited supports clients in building plans and helps with coding the benefits for all types of services defined in that plan.</p>
  <h3>Our plan building process includes:</h3>
  <ul>
       <li>Setting up lifetime maximum and annual maximums</li>
       <li>Creating benefit codes applicable to the plan</li>
       <li>Defining daily/monthly/yearly maximums</li>
       <li>Setting up copays for various services</li>
       <li>Defining coinsurance, deductibles, and out-of-pocket maximums</li>
       <li>Setting up copay, coinsurance, deductibles, and maximums for every service/benefit code</li>
       <li>Adding provider networks to the plan</li>
       <li>Testing the build</li>
       <li>Periodically renewing the service/benefit code in accordance with yearly changes</li>
  </ul>
  </div>

        </div>
        <div className="service-list-items">
          <div className="servicesname">
            <h3>Healthcare Payer</h3>
          </div>
          <Link to="/medical_Coding_File" className='link'><p>Medical Coding Services</p></Link>
          <Link to="/claims_Managmenet_File" className='link'><p>Claims Management</p></Link>
          <Link to="/member_Management_File" className='link'><p>Member Management</p></Link>
          <Link to="/network_Management_File" className='link'><p>Provider Network Data Management</p></Link>
          <Link to="/valuesServices_File" className='link'><p style={getBackgroundStyle()}>Value Added Services</p></Link>
                   

        </div>
      </div>
    </div>
      </div>
    )
  }
export default Values_Services_File
