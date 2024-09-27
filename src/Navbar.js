import React, { Component } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


class Navbar extends Component {
  state = {
    isServiceList: false,
    isTechnoloiesList: false,
    isHealthcareProvideList: false,
    isHealthCarePrayer: false,
    isServiceOpen: false,
    isTechnologyOpen:false,
    isHealthPoviderOpen:false,
    isHealthPayerOpen:false,

  };

  toggleServices = (listItem) => {
    this.setState({
      [listItem]: !this.state[listItem]

     
    });
    console.log({listItem});
  };

  toggleList = (listName) => {
    this.setState({ [listName]: !this.state[listName] });
  };
 
 componentDidMount(){
  window.addEventListener('scroll',this.handleScroll)
 }
 handleScroll=()=>{
  const headerHeight = document.querySelector('header').offsetHeight;
  const navbar = document.querySelector('.navbar')
  if(window.scrollY>headerHeight){
    navbar.style.position='fixed'
  }
  else{
    navbar.style.position='sticky'
  }
 }
  render() {
   
    const {
      isServiceList,
      isTechnoloiesList,
      isHealthcareProvideList,
      isHealthCarePrayer,
      isServiceOpen,
      isTechnologyOpen,
    isHealthPoviderOpen,
    isHealthPayerOpen,
    } = this.state;
    return (
      <div>
        <header className="bg-dark p-2">
          <div className="headercontainer">
            <div className="headercontent">
              <p>
                <i className="bi bi-envelope"></i>hr@SpyDtech
              </p>
              <p>
                <i className="bi bi-geo-alt"></i>Hyderabad
              </p>
              <p>
                <i className="bi bi-telephone-fill"></i>1234567890
              </p>
            </div>
            <div className="headericons">
              <p>
                <i className="bi bi-facebook"></i>
              </p>
              <p>
                <i className="bi bi-twitter"></i>
              </p>
              <p>
                <i className="bi bi-instagram"></i>
              </p>
              <p>
                <i className="bi bi-linkedin"></i>
              </p>
            </div>
          </div>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand ms-5" href="#">
              Spy D Tech
            </a>
            <button
              className="navbar-toggler"
              type="button"
               data-bs-toggle="offcanvas"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse ms-5">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to='/home' className='link'>
                  <a className="nav-link active" href="#">
                    Home
                  </a></Link>
                </li>
                <li className="nav-item">
                <Link to="/about_Us" className='link' ><a className="nav-link active" href="#">
                    About Us</a>
                  </Link>
                </li>
                {/* Services Dropdown */}
                <li
                  className="nav-item"
                  onMouseEnter={() => this.toggleList('isServiceList')}
                  onMouseLeave={() => {
                    if (this.state.isServiceList) {
                      this.toggleList('isServiceList');
                    }
                  }}
                >
                  <a className="nav-link active" href="#"  >
                    Services <i className="bi bi-chevron-down"></i>
                  </a>
                  <div className={`dropdown-list services-list ${isServiceList ? 'dropdown-visible' : ''}`} onClick={()=>this.toggleList('isServiceList')}>
                    <Link to="/web_development" className='link' replace><p>Web Development</p></Link>
                    <Link to="/managed_it_Services" className='link'><p>Managed It Services</p></Link>
                    <Link to="/it_Consultancy" className='link'><p>IT Consultancy</p></Link>
                    <Link to="/cloud_Services" className='link'><p>Cloud Services</p></Link>
                    <Link to="/cyber_Security" className='link'><p>Cyber Security</p></Link>
                    <Link to="/software_development" className='link'><p>Software Development</p></Link>
                  </div>
                </li>

                {/* Technologies Dropdown */}
                <li
                  className="nav-item"
                  onMouseEnter={() => this.toggleList('isTechnoloiesList')}
                  onMouseLeave={() =>{
                    if(this.state.isTechnoloiesList)
                    {
                      this.toggleList('isTechnoloiesList')
                    }
                  }}
                >
                  <a className="nav-link active" href="#">
                    Technologies <i className="bi bi-chevron-down"></i>
                  </a>
                  <div className={`dropdown-list technology-list ${isTechnoloiesList ? 'dropdown-visible' : ''}`} onClick={() => this.toggleList('isTechnoloiesList')}>
                  <Link to="/java_File" className='link' ><p>Java</p></Link>
                  <Link to="/react_File" className='link' ><p>React</p></Link>
                    <Link to="/angular_File" className='link' ><p>Angular</p></Link>
                    <Link to="/kotlin_File" className='link' ><p>Kotlin</p></Link>
                    <Link to="/sap_File" className='link' ><p>SAP</p></Link>
                    <Link to="/python_File" className='link' ><p>Python</p></Link>
                  </div>
                </li>

                {/* Healthcare Provider Dropdown */}
                <li
                  className="nav-item"
                  onMouseEnter={() => this.toggleList('isHealthcareProvideList')}
                  onMouseLeave={() => {
                    if(this.state.isHealthcareProvideList){
                      this.toggleList('isHealthcareProvideList')
                    }
                  }}
                >
                  <a className="nav-link active" href="#">
                    Healthcare Provider <i className="bi bi-chevron-down"></i>
                  </a>
                  <div className={`dropdown-list healthcare-provider-list ${isHealthcareProvideList ? 'dropdown-visible' : ''}`} onClick={() => this.toggleList('isHealthcareProvideList')}>
                    <Link to="/revenue_Cycle_File" className='link' ><p>Revenue Cycle Management</p></Link>
                    <Link to="/coding_Health_File" className='link' ><p>Coding / Health Information Management (HIM)</p></Link>
                  </div>
                </li>

                {/* Healthcare Prayer Dropdown */}
                <li
                  className="nav-item"
                  onMouseEnter={() => this.toggleList('isHealthCarePrayer')}
                  onMouseLeave={() => {
                    if(this.state.isHealthCarePrayer){
                      this.toggleList('isHealthCarePrayer')
                    }
                  }}
                >
                  <a className="nav-link active" href="#">
                    Healthcare Prayer <i className="bi bi-chevron-down"></i>
                  </a>
                  <div className={`dropdown-list healthcare-prayer-list ${isHealthCarePrayer ? 'dropdown-visible' : ''}`} onClick={() =>this.toggleList('isHealthCarePrayer')}>
                  <Link to="/medical_Coding_File" className='link' ><p>Medical Coding Services</p></Link>
                    <Link to="/claims_Managmenet_File" className='link' ><p>Claims Management</p></Link>
                    <Link to="/member_Management_File" className='link' ><p>Member Management</p></Link>
                    <Link to="/network_Management_File" className='link' ><p>Provider Network Data Management</p></Link>
                    <Link to="/valuesServices_File" className='link' ><p>Value Added Services</p></Link>
                  </div>
                </li>

                <li className="nav-item">
                <Link to="/contact_us" className='link' > <a className="nav-link active" href="#">
                    Contact Us
                  </a></Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarText" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Spy D Technology</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
               <li data-bs-dismiss="offcanvas">
                <Link to="/home" className='link' ><a href="#">Home</a></Link>
                </li>
                <li data-bs-dismiss="offcanvas">
                <Link to="/about_Us" className='link' ><a href="#">About Us</a></Link>
                </li>
                <li>
            <a href="#" className="navbar-toggler nav-barmobile-list" onClick={()=>this.toggleServices('isServiceOpen')}>
              Services <span><i className="bi bi-chevron-down"></i></span>
            </a>
            <ul className={`sub-menu ${this.state.isServiceOpen ? 'show' : ''}`} id='servicesnavbartext'>
              <li data-bs-dismiss="offcanvas">
                <Link to="/web_development" className='link'><p>Web Development</p></Link>
              </li>
              <li data-bs-dismiss="offcanvas">
                <Link to="/managed_it_Services" className='link'><p>Managed IT Services</p></Link>
              </li>
              <li data-bs-dismiss="offcanvas">
                <Link to="/it_Consultancy" className='link'><p>IT Consultancy</p></Link>
              </li>
              <li data-bs-dismiss="offcanvas">
                <Link to="/cloud_Services" className='link'><p>Cloud Services</p></Link>
              </li>
              <li data-bs-dismiss="offcanvas">
                <Link to="/cyber_Security" className='link'><p>Cyber Security</p></Link>
              </li>
              <li data-bs-dismiss="offcanvas">
                <Link to="/software_development" className='link'><p>Software Development</p></Link>
              </li>
            </ul>
          </li>
                          <li>
              
                  <a href="#" className="navbar-toggler nav-barmobile-list"
              onClick={()=>this.toggleServices('isTechnologyOpen')}>Technologies <span><i className="bi bi-chevron-down"></i></span></a>
                  
                  <ul className={`sub-menu ${this.state.isTechnologyOpen ? 'show' : ''}`} id='Technologynavbartext'>
                    <li data-bs-dismiss="offcanvas">
                  <Link to="/java_File" className='link' ><p>Java</p></Link>
                  </li>
                  <li data-bs-dismiss="offcanvas">
                  <Link to="/react_File" className='link' ><p>React</p></Link>
                  </li>
                  <li data-bs-dismiss="offcanvas">
                    <Link to="/angular_File" className='link' ><p>Angular</p></Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                    <Link to="/kotlin_File" className='link' ><p>Kotlin</p></Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                    <Link to="/sap_File" className='link' ><p>SAP</p></Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                    <Link to="/python_File" className='link' ><p>Python</p></Link>
                    </li>
                  </ul>
                </li>
                
                <li>
                
                  <a href="#" className="navbar-toggler nav-barmobile-list"
              onClick={()=>this.toggleServices('isHealthPoviderOpen')}>Healthcare Povider <span><i className="bi bi-chevron-down"></i></span></a>
                 
                  <ul className={`sub-menu ${this.state.isHealthPoviderOpen ? 'show' : ''}`} id='Healthcarenavbartext'>
                    <li data-bs-dismiss="offcanvas">
                  <Link to="/revenue_Cycle_File" className='link' ><p>Revenue Cycle Management</p></Link>
                  </li>
                  <li data-bs-dismiss="offcanvas">
                  <Link to="/coding_Health_File" className='link' ><p>Coding / Health Information Management (HIM)</p></Link>
                  </li>
                  </ul>
                </li>
                <li>
                
                  <a href="#" className="navbar-toggler nav-barmobile-list"
               onClick={()=>this.toggleServices('isHealthPayerOpen')}>Healthcare Payer <span><i className="bi bi-chevron-down"></i></span></a>
                 
                  <ul className={`sub-menu ${this.state.isHealthPayerOpen ? 'show' : ''}`} id='HealthcarPayerenavbartext'>
                    <li data-bs-dismiss="offcanvas">
                  <Link to="/medical_Coding_File" className='link' ><p>Medical Coding Services</p></Link>
                  </li>
                  <li data-bs-dismiss="offcanvas">
                    <Link to="/claims_Managmenet_File" className='link' ><p>Claims Management</p></Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                    <Link to="/member_Management_File" className='link' ><p>Member Management</p></Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                    <Link to="/network_Management_File" className='link' ><p>Provider Network Data Management</p></Link>
                    </li>
                    <li data-bs-dismiss="offcanvas">
                    <Link to="/valuesServices_File" className='link' ><p>Value Added Services</p></Link>
                    </li>
                  </ul>
                </li>
                <li data-bs-dismiss="offcanvas">
                <Link to="/contact_us" className='link' ><a href="contact.html">Contact us</a></Link>
                </li>
            </ul>
            <form className="d-flex mt-3" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>



         </div>
    );
  }
}

export default Navbar;
