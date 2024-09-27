import React, { Component } from 'react'
import AngularImage from './Images/Home-Techno-angular.jpg';
import mainImage from './Images/mainimage.avif';
import {Link,useLocation} from 'react-router-dom'
const Angular_File = () => {
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
          <h1>Angular</h1>
          <p>
            HOME - <span className="course-content">Angular</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - Angular
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={AngularImage} alt="Java" />
          </div>
          <div className="serv-content-item">
  <h1>Angular</h1>
  <p>
  Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications. A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more.
  </p>
  <p>
  describe(string, function) functions take a title and a function containing one or more specs and are also known as a suite or test suite. it(string, function) functions take a title and a function containing one or more expectations and are also known as specs. expect(actual) functions take a value, called an actual.
  </p>
  <p>
  Angular is an open-source, JavaScript framework written in TypeScript. Google maintains it, and its primary purpose is to develop single-page applications. As a framework, Angular has clear advantages while also providing a standard structure for developers to work with.
  </p>
</div>

        </div>
        <div className="service-list-items">
          <div className="servicesname">
            <h3>Technologies</h3>
          </div>
          <Link to="/java_File" className='link serviceitems'><p>Java</p></Link>
                    <Link to="/react_File" className='link serviceitems'><p>React</p></Link>
                    <Link to="/angular_File" className='link serviceitems'><p style={getBackgroundStyle()}>Angular</p></Link>
                    <Link to="/kotlin_File" className='link serviceitems'><p>Kotlin</p></Link>
                    <Link to="/sap_File" className='link serviceitems'><p>SAP</p></Link>
                    <Link to="/python_File" className='link serviceitems'><p>Python</p></Link>

        </div>
      </div>
    </div>
      </div>
    )
  }
export default Angular_File
