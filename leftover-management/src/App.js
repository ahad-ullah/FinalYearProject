
import './App.css';
import Login from './AppComponents/Login';
import Signup1 from './AppComponents/Signup1';
import Navbarweb from './AppComponents/Navbarweb';
import Footer from './AppComponents/Footer';
import AboutUs from './AppComponents/AboutUs';
import Forgotpassword from './AppComponents/Forgotpassword';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Router>
      <Navbarweb/>
      <Routes>
          <Route  exact path="/"  element={<Login/>}>
         </Route> 
          <Route  exact path="/Login"  element={<Login/>}>
         </Route> 
         <Route exact  path="/Signup1" element={<Signup1/>}>  
          </Route> 
          <Route exact  path="/AboutUs" element={<AboutUs/>}>  
          </Route> 
          <Route exact  path="/Forgotpassword" element={<Forgotpassword/>}>  
          </Route> 
        </Routes>
        </Router>
     
     <Footer/> 
     
    </div>
  );
}

export default App;