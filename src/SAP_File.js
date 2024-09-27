import React, { Component } from 'react'
import SAPImage from './Images/Home-Techno-sap.jpg';
import mainImage from './Images/mainimage.avif';
import {Link,useLocation} from 'react-router-dom'
const SAP_File = () => {
  const location = useLocation();


  const getBackgroundStyle = () => {
    const blueBgRoutes = [
      '/java_File',
      '/react_File',
      '/angular_File',
      '/kotlin_File',
      '/sap_File',
      '/python_File',
    ];
    return blueBgRoutes.includes(location.pathname) ? { backgroundColor: 'orangered',color:'white' } : {};
  };
    return (
      <div>
        <div className="service-list">
      <div className="image-container">
        <img src={mainImage} alt="main image" className="main-image" />
        <div className="mainservicecontent">
          <h1>SAP</h1>
          <p>
            HOME - <span className="course-content">SAP</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - SAP
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={SAPImage} alt="Java" />
          </div>
          <div className="serv-content-item">
  <h1>SAP</h1>
  <p>
  Accend Systems Private Limited has team of SAP consultants who has exhaustive knowledge in SAP Services. We provide SAP consultancy to our clients to make their business works for them. Our experts are providing or suggesting the best SAP module that entirely matches with client business and their requirement.
  </p>
  <p>
  Accend Systems Private Limited also provide SAP integration services such as SAP Integration with iPhone Apps, Android Apps, iPad Apps, etc., Our consultation service also includes remote system monitoring, 24 / 7 voice and oral communication support, business analysis and concept analysis support.
  </p>
  </div>

        </div>
        <div className="service-list-items">
          <div className="servicesname">
            <h3>Technologies</h3>
          </div>
          <Link to="/java_File" className='link serviceitems'><p>Java</p></Link>
                    <Link to="/react_File" className='link serviceitems'><p>React</p></Link>
                    <Link to="/angular_File" className='link serviceitems'><p>Angular</p></Link>
                    <Link to="/kotlin_File" className='link serviceitems'><p>Kotlin</p></Link>
                    <Link to="/sap_File" className='link serviceitems'><p style={getBackgroundStyle()}>SAP</p></Link>
                    <Link to="/python_File" className='link serviceitems'><p>Python</p></Link>
        </div>
      </div>
    </div>
      </div>
    )
  }
export default SAP_File
