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
          <Route exact path="Login" element={<Login />}>
          </Route>
          <Route exact path="Signup1" element={<Signup1 />}>
          </Route>
          <Route exact path="Forgotpassword" element={<Forgotpassword />}>
          </Route>
          <Route exact path="Home" element={<Home />}>
          </Route>
          <Route exact path="Userprofile" element={<Userprofile />}>
          </Route>
          <Route exact path="Setting" element={<Setting />}>
          </Route>
          <Route path="Donate" element={<Donate />}>
          </Route>
          <Route exact path="Donee" element={<Donee />}>
          </Route>
        </Routes>

    </div>
    </Router>
  )
}

export default App
