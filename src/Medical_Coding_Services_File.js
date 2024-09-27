import React, { Component } from 'react'
import medical_Coding from './Images/medical_Coding.webp';
import mainImage from './Images/mainimage.avif';
import {Link,useLocation} from 'react-router-dom'
const Medical_Coding_Services_File  = () => {
  const location = useLocation();


  const getBackgroundStyle = () => {
    const blueBgRoutes = [
      '/medical_Coding_File',
      '/claims_Managmenet_File',
      '/member_Management_File',
      '/network_Management_File',
      '/valuesServices_File',
      
    ];
    return blueBgRoutes.includes(location.pathname) ? { backgroundColor: 'orangered',color:'white' } : {};
  };
    return (
      <div>
        <div className="service-list">
      <div className="image-container">
        <img src={mainImage} alt="main image" className="main-image" />
        <div className="mainservicecontent">
          <h1>Medical Coding Services</h1>
          <p>
            HOME - <span className="course-content">Medical Coding Services</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - Medical Coding Services
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={medical_Coding} alt="Java" />
          </div>
          <div className="serv-content-item">
  <h1>Medical Coding Services</h1>
  <p>
  With an ever-changing healthcare landscape and regulatory updates that occur almost daily, it is imperative to stay on top of all industry changes in order to maximize revenue and maintain compliance. Our AAPC and AHIMA certified coders are up-to-date with the latest industry changes, whether it is ICD10-CM, ICD-10-PCS, CPT, HCPCS or others, our deep and broad experience provides our clients with a team of medical coding experts who ensure that our clients are properly maximizing their revenue in a compliant and accurate fashion.
  </p>
  <p>
  Utilizing our thorough processes built upon the highest standards, you can expect comprehensive, efficient, and end-to-end risk adjustment coding services that will positively impact your healthcare organization
  </p>
  <h3>Our healthcare payer services encompass:</h3>
  <ul>
      <li>Hierarchical Condition Category (HCC) coding review</li>
      <li>Risk Adjustment Data Validation (RADV) audit support</li>
      <li>Risk Adjustment Factor (RAF) optimization</li>
      <li>Diagnosis Related Groupings (DRG) validation</li>
      <li>Payment integrity audits</li>
      <li>Correct coding audits based on NCCI principles(VA/VE)</li>
      <li>E/M level utilization and benchmarking</li>
      <li>Medical necessity audits</li>
      <li>Clinical reviews - Workers comp, auto no fault</li>
  </ul>
  </div>

        </div>
        <div className="service-list-items">
          <div className="servicesname">
            <h3>Healthcare Payer</h3>
          </div>
          <Link to="/medical_Coding_File" className='link'><p style={getBackgroundStyle()}>Medical Coding Services</p></Link>
          <Link to="/claims_Managmenet_File" className='link'><p>Claims Management</p></Link>
          <Link to="/member_Management_File" className='link'><p>Member Management</p></Link>
          <Link to="/network_Management_File" className='link'><p>Provider Network Data Management</p></Link>
          <Link to="/valuesServices_File" className='link'><p>Value Added Services</p></Link>
                   

        </div>
      </div>
    </div>
      </div>
    )
  }
export default Medical_Coding_Services_File
