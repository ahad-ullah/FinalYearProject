import React from 'react';
import * as Components from './../Style.js';
import './Signup1.css';


function Signup1() {
    const [signIn, toggle] = React.useState(true);
    return( 
        <Components.Container  > 
            <Components.SignUpContainer signinIn={signIn}>
                <Components.Form>
                    <Components.Title>Sign Up as Donor</Components.Title>
                    <Components.Input type='text' placeholder='Name' />
                    <Components.Input type='email' placeholder='Email' />
                    <Components.Input type='password' placeholder='Password' />
                    <Components.Input type='password' placeholder='Confirm Password' />
                    <Components.Button style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',}} >Sign Up</Components.Button>
                </Components.Form>
            </Components.SignUpContainer>

            <Components.SignInContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Sign Up as Recipient</Components.Title>
                     <Components.Input type='text' placeholder='Registration Number' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Input type='password' placeholder='Confirm Password' />
                     <Components.Button style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',}}>Sign Up</Components.Button>
                 </Components.Form>
            </Components.SignInContainer>

            <Components.OverlayContainer signinIn={signIn}>
                <Components.Overlay signinIn={signIn}>

                <Components.LeftOverlayPanel style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',}} signinIn={signIn}>
                    <Components.Title>Sign Up as Donor Recipient</Components.Title>
                    <Components.Paragraph>
                        To keep connected with us please login with your personal info
                    </Components.Paragraph>
                    <Components.GhostButton  className="btn btn-light" onClick={() => toggle(true)}>
                        Sign Up
                    </Components.GhostButton>
                    </Components.LeftOverlayPanel>

                    <Components.RightOverlayPanel  style={{background: 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',}} signinIn={signIn}>
                      <Components.Title>Join us as a Donor</Components.Title>
                      <Components.Paragraph>
                          Enter Your personal details and start journey with us
                      </Components.Paragraph>
                          <Components.GhostButton className="btn btn-light" onClick={() => toggle(false)}>
                              Sigin Up
                          </Components.GhostButton> 
                    </Components.RightOverlayPanel>

                </Components.Overlay>
            </Components.OverlayContainer>

        </Components.Container>
    )
        
}

export default Signup1

