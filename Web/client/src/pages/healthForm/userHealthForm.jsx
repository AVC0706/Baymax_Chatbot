import React, { useState, useContext, useEffect } from 'react';
import UserContext from '../../context/UserContext';
import axios from 'axios';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />

      <div className={classes.paper}>
        <form onSubmit={onSubmit} className={classes.form} noValidate>
          <h2>Health Information</h2>

          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            autoFocus
            type='text'
            name='age'
            value={age}
            onChange={onChange}
            label='Enter Age'
            required
          ></TextField>

          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            autoFocus
            type='text'
            name='height'
            value={height}
            label='Enter Height'
            onChange={onChange}
          ></TextField>

          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            autoFocus
            type='text'
            name='gender'
            value={gender}
            label='Enter Gender'
            onChange={onChange}
          ></TextField>

          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            autoFocus
            type='text'
            name='weight'
            value={weight}
            label='Enter Weight'
            onChange={onChange}
          ></TextField>

          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            autoFocus
            type='text'
            name='healthissue'
            value={healthissue}
            label='Enter Health Issues (if any)'
            onChange={onChange}
          ></TextField>

          <TextField
            variant='outlined'
            margin='normal'
            fullWidth
            autoFocus
            type='text'
            name='Allergies'
            value={allergies}
            label='Enter Allergies'
            onChange={onChange}
          ></TextField>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default HealthForm;
