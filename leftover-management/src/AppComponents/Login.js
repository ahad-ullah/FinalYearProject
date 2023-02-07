import React from 'react'
import './Login.css';
import { Link , useNavigate } from 'react-router-dom' ;
import Googlelogin from './Googlelogin';
import vector from "./../images/loginimg.jpg" ;
import Navbar from './Navbar';
import Footer from './Footer';
import  {useState} from 'react'
import {
  MDBContainer,
  
}
from 'mdb-react-ui-kit';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
    // const  SignUpfunction = (e) =>
    // {
    //     e.preventDefault();
    //     window.location.href='http://localhost:3000/?#/SignUp1' ;
    // }

    // const  Loginfunction = (e) =>
    // {
      
    //   console.log(email,password)
    //   axios.post("https://localhost:7195/api/Login/Login", {
    //     email: email,
    //     password : password
    //   }).then(result=>{
    //     debugger;
    //     console.log(result.data)
    //     //alert('success')
    //     localStorage.setItem('token',result.data)
    //     navigate('/Donee')
    //   }).catch(error =>{
    //     console.log(error)
    //     alert('Please Enter Correct User name and Password')
    //   })
      
    // }

   {/* const  handleApi = (e) =>
    {
        console.log(Email,Password)
        axios.post("https://reqres.in/api/login", Email,Password).then(result=>{
          console.log(result.data)
          alert('success')
          localStorage.setItem('token',result.data.token)
        })

    } */}
  return (
     <>
   <Navbar/>
   {/* </Navbar> */}
   
    <div className='row'  style={{ backgroundColor:'#EDEDED' }}>


    <div className="col-6 d-7 px-0 d-sm-block "  style={{ backgroundColor:'#EDEDED' }}>
    <img src={vector} alt="LOGIN-BACKGROUND" height="650" style={{ width: '100%' , objectFit: 'cover' }}/>
  </div>
  
    <MDBContainer className="mr-5 mt-5 text-center"  style={{width :'40% '}}>
    <h3 style={{alignContent:'center'}}>Login</h3>

    <p>Please login to your account</p>
    <form >
<div className="form-outline">
  <input type="email" id="Email" className="form-control mb-4" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" required />
</div>

<div className="form-outline">
  <input type="password" id="Password" className="form-control mb-4" value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Password" required/>
</div>


<div className="text-center">
<button  name="Login" type="submit" style={{border:'none' , color:'white' ,background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' ,width: '200px', height:'40px'}}>Login</button>

                    <br></br>
                    <Link className="nav-link px-3 me-2 mt-3 mb-3"  to="/Forgotpassword">Forgot password? </Link>
                  
                    <Googlelogin buttonText="Login with Google"></Googlelogin> 
</div>
    
</form>
<div className="d-flex align-items-center justify-content-center">
                    <p className="mb-2 me-2 mt-4 ">Don't have an account?</p>
                    </div>
                    <div className="text-center">
                    <button type="button" style={{ width: '50%'}} className="btn btn-outline-danger">Create new</button>
                    </div>

</MDBContainer>

   

    </div>
   <Footer></Footer>
    </>
  ) ;
}

export default Login;
