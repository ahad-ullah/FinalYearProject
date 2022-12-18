import React from 'react'
import { Link } from 'react-router-dom' ;


function Forgotpassword() {
  return (
    <div>
        <div className="card text-center" style={{ width: '400px',margin : ' 90px auto',}}>
    <div className="card-header h5 text-white bg-primary" style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',}}>Password Reset</div>
    <div className="card-body px-5">
        <p className="card-text py-2">
            Enter your email address and we'll send you an email with instructions to reset your password.
        </p>
        <div className="form-outline">
            <input type="email" id="typeEmail" className="form-control my-3" placeholder="Enter Email"/>
        </div>
        <a href="#" className="btn btn-primary w-100" style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',}}>Reset password</a>
        <div className="d-flex justify-content-between mt-4">
        <Link  to="/Signup1">Register</Link>
        <Link  to="/login">Login</Link>
        </div>
    </div>
</div>
      
    </div>
  )
}

export default Forgotpassword
