import React from "react";
import { Link } from 'react-router-dom' ;

function Navbarweb() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Dashboard
                </a>
              </li>
            </ul>

          

            <div className="d-flex align-items-center">
              <Link className="nav-link px-3 me-2"  to="/Login">
                Login
              </Link>
              <Link  className="nav-link px-3 me-2"  to="/SignUp1">
                Sign up for free
              </Link>
              <Link  className="nav-link px-3 me-2"  to="/AboutUs">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbarweb;
