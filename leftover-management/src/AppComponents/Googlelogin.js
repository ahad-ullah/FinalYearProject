import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import {useEffect} from 'react';
import axios from 'axios';

function Googlelogin() {
  const clientId = '921787099363-1l5mcm9ilemkfk74car62b4ssuid0ruc.apps.googleusercontent.com' 

useEffect(() => {
   const initClient = () => {
         gapi.client.init({
         clientId: clientId,
         scope: ''
       });
    };
    gapi.load('client:auth2', initClient);
});
const onSuccess = (res) => {
  console.log('success:', res);
  const data = {
    Email: res.profileObj.email,
    UserName: res.profileObj.name,
    GoogleID: res.profileObj.googleId
  };
  const url = 'https://localhost:7195/api/Signup/RegisterUser'
  axios.post(url,data).then(result=>{
    alert(result.data);
  });
  console.log(data);
};

const onFailure = (err) => {
    console.log('failed:', err);
}

  return (
    <div>
      <GoogleLogin
          clientId={clientId}
          buttonText="Continue with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={false}
          style={{color : "black"}}
      />
    </div>
  )
}

export default Googlelogin