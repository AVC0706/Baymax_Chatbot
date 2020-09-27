import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import GoogleButton from 'react-google-button'


const  Login= () => {
  const [user, setUser] = useState({});
  const responseSuccessGoogle = (response) => {
    console.log(response);
    const data = response.profileObj;
    setUser(data);
  };

  const responseFailureGoogle = (response) => {};

  console.log(user);

  const { email, givenName, imageUrl, name } = user;

  return (
    <div >
      <div >
        <h1>Login with Google</h1>
        <div >
        {/* <GoogleLogin
          clientId='209628623250-5t2ag37vko08hjibv4dohf3l0dpeq67p.apps.googleusercontent.com'
          onSuccess={responseSuccessGoogle}
          onFailure={responseFailureGoogle}
          cookiePolicy={'single_host_origin'}
          style={{width:'120%' }}
        >
          <GoogleButton></GoogleButton>
          </GoogleLogin> */}
          <br/><br/>
          <GoogleLogin
    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
    render={renderProps => (
      <GoogleButton onClick={renderProps.onClick} ></GoogleButton>
    )}
    buttonText="Login"
    onSuccess={responseSuccessGoogle}
    onFailure={responseFailureGoogle}
/>

        </div>
        <h2>User Details:</h2>
        <div>
          <h3>
            User Image: <img src={imageUrl} alt={name}></img>
          </h3>
          <h3>Name: {name}</h3>
          <h3>Email: {email}</h3>
          <h3>UserName: {givenName}</h3>
        </div>
      </div>
    </div>
  );
}

export default Login;
