import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Software_development from './Software_development';
import Home from './Home'
import Web_development from './Web_development';
import Managed_it_Services from './Managed_it_services'
import It_Consultancy from './It_Consultancy';
import Cloud_Services from './Cloud_Services';
import Cyber_Security from './Cyber_Security';
import About_Us from './About_Us';
import Java_File from './Java_File';
import React_File from './React_File';
import Angular_File from './Angular_File';
import Kotlin_File from './Kotlin_File';
import SAP_File from './SAP_File';
import Python_File from './Python_File';
import Revenue_Cycle_Management_File from './Revenue_Cycle_Management_File';
import Coding_Health_Management_File from './Coding_Health_Management_File';
import Medical_Coding_Services_File from './Medical_Coding_Services_File';
import Claims_Management_File from './Claims_Management_File';
import Member_Management_File from './Member_Management_File';
import Network_Data_Management_File from './Network_Data_Management_File';
import Values_Services_File from './Values_Services_File';
import Contact_Us from './Contact_Us';
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route path='home' element={<Home/>}/>
          <Route path='/about_Us'  element={<About_Us/>}/>
          <Route path='/web_development'  element={<Web_development/>}/>
          <Route path='/managed_it_Services'  element={<Managed_it_Services/>}/>
          <Route path='/it_Consultancy' element={<It_Consultancy/>}/>
          <Route path='/cloud_Services' element={<Cloud_Services/>}/>
          <Route path='/cyber_Security' element={<Cyber_Security/>}/>
          <Route path='/software_development'  element={<Software_development />}/>
          <Route path='/java_File'  element={<Java_File/>}/>
          <Route path='/react_File'  element={<React_File/>}/>
          <Route path='/angular_File'  element={<Angular_File/>}/>
          <Route path='/kotlin_File'  element={<Kotlin_File/>}/>
          <Route path='/sap_File'  element={<SAP_File/>}/>
          <Route path='/python_File'  element={<Python_File/>}/>
          <Route path='/revenue_cycle_File'  element={<Revenue_Cycle_Management_File/>}/>
          <Route path='/coding_Health_File'  element={<Coding_Health_Management_File/>}/>
          <Route path='/medical_Coding_File'  element={<Medical_Coding_Services_File/>}/>
          <Route path='/claims_Managmenet_File'  element={<Claims_Management_File/>}/>
          <Route path='/member_Management_File'  element={<Member_Management_File/>}/>
          <Route path='/network_Management_File'  element={<Network_Data_Management_File/>}/>
          <Route path='/valuesServices_File'  element={<Values_Services_File/>}/>
          <Route path='/contact_us'  element={<Contact_Us/>}/>
        </Routes>
       
       <Footer/>
      </BrowserRouter>
     
      
    </div>
  );
}

export default App;
