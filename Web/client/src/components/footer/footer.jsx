import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: "5%",
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div style={{marginTop:'2%'}}>
      <br/>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h4" className={classes.title} style={{marginLeft:'40%'}}>
            @ Medical Chatbot Baymax
          </Typography>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}
