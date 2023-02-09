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
  let data =JSON.stringify( {
    Email: res.profileObj.email,
    UserName: res.profileObj.name,
    GoogleID: res.profileObj.googleId,
    passowrd:"ahad"
  });
  debugger;

var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://localhost:7195/api/Accounts/RegisterUser',
  headers: { 
    'accept': 'text/plain', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
}

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