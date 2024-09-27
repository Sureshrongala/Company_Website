import React, { Component } from 'react'
import Coding_Health_Manga_Image from './Images/Coding_Health_Manga_Image.png';
import mainImage from './Images/mainimage.avif';
import {Link,useLocation} from 'react-router-dom'
const Coding_Health_Management_File = () => {
  const location = useLocation();


  const getBackgroundStyle = () => {
    const blueBgRoutes = [
      '/revenue_Cycle_File',
      '/coding_Health_File',
      
    ];
    return blueBgRoutes.includes(location.pathname) ? { backgroundColor: 'orangered',color:'white' } : {};
  };
    return (
      <div>
        <div className="service-list">
      <div className="image-container">
        <img src={mainImage} alt="main image" className="main-image" />
        <div className="mainservicecontent">
          <h1>Coding / Health Information Management (HIM)</h1>
          <p>
            HOME - <span className="course-content">Coding / Health Information Management (HIM)</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - Coding / Health Information Management (HIM)
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={Coding_Health_Manga_Image} alt="Java" />
          </div>
          <div className="serv-content-item">
  <h1>Coding / Health Information Management (HIM)</h1>
  <p>
  Compliant medical coding must be accompanied by fair and optimum rendered service payments. With the volatile regulatory market, emerging shifts in care based models, a shifting self-pay patient base, and increasingly complex requirements of federal audits, the stakes have never been higher
  </p>
  <p>
  Our specialized coding expertise optimizes our client accuracy rates, turnaround times, productivity and need for flexibility. Within a regulated, HIPAA compliant environment, Accend Systems Private Limited delivers extraordinary coding results, in a value-effective manner.
  </p>
  <p>Accend Systems Private Limited owns and runs a University-based coding school based upon AHIMA and AAPC standards. Coders train on ICD 10-CM, ICD-10-PCS, CPT, HCPCS, National Correct Coding Initiative policies, and payer-specific billing rules</p>
  <p>Our specialized coding services can be packaged in our end-to-end Revenue Cycle Management offering or as a standalone service.</p>

  <h3>We follow these processes to accomplish quality-driven results for our clients</h3>
  <ul>
       <li>Hiring and development of industry-best coders</li>
       <li>Sponsoring of coders' AHIMA or AAPC certifications</li>
       <li>Growth and development of a team entirely trained in medical, nursing, para-medical and life sciences</li>
       <li>Investing in teams of clinicians and nurses for DRG validation and HEDIS</li>
       <li>Utilizing proven multi-step quality assurance processes</li>
       <li>Utilizing process improvement tools like HKPD (Hoshin Kanri Policy Deployment) and Six Sigma</li>
       <li>Experience with numerous HIS and coding systems, including EPIC, Cerner, Siemens, MEDITECH, 3M, Sorian, Optum and eClinicalWorks</li>
       <li>Producing one of the lowest employee turnover rates in the industry due to investments in our Accend Systems Private Limited team</li>
       <li>Millions of charts coded/reviewed every year for acute care hospitals, academic hospitals, urgent cares, physician groups ACOs, and payers</li>
  </ul>
  </div>

        </div>
        <div className="service-list-items">
          <div className="servicesname">
            <h3>Healthcare Provider</h3>
          </div>
          <Link to="/revenue_Cycle_File" className='link'><p>Revenue Cycle Management</p></Link>
          <Link to="/coding_Health_File" className='link'><p style={getBackgroundStyle()}>Coding / Health Information Management (HIM)</p></Link>
        

        </div>
      </div>
    </div>
      </div>
    )
  }
export default Coding_Health_Management_File
