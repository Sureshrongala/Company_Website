import React, { Component } from 'react'
import ReactImage from './Images/Home-Techno-react.jpg';
import mainImage from './Images/mainimage.avif';
import {Link,useLocation} from 'react-router-dom'
const React_File = () => {
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
          <h1>React</h1>
          <p>
            HOME - <span className="course-content">React</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - React
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={ReactImage} alt="Java" />
          </div>
          <div className="serv-content-item">
  <h1>React</h1>
  <p>
    We collaborate with exceptionally talented React developers who are dedicated to meeting your complex requirements efficiently and effectively. Our team possesses deep expertise in React, enabling them to build dynamic, high-performance user interfaces that enhance user experience and engagement.
  </p>
  <p>
    Our React developers are well-versed in the latest industry practices, ensuring that they provide solutions that seamlessly integrate with your existing frameworks. They are committed to delivering outstanding React development services that can transform your business into a modern, responsive, and automated platform.
  </p>
  <p>
    This service includes building intuitive single-page applications (SPAs) that allow for smooth navigation and instant user feedback. With React’s component-based architecture, we can create reusable UI components that make development more efficient and scalable, ultimately providing a fantastic experience for your end-users.
  </p>
</div>

        </div>
        <div className="service-list-items">
          <div className="servicesname">
            <h3>Technologies</h3>
          </div>
          <Link to="/java_File" className='link serviceitems'><p>Java</p></Link>
                    <Link to="/react_File" className='link serviceitems'><p style={getBackgroundStyle()}>React</p></Link>
                    <Link to="/angular_File" className='link serviceitems'><p>Angular</p></Link>
                    <Link to="/kotlin_File" className='link serviceitems'><p>Kotlin</p></Link>
                    <Link to="/sap_File" className='link serviceitems'><p>SAP</p></Link>
                    <Link to="/python_File" className='link serviceitems'><p>Python</p></Link>

        </div>
      </div>
    </div>
      </div>
    )
  }
export default React_File
