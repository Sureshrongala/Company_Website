import React, { Component } from 'react'
import Network_data_Image from './Images/Network_data_Image.jpg';
import mainImage from './Images/mainimage.avif';
import {Link,useLocation} from 'react-router-dom'
const Network_Data_Management_File = () => {
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
          <h1>Provider Network Data Management</h1>
          <p>
            HOME - <span className="course-content">Provider Network Data Management</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - Provider Network Data Management
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={Network_data_Image} alt="Java" />
          </div>
          <div className="serv-content-item">
  <h1>Provider Network Data Management</h1>
  <p>
  Accend Systems Private Limited ’ provider data management solutions make it easy for healthcare organizations to manage provider data so they can boost the success of strategic patient access initiatives. Our revolutionary provider data management solutions result in more accurate data and reduced operational costs. We have a vast amount of experience in provider data management initiatives for large preferred provider organization (PPO) networks and numerous third-party administrators (TPAs)
  </p>
  
  <ul>
            <li>Contracting (provider build/setup and provider maintenance)</li>
            <li>Credentialing and recredentialing</li>
            <li>Managing provider information on claims</li>
            <li>Verifying the required data elements of each provider/group’s request’s receipt and matching these to the existing database</li>
            <li>Creating new records if the provider listed in a claim is not present in the client’s database</li>
            <li>Locating missing information, such as specialty and category, using the National Provider Identifier database</li>
            <li>Authenticating W9 forms received from providers and making any necessary updates in our clients’ systems</li>
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
          <Link to="/network_Management_File" className='link'><p style={getBackgroundStyle()}>Provider Network Data Management</p></Link>
          <Link to="/valuesServices_File" className='link'><p>Value Added Services</p></Link>
                   

        </div>
      </div>
    </div>
      </div>
    )
  }
export default Network_Data_Management_File
