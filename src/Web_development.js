import React, { Component } from 'react'
import image1 from './Images/mainimage.avif';
import image2 from './Images/web-developmentimage.avif';
import {Link,useLocation} from 'react-router-dom'

const Web_development = () => {
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
    <div className="service-list">
      <div className="image-container">
        <img src={image1} alt="main-image" className="main-image" />
        <div className="mainservicecontent">
          <h1>Web Development</h1>
          <p>
            HOME - <span className="course-content">Web Development</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - Web Development
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={image2} alt="web-development" />
          </div>
          <div className="serv-content-item">
            <h1>Web Development</h1>
            <h6>Business analysis</h6>
            <p>
              Our business analysts focus on the needs of your target audience to perform requirements engineering and outline the scope of the solution. They also bridge the gap between business stakeholders and an IT team to keep all the involved parties aligned.
            </p>
            <h6>Front-end design and development</h6>
            <p>
              Our web designers closely analyze the user audience to understand their needs and reflect these findings in UI design. Having agreed on the look and feel of a web app with project stakeholders, we bring it to life with front-end coding.
            </p>
            <h6>Back-end development</h6>
            <p>
              Our developers accurately implement the business logic of your web app on the back end. We rely on proven frameworks to ensure fast and quality coding.
            </p>
            <h6>Integration</h6>
            <p>
              We set up APIs to integrate your web app with corporate or third-party systems and services. App integration ensures immediate data synchronization across systems.
            </p>
          </div>
        </div>
        <div className="service-list-items">
          <div className="servicesname">
            <h3>Services</h3>
          </div>
          <Link to="/web_development" className='link serviceitems'><p style={getBackgroundStyle()}>Web Development</p></Link>
          <Link to="/managed_it_Services" className='link serviceitems'><p>Managed IT Services</p></Link>
          <Link to="/it_Consultancy" className='link serviceitems'><p>IT Consultancy</p></Link>
          <Link to="/cloud_Services" className='link serviceitems'><p>Cloud Services</p></Link>
          <Link to="/cyber_Security" className='link serviceitems'><p>Cyber Security</p></Link>
          <Link to="/software_development" className='link serviceitems'><p>Software Development</p></Link>
  </div>
      </div>
    </div>
        )
}
export default Web_development
