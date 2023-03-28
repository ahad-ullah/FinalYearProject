import React from "react";
import vector from "./../images/donee.jpg";
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
function Donee() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const [value, setValue] = useState();

  const validate = (e) => {
    if (isValidPhoneNumber(value) && isPossiblePhoneNumber(value)) {
      navigate("/Donate");
      return true;
    } else {
      e.preventDefault();
      alert("Please Enter Valid Number");
      return false;
    }
  };

  return (
    <>
      <div>
        <Navbar></Navbar>
        <section className="volunteer-section section-padding" id="section_4">
          <Sidebar></Sidebar>

          <div className="">
            <div className="row">
              <div className="col-lg-6 col-12">
                <h2 className="text-white mb-4" style={{ marginLeft: "120px" }}>
                  {" "}
                  Donor Recipient
                </h2>

                <form
                  onSubmit={validate}
                  className="custom-form volunteer-form mb-5 mb-lg-0 "
                  style={{ marginLeft: "120px" }}
                  action="#"
                  method="post"
                  role="form"
                >
                  <h3 className="mb-4">Become a Donee today</h3>

                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <input
                        type="text"
                        name="volunteer-name"
                        id="volunteer-name"
                        className="form-control"
                        placeholder="First Name"
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <input
                        type="email"
                        name="volunteer-email"
                        id="volunteer-email"
                        pattern="[^ @]*@[^ @]*"
                        className="form-control"
                        placeholder="Enter your Email"
                        required
                      />
                    </div>

                    <div className="col-lg-6 col-12">
                      <input
                        type="text"
                        name="volunteer-subject"
                        id="volunteer-subject"
                        className="form-control"
                        placeholder="About food required"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-12  mb-4 ">
                    <PhoneInput
                      className={"input-phone-number"}
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

                  <button type="submit" className="form-control">
                    Submit
                  </button>
                </form>
              </div>

              <div className="col-lg-6 col-12">
                <img
                  src={vector}
                  className="volunteer-image img-fluid"
                  alt=""
                />

                <div className="custom-block-body text-center">
                  <h4 className="text-white mt-lg-3 mb-lg-3">About Donee</h4>

                  <p className="text-white">
                    We preferred donee to be a registered Ngo for more validity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer></Footer>

        <script src="js/jquery.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.sticky.js"></script>
        <script src="js/counter.js"></script>
        <script src="js/custom.js"></script>
      </div>
    </>
  );
}

export default Donee;
