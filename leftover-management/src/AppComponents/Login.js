import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom' ;


function Login() {
    const  SignUpfunction = (e) =>
    {
        e.preventDefault();
        window.location.href='http://localhost:3000/?#/SignUp1' ;
    }
  return (
    <>
      <section className="mt-5 gradient-form" style={{ backgroundColor: '#eee' ,}}>
  <div className="container py-2">
    <div className="row d-flex justify-content-center align-items-center">
      <div className="col-xl-8">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body mx-md-5">

                <div className="text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp" style={{ width: '150px' , }}/>
                  <h4 className="">We are The Lotus Team</h4>
                </div>

                <form>
                  <p>Please login to your account</p>

                  <div className="form-outline">
                    <input type="email" id="Email" className="form-control mb-4"  placeholder="Email address" />
                  </div>

                  <div className="form-outline">
                    <input type="password" id="Password" className="form-control mb-4" placeholder="Password"/>
                  </div>

                  <div className="text-center">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 form-control" type="button">Log in</button>
                    <br></br>
                    <Link className="nav-link px-3 me-2"  to="/Forgotpassword">Forgot password? </Link>
                  </div>

                  <div className="d-flex align-items-center justify-content-center">
                    <p className="mb-2 me-2 mt-4 ">Don't have an account?</p>
                    <button type="button" onClick={SignUpfunction} className="btn btn-outline-danger mt-4 mb-4">Create new</button>
                  </div>

                </form>

              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 p-md-5 mx-md-4">
                <h4 className="">We are more than just a company</h4>
                <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  ) ;
}

export default Login ;
