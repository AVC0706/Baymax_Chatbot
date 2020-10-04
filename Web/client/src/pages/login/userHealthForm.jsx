import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';

const HealthForm = () => {
  const userContext = useContext(UserContext);
  const { user, setUser } = userContext;

  // useEffect(() => {
  //   setUser({
  //     age: '',
  //     height: '',
  //     weight: '',
  //     healthissue: '',
  //     allergies: '',
  //   });
  // }, [userContext, user]);

  const { age, healthissue, height, weight, allergies, gender, id } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    axios
      .put(`http://localhost:5000/api/users/${id}`, user, config)
      .then((res) => {
        const data = res.data;
        setUser({ data });
        console.log(data);
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Health Information</h2>
      <label>Enter Age</label>
      <input
        type='text'
        name='age'
        value={age}
        onChange={onChange}
        required
      ></input>
      <label>Enter Height</label>
      <input
        type='text'
        name='height'
        value={height}
        onChange={onChange}
      ></input>
      <label>Enter Height</label>
      <input
        type='text'
        name='gender'
        value={gender}
        onChange={onChange}
      ></input>
      <label>Enter Weight</label>
      <input
        type='text'
        name='weight'
        value={weight}
        onChange={onChange}
      ></input>
      <label>Enter Health Issues (if any)</label>
      <input
        type='text'
        name='healthissue'
        value={healthissue}
        onChange={onChange}
      ></input>
      <label>Enter Allergies (if any)</label>
      <input
        type='text'
        name='Allergies'
        value={allergies}
        onChange={onChange}
      ></input>
      <input type='submit'></input>
    </form>
  );
};

export default HealthForm;
