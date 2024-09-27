import React, { Component } from 'react'
import PythonImage from './Images/Home-Techno-python.jpg';
import mainImage from './Images/mainimage.avif';
import {Link,useLocation} from 'react-router-dom'
const Python_File = () => {
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
          <h1>Python</h1>
          <p>
            HOME - <span className="course-content">Python</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - Python
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={PythonImage} alt="Java" />
          </div>
          <div className="serv-content-item">
  <h1>Python</h1>
  <p>
  From scraping to developing web application we use Python at core level. Our Major python skill includes Django which we delivered 40+ projects. We are passionate to share our python knowledge to open source community from GitHub and Meetups. We love to add our python skills to your idea. Hire our python and django development company to outsource your software projects,We build powerful web applications using Django for financial services, E-commerce, Travel, information & education industries.
  </p>
  <p>
  This open-source programming language utilizes a straightforward, yet, rich language structure, which makes it effortlessly decipherable. Python Development is one of the best and most effectively intelligible programming languages that can be clubbed effortlessly with other intense stages.
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
                    <Link to="/sap_File" className='link serviceitems'><p>SAP</p></Link>
                    <Link to="/python_File" className='link serviceitems'><p style={getBackgroundStyle()}>Python</p></Link>

        </div>
      </div>
    </div>
      </div>
    )
  }
export default Python_File
