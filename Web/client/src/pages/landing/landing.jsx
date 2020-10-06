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

const Landing = (props) => {
    const classes = useStyles();


  return (
  
    <div className={classes.root}>
      <Grid container direction="row" alignItems="center" justify="center">
        <Card
          className={classes.Cardroot}
          style={{ marginTop: "5%",marginRight:'19%', marginLeft:'19%', height: "70vh" }}>
          <CardContent>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="center">
              <Grid item xs={12} style={{marginLeft:'17%', fontFamily:'Roboto'}}>
                <h2>Hello, I am Bay-max your personal healthcare assistant !!</h2>
                <br/>
              </Grid>
              <Grid item xs={12}>
                <img src={photo} alt="asdasd" style={{ width: "75%", marginLeft:'17%', }} />
              </Grid>
            
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Landing;
