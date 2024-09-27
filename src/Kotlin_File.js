import React, { Component } from 'react'
import KotlinImage from './Images/Home-Techno-kotlin.jpg';
import mainImage from './Images/mainimage.avif';
import {Link,useLocation} from 'react-router-dom'
const Kotlin_File = () => {
  const location = useLocation();


  const getBackgroundStyle = () => {
    const blueBgRoutes = [
      '/java_File',
      '/react_File',
      '/angular_File',
      '/kotlin_File',
      '/sap_File',
      '/python_File',
    ];
    return blueBgRoutes.includes(location.pathname) ? { backgroundColor: 'orangered',color:'white' } : {};
  };
    return (
      <div>
        <div className="service-list">
      <div className="image-container">
        <img src={mainImage} alt="main image" className="main-image" />
        <div className="mainservicecontent">
          <h1>Kotlin</h1>
          <p>
            HOME - <span className="course-content">Kotlin</span>
          </p>
        </div>
        <div className="mainserviceimage">
          <p>
          <Link to="/home" className='link homeanchor'>HOME</Link> - Kotlin
          </p>
        </div>
      </div>
      <div className="serice-content">
        <div className="service-content-div">
          <div className="web-image">
            <img src={KotlinImage} alt="Java" />
          </div>
          <div className="serv-content-item">
  <h1>Kotlin</h1>
  <p>
  Kotlin is a multiplatform, statically typed, general-purpose programming language. Currently, as of version 1.7 , it supports compilation to the following platforms. JVM (Java Virtual Machine) JS (JavaScript) Native (native binaries for various architectures)
  </p>
  <p>
  Kotlin is a general purpose, free, open source, statically typed “pragmatic” programming language initially designed for the JVM (Java Virtual Machine) and Android, and combines object-oriented and functional programming features. It is focused on interoperability, safety, clarity, and tooling support.
  </p>
  <p>
  Kotlin is a modern statically typed programming language used by over 60% of professional Android developers that helps boost productivity, developer satisfaction, and code safety.
  </p>
  <p>Kotlin is a new, expressive, general-purpose programming language powered by the same virtual machine technology that powers Java. Since Kotlin compiles to the JVM bytecode, it can be used side by side with Java, and it does not come with a performance overhead</p>
</div>

        </div>
        <div className="service-list-items">
          <div className="servicesname">
            <h3>Technologies</h3>
          </div>
          <Link to="/java_File" className='link serviceitems'><p>Java</p></Link>
                    <Link to="/react_File" className='link serviceitems'><p>React</p></Link>
                    <Link to="/angular_File" className='link serviceitems'><p>Angular</p></Link>
                    <Link to="/kotlin_File" className='link serviceitems'><p style={getBackgroundStyle()}>Kotlin</p></Link>
                    <Link to="/sap_File" className='link serviceitems'><p>SAP</p></Link>
                    <Link to="/python_File" className='link serviceitems'><p>Python</p></Link>

        </div>
      </div>
    </div>
      </div>
    )
  }
export default Kotlin_File