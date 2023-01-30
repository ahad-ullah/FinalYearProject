import React from 'react';
import * as Components from './../Style.js';
//import './Signup1.css';
import Footer from './Footer';
import vector from "./../images/signupimage.jpg" ;
import Googlelogin from './Googlelogin';
import Navbar from './Navbar.js';


function Signup1() {
    const [signIn, toggle] = React.useState(true);
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
                    <Components.Input type='text' placeholder='Name' />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Input type='password' placeholder='Confirm Password' />
                    <Components.Button style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)' , color:'white',}} >Sign Up</Components.Button>
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