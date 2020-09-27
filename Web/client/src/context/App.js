import React, { useState } from 'react';
import './App.css';
import GoogleLogin from 'react-google-login';
import axios from 'axios';

function App() {
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
    <div className='App'>
      <div className='col-md-6 offset-md-3 text-center'>
        <h1>Login with Google</h1>
        <GoogleLogin
          clientId='209628623250-5t2ag37vko08hjibv4dohf3l0dpeq67p.apps.googleusercontent.com'
          buttonText='Login'
          onSuccess={responseSuccessGoogle}
          onFailure={responseFailureGoogle}
          cookiePolicy={'single_host_origin'}
        />
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

export default App;
