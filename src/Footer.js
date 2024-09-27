import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Footer extends Component {
  render() {
    return (
      <div>
                                {/* Footer */}
<div className='Footer_home'>
   <div className='footer-comnpany'>
     <h3>Spy D Technology</h3>
     <p>Spy D Technology, a leading IT service provider in India is proficient in simplifying the client demands with sustainable and personalized IT solutions globally</p>
     <i class="bi bi-facebook"></i><i class="bi bi-whatsapp"></i><i class="bi bi-instagram"></i><i class="bi bi-youtube"></i>
  </div>  
  
  <div className='footer-List'>
    <h3>Services</h3>
    <Link to="/web_development" className='link' ><p className='list-para-footer'>Web Development</p></Link>
    <Link to="/managed_it_Services" className='link'><p className='list-para-footer'>Managed IT Services</p></Link>
    <Link to="/it_Consultancy" className='link'><p className='list-para-footer'>IT Consultancy</p></Link>
    <Link to="/cloud_Services" className='link'><p className='list-para-footer'>Cloud Services</p></Link>
    <Link to="/cyber_Security" className='link'><p className='list-para-footer'>Cyber Security</p></Link>
    <Link to="/software_development" className='link'><p className='list-para-footer'>Software Development</p></Link>
  </div>
  <div className='footer-List '>
    <h3>Technologies</h3>
    <Link to="/java_File" className='link'><p className='list-para-footer'>Java</p></Link>
    <Link to="/react_File" className='link'><p className='list-para-footer'>React</p></Link>
    <Link to="/angular_File" className='link'><p className='list-para-footer'>Angular</p></Link>
    <Link to="/kotlin_File" className='link'><p className='list-para-footer'>Kotlin</p></Link>
    <Link to="/sap_File" className='link'><p className='list-para-footer'>SAP</p></Link>
    <Link to="/python_File" className='link'><p className='list-para-footer'>Python</p></Link>
  </div>
 
  <div className='footer-List'>
    <h3>Get In Touch</h3>
    <h5>Contacts</h5>
    <p>1234567</p>
    <p>hr@SpyDtech</p>
    <h5>Location</h5>
    <p>Madhapur, Hyderabad</p>
    
  </div>
</div>     
<footer className="footer-section">
          <div className="footer-content">
            <p>© 2024 Spy D Tech. All rights reserved.</p>
          </div>
</footer>

</div>
    )
  }
}
