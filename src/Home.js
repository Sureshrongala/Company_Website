import React, { Component } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aboutimage from './Images/Home-company-image.jpg'
import javaimage from './Images/Home-Techno-java.jpg'
import reactimage from './Images/Home-Techno-react.jpg'
import angularimage from './Images/Home-Techno-angular.jpg'
import pythonimage from './Images/Home-Techno-python.jpg'
import kotlinimage from './Images/Home-Techno-kotlin.jpg'
import sapimage from './Images/Home-Techno-sap.jpg'
import Clientimage from './Images/Client-images-Home.jpeg'
export default class Home extends Component {
  
  render() {
    

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
    };
    var settings1 = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay:true,
      autoplaySpeed:3000,
      responsive:[
        {
          breakpoint:768,
          settings:{
            slidesToShow:1,
            slidesToScroll:1
          }
        }
        
      ]
    };
    var settings2 = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:3000
    };
    return (
      <div>
          <div className='HomeImagescarel'>
     <Slider {...settings}>
        <div className="HomeSlider1">
                <h6>Spy D Technology</h6>
                <h2>web Development</h2>
                <Link to="/web_development" className='link'><button>Read More</button></Link>
         </div>
        <div className="HomeSlider2">
               <h6>Spy D Technology</h6>
                <h2>React Development</h2>
                <Link to="/react_File" className='link' ><button>Read More</button></Link>
         </div>
         </Slider>
     </div>
<div className='Home-about-company'>
   <div className='Home-about-company-image'>
    <img src={Aboutimage} alt='About Spy Dtech'/>
   </div>
   <div className='Home-about-company-content'>
     <h6>ABOUT OUR COMPANY</h6>
     <h2>Spy D <span>Technology</span></h2>
     <p>At Spy D Tech, we specialize in providing innovative software consulting and IT solutions designed to meet the unique challenges of modern businesses. With our experienced team, we deliver exceptional value by combining technological expertise and business acumen.</p>
     <div className='Home-about-list'>
    
       <div>
       <i className="bi bi-lightbulb" style={{ marginRight: '8px' }}></i>
       </div>
       <div>
        <h2>Our Mission</h2>
        <p>We aim to empower businesses by delivering technology solutions that enhance efficiency, drive growth, and fuel innovation. Every project is approached with a client-centric mindset, ensuring that we help our clients achieve their goals.</p>
       </div>
     </div>
     <div className='Home-about-list'>
    
       <div>
       <i className="bi bi-globe" style={{ marginRight: '8px' }}></i>
       </div>
       <div>
        <h2>Our Vision</h2>
        <p>Our vision is to be a leading provider of software consulting and IT services, known for delivering exceptional results, fostering innovation, and building lasting partnerships with businesses worldwide.</p>
       </div>
     </div>
     
   </div>
   
</div>
<div className="our-services-section py-5">
  <div className="container">
    <h2 className="text-center mb-4">Our Services</h2>
    <p className="text-center lead mb-5">
      We offer a wide range of IT and software consulting services designed to meet the unique needs of your business.
    </p>
    <div className="row">
      <div className="col-md-4 text-center">
        <i className="bi bi-display display-4"></i>
        <h4 className="mt-3">Web Development</h4>
        <p>
          Build powerful, scalable websites and web applications with our expert development team.
        </p>
      </div>
      <div className="col-md-4 text-center">
        <i className="bi bi-cloud-arrow-up-fill display-4"></i>
        <h4 className="mt-3">Cloud Solutions</h4>
        <p>
          We provide customized cloud services, helping businesses migrate, manage, and optimize cloud operations.
        </p>
      </div>
      <div className="col-md-4 text-center">
        <i className="bi bi-shield-lock-fill display-4"></i>
        <h4 className="mt-3">Cybersecurity</h4>
        <p>
          Safeguard your business with advanced cybersecurity measures tailored to protect your sensitive data.
        </p>
      </div>
    </div>

    <div className="row mt-5">
      <div className="col-md-4 text-center">
        <i className="bi bi-laptop-fill display-4"></i>
        <h4 className="mt-3">Software Development</h4>
        <p>
          Deliver custom software applications that solve real business problems and enhance operations.
        </p>
      </div>
      <div className="col-md-4 text-center">
        <i className="bi bi-stack display-4"></i>
        <h4 className="mt-3">IT Consultancy</h4>
        <p>
          Leverage expert IT advice to streamline your business processes, optimize systems, and reduce costs.
        </p>
      </div>
      <div className="col-md-4 text-center">
        <i className="bi bi-globe display-4"></i>
        <h4 className="mt-3">Managed IT Services</h4>
        <p>
          We offer end-to-end managed IT services that ensure your systems are always operational and secure.
        </p>
      </div>
    </div>
  </div>
</div>
                     {/* Our Technology */}
                     <div className='Technologies-Main-container'>
                     <Slider {...settings1}>
  <div className='Technology-container'>
  
    <img src={javaimage} alt='Java programming language' />
    <div className='Technology-content'>
      <h3>Java</h3>
      <p>Java is a versatile programming language widely used for building enterprise-scale applications. Our skilled Java developers excel in delivering robust solutions.</p>
    </div>
  </div>
  <div className='Technology-container'>
    <img src={reactimage} alt='React JavaScript library' />
    <div className='Technology-content'>
      <h3>React</h3>
      <p>React is a powerful library for building user interfaces. Our React experts create dynamic and responsive web applications that enhance user experience.</p>
    </div>
  </div>
  <div className='Technology-container'>
    <img src={angularimage} alt='Angular framework' />
    <div className='Technology-content'>
      <h3>Angular</h3>
      <p>Angular is a comprehensive framework for building single-page applications. Our team specializes in developing scalable and maintainable Angular solutions.</p>
    </div>
  </div>
  <div className='Technology-container'>
    <img src={pythonimage} alt='Python programming language' />
    <div className='Technology-content'>
      <h3>Python</h3>
      <p>Python is known for its simplicity and readability. We leverage Python for data analysis, web development, and automation tasks, ensuring efficient solutions.</p>
    </div>
  </div>
  <div className='Technology-container'>
    <img src={kotlinimage} alt='Kotlin programming language' />
    <div className='Technology-content'>
      <h3>Kotlin</h3>
      <p>Kotlin is a modern language that enhances Android development. Our Kotlin developers create seamless mobile applications that meet your business needs.</p>
    </div>
  </div>
  <div className='Technology-container'>
    <img src={sapimage} alt='SAP solutions' />
    <div className='Technology-content'>
      <h3>SAP</h3>
      <p>SAP provides comprehensive enterprise resource planning solutions. Our SAP consultants help businesses optimize their processes and achieve operational excellence.</p>
    </div>
  </div>
  </Slider>
</div>
<div className='Client-section'>
<div className="testimonials-section py-5">
  <div className="container">
    <h2 className="text-center mb-4">What Our <span className='client-section-client'>Clients</span> Say</h2>
    <Slider {...settings2}>
      <div className="testimonial-card">
        <p>"Spy D Tech has been instrumental in helping our business scale by providing top-notch web development and IT services."</p>
        <h5>- Sathish, CEO of SpyDtech</h5>
      </div>
      <div className="testimonial-card">
        <p>"Their attention to detail and ability to deliver on time has made them a trusted partner in our digital transformation."</p>
        <h5>- Suresh Swamy, Google Employee</h5>
      </div>
    </Slider>
  </div>
</div>
<div className='ClientImages'>
  <img src={Clientimage}/>
</div>
</div>
  
      </div>
    )
  }
}
