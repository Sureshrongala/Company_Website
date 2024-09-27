import React, { Component } from 'react'
import image1 from './Images/mainimage.avif'
import image2 from './Images/Software-Development.jpg'
import {Link,useLocation} from 'react-router-dom'
const  Software_development = () => {
  const location = useLocation();


  const getBackgroundStyle = () => {
    const blueBgRoutes = [
      '/web_development',
      '/managed_it_Services',
      '/it_Consultancy',
      '/cloud_Services',
      '/cyber_Security',
      '/software_development',
    ];
    return blueBgRoutes.includes(location.pathname) ? { backgroundColor: 'orangered',color:'white' } : {};
  };
    
    return (
      <div>
       <div className="service-list">
      <div className="image-container">
        <img src={image1} alt="main-image" className="main-image" />
        <div className="mainservicecontent">
          <h1>Software Development</h1>
          <p>
            HOME - <span className="course-content">Software Development</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - Software Development
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={image2} alt="web-development" />
          </div>
          <div className="serv-content-item">
            <h1>Software Development</h1>
            <p>
              We provide custom software application development services to our customers based on their requirements. Through our software development solutions we have automated all our clients' businesses. The companies are shifting towards custom software solutions from general solutions. This is because custom software applications help in finding the right solutions for specific requirements. Moreover, custom software can be installed easily on any platform along with the central working model. It brings out better revenue and profit.
            </p>
            <p>
              We provide a wide range of software development services; some of our services are: Enterprise Applications, Client Server Applications, multi-tier applications, Browser-based applications, and Distributed Applications.
            </p>
          </div>
        </div>
        <div className="service-list-items">
          <div className="servicesname">
            <h3>Services</h3>
          </div>
          <Link to="/web_development" className='link serviceitems'><p>Web Development</p></Link>
                    <Link to="/managed_it_Services" className='link serviceitems'><p>Managed IT Services</p></Link>
                    <Link to="/it_Consultancy" className='link serviceitems'><p>IT Consultancy</p></Link>
                    <Link to="/cloud_Services" className='link serviceitems'><p>Cloud Services</p></Link>
                    <Link to="/cyber_Security" className='link serviceitems'><p>Cyber Security</p></Link>
                    <Link to="/software_development" className='link serviceitems'><p style={getBackgroundStyle()}>Software Development</p></Link>
        </div>
      </div>
    </div>
      </div>
    )
  
}
export default Software_development;