/*{import './App.css';
import Login from './AppComponents/Login';
import Signup1 from './AppComponents/Signup1';
import AboutUs from './AppComponents/AboutUs';
import Home from './AppComponents/Home';
import Forgotpassword from './AppComponents/Forgotpassword';
import React , {useState} from 'react'
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from './AppComponents/Dashboard';
import Footer from './AppComponents/Footer';
import Userprofile from './AppComponents/Userprofile';
import Sidebar from './AppComponents/Sidebar';
import Setting from './AppComponents/Setting';




function App() {
  
  return (
    <div className="App">
    <Router>
         <Routes>
          <Route  exact path="/"  element={<Home/>}>
         </Route> 
          <Route  exact path="/Login"  element={<Login/>}>
         </Route> 
         <Route exact  path="/Signup1" element={<Signup1/>}>  
          </Route> 
          <Route exact  path="/AboutUs" element={<AboutUs/>}>  
          </Route> 
          <Route exact  path="/Forgotpassword" element={<Forgotpassword/>}>  
          </Route>  
          <Route exact  path="/Dashboard" element={<Dashboard/>}>  
          </Route>
          <Route exact  path="/Home" element={<Home/>}>  
          </Route>
          <Route exact  path="/Userprofile" element={<Userprofile/>}>  
          </Route>
          <Route exact  path="/Sidebar" element={<Sidebar />}>  
          </Route>
          <Route exact  path="/Setting" element={<Setting/>}>  
          </Route>
          </Routes>
        </Router>
     
    

 
  
    </div>
  );
}

export default App; */

// import './App.css';
// import Login from './AppComponents/Login';
// import Signup1 from './AppComponents/Signup1';
// import Home from './AppComponents/Home';
// import Multiform from './AppComponents/Multiform';
// import Forgotpassword from './AppComponents/Forgotpassword';
// import React , {useState} from 'react'
// import {
//   HashRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
// import Donate from './AppComponents/Donate';
// import Userprofile from './AppComponents/Userprofile';
// import Setting from './AppComponents/Setting';
// import Donee from './AppComponents/Donee';

import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Login from './AppComponents/Login';
import Signup1 from './AppComponents/Signup1';
import Home from './AppComponents/Home';
import Multiform from './AppComponents/Multiform';
import Forgotpassword from './AppComponents/Forgotpassword';
import Donate from './AppComponents/Donate';
import Userprofile from './AppComponents/Userprofile';
import Setting from './AppComponents/Setting';
import Donee from './AppComponents/Donee';
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route exact path="/Login" element={<Login />}>
          </Route>
          <Route exact path="/Signup1" element={<Signup1 />}>
          </Route>
          <Route exact path="/Forgotpassword" element={<Forgotpassword />}>
          </Route>
          <Route exact path="/Home" element={<Home />}>
          </Route>
          <Route exact path="/Userprofile" element={<Userprofile />}>
          </Route>
          <Route exact path="/Setting" element={<Setting />}>
          </Route>
          <Route exact path="/Donate" element={<Donate />}>
          </Route>
          <Route exact path="/Donee" element={<Donee />}>
          </Route>
          <Route exact path="/Multiform" element={<Multiform />}>
          </Route>
        </Routes>
      </div>
    </Router>

  )
}

export default App
