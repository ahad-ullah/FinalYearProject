import React from 'react';
import * as Components from './../Style.js';
//import './Signup1.css';
import Footer from './Footer';
import vector from "./../images/signupimage.jpg" ;
import Googlelogin from './Googlelogin';
import Navbar from './Navbar.js';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


function Signup1() {
    const [signIn, toggle] = React.useState(true);
    const [email,setEmail] = React.useState("");
    const [name,setName] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [confirmPassword,setConfirmPassword] = React.useState("");

    const signUp = ()=>{
        const data = {
            email:email,
            password:password,
            fullName:name
        };
        const url = 'https://localhost:7195/api/Accounts/RegisterUser';
        debugger;
        axios.post(url,data).then(result=>{
            alert(result.data);
          }).catch(error=>{
            console.log(error);
          });
    }
    return(
        <>
        
        <div className="App mt-0" style={{backgroundImage: `url(${vector})`, backgroundPosition:'center', 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',}}>
           <Navbar></Navbar> 
        <Components.Container  className= "mb-5"> 
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title style={{color:'black',}}>Sign Up as Donor</Components.Title>
                    <Components.Input type='text' placeholder='Name' onChange={(e)=>{setName(e.target.value)}} />
                    <Components.Input type='email' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
                    <Components.Input type='password' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                    <Components.Input type='password' placeholder='Confirm Password' onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
                    <Components.Button style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' , color:'white',}} onClick={signUp} >Sign Up</Components.Button>
                    <div className='mt-3'> <Googlelogin ></Googlelogin> </div>
                    
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title style={{color:'black',}} >SignUp as Recipient</Components.Title>
                     <Components.Input type='text' placeholder='Registration Number' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Input type='password' placeholder='Confirm Password'  />
                     <Components.Button style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',}} >Sign Up</Components.Button>
                     <div className='mt-3'> <Googlelogin ></Googlelogin> </div>
                 </Components.Form>
            </Components.SignInContainer>
        

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                <Components.LeftOverlayPanel style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',}} signinIn={signIn}>
                    <Components.Title style={{color:'white',}}>Sign Up as Donor Recipient</Components.Title>
                    <Components.Paragraph style={{color:'white',}}>
                        To keep connected with us please login with your personal info
                    </Components.Paragraph>
                    <Components.GhostButton  className="btn-light" onClick={() => toggle(true)}>
                        Sign Up
                    </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel  style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',}} signinIn={signIn}>
                      <Components.Title style={{color:'white',}}>Join us as a Donor</Components.Title>
                      <Components.Paragraph style={{color:'white',}}>
                          Enter Your personal details and start journey with us
                      </Components.Paragraph>
                          <Components.GhostButton className="btn-light" onClick={() => toggle(false)}>
                              Sign Up 
                          </Components.GhostButton> 
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
        <Footer /> 
        </div>
        </>
    )
        
}

export default Signup1