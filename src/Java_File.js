import React, { Component } from 'react'
import JavaImage from './Images/Home-Techno-java.jpg';
import mainImage from './Images/mainimage.avif';
import {Link,useLocation} from 'react-router-dom'
const Java_File = () => {
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
          <h1>Java</h1>
          <p>
            HOME - <span className="course-content">Java</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - Java
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={JavaImage} alt="Java" />
          </div>
          <div className="serv-content-item">
            <h1>Java</h1>
            <p>
            We stand with profoundly talented java programmers that assist you in meeting your demanding requirements in the most profitable and proficient way, regardless of its complexity and challenges,The resources we offer you are progressively capable of understanding your business in deep, examine it, and offer Java development solutions that fit impeccably into its frameworks,Our resources are skilled enough in a way that they never fail to deliver you with outstanding java development services which thus can make your business an advanced and automated one,These resources make your project so demanding and powerful that you are given an opportunity to deliver a stunning customer experience to the end-users
            </p>
            <p>Our resources are onboarded by outperforming challenging rounds of interviews that seamlessly gets highlighted in the quality of work they build and deliver. We ensure that they meet your fantasy requirement in the most ideal manner</p>
            <p>This service offer convince of sending SMS to thousand of existing/potential customers, staffs, dealers/franchises etc. in a go to all over India. The service is very user friendly. One can send SMS to single or multi user with its own name i.e. with SENDER Name</p>
          </div>
        </div>
        <div className="service-list-items">
          <div className="servicesname">
            <h3>Technologies</h3>
          </div>
          <Link to="/java_File" className='link serviceitems'><p style={getBackgroundStyle()}>Java</p></Link>
                    <Link to="/react_File" className='link serviceitems'><p>React</p></Link>
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
export default Java_File
