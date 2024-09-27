import mainImage from './Images/mainimage.avif';
import cyberSecurityImage from './Images/cloud-service.png';
import {Link,useLocation} from 'react-router-dom'

const Cyber_Security = () => {
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
          <img src={mainImage} alt="main-image" className="main-image" />
          <div className="mainservicecontent">
            <h1>Cyber Security</h1>
            <p>
              HOME - <span className="course-content">Cyber Security</span>
            </p>
          </div>
          <div className="mainserviceimage">
            <p>
            <Link to="/home" className='link homeanchor'>HOME</Link> - Cyber Security
            </p>
          </div>
        </div>
        <div className="serice-content">
          <div className="service-content-div">
            <div className="web-image">
              <img src={cyberSecurityImage} alt="cyber-security" />
            </div>
            <div className="serv-content-item">
              <h1>Cyber Security</h1>
              <p>
                Cyber security is the application of technologies, processes, and
                controls to protect systems, networks, programs, devices, and data
                from cyber attacks. It aims to reduce the risk of cyber attacks
                and protect against the unauthorized exploitation of systems,
                networks, and technologies.
              </p>
              <p>
                Cyber security is the practice of defending computers, servers,
                mobile devices, electronic systems, networks, and data from
                malicious attacks. It's also known as information technology
                security or electronic information security.
              </p>
              <p>
                Network security is the practice of securing a computer network
                from intruders, whether targeted attackers or opportunistic
                malware.
              </p>
              <p>
                Application security focuses on keeping software and devices free
                of threats. A compromised application could provide access to the
                data it’s designed to protect.
              </p>
              <p>
                Information security protects the integrity and privacy of data,
                both in storage and in transit.
              </p>
              <p>
                Operational security includes the processes and decisions for
                handling and protecting data assets.
              </p>
              <p>
                Disaster recovery and business continuity define how an
                organization responds to a cyber-security incident.
              </p>
              <p>
                End-user education addresses the most unpredictable cyber-security
                factor: people. Teaching users good security practices is vital
                for the security of any organization.
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
                    <Link to="/cyber_Security" className='link serviceitems'><p style={getBackgroundStyle()}>Cyber Security</p></Link>
                    <Link to="/software_development" className='link serviceitems'><p>Software Development</p></Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cyber_Security;
  