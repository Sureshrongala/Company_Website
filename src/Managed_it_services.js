import React from 'react';
import mainImage from './Images/mainimage.avif';
import managedITImage from './Images/Managed_It_Services.avif';
import {Link,useLocation} from 'react-router-dom'

const Managed_it_Services = () => {
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
                    <h1>Managed IT Services</h1>
                    <p>HOME - <span className="course-content">Managed IT Services</span></p>
                </div>
                <div className="mainserviceimage">
                    <p><Link to="/home" className='link homeanchor'>HOME</Link> - Managed IT Services</p>
                </div>
            </div>
            <div className="serice-content">
                <div className="service-content-div">
                    <div className="web-image">
                        <img src={managedITImage} alt="web-development" className='navbar-list-images'/>
                    </div>
                    <div className="serv-content-item">
                        <h1>Managed IT Services</h1>
                        <p>Managed IT services offer a wide range of remote Accend Systems Private Limited , with responsibilities ranging from specific on-demand response to 24/7/365 coverage of IT duties. Organizations can leverage managed IT to reduce in-house IT workload or fill gaps left by existing IT roles and skills. These services are provided for on-premises IT, as well as for private cloud storage.</p>
                        <p>Managed IT service providers can reduce in-house overhead, increase IT efficiency, and improve uptime management. However, to ensure compliance with national and international regulatory entities, organizations should ensure that potential MSPs properly enforce data protection and privacy standards.</p>
                        <p>The third party that delivers services is called a managed service provider. A managed IT service provider is most often an IT service provider that manages and assumes responsibility for providing a defined set of business technology services to its clients, either proactively or as the MSP (not the client) determines that services are needed.</p>
                        <p>The managed service provider is responsible for the functionality of the service or equipment, managed under a service level agreement (SLA). The SLA will contain provisions for typical downtime, disaster recovery, technical support, and help desk operations. The customer receiving the service often pays a monthly subscription fee.</p>
                        <p>Organizations outsource the responsibility for maintaining—and anticipating the IT needs for—a range of processes and functions in order to improve operations, cut expenses, and streamline IT management.</p>
                    </div>
                </div>
                <div className="service-list-items">
                    <div className="servicesname">
                        <h3>Services</h3>
                    </div>
                    <Link to="/web_development" className='link serviceitems'><p>Web Development</p></Link>
                    <Link to="/managed_it_Services" className='link serviceitems'><p style={getBackgroundStyle()}>Managed IT Services</p></Link>
                    <Link to="/it_Consultancy" className='link serviceitems'><p>IT Consultancy</p></Link>
                    <Link to="/cloud_Services" className='link serviceitems'><p>Cloud Services</p></Link>
                    <Link to="/cyber_Security" className='link serviceitems'><p>Cyber Security</p></Link>
                    <Link to="/software_development" className='link serviceitems'><p>Software Development</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Managed_it_Services;
