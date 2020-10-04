import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import GoogleLogin from "react-google-login";
import axios from "axios";
import GoogleButton from "react-google-button";
import UserContext from "../../context/UserContext";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import photo from "./photo.png"; // Tell webpack this JS file uses this image

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Cardroot: {
    minWidth: "40%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}));

const Login = (props) => {
  const classes = useStyles();

  const userContext = useContext(UserContext);

  const responseSuccessGoogle = async (response) => {
    const data = response.profileObj;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios.post("http://localhost:5000/api/users", data, config).then((res) => {
      const resdata = res.data;
      localStorage.setItem("token", resdata.token);
      userContext.loadUser();
      console.log(res.data.user)
      props.history.push('/')
    });
  };

  const responseFailureGoogle = (response) => {};

  const { email, name } = userContext.user;

  return (
  
    <div className={classes.root}>
      <Grid container direction="row" alignItems="center" justify="center">
        <Card
          className={classes.Cardroot}
          style={{ marginTop: "7%",marginRight:'19%', marginLeft:'19%', height: "65vh" }}>
          <CardContent>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center">
              <Grid item xs={12} style={{marginLeft:'39%', fontFamily:'Roboto'}}>
                <h1>Login to Baymax !!</h1>
                <br/>
              </Grid>
              <Grid item xs={8}>
                <img src={photo} alt="asdasd" style={{ width: "100%" }} />
              </Grid>
              <Grid item xs={4}>
                <div style={{ marginBottom: "17%", marginLeft: "15%" }}>
                  <GoogleLogin
                    clientId="209628623250-5t2ag37vko08hjibv4dohf3l0dpeq67p.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <GoogleButton
                        onClick={renderProps.onClick}></GoogleButton>
                    )}
                    buttonText="Login"
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseFailureGoogle}
                  />
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <br/>
      </Grid>
    </div>
  );
};

export default Login;
