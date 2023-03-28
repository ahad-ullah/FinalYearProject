import React from "react";
import ".././css/bootstrap.min.css";
import ".././css/bootstrap-icons.css";
import ".././css/templatemo-kind-heart-charity.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import "./phone.css";
import { useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput, {
  isValidPhoneNumber,
  isPossiblePhoneNumber,
} from "react-phone-number-input";
import { useEffect, useState } from "react";
function Donate({handleNext}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      
    }
  }, []);

  const [value, setValue] = useState();

  const validate = (e) => {
    if (isValidPhoneNumber(value) && isPossiblePhoneNumber(value)) {
     
      handleNext();
      return true;
    } else {
      e.preventDefault();
      alert("Please Enter Valid Number");
      return false;
    }
  };
  return (
    <>
      <div  style={{marginTop:'50px',marginLeft:'50px'}}>
       
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 mx-auto">
              <div className="col-lg-6 col-12 mb-4">
                <input
                 
                  type="text"
                  name="volunteer-name"
                  id="volunteer-name"
                  className="form-control"
                  placeholder="First Name"
                  style={{width:'300px'}}
                  required
                />
              </div>

              <div className="col-lg-6 col-12 mb-4">
                <input
                  type="text"
                  name="volunteer-name"
                  id="volunteer-name"
                  className="form-control"
                  placeholder="Second Name"
                  style={{width:'300px'}}
                  required
                />
              </div>

              <div className="col-lg-6 col-12 mb-4">
                <input
                  type="email"
                  name="volunteer-email"
                  id="volunteer-email"
                  pattern="[^ @]*@[^ @]*"
                  className="form-control"
                  placeholder="Enter your Email"
                  style={{width:'300px'}}
                  required
                />
              </div>

              <div className="col-lg-6 col-12 mb-4">
                <input
                  type="text"
                  name="volunteer-subject"
                  id="volunteer-subject"
                  className="form-control"
                  placeholder="About food"
                  style={{width:'300px'}}
                  required
                />
              </div>

              <div className="col-lg-6 col-12  mb-4 " style={{borderColor:"rgb(151, 150, 150)" ,width:'300px'}}>
                <PhoneInput
                  className={"input-phone-number form-control"}
                  
                  placeholder="Enter phone number"
                  value={value}
                  
                  onChange={setValue}
                  required
                />
              </div>

              <textarea
                name="volunteer-message"
                rows="3"
                className="form-control"
                id="volunteer-message"

                placeholder="Comment (Optional)"
              ></textarea>

           <button type="button" onClick={validate} className="btn btn-outline-danger" style={{marginTop:'20px' , width:'150px'}}>
                Next
              </button> 
            </div>
          </div>
        </div>
        
        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.sticky.js"></script>
        <script src="js/counter.js"></script>
        <script src="js/custom.js"></script>
      </div>
    </>
  );
}

export default Donate;
