import mainImage from './Images/mainimage.avif';
import itConsultancyImage from './Images/it-consultancy.jpg';
import React from 'react';
import {Link,useLocation} from 'react-router-dom'
const It_Consultancy = () => {
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
    <img src={mainImage} alt="main image" className="main-image" />
    <div className="mainservicecontent">
      <h1>IT Consultancy</h1>
      <p>
        HOME - <span className="course-content">IT Consultancy</span>
      </p>
    </div>
    <div className="mainserviceimage">
      <p>
      <Link to="/home" className='link homeanchor'>HOME</Link> - IT Consultancy
      </p>
    </div>
  </div>
  <div className="serice-content">
    <div className="service-content-div">
      <div className="web-image">
        <img src={itConsultancyImage} alt="web development" />
      </div>
      <div className="serv-content-item">
        <h1>IT Consultancy</h1>
        <p>
          An IT consultant is an experienced individual who provides expert
          advice for a fee. Such an individual may work as an independent
          contractor, in which case he or she may be referred to as an
          independent consultant.
        </p>
        <p>
          An IT consultant may also be an employee at a company that offers
          consulting services. IT consultants typically charge clients an hourly
          rate for their services.
        </p>
        <p>
          IT consulting services are advisory services that help clients assess
          different technology strategies and, in doing so, align their
          technology strategies with their business or process strategies. These
          services support customers’ IT initiatives by providing strategic,
          architectural, operational and implementation planning.
        </p>
        <p>
          Strategic planning includes advisory services that help clients assess
          their IT needs and formulate system implementation plans. Architecture
          planning includes advisory services that combine strategic plans and
          knowledge of emerging technologies to create the logical design of the
          system and the supporting infrastructure to meet customer
          requirements.
        </p>
      </div>
    </div>
    <div className="service-list-items">
      <div className="servicesname">
        <h3>Services</h3>
      </div>
      <Link to="/web_development" className='link serviceitems'><p>Web Development</p></Link>
                    <Link to="/managed_it_Services" className='link serviceitems'><p>Managed IT Services</p></Link>
                    <Link to="/it_Consultancy" className='link serviceitems'><p style={getBackgroundStyle()}>IT Consultancy</p></Link>
                    <Link to="/cloud_Services" className='link serviceitems'><p>Cloud Services</p></Link>
                    <Link to="/cyber_Security" className='link serviceitems'><p>Cyber Security</p></Link>
                    <Link to="/software_development" className='link serviceitems'><p>Software Development</p></Link>
    </div>
  </div>
</div>
  );
};

export default It_Consultancy;
