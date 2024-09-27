import mainImage from './Images/mainimage.avif';
import cloudServiceImage from './Images/cloud-service.png';
import {Link,useLocation} from 'react-router-dom'
const Cloud_Services = () => {
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
          <h1>Cloud Services</h1>
          <p>
            HOME - <span className="course-content">Cloud Services</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - Cloud Services
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={cloudServiceImage} alt="cloud services" />
          </div>
          <div className="serv-content-item">
            <h1>Cloud Services</h1>
            <p>
              A large number of enterprises view Cloud as an effective way to
              transform their business for competitive advantage and improved
              customer engagement. Factors like speed, cost saving, and faster
              deployment are the most common drivers for cloud adoption.
              However, the success of cloud adoption primarily depends on an
              effective cloud strategy and migration methodology.
            </p>
            <h5>CLOUD ASSESSMENT AND STRATEGY CONSULTING</h5>
            <p>
              A software process, software lifecycle, or software development
              done in a planned structured manner is application development.
            </p>
            <h5>CLOUD PLATFORM BUILD AND MIGRATION</h5>
            <p>
              Accelerate time-to-value and ensure the least disruption, with a
              comprehensive business-centric approach.
            </p>
            <h5>CLOUD ENABLEMENT SERVICES</h5>
            <p>
              A unique client-centric approach, enabling clients to embrace
              cloud rapidly & efficiently.
            </p>
            <h5>CLOUD OPERATION AND MANAGEMENT SERVICES</h5>
            <p>
              Leverage a command-centric approach, powered by AI ops, to deliver
              noiseless and seamless operations to your customers.
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
                    <Link to="/cloud_Services" className='link serviceitems'><p style={getBackgroundStyle()}>Cloud Services</p></Link>
                    <Link to="/cyber_Security" className='link serviceitems'><p>Cyber Security</p></Link>
                    <Link to="/software_development" className='link serviceitems'><p>Software Development</p></Link>

        </div>
      </div>
    </div>
  );
};

export default Cloud_Services;
