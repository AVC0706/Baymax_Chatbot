import React, { useState, useContext } from 'react';
//import './App.css';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import UserContext from '../../context/UserContext';

const Login = () => {
  const userContext = useContext(UserContext);

  const responseSuccessGoogle = async (response) => {
    const data = response.profileObj;

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios.post('http://localhost:5000/api/users', data, config).then((res) => {
      const resdata = res.data;
      localStorage.setItem('token', resdata.token);
      userContext.loadUser();
      console.log(resdata);
    });
  };

  const responseFailureGoogle = (response) => {};

  const { email, name } = userContext.user;

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
          <h3>Name: {name}</h3>
          <h3>Email: {email}</h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
